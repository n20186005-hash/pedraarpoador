/**
 * WMO 天气代码表（纯数据，无 Node 依赖，服务端与浏览器共用）
 */

export interface WmoEntry {
  icon: string;
  /** 夜间图标（可选，未提供则沿用 icon） */
  night?: string;
  zh: string;
  en: string;
  es: string;
  pt: string;
}

export const WMO: Record<number, WmoEntry> = {
  0: { icon: '☀️', night: '🌙', zh: '晴', en: 'Clear sky', es: 'Cielo despejado', pt: 'Céu limpo' },
  1: { icon: '🌤️', night: '🌙', zh: '大致晴朗', en: 'Mainly clear', es: 'Mayormente despejado', pt: 'Predomínio de sol' },
  2: { icon: '⛅', night: '☁️', zh: '局部多云', en: 'Partly cloudy', es: 'Parcialmente nublado', pt: 'Parcialmente nublado' },
  3: { icon: '☁️', zh: '阴天', en: 'Overcast', es: 'Nublado', pt: 'Encoberto' },
  45: { icon: '🌫️', zh: '有雾', en: 'Fog', es: 'Niebla', pt: 'Nevoeiro' },
  48: { icon: '🌫️', zh: '雾凇', en: 'Depositing rime fog', es: 'Niebla helada', pt: 'Nevoeiro com geada' },
  51: { icon: '🌦️', zh: '轻微毛毛雨', en: 'Light drizzle', es: 'Llovizna ligera', pt: 'Chuvisco fraco' },
  53: { icon: '🌦️', zh: '毛毛雨', en: 'Moderate drizzle', es: 'Llovizna moderada', pt: 'Chuvisco moderado' },
  55: { icon: '🌧️', zh: '密集毛毛雨', en: 'Dense drizzle', es: 'Llovizna intensa', pt: 'Chuvisco denso' },
  56: { icon: '🌧️', zh: '冻毛毛雨', en: 'Light freezing drizzle', es: 'Llovizna helada', pt: 'Chuvisco congelante' },
  57: { icon: '🌧️', zh: '强冻毛毛雨', en: 'Dense freezing drizzle', es: 'Llovizna helada intensa', pt: 'Chuvisco congelante denso' },
  61: { icon: '🌦️', zh: '小雨', en: 'Slight rain', es: 'Lluvia débil', pt: 'Chuva fraca' },
  63: { icon: '🌧️', zh: '中雨', en: 'Moderate rain', es: 'Lluvia moderada', pt: 'Chuva moderada' },
  65: { icon: '🌧️', zh: '大雨', en: 'Heavy rain', es: 'Lluvia fuerte', pt: 'Chuva forte' },
  66: { icon: '🌧️', zh: '冻雨', en: 'Light freezing rain', es: 'Lluvia helada', pt: 'Chuva congelante' },
  67: { icon: '🌧️', zh: '强冻雨', en: 'Heavy freezing rain', es: 'Lluvia helada fuerte', pt: 'Chuva congelante forte' },
  71: { icon: '🌨️', zh: '小雪', en: 'Slight snowfall', es: 'Nevada débil', pt: 'Neve fraca' },
  73: { icon: '🌨️', zh: '中雪', en: 'Moderate snowfall', es: 'Nevada moderada', pt: 'Neve moderada' },
  75: { icon: '❄️', zh: '大雪', en: 'Heavy snowfall', es: 'Nevada fuerte', pt: 'Neve forte' },
  77: { icon: '🌨️', zh: '米雪', en: 'Snow grains', es: 'Granos de nieve', pt: 'Grãos de neve' },
  80: { icon: '🌦️', zh: '小阵雨', en: 'Slight rain showers', es: 'Chubascos débiles', pt: 'Pancadas fracas' },
  81: { icon: '🌧️', zh: '阵雨', en: 'Moderate rain showers', es: 'Chubascos moderados', pt: 'Pancadas moderadas' },
  82: { icon: '⛈️', zh: '强阵雨', en: 'Violent rain showers', es: 'Chubascos fuertes', pt: 'Pancadas fortes' },
  85: { icon: '🌨️', zh: '小阵雪', en: 'Slight snow showers', es: 'Chubascos de nieve', pt: 'Pancadas de neve' },
  86: { icon: '❄️', zh: '大阵雪', en: 'Heavy snow showers', es: 'Chubascos de nieve fuertes', pt: 'Pancadas de neve fortes' },
  95: { icon: '⛈️', zh: '雷暴', en: 'Thunderstorm', es: 'Tormenta eléctrica', pt: 'Trovoada' },
  96: { icon: '⛈️', zh: '雷暴伴小冰雹', en: 'Thunderstorm with slight hail', es: 'Tormenta con granizo leve', pt: 'Trovoada com granizo fraco' },
  99: { icon: '⛈️', zh: '雷暴伴强冰雹', en: 'Thunderstorm with heavy hail', es: 'Tormenta con granizo fuerte', pt: 'Trovoada com granizo forte' },
};

/** 按语言与昼夜解析天气代码 */
export function describe(code: number, lang: string, isDay = true): { icon: string; text: string } {
  const e = WMO[code] ?? WMO[3];
  const icon = !isDay && e.night ? e.night : e.icon;
  const text = (e as any)[lang] ?? e.en;
  return { icon, text };
}

/** 天气代码「严重程度」排序，用于从未来数小时中挑出最需要注意的天气 */
export function severity(code: number): number {
  if (code >= 95) return 100; // 雷暴
  if (code === 65 || code === 67 || code === 82) return 90; // 强降雨
  if (code === 63 || code === 66 || code === 81) return 80; // 中雨
  if (code === 61 || code === 62 || code === 80) return 70; // 小雨 / 阵雨
  if (code >= 51 && code <= 57) return 60; // 毛毛雨
  if (code === 45 || code === 48) return 50; // 雾
  if (code === 3) return 30; // 阴
  if (code === 2) return 20; // 局部多云
  return 10; // 晴
}

/** 从一组天气代码中挑出最需要注意的一个 */
export function worstCode(codes: number[]): number {
  let best = codes.length ? codes[0] : 3;
  let bestScore = severity(best);
  for (const c of codes) {
    const s = severity(c);
    if (s > bestScore) {
      bestScore = s;
      best = c;
    }
  }
  return best;
}

/** 蒲福风级（由 km/h 换算） */
const BEAUFORT_KMH = [1, 6, 12, 20, 29, 39, 50, 62, 75, 89, 103, 118];
export function beaufort(kmh: number): number {
  let level = 0;
  for (let i = 0; i < BEAUFORT_KMH.length; i++) {
    if (kmh >= BEAUFORT_KMH[i]) level = i + 1;
  }
  return level;
}
