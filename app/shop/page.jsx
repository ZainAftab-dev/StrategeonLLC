import App from '../../src/App.jsx';
import { products } from '../../lib/products.js';

const BASE_URL = 'https://www.strategeonllc.com';

export const metadata = {
  title: 'Shop Networking Products | Strategeon UK',
  description: 'Browse 20+ TP-Link networking products. Wi-Fi 6 routers from £39.99, range extenders from £19.99, mesh systems, switches and USB adapters. Free UK delivery on orders over £30.',
  alternates: { canonical: `${BASE_URL}/shop` },
  openGraph: {
    title: 'Shop Networking Products | Strategeon UK',
    description: 'Browse 20+ TP-Link networking products. Wi-Fi 6 routers from £39.99, range extenders from £19.99, mesh systems, switches and USB adapters.',
    url: `${BASE_URL}/shop`,
  },
};

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'TP-Link Networking Products',
  url: `${BASE_URL}/shop`,
  numberOfItems: products.length,
  itemListElement: products.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `${BASE_URL}/product/${p.id}`,
    name: p.name,
  })),
};

export default function ShopPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <App initialRoute="/shop" />
    </>
  );
}
