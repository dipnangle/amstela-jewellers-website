/* ============================================================
   VAIRA — line-art icon set. Thin, elegant, currentColor stroke.
   ============================================================ */
const Ico = ({
    d,
    size = 24,
    sw = 1.4,
    fill,
    children,
    vb = "0 0 24 24",
    style,
}) => (
    <svg
        width={size}
        height={size}
        viewBox={vb}
        fill={fill || "none"}
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={style}
        aria-hidden="true"
    >
        {d ? <path d={d} /> : children}
    </svg>
);

/* ---- jewellery / luxury glyphs (used in placeholders + categories) ---- */
const GlyphDiamond = (p) => (
    <Ico {...p} sw={1.1} vb="0 0 48 48">
        <path d="M10 18 L17 9 H31 L38 18 L24 40 Z" />
        <path d="M10 18 H38 M17 9 L20.5 18 L24 40 M31 9 L27.5 18 L24 40 M20.5 18 H27.5" />
    </Ico>
);
const GlyphRing = (p) => (
    <Ico {...p} sw={1.1} vb="0 0 48 48">
        <circle cx="24" cy="30" r="12" />
        <circle cx="24" cy="30" r="8.2" />
        <path d="M18 19 L21 11 H27 L30 19 M24 11 V6 M21.5 8.5 H26.5" />
        <path d="M24 6 L21.5 9 L24 12 L26.5 9 Z" />
    </Ico>
);
const GlyphNecklace = (p) => (
    <Ico {...p} sw={1.1} vb="0 0 48 48">
        <path d="M9 9 C9 24 17 30 24 30 C31 30 39 24 39 9" />
        <path d="M24 30 V34" />
        <path d="M24 34 L20 40 H28 Z" />
        <circle cx="24" cy="36.5" r="0.6" fill="currentColor" />
    </Ico>
);
const GlyphEarring = (p) => (
    <Ico {...p} sw={1.1} vb="0 0 48 48">
        <path d="M24 8 C19 8 16 11 16 15 C16 18 18 20 21 21" />
        <circle cx="24" cy="30" r="9" />
        <path d="M24 21 V24 M24 30 L20.5 26 M24 30 L27.5 26 M20.5 26 H27.5 L24 21 Z" />
    </Ico>
);
const GlyphBracelet = (p) => (
    <Ico {...p} sw={1.1} vb="0 0 48 48">
        <ellipse cx="24" cy="24" rx="15" ry="11" />
        <ellipse cx="24" cy="24" rx="11" ry="7.5" />
        <path d="M24 13 L21 17 H27 Z" />
        <rect x="22" y="11" width="4" height="3" rx="1" />
    </Ico>
);
const GlyphSet = (p) => (
    <Ico {...p} sw={1.1} vb="0 0 48 48">
        <path d="M11 12 C11 22 17 26 24 26 C31 26 37 22 37 12" />
        <path d="M24 26 L21 31 H27 Z" />
        <circle cx="16" cy="38" r="4" />
        <circle cx="32" cy="38" r="4" />
        <path d="M14 33 L15 30 H17 L18 33 M30 33 L31 30 H33 L34 33" />
    </Ico>
);
const GlyphPendant = (p) => (
    <Ico {...p} sw={1.1} vb="0 0 48 48">
        <path d="M10 10 C10 22 16 26 24 26 C32 26 38 22 38 10" />
        <path d="M21 26 L19 30 L24 40 L29 30 L27 26" />
        <path d="M19 30 H29" />
    </Ico>
);

