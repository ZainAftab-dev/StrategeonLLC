const BASE_URL = 'https://www.strategeonllc.com';

const productIds = [
  're330', 're315', 're550', 're300',
  'tl-mr105', 'tl-mr6400', 'archer-mr200', 'm7200',
  'archer-ax12', 'archer-ax23', 'archer-c6', 'archer-c80', 'archer-vr300',
  'deco-m4', 'deco-e4', 'deco-s4',
  'tl-sg1005lp', 'tl-sg108',
  'archer-t3u', 're220',
];

export default function sitemap() {
  const staticPages = ['/', '/shop', '/collections', '/support'].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1.0 : 0.8,
  }));

  const productPages = productIds.map((id) => ({
    url: `${BASE_URL}/product/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...productPages];
}
