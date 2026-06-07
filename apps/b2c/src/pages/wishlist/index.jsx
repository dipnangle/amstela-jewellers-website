import { Link } from "react-router-dom";
import { Heart, ShoppingBag, ArrowRight, Trash2 } from "lucide-react";
import productsData from "../../config/content/products.json";
import { useShop } from "../../context/ShopContext";

export default function WishlistPage() {
    const { wish, toggleWish, addToCart } = useShop();

    const items = productsData.filter((p) => wish.includes(p.id));

    return (
        <main>
            <div className="page-head bg-velvet">
                <div className="bg-velvet" style={{ position: "absolute", inset: 0 }} />
                <div className="wrap">
                    <div className="crumb">
                        <Link to="/">Home</Link>
                        <span className="sep">/</span>
                        <span>Wishlist</span>
                    </div>
                    <h1>My Wishlist</h1>
                    <p className="lede">
                        {items.length > 0
                            ? `${items.length} piece${items.length > 1 ? "s" : ""} saved for later`
                            : "Your curated collection awaits"}
                    </p>
                </div>
            </div>

            <section className="section wrap">
                {items.length === 0 ? (
                    <WishlistEmpty />
                ) : (
                    <>
                        <div className="grid-products">
                            {items.map((product) => (
                                <WishCard
                                    key={product.id}
                                    product={product}
                                    toggleWish={toggleWish}
                                    addToCart={addToCart}
                                />
                            ))}
                        </div>

                        <div style={{ textAlign: "center", marginTop: 56 }}>
                            <Link to="/collections" className="btn btn-ghost">
                                Continue Browsing <ArrowRight size={15} />
                            </Link>
                        </div>
                    </>
                )}
            </section>
        </main>
    );
}

function WishCard({ product, toggleWish, addToCart }) {
    return (
        <article className="prod-card">
            <div className="prod-thumb zoom">
                {product.badge && (
                    <span className={`prod-badge ${["Sale", "New"].includes(product.badge) ? "sale" : ""}`}>
                        {product.badge}
                    </span>
                )}
                <button
                    className="wish on"
                    onClick={() => toggleWish(product)}
                    aria-label="Remove from wishlist"
                    title="Remove from wishlist"
                >
                    <Heart size={14} strokeWidth={1.5} fill="currentColor" />
                </button>
                <Link to={`/product/${product.slug}`} style={{ position: "absolute", inset: 0 }}>
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </Link>
                <div className="prod-actions">
                    <Link to={`/product/${product.slug}`} className="btn btn-navy">
                        View
                    </Link>
                    <button
                        className="btn btn-gold"
                        onClick={() => addToCart(product)}
                    >
                        <ShoppingBag size={14} /> Add
                    </button>
                </div>
            </div>
            <div className="prod-info">
                <div className="cat-name">{product.collectionName}</div>
                <h4>
                    <Link to={`/product/${product.slug}`}>{product.name}</Link>
                </h4>
                <p className="prod-meta">{product.metal}</p>
                <div className="wish-card-price">
                    ₹{product.price.toLocaleString()}
                </div>
                <button
                    className="wish-card-remove"
                    onClick={() => toggleWish(product)}
                    aria-label="Remove"
                >
                    <Trash2 size={12} /> Remove
                </button>
            </div>
        </article>
    );
}

function WishlistEmpty() {
    return (
        <div className="wishlist-empty">
            <div className="wishlist-empty-icon">
                <Heart size={40} strokeWidth={1} />
            </div>
            <h2 className="wishlist-empty-heading">Nothing saved yet</h2>
            <p className="wishlist-empty-sub">
                Tap the heart on any piece to save it here for later.
            </p>
            <Link to="/collections" className="btn btn-navy" style={{ marginTop: 32 }}>
                Explore Collections <ArrowRight size={15} />
            </Link>
        </div>
    );
}
