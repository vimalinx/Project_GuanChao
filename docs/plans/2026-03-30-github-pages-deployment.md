# GitHub Pages Deployment Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 让 `site-redesign` 可以独立推送到 `vimalinx/Project_GuanChao` 并通过 GitHub Pages 正常访问。

**Architecture:** 保持业务页面和镜像内容不动，只给 Astro 增加可切换的 `site/base` 配置，并在 Pages 构建后统一重写产物里的根路径、canonical、结构化数据、sitemap 与 robots。这样本地默认构建继续沿用原站路径，GitHub Pages 构建则自动适配仓库子路径。

**Tech Stack:** Astro 6、GitHub Actions、GitHub Pages、Node.js、node-html-parser

---

### Task 1: 补齐 Astro 的可部署配置

**Files:**
- Modify: `astro.config.mjs`
- Modify: `package.json`

**Step 1:** 为 Astro 增加 `PUBLIC_SITE_URL` 与 `PUBLIC_BASE_PATH` 的环境变量入口。

**Step 2:** 新增 `build:pages` 命令，专门用于 Pages 构建产物。

**Step 3:** 保持默认 `npm run build` 不变，避免影响原站本地预览。

### Task 2: 重写 Pages 构建产物

**Files:**
- Create: `scripts/prepare-pages.mjs`

**Step 1:** 递归扫描 `dist`。

**Step 2:** 对 HTML 输出里的 `href`、`src`、`poster`、`content`、`srcset` 做仓库子路径重写。

**Step 3:** 对 JSON-LD 中的内部 URL、原站域名进行统一替换。

**Step 4:** 对 `sitemap.xml` 与 `robots.txt` 中的原站域名做替换。

### Task 3: 配置自动部署

**Files:**
- Create: `.github/workflows/deploy.yml`

**Step 1:** 在 `main` 分支 push 时触发构建。

**Step 2:** 安装依赖并以 `https://vimalinx.github.io` + `/Project_GuanChao` 作为 Pages 目标地址构建。

**Step 3:** 上传 `dist` 并部署到 GitHub Pages。

### Task 4: 本地验证并推送

**Files:**
- Verify: `dist/**/*.html`
- Verify: `dist/sitemap.xml`
- Verify: `dist/robots.txt`

**Step 1:** 运行 Pages 构建命令并检查产物里的链接、图片和 canonical。

**Step 2:** 初始化 git 仓库并创建首个提交。

**Step 3:** 创建远端仓库 `vimalinx/Project_GuanChao`，推送 `main`，等待 GitHub Actions 部署。
