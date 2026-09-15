import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.guangxi-province.com",
  trailingSlash: "always",
  server: { port: 4324 },
  build: {
    inlineStylesheets: "always",
  },
  integrations: [
    sitemap({
      lastmod: new Date(),
      filter: (page) => !page.includes("/privacy/") && !page.includes("/terms/"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ["images.unsplash.com", "source.unsplash.com", "picsum.photos"],
  },
});
