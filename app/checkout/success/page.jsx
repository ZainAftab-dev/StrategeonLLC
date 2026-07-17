import Stripe from 'stripe';
import Link from 'next/link';
import { CheckCircle2, XCircle } from 'lucide-react';
import ClearCartOnLoad from './clear-cart-on-load.jsx';

export const metadata = {
  title: 'Order confirmed',
  robots: { index: false, follow: false },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

function formatMoney(pence) {
  return `£${(Number(pence) / 100).toFixed(2)}`;
}

export default async function CheckoutSuccessPage({ searchParams }) {
  const { session_id: sessionId } = await searchParams;

  let session = null;
  let error = null;

  if (sessionId) {
    try {
      session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items'],
      });
    } catch {
      error = 'We could not find that order.';
    }
  }

  const paid = session?.payment_status === 'paid';
  const lineItems = session?.line_items?.data ?? [];
  const shipping = session?.collected_information?.shipping_details;

  return (
    <main className="confirmation-page">
      {paid && <ClearCartOnLoad />}
      <section className="page-intro confirmation-intro">
        <Link href="/" className="confirmation-logo">Strategeon</Link>
        {paid ? (
          <>
            <div className="confirmation-icon is-success">
              <CheckCircle2 size={40} strokeWidth={1.5} />
            </div>
            <p className="eyebrow">Order confirmed</p>
            <h1>Thank you{session.customer_details?.name ? `, ${session.customer_details.name}` : ''}</h1>
            <p>
              A confirmation has been sent to {session.customer_details?.email || 'your email'}. We&apos;ll get this
              dispatched right away.
            </p>
          </>
        ) : (
          <>
            <div className="confirmation-icon is-failed">
              <XCircle size={40} strokeWidth={1.5} />
            </div>
            <p className="eyebrow">Order not confirmed</p>
            <h1>We could not confirm this order</h1>
            <p>{error || 'This checkout session is not complete yet.'}</p>
          </>
        )}
      </section>

      {paid && (
        <section className="page-section confirmation-details">
          <div className="order-summary">
            <div className="order-summary-header">
              <h2>Order summary</h2>
              <span className="order-reference">Ref: {session.id}</span>
            </div>
            <ul className="order-items">
              {lineItems.map((item) => (
                <li key={item.id}>
                  <span className="order-item-name">
                    {item.description}
                    <span className="order-item-qty">× {item.quantity}</span>
                  </span>
                  <span>{formatMoney(item.amount_total)}</span>
                </li>
              ))}
            </ul>
            <div className="order-totals">
              <div>
                <span>Subtotal</span>
                <span>{formatMoney(session.amount_subtotal)}</span>
              </div>
              <div>
                <span>Delivery</span>
                <span>
                  {session.total_details?.amount_shipping
                    ? formatMoney(session.total_details.amount_shipping)
                    : 'Free'}
                </span>
              </div>
              <div className="order-total-line">
                <span>Total paid</span>
                <span>{formatMoney(session.amount_total)}</span>
              </div>
            </div>
          </div>

          {shipping?.address && (
            <div className="order-shipping">
              <h2>Shipping to</h2>
              <p>
                {shipping.name}
                <br />
                {shipping.address.line1}
                <br />
                {shipping.address.line2 && (
                  <>
                    {shipping.address.line2}
                    <br />
                  </>
                )}
                {shipping.address.city} {shipping.address.postal_code}
                <br />
                {shipping.address.country}
              </p>
            </div>
          )}
        </section>
      )}

      <p className="confirmation-cta">
        <Link href="/shop" className="primary-button">
          Continue shopping
        </Link>
      </p>
    </main>
  );
}
