import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getProductById } from '@/lib/products.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const items = Array.isArray(body?.items) ? body.items : [];
  if (items.length === 0) {
    return NextResponse.json({ error: 'Your cart is empty.' }, { status: 400 });
  }

  const origin = request.headers.get('origin') || new URL(request.url).origin;

  const line_items = [];
  let subtotal = 0;

  for (const entry of items) {
    const product = getProductById(entry?.id);
    if (!product) {
      return NextResponse.json({ error: `Unknown product: ${entry?.id}` }, { status: 400 });
    }
    const quantity = Math.min(99, Math.max(1, Number(entry?.quantity) || 1));
    const unitAmount = Math.round(product.price * 100);
    subtotal += unitAmount * quantity;

    line_items.push({
      quantity,
      price_data: {
        currency: 'gbp',
        unit_amount: unitAmount,
        product_data: {
          name: product.name,
          images: [`${origin}${product.image}`],
        },
      },
    });
  }

  const freeShippingThreshold = 25000; // £250.00 in pence
  const shippingAmount = subtotal > 0 && subtotal < freeShippingThreshold ? 1500 : 0;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items,
      shipping_address_collection: { allowed_countries: ['GB'] },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: shippingAmount, currency: 'gbp' },
            display_name: shippingAmount ? 'UK Delivery' : 'Free UK Delivery',
          },
        },
      ],
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout session creation failed:', error);
    return NextResponse.json({ error: 'Could not start checkout. Please try again.' }, { status: 500 });
  }
}
