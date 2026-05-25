import '../src/styles.css';

export const metadata = {
  metadataBase: new URL('https://www.strategeonllc.com'),
  title: {
    default: 'Strategeon | Networking & Wi-Fi Products UK',
    template: '%s | Strategeon',
  },
  description:
    'Buy TP-Link routers, range extenders, mesh systems, switches, and adapters in the UK. Clear specs, honest reviews, and fast delivery.',
  keywords: [
    'TP-Link UK', 'Wi-Fi routers UK', 'range extenders', 'mesh Wi-Fi',
    'network switches', 'USB Wi-Fi adapters', 'networking products UK',
    'buy TP-Link online', 'home network UK',
  ],
  authors: [{ name: 'Strategeon' }],
  creator: 'Strategeon',
  publisher: 'Strategeon',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.strategeonllc.com',
    siteName: 'Strategeon',
    title: 'Strategeon | Networking & Wi-Fi Products UK',
    description:
      'Buy TP-Link routers, range extenders, mesh systems, switches, and adapters in the UK.',
    images: [
      {
        url: '/apple-icon.png',
        width: 180,
        height: 180,
        alt: 'Strategeon',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Strategeon | Networking & Wi-Fi Products UK',
    description:
      'Buy TP-Link routers, range extenders, mesh systems, switches, and adapters in the UK.',
  },
  alternates: {
    canonical: 'https://www.strategeonllc.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
