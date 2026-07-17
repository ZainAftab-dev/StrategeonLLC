import { products } from '../lib/products.js';

const BASE_URL = 'https://www.strategeonllc.com';

export default function sitemap() {
  const staticPages = ['/', '/shop', '/collections', '/support'].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1.0 : 0.8,
  }));

  const productPages = products.map(({ id }) => ({
    url: `${BASE_URL}/product/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...productPages];
}
