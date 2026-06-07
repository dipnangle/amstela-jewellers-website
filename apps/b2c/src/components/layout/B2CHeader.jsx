import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
    Search,
    Heart,
    User,
    ShoppingBag,
    MapPin,
    Menu,
    X,
    ChevronDown,
    ArrowRight,
} from "lucide-react";
import { LEFT_NAV, RIGHT_NAV, SITE } from "../../config/site";
import { useShop } from "../../context/ShopContext";
import { useSiteConfig } from "../../context/SiteConfigContext";
import MobileNav from "./MobileNav";
import SearchOverlay from "./SearchOverlay";

const MEGA_IMAGES = {
    HOME:        "/header/mega-home.webp",
    Collections: "/header/mega-collections.webp",
    Diamond:     "/header/mega-diamond.webp",
    Gold:        "/header/mega-gold.webp",
    Bridal:      "/header/mega-bridal.webp",
    Earrings:    "/header/mega-earrings.webp",
};

export default function B2CHeader() {
    const {
        cartCount,
        wish,
        cartOpen,
        setCartOpen,
        searchOpen,
        setSearchOpen,
    } = useShop();
    const { config } = useSiteConfig();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const loc = useLocation();
    const menuRef = useRef(null);
    const timerRef = useRef(null);

    const heroPages = ["/", "/home2", "/home3", "/home4", "/home5", "/about"];
    const isHero = heroPages.includes(loc.pathname);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 20);
        fn();
        window.addEventListener("scroll", fn, { passive: true });
        return () => window.removeEventListener("scroll", fn);
    }, []);

    useEffect(() => {
        setActiveMenu(null);
        setMobileOpen(false);
    }, [loc.pathname]);

    const solid = scrolled || !isHero;

    const openMenu = (label) => {
        clearTimeout(timerRef.current);
        setActiveMenu(label);
    };
    const closeMenu = () => {
        timerRef.current = setTimeout(() => setActiveMenu(null), 180);
    };
    const stayOpen = () => clearTimeout(timerRef.current);

    return (
        <>
            {/* ── Main header ── */}
            <header className={`nav b2c-nav ${solid ? "is-solid" : "is-top"}`}>
                {/* ── Announce bar ── */}
                {config?.announcement?.active && (
                    <div
                        id="announce"
                        className={`announce ${scrolled ? "announce-hide" : ""}`}
                    >
                        {config.announcement.link ? (
                            <Link to={config.announcement.link}>
                                {config.announcement.text}
                            </Link>
                        ) : (
                            <span>{config.announcement.text}</span>
                        )}
                        <span className="announce-sep">·</span>
                        <Link to="/stores">Store Locator</Link>
                        <span className="announce-sep">·</span>
                        <a
                            href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WhatsApp Us
                        </a>
                    </div>
                )}

                <div className="nav-inner b2c-inner" ref={menuRef}>
                    {/* ─ LEFT — product categories ─ */}
                    <nav className="nav-left" aria-label="Product navigation">
                        {LEFT_NAV.map((item) => (
                            <div
                                key={item.label}
                                className="nav-item"
                                onMouseEnter={() =>
                                    item.mega && openMenu(item.label)
                                }
                                onMouseLeave={closeMenu}
                            >
                                <NavLink
                                    to={item.href}
                                    className={({ isActive }) =>
                                        `nav-link ${isActive && item.href !== "/collections" ? "active" : ""}`
                                    }
                                >
                                    {item.label}
                                    {item.mega && (
                                        <ChevronDown
                                            size={11}
                                            className={`nav-chevron ${activeMenu === item.label ? "rotated" : ""}`}
                                        />
                                    )}
                                </NavLink>

                                {/* Mega dropdown */}
                                {item.mega && activeMenu === item.label && (
                                    <div
                                        className="mega-drop"
                                        onMouseEnter={stayOpen}
                                        onMouseLeave={closeMenu}
                                    >
                                        <div className="mega-inner">
                                            <div className="mega-col">
                                                <p className="mega-heading">
                                                    {item.label}
                                                </p>
                                                {item.mega.map((sub) => (
                                                    <Link
                                                        key={
                                                            sub.href + sub.label
                                                        }
                                                        to={sub.href}
                                                        className="mega-link"
                                                    >
                                                        <ArrowRight
                                                            size={11}
                                                            className="mega-arrow"
                                                        />
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </div>
                                            <div className="mega-feature">
                                                <img
                                                    src={MEGA_IMAGES[item.label] ?? "/home/jewellery1.webp"}
                                                    alt={item.label}
                                                />
                                                <div className="mega-feature-text">
                                                    <p>
                                                        {item.label === "HOME"
                                                            ? "Design Variants"
                                                            : "New Arrivals"}
                                                    </p>
                                                    <Link
                                                        to={item.href}
                                                        className="mega-cta"
                                                    >
                                                        Explore{" "}
                                                        <ArrowRight size={11} />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* ─ CENTER — logo ─ */}
                    <Link
                        to="/"
                        className="brand b2c-logo"
                        aria-label="Amstela Jewels — Home"
                    >
                        <img
                            src="/logo.png"
                            alt="Amstela Jewels"
                            className={`logo-img ${solid ? "logo-dark" : "logo-light"}`}
                        />
                    </Link>

                    {/* ─ RIGHT — company nav + icons ─ */}
                    <div className="nav-right">
                        {/* Company links */}
                        <nav
                            className="nav-right-links"
                            aria-label="Company navigation"
                        >
                            {RIGHT_NAV.map((item) => (
                                <NavLink
                                    key={item.href + item.label}
                                    to={item.href}
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? "active" : ""}`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </nav>

                        {/* Divider */}
                        <span className="nav-divider" aria-hidden="true" />

                        {/* Icon actions */}
                        <div className="nav-icons" aria-label="Account actions">
                            {/* Search */}
                            <button
                                className="nav-ico"
                                onClick={() => setSearchOpen(true)}
                                aria-label="Search jewellery"
                                title="Search"
                            >
                                <Search size={18} strokeWidth={1.6} />
                            </button>

                            {/* Wishlist */}
                            <Link
                                to="/collections"
                                className="nav-ico"
                                aria-label="Wishlist"
                                title="Wishlist"
                            >
                                <Heart size={18} strokeWidth={1.6} />
                                {wish.length > 0 && (
                                    <span className="badge">{wish.length}</span>
                                )}
                            </Link>

                            {/* Login / Account */}
                            <Link
                                to="/contact"
                                className="nav-ico"
                                aria-label="My Account"
                                title="Login / Account"
                            >
                                <User size={18} strokeWidth={1.6} />
                            </Link>

                            {/* Store Locator */}
                            <Link
                                to="/stores"
                                className="nav-ico"
                                aria-label="Store Locator"
                                title="Find a Store"
                            >
                                <MapPin size={18} strokeWidth={1.6} />
                            </Link>

                            {/* Shopping Bag */}
                            <button
                                className="nav-ico"
                                onClick={() => setCartOpen(true)}
                                aria-label="Shopping bag"
                                title="Bag"
                            >
                                <ShoppingBag size={18} strokeWidth={1.6} />
                                {cartCount > 0 && (
                                    <span className="badge">{cartCount}</span>
                                )}
                            </button>

                            {/* Mobile hamburger */}
                            <button
                                className="nav-ico burger-btn"
                                onClick={() => setMobileOpen(true)}
                                aria-label="Open menu"
                                title="Menu"
                            >
                                <Menu size={20} strokeWidth={1.6} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* ── Drawers / overlays ── */}
            <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
            <SearchOverlay
                open={searchOpen}
                onClose={() => setSearchOpen(false)}
            />
        </>
    );
}
