/**
 * 潮汐与月相计算（纯函数，无 Node 依赖，服务端与浏览器共用）
 * ---------------------------------------------------------------
 * 潮型由月相近似推算：朔望（新月/满月）后 1–2 天出现大潮，
 * 上下弦前后潮差最小，即小潮。
 */

/** 朔望月长度（天） */
const SYNODIC_MONTH = 29.530588853;

/** 已知新月时刻：2000-01-06 18:14 UTC */
const KNOWN_NEW_MOON = Date.UTC(2000, 0, 6, 18, 14);

export type TideType = 'spring' | 'neap' | 'mid';

/** 月龄（天，0 为新月，约 14.77 为满月） */
export function moonAge(ms: number): number {
  const days = (ms - KNOWN_NEW_MOON) / 86400000;
  const age = days % SYNODIC_MONTH;
  return age < 0 ? age + SYNODIC_MONTH : age;
}

/**
 * 潮型判断
 * - spring 大潮：距最近朔望 ≤ 2 天
 * - neap   小潮：距最近朔望 ≥ 5.5 天（即接近上下弦）
 * - mid    中潮：其余时段
 */
export function tideType(ms: number): TideType {
  const age = moonAge(ms);
  const dNew = Math.min(age, SYNODIC_MONTH - age);
  const dFull = Math.abs(age - SYNODIC_MONTH / 2);
  const d = Math.min(dNew, dFull);
  if (d <= 2) return 'spring';
  if (d >= 5.5) return 'neap';
  return 'mid';
}

/**
 * 平滑曲线路径（Catmull-Rom 转三次贝塞尔），用于绘制潮位曲线
 */
export function smoothPath(points: Array<{ x: number; y: number }>): string {
  if (points.length < 2) return '';
  const f = (n: number) => n.toFixed(1);
  let d = `M${f(points[0].x)},${f(points[0].y)}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C${f(c1x)},${f(c1y)} ${f(c2x)},${f(c2y)} ${f(p2.x)},${f(p2.y)}`;
  }
  return d;
}
