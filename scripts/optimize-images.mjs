/**
 * 图片压缩优化脚本
 * ---------------------------------------------------------------
 * 对 public/gallery 下的景点实拍图做无损体验压缩：
 *   - 长边限制到 1920px（不放大）
 *   - JPEG 重新编码（mozjpeg / progressive / 去除元数据）
 *   - 同步生成 WebP 版本，供 <picture> 与 CSS image-set() 使用
 *
 * 已处理过的文件（尺寸与修改时间未变）会跳过，可安全重复执行。
 *
 * 用法：npm run optimize:images
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const DIR = path.join(ROOT, 'public', 'gallery');
const MANIFEST = path.join(ROOT, 'scripts', '.image-manifest.json');

const MAX_EDGE = 1920;
const JPEG_QUALITY = 78;
const WEBP_QUALITY = 72;

async function loadManifest() {
  try {
    return JSON.parse(await fs.readFile(MANIFEST, 'utf8'));
  } catch {
    return {};
  }
}

const kb = (n) => (n / 1024).toFixed(1) + ' KB';

const manifest = await loadManifest();
const next = {};

const files = (await fs.readdir(DIR)).filter((f) => /\.jpe?g$/i.test(f)).sort();

let beforeTotal = 0;
let afterTotal = 0;
let processed = 0;
let skipped = 0;

for (const file of files) {
  const src = path.join(DIR, file);
  const stat = await fs.stat(src);
  const key = `${stat.size}:${stat.mtimeMs}`;
  beforeTotal += stat.size;

  const webpPath = path.join(DIR, file.replace(/\.jpe?g$/i, '.webp'));

  if (manifest[file] === key) {
    try {
      const w = await fs.stat(webpPath);
      afterTotal += stat.size;
      next[file] = key;
      skipped++;
      continue;
    } catch {
      /* webp 缺失则重新处理 */
    }
  }

  // 先读入内存，避免 sharp 持有文件句柄导致写回失败（Windows）
  const input = await fs.readFile(src);
  const meta = await sharp(input, { failOn: 'none' }).metadata();

  const pipeline = sharp(input, { failOn: 'none' }).rotate().resize({
    width: MAX_EDGE,
    height: MAX_EDGE,
    fit: 'inside',
    withoutEnlargement: true,
  });

  const jpegBuf = await pipeline
    .clone()
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true, chromaSubsampling: '4:2:0' })
    .toBuffer();

  const webpBuf = await pipeline
    .clone()
    .webp({ quality: WEBP_QUALITY, effort: 5 })
    .toBuffer();

  // 只有更小才替换，避免劣化
  if (jpegBuf.length < stat.size) {
    await fs.writeFile(src, jpegBuf);
  }
  await fs.writeFile(webpPath, webpBuf);

  const finalStat = await fs.stat(src);
  afterTotal += finalStat.size;
  next[file] = `${finalStat.size}:${finalStat.mtimeMs}`;
  processed++;

  console.log(
    `${file.padEnd(32)} ${String(meta.width) + 'x' + meta.height} → ` +
      `${kb(stat.size)} → ${kb(finalStat.size)} | webp ${kb(webpBuf.length)}`
  );
}

await fs.writeFile(MANIFEST, JSON.stringify(next, null, 2) + '\n');

// ── 社交分享封面（1200x630，符合 OG 推荐尺寸）──
const HERO = path.join(DIR, 'pedra-do-arpoador (1).jpg');
const OG = path.join(ROOT, 'public', 'og-cover.jpg');
try {
  await sharp(await fs.readFile(HERO))
    .resize(1200, 630, { fit: 'cover', position: 'attention' })
    .jpeg({ quality: 82, mozjpeg: true, progressive: true })
    .toFile(OG);
  const ogStat = await fs.stat(OG);
  console.log(`\n生成社交分享封面 public/og-cover.jpg (1200x630, ${kb(ogStat.size)})`);
} catch (err) {
  console.warn('\n社交分享封面生成失败：' + err.message);
}

console.log('\n──────────────────────────────────────────');
console.log(`处理 ${processed} 个，跳过 ${skipped} 个`);
console.log(`总计：${(beforeTotal / 1048576).toFixed(1)} MB → ${(afterTotal / 1048576).toFixed(1)} MB`);
console.log(`压缩率：${(100 - (afterTotal / beforeTotal) * 100).toFixed(1)}%`);
