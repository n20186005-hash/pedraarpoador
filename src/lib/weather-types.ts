/**
 * 天气数据结构（纯类型，服务端与浏览器共用）
 */

export interface CurrentWeather {
  time: string;
  temp: number;
  feels: number;
  humidity: number;
  wind: number;
  windDir: number;
  gust: number;
  precip: number;
  code: number;
  isDay: boolean;
  /** 能见度（米） */
  visibility: number;
}

export interface DailyWeather {
  date: string;
  code: number;
  max: number;
  min: number;
  precipSum: number;
  precipProb: number;
  sunrise: string;
  sunset: string;
  uvMax: number;
  windMax: number;
}

export interface HourlyWeather {
  time: string;
  temp: number;
  precipProb: number;
  code: number;
}

export interface MarineWeather {
  waveHeight: number;
  wavePeriod: number;
  seaTemp: number;
  waveDirection: number;
}

export interface TideEvent {
  time: string;
  type: 'high' | 'low';
  /** 相对平均海平面的水位（米） */
  height: number;
}

/** 逐小时潮位（用于绘制潮位曲线） */
export interface SeaLevelPoint {
  time: string;
  /** 相对平均海平面的水位（米） */
  level: number;
}

export interface WeatherData {
  fetchedAt: number;
  current: CurrentWeather;
  daily: DailyWeather[];
  hourly: HourlyWeather[];
  marine: MarineWeather | null;
  /** 未来约 48 小时内的潮汐极值，按时间升序 */
  tides: TideEvent[];
  /** 未来约 48 小时的逐时潮位，按时间升序 */
  seaLevel: SeaLevelPoint[];
}
