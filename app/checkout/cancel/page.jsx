import Link from 'next/link';
import { XCircle } from 'lucide-react';

export const metadata = {
  title: 'Checkout cancelled',
  robots: { index: false, follow: false },
};

export default function CheckoutCancelPage() {
  return (
    <main className="confirmation-page">
      <section className="page-intro confirmation-intro">
        <Link href="/" className="confirmation-logo">Strategeon</Link>
        <div className="confirmation-icon is-neutral">
          <XCircle size={40} strokeWidth={1.5} />
        </div>
        <p className="eyebrow">Checkout cancelled</p>
        <h1>Your order was not placed</h1>
        <p>Nothing was charged. Your cart is still saved, so you can pick up where you left off any time.</p>
      </section>

      <p className="confirmation-cta">
        <Link href="/shop" className="primary-button">
          Back to shop
        </Link>
      </p>
    </main>
  );
}
