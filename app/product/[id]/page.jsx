import { notFound } from 'next/navigation';
import App from '../../../src/App.jsx';
import { products, getProductById } from '../../../lib/products.js';

const BASE_URL = 'https://www.strategeonllc.com';

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return {};

  const desc = `Buy ${product.name} for £${product.price.toFixed(2)}. ${product.specs.join(', ')}. ${product.stock}. Fast UK delivery from Strategeon.`;

  return {
    title: `${product.name} — £${product.price.toFixed(2)} | Strategeon UK`,
    description: desc,
    alternates: { canonical: `${BASE_URL}/product/${product.id}` },
    openGraph: {
      title: `${product.name} | Strategeon UK`,
      description: desc,
      url: `${BASE_URL}/product/${product.id}`,
      images: [{ url: `${BASE_URL}${product.image}`, width: 800, height: 600, alt: product.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Strategeon UK`,
      description: desc,
    },
  };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: `${BASE_URL}${product.image}`,
    description: `${product.specs.join('. ')}.`,
    brand: { '@type': 'Brand', name: 'TP-Link' },
    sku: product.id.toUpperCase(),
    offers: {
      '@type': 'Offer',
      url: `${BASE_URL}/product/${product.id}`,
      priceCurrency: 'GBP',
      price: product.price.toFixed(2),
      priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      availability: product.stock === 'In stock' ? 'https://schema.org/InStock' : 'https://schema.org/LimitedAvailability',
      seller: { '@type': 'Organization', name: 'Strategeon', url: BASE_URL },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: String(product.reviews),
      bestRating: '5',
      worstRating: '1',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Shop', item: `${BASE_URL}/shop` },
      { '@type': 'ListItem', position: 3, name: product.name, item: `${BASE_URL}/product/${product.id}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <App initialRoute={`/product/${product.id}`} />
    </>
  );
}
