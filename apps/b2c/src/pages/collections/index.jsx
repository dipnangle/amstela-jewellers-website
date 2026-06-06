import { useMemo } from "react";
import {
    Link,
    useParams,
    useSearchParams,
    useNavigate,
} from "react-router-dom";
import { ArrowRight, Heart, X, SlidersHorizontal } from "lucide-react";
import collectionsData from "../../config/content/collections.json";
import productsData from "../../config/content/products.json";
import { useShop } from "../../context/ShopContext";
import { useIntersection } from "@jewel/shared/hooks/useIntersection.js";

const CATEGORIES = [
    "Rings",
    "Earrings",
    "Necklaces",
    "Mangalsutra",
    "Bracelets",
    "Bridal Sets",
];
const METALS = ["Platinum", "Gold", "Rose Gold", "White Gold"];

export default function CollectionsPage() {
    const { slug } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    // Parse multi-select params
    const activeCategories = useMemo(
        () => searchParams.get("category")?.split(",").filter(Boolean) || [],
        [searchParams],
    );
    const activeMetals = useMemo(
        () => searchParams.get("metal")?.split(",").filter(Boolean) || [],
        [searchParams],
    );
    const activeSort = searchParams.get("sort") || "featured";

    const activeCollection = slug
        ? collectionsData.find((c) => c.slug === slug)
        : null;

    // Toggle multi-select filter
    const toggleFilter = (key, value) => {
        const newParams = new URLSearchParams(searchParams);
        const current = newParams.get(key)?.split(",").filter(Boolean) || [];

        let updated;
        if (current.includes(value)) {
            updated = current.filter((v) => v !== value);
        } else {
            updated = [...current, value];
        }

        if (updated.length === 0) {
            newParams.delete(key);
        } else {
            newParams.set(key, updated.join(","));
        }
        setSearchParams(newParams);
    };

    const setSort = (val) => {
        const newParams = new URLSearchParams(searchParams);
        if (val === "featured") newParams.delete("sort");
        else newParams.set("sort", val);
        setSearchParams(newParams);
    };

    const clearAll = () => {
        navigate(slug ? `/collections/${slug}` : "/collections");
    };

    // Base products filtered by collection only (for count calculation)
    const baseByCollection = useMemo(() => {
        return slug
            ? productsData.filter((p) => p.collectionSlug === slug)
            : productsData;
    }, [slug]);

    // Counts for sidebar
    const counts = useMemo(() => {
        const catCounts = {};
        const metalCounts = {};
        baseByCollection.forEach((p) => {
            catCounts[p.category] = (catCounts[p.category] || 0) + 1;
            METALS.forEach((m) => {
                if (p.metal.toLowerCase().includes(m.toLowerCase())) {
                    metalCounts[m] = (metalCounts[m] || 0) + 1;
                }
            });
        });
        return { categories: catCounts, metals: metalCounts };
    }, [baseByCollection]);

    const filtered = useMemo(() => {
        let base = [...baseByCollection];

        if (activeCategories.length > 0) {
            base = base.filter((p) => activeCategories.includes(p.category));
        }

        if (activeMetals.length > 0) {
            base = base.filter((p) =>
                activeMetals.some((m) =>
                    p.metal.toLowerCase().includes(m.toLowerCase()),
                ),
            );
        }

        // Actual sorting logic
        if (activeSort === "newest") {
            base.sort((a, b) => b.id - a.id);
        } else if (activeSort === "price-low") {
            base.sort((a, b) => a.price - b.price);
        } else if (activeSort === "price-high") {
            base.sort((a, b) => b.price - a.price);
        }

        return base;
    }, [baseByCollection, activeCategories, activeMetals, activeSort]);

    return (
        <main>
            {/* Dark page header */}
            <div className="page-head bg-velvet">
                <div
                    className="bg-velvet"
                    style={{ position: "absolute", inset: 0 }}
                />
                <div className="wrap">
                    <div className="crumb">
                        <Link to="/">Home</Link>
                        <span className="sep">/</span>
                        <Link to="/collections">Collections</Link>
                        {activeCollection && (
                            <>
                                <span className="sep">/</span>
                                <span>{activeCollection.name}</span>
                            </>
                        )}
                    </div>
                    <h1>
                        {activeCollection
                            ? activeCollection.name
                            : "All Masterpieces"}
                    </h1>
                    {activeCollection && (
                        <p className="lede">{activeCollection.description}</p>
                    )}
                </div>
            </div>

            <div className="section wrap">
                <div className="listing">
                    {/* Sidebar filters */}
                    <aside className="filters">
                        <div
                            className="filter-header"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                marginBottom: 20,
                            }}
                        >
                            <SlidersHorizontal size={18} />
                            <h4
                                style={{
                                    margin: 0,
                                    fontFamily: "var(--sans)",
                                    fontSize: 14,
                                    fontWeight: 700,
                                    letterSpacing: "0.1em",
                                }}
                            >
                                FILTERS
                            </h4>
                        </div>

                        {/* Category Filter */}
                        <div className="filter-group">
                            <h5>Category</h5>
                            {CATEGORIES.map((cat) => {
                                const count = counts.categories[cat] || 0;
                                const isActive = activeCategories.includes(cat);
                                return (
                                    <label
                                        key={cat}
                                        className={`chk ${isActive ? "on" : ""}`}
                                        onClick={() =>
                                            toggleFilter("category", cat)
                                        }
                                        style={{
                                            opacity:
                                                count === 0 && !isActive
                                                    ? 0.5
                                                    : 1,
                                            pointerEvents:
                                                count === 0 && !isActive
                                                    ? "none"
                                                    : "auto",
                                        }}
                                    >
                                        <span className="box">
                                            {isActive && (
                                                <svg
                                                    width="10"
                                                    height="10"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                >
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            )}
                                        </span>
                                        {cat}
                                        <span
                                            className="count"
                                            style={{
                                                marginLeft: "auto",
                                                fontSize: 11,
                                                opacity: 0.6,
                                            }}
                                        >
                                            ({count})
                                        </span>
                                    </label>
                                );
                            })}
                        </div>

                        {/* Metal Filter */}
                        <div className="filter-group">
                            <h5>Metal</h5>
                            {METALS.map((m) => {
                                const count = counts.metals[m] || 0;
                                const isActive = activeMetals.includes(m);
                                return (
                                    <label
                                        key={m}
                                        className={`chk ${isActive ? "on" : ""}`}
                                        onClick={() => toggleFilter("metal", m)}
                                        style={{
                                            opacity:
                                                count === 0 && !isActive
                                                    ? 0.5
                                                    : 1,
                                            pointerEvents:
                                                count === 0 && !isActive
                                                    ? "none"
                                                    : "auto",
                                        }}
                                    >
                                        <span className="box">
                                            {isActive && (
                                                <svg
                                                    width="10"
                                                    height="10"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                >
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            )}
                                        </span>
                                        {m}
                                        <span
                                            className="count"
                                            style={{
                                                marginLeft: "auto",
                                                fontSize: 11,
                                                opacity: 0.6,
                                            }}
                                        >
                                            ({count})
                                        </span>
                                    </label>
                                );
                            })}
                        </div>

                        {/* Collection Filter */}
                        <div className="filter-group">
                            <h5>Collection</h5>
                            <Link
                                to="/collections"
                                className={`chk ${!slug ? "on" : ""}`}
                            >
                                <span className="box">
                                    {!slug && (
                                        <svg
                                            width="10"
                                            height="10"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    )}
                                </span>
                                All Collections
                            </Link>
                            {collectionsData.map((c) => (
                                <Link
                                    key={c.slug}
                                    to={`/collections/${c.slug}?${searchParams.toString()}`}
                                    className={`chk ${slug === c.slug ? "on" : ""}`}
                                >
                                    <span className="box">
                                        {slug === c.slug && (
                                            <svg
                                                width="10"
                                                height="10"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        )}
                                    </span>
                                    {c.name}
                                </Link>
                            ))}
                        </div>

                        {(activeCategories.length > 0 ||
                            activeMetals.length > 0 ||
                            slug) && (
                            <button
                                onClick={clearAll}
                                className="btn btn-ghost btn-block"
                                style={{
                                    marginTop: 20,
                                    fontSize: 11,
                                    padding: "12px",
                                }}
                            >
                                Clear All Filters
                            </button>
                        )}
                    </aside>

                    {/* Products */}
                    <div>
                        <div className="listing-toolbar">
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 15,
                                    flexWrap: "wrap",
                                }}
                            >
                                <span className="count">
                                    {filtered.length} pieces
                                </span>
                                <div className="chips">
                                    {activeCategories.map((cat) => (
                                        <span key={cat} className="chip">
                                            {cat}
                                            <button
                                                onClick={() =>
                                                    toggleFilter(
                                                        "category",
                                                        cat,
                                                    )
                                                }
                                            >
                                                <X size={12} />
                                            </button>
                                        </span>
                                    ))}
                                    {activeMetals.map((m) => (
                                        <span key={m} className="chip">
                                            {m}
                                            <button
                                                onClick={() =>
                                                    toggleFilter("metal", m)
                                                }
                                            >
                                                <X size={12} />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10,
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: 11,
                                        fontWeight: 700,
                                        letterSpacing: "0.05em",
                                        color: "var(--body)",
                                    }}
                                >
                                    SORT:
                                </span>
                                <select
                                    className="select"
                                    value={activeSort}
                                    onChange={(e) => setSort(e.target.value)}
                                    style={{
                                        padding: "8px 12px",
                                        border: "1px solid var(--border)",
                                        fontSize: 12,
                                    }}
                                >
                                    <option value="featured">Featured</option>
                                    <option value="newest">Newest First</option>
                                    <option value="price-low">
                                        Price: Low to High
                                    </option>
                                    <option value="price-high">
                                        Price: High to Low
                                    </option>
                                </select>
                            </div>
                        </div>

                        {filtered.length > 0 ? (
                            <div className="grid-products">
                                {filtered.map((p, i) => (
                                    <ProductCard
                                        key={p.id}
                                        product={p}
                                        index={i}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div
                                style={{
                                    textAlign: "center",
                                    padding: "80px 20px",
                                    background: "var(--offwhite)",
                                    borderRadius: 4,
                                }}
                            >
                                <p
                                    style={{
                                        fontFamily: "var(--serif)",
                                        fontSize: 26,
                                        color: "var(--body)",
                                        marginBottom: 16,
                                    }}
                                >
                                    No pieces match your selection
                                </p>
                                <button
                                    className="link-gold"
                                    onClick={clearAll}
                                >
                                    Reset all filters <ArrowRight size={14} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

function ProductCard({ product, index }) {
    const [ref, visible] = useIntersection();
    const { wish, toggleWish } = useShop();
    const wished = wish.includes(product.id);

    return (
        <article
            ref={ref}
            className={`prod-card reveal ${visible ? "in" : ""}`}
            style={{ transitionDelay: `${Math.min(index, 5) * 80}ms` }}
        >
            <div className="prod-thumb zoom">
                {product.badge && (
                    <span
                        className={`prod-badge ${["Sale", "New"].includes(product.badge) ? "sale" : ""}`}
                    >
                        {product.badge}
                    </span>
                )}
                <button
                    className={`wish ${wished ? "on" : ""}`}
                    onClick={() => toggleWish(product)}
                    aria-label="Add to wishlist"
                >
                    <Heart
                        size={14}
                        strokeWidth={1.5}
                        fill={wished ? "currentColor" : "none"}
                    />
                </button>
                <Link
                    to={`/product/${product.slug}`}
                    style={{ position: "absolute", inset: 0 }}
                >
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </Link>
                <div className="prod-actions">
                    <Link
                        to={`/product/${product.slug}`}
                        className="btn btn-navy"
                    >
                        View
                    </Link>
                    <Link to="/contact" className="btn btn-gold">
                        Enquire
                    </Link>
                </div>
            </div>
            <div className="prod-info">
                <div className="cat-name">{product.collectionName}</div>
                <h4>{product.name}</h4>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 10,
                        marginTop: 4,
                    }}
                >
                    <p className="prod-meta">{product.metal}</p>
                    <span
                        style={{
                            width: 1,
                            height: 10,
                            background: "var(--border)",
                        }}
                    />
                    <p
                        style={{
                            fontSize: 13,
                            fontWeight: 600,
                            color: "var(--ink)",
                        }}
                    >
                        ₹{product.price.toLocaleString()}
                    </p>
                </div>
            </div>
        </article>
    );
}
