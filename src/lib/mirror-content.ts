import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { HTMLElement, parse } from 'node-html-parser';

export type LegacyArticle = {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string | null;
  embedUrl: string | null;
  contentHtml: string;
};

export type LegacyArticleTheme = 'news' | 'product' | 'video' | 'generic';

export type LegacyTypePage = {
  id: string;
  title: string;
  introHtml: string;
  introText: string;
  articleIds: string[];
  kind: 'news' | 'products' | 'gallery' | 'page' | 'redirect' | 'empty';
  redirectTarget: string | null;
};

const SITE_ROOT = process.cwd();
const MIRROR_ROOT = path.resolve(SITE_ROOT, '../site-mirror/boenke.cn/www.boenke.cn');
const PUBLIC_ROOT = path.resolve(SITE_ROOT, 'public');

let articleCache: LegacyArticle[] | undefined;
let typeCache: LegacyTypePage[] | undefined;

const LEGACY_CANONICAL_MAP = new Map<string, string>([
  ['211', '/products/insulator-cap-grinding-machine/'],
  ['182', '/news/automatic-cnc-polishing-machine-guide/'],
  ['183', '/news/automatic-cnc-polishing-machine-guide/'],
  ['184', '/news/automatic-cnc-polishing-machine-guide/'],
  ['185', '/news/automatic-cnc-polishing-machine-guide/'],
  ['186', '/news/automatic-cnc-polishing-machine-guide/'],
  ['187', '/news/automatic-cnc-polishing-machine-guide/'],
  ['188', '/news/automatic-cnc-polishing-machine-guide/'],
  ['191', '/news/automatic-cnc-polishing-machine-guide/'],
  ['192', '/products/five-axis-cnc-polishing-machine/'],
  ['196', '/news/automatic-cnc-polishing-machine-guide/'],
  ['218', '/videos/casting-automatic-grinding-video/'],
  ['224', '/products/casting-automatic-grinding-machine/'],
  ['233', '/products/casting-grinding-robot-cell/'],
  ['238', '/news/grinding-robot-operation-guide/'],
  ['248', '/products/metal-grinding-machine/'],
  ['249', '/products/casting-grinding-robot-cell/'],
  ['250', '/products/cnc-grinding-polishing-machine/'],
  ['246', '/products/casting-automatic-grinding-machine/'],
  ['247', '/products/casting-automatic-grinding-machine/'],
  ['252', '/products/casting-automatic-grinding-machine/'],
  ['253', '/products/casting-automatic-grinding-machine/'],
  ['254', '/products/grinding-robot-workstation/'],
  ['255', '/products/casting-grinding-robot-cell/'],
  ['257', '/products/cnc-grinding-polishing-machine/'],
  ['260', '/products/metal-grinding-machine/'],
  ['262', '/products/casting-gate-riser-grinding-machine/'],
  ['263', '/products/casting-automatic-grinding-machine/'],
  ['264', '/products/casting-automatic-grinding-machine/'],
  ['268', '/products/cnc-grinding-polishing-machine/'],
  ['270', '/products/casting-gate-riser-grinding-machine/'],
  ['271', '/products/metal-grinding-machine/'],
  ['273', '/products/casting-grinding-robot-cell/'],
  ['275', '/products/casting-grinding-robot-cell/'],
  ['278', '/products/casting-automatic-grinding-machine/'],
  ['279', '/products/casting-automatic-grinding-machine/'],
  ['282', '/products/automatic-column-grinding-machine/'],
  ['284', '/products/casting-grinding-robot-cell/'],
  ['286', '/products/casting-automatic-grinding-machine/'],
  ['288', '/products/casting-automatic-grinding-machine/'],
  ['289', '/products/casting-automatic-grinding-machine/'],
  ['291', '/products/grinding-robot-workstation/'],
  ['292', '/products/casting-grinding-robot-cell/'],
  ['293', '/products/cnc-grinding-polishing-machine/'],
  ['294', '/products/casting-automatic-grinding-machine/'],
  ['295', '/products/casting-gate-riser-grinding-machine/'],
  ['296', '/products/grinding-robot-workstation/'],
  ['298', '/products/casting-automatic-grinding-machine/'],
  ['301', '/products/casting-automatic-grinding-machine/'],
  ['302', '/products/automatic-column-grinding-machine/'],
  ['304', '/products/casting-automatic-grinding-machine/'],
  ['305', '/products/automatic-column-grinding-machine/'],
  ['306', '/products/casting-grinding-robot-cell/'],
  ['307', '/products/casting-automatic-grinding-machine/'],
  ['308', '/products/casting-automatic-grinding-machine/'],
  ['313', '/products/automatic-polishing-machine-cell/'],
  ['314', '/products/casting-automatic-grinding-machine/'],
  ['315', '/products/grinding-robot-workstation/'],
  ['316', '/news/automatic-grinding-machine-fault-repair/'],
  ['317', '/news/casting-grinding-machine-maintenance/'],
  ['318', '/news/grinding-robot-maintenance-tips/'],
  ['319', '/news/casting-grinding-machine-maintenance/'],
  ['320', '/news/casting-grinding-machine-maintenance/'],
  ['321', '/news/cnc-polishing-machine-applications/'],
  ['322', '/news/automatic-polishing-machine-applications/'],
  ['324', '/news/grinding-robot-operation-guide/'],
  ['325', '/news/automatic-grinding-machine-usage-guide/'],
  ['326', '/news/automatic-grinding-machine-workshop-upgrade/'],
  ['311', '/news/automatic-cnc-polishing-machine-guide/']
]);

