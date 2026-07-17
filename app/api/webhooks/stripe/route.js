import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// This is the authoritative order-confirmation path: Stripe calls this endpoint
// directly, so an order is recorded even if the customer closes the tab before
// the success-page redirect fires, or pays with a delayed method (e.g. bank debit).
function recordConfirmedOrder(session) {
  console.log('[stripe] order confirmed', {
    id: session.id,
    email: session.customer_details?.email,
    name: session.customer_details?.name,
    amountTotal: session.amount_total,
    currency: session.currency,
  });
  // TODO: once there's a database, persist the order here instead of logging.
}

function recordFailedPayment(session) {
  console.warn('[stripe] payment failed', { id: session.id, email: session.customer_details?.email });
}

export async function POST(request) {
  const rawBody = await request.text();
  const signature = request.headers.get('stripe-signature');

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (error) {
    console.error('[stripe] webhook signature verification failed:', error.message);
    return NextResponse.json({ error: 'Invalid signature.' }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed':
    case 'checkout.session.async_payment_succeeded': {
      const session = event.data.object;
      if (session.payment_status === 'paid') {
        recordConfirmedOrder(session);
      }
      break;
    }
    case 'checkout.session.async_payment_failed': {
      recordFailedPayment(event.data.object);
      break;
    }
    default:
      break;
  }

  return NextResponse.json({ received: true });
}
