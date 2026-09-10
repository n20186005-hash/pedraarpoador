/**
 * 图片资源辅助工具
 * 站点内的实拍图由 scripts/optimize-images.mjs 统一压缩，
 * 并在同目录生成同名 .webp 版本（体积更小、画质相当）。
 */

/** 把 JPEG 路径映射为同名 WebP 路径 */
export const webp = (src: string): string => src.replace(/\.jpe?g$/i, '.webp');

/** 生成 CSS image-set() 声明：优先 WebP，自动回退 JPEG */
export const imageSet = (src: string): string =>
  `image-set(url("${webp(src)}") type("image/webp"), url("${src}") type("image/jpeg"))`;

/** 生成 <source> 用的绝对/相对路径（保持原始路径语义） */
export const webpSrc = webp;
