import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import productsData from "../../config/content/products.json";
import { useShop } from "../../context/ShopContext";

export default function ProductRail() {
    const { wish, toggleWish } = useShop();

    return (
        <section className="section">
            <div className="wrap">
                <div className="between" style={{ marginBottom: 40 }}>
                    <div className="section-head">
                        <span className="eyebrow">On The Rail</span>
                        <h2>Just Arrived</h2>
                    </div>
                    <Link to="/collections" className="link-gold">
                        Shop All
                    </Link>
                </div>

                <div className="prod-rail">
                    {productsData.map((p) => {
                        const wished = wish.includes(p.id);
                        return (
                            <div
                                key={p.id}
                                className="prod-card"
                                style={{ width: 300 }}
                            >
                                <div className="prod-thumb zoom">
                                    <button
                                        className={`wish ${wished ? "on" : ""}`}
                                        onClick={() => toggleWish(p)}
                                    >
                                        <Heart
                                            size={14}
                                            fill={
                                                wished ? "currentColor" : "none"
                                            }
                                        />
                                    </button>
                                    <Link to={`/product/${p.slug}`}>
                                        <img
                                            src={p.images[0]}
                                            alt={p.name}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </Link>
                                </div>
                                <div className="prod-info">
                                    <span className="cat-name">
                                        {p.category}
                                    </span>
                                    <h4>{p.name}</h4>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 10,
                                            marginTop: 4,
                                        }}
                                    >
                                        <p className="prod-meta">{p.metal}</p>
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
                                            ₹{p.price.toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
