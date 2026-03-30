import { company, type FaqItem } from '../data/site';

type Crumb = {
  name: string;
  url: string;
};

export function absoluteUrl(pathname: string) {
  return new URL(pathname, company.domain).toString();
}

export function buildOrganizationSchema() {
  return {
    '@type': 'Organization',
    '@id': `${company.domain}#organization`,
    name: company.legalName,
    url: company.domain,
    logo: absoluteUrl('/media/logo.png'),
    description: company.description,
    telephone: company.phone,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CN',
      addressRegion: company.province,
      addressLocality: company.city,
      streetAddress: company.address
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: company.phone,
      areaServed: 'CN',
      availableLanguage: ['zh-CN']
    }
  };
}

export function buildWebsiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${company.domain}#website`,
    name: company.legalName,
    url: company.domain,
    inLanguage: 'zh-CN',
    description: company.description
  };
}

export function buildBreadcrumbSchema(items: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function buildFaqSchema(items: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };
}

export function buildProductSchema(input: {
  name: string;
  description: string;
  image: string;
  category: string;
  url: string;
}) {
  return {
    '@type': 'Product',
    name: input.name,
    description: input.description,
    image: absoluteUrl(input.image),
    category: input.category,
    url: input.url,
    brand: {
      '@type': 'Brand',
      name: company.name
    }
  };
}

export function buildArticleSchema(input: {
  title: string;
  description: string;
  image: string;
  url: string;
  datePublished: string;
  type?: 'NewsArticle' | 'Article';
}) {
  return {
    '@type': input.type ?? 'Article',
    headline: input.title,
    description: input.description,
    image: [absoluteUrl(input.image)],
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    inLanguage: 'zh-CN',
    mainEntityOfPage: input.url,
    author: {
      '@type': 'Organization',
      name: company.legalName
    },
    publisher: {
      '@type': 'Organization',
      name: company.legalName,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/media/logo.png')
      }
    }
  };
}

export function buildLocalBusinessSchema() {
  return {
    '@type': 'LocalBusiness',
    name: company.legalName,
    image: absoluteUrl('/media/hero-machine.jpg'),
    url: company.domain,
    telephone: company.phone,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CN',
      addressRegion: company.province,
      addressLocality: company.city,
      streetAddress: company.address
    }
  };
}
