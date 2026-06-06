import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";
import productsData from "../../config/content/products.json";
import { useShop } from "../../context/ShopContext";
import { useIntersection } from "@jewel/shared/hooks/useIntersection.js";

export default function NewArrivals() {
    const featured = productsData.slice(0, 4);

    return (
        <section className="section wrap">
            <div className="between" style={{ marginBottom: 40 }}>
                <div className="section-head">
                    <span className="eyebrow">New Arrivals</span>
                    <h2>Just In</h2>
                </div>
                <Link to="/collections" className="link-gold">
                    View all <ArrowRight size={15} />
                </Link>
            </div>

            <div className="grid-products">
                {featured.map((p, i) => (
                    <ProductCard key={p.id} product={p} index={i} />
                ))}
            </div>
        </section>
    );
}

function ProductCard({ product, index }) {
    const [ref, visible] = useIntersection();
    const { wish, toggleWish } = useShop();

    if (!product) return null;

    const wished = wish.includes(product.id);

    return (
        <article
            ref={ref}
            className={`prod-card reveal ${visible ? "in" : ""}`}
            style={{ transitionDelay: `${index * 100}ms` }}
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
                        size={15}
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
                        View piece
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
