/**
 * 天气数据接口地址（无 Node 依赖，服务端与浏览器共用同一份参数）
 */
import { SITE } from '../data/site';

export const WEATHER_TZ = 'America/Sao_Paulo';

/** 陆面天气 + 多日预报 */
export function forecastUrl(): string {
  return (
    `https://api.open-meteo.com/v1/forecast?latitude=${SITE.latitude}&longitude=${SITE.longitude}` +
    '&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,visibility' +
    '&hourly=temperature_2m,precipitation_probability,weather_code' +
    '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,sunrise,sunset,uv_index_max,wind_speed_10m_max' +
    `&timezone=${encodeURIComponent(WEATHER_TZ)}&forecast_days=7&wind_speed_unit=kmh`
  );
}

/** 海况 + 潮位（浪高、海水温度、潮汐涨落） */
export function marineUrl(): string {
  return (
    `https://marine-api.open-meteo.com/v1/marine?latitude=${SITE.latitude}&longitude=${SITE.longitude}` +
    '&current=wave_height,wave_direction,wave_period,sea_surface_temperature' +
    '&hourly=sea_level_height_msl' +
    `&timezone=${encodeURIComponent(WEATHER_TZ)}&forecast_days=2`
  );
}
