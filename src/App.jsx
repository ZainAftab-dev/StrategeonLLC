'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Cpu,
  CreditCard,
  Mail,
  MapPin,
  Menu,
  Minus,
  PackageCheck,
  Phone,
  Plus,
  RotateCcw,
  Search,
  ShieldCheck,
  ShoppingCart,
  SlidersHorizontal,
  Truck,
  Wifi,
  X,
  Zap,
} from 'lucide-react';

const categories = [
  {
    id: 'extenders',
    name: 'Range Extenders',
    summary: 'Plug-in boosters for weak rooms, dead zones, and AP mode.',
    image: '/images/products/range-extender-overview.jpg',
  },
  {
    id: 'lte',
    name: '4G LTE Routers',
    summary: 'SIM-based home and travel routers for backup internet.',
    image: '/images/products/lte-router-mr6400.jpg',
  },
  {
    id: 'switches',
    name: 'Switches',
    summary: 'Gigabit, 2.5G, PoE, and managed switches for clean networks.',
    image: '/images/products/switch-sg108.jpg',
  },
  {
    id: 'adapters',
    name: 'Adapters',
    summary: 'USB Wi-Fi, Bluetooth, PCIe, and Ethernet expansion.',
    image: '/images/products/adapter-archer-t3u.jpg',
  },
  {
    id: 'mesh',
    name: 'Deco Mesh',
    summary: 'Whole-home mesh systems for seamless room-to-room coverage.',
    image: '/images/products/mesh-deco-m4.jpg',
  },
];

const storeReviews = [
  {
    name: 'Oliver Bennett',
    location: 'Birmingham',
    date: '14 May 2026',
    rating: '5.0',
    order: 'Router + switch order',
    title: 'Everything arrived together and the setup notes were actually useful.',
    body: 'I ordered an Archer router and an 8-port switch for a small office. The product pages made it clear which cables and ports I needed, and delivery status stayed accurate.',
    initials: 'OB',
  },
  {
    name: 'Emily Turner',
    location: 'Manchester',
    date: '29 April 2026',
    rating: '4.8',
    order: 'Range extender order',
    title: 'Good recommendations without making me compare twenty tabs.',
    body: 'I was fixing weak Wi-Fi in one bedroom, not replacing the whole network. The site helped me pick an extender instead of overbuying a mesh kit.',
    initials: 'ET',
  },
  {
    name: 'James Walker',
    location: 'Bristol',
    date: '18 April 2026',
    rating: '5.0',
    order: 'Deco mesh bundle',
    title: 'The coverage guidance matched the house pretty closely.',
    body: 'I used the support section before buying a Deco set. It explained placement and backhaul in normal language, then the checkout was simple.',
    initials: 'JW',
  },
  {
    name: 'Sophie Clarke',
    location: 'Leeds',
    date: '31 March 2026',
    rating: '4.7',
    order: 'USB adapter order',
    title: 'Small order, still felt handled properly.',
    body: 'Bought a USB Wi-Fi adapter for an older desktop. The specs were easy to scan, the image matched the item, and the cart total was clear.',
    initials: 'SC',
  },
];

