/**
 * 天气数据服务（服务端）
 * ---------------------------------------------------------------
 * 在构建 / 服务端渲染阶段拉取景点所在地的实时天气、多日预报、
 * 海况与潮汐，并做两级缓存（进程内存 + 磁盘 .cache/weather.json），
 * 避免重复请求、降低外部依赖抖动对页面的影响。
 *
 * 网络异常时依次回退：内存缓存 → 磁盘陈旧缓存 → null（组件优雅降级）。
 *
 * 说明：原始响应 → 统一结构的转换、指标计算与建议规则分别放在
 * weather-parse.ts / weather-advice.ts，浏览器端刷新时复用同一份实现。
 */
import fs from 'node:fs';
import path from 'node:path';
import { forecastUrl, marineUrl } from './weather-api';
import { normalizeForecast } from './weather-parse';
import type { WeatherData } from './weather-types';

const TTL_MS = 30 * 60 * 1000;
const TIMEOUT_MS = 8000;

/** 磁盘缓存结构版本：结构变更时自增，旧缓存自动失效 */
const CACHE_VERSION = 2;

const CACHE_DIR = path.join(process.cwd(), '.cache');
const CACHE_FILE = path.join(CACHE_DIR, 'weather.json');

export { WEATHER_TZ, forecastUrl, marineUrl } from './weather-api';

export type {
  CurrentWeather,
  DailyWeather,
  HourlyWeather,
  MarineWeather,
  SeaLevelPoint,
  TideEvent,
  WeatherData,
} from './weather-types';

export { WMO, describe, beaufort, worstCode, severity } from './wmo';
export { buildMetrics, selectAdvice } from './weather-advice';
export type { AdviceItem, AdviceCategory, Metrics } from './weather-advice';

/* ── 缓存读写 ─────────────────────────────────────────────── */
let memory: { at: number; data: WeatherData } | null = null;

function readDisk(): { at: number; data: WeatherData } | null {
  try {
    const parsed = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
    if (parsed?.v !== CACHE_VERSION || !parsed?.data) return null;
    return { at: Number(parsed.at) || 0, data: parsed.data };
  } catch {
    return null;
  }
}

function writeDisk(payload: { at: number; data: WeatherData }) {
  try {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
    fs.writeFileSync(CACHE_FILE, JSON.stringify({ v: CACHE_VERSION, ...payload }));
  } catch {
    /* 只读文件系统下静默跳过 */
  }
}

/* ── 数据获取 ─────────────────────────────────────────────── */

async function fetchJson(url: string): Promise<any> {
  const res = await fetch(url, {
    signal: AbortSignal.timeout(TIMEOUT_MS),
    headers: { accept: 'application/json' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function fetchWeather(): Promise<WeatherData> {
  const [forecast, marine] = await Promise.all([
    fetchJson(forecastUrl()),
    fetchJson(marineUrl()).catch(() => null),
  ]);
  return normalizeForecast(forecast, marine);
}

/** 获取天气数据（带两级缓存与优雅降级） */
export async function getWeather(): Promise<WeatherData | null> {
  const now = Date.now();

  if (memory && now - memory.at < TTL_MS) return memory.data;

  const disk = readDisk();
  if (disk && now - disk.at < TTL_MS) {
    memory = { at: disk.at, data: disk.data };
    return disk.data;
  }

  try {
    const data = await fetchWeather();
    memory = { at: now, data };
    writeDisk({ at: now, data });
    return data;
  } catch {
    if (disk?.data) {
      memory = { at: disk.at, data: disk.data };
      return disk.data;
    }
    return memory?.data ?? null;
  }
}