/* ---- functional UI icons ---- */
const IcoSearch = (p) => (
    <Ico {...p}>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
    </Ico>
);
const IcoHeart = ({ filled, ...p }) => (
    <Ico {...p} fill={filled ? "currentColor" : "none"}>
        <path d="M12 20s-7-4.6-9.2-9.2C1.3 7.6 3 4.5 6.2 4.5c2 0 3.2 1.2 3.8 2.3.6-1.1 1.8-2.3 3.8-2.3 3.2 0 4.9 3.1 3.4 6.3C19 15.4 12 20 12 20Z" />
    </Ico>
);
const IcoUser = (p) => (
    <Ico {...p}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" />
    </Ico>
);
const IcoBag = (p) => (
    <Ico {...p}>
        <path d="M6 8h12l1 12H5L6 8Z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </Ico>
);
const IcoClose = (p) => (
    <Ico {...p}>
        <path d="M6 6l12 12M18 6 6 18" />
    </Ico>
);
const IcoArrow = (p) => (
    <Ico {...p}>
        <path d="M5 12h14M13 6l6 6-6 6" />
    </Ico>
);
const IcoArrowL = (p) => (
    <Ico {...p}>
        <path d="M19 12H5M11 6l-6 6 6 6" />
    </Ico>
);
const IcoChevD = (p) => (
    <Ico {...p}>
        <path d="m6 9 6 6 6-6" />
    </Ico>
);
const IcoChevR = (p) => (
    <Ico {...p}>
        <path d="m9 6 6 6-6 6" />
    </Ico>
);
const IcoPlus = (p) => (
    <Ico {...p}>
        <path d="M12 5v14M5 12h14" />
    </Ico>
);
const IcoMinus = (p) => (
    <Ico {...p}>
        <path d="M5 12h14" />
    </Ico>
);
const IcoCheck = (p) => (
    <Ico {...p}>
        <path d="m5 12 5 5L20 6" />
    </Ico>
);
const IcoStar = ({ filled = true, ...p }) => (
    <Ico {...p} sw={1} fill={filled ? "currentColor" : "none"}>
        <path d="M12 3.2l2.5 5.2 5.7.8-4.1 4 1 5.6L12 16.9 6.9 18.8l1-5.6-4.1-4 5.7-.8Z" />
    </Ico>
);
const IcoEye = (p) => (
    <Ico {...p}>
        <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z" />
        <circle cx="12" cy="12" r="2.6" />
    </Ico>
);
const IcoMenu = (p) => (
    <Ico {...p}>
        <path d="M3 6h18M3 12h18M3 18h18" />
    </Ico>
);

/* ---- trust / feature icons ---- */
const IcoCertified = (p) => (
    <Ico {...p} size={p.size || 30}>
        <path d="M12 3l2.2 1.6 2.7-.2 1 2.5 2.3 1.4-.6 2.6L21 16l-1.8 2 .1 2.7-2.6.7-1.8 2-2.4-1.1L9.2 23l-1.8-2-2.6-.7.1-2.7L3 16l1.4-2.6L3.8 10.8 6.1 9.4l1-2.5 2.7.2L12 5.5" />
        <path d="m9 12 2.2 2.2L15.5 10" />
    </Ico>
);
const IcoHallmark = (p) => (
    <Ico {...p} size={p.size || 30}>
        <path d="M12 3l7 3.5v5c0 4.5-3 8-7 9.5-4-1.5-7-5-7-9.5v-5L12 3Z" />
        <path d="M9 11.5h6M9 14.5h6M10.5 8.5h3" />
    </Ico>
);
const IcoShip = (p) => (
    <Ico {...p} size={p.size || 30}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a14 14 0 0 0 0 18M12 3a14 14 0 0 1 0 18M3 12h18M4.5 7.5h15M4.5 16.5h15" />
    </Ico>
);
const IcoSupport = (p) => (
    <Ico {...p} size={p.size || 30}>
        <path d="M5 13v-2a7 7 0 0 1 14 0v2" />
        <rect x="3.5" y="12.5" width="3.5" height="6" rx="1.5" />
        <rect x="17" y="12.5" width="3.5" height="6" rx="1.5" />
        <path d="M19 18.5v.5a3 3 0 0 1-3 3h-3" />
    </Ico>
);
const IcoFactory = (p) => (
    <Ico {...p}>
        <path d="M3 20V10l5 3V10l5 3V6l8 4v10H3Z" />
        <path d="M7 16h2M12 16h2M17 16h2" />
    </Ico>
);
const IcoGlobe = (p) => (
    <Ico {...p}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    </Ico>
);
const IcoGem = (p) => (
    <Ico {...p}>
        <path d="M6 4h12l3 5-9 11L3 9l3-5Z" />
        <path d="M3 9h18M9 4 7 9l5 11M15 4l2 5-5 11" />
    </Ico>
);
const IcoShield2 = (p) => (
    <Ico {...p}>
        <path d="M12 3l7 3v6c0 4-3 7.5-7 9-4-1.5-7-5-7-9V6l7-3Z" />
        <path d="m9 12 2 2 4-4" />
    </Ico>
);
const IcoBox = (p) => (
    <Ico {...p}>
        <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
        <path d="m4 7 8 4 8-4M12 11v10" />
    </Ico>
);
const IcoSettings = (p) => (
    <Ico {...p}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
    </Ico>
);
const IcoLeaf = (p) => (
    <Ico {...p}>
        <path d="M5 19c0-8 6-13 14-14 0 8-5 14-14 14Z" />
        <path d="M5 19c3-5 6-7 10-9" />
    </Ico>
);
const IcoPin = (p) => (
    <Ico {...p}>
        <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.6" />
    </Ico>
);
const IcoPhone = (p) => (
    <Ico {...p}>
        <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5V17a2 2 0 0 1-2 2A14 14 0 0 1 3 7a2 2 0 0 1 2-3Z" />
    </Ico>
);
const IcoMail = (p) => (
    <Ico {...p}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
    </Ico>
);
const IcoClock = (p) => (
    <Ico {...p}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
    </Ico>
);
const IcoWhatsapp = (p) => (
    <Ico {...p} sw={1.5}>
        <path d="M4 20l1.4-4.2A8 8 0 1 1 9 19.2L4 20Z" />
        <path d="M9 9c0 4 2 6 6 6 .8 0 1.2-1 .8-1.6l-1.6-.8-1 1c-1-.4-1.8-1.2-2.2-2.2l1-1-.8-1.6C10.6 8 9 8.2 9 9Z" />
    </Ico>
);
const IcoRotate = (p) => (
    <Ico {...p}>
        <path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 4v4h-4" />
        <path d="M21 12a9 9 0 0 1-15 6.7L3 16M3 20v-4h4" />
    </Ico>
);
const IcoTruck = (p) => (
    <Ico {...p}>
        <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" />
        <circle cx="7" cy="18" r="1.6" />
        <circle cx="17.5" cy="18" r="1.6" />
    </Ico>
);
const IcoTag = (p) => (
    <Ico {...p}>
        <path d="M3 12 12 3h7v7l-9 9-7-7Z" />
        <circle cx="15.5" cy="8.5" r="1.4" />
    </Ico>
);