const LEGACY_TYPE_CANONICAL_MAP = new Map<string, string>([
  ['6-1', '/contact/'],
  ['7-1', '/about/'],
  ['8-1', '/products/'],
  ['11-1', '/news/'],
  ['12-1', '/news/'],
  ['19-1', '/products/'],
  ['21-1', '/cases/'],
  ['23-1', '/videos/'],
  ['24-1', '/videos/'],
  ['25-1', '/products/'],
  ['26-1', '/videos/'],
  ['27-1', '/cases/']
]);

function cleanText(input?: string | null) {
  return (input ?? '').replace(/\s+/g, ' ').trim();
}

function truncate(input: string, length = 140) {
  return input.length > length ? `${input.slice(0, length).trim()}...` : input;
}

function hasReadableExcerpt(input: string, minLength = 18) {
  return input.trim().length >= minLength;
}

function buildLegacyExcerptFallback(title: string, category: string, hasEmbed = false) {
  const theme = getLegacyArticleTheme(category, hasEmbed);

  if (theme === 'video') {
    return `${title}。该历史视频内容主要展示设备运行画面、工位动作与打磨效果，便于初步了解方案。`;
  }

  if (theme === 'news') {
    return `${title}。该历史资讯内容围绕设备应用、工艺经验与行业动态整理，便于快速了解相关主题。`;
  }

  if (theme === 'product') {
    return `${title}。该历史产品资料页主要介绍博恩科设备的适配工艺、应用场景与方案方向。`;
  }

  return `${title}。该页面为博恩科历史站点保留内容，方便继续查阅原始资料。`;
}

