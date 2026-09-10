/**
 * 浏览器端天气刷新
 * ---------------------------------------------------------------
 * 页面上的天气与建议全部由服务端渲染好（利于 SEO 与首屏），
 * 若页面在浏览器中停留时间超过了缓存时效，则静默拉取一次最新数据并就地更新，
 * 判断逻辑与文案完全复用服务端同一套模块。
 */
import { forecastUrl, marineUrl, WEATHER_TZ } from './weather-api';
import { normalizeForecast } from './weather-parse';
import { buildMetrics, selectAdvice, type AdviceItem } from './weather-advice';
import { describe } from './wmo';
import type { WeatherData } from './weather-types';

const DEFAULT_MAX_AGE = 10 * 60 * 1000;

const num = (v: unknown, d = 0): number => (typeof v === 'number' && Number.isFinite(v) ? v : d);

const deg = (v?: number) => (typeof v === 'number' && Number.isFinite(v) ? Math.round(v) + '°' : '—');
const pct = (v?: number) => (typeof v === 'number' && Number.isFinite(v) ? Math.round(v) + '%' : '—');
const kmh = (v?: number) => (typeof v === 'number' && Number.isFinite(v) ? Math.round(v) + ' km/h' : '—');
const hhmm = (iso?: string) => (iso && iso.length >= 16 ? iso.slice(11, 16) : '—');

function readI18n(): Record<string, string> {
  const el = document.getElementById('wx-i18n');
  if (!el) return {};
  try {
    return JSON.parse(el.textContent || '{}');
  } catch {
    return {};
  }
}

function renderList(ul: Element | null, items: AdviceItem[]): void {
  if (!ul) return;
  ul.textContent = '';
  for (const it of items) {
    const li = document.createElement('li');
    li.className = 'flex gap-2';
    const icon = document.createElement('span');
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = it.icon;
    const text = document.createElement('span');
    text.textContent = it.text;
    li.append(icon, text);
    ul.append(li);
  }
}

export function initWeather(): void {
  const root = document.querySelector<HTMLElement>('[data-wx-root]');
  if (!root || typeof fetch !== 'function') return;

  const cfg = root.dataset;
  const maxAge = Number(cfg.wxMaxAge || DEFAULT_MAX_AGE) || DEFAULT_MAX_AGE;
  const fetched = Number(cfg.wxFetched || 0);

  // 数据还新鲜，不必打扰网络
  if (fetched && Date.now() - fetched < maxAge) return;

  const url = forecastUrl();
  const seaUrl = marineUrl();

  const lang = cfg.wxLang || 'pt';
  const locale = cfg.wxLocale || 'pt-BR';
  const tz = WEATHER_TZ;
  const i18n = readI18n();

  const $ = (sel: string) => root.querySelector(sel);
  const set = (key: string, value: string) => {
    const el = $(`[data-wx="${key}"]`);
    if (el && value !== '' && value != null) el.textContent = value;
  };
  const each = (sel: string, fn: (el: Element, i: number) => void) => {
    const els = root.querySelectorAll(sel);
    for (let i = 0; i < els.length; i++) fn(els[i], i);
  };
  const toggle = (sel: string, show: boolean) => {
    const el = $(sel);
    if (el) (el as HTMLElement).hidden = !show;
  };

  const uvLabel = (v: number) =>
    v < 3 ? i18n.uvLow : v < 6 ? i18n.uvModerate : v < 8 ? i18n.uvHigh : v < 11 ? i18n.uvVeryHigh : i18n.uvExtreme;

  const weekday = (iso: string, i: number) => {
    if (i === 0) return i18n.today || '—';
    if (i === 1) return i18n.tomorrow || '—';
    try {
      return new Intl.DateTimeFormat(locale, { weekday: 'short', timeZone: tz }).format(
        new Date(iso + 'T12:00:00'),
      );
    } catch {
      return iso.slice(5);
    }
  };

  const stamp = (ms: number) => {
    try {
      return new Intl.DateTimeFormat(locale, {
        hour: '2-digit',
        minute: '2-digit',
        day: '2-digit',
        month: '2-digit',
        timeZone: tz,
      }).format(new Date(ms));
    } catch {
      return '';
    }
  };

  function apply(d: WeatherData): void {
    const c = d.current;

    const now = describe(c.code, lang, c.isDay);
    set('icon', now.icon);
    set('temp', deg(c.temp));
    set('desc', now.text);
    set('feels', deg(c.feels));
    set('humidity', Math.round(c.humidity) + '%');
    set('wind', kmh(c.wind));
    set('gust', kmh(c.gust));
    set('precipNow', c.precip.toFixed(1) + ' mm');
    set('rainChance', pct(d.daily[0]?.precipProb));
    set('sunrise', hhmm(d.daily[0]?.sunrise));
    set('sunset', hhmm(d.daily[0]?.sunset));

    const uvToday = d.daily[0]?.uvMax ?? 0;
    set('uv', Math.round(uvToday) + ' · ' + uvLabel(uvToday));
    set('updated', stamp(d.fetchedAt));

    each('[data-wx-day]', (el, i) => {
      const day = d.daily[i];
      if (!day) return;
      const info = describe(day.code, lang, true);
      const put = (k: string, v: string) => {
        const n = el.querySelector(`[data-wx="${k}"]`);
        if (n) n.textContent = v;
      };
      put('d-label', weekday(day.date, i));
      put('d-icon', info.icon);
      put('d-desc', info.text);
      put('d-prob', pct(day.precipProb));
      put('d-max', deg(day.max));
      put('d-min', deg(day.min));
    });

    each('[data-wx-hour]', (el, i) => {
      const h = d.hourly[i];
      if (!h) return;
      const put = (k: string, v: string) => {
        const n = el.querySelector(`[data-wx="${k}"]`);
        if (n) n.textContent = v;
      };
      put('h-time', hhmm(h.time));
      put('h-icon', describe(h.code, lang, true).icon);
      put('h-temp', deg(h.temp));
      put('h-prob', pct(h.precipProb));
    });

    // 海况
    toggle('[data-wx-marine]', !!d.marine);
    if (d.marine) {
      set('waveHeight', d.marine.waveHeight.toFixed(1) + ' m');
      set('wavePeriod', Math.round(d.marine.wavePeriod) + ' s');
      set('seaTemp', d.marine.seaTemp.toFixed(1) + '°C');
    }

    // 建议
    const metrics = buildMetrics(d);
    const advice = selectAdvice(metrics, lang);
    const alerts = advice.filter((a) => a.cat === 'alert');
    toggle('[data-wx-alerts]', alerts.length > 0);
    renderList($('[data-wx-cat="alert"]'), alerts);

    (['outfit', 'plan', 'gear'] as const).forEach((cat) => {
      const items = advice.filter((a) => a.cat === cat);
      toggle(`[data-wx-catwrap="${cat}"]`, items.length > 0);
      renderList($(`[data-wx-cat="${cat}"]`), items);
    });

    // 无数据提示
    const note = $('[data-wx-note]');
    if (note) (note as HTMLElement).hidden = true;
  }

  const load = () => {
    fetch(url)
      .then((r) => r.json())
      .then((forecast) =>
        fetch(seaUrl)
          .then((r) => r.json())
          .catch(() => null)
          .then((marine) => {
            try {
              apply(normalizeForecast(forecast, marine));
            } catch {
              /* 保留服务端渲染的内容 */
            }
          }),
      )
      .catch(() => {
        /* 保留服务端渲染的内容 */
      });
  };

  if (document.readyState === 'complete' || document.readyState === 'interactive') load();
  else document.addEventListener('DOMContentLoaded', load);
}

export { num };
