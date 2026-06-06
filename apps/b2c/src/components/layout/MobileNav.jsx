import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
    X,
    ChevronDown,
    ChevronRight,
    Heart,
    User,
    ShoppingBag,
    Phone,
    Mail,
    Search,
} from "lucide-react";
import { LEFT_NAV, RIGHT_NAV, SITE } from "../../config/site";
import { useShop } from "../../context/ShopContext";

export default function MobileNav({ open, onClose }) {
    const [expanded, setExpanded] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const { wish, cartCount, setCartOpen } = useShop();
    const navigate = useNavigate();
    const searchRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        if (!open) {
            setExpanded(null);
            setSearchQuery("");
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const toggle = (label) =>
        setExpanded((prev) => (prev === label ? null : label));

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/collections?q=${encodeURIComponent(searchQuery)}`);
            onClose();
        }
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className={`drawer-scrim ${open ? "open" : ""}`}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Drawer */}
            <aside
                className={`drawer ${open ? "open" : ""}`}
                aria-hidden={!open}
            >
                {/* Top bar */}
                <div className="drawer-top">
                    <Link to="/" className="brand" onClick={onClose}>
                        <img
                            src="/logo.png"
                            alt="Amstela"
                            className="drawer-logo"
                        />
                    </Link>
                    <button
                        className="drawer-close"
                        onClick={onClose}
                        aria-label="Close menu"
                    >
                        <X size={20} strokeWidth={1.5} />
                    </button>
                </div>

                {/* Search Bar in Mobile Menu */}
                <div
                    className="drawer-search"
                    style={{
                        padding: "16px 22px",
                        borderBottom: "1px solid var(--border)",
                    }}
                >
                    <form
                        onSubmit={handleSearch}
                        style={{ position: "relative" }}
                    >
                        <input
                            ref={searchRef}
                            type="text"
                            placeholder="Search jewellery..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "12px 40px 12px 16px",
                                border: "1px solid var(--border)",
                                borderRadius: "4px",
                                fontSize: "14px",
                                background: "var(--offwhite)",
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                position: "absolute",
                                right: "12px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: "var(--body)",
                            }}
                        >
                            <Search size={18} />
                        </button>
                    </form>
                </div>

                {/* Quick icon row */}
                <div className="drawer-icons">
                    <Link
                        to="/collections"
                        className="drawer-icon-btn"
                        onClick={onClose}
                        aria-label="Wishlist"
                    >
                        <Heart size={18} strokeWidth={1.5} />
                        {wish.length > 0 && (
                            <span className="drawer-icon-badge">
                                {wish.length}
                            </span>
                        )}
                        <span>Wishlist</span>
                    </Link>
                    <Link
                        to="/contact"
                        className="drawer-icon-btn"
                        onClick={onClose}
                        aria-label="Account"
                    >
                        <User size={18} strokeWidth={1.5} />
                        <span>Account</span>
                    </Link>
                    <button
                        className="drawer-icon-btn"
                        onClick={() => {
                            onClose();
                            setCartOpen(true);
                        }}
                        aria-label="Bag"
                    >
                        <ShoppingBag size={18} strokeWidth={1.5} />
                        {cartCount > 0 && (
                            <span className="drawer-icon-badge">
                                {cartCount}
                            </span>
                        )}
                        <span>Bag</span>
                    </button>
                </div>

                {/* Nav */}
                <nav className="drawer-nav">
                    {/* Category label */}
                    <p className="drawer-section-label">Shop</p>

                    {LEFT_NAV.map((item) => (
                        <div key={item.label} className="drawer-item">
                            {item.mega ? (
                                <>
                                    <button
                                        className="drawer-link drawer-link-toggle"
                                        onClick={() => toggle(item.label)}
                                        aria-expanded={expanded === item.label}
                                    >
                                        {item.label}
                                        <ChevronDown
                                            size={16}
                                            strokeWidth={1.5}
                                            className={`drawer-chevron ${expanded === item.label ? "rotated" : ""}`}
                                        />
                                    </button>
                                    {expanded === item.label && (
                                        <div className="drawer-sub">
                                            {item.mega.map((sub) => (
                                                <Link
                                                    key={sub.label}
                                                    to={sub.href}
                                                    className="drawer-sub-link"
                                                    onClick={onClose}
                                                >
                                                    <ChevronRight
                                                        size={12}
                                                        strokeWidth={1.5}
                                                    />
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <NavLink
                                    to={item.href}
                                    className={({ isActive }) =>
                                        `drawer-link ${isActive ? "active" : ""}`
                                    }
                                    onClick={onClose}
                                >
                                    {item.label}
                                </NavLink>
                            )}
                        </div>
                    ))}

                    {/* Company label */}
                    <p
                        className="drawer-section-label"
                        style={{ marginTop: 24 }}
                    >
                        Company
                    </p>

                    {RIGHT_NAV.map((item) => (
                        <div key={item.label} className="drawer-item">
                            <NavLink
                                to={item.href}
                                className={({ isActive }) =>
                                    `drawer-link ${isActive ? "active" : ""}`
                                }
                                onClick={onClose}
                            >
                                {item.label}
                            </NavLink>
                        </div>
                    ))}
                </nav>

                {/* CTA */}
                <div className="drawer-cta">
                    <Link
                        to="/contact"
                        className="btn btn-gold btn-block"
                        onClick={onClose}
                    >
                        Book Appointment
                    </Link>
                </div>

                {/* Contact footer */}
                <div className="drawer-foot">
                    <a
                        href={`tel:${SITE.phone}`}
                        className="drawer-contact-link"
                    >
                        <Phone size={14} strokeWidth={1.5} /> {SITE.phone}
                    </a>
                    <a
                        href={`mailto:${SITE.email}`}
                        className="drawer-contact-link"
                    >
                        <Mail size={14} strokeWidth={1.5} /> {SITE.email}
                    </a>
                </div>
            </aside>
        </>
    );
}
