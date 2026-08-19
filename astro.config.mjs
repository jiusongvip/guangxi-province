import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.guangxi-province.com",
  trailingSlash: "always",
  server: { port: 4324 },
  integrations: [sitemap({ lastmod: new Date("2026-08-19") })],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ["images.unsplash.com", "source.unsplash.com", "picsum.photos"],
  },
});
