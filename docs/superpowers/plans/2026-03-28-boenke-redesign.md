# Boenke Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the archived Boenke site into a modern Astro-based marketing site with structured content, product pages, articles, and SEO/GEO foundations.

**Architecture:** Use Astro for all route rendering and content-heavy pages, plus a small React tabs component on the homepage for product category switching. Keep business content in a single typed data module so page generation, schema, sitemap, and navigation all read from one source of truth.

**Tech Stack:** Astro, React, TypeScript-in-Astro frontmatter, static assets in `public/media`, JSON-LD schema, custom sitemap/robots endpoints

---

### Task 1: Replace starter scaffold with shared site foundation

**Files:**
- Modify: `src/layouts/Layout.astro`
- Create: `src/components/Header.astro`
- Create: `src/components/Footer.astro`
- Create: `src/components/Breadcrumbs.astro`
- Create: `src/styles/global.css`
- Modify: `astro.config.mjs`

- [ ] Replace the default starter layout with a full HTML document that emits metadata and JSON-LD.
- [ ] Add a shared header and footer with industrial-brand navigation and contact information.
- [ ] Add global styles for layout, typography, cards, lists, detail pages, and responsive behavior.
- [ ] Set the Astro `site` config to `https://www.boenke.cn`.

### Task 2: Create the content source of truth

**Files:**
- Create: `src/data/site.ts`
- Create: `src/lib/schema.ts`

- [ ] Define typed company, product, case, video, FAQ, and news content.
- [ ] Add helper lookups for detail pages.
- [ ] Add schema builders for Organization, WebSite, BreadcrumbList, FAQPage, Product, Article, and LocalBusiness.

### Task 3: Implement homepage and section listing pages

**Files:**
- Create: `src/components/ProductTabs.tsx`
- Create: `src/pages/index.astro`
- Create: `src/pages/about.astro`
- Create: `src/pages/products/index.astro`
- Create: `src/pages/cases/index.astro`
- Create: `src/pages/videos/index.astro`
- Create: `src/pages/news/index.astro`
- Create: `src/pages/contact.astro`

- [ ] Build a homepage with hero, product tabs, process steps, cases, news, FAQ, and CTA.
- [ ] Add list/index pages for about, products, cases, videos, news, and contact.
- [ ] Hydrate the React tabs component on the homepage.

### Task 4: Implement dynamic detail pages

**Files:**
- Create: `src/pages/products/[slug].astro`
- Create: `src/pages/cases/[slug].astro`
- Create: `src/pages/videos/[slug].astro`
- Create: `src/pages/news/[slug].astro`

- [ ] Generate static paths from the shared data module.
- [ ] Render detail layouts with images, summaries, structured sections, and per-page schema.

### Task 5: Add crawlability support and verification hooks

**Files:**
- Create: `src/pages/robots.txt.ts`
- Create: `src/pages/sitemap.xml.ts`
- Create: `docs/plans/2026-03-28-boenke-redesign-design.md`
- Create: `docs/superpowers/plans/2026-03-28-boenke-redesign.md`

- [ ] Allow major search and AI bots in `robots.txt`.
- [ ] Emit all public routes in `sitemap.xml`.
- [ ] Save the design and implementation plan in docs paths.

### Task 6: Verify

**Files:**
- No code files; run commands only

- [ ] Run `npm run build` in `site-redesign`.
- [ ] Inspect any build errors, fix them, and rerun.
- [ ] Summarize what was changed and confirm the archived mirror remains untouched.
