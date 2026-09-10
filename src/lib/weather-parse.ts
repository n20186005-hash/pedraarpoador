/**
 * 原始接口响应 → 统一数据结构
 * 服务端与浏览器共用，确保两处渲染口径完全一致。
 */
import type { DailyWeather, HourlyWeather, SeaLevelPoint, TideEvent, WeatherData } from './weather-types';

const num = (v: unknown, fallback = 0): number =>
  typeof v === 'number' && Number.isFinite(v) ? v : fallback;

const str = (v: unknown): string => (typeof v === 'string' ? v : '');

/** 本地时间字符串（YYYY-MM-DDTHH:mm）→ 毫秒；两侧用同一偏移，差值即为真实间隔 */
export function localMs(s: string): number {
  if (!s || s.length < 16) return NaN;
  return Date.parse(s.slice(0, 16) + ':00Z');
}

/** 从 a 到 b 的分钟数（b 为基准时刻） */
export function minutesUntil(a: string, from: string): number {
  const ta = localMs(a);
  const tb = localMs(from);
  if (!Number.isFinite(ta) || !Number.isFinite(tb)) return -1;
  return Math.round((ta - tb) / 60000);
}

/** 逐小时水位序列（用于潮位曲线） */
function extractSeaLevel(hourly: any, limit = 48): SeaLevelPoint[] {
  const times: string[] = Array.isArray(hourly?.time) ? hourly.time : [];
  const levels: unknown[] = Array.isArray(hourly?.sea_level_height_msl) ? hourly.sea_level_height_msl : [];
  const out: SeaLevelPoint[] = [];
  for (let i = 0; i < times.length && out.length < limit; i++) {
    const v = levels[i];
    if (typeof v !== 'number' || !Number.isFinite(v)) continue;
    out.push({ time: times[i], level: v });
  }
  return out;
}

/** 从逐小时水位序列中提取涨落潮极值（近似到整点） */
function extractTides(hourly: any, limit = 10): TideEvent[] {
  const times: string[] = Array.isArray(hourly?.time) ? hourly.time : [];
  const levels: unknown[] = Array.isArray(hourly?.sea_level_height_msl) ? hourly.sea_level_height_msl : [];
  if (times.length < 3 || levels.length !== times.length) return [];

  const out: TideEvent[] = [];
  for (let i = 1; i < times.length - 1; i++) {
    const prev = levels[i - 1];
    const cur = levels[i];
    const next = levels[i + 1];
    if (typeof prev !== 'number' || typeof cur !== 'number' || typeof next !== 'number') continue;
    if (!Number.isFinite(prev) || !Number.isFinite(cur) || !Number.isFinite(next)) continue;

    if (cur >= prev && cur > next) out.push({ time: times[i], type: 'high', height: cur });
    else if (cur <= prev && cur < next) out.push({ time: times[i], type: 'low', height: cur });
  }
  return out.slice(0, limit);
}

/** 把预报接口 + 海况接口的原始响应整理成统一结构 */
export function normalizeForecast(forecast: any, marineRaw: any): WeatherData {
  const c = forecast?.current ?? {};
  const d = forecast?.daily ?? {};
  const h = forecast?.hourly ?? {};

  // 从「当前整点」起取未来 12 小时
  const nowIso = str(c.time).slice(0, 13);
  const times: string[] = Array.isArray(h.time) ? h.time : [];
  let start = times.findIndex((t) => t.slice(0, 13) >= nowIso);
  if (start < 0) start = 0;

  const hourly: HourlyWeather[] = times.slice(start, start + 12).map((t, i) => ({
    time: t,
    temp: num(h.temperature_2m?.[start + i]),
    precipProb: num(h.precipitation_probability?.[start + i]),
    code: num(h.weather_code?.[start + i], 3),
  }));

  const dailyDates: string[] = Array.isArray(d.time) ? d.time : [];
  const daily: DailyWeather[] = dailyDates.slice(0, 7).map((date, i) => ({
    date,
    code: num(d.weather_code?.[i], 3),
    max: num(d.temperature_2m_max?.[i]),
    min: num(d.temperature_2m_min?.[i]),
    precipSum: num(d.precipitation_sum?.[i]),
    precipProb: num(d.precipitation_probability_max?.[i]),
    sunrise: str(d.sunrise?.[i]),
    sunset: str(d.sunset?.[i]),
    uvMax: num(d.uv_index_max?.[i]),
    windMax: num(d.wind_speed_10m_max?.[i]),
  }));

  const m = marineRaw?.current ?? null;

  return {
    fetchedAt: Date.now(),
    current: {
      time: str(c.time),
      temp: num(c.temperature_2m),
      feels: num(c.apparent_temperature),
      humidity: num(c.relative_humidity_2m),
      wind: num(c.wind_speed_10m),
      windDir: num(c.wind_direction_10m),
      gust: num(c.wind_gusts_10m),
      precip: num(c.precipitation),
      code: num(c.weather_code, 3),
      isDay: num(c.is_day, 1) === 1,
      visibility: num(c.visibility, -1),
    },
    daily,
    hourly,
    marine: m
      ? {
          waveHeight: num(m.wave_height),
          wavePeriod: num(m.wave_period),
          seaTemp: num(m.sea_surface_temperature),
          waveDirection: num(m.wave_direction),
        }
      : null,
    tides: extractTides(marineRaw?.hourly),
    seaLevel: extractSeaLevel(marineRaw?.hourly),
  };
}
