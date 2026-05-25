import { Inter } from 'next/font/google';
import '../src/styles.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const BASE_URL = 'https://www.strategeonllc.com';

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Strategeon | TP-Link Networking Products UK',
    template: '%s | Strategeon',
  },
  description:
    'Shop TP-Link routers, Wi-Fi extenders, mesh systems, switches and adapters in the UK. Clear specs, honest reviews, and fast delivery.',
  keywords: [
    'TP-Link UK', 'buy TP-Link online', 'Wi-Fi routers UK', 'range extenders UK',
    'mesh Wi-Fi UK', 'network switches UK', 'USB Wi-Fi adapters', 'home networking UK',
    '4G LTE router UK', 'Wi-Fi 6 router UK',
  ],
  authors: [{ name: 'Strategeon', url: BASE_URL }],
  creator: 'Strategeon',
  publisher: 'Strategeon',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: BASE_URL,
    siteName: 'Strategeon',
    title: 'Strategeon | TP-Link Networking Products UK',
    description: 'Shop TP-Link routers, Wi-Fi extenders, mesh systems, switches and adapters in the UK.',
    images: [{ url: '/apple-icon.png', width: 180, height: 180, alt: 'Strategeon' }],
  },
  twitter: {
    card: 'summary',
    title: 'Strategeon | TP-Link Networking Products UK',
    description: 'Shop TP-Link routers, Wi-Fi extenders, mesh systems, switches and adapters in the UK.',
  },
  alternates: { canonical: BASE_URL },
  verification: { google: 'AxDb-5wB7TiG3sZnmmnyMZY-L_ao2AEzS2j662ACL5c' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
