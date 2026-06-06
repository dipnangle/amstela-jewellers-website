export const SITE = {
  name: 'Amstela Jewels',
  tagline: 'Crafted for Every Forever',
  description: 'Diamond jewellery of unmatched brilliance — hallmarked, certified, and crafted with 25 years of Surat heritage.',
  phone: '+91 98XXX XXXXX',
  whatsapp: '+91 98XXX XXXXX',
  email: 'hello@amstela.in',
  address: 'Diamond Nagar, Surat, Gujarat — 395 004',
  socials: {
    instagram: '#',
    facebook: '#',
    youtube: '#',
    pinterest: '#',
  },
}

// Left side of header — product categories
export const LEFT_NAV = [
  {
    label: 'HOME',
    href: '/',
    mega: [
      { label: 'Home 1 — Classic Luxury', href: '/' },
      { label: 'Home 2 — Modern Carousel', href: '/home2' },
      { label: 'Home 3 — Editorial Split', href: '/home3' },
      { label: 'Home 4 — Minimal Fine', href: '/home4' },
      { label: 'Home 5 — Royal Heritage', href: '/home5' },
    ],
  },
  {
    label: 'Collections',
    href: '/collections',
    mega: [
      { label: 'Bridal Solitaires',  href: '/collections/bridal-solitaires' },
      { label: 'Everyday Elegance',  href: '/collections/everyday-elegance' },
      { label: 'Heritage Gold',      href: '/collections/heritage-gold' },
      { label: 'Diamond Earrings',   href: '/collections/diamond-earrings' },
      { label: 'Mangalsutra',        href: '/collections/mangalsutra' },
      { label: 'Statement Rings',    href: '/collections/statement-rings' },
    ],
  },
  {
    label: 'Diamond',
    href: '/collections',
    mega: [
      { label: 'Solitaire Rings',  href: '/collections/bridal-solitaires' },
      { label: 'Diamond Earrings', href: '/collections/diamond-earrings' },
      { label: 'Statement Rings',  href: '/collections/statement-rings' },
      { label: 'Everyday Diamond', href: '/collections/everyday-elegance' },
    ],
  },
  {
    label: 'Gold',
    href: '/collections',
    mega: [
      { label: 'Heritage Gold',   href: '/collections/heritage-gold' },
      { label: 'Mangalsutra',     href: '/collections/mangalsutra' },
      { label: 'Gold Earrings',   href: '/collections/diamond-earrings' },
    ],
  },
  {
    label: 'Bridal',
    href: '/collections/bridal-solitaires',
    mega: [
      { label: 'Solitaire Rings',   href: '/collections/bridal-solitaires' },
      { label: 'Mangalsutra',       href: '/collections/mangalsutra' },
      { label: 'Bridal Set',        href: '/collections/bridal-solitaires' },
      { label: 'Engagement Rings',  href: '/collections/statement-rings' },
    ],
  },
  {
    label: 'Earrings',
    href: '/collections/diamond-earrings',
    mega: [
      { label: 'Diamond Studs',    href: '/collections/diamond-earrings' },
      { label: 'Drop & Dangle',    href: '/collections/diamond-earrings' },
      { label: 'Hoops',            href: '/collections/diamond-earrings' },
      { label: 'Chandeliers',      href: '/collections/diamond-earrings' },
    ],
  },
]

// Right side of header — company links
export const RIGHT_NAV = [
  { label: 'About',         href: '/story' },
  { label: 'Manufacturing', href: '/story' },
  { label: 'Contact',       href: '/contact' },
]

// Legacy — keep for footer
export const NAV_LINKS = [...LEFT_NAV, ...RIGHT_NAV]

export const FOOTER_LINKS = {
  collections: [
    { label: 'Bridal Solitaires', href: '/collections/bridal-solitaires' },
    { label: 'Everyday Elegance', href: '/collections/everyday-elegance' },
    { label: 'Heritage Gold',     href: '/collections/heritage-gold' },
    { label: 'Diamond Earrings',  href: '/collections/diamond-earrings' },
    { label: 'Mangalsutra',       href: '/collections/mangalsutra' },
    { label: 'Statement Rings',   href: '/collections/statement-rings' },
  ],
  company: [
    { label: 'Our Story',         href: '/story' },
    { label: 'Stores',            href: '/stores' },
    { label: 'Contact',           href: '/contact' },
    { label: 'Wholesale Enquiry', href: '#', external: true },
  ],
  certifications: ['BIS Hallmarked', 'IGI Certified', 'GIA Standards', 'ISO 9001:2015'],
}
