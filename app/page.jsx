import App from '../src/App.jsx';

const BASE_URL = 'https://www.strategeonllc.com';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Strategeon',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/apple-icon.png`,
    width: 180,
    height: 180,
  },
  image: `${BASE_URL}/apple-icon.png`,
  description: 'UK retailer of TP-Link networking products including routers, Wi-Fi extenders, mesh systems, switches and adapters.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '01/98 Grovepark Street',
    addressLocality: 'Glasgow',
    postalCode: 'G20 7JQ',
    addressCountry: 'GB',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+44-7308-647170',
    email: 'info@strategeonllc.com',
    contactType: 'customer support',
    availableLanguage: 'English',
    areaServed: 'GB',
  },
  sameAs: [
    'https://www.instagram.com/',
    'https://www.linkedin.com/',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Strategeon',
  url: BASE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/shop?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <App initialRoute="/" />
    </>
  );
}