const products = [
  {
    id: 're330',
    name: 'TP-Link RE330 AC1200 Mesh Wi-Fi Range Extender',
    category: 'extenders',
    price: 29.99,
    oldPrice: 39.99,
    badge: 'Amazon pick',
    image: '/images/products/extender-re330.jpg',
    specs: ['AC1200 dual-band', 'OneMesh support', 'Smart signal light'],
    stock: 'In stock',
    rating: '4.4',
    reviews: 1842,
  },
  {
    id: 're315',
    name: 'TP-Link RE315 AC1200 Mesh Wi-Fi Range Extender',
    category: 'extenders',
    price: 24.99,
    oldPrice: 29.99,
    badge: 'Best seller',
    image: '/images/products/range-extender-overview.jpg',
    specs: ['300 + 867 Mbps', 'EasyMesh compatible', 'Fast Ethernet port'],
    stock: 'In stock',
    rating: '4.5',
    reviews: 16237,
  },
  {
    id: 're550',
    name: 'TP-Link RE550 AC1900 Wi-Fi Range Extender',
    category: 'extenders',
    price: 59.99,
    oldPrice: 79.99,
    badge: 'High speed',
    image: '/images/products/extender-re505x.jpg',
    specs: ['AC1900 dual-band', '3 external antennas', 'Gigabit Ethernet'],
    stock: 'In stock',
    rating: '4.9',
    reviews: 8711,
  },
  {
    id: 're300',
    name: 'TP-Link RE300 AC1200 Mesh Wi-Fi Range Extender',
    category: 'extenders',
    price: 27.99,
    oldPrice: 34.99,
    badge: 'OneMesh',
    image: '/images/products/extender-re300.jpg',
    specs: ['AC1200 dual-band', 'Adaptive path selection', 'App control'],
    stock: 'In stock',
    rating: '4.3',
    reviews: 3140,
  },
  {
    id: 'tl-mr105',
    name: 'TP-Link TL-MR105 4G LTE Wireless Router',
    category: 'lte',
    price: 49.99,
    oldPrice: 59.99,
    badge: '4G LTE',
    image: '/images/products/extender-re700x.jpg',
    specs: ['150 Mbps LTE', 'Share up to 32 devices', 'SIM card slot'],
    stock: 'In stock',
    rating: '4.2',
    reviews: 982,
  },
  {
    id: 'tl-mr6400',
    name: 'TP-Link TL-MR6400 300 Mbps Wireless N 4G LTE Router',
    category: 'lte',
    price: 69.99,
    oldPrice: 89.99,
    badge: 'SIM router',
    image: '/images/products/lte-router-mr6400.jpg',
    specs: ['4G LTE Cat4', '300 Mbps Wi-Fi', 'Detachable LTE antennas'],
    stock: 'In stock',
    rating: '4.4',
    reviews: 5760,
  },
  {
    id: 'archer-mr200',
    name: 'TP-Link Archer MR200 AC750 Wireless Dual Band 4G LTE Router',
    category: 'lte',
    price: 79.99,
    oldPrice: 99.99,
    badge: 'Dual band LTE',
    image: '/images/products/lte-router-m7350.jpg',
    specs: ['AC750 Wi-Fi', '4G LTE SIM slot', 'LAN/WAN port'],
    stock: 'In stock',
    rating: '4.5',
    reviews: 4290,
  },
  {
    id: 'm7200',
    name: 'TP-Link M7200 4G LTE Mobile Wi-Fi Hotspot',
    category: 'lte',
    price: 44.99,
    oldPrice: 59.99,
    badge: 'Portable',
    image: '/images/products/lte-router-m7200.jpg',
    specs: ['150 Mbps 4G', 'Up to 10 devices', '2000mAh battery'],
    stock: 'In stock',
    rating: '4.3',
    reviews: 3187,
  },
  {
    id: 'archer-ax12',
    name: 'TP-Link Archer AX12 AX1500 Dual Band Wi-Fi 6 Router',
    category: 'routers',
    price: 49.99,
    oldPrice: 69.99,
    badge: 'Wi-Fi 6',
    image: '/images/products/router-ax12.jpg',
    specs: ['AX1500 Wi-Fi 6', '1201 Mbps 5GHz', 'OFDMA + MU-MIMO'],
    stock: 'In stock',
    rating: '4.6',
    reviews: 2246,
  },
  {
    id: 'archer-ax23',
    name: 'TP-Link Archer AX23 AX1800 Dual Band Wi-Fi 6 Router',
    category: 'routers',
    price: 69.99,
    oldPrice: 89.99,
    badge: 'AX1800',
    image: '/images/products/router-ax73.jpg',
    specs: ['Wi-Fi 6', 'Gigabit ports', 'EasyMesh compatible'],
    stock: 'In stock',
    rating: '4.6',
    reviews: 10280,
  },
  {
    id: 'archer-c6',
    name: 'TP-Link Archer C6 AC1200 MU-MIMO Gigabit Wi-Fi Router',
    category: 'routers',
    price: 39.99,
    oldPrice: 49.99,
    badge: 'Gigabit',
    image: '/images/products/router-archer-c6.jpg',
    specs: ['AC1200 dual-band', 'MU-MIMO', '4 external antennas'],
    stock: 'In stock',
    rating: '4.5',
    reviews: 18650,
  },
  {
    id: 'archer-c80',
    name: 'TP-Link Archer C80 AC1900 MU-MIMO Wi-Fi Router',
    category: 'routers',
    price: 59.99,
    oldPrice: 79.99,
    badge: 'AC1900',
    image: '/images/products/router-archer-vr400.jpg',
    specs: ['AC1900 Wi-Fi', 'Beamforming', 'Gigabit ports'],
    stock: 'In stock',
    rating: '4.6',
    reviews: 7944,
  },
  {
    id: 'archer-vr300',
    name: 'TP-Link Archer VR300 AC1200 Wireless VDSL/ADSL Modem Router',
    category: 'routers',
    price: 74.99,
    oldPrice: 99.99,
    badge: 'Modem router',
    image: '/images/products/router-archer-vr300.jpg',
    specs: ['VDSL/ADSL modem', 'AC1200 Wi-Fi', 'DSL + LAN/WAN'],
    stock: 'Limited stock',
    rating: '4.2',
    reviews: 1460,
  },
  {
    id: 'deco-m4',
    name: 'TP-Link Deco M4 AC1200 Whole Home Mesh Wi-Fi System',
    category: 'mesh',
    price: 89.99,
    oldPrice: 129.99,
    badge: 'Mesh kit',
    image: '/images/products/mesh-deco-m4.jpg',
    specs: ['AC1200 mesh', 'Seamless roaming', 'Parental controls'],
    stock: 'In stock',
    rating: '4.6',
    reviews: 22500,
  },
  {
    id: 'deco-e4',
    name: 'TP-Link Deco E4 AC1200 Whole Home Mesh Wi-Fi System',
    category: 'mesh',
    price: 69.99,
    oldPrice: 99.99,
    badge: 'Value mesh',
    image: '/images/products/mesh-deco-e4.jpg',
    specs: ['AC1200 mesh', 'App setup', 'Fast Ethernet ports'],
    stock: 'In stock',
    rating: '4.5',
    reviews: 19842,
  },
  {
    id: 'deco-s4',
    name: 'TP-Link Deco S4 AC1200 Whole Home Mesh Wi-Fi System',
    category: 'mesh',
    price: 109.99,
    oldPrice: 149.99,
    badge: '3-pack',
    image: '/images/products/mesh-deco-m4.jpg',
    specs: ['Up to 5,500 sq ft', 'AC1200 mesh', 'Gigabit ports'],
    stock: 'In stock',
    rating: '4.6',
    reviews: 24870,
  },
  {
    id: 'tl-sg1005lp',
    name: 'TP-Link TL-SG1005LP 5-Port Gigabit Desktop Switch with 4-Port PoE+',
    category: 'switches',
    price: 49.99,
    oldPrice: 59.99,
    badge: 'PoE+',
    image: '/images/products/switch-sg1005lp.jpg',
    specs: ['5 gigabit ports', '4 PoE+ ports', '40W PoE budget'],
    stock: 'In stock',
    rating: '4.7',
    reviews: 3910,
  },
  {
    id: 'tl-sg108',
    name: 'TP-Link TL-SG108 8-Port Gigabit Desktop Switch',
    category: 'switches',
    price: 19.99,
    oldPrice: 24.99,
    badge: '8-port',
    image: '/images/products/switch-sg108.jpg',
    specs: ['8 gigabit ports', 'Metal housing', 'Plug and play'],
    stock: 'In stock',
    rating: '4.8',
    reviews: 62400,
  },
  {
    id: 'archer-t3u',
    name: 'TP-Link Archer T3U AC1300 Mini Wireless MU-MIMO USB Adapter',
    category: 'adapters',
    price: 16.99,
    oldPrice: 24.99,
    badge: 'USB Wi-Fi',
    image: '/images/products/adapter-archer-t3u.jpg',
    specs: ['AC1300 dual-band', 'MU-MIMO', 'USB 3.0 mini adapter'],
    stock: 'In stock',
    rating: '4.4',
    reviews: 10800,
  },
  {
    id: 're220',
    name: 'TP-Link RE220 AC750 Wi-Fi Range Extender',
    category: 'extenders',
    price: 19.99,
    oldPrice: 29.99,
    badge: 'Budget pick',
    image: '/images/products/adapter-re220.jpg',
    specs: ['AC750 dual-band', 'Ethernet port', 'Tether app setup'],
    stock: 'In stock',
    rating: '4.4',
    reviews: 118200,
  },
];

const categoryNames = Object.fromEntries(categories.map((category) => [category.id, category.name]));

const fallbackImages = {
  extenders: '/images/product-extender.svg',
  lte: '/images/product-router-ax55.svg',
  routers: '/images/product-router-ax73.svg',
  mesh: '/images/product-mesh-be63.svg',
  switches: '/images/product-switch-poe.svg',
  adapters: '/images/product-usb-ethernet.svg',
};

