export type ListingStatus = 'sale' | 'rent' | 'commercial';

export interface Listing {
  id: string;
  title: string;
  location: string;
  status: ListingStatus;
  price: number;
  priceSuffix?: string;
  beds?: number;
  baths?: number;
  area: number;
  image: string;
  tag?: string;
}

export const LISTINGS: Listing[] = [
  {
    id: 'l1',
    title: 'The Courtyard House',
    location: 'East Legon, Accra',
    status: 'sale',
    price: 2_850_000,
    beds: 4,
    baths: 3,
    area: 420,
    image: '/images/listing-1.jpg',
    tag: 'New launch',
  },
  {
    id: 'l2',
    title: 'Lumen Loft 12',
    location: 'Airport Residential, Accra',
    status: 'rent',
    price: 9_500,
    priceSuffix: '/mo',
    beds: 2,
    baths: 2,
    area: 118,
    image: '/images/listing-2.jpg',
    tag: 'Furnished',
  },
  {
    id: 'l3',
    title: 'Lumina Residences',
    location: 'Cantonments, Accra',
    status: 'sale',
    price: 1_420_000,
    beds: 3,
    baths: 2,
    area: 210,
    image: '/images/listing-3.jpg',
    tag: 'Off-plan',
  },
  {
    id: 'l4',
    title: 'Atrium House — Grade A Offices',
    location: 'Ridge, Accra',
    status: 'commercial',
    price: 38,
    priceSuffix: '/m²·mo',
    area: 1250,
    image: '/images/listing-4.jpg',
    tag: 'Grade A',
  },
];

export const STATS = [
  { value: 1200, suffix: '+', label: 'Homes matched' },
  { value: 98, suffix: '%', label: 'Client satisfaction' },
  { value: 14, suffix: '', label: 'Neighbourhoods served' },
  { value: 320, suffix: 'M+', prefix: 'GH₵', label: 'In closed volume' },
];

export const SERVICES = [
  {
    icon: 'key',
    title: 'Buy a home',
    body: 'Curated, fully-vetted homes with transparent pricing and a dedicated advisor from first viewing to keys.',
  },
  {
    icon: 'tag',
    title: 'Sell with confidence',
    body: 'Pricing strategy, studio-grade photography and a qualified buyer network to sell faster, at full value.',
  },
  {
    icon: 'building',
    title: 'Rent & lettings',
    body: 'Short and long stays, screened tenants and managed agreements — so renting never feels like a gamble.',
  },
  {
    icon: 'chart',
    title: 'Invest & manage',
    body: 'Yield-focused acquisitions and full property management for local and diaspora investors.',
  },
] as const;

export const FAQS = [
  {
    q: 'Do you work with diaspora buyers?',
    a: 'Yes — around half our clients buy from abroad. We run verified video viewings, independent legal checks and escrow-backed payments so you can purchase safely without flying in until completion.',
  },
  {
    q: 'How are your listings verified?',
    a: 'Every property is physically inspected by our team. We confirm title, land-use and encumbrances before it appears on the site, and we publish the documents we hold for each listing.',
  },
  {
    q: 'What does it cost to work with Jehab Properties?',
    a: 'Buyers pay no advisory fee on most homes — our commission comes from the seller or developer. For lettings and management we quote a flat, published percentage. No surprises.',
  },
  {
    q: 'Can you manage my property after purchase?',
    a: 'Absolutely. Our management team handles tenanting, rent collection, maintenance and annual reporting, with an owner dashboard you can check from anywhere.',
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      'They found us a home we did not know we wanted, and handled every paper. We signed from London and collected keys in Accra.',
    name: 'Ama & Kwesi Mensah',
    role: 'Bought in East Legon',
  },
  {
    quote:
      'The most professional team we have dealt with. The 3D tours saved us weeks, and the price guidance was honest, not salesy.',
    name: 'Efua Boateng',
    role: 'First-time buyer',
  },
  {
    quote:
      'As a diaspora investor I needed trust more than anything. Jehab managed the whole purchase and now my unit lets itself.',
    name: 'Daniel Ofori',
    role: 'Investor, Accra / Toronto',
  },
] as const;

export const NEIGHBOURHOODS = [
  'East Legon',
  'Cantonments',
  'Airport Residential',
  'Labone',
  'Ridge',
  'Osu',
  'Dzorwulu',
  'Spintex',
  'Tema Community 25',
  'Kumasi — Ahodwo',
];
