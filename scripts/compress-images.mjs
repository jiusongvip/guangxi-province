import {
  readdirSync,
  statSync,
  readFileSync,
  writeFileSync,
  renameSync,
  unlinkSync,
  mkdirSync,
  existsSync,
  copyFileSync,
} from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const imagesDir = fileURLToPath(new URL("../public/images", import.meta.url));
const backupDir = fileURLToPath(new URL("../.images-orig", import.meta.url));

// Hero (LCP) and OG images get more aggressive compression + width caps.
const rules = {
  "guangxi-hero.webp": { width: 1920, quality: 72 },
  "og-guangxi.webp": { width: 1200, quality: 75 },
  "bama.webp": { width: 1400, quality: 78 },
  "beihai-weizhou.webp": { width: 1400, quality: 78 },
  default: { width: 1600, quality: 78 },
};

if (!existsSync(backupDir)) mkdirSync(backupDir);

const files = readdirSync(imagesDir).filter((f) => f.endsWith(".webp"));

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const src = join(imagesDir, file);
  const backup = join(backupDir, file);

  // Keep the untouched original in the backup dir.
  if (!existsSync(backup)) copyFileSync(src, backup);

  // Always re-process from the original to avoid double-compression.
  const original = readFileSync(backup);
  const meta = await sharp(original).metadata();
  const rule = rules[file] ?? rules.default;

  let pipeline = sharp(original);
  if (meta.width > rule.width) {
    pipeline = pipeline.resize(rule.width, null, { withoutEnlargement: true });
  }
  const buffer = await pipeline.webp({ quality: rule.quality, effort: 5 }).toBuffer();

  const before = statSync(src).size;
  const tmp = src + ".tmp";
  writeFileSync(tmp, buffer);
  try {
    renameSync(tmp, src);
  } catch {
    unlinkSync(src);
    renameSync(tmp, src);
  }
  const after = buffer.length;
  totalBefore += before;
  totalAfter += after;

  const pct = Math.round((1 - after / before) * 100);
  console.log(`${file}: ${(before / 1024).toFixed(1)}KB -> ${(after / 1024).toFixed(1)}KB (${pct}% saved, ${meta.width}px->${rule.width}px)`);
}

console.log(
  `\nTotal: ${(totalBefore / 1024).toFixed(1)}KB -> ${(totalAfter / 1024).toFixed(1)}KB (${Math.round(
    (1 - totalAfter / totalBefore) * 100
  )}% saved)`
);
