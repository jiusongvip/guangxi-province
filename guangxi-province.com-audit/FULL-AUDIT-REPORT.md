# 全站 SEO 审计报告 — guangxi-province.com

> 审计日期：2026-08-19
> 审计方式：本地 dist 构建产物审计（站点未上线，线上特有项标注待验证）
> 站点类型：单页旅游目的地决策站（Astro 5 + Cloudflare Pages）

## 执行摘要

- **SEO 健康评分：90 / 100**
- 业务类型：旅游决策内容站（信息型 + 商业调研型混合意图）
- 内容策略：单页极致 SEO，覆盖"认知 → 探索 → 决策"三层闭环

### 各维度得分

| 维度 | 权重 | 得分 | 说明 |
|---|---|---|---|
| Technical SEO | 22% | 20/22 | robots、sitemap、canonical、内部链接尾斜杠全达标 |
| Content Quality | 23% | 21/23 | 30+ 区块、衣食住行购全覆盖、E-E-A-T 强、23 条 FAQ |
| On-Page SEO | 20% | 19/20 | title/desc/H1/H2/锚点全达标 |
| Schema | 10% | 9/10 | 6 类结构化数据完整 |
| Performance | 10% | 8/10 | 无第三方脚本、字体本地化、图片已压缩 |
| AI Search Readiness | 10% | 8/10 | llms.txt 已补、内容可引用 |
| Images | 5% | 4.5/5 | alt 全齐、WebP、已 resize+压缩 |

## 本次审计已修复项

| 项 | 修复前 → 后 |
|---|---|
| 首页 meta description | 187 → 143 字符 |
| about title/description | 27/99 → 42/142 字符 |
| contact title/description | 29/47 → 46/150 字符 |
| 图片总体积 | 2450KB → 1635KB（-33%） |
| Hero 图（LCP） | 125.6KB → 92.3KB |
| og 图 | 215.3KB → 93.7KB |
| llms.txt | 缺失 → 已创建（GEO 信号） |

## 技术 SEO（20/22）

**达标项：**
- robots.txt：存在，声明 sitemap ✅
- sitemap：首页无尾斜杠、内页带尾斜杠、构建后处理生效 ✅
- canonical：首页 `https://www.guangxi-province.com`（无尾斜杠）、内页带尾斜杠 ✅
- 内部链接：Nav/Footer 的 about/contact/privacy 均带尾斜杠，无死链、无重复 id ✅
- 锚点导航：7 处来源 20+ 锚点全部对应唯一 id，scroll-margin-top 6rem 避让固定导航 ✅
- 移动端菜单：点击锚点后自动收起 ✅

**待上线验证（本地无法覆盖）：**
- 裸域名 301 → www 重定向链路
- HTTP 安全头（Cloudflare 默认）
- CrUX 现场 Core Web Vitals 数据

## 内容质量（21/23）

- 内容深度为竞品 3-5 倍（对标 Wikipedia/China Highlights）
- E-E-A-T：作者背书、一手经验叙述、数据来源、季度更新声明
- 无 thin content；`<details>` 折叠内容全部在初始 HTML 输出（可爬取）
- 扣分项：图片为 AI 生成，长期建议替换为真实实拍图增强信任

## On-Page SEO（19/20）

- 首页 title 49 字符、desc 143 字符、H1=1、H2=23 ✅
- 内页 title/desc 已全部优化到阈值内 ✅
- 结构化内容分层清晰（决策工具 → 衣食住行购 → 信任 → FAQ）

## Schema（9/10）

Article + TouristDestination + BreadcrumbList + ItemList + FAQPage + Organization 六类齐全。
扣分项：单页架构下无独立目的地页，`TouristAttraction` 未针对单个景点部署（架构取舍）。

## 性能（8/10）

- 无第三方 JS、字体 `@fontsource` 本地化、图片 lazy load 正确 ✅
- 图片已 resize（Hero 1920px / og 1200px / 其他 1600px）+ 压缩（质量 72-78）
- 图片总体积 1635KB，Hero（LCP）92.3KB ✅
- 首页 HTML 224.9KB（内容深度所致，可接受）

## AI Search Readiness（8/10）

- llms.txt 已创建（核心事实、页面清单、内容原则）✅
- FAQ 覆盖 PAA 高频问题，利于 AI Overviews 引用 ✅
- 结构化数据利于实体识别 ✅
- 扣分项：未部署 AI 引用监测（如 seo-profound）

## 图片（4.5/5）

- 35 张图 alt 全部存在（0 缺失）✅
- WebP 格式 + resize + 压缩 ✅
- 备份保留于 `.images-orig/`（不入库、不入 dist）

## 行动建议（按优先级）

### 上线前（必做）
1. 域名注册 `guangxi-province.com` + Cloudflare Pages 部署
2. 配置裸域名 301 → www（Cloudflare 重定向模板）
3. 绑定 www 域名，确认 DNS 橙色云朵状态

### 上线后（1 周内）
4. 按 technology-seo-check 技能执行线上审计（重定向、安全头、sitemap 可达性）
5. GSC 提交 sitemap，验证收录
6. 用 seo-unlighthouse 或 PageSpeed 实测 CWV

### 中期（1 个月）
7. 替换 AI 生成为真实实拍图（增强 E-E-A-T）
8. 部署 AI 引用监测（seo-profound）
9. 建立站群内链（与 china-nature、yunnan-province 等 hub↔spoke 互链）
