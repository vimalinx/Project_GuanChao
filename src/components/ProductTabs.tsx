import { useMemo, useState } from 'react';

type Category = {
  slug: string;
  name: string;
};

type Product = {
  slug: string;
  name: string;
  category: string;
  categoryName: string;
  image: string;
  excerpt: string;
  summary: string;
};

type Props = {
  categories: Category[];
  products: Product[];
};

const basePath = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, '');

function withBase(pathname: string) {
  return pathname.startsWith('/') ? `${basePath}${pathname}` || '/' : `${basePath}/${pathname}`;
}

export default function ProductTabs({ categories, products }: Props) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.slug ?? '');

  const visibleProducts = useMemo(
    () => products.filter((item) => item.category === activeCategory),
    [activeCategory, products]
  );

  return (
    <div className="catalog-tabs">
      <div className="tab-row" role="tablist" aria-label="产品分类切换">
        {categories.map((category) => (
          <button
            key={category.slug}
            className={category.slug === activeCategory ? 'is-active' : undefined}
            onClick={() => setActiveCategory(category.slug)}
            role="tab"
            aria-selected={category.slug === activeCategory}
            type="button"
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="product-card-grid">
        {visibleProducts.map((product) => (
          <article className="product-card" key={product.slug}>
            <a
              className="product-card-media"
              href={withBase(`/products/${product.slug}/`)}
              aria-label={`查看 ${product.name}`}
            >
              <img src={withBase(product.image)} alt={product.name} loading="lazy" />
              <span className="product-card-overlay">
                <span>进一步了解</span>
              </span>
            </a>
            <div className="product-card-body">
              <span className="card-tag">{product.categoryName}</span>
              <h3>{product.name}</h3>
              <p className="product-card-excerpt">{product.excerpt}</p>
              <div className="card-actions">
                <span className="product-card-summary">{product.summary}</span>
                <a href={withBase(`/products/${product.slug}/`)}>查看详情</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
