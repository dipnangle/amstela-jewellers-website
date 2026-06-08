export const SITE = {
    name: 'Amstela Jewels',
    tagline: 'Crafted for Every Forever',
    description:
        'Diamond jewellery of unmatched brilliance — hallmarked, certified, and crafted with 25 years of Surat heritage.',
    phone: '+91 86523 19668',
    whatsapp: '+91 86523 19668',
    email: 'info@amstela.com',
    address: '4th Floor, CC-4090, Bharat Diamond Bourse, BKC, Mumbai — 400 051',
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
            { label: 'Classic Luxury', href: '/' },
            { label: 'Modern Carousel', href: '/home2' },
            { label: 'Editorial Split', href: '/home3' },
            { label: 'Minimal Fine', href: '/home4' },
            { label: 'Royal Heritage', href: '/home5' },
        ],
    },
    {
        label: 'Collections',
        href: '/collections',
        mega: [
            {
                label: 'Bridal Solitaires',
                href: '/collections/bridal-solitaires',
            },
            {
                label: 'Everyday Elegance',
                href: '/collections/everyday-elegance',
            },
            { label: 'Heritage Gold', href: '/collections/heritage-gold' },
            {
                label: 'Diamond Earrings',
                href: '/collections?category=Earrings',
            },
            { label: 'Mangalsutra', href: '/collections?category=Mangalsutra' },
            { label: 'Statement Rings', href: '/collections?category=Rings' },
        ],
    },
    {
        label: 'Diamond',
        href: '/collections',
        mega: [
            {
                label: 'Solitaire Rings',
                href: '/collections?category=Rings',
            },
            {
                label: 'Diamond Earrings',
                href: '/collections?category=Earrings',
            },
            { label: 'Statement Rings', href: '/collections?category=Rings' },
            {
                label: 'Everyday Diamond',
                href: '/collections/everyday-elegance',
            },
        ],
    },
    {
        label: 'Gold',
        href: '/collections',
        mega: [
            { label: 'Heritage Gold', href: '/collections/heritage-gold' },
            { label: 'Mangalsutra', href: '/collections?category=Mangalsutra' },
            { label: 'Gold Earrings', href: '/collections?category=Earrings' },
        ],
    },
    {
        label: 'Bridal',
        href: '/collections/bridal-solitaires',
        mega: [
            {
                label: 'Solitaire Rings',
                href: '/collections?category=Rings',
            },
            { label: 'Mangalsutra', href: '/collections?category=Mangalsutra' },
            { label: 'Bridal Set', href: '/collections?category=Bridal Sets' },
            { label: 'Engagement Rings', href: '/collections?category=Rings' },
        ],
    },
    {
        label: 'Earrings',
        href: '/collections?category=Earrings',
        mega: [
            { label: 'Diamond Studs', href: '/collections?category=Earrings' },
            { label: 'Drop & Dangle', href: '/collections?category=Earrings' },
            { label: 'Hoops', href: '/collections?category=Earrings' },
            { label: 'Chandeliers', href: '/collections?category=Earrings' },
        ],
    },
]

// Right side of header — company links
export const RIGHT_NAV = [
    { label: 'About', href: '/about' },
    { label: 'Manufacturing', href: '/manufacturing' },
    { label: 'Contact', href: '/contact' },
]

// Legacy — keep for footer
export const NAV_LINKS = [...LEFT_NAV, ...RIGHT_NAV]

export const FOOTER_LINKS = {
    collections: [
        { label: 'Bridal Solitaires', href: '/collections/bridal-solitaires' },
        { label: 'Everyday Elegance', href: '/collections/everyday-elegance' },
        { label: 'Heritage Gold', href: '/collections/heritage-gold' },
        { label: 'Diamond Earrings', href: '/collections?category=Earrings' },
        { label: 'Mangalsutra', href: '/collections?category=Mangalsutra' },
        { label: 'Statement Rings', href: '/collections?category=Rings' },
    ],
    company: [
        { label: 'Our Story', href: '/about' },
        { label: 'Our Manufacturing', href: '/manufacturing' },
        { label: 'Store Locator', href: '/stores' },
        { label: 'Wholesale Enquiry', href: '/contact?type=wholesale' },
    ],
    certifications: [
        'BIS Hallmarked',
        'IGI Certified',
        'GIA Standards',
        'ISO 9001:2015',
    ],
}