/* ---- social ---- */
const IcoInsta = (p) => (
    <Ico {...p}>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </Ico>
);
const IcoFb = (p) => (
    <Ico {...p}>
        <path d="M14 8h2V5h-2c-2 0-3 1.2-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14v-1.5c0-.6.4-.5 1-.5Z" />
    </Ico>
);
const IcoPin2 = (p) => (
    <Ico {...p}>
        <circle cx="12" cy="12" r="9" />
        <path d="M9 18c1-3 1.5-5 1.5-7 0-2 1.5-3 3-3s2.5 1.3 2.5 3-1.2 3.5-3 3.5c-.8 0-1.4-.5-1.4-.5" />
    </Ico>
);
const IcoYt = (p) => (
    <Ico {...p}>
        <rect x="3" y="6" width="18" height="12" rx="3" />
        <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
    </Ico>
);

/* glyph picker by key */
const GLYPHS = {
    diamond: GlyphDiamond,
    ring: GlyphRing,
    necklace: GlyphNecklace,
    earring: GlyphEarring,
    bracelet: GlyphBracelet,
    set: GlyphSet,
    pendant: GlyphPendant,
};

/* ---- the product / image placeholder ---- */
const Placeholder = ({
    glyph = "diamond",
    tone = "",
    label,
    className = "",
    style,
}) => {
    const G = GLYPHS[glyph] || GlyphDiamond;
    return (
        <div className={`ph ${tone} ${className}`} style={style}>
            <G className="ph-glyph" size={120} />
            {label ? <span className="ph-label">{label}</span> : null}
        </div>
    );
};

/* star rating row */
const Stars = ({ n = 5, size = 13 }) => (
    <span className="stars">
        {[1, 2, 3, 4, 5].map((i) => (
            <IcoStar key={i} size={size} filled={i <= Math.round(n)} />
        ))}
    </span>
);

Object.assign(window, {
    Ico,
    Placeholder,
    Stars,
    GLYPHS,
    GlyphDiamond,
    GlyphRing,
    GlyphNecklace,
    GlyphEarring,
    GlyphBracelet,
    GlyphSet,
    GlyphPendant,
    IcoSearch,
    IcoHeart,
    IcoUser,
    IcoBag,
    IcoClose,
    IcoArrow,
    IcoArrowL,
    IcoChevD,
    IcoChevR,
    IcoPlus,
    IcoMinus,
    IcoCheck,
    IcoStar,
    IcoEye,
    IcoMenu,
    IcoCertified,
    IcoHallmark,
    IcoShip,
    IcoSupport,
    IcoFactory,
    IcoGlobe,
    IcoGem,
    IcoShield2,
    IcoBox,
    IcoSettings,
    IcoLeaf,
    IcoPin,
    IcoPhone,
    IcoMail,
    IcoClock,
    IcoWhatsapp,
    IcoRotate,
    IcoTruck,
    IcoTag,
    IcoInsta,
    IcoFb,
    IcoPin2,
    IcoYt,
});
