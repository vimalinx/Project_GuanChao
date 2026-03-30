# Boenke Site Redesign

基于 Astro 重建的博恩科官网前端项目，保留原站内容逻辑，并针对企业官网场景做了更现代化的展示和 GitHub Pages 部署适配。

## 项目命令

- `npm install`：安装依赖
- `npm run dev`：启动本地开发
- `npm run build`：按默认站点配置构建
- `npm run build:pages`：构建 GitHub Pages 版本产物
- `npm run preview -- --host 127.0.0.1 --port 4341`：预览静态产物

## GitHub Pages 构建

Pages 版本依赖两个环境变量：

- `PUBLIC_SITE_URL`：部署域名，例如 `https://vimalinx.github.io`
- `PUBLIC_BASE_PATH`：仓库子路径，例如 `/Project_GuanChao`

本地验证示例：

```bash
PUBLIC_SITE_URL=https://vimalinx.github.io \
PUBLIC_BASE_PATH=/Project_GuanChao \
npm run build:pages
```

构建后处理脚本会统一修正：

- 内部链接与图片路径
- canonical / Open Graph / Twitter 图片地址
- JSON-LD 结构化数据中的站点 URL
- `sitemap.xml`
- `robots.txt`

## 目录说明

- `src/`：站点页面、组件、样式与结构化数据逻辑
- `public/`：公开静态资源
- `scripts/prepare-pages.mjs`：GitHub Pages 构建产物修正脚本
- `.github/workflows/deploy.yml`：GitHub Pages 自动部署工作流
- `docs/plans/`：本次重构与部署相关的内部计划文档

## 说明

- 旧站镜像不在本仓库中，位于上级目录的 `site-mirror/`
- `output/` 为本地截图验收产物，不进入版本库