const productProfiles = {
  extenders: {
    ideal: 'Single rooms, upstairs bedrooms, garages, and Wi-Fi dead zones',
    compatibility: ['Works with standard Wi-Fi routers', 'Supports phones, laptops, TVs, consoles, and smart home devices', 'Best placed halfway between the router and weak room'],
    box: ['Range extender unit', 'Quick installation guide', 'Setup card with app/web instructions'],
    warranty: ['2-year limited hardware warranty', '14-day sealed-item return window', 'Store support for placement and setup questions'],
    rows: [['Best for', 'Fixing weak Wi-Fi in one or two rooms'], ['Setup', 'Wall plug setup through app or web browser'], ['Network mode', 'Repeater mode and access point mode on supported models']],
  },
  lte: {
    ideal: 'Backup internet, travel homes, shops, kiosks, and places without fixed broadband',
    compatibility: ['Works with compatible 4G LTE SIM cards', 'Connects wired devices through LAN ports', 'Supports phones, laptops, cameras, and smart TVs over Wi-Fi'],
    box: ['4G LTE router or hotspot', 'Power adapter or charging cable', 'Ethernet cable where applicable', 'Quick installation guide'],
    warranty: ['2-year limited hardware warranty', 'SIM/network compatibility help before purchase', '14-day sealed-item return window'],
    rows: [['Best for', 'SIM-based backup internet and portable connectivity'], ['Internet source', '4G LTE SIM card or wired WAN on supported models'], ['Setup', 'Insert SIM, power on, then connect devices']],
  },
  routers: {
    ideal: 'Main home Wi-Fi, gaming rooms, streaming, apartments, and small office networks',
    compatibility: ['Works with fiber/cable modem Ethernet handoff', 'Supports modern Wi-Fi phones, laptops, TVs, and consoles', 'Gigabit ports support wired PCs, TVs, and switches'],
    box: ['Wi-Fi router', 'Power adapter', 'Ethernet cable', 'Quick installation guide'],
    warranty: ['2-year limited hardware warranty', 'Firmware/setup guidance through support', '14-day sealed-item return window'],
    rows: [['Best for', 'Replacing or upgrading the main Wi-Fi router'], ['Ports', 'LAN ports for wired devices and switches'], ['Setup', 'Connect modem to WAN port, then follow app/web setup']],
  },
  mesh: {
    ideal: 'Whole-home Wi-Fi, two-story houses, thick walls, and seamless room-to-room roaming',
    compatibility: ['Works with most modem/router internet connections', 'Supports phones, laptops, smart TVs, consoles, and smart home devices', 'Best when units are spread between rooms instead of hidden in cabinets'],
    box: ['Mesh Wi-Fi units', 'Power adapters for each unit', 'Ethernet cable', 'Quick installation guide'],
    warranty: ['2-year limited hardware warranty', 'Coverage planning help before purchase', '14-day sealed-item return window'],
    rows: [['Best for', 'Whole-home coverage with seamless roaming'], ['Coverage style', 'Multiple units work together under one Wi-Fi name'], ['Setup', 'Place the main unit by the modem, then add satellite units']],
  },
  switches: {
    ideal: 'Adding wired ports for desks, TVs, cameras, access points, NAS, and small offices',
    compatibility: ['Works with routers, access points, PCs, printers, cameras, and TVs', 'Use Cat5e/Cat6 Ethernet cables for gigabit links', 'PoE models can power supported cameras and access points'],
    box: ['Desktop switch', 'Power adapter', 'Installation guide', 'Mounting feet or kit where applicable'],
    warranty: ['Limited lifetime or 2-year hardware coverage depending on model', 'Port planning support before purchase', '14-day sealed-item return window'],
    rows: [['Best for', 'Adding more stable wired Ethernet ports'], ['Install style', 'Plug-and-play desktop or wall-mount placement'], ['Cable type', 'Cat5e or Cat6 Ethernet recommended']],
  },
  adapters: {
    ideal: 'Laptops, desktops, and mini PCs that need Wi-Fi or Ethernet added',
    compatibility: ['Works with supported Windows/macOS/Linux versions by model', 'USB adapters require an available USB port', 'Ethernet adapters connect to routers, switches, docks, and wall ports'],
    box: ['Network adapter', 'Quick installation guide', 'Driver link or setup card where required'],
    warranty: ['2-year limited hardware warranty', 'Driver/setup help available from support', '14-day sealed-item return window'],
    rows: [['Best for', 'Adding Wi-Fi or Ethernet to a device'], ['Connection', 'USB, PCIe, or Ethernet depending on model'], ['Setup', 'Plug in and install driver if required']],
  },
};

function formatMoney(value) {
  return `£${Number(value).toFixed(2)}`;
}

function safeSetLocalStorage(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

function safeRemoveLocalStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch {
    // Storage may be blocked in private browsing or strict embedded previews.
  }
}

function ProductImage({ product, src = product.image, alt = product.name, width = 720, height = 560, className = '', loading = 'lazy' }) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      onError={(event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = fallbackImages[product.category] || '/images/product-router-ax73.svg';
      }}
    />
  );
}

function getProductGallery(product) {
  return [{ src: product.image, label: 'Product photo' }];
}

function getProductProfile(product) {
  const profile = productProfiles[product.category] || productProfiles.routers;
  return {
    specs: [
      ['Product type', categoryNames[product.category]],
      ['Model', product.name.replace('TP-Link ', '')],
      ['Key standard', product.specs[0]],
      ['Highlights', product.specs.slice(1).join(', ')],
      ['Availability', product.stock],
      ['Store rating', `${product.rating} / 5 from ${product.reviews.toLocaleString()} reviews`],
      ...profile.rows,
    ],
    ideal: profile.ideal,
    compatibility: profile.compatibility,
    box: profile.box,
    warranty: profile.warranty,
  };
}

function getRoute() {
  if (typeof window === 'undefined') {
    return '/';
  }
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  return path;
}

