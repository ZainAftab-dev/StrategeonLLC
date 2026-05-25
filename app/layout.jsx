import '../src/styles.css';
import './globals.css';

export const metadata = {
  title: 'Strategeon | Networking & Computer Accessories UK',
  description:
    'A Next.js ecommerce storefront for networking products, electronics, and computer accessories.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
