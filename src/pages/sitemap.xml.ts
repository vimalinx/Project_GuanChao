import { cases, company, newsArticles, products, videos } from '../data/site';
import { getLegacyArticles, getLegacyTypePages } from '../lib/mirror-content';

const staticRoutes = ['/', '/about/', '/products/', '/cases/', '/videos/', '/news/', '/contact/'];

function makeUrl(path: string) {
  return new URL(path, company.domain).toString();
}

export function GET() {
  const routes = [
    ...staticRoutes,
    ...products.map((item) => `/products/${item.slug}/`),
    ...cases.map((item) => `/cases/${item.slug}/`),
    ...videos.map((item) => `/videos/${item.slug}/`),
    ...newsArticles.map((item) => `/news/${item.slug}/`),
    ...getLegacyArticles().map((item) => `/article/${item.id}.html`),
    ...getLegacyTypePages().map((item) => `/article/type/${item.id}.html`)
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${makeUrl(route)}</loc>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