function normalizeUploadPath(src: string, fallback = '/media/hero-machine.jpg') {
  if (!src) {
    return fallback;
  }

  let normalized = src.trim();

  if (normalized.startsWith('https://www.boenke.cn/uploads/')) {
    normalized = normalized.replace('https://www.boenke.cn', '');
  } else if (normalized.startsWith('../../uploads/')) {
    normalized = normalized.replace('../../', '/');
  } else if (normalized.startsWith('../uploads/')) {
    normalized = normalized.replace('../', '/');
  } else if (normalized.startsWith('uploads/')) {
    normalized = `/${normalized}`;
  }

  if (normalized.startsWith('/uploads/')) {
    const filePath = path.join(PUBLIC_ROOT, normalized.replace(/^\//, ''));
    return existsSync(filePath) ? normalized : fallback;
  }

  return normalized;
}

function normalizeHref(href?: string | null) {
  const value = cleanText(href);

  if (!value || value.startsWith('javascript:')) {
    return '';
  }

  if (value === '../../index.html' || value === '../index.html' || value === 'index.html') {
    return '/';
  }

  if (value === '../../sitemap.xml' || value === '../sitemap.xml' || value === 'sitemap.xml') {
    return '/sitemap.xml';
  }

  if (/^\.\.\/\d+\.html$/.test(value) || /^\d+\.html$/.test(value)) {
    return `/article/${value.replace('../', '')}`;
  }

  if (/^\.\.\/type\/[\d-]+\.html$/.test(value)) {
    return `/article/type/${value.replace('../type/', '')}`;
  }

  if (/^[\d-]+\.html$/.test(value)) {
    return `/article/type/${value}`;
  }

  if (value.startsWith('https://www.boenke.cn/article/type/')) {
    return value.replace('https://www.boenke.cn', '');
  }

  if (value.startsWith('https://www.boenke.cn/article/')) {
    return value.replace('https://www.boenke.cn', '');
  }

  if (value.startsWith('https://www.boenke.cn/uploads/')) {
    return value.replace('https://www.boenke.cn', '');
  }

  return value;
}

function sanitizeContainer(container: HTMLElement) {
  container.querySelectorAll('script, style, .articlePages').forEach((node) => node.remove());

  for (const node of container.querySelectorAll('*')) {
    if (!(node instanceof HTMLElement)) {
      continue;
    }

    for (const attribute of ['class', 'style', 'width', 'height', 'frameborder', 'onclick']) {
      node.removeAttribute(attribute);
    }

    const tag = node.tagName.toLowerCase();

    if (tag === 'a') {
      const href = normalizeHref(node.getAttribute('href'));
      if (href) {
        node.setAttribute('href', href);
      } else {
        node.removeAttribute('href');
      }
    }

    if (tag === 'img') {
      node.setAttribute('src', normalizeUploadPath(node.getAttribute('src') ?? ''));
      node.setAttribute('loading', 'lazy');
      if (!node.getAttribute('alt')) {
        node.setAttribute('alt', '');
      }
    }

    if (tag === 'iframe') {
      const src = cleanText(node.getAttribute('src'));
      if (!src) {
        node.remove();
        continue;
      }
      node.setAttribute('src', src);
      node.setAttribute('loading', 'lazy');
      node.setAttribute('allowfullscreen', 'true');
      node.setAttribute('title', node.getAttribute('title') || '视频');
    }
  }
}

function parseLegacyArticle(fileName: string) {
  const fullPath = path.join(MIRROR_ROOT, 'article', fileName);
  const root = parse(readFileSync(fullPath, 'utf-8'));
  const content = root.querySelector('.introduction.nmt') ?? root.querySelector('.introduction');

  if (!content) {
    return null;
  }

  sanitizeContainer(content);

  const title = cleanText(root.querySelector('.aTitle')?.text || root.querySelector('title')?.text || fileName);
  const category = cleanText(root.querySelector('.classname')?.text) || '资料内容';
  const date = root.querySelector('.articleTime')?.text.match(/(\d{4}-\d{2}-\d{2})/)?.[1] ?? '';
  const embedUrl = cleanText(content.querySelector('iframe')?.getAttribute('src'));
  const extractedExcerpt = cleanText(content.text);
  const metaDescription = cleanText(root.querySelector('meta[name="description"]')?.getAttribute('content'));
  const fallbackExcerpt = buildLegacyExcerptFallback(title, category, Boolean(embedUrl));
  const excerpt = truncate(
    hasReadableExcerpt(extractedExcerpt)
      ? extractedExcerpt
      : hasReadableExcerpt(metaDescription)
        ? metaDescription
        : fallbackExcerpt
  );
  const image = normalizeUploadPath(content.querySelector('img')?.getAttribute('src') ?? '', '');

  return {
    id: fileName.replace('.html', ''),
    title,
    category,
    date,
    excerpt,
    image: image || null,
    embedUrl: embedUrl || null,
    contentHtml: content.innerHTML.trim()
  } satisfies LegacyArticle;
}

function parseLegacyTypePage(fileName: string) {
  const fullPath = path.join(MIRROR_ROOT, 'article/type', fileName);
  const raw = readFileSync(fullPath, 'utf-8');
  const redirectMatch = raw.match(/window\.location\.href='([^']+)'/);
  const root = parse(raw);
  const intro = root.querySelector('.introduction');
  const articleIds = Array.from(root.querySelectorAll('.newslist a, .productslist a, .picslist a'))
    .map((node) => node.getAttribute('href') ?? '')
    .map((href) => href.match(/(\d+)\.html$/)?.[1] ?? '')
    .filter(Boolean);

  let introHtml = '';
  let introText = '';

  if (intro) {
    sanitizeContainer(intro);
    introHtml = intro.innerHTML.trim();
    introText = cleanText(intro.text);
  }

  let kind: LegacyTypePage['kind'] = 'empty';

  if (redirectMatch) {
    kind = 'redirect';
  } else if (root.querySelector('.newslist')) {
    kind = 'news';
  } else if (root.querySelector('.productslist')) {
    kind = 'products';
  } else if (root.querySelector('.picslist')) {
    kind = 'gallery';
  } else if (introHtml) {
    kind = 'page';
  }

  return {
    id: fileName.replace('.html', ''),
    title: cleanText(root.querySelector('.classname')?.text || root.querySelector('title')?.text || fileName),
    introHtml,
    introText,
    articleIds,
    kind,
    redirectTarget: redirectMatch ? redirectMatch[1] : null
  } satisfies LegacyTypePage;
}

export function getLegacyArticles() {
  if (!articleCache) {
    articleCache = readdirSync(path.join(MIRROR_ROOT, 'article'))
      .filter((fileName) => /^\d+\.html$/.test(fileName))
      .map((fileName) => parseLegacyArticle(fileName))
      .filter(Boolean) as LegacyArticle[];
  }

  return articleCache;
}

export function getLegacyArticle(id: string) {
  return getLegacyArticles().find((item) => item.id === id);
}

export function getLegacyArticlesByIds(ids: string[]) {
  return ids.map((id) => getLegacyArticle(id)).filter(Boolean) as LegacyArticle[];
}

export function getLegacyTypePages() {
  if (!typeCache) {
    typeCache = readdirSync(path.join(MIRROR_ROOT, 'article/type'))
      .filter((fileName) => /^[\d-]+\.html$/.test(fileName))
      .map((fileName) => parseLegacyTypePage(fileName));
  }

  return typeCache;
}

export function getLegacyTypePage(id: string) {
  return getLegacyTypePages().find((item) => item.id === id);
}

export function getLegacyBaseTypeId(id: string) {
  if (/^(11|12)-\d+$/.test(id)) {
    return `${id.split('-')[0]}-1`;
  }

  return id;
}

export function getLegacyCanonicalForArticle(id: string) {
  return LEGACY_CANONICAL_MAP.get(id) ?? null;
}

export function getLegacyCanonicalForType(id: string) {
  return LEGACY_TYPE_CANONICAL_MAP.get(id) ?? null;
}

export function getLegacyArticleTheme(category: string, hasEmbed = false): LegacyArticleTheme {
  if (hasEmbed) {
    return 'video';
  }

  if (category === '新闻动态' || category === '企业动态') {
    return 'news';
  }

  if (category === '自动打磨机' || category === '自动抛光机' || category === '数控自动抛光机' || category === '打磨机器人') {
    return 'product';
  }

  return 'generic';
}

export function getLegacySection(category: string, hasEmbed = false) {
  const theme = getLegacyArticleTheme(category, hasEmbed);

  if (theme === 'video') {
    return { label: '视频中心', href: '/videos/' };
  }

  if (theme === 'news') {
    return { label: '新闻动态', href: '/news/' };
  }

  if (theme === 'product') {
    return { label: '产品方案', href: '/products/' };
  }

  return { label: '网站内容', href: '/' };
}

export function getLegacyArticleHighlights(article: LegacyArticle, limit = 3) {
  const root = parse(article.contentHtml);
  const texts = Array.from(root.querySelectorAll('p, li, td, th'))
    .map((node) => cleanText(node.text))
    .filter((text) => text.length > 18);

  const unique: string[] = [];

  for (const text of texts) {
    if (unique.some((item) => item === text || item.includes(text) || text.includes(item))) {
      continue;
    }

    unique.push(text);

    if (unique.length >= limit) {
      break;
    }
  }

  return unique.length ? unique.map((item) => truncate(item, 100)) : [article.excerpt];
}

export function getLegacyArticleBody(article: LegacyArticle) {
  const root = parse(`<div>${article.contentHtml}</div>`);
  const firstHeading = root.querySelector('h1');

  root.querySelectorAll('iframe').forEach((node) => node.remove());

  if (firstHeading) {
    const headingText = cleanText(firstHeading.text.replace(/\u00a0/g, ' '));
    if (headingText && (headingText.includes(article.title) || article.title.includes(headingText))) {
      firstHeading.remove();
    }
  }

  root.querySelectorAll('p, div').forEach((node) => {
    const text = cleanText(node.text.replace(/\u00a0/g, ' '));
    const hasStructuredChild = Boolean(node.querySelector('img, table, ul, ol, blockquote'));

    if (!text && !hasStructuredChild) {
      node.remove();
    }
  });

  const html = root.innerHTML.trim();
  const textBlocks = Array.from(root.querySelectorAll('p, li, td, th, h1, h2, h3, h4'))
    .map((node) => cleanText(node.text.replace(/\u00a0/g, ' ')))
    .filter(Boolean);
  const hasReadableText = textBlocks.some((text) => text.length >= 18);
  const hasStructuredContent = Boolean(root.querySelector('img, table, ul, ol, blockquote'));

  return {
    html,
    hasContent: Boolean(html) && (hasReadableText || hasStructuredContent)
  };
}

export function getLegacyTypeIntroBody(page: LegacyTypePage) {
  const root = parse(`<div>${page.introHtml}</div>`);
  const firstHeading = root.querySelector('h1');

  root.querySelectorAll('iframe').forEach((node) => node.remove());

  if (firstHeading) {
    const headingText = cleanText(firstHeading.text.replace(/\u00a0/g, ' '));
    if (headingText && (headingText.includes(page.title) || page.title.includes(headingText))) {
      firstHeading.remove();
    }
  }

  root.querySelectorAll('p, div').forEach((node) => {
    const text = cleanText(node.text.replace(/\u00a0/g, ' '));
    const hasStructuredChild = Boolean(node.querySelector('img, table, ul, ol, blockquote'));

    if (!text && !hasStructuredChild) {
      node.remove();
    }
  });

  const html = root.innerHTML.trim();
  const textBlocks = Array.from(root.querySelectorAll('p, li, td, th, h1, h2, h3, h4'))
    .map((node) => cleanText(node.text.replace(/\u00a0/g, ' ')))
    .filter(Boolean);
  const hasReadableText = textBlocks.some((text) => text.length >= 18);
  const hasStructuredContent = Boolean(root.querySelector('img, table, ul, ol, blockquote'));

  return {
    html,
    hasContent: Boolean(html) && (hasReadableText || hasStructuredContent)
  };
}

export function getLegacyRelatedArticles(article: LegacyArticle, limit = 6) {
  const theme = getLegacyArticleTheme(article.category, Boolean(article.embedUrl));
  const related = getLegacyArticles()
    .filter((item) => item.id !== article.id)
    .filter((item) => getLegacyArticleTheme(item.category, Boolean(item.embedUrl)) === theme)
    .filter((item) => item.category === article.category || theme !== 'news')
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
    .slice(0, limit);

  return related;
}
