# Homepage Motion Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 为首页补上“克制但有技术感”的动效语言，增强首屏、滚动进入和卡片交互质感。

**Architecture:** 以 CSS 动效为主，辅以最小的 IntersectionObserver 脚本控制区块 reveal。首屏用关键帧实现镜头感，内容区用 data attribute 标记触发 reveal，产品卡切换依赖 React 重挂载做短级联进入。

**Tech Stack:** Astro、React、CSS、原生浏览器动画 API、IntersectionObserver

---

### Task 1: 补充动效设计文档

**Files:**
- Create: `docs/plans/2026-03-30-motion-language-design.md`

**Step 1:** 记录动效气质、节奏和禁止项。

### Task 2: 改造首页结构

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/components/ProductTabs.tsx`

**Step 1:** 给首屏增加技术感辅助层和动画节点。

**Step 2:** 给区块和卡片补充 `data-reveal`、层级顺序和延迟变量。

**Step 3:** 给产品 tab 切换增加级联进入节奏。

### Task 3: 实现动效样式

**Files:**
- Modify: `src/styles/global.css`

**Step 1:** 增加动效时长、easing、光效与 reveal 变量。

**Step 2:** 实现首屏镜头推进、扫光、分层进入。

**Step 3:** 实现滚动 reveal、卡片细节交互和 tab 切换动效。

**Step 4:** 为 `prefers-reduced-motion` 提供降级。

### Task 4: 验证

**Files:**
- Verify: `dist/index.html`

**Step 1:** 运行 `npm run build`

**Step 2:** 运行 `PUBLIC_SITE_URL=https://vimalinx.github.io PUBLIC_BASE_PATH=/Project_GuanChao npm run build:pages`

**Step 3:** 运行本地预览并检查首页可访问。
