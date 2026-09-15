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

// Hero (LCP) and OG images keep full width; card images are displayed at
// ~380-420px (2x => ~860w), so 900px caps at q72 are plenty.
const rules = {
  "guangxi-hero.webp": { width: 1672, quality: 67 },
  "guangxi-hero-1000.webp": { width: 1000, quality: 72 },
  "og-guangxi.webp": { width: 1200, quality: 75 },
  default: { width: 800, quality: 66 },
};

if (!existsSync(backupDir)) mkdirSync(backupDir);

const walk = (dir, rel = "") =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    if (e.isDirectory()) return walk(join(dir, e.name), join(rel, e.name));
    return e.name.endsWith(".webp") ? [join(rel, e.name)] : [];
  });

const files = walk(imagesDir);

let totalBefore = 0;
let totalAfter = 0;

for (const relFile of files) {
  const src = join(imagesDir, relFile);
  const backup = join(backupDir, relFile);
  const backupDirOf = join(backupDir, join(relFile, ".."));
  if (!existsSync(backupDirOf)) mkdirSync(backupDirOf, { recursive: true });

  // Keep the untouched original in the backup dir.
  if (!existsSync(backup)) copyFileSync(src, backup);

  // Always re-process from the original to avoid double-compression.
  const original = readFileSync(backup);
  const meta = await sharp(original).metadata();
  const rule = rules[relFile] ?? rules.default;

  let pipeline = sharp(original);
  if (meta.width > rule.width) {
    pipeline = pipeline.resize(rule.width, null, { withoutEnlargement: true });
  }
  const buffer = await pipeline.webp({ quality: rule.quality, effort: 5 }).toBuffer();

  const before = statSync(src).size;
  if (buffer.length >= before) {
    console.log(`${relFile}: skipped (already ${before}KB <= new ${buffer.length}KB)`);
    totalBefore += before;
    totalAfter += before;
    continue;
  }
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
  console.log(`${relFile}: ${(before / 1024).toFixed(1)}KB -> ${(after / 1024).toFixed(1)}KB (${pct}% saved, ${meta.width}px->${Math.min(meta.width, rule.width)}px)`);
}

console.log(
  `\nTotal: ${(totalBefore / 1024).toFixed(1)}KB -> ${(totalAfter / 1024).toFixed(1)}KB (${Math.round(
    (1 - totalAfter / totalBefore) * 100
  )}% saved)`
);
