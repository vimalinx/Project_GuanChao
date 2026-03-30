import { readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { parse } from 'node-html-parser';

const distDir = path.resolve('dist');
const legacyOrigin = 'https://www.boenke.cn';
const siteOrigin = (process.env.PUBLIC_SITE_URL ?? legacyOrigin).replace(/\/+$/, '');
const basePath = normalizeBase(process.env.PUBLIC_BASE_PATH ?? '/');
const siteRoot = basePath === '/' ? siteOrigin : `${siteOrigin}${basePath}`;

function normalizeBase(value) {
  if (!value || value === '/') {
    return '/';
  }

  return `/${value.replace(/^\/+|\/+$/g, '')}`;
}

function rewritePath(value) {
  if (!value || !value.startsWith('/') || value.startsWith('//')) {
    return value;
  }

  if (basePath === '/' || value === basePath || value.startsWith(`${basePath}/`)) {
    return value;
  }

  return `${basePath}${value}`;
}

function rewriteString(value) {
  if (!value) {
    return value;
  }

  if (value.startsWith(legacyOrigin)) {
    return `${siteRoot}${value.slice(legacyOrigin.length)}`;
  }

  if (/^(?:[a-z]+:)?\/\//i.test(value) || /^(?:mailto|tel|data|javascript):/i.test(value) || value.startsWith('#')) {
    return value;
  }

  return rewritePath(value);
}

function rewriteSrcSet(value) {
  return value
    .split(',')
    .map((item) => {
      const trimmed = item.trim();

      if (!trimmed) {
        return trimmed;
      }

      const [url, ...rest] = trimmed.split(/\s+/);
      const rewrittenUrl = rewriteString(url);

      return rest.length ? `${rewrittenUrl} ${rest.join(' ')}` : rewrittenUrl;
    })
    .join(', ');
}

function rewriteJson(value) {
  if (Array.isArray(value)) {
    return value.map((item) => rewriteJson(item));
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, rewriteJson(entry)]));
  }

  if (typeof value === 'string') {
    return rewriteString(value);
  }

  return value;
}

async function collectFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectFiles(fullPath)));
      continue;
    }

    files.push(fullPath);
  }

  return files;
}

async function rewriteHtml(filePath) {
  const raw = await readFile(filePath, 'utf-8');
  const root = parse(raw, {
    comment: true,
    script: true,
    style: true
  });

  for (const node of root.querySelectorAll('*')) {
    for (const attribute of ['href', 'src', 'poster', 'content']) {
      const current = node.getAttribute(attribute);

      if (current) {
        node.setAttribute(attribute, rewriteString(current));
      }
    }

    const currentSrcSet = node.getAttribute('srcset');

    if (currentSrcSet) {
      node.setAttribute('srcset', rewriteSrcSet(currentSrcSet));
    }
  }

  for (const script of root.querySelectorAll('script[type="application/ld+json"]')) {
    try {
      const parsed = JSON.parse(script.innerHTML);
      script.set_content(JSON.stringify(rewriteJson(parsed)));
    } catch {
      // Ignore invalid JSON-LD blocks and keep the original output.
    }
  }

  await writeFile(filePath, root.toString(), 'utf-8');
}

async function rewriteTextFile(filePath) {
  const raw = await readFile(filePath, 'utf-8');
  const rewritten = raw.replaceAll(legacyOrigin, siteRoot);
  await writeFile(filePath, rewritten, 'utf-8');
}

const distStats = await stat(distDir).catch(() => null);

if (!distStats?.isDirectory()) {
  throw new Error(`Missing dist directory at ${distDir}. Run the Astro build first.`);
}

const files = await collectFiles(distDir);

for (const filePath of files) {
  if (filePath.endsWith('.html')) {
    await rewriteHtml(filePath);
    continue;
  }

  if (filePath.endsWith('.xml') || filePath.endsWith('.txt')) {
    await rewriteTextFile(filePath);
  }
}

console.log(`Prepared GitHub Pages output with site root ${siteRoot}`);
