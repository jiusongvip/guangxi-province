# AGENTS.md

## 工作流程

- 每次完成代码修改后，必须 `git add -A && git commit && git push origin main`，不要等用户再次要求。
- 提交信息遵循 conventional commits（fix(seo)/feat/chore），风格与现有 git log 保持一致。
- 推送到 main 后 Cloudflare Pages 会自动构建部署（构建命令 `npm run build`，输出目录 `dist`）。

## 构建注意事项

- 图片优化：`node scripts/compress-images.mjs`（原图备份在 `.images-orig/`，勿提交）。
- sitemap 首页去尾斜杠由 `scripts/fix-sitemap-home.mjs` 在 build 后自动处理；`/privacy/` 已被 sitemap filter 排除（noindex 页不进 sitemap）。
- URL 规范：`trailingSlash: "always"`，首页 canonical/sitemap 为裸 www 域名（不带尾斜杠）；禁止在 `_redirects` 添加尾斜杠 301 规则。
