import App from '../../src/App.jsx';

const BASE_URL = 'https://www.strategeonllc.com';

export const metadata = {
  title: 'Product Collections — Extenders, Routers, Mesh & More | Strategeon UK',
  description: 'Browse TP-Link product collections: range extenders for dead zones, 4G LTE routers, whole-home mesh Wi-Fi systems, gigabit switches and USB adapters. UK stock.',
  alternates: { canonical: `${BASE_URL}/collections` },
  openGraph: {
    title: 'Product Collections | Strategeon UK',
    description: 'Browse TP-Link range extenders, 4G LTE routers, mesh Wi-Fi, switches and adapters. All in stock for UK delivery.',
    url: `${BASE_URL}/collections`,
  },
};

export default function CollectionsPage() {
  return <App initialRoute="/collections" />;
}
