import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const dist = fileURLToPath(new URL("../dist", import.meta.url));
const home = "https://www.guangxi-province.com";

if (!existsSync(dist)) {
  console.log("[fix-sitemap-home] dist/ not found, skipping");
  process.exit(0);
}

const files = readdirSync(dist).filter(
  (f) => f.startsWith("sitemap") && f.endsWith(".xml")
);

for (const file of files) {
  const p = join(dist, file);
  const before = readFileSync(p, "utf8");
  const after = before.replace(
    new RegExp(`<loc>${home.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}/</loc>`, "g"),
    `<loc>${home}</loc>`
  );
  if (after !== before) {
    writeFileSync(p, after, "utf8");
    console.log(`[fix-sitemap-home] fixed home trailing slash in ${file}`);
  }
}