function App({ initialRoute } = {}) {
  const cartLoadedRef = useRef(false);
  const [route, setRoute] = useState(() => initialRoute || getRoute());
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sort, setSort] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    function onPopState() {
      setRoute(getRoute());
      setNavOpen(false);
      window.scrollTo({ top: 0 });
    }

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('strategeon-cart') || '[]');
      if (Array.isArray(saved)) {
        setCart(
          saved
            .filter((item) => products.some((product) => product.id === item.id))
            .map((item) => ({
              ...products.find((product) => product.id === item.id),
              quantity: Math.min(99, Math.max(1, Number(item.quantity) || 1)),
            })),
        );
      }
    } catch {
      safeRemoveLocalStorage('strategeon-cart');
    } finally {
      cartLoadedRef.current = true;
    }
  }, []);

  useEffect(() => {
    if (!cartLoadedRef.current) return;
    safeSetLocalStorage(
      'strategeon-cart',
      JSON.stringify(cart.map(({ id, quantity }) => ({ id, quantity }))),
    );
  }, [cart]);

  useEffect(() => {
    function closeWithEscape(event) {
      if (event.key === 'Escape') {
        setIsCartOpen(false);
        setSelectedProduct(null);
        setNavOpen(false);
      }
    }

    window.addEventListener('keydown', closeWithEscape);
    return () => window.removeEventListener('keydown', closeWithEscape);
  }, []);

  const visibleProducts = useMemo(() => {
    const term = query.trim().toLowerCase();
    const list = products.filter((product) => {
      const categoryMatch = activeCategory === 'all' || product.category === activeCategory;
      const queryMatch =
        !term ||
        [product.name, categoryNames[product.category], product.badge, product.specs.join(' ')]
          .join(' ')
          .toLowerCase()
          .includes(term);

      return categoryMatch && queryMatch;
    });

    if (sort === 'price-low') return [...list].sort((a, b) => a.price - b.price);
    if (sort === 'price-high') return [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [activeCategory, query, sort]);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal > 0 && subtotal < 250 ? 15 : 0;
  const total = subtotal + shipping;

  function navigate(path) {
    window.history.pushState({}, '', path);
    setRoute(getRoute());
    setNavOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function addToCart(product) {
    setCart((items) => {
      const existing = items.find((item) => item.id === product.id);
      if (existing) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Math.min(99, item.quantity + 1) }
            : item,
        );
      }
      return [...items, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  }

  function updateQuantity(productId, delta) {
    setCart((items) =>
      items
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.min(99, Math.max(0, item.quantity + delta)) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function resetFilters() {
    setQuery('');
    setActiveCategory('all');
    setSort('featured');
  }

  function submitNewsletter(event) {
    event.preventDefault();
    const email = newsletterEmail.trim();
    if (!email) return setNewsletterStatus('Enter an email address.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return setNewsletterStatus('Use a valid email, like buyer@example.co.uk.');
    }
    const saved = safeSetLocalStorage('strategeon-newsletter-email', email);
    setNewsletterStatus(
      saved
        ? 'You are on the launch list.'
        : 'Email looks valid, but this browser blocked saving it locally.',
    );
  }

  const routeProduct = route.startsWith('/product/')
    ? products.find((product) => product.id === route.split('/').pop())
    : null;

  return (
    <div className="site-shell">
      <div className="announcement-bar" role="region" aria-label="Store announcements">
        <span>UK launch offer: free delivery over GBP 250</span>
        <span>Same-day processing before 2 PM</span>
        <span>Need help choosing? Visit Support for beginner buying guidance</span>
      </div>
      <Header
        cartCount={cartCount}
        navOpen={navOpen}
        route={route}
        navigate={navigate}
        onCartOpen={() => setIsCartOpen(true)}
        onNavToggle={() => setNavOpen((value) => !value)}
      />

      {route === '/' && (
        <HomePage
          navigate={navigate}
          onAddToCart={addToCart}
          onProductSelect={setSelectedProduct}
        />
      )}
      {route === '/shop' && (
        <ShopPage
          activeCategory={activeCategory}
          filtersOpen={filtersOpen}
          navigate={navigate}
          products={visibleProducts}
          query={query}
          sort={sort}
          onAddToCart={addToCart}
          onCategoryChange={setActiveCategory}
          onFiltersToggle={() => setFiltersOpen((value) => !value)}
          onProductSelect={setSelectedProduct}
          onQueryChange={setQuery}
          onReset={resetFilters}
          onSortChange={setSort}
        />
      )}
      {route === '/collections' && (
        <CollectionsPage navigate={navigate} onCategoryChange={setActiveCategory} />
      )}
      {route === '/support' && <SupportPage />}
      {routeProduct && (
        <ProductPage product={routeProduct} onAddToCart={addToCart} navigate={navigate} />
      )}
      {!['/', '/shop', '/collections', '/support'].includes(route) && !routeProduct && (
        <NotFoundPage navigate={navigate} />
      )}

      <Footer
        newsletterEmail={newsletterEmail}
        newsletterStatus={newsletterStatus}
        navigate={navigate}
        onNewsletterChange={setNewsletterEmail}
        onNewsletterSubmit={submitNewsletter}
      />

      <CartDrawer
        cart={cart}
        isOpen={isCartOpen}
        shipping={shipping}
        subtotal={subtotal}
        total={total}
        onClose={() => setIsCartOpen(false)}
        onRemove={(id) => setCart((items) => items.filter((item) => item.id !== id))}
        onUpdateQuantity={updateQuantity}
      />

      <QuickView
        product={selectedProduct}
        navigate={navigate}
        onAddToCart={addToCart}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

function Header({ cartCount, navOpen, route, navigate, onCartOpen, onNavToggle }) {
  const links = [
    ['/', 'Home'],
    ['/shop', 'Shop'],
    ['/collections', 'Collections'],
    ['/support', 'Support'],
  ];

  return (
    <header className="site-header">
      <button className="brand-button" type="button" onClick={() => navigate('/')}>
        <span>Strategeon</span>
        <small>Networking & accessories</small>
      </button>
      <nav className={navOpen ? 'main-nav open' : 'main-nav'} aria-label="Primary navigation">
        {links.map(([path, label]) => (
          <button
            className={route === path ? 'active' : ''}
            key={path}
            type="button"
            onClick={() => navigate(path)}
          >
            {label}
          </button>
        ))}
      </nav>
      <button className="icon-button nav-toggle" type="button" onClick={onNavToggle} aria-label="Toggle navigation">
        <Menu size={19} />
      </button>
      <button className="cart-button" type="button" onClick={onCartOpen} aria-label={`Open cart with ${cartCount} items`}>
        <ShoppingCart size={19} />
        <span>{cartCount}</span>
      </button>
    </header>
  );
}

function HomePage({ navigate, onAddToCart, onProductSelect }) {
  const featured = products.slice(0, 10);
  const deals = products.filter((product) => product.oldPrice).slice(0, 6);
  const heroProducts = ['deco-s4', 'tl-sg108', 'archer-ax23']
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);
  const useCaseProducts = {
    gaming: products.find((product) => product.id === 'archer-ax23'),
    office: products.find((product) => product.id === 'tl-sg108'),
    deadZones: products.find((product) => product.id === 'deco-m4'),
  };

  return (
    <main>
      <section className="tech-hero">
        <div className="hero-copy">
          <p className="eyebrow">Routers, extenders, switches, adapters</p>
          <h1>Upgrade your home network without guessing.</h1>
          <p>
            Shop TP-Link networking products with clear specs, ratings, availability, and
            setup notes for homes, gaming rooms, offices, and backup internet.
          </p>
          <div className="hero-actions">
            <button type="button" onClick={() => navigate('/shop')}>
              Shop networking gear <ArrowRight size={18} />
            </button>
            <button type="button" onClick={() => navigate('/collections')}>
              Browse categories
            </button>
          </div>
        </div>
        <div className="hero-device">
          <div className="hero-product-stage" aria-label="Featured TP-Link product photos">
            {heroProducts.map((product) => (
              <button type="button" key={product.id} onClick={() => onProductSelect(product)} aria-label={`Quick view ${product.name}`}>
                <ProductImage product={product} loading="eager" />
                <span>{product.name.replace('TP-Link ', '').split(' ').slice(0, 3).join(' ')}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="deal-strip" aria-label="Current deals">
        {deals.map((product) => (
          <button type="button" key={product.id} onClick={() => onProductSelect(product)}>
            <span>{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% off</span>
            {product.name.replace('TP-Link ', '').slice(0, 38)}
          </button>
        ))}
      </section>

      <section className="trust-row" aria-label="Shopping benefits">
        <div><Truck size={20} /><span>Fast dispatch on stocked items</span></div>
        <div><ShieldCheck size={20} /><span>Warranty-backed networking gear</span></div>
        <div><Zap size={20} /><span>Setup-ready bundles and cables</span></div>
      </section>

      <section className="page-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Featured categories</p>
            <h2>Shop by network need</h2>
          </div>
          <button type="button" onClick={() => navigate('/collections')}>
            All collections <ArrowRight size={17} />
          </button>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <button
              className="category-tile"
              key={category.id}
              type="button"
              onClick={() => navigate('/collections')}
            >
              <img
                src={category.image}
                alt=""
                width="420"
                height="320"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = fallbackImages[category.id] || '/images/product-router-ax73.svg';
                }}
              />
              <span>{category.name}</span>
              <p>{category.summary}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="page-section dark-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Amazon-style catalog</p>
            <h2>Popular networking products</h2>
          </div>
          <button type="button" onClick={() => navigate('/shop')}>
            Shop all <ArrowRight size={17} />
          </button>
        </div>
        <ProductGrid
          products={featured}
          navigate={navigate}
          onAddToCart={onAddToCart}
          onProductSelect={onProductSelect}
        />
      </section>

      <StoreFeedback />

      <section className="page-section buyer-reviews">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Real-world use cases</p>
            <h2>What customers compare before buying</h2>
          </div>
        </div>
        <div className="review-grid wide">
          <article>
            {useCaseProducts.gaming && <ProductImage product={useCaseProducts.gaming} width="360" height="220" />}
            <strong>Gaming and streaming</strong>
            <span>Buyers usually compare Wi-Fi 6 routers, gigabit ports, and OFDMA support before upgrading.</span>
          </article>
          <article>
            {useCaseProducts.office && <ProductImage product={useCaseProducts.office} width="360" height="220" />}
            <strong>Home office desks</strong>
            <span>Switches and USB Ethernet adapters help keep laptops, docks, NAS devices, and printers stable.</span>
          </article>
          <article>
            {useCaseProducts.deadZones && <ProductImage product={useCaseProducts.deadZones} width="360" height="220" />}
            <strong>Dead-zone fixes</strong>
            <span>Extenders are cheaper for one room. Mesh is better when several rooms need consistent roaming.</span>
          </article>
        </div>
      </section>
    </main>
  );
}

function StoreFeedback() {
  return (
    <section className="store-feedback page-section">
      <div className="feedback-summary">
        <p className="eyebrow">Store feedback</p>
        <h2>Trusted by home users and small offices</h2>
        <div className="feedback-score">
          <strong>4.9</strong>
          <span>average store rating</span>
        </div>
        <p>Fast dispatch, clear compatibility notes, and support before checkout.</p>
      </div>
      <div className="store-review-grid">
        {storeReviews.map((review) => (
          <article className="store-review-card" key={`${review.name}-${review.date}`}>
            <div className="review-card-head">
              <span>{review.initials}</span>
              <div>
                <strong>{review.name}</strong>
                <small>{review.location} / {review.date}</small>
              </div>
              <b>{review.rating}</b>
            </div>
            <p className="verified-line"><Check size={15} /> Verified store order / {review.order}</p>
            <h3>{review.title}</h3>
            <p>{review.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ShopPage({
  activeCategory,
  filtersOpen,
  navigate,
  products,
  query,
  sort,
  onAddToCart,
  onCategoryChange,
  onFiltersToggle,
  onProductSelect,
  onQueryChange,
  onReset,
  onSortChange,
}) {
  return (
    <main className="shop-page">
      <PageIntro
        eyebrow="Shop"
        title="Networking products and computer accessories"
        text="Compare mesh kits, Wi-Fi routers, switches, adapters, extenders, and cabling essentials."
      />
      <div className="shop-toolbar">
        <button className="filter-toggle" type="button" onClick={onFiltersToggle} aria-expanded={filtersOpen}>
          <SlidersHorizontal size={18} />
          Filters
        </button>
        <span>{products.length} products</span>
      </div>
      <div className={filtersOpen ? 'shop-layout filters-visible' : 'shop-layout'}>
        <aside className="filters" aria-label="Product filters">
          <label className="search-field">
            <span>Search products</span>
            <input
              value={query}
              maxLength={90}
              onChange={(event) => onQueryChange(event.target.value.slice(0, 90))}
              placeholder="RE315, Archer, PoE, USB adapter"
            />
          </label>
          <div className="filter-group">
            <span>Category</span>
            <div className="filter-list">
              <button className={activeCategory === 'all' ? 'active' : ''} type="button" onClick={() => onCategoryChange('all')}>
                All products
              </button>
              {categories.map((category) => (
                <button
                  className={activeCategory === category.id ? 'active' : ''}
                  key={category.id}
                  type="button"
                  onClick={() => onCategoryChange(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          <label className="select-field">
            <span>Sort</span>
            <select value={sort} onChange={(event) => onSortChange(event.target.value)}>
              <option value="featured">Featured</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
            </select>
            <ChevronDown size={16} aria-hidden="true" />
          </label>
        </aside>
        <section>
          <ProductGrid
            products={products}
            navigate={navigate}
            onAddToCart={onAddToCart}
            onProductSelect={onProductSelect}
          />
          {products.length === 0 && (
            <div className="empty-results" role="status">
              <h3>No matching products.</h3>
              <p>Try a broader search term or remove the category filter.</p>
              <button type="button" onClick={onReset}>Reset filters</button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

function CollectionsPage({ navigate, onCategoryChange }) {
  return (
    <main>
      <PageIntro
        eyebrow="Collections"
        title="Choose the right category for your setup"
        text="Separate pages and category groups make it easier to shop by coverage, speed, ports, and accessories."
      />
      <section className="page-section">
        <div className="collection-page-grid">
          {categories.map((category) => (
            <article className="collection-panel" key={category.id}>
              <img
                src={category.image}
                alt=""
                width="520"
                height="360"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = fallbackImages[category.id] || '/images/product-router-ax73.svg';
                }}
              />
              <div>
                <h2>{category.name}</h2>
                <p>{category.summary}</p>
                <button type="button" onClick={() => {
                  onCategoryChange(category.id);
                  navigate('/shop');
                }}>
                  Shop {category.name}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function SupportPage() {
  const [activeGuide, setActiveGuide] = useState('coverage');
  const [supportStatus, setSupportStatus] = useState('');
  const [supportForm, setSupportForm] = useState({ name: '', email: '', message: '' });
  const guides = {
    coverage: {
      title: 'Coverage planning in plain English',
      icon: <Wifi size={28} />,
      text: 'If Wi-Fi is weak in one room, an extender is usually enough. If several rooms are weak, or people move between floors, mesh is the cleaner choice.',
      checks: ['One weak bedroom: buy a range extender', 'Weak Wi-Fi on two floors: buy a Deco mesh kit', 'Place an extender halfway between the router and the weak room', 'Keep routers and mesh units open, high, and away from metal cabinets'],
    },
    speed: {
      title: 'Speed and ports without jargon',
      icon: <Cpu size={28} />,
      text: 'Most homes are fine with gigabit ports. Multi-gig only matters when your internet plan or wired devices are faster than ordinary gigabit.',
      checks: ['100 Mbps internet: AC1200 or AX1500 routers are fine', '500 Mbps to 1 Gbps internet: choose Wi-Fi 6 and gigabit ports', 'Need more wired ports: add a gigabit switch', 'Laptop has no Ethernet port: buy a USB Ethernet adapter'],
    },
    poe: {
      title: 'PoE power for cameras and access points',
      icon: <Zap size={28} />,
      text: 'PoE means one Ethernet cable can carry both internet and power. It is useful for cameras, ceiling access points, and clean office installs.',
      checks: ['Count how many cameras or access points need power', 'Check PoE port count, not only total switch ports', 'Budget 8-15W for many basic devices', 'Leave extra wattage so the switch is not always maxed out'],
    },
    setup: {
      title: 'Setup help after delivery',
      icon: <ShieldCheck size={28} />,
      text: 'Start simple: connect the main router first, confirm internet works, then add extenders, mesh units, switches, or adapters one by one.',
      checks: ['Use the app or web setup printed on the product label', 'Name 2.4GHz and 5GHz clearly if they are separate', 'Restart the modem before blaming the router', 'Test near the router first, then test the weak room'],
    },
  };
  const quickHelp = [
    {
      icon: <Wifi size={24} />,
      problem: 'Wi-Fi is weak in one room',
      answer: 'Start with a range extender like RE315, RE330, or RE220.',
    },
    {
      icon: <ShieldCheck size={24} />,
      problem: 'Wi-Fi is bad across the whole house',
      answer: 'Choose Deco mesh. It is easier for multi-room coverage.',
    },
    {
      icon: <Truck size={24} />,
      problem: 'Internet goes down sometimes',
      answer: 'Use a 4G LTE router with a SIM card as backup internet.',
    },
    {
      icon: <Cpu size={24} />,
      problem: 'I need more cable ports',
      answer: 'Add a gigabit switch. Use PoE if cameras or access points need power.',
    },
    {
      icon: <Search size={24} />,
      problem: 'My laptop has no Ethernet port',
      answer: 'Buy a USB Ethernet or USB Wi-Fi adapter.',
    },
  ];
  const glossary = [
    ['Router', 'The main device that shares internet around your home.'],
    ['Range extender', 'A plug-in device that boosts Wi-Fi into one weak area.'],
    ['Mesh Wi-Fi', 'Several units that work together for smoother whole-home coverage.'],
    ['Switch', 'Adds more wired Ethernet ports for PCs, TVs, cameras, and desks.'],
    ['PoE', 'Power over Ethernet. One cable gives both power and network.'],
    ['Gigabit', 'A common fast wired speed, good for most homes and offices.'],
  ];
  const active = guides[activeGuide];

  return (
    <main>
      <PageIntro
        eyebrow="Support"
        title="Not sure what to buy? Start here."
        text="Plain-language help for people who do not know networking terms yet. Pick the problem you have and we will point you toward the right type of product."
      />
      <section className="support-helper page-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Quick picker</p>
            <h2>Tell us what is going wrong</h2>
          </div>
        </div>
        <div className="problem-grid">
          {quickHelp.map((item) => (
            <article key={item.problem}>
              <div>{item.icon}</div>
              <h3>{item.problem}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="support-grid page-section">
        <button className={activeGuide === 'coverage' ? 'active' : ''} type="button" onClick={() => setActiveGuide('coverage')}>
          <Wifi size={28} />
          <h2>Coverage</h2>
          <p>For weak rooms, thick walls, and whole-home Wi-Fi decisions.</p>
        </button>
        <button className={activeGuide === 'speed' ? 'active' : ''} type="button" onClick={() => setActiveGuide('speed')}>
          <Cpu size={28} />
          <h2>Speed</h2>
          <p>For internet plans, wired ports, gigabit, and adapters.</p>
        </button>
        <button className={activeGuide === 'poe' ? 'active' : ''} type="button" onClick={() => setActiveGuide('poe')}>
          <Zap size={28} />
          <h2>PoE</h2>
          <p>For cameras, access points, and powered Ethernet installs.</p>
        </button>
        <button className={activeGuide === 'setup' ? 'active' : ''} type="button" onClick={() => setActiveGuide('setup')}>
          <ShieldCheck size={28} />
          <h2>Setup</h2>
          <p>For first-time installation, placement, and testing basics.</p>
        </button>
      </section>
      <section className="support-detail page-section" aria-live="polite">
        <div>{active.icon}</div>
        <h2>{active.title}</h2>
        <p>{active.text}</p>
        <ul>
          {active.checks.map((check) => <li key={check}>{check}</li>)}
        </ul>
      </section>
      <section className="support-education page-section">
        <div>
          <p className="eyebrow">Beginner glossary</p>
          <h2>Networking words, translated</h2>
        </div>
        <div className="glossary-grid">
          {glossary.map(([term, meaning]) => (
            <article key={term}>
              <strong>{term}</strong>
              <p>{meaning}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="support-contact page-section">
        <div>
          <p className="eyebrow">Still confused?</p>
          <h2>Send us your room count and internet plan</h2>
          <p>Tell us how many rooms need Wi-Fi, your internet speed, and what feels slow. We will suggest a router, extender, mesh kit, switch, or adapter.</p>
        </div>
        <form noValidate onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const name = String(formData.get('name') || '').trim();
          const email = String(formData.get('email') || '').trim();
          const message = String(formData.get('message') || '').trim();
          if (!name) {
            setSupportStatus('Enter your name so support can respond properly.');
            return;
          }
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setSupportStatus('Enter a valid email address, like buyer@example.co.uk.');
            return;
          }
          if (message.length < 20) {
            setSupportStatus('Add a few more details about your rooms, internet speed, or the problem.');
            return;
          }
          const saved = safeSetLocalStorage(
            'strategeon-support-request',
            JSON.stringify({ name, email, message }),
          );
          setSupportStatus(
            saved
              ? 'Thanks. A support specialist would review this and recommend the right setup.'
              : 'Your details look valid, but this browser blocked saving the request locally.',
          );
        }}>
          <input
            name="name"
            type="text"
            maxLength={80}
            placeholder="Name"
            aria-label="Name"
            value={supportForm.name}
            onChange={(event) => setSupportForm((form) => ({ ...form, name: event.target.value.slice(0, 80) }))}
          />
          <input
            name="email"
            type="email"
            maxLength={120}
            placeholder="Email"
            aria-label="Email"
            value={supportForm.email}
            onChange={(event) => setSupportForm((form) => ({ ...form, email: event.target.value.slice(0, 120) }))}
          />
          <textarea
            name="message"
            maxLength={420}
            placeholder="Example: 3 bedrooms, router downstairs, weak Wi-Fi upstairs, 100 Mbps internet."
            aria-label="Describe your setup"
            value={supportForm.message}
            onChange={(event) => setSupportForm((form) => ({ ...form, message: event.target.value.slice(0, 420) }))}
          />
          <button type="submit">Get buying help <ShoppingCart size={17} /></button>
          <p aria-live="polite">{supportStatus}</p>
        </form>
      </section>
    </main>
  );
}

function ProductPage({ product, onAddToCart, navigate }) {
  const gallery = getProductGallery(product);
  const details = getProductProfile(product);
  const [activeImage, setActiveImage] = useState(gallery[0]?.src || product.image);

  useEffect(() => {
    setActiveImage(gallery[0]?.src || product.image);
  }, [product.id]);

  return (
    <main className="product-page">
      <button className="back-button" type="button" onClick={() => navigate('/shop')}>Back to shop</button>
      <section className="product-detail">
        <div className="product-gallery">
          <div className="gallery-main">
            <ProductImage product={product} src={activeImage} width="900" height="720" loading="eager" />
          </div>
          {gallery.length > 1 && (
            <div className="gallery-thumbs" aria-label={`${product.name} image gallery`}>
              {gallery.map((image) => (
                <button
                  className={activeImage === image.src ? 'active' : ''}
                  type="button"
                  key={image.src}
                  onClick={() => setActiveImage(image.src)}
                  aria-label={`Show ${image.label}`}
                >
                  <ProductImage product={product} src={image.src} alt="" width="160" height="120" />
                  <span>{image.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="product-summary">
          <p className="eyebrow">{categoryNames[product.category]}</p>
          <h1>{product.name}</h1>
          <strong>{formatMoney(product.price)}</strong>
          <p>{product.stock} / {product.rating} rating / {product.reviews.toLocaleString()} reviews</p>
          <ul>
            {product.specs.map((spec) => <li key={spec}>{spec}</li>)}
          </ul>
          <p className="ideal-line">{details.ideal}</p>
          <button type="button" onClick={() => onAddToCart(product)}>Add to cart</button>
        </div>
      </section>
      <section className="product-info-sections page-section">
        <article className="detail-card spec-card">
          <p className="eyebrow">Detailed specs</p>
          <h2>Technical overview</h2>
          <dl>
            {details.specs.map(([label, value]) => (
              <div key={`${label}-${value}`}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </article>
        <article className="detail-card">
          <p className="eyebrow">Compatibility</p>
          <h2>Works with</h2>
          <ul>{details.compatibility.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
        <article className="detail-card">
          <p className="eyebrow">Box contents</p>
          <h2>What is included</h2>
          <ul>{details.box.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
        <article className="detail-card">
          <p className="eyebrow">Warranty</p>
          <h2>After-sale support</h2>
          <ul>{details.warranty.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
      </section>
    </main>
  );
}

function ProductGrid({ products, navigate, onAddToCart, onProductSelect }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <article className="product-card" key={product.id}>
          <button type="button" className="product-image" onClick={() => onProductSelect(product)} aria-label={`Quick view ${product.name}`}>
            <ProductImage product={product} />
            <span>{product.badge}</span>
          </button>
          <div className="product-info">
            <p>{categoryNames[product.category]}</p>
            <h3>{product.name}</h3>
            <div className="rating-line" aria-label={`${product.rating} out of 5 stars`}>
              <span className="stars">{'★'.repeat(Math.round(Number(product.rating)))}</span>
              <span className="review-count">{product.reviews.toLocaleString()}</span>
            </div>
            <div className="price-line">
              <strong>{formatMoney(product.price)}</strong>
              {product.oldPrice && <del>{formatMoney(product.oldPrice)}</del>}
            </div>
            <p className="stock-line">{product.stock} / Free UK delivery over GBP 250</p>
          </div>
          <ul className="spec-list">
            {product.specs.slice(0, 3).map((spec) => <li key={spec}>{spec}</li>)}
          </ul>
          <div className="product-actions">
            <button type="button" onClick={() => navigate(`/product/${product.id}`)}>Details</button>
            <button type="button" onClick={() => onAddToCart(product)}>Add to cart</button>
          </div>
        </article>
      ))}
    </div>
  );
}

function QuickView({ product, navigate, onAddToCart, onClose }) {
  if (!product) return null;
  return (
    <div className="modal-layer">
      <button className="modal-scrim" type="button" onClick={onClose} aria-label="Close quick view overlay" />
      <section className="quick-view" aria-label={`${product.name} quick view`}>
        <button className="icon-button quick-close" type="button" onClick={onClose} aria-label="Close quick view">
          <X size={20} />
        </button>
        <ProductImage product={product} loading="eager" />
        <div>
          <p className="eyebrow">{categoryNames[product.category]}</p>
          <h2>{product.name}</h2>
          <strong>{formatMoney(product.price)}</strong>
          <p className="stock-line">{product.rating} stars from {product.reviews.toLocaleString()} reviews</p>
          <ul>{product.specs.map((spec) => <li key={spec}>{spec}</li>)}</ul>
          <div className="product-actions">
            <button type="button" onClick={() => { onClose(); navigate(`/product/${product.id}`); }}>Full details</button>
            <button type="button" onClick={() => { onClose(); onAddToCart(product); }}>Add to cart</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function CartDrawer({ cart, isOpen, shipping, subtotal, total, onClose, onRemove, onUpdateQuantity }) {
  const [checkoutStatus, setCheckoutStatus] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  useEffect(() => {
    if (!cart.length) {
      setCheckoutStatus('');
    }
  }, [cart.length]);

  async function handleCheckout() {
    setIsCheckingOut(true);
    setCheckoutStatus('Redirecting to secure checkout...');
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cart.map(({ id, quantity }) => ({ id, quantity })),
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.url) {
        setCheckoutStatus(data.error || 'Something went wrong. Please try again.');
        setIsCheckingOut(false);
        return;
      }
      window.location.href = data.url;
    } catch {
      setCheckoutStatus('Network error. Please try again.');
      setIsCheckingOut(false);
    }
  }

  return (
    <div className={isOpen ? 'drawer-layer open' : 'drawer-layer'} aria-hidden={!isOpen}>
      <button className="modal-scrim" type="button" onClick={onClose} aria-label="Close cart overlay" />
      <aside className="cart-drawer" aria-label="Shopping cart">
        <div className="drawer-header">
          <div>
            <p className="eyebrow">Cart</p>
            <h2>{cart.length ? `${cart.length} line item${cart.length > 1 ? 's' : ''}` : 'Your cart is empty'}</h2>
          </div>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>
        <div className="cart-items">
          {cart.length === 0 && <p className="empty-cart">Add routers, switches, or accessories and they will appear here.</p>}
          {cart.map((item) => (
            <article className="cart-item" key={item.id}>
              <ProductImage product={item} width="96" height="78" />
              <div>
                <h3>{item.name}</h3>
                <p>{formatMoney(item.price)} / {categoryNames[item.category]}</p>
                <div className="quantity-row">
                  <button type="button" onClick={() => onUpdateQuantity(item.id, -1)} aria-label={`Decrease ${item.name} quantity`}><Minus size={15} /></button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => onUpdateQuantity(item.id, 1)} aria-label={`Increase ${item.name} quantity`}><Plus size={15} /></button>
                  <button type="button" onClick={() => onRemove(item.id)}>Remove</button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="drawer-footer">
          <div><span>Subtotal</span><strong>{formatMoney(subtotal)}</strong></div>
          <div><span>Delivery</span><strong>{shipping ? formatMoney(shipping) : 'Free'}</strong></div>
          <div className="total-line"><span>Total</span><strong>{formatMoney(total)}</strong></div>
          <p><Check size={16} /> Free UK delivery over GBP 250.</p>
          <button
            className="checkout-button"
            type="button"
            disabled={!cart.length || isCheckingOut}
            onClick={handleCheckout}
          >
            {isCheckingOut ? 'Redirecting...' : 'Checkout'}
          </button>
          <p aria-live="polite">{checkoutStatus}</p>
        </div>
      </aside>
    </div>
  );
}

function Footer({ newsletterEmail, newsletterStatus, navigate, onNewsletterChange, onNewsletterSubmit }) {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-about">
          <button className="footer-brand" type="button" onClick={() => navigate('/')}>Strategeon</button>
          <p>Networking products, computer accessories, and install essentials for UK homes, gamers, and small offices.</p>
          <div className="footer-contact">
            <span><Phone size={17} /> +44 7308 647170</span>
            <span><Mail size={17} /> info@strategeonllc.com</span>
            <span><MapPin size={17} /> 01/98 Grovepark Street, Glasgow G20 7JQ</span>
          </div>
          <div className="social-links" aria-label="Social links">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">IG</a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">YT</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
          </div>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <div>
            <h3>Shop</h3>
            <button type="button" onClick={() => navigate('/shop')}>All products</button>
            <button type="button" onClick={() => navigate('/collections')}>Range extenders</button>
            <button type="button" onClick={() => navigate('/collections')}>Wi-Fi routers</button>
            <button type="button" onClick={() => navigate('/collections')}>Switches and adapters</button>
          </div>
          <div>
            <h3>Support</h3>
            <button type="button" onClick={() => navigate('/support')}>Coverage planning</button>
            <button type="button" onClick={() => navigate('/support')}>Compatibility help</button>
            <button type="button" onClick={() => navigate('/support')}>Delivery and warranty</button>
            <button type="button" onClick={() => navigate('/support')}>Contact support</button>
          </div>
          <div>
            <h3>Store</h3>
            <button type="button" onClick={() => navigate('/support')}>Returns policy</button>
            <button type="button" onClick={() => navigate('/support')}>Privacy notice</button>
            <button type="button" onClick={() => navigate('/support')}>Terms of sale</button>
            <button type="button" onClick={() => navigate('/support')}>Bulk orders</button>
          </div>
        </nav>
        <div className="footer-right">
          <form className="newsletter-form" onSubmit={onNewsletterSubmit} noValidate>
            <label htmlFor="email">Get restock and deal alerts</label>
            <div>
              <input
                id="email"
                type="email"
                maxLength={120}
                value={newsletterEmail}
                placeholder="buyer@example.co.uk"
                onChange={(event) => onNewsletterChange(event.target.value.slice(0, 120))}
                aria-describedby="newsletter-status"
              />
              <button type="submit">Join</button>
            </div>
            <p id="newsletter-status" aria-live="polite">{newsletterStatus}</p>
          </form>
          <div className="footer-service">
            <span><PackageCheck size={18} /> Same-day processing before 2 PM</span>
            <span><RotateCcw size={18} /> 14-day returns on sealed items</span>
            <span><CreditCard size={18} /> Visa, Mastercard, bank transfer</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Copyright 2026 Strategeon. All rights reserved.</span>
        <span>Secure checkout / Warranty-backed products / Real support before buying</span>
      </div>
    </footer>
  );
}

function PageIntro({ eyebrow, title, text }) {
  return (
    <section className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}

function NotFoundPage({ navigate }) {
  return (
    <main>
      <PageIntro eyebrow="404" title="Page not found" text="That page does not exist in this storefront." />
      <section className="page-section">
        <button className="primary-button" type="button" onClick={() => navigate('/shop')}>Go to shop</button>
      </section>
    </main>
  );
}

export default App;
