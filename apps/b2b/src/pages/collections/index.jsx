import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import collectionsData from "../../config/content/collections.json";
import { useIntersection } from "@jewel/shared/hooks/useIntersection.js";

export default function CollectionsPage() {
    return (
        <main>
            <div className="page-head bg-velvet">
                <div
                    className="bg-velvet"
                    style={{ position: "absolute", inset: 0 }}
                />
                <div className="wrap">
                    <div className="crumb">
                        <Link to="/">Home</Link>
                        <span className="sep">/</span>
                        <span>Collections</span>
                    </div>
                    <h1>Trade Collections</h1>
                    <p className="lede">
                        Browse our wholesale catalogue. All pieces are BIS
                        hallmarked with IGI/GIA certification available. Price
                        on request.
                    </p>
                </div>
            </div>

            <section className="section wrap">
                <div className="prod-grid">
                    {collectionsData.map((col, i) => (
                        <CollCard key={col.id} col={col} index={i} />
                    ))}
                </div>
            </section>

            <section
                style={{
                    background: "var(--navy-dark)",
                    textAlign: "center",
                    padding: "clamp(48px,6vw,80px) 0",
                }}
            >
                <div className="wrap on-dark">
                    <span
                        className="eyebrow center-line"
                        style={{ color: "var(--champagne)" }}
                    >
                        Bulk Orders
                    </span>
                    <h2 style={{ color: "#fff", marginTop: 16 }}>
                        Custom manufacturing available
                    </h2>
                    <p
                        style={{
                            color: "rgba(255,255,255,.7)",
                            marginTop: 12,
                            maxWidth: "50ch",
                            margin: "12px auto 24px",
                        }}
                    >
                        All designs can be customised to your specifications —
                        metal, stone, finish, and branding.
                    </p>
                    <Link to="/contact" className="btn btn-gold btn-lg">
                        Request a Quote <ArrowRight size={15} />
                    </Link>
                </div>
            </section>
        </main>
    );
}

function CollCard({ col, index }) {
    const [ref, visible] = useIntersection();
    return (
        <article
            ref={ref}
            className={`prod-card reveal ${visible ? "in" : ""}`}
            style={{ transitionDelay: `${Math.min(index, 5) * 80}ms` }}
        >
            <div className="prod-thumb">
                <img src={col.image} alt={col.name} />
                <span className="prod-badge">{col.category}</span>
            </div>
            <div className="prod-info">
                <div className="cat-name">{col.metalOptions[0]}</div>
                <h4>{col.name}</h4>
                <p className="prod-meta">
                    {col.stoneRange} · MOQ {col.moq} pcs · {col.leadTime}
                </p>
                <span className="request-price">Request Price</span>
            </div>
        </article>
    );
}
