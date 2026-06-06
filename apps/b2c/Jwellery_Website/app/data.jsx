/* ============================================================
   VAIRA — shared data + small UI helpers
   ============================================================ */

/* Expose React Router APIs as window globals so every Babel script
   (each isolated) can use them without redeclaring / colliding. */
const RR = ReactRouterDOM;
Object.assign(window, {
    RR,
    Link: RR.Link,
    RLink: RR.Link,
    useNavigate: RR.useNavigate,
    useNav: RR.useNavigate,
    useLocation: RR.useLocation,
    useParams: RR.useParams,
    useSearchParams: RR.useSearchParams,
});

/* Indian-format currency, e.g. 124500 -> ₹1,24,500 */
const inr = (n) => "₹" + n.toLocaleString("en-IN");

/* ---------- nav model ---------- */
const NAV = [
    { label: "Collections", to: "/collections" },
    { label: "Diamond", to: "/collections?metal=Diamond", mega: true },
    { label: "Gold", to: "/collections?metal=Gold" },
    { label: "Bridal", to: "/collections?occasion=Bridal" },
    { label: "About", to: "/about" },
    { label: "Manufacturing", to: "/manufacturing" },
    { label: "Contact", to: "/contact" },
];

/* ---------- categories ---------- */
const CATEGORIES = [
    {
        name: "Necklaces",
        glyph: "necklace",
        count: 64,
        sub: "Statement & everyday",
    },
    { name: "Rings", glyph: "ring", count: 92, sub: "Solitaire & bands" },
    {
        name: "Earrings",
        glyph: "earring",
        count: 78,
        sub: "Studs to chandeliers",
    },
    {
        name: "Bracelets",
        glyph: "bracelet",
        count: 41,
        sub: "Tennis & bangles",
    },
    { name: "Mangalsutra", glyph: "pendant", count: 33, sub: "Modern sacred" },
    { name: "Bridal Sets", glyph: "set", count: 28, sub: "Complete trousseau" },
];

/* ---------- featured collections ---------- */
const COLLECTIONS = [
    {
        idx: "01",
        name: "The Solitaire Edit",
        glyph: "diamond",
        tone: "dark",
        desc: "Ethically sourced, GIA-certified diamonds set by hand. A study in restraint, light and fire.",
    },
    {
        idx: "02",
        name: "Aurum — 22K Gold",
        glyph: "bracelet",
        tone: "champ",
        desc: "BIS-hallmarked heritage goldsmithing reinterpreted for the modern wardrobe. Pure, warm, enduring.",
    },
    {
        idx: "03",
        name: "Vivaha Bridal",
        glyph: "set",
        tone: "t3",
        desc: "Ceremonial sets crafted for the once-in-a-lifetime. Where tradition meets couture sensibility.",
    },
    {
        idx: "04",
        name: "Everyday Fine",
        glyph: "ring",
        tone: "t1",
        desc: "Featherlight pieces designed to never come off. The new vocabulary of daily luxury.",
    },
];

/* ---------- products ---------- */
const P = (
    id,
    name,
    category,
    glyph,
    price,
    was,
    metal,
    diamond,
    occasion,
    collection,
    rating,
    reviews,
    badge,
) => ({
    id,
    name,
    category,
    glyph,
    price,
    was,
    metal,
    diamond,
    occasion,
    collection,
    rating,
    reviews,
    badge,
    tone: ["t1", "t2", "t3"][id % 3],
});

const PRODUCTS = [
    P(
        "1",
        "Étoile Solitaire Ring",
        "Rings",
        "ring",
        245000,
        0,
        "Platinum",
        "Solitaire",
        "Bridal",
        "Diamond",
        4.9,
        128,
        "Bestseller",
    ),
    P(
        "2",
        "Lumière Diamond Necklace",
        "Necklaces",
        "necklace",
        389000,
        0,
        "White Gold",
        "Pavé",
        "Bridal",
        "Diamond",
        5.0,
        64,
        "New",
    ),
    P(
        "3",
        "Aurum Twist Bangle",
        "Bracelets",
        "bracelet",
        142500,
        168000,
        "Yellow Gold",
        "None",
        "Gifting",
        "Gold",
        4.8,
        96,
        "Sale",
    ),
    P(
        "4",
        "Halo Drop Earrings",
        "Earrings",
        "earring",
        178000,
        0,
        "White Gold",
        "Cluster",
        "Bridal",
        "Diamond",
        4.9,
        52,
        "",
    ),
    P(
        "5",
        "Sacred Knot Mangalsutra",
        "Mangalsutra",
        "pendant",
        98500,
        0,
        "Yellow Gold",
        "Solitaire",
        "Bridal",
        "Wedding",
        5.0,
        211,
        "Bestseller",
    ),
    P(
        "6",
        "Celeste Tennis Bracelet",
        "Bracelets",
        "bracelet",
        312000,
        0,
        "White Gold",
        "Pavé",
        "Gifting",
        "Diamond",
        4.9,
        38,
        "",
    ),
    P(
        "7",
        "Meena Stud Earrings",
        "Earrings",
        "earring",
        46500,
        0,
        "Rose Gold",
        "Solitaire",
        "Daily Wear",
        "Daily Wear",
        4.7,
        174,
        "",
    ),
    P(
        "8",
        "Vivaha Bridal Set",
        "Bridal Sets",
        "set",
        685000,
        0,
        "Yellow Gold",
        "Pavé",
        "Bridal",
        "Wedding",
        5.0,
        41,
        "New",
    ),
    P(
        "9",
        "Linea Eternity Band",
        "Rings",
        "ring",
        124000,
        0,
        "Platinum",
        "Pavé",
        "Bridal",
        "Diamond",
        4.8,
        89,
        "",
    ),
    P(
        "10",
        "Aria Layered Necklace",
        "Necklaces",
        "necklace",
        88000,
        104000,
        "Yellow Gold",
        "None",
        "Daily Wear",
        "Daily Wear",
        4.6,
        132,
        "Sale",
    ),
    P(
        "11",
        "Rivière Diamond Choker",
        "Necklaces",
        "necklace",
        542000,
        0,
        "White Gold",
        "Pavé",
        "Bridal",
        "Diamond",
        5.0,
        22,
        "",
    ),
    P(
        "12",
        "Petal Cluster Ring",
        "Rings",
        "ring",
        96500,
        0,
        "Rose Gold",
        "Cluster",
        "Gifting",
        "Diamond",
        4.7,
        67,
        "",
    ),
    P(
        "13",
        "Heritage Kada",
        "Bracelets",
        "bracelet",
        198000,
        0,
        "Yellow Gold",
        "None",
        "Bridal",
        "Gold",
        4.9,
        58,
        "",
    ),
    P(
        "14",
        "Soleil Hoop Earrings",
        "Earrings",
        "earring",
        64000,
        0,
        "Yellow Gold",
        "None",
        "Daily Wear",
        "Daily Wear",
        4.6,
        145,
        "",
    ),
    P(
        "15",
        "Promise Solitaire Pendant",
        "Mangalsutra",
        "pendant",
        132000,
        0,
        "Platinum",
        "Solitaire",
        "Gifting",
        "Diamond",
        4.9,
        73,
        "Bestseller",
    ),
    P(
        "16",
        "Grand Bridal Necklace",
        "Bridal Sets",
        "set",
        824000,
        0,
        "Yellow Gold",
        "Cluster",
        "Bridal",
        "Wedding",
        5.0,
        31,
        "",
    ),
    P(
        "17",
        "Minima Bezel Ring",
        "Rings",
        "ring",
        38500,
        0,
        "Rose Gold",
        "Solitaire",
        "Daily Wear",
        "Daily Wear",
        4.5,
        198,
        "",
    ),
    P(
        "18",
        "Cascade Diamond Earrings",
        "Earrings",
        "earring",
        268000,
        0,
        "White Gold",
        "Pavé",
        "Bridal",
        "Diamond",
        5.0,
        29,
        "New",
    ),
];

