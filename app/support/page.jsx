import App from '../../src/App.jsx';

const BASE_URL = 'https://www.strategeonllc.com';

export const metadata = {
  title: 'Help & Support — Setup, Coverage & Returns | Strategeon UK',
  description: 'Get help with TP-Link setup, Wi-Fi coverage planning, device compatibility, delivery tracking, warranty claims and returns. Free UK customer support.',
  alternates: { canonical: `${BASE_URL}/support` },
  openGraph: {
    title: 'Help & Support | Strategeon UK',
    description: 'Setup guides, coverage planning, compatibility help, delivery info and warranty support for TP-Link products.',
    url: `${BASE_URL}/support`,
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I set up a TP-Link range extender?',
      acceptedAnswer: { '@type': 'Answer', text: 'Plug the extender halfway between your router and the weak area. Use the Tether app or web interface at tplinkrepeater.net to connect it to your existing Wi-Fi network.' },
    },
    {
      '@type': 'Question',
      name: 'What is the warranty on TP-Link products?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most TP-Link products come with a 2-year limited hardware warranty. Some switches carry a limited lifetime warranty.' },
    },
    {
      '@type': 'Question',
      name: 'What is your returns policy?',
      acceptedAnswer: { '@type': 'Answer', text: 'We offer a 14-day return window for sealed, unopened items. Contact our support team to arrange a return.' },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver across the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, we deliver to all UK addresses. Orders over £30 qualify for free delivery.' },
    },
  ],
};

export default function SupportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <App initialRoute="/support" />
    </>
  );
}
