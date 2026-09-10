/**
 * 日出 / 日落时刻计算
 * 采用 Wikipedia「Sunrise equation」的 NOAA 简化算法，误差约 ±1–2 分钟。
 * 纯函数、零依赖，构建期与浏览器均可调用。
 */

const RAD = Math.PI / 180;
const DEG = 180 / Math.PI;
const J2000 = 2451545.0;

export type SunEvent = 'sunrise' | 'sunset';

/** 儒略日（输入日期的 00:00 UT） */
function julianDay(year: number, month: number, day: number): number {
  let y = year;
  let m = month;
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const a = Math.floor(y / 100);
  const b = 2 - a + Math.floor(a / 4);
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + b - 1524.5;
}

/**
 * 计算某日当地的日出或日落时刻。
 * @param date            当地日期
 * @param lat             纬度（北纬为正）
 * @param lon             经度（东经为正）
 * @param tzOffsetHours   该地时区相对 UTC 的小时偏移（里约为 -3）
 * @returns               自当地 00:00 起算的分钟数（可能为负或 >1440，代表跨日）
 */
export function sunMinutes(
  date: Date,
  lat: number,
  lon: number,
  tzOffsetHours: number,
  kind: SunEvent,
): number {
  const jd = julianDay(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate());
  const n = Math.round(jd - J2000 + 0.0008);
  const jStar = n - lon / 360;

  const meanAnomaly = (357.5291 + 0.98560028 * jStar) % 360;
  const mr = meanAnomaly * RAD;
  const center =
    1.9148 * Math.sin(mr) + 0.02 * Math.sin(2 * mr) + 0.0003 * Math.sin(3 * mr);
  const lambda = (meanAnomaly + center + 180 + 102.9372) % 360;
  const lr = lambda * RAD;

  const jTransit = J2000 + jStar + 0.0053 * Math.sin(mr) - 0.0069 * Math.sin(2 * lr);
  const declination = Math.asin(Math.sin(lr) * Math.sin(23.44 * RAD));

  const cosOmega =
    (Math.sin(-0.833 * RAD) - Math.sin(lat * RAD) * Math.sin(declination)) /
    (Math.cos(lat * RAD) * Math.cos(declination));
  const omega = Math.acos(Math.min(1, Math.max(-1, cosOmega))) * DEG;

  const jEvent = kind === 'sunset' ? jTransit + omega / 360 : jTransit - omega / 360;
  const utcHours = (((jEvent + 0.5) % 1) + 1) % 1 * 24;
  return (((utcHours + tzOffsetHours) % 24) + 24) % 24 * 60;
}

/** 分钟数 → "HH:mm" */
export function minutesToHHMM(minutes: number): string {
  const t = ((Math.round(minutes) % 1440) + 1440) % 1440;
  return `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`;
}

/** 在 "HH:mm" 基础上加减分钟 */
export function shiftHHMM(hhmm: string, deltaMinutes: number): string {
  const [h, m] = hhmm.split(':').map(Number);
  if (!Number.isFinite(h) || !Number.isFinite(m)) return hhmm;
  return minutesToHHMM(h * 60 + m + deltaMinutes);
}

export interface MonthlySun {
  /** 1–12 */
  month: number;
  sunrise: string;
  sunset: string;
}

/**
 * 生成某地全年逐月日出/日落时刻（取每月 15 日，误差可忽略）。
 * 用于「全年日落时间表」，避免依赖外部接口。
 */
export function monthlySunTable(
  year: number,
  lat: number,
  lon: number,
  tzOffsetHours: number,
): MonthlySun[] {
  return Array.from({ length: 12 }, (_, i) => {
    const date = new Date(Date.UTC(year, i, 15));
    return {
      month: i + 1,
      sunrise: minutesToHHMM(sunMinutes(date, lat, lon, tzOffsetHours, 'sunrise')),
      sunset: minutesToHHMM(sunMinutes(date, lat, lon, tzOffsetHours, 'sunset')),
    };
  });
}
