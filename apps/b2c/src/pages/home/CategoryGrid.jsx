import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const CATS = [
    {
        name: "Solitaire Rings",
        count: "42 Pieces",
        image: "/home/rings.webp",
        href: "/collections?category=Rings",
    },
    {
        name: "Diamond Earrings",
        count: "28 Pieces",
        image: "/home/earings.webp",
        href: "/collections?category=Earrings",
    },
    {
        name: "Bridal Sets",
        count: "15 Pieces",
        image: "/home/BridalSets.webp",
        href: "/collections?category=Bridal Sets",
    },
    {
        name: "Gold Heritage",
        count: "34 Pieces",
        image: "/home/GoldHeritage.webp",
        href: "/collections/heritage-gold",
    },
    {
        name: "Modern Necklaces",
        count: "22 Pieces",
        image: "/home/ModernNecklaces.webp",
        href: "/collections?category=Necklaces",
    },
    {
        name: "Men's Fine",
        count: "12 Pieces",
        image: "/home/mensrings.webp",
        href: "/collections",
    },
];

export default function CategoryGrid() {
    return (
        <section className="section wrap">
            <div
                className="section-head is-center"
                style={{ marginBottom: 50 }}
            >
                <span className="eyebrow center-line">Shop By</span>
                <h2>Categories</h2>
            </div>

            <div className="cat-grid">
                {CATS.map((c) => (
                    <Link key={c.name} to={c.href} className="cat zoom">
                        <img
                            src={c.image}
                            alt={c.name}
                            style={{
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                        <div className="cat-body">
                            <div>
                                <h3>{c.name}</h3>
                                <span>{c.count}</span>
                            </div>
                            <div className="pill">
                                <ArrowUpRight size={20} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