const findProduct = (id) => PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
const related = (p, n = 4) =>
    PRODUCTS.filter(
        (x) =>
            x.id !== p.id &&
            (x.category === p.category || x.collection === p.collection),
    ).slice(0, n);

/* filter facets */
const FACETS = {
    Category: [
        "Rings",
        "Necklaces",
        "Earrings",
        "Bracelets",
        "Mangalsutra",
        "Bridal Sets",
    ],
    Metal: ["Platinum", "White Gold", "Yellow Gold", "Rose Gold"],
    Diamond: ["Solitaire", "Pavé", "Cluster", "None"],
    Occasion: ["Bridal", "Daily Wear", "Gifting"],
    Collection: ["Diamond", "Gold", "Wedding", "Daily Wear"],
};
const METAL_SWATCH = {
    Platinum: "#E5E4E2",
    "White Gold": "#EDEDE8",
    "Yellow Gold": "#D4B06A",
    "Rose Gold": "#E8C0AE",
};

/* ---------- testimonials ---------- */
const TESTIMONIALS = [
    {
        q: "The craftsmanship is extraordinary. My solitaire catches light like nothing I've ever owned — and the consultation felt genuinely personal.",
        name: "Ananya Mehta",
        role: "Mumbai · Bridal client",
        initial: "A",
    },
    {
        q: "We've sourced from VAIRA for our boutique for three years. Consistent quality, flawless certification, and exports that always clear without a hitch.",
        name: "Daniel Roy",
        role: "Wholesale partner · Dubai",
        initial: "D",
    },
    {
        q: "From design sketch to the final piece, every detail was considered. It is heirloom quality in the truest sense.",
        name: "Priya Nair",
        role: "Bengaluru · Anniversary gift",
        initial: "P",
    },
];

/* ---------- small helpers ---------- */
const useReveal = () => {
    React.useEffect(() => {
        const els = document.querySelectorAll(".reveal:not(.in)");
        if (!("IntersectionObserver" in window)) {
            els.forEach((e) => e.classList.add("in"));
            return;
        }
        const io = new IntersectionObserver(
            (ents) => {
                ents.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("in");
                        io.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
        );
        els.forEach((e) => io.observe(e));
        return () => io.disconnect();
    });
};

/* staggered style helper */
const delay = (i, step = 90) => ({ transitionDelay: `${i * step}ms` });

const Btn = ({
    as = "button",
    variant = "gold",
    lg,
    block,
    className = "",
    children,
    ...rest
}) => {
    const cls = `btn btn-${variant} ${lg ? "btn-lg" : ""} ${block ? "btn-block" : ""} ${className}`;
    const Tag = as;
    return (
        <Tag className={cls} {...rest}>
            {children}
        </Tag>
    );
};

const SectionHead = ({ eyebrow, title, lede, center, dark, children }) => (
    <div
        className={`section-head ${center ? "is-center" : ""} ${dark ? "on-dark" : ""}`}
    >
        {eyebrow ? (
            <span className={`eyebrow ${center ? "center-line" : ""}`}>
                {eyebrow}
            </span>
        ) : null}
        {title ? <h2>{title}</h2> : null}
        {lede ? <p className="lede">{lede}</p> : null}
        {children}
    </div>
);

Object.assign(window, {
    inr,
    NAV,
    CATEGORIES,
    COLLECTIONS,
    PRODUCTS,
    FACETS,
    METAL_SWATCH,
    TESTIMONIALS,
    findProduct,
    related,
    useReveal,
    delay,
    Btn,
    SectionHead,
});
