import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const CATS = [
    {
        name: "Solitaire Rings",
        count: "40 Pieces",
        image: "/home/rings.webp",
        href: "/collections?category=Rings",
        gridClass: "col-span-2 row-span-2",
    },
    {
        name: "Diamond Earrings",
        count: "43 Pieces",
        image: "/home/earings.webp",
        href: "/collections?category=Earrings",
        gridClass: "col-span-1 row-span-2",
    },
    {
        name: "Bridal Sets",
        count: "37 Pieces",
        image: "/home/BridalSets.webp",
        href: "/collections?category=Bridal Sets",
        gridClass: "col-span-1 row-span-1",
    },
    {
        name: "Daily Wear Diamonds",
        count: "18 Pieces",
        image: "/home/dailywear.webp",
        href: "/collections/everyday-elegance",
        gridClass: "col-span-1 row-span-1",
    },
    {
        name: "Gold Heritage",
        count: "34 Pieces",
        image: "/home/GoldHeritage.webp",
        href: "/collections/heritage-gold",
        gridClass: "col-span-2 row-span-1",
    },
    {
        name: "Modern Necklaces",
        count: "40 Pieces",
        image: "/home/ModernNecklaces.webp",
        href: "/collections?category=Necklaces",
        gridClass: "col-span-1 row-span-1",
    },
    {
        name: "Men's Fine",
        count: "12 Pieces",
        image: "/home/mensrings.webp",
        href: "/collections",
        gridClass: "col-span-1 row-span-1",
    },
];

export default function AsymmetricCategoryGrid() {
    return (
        <section className="section wrap">
            <div className="section-head is-center" style={{ marginBottom: 50 }}>
                <span className="eyebrow center-line">Shop By</span>
                <h2>Categories</h2>
            </div>

            <div
                className="category-asymmetric-grid"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gridAutoRows: "minmax(240px, auto)",
                    gap: "24px",
                }}
            >
                {CATS.map((c, i) => (
                    <Link
                        key={c.name}
                        to={c.href}
                        className={`cat zoom ${c.gridClass}`}
                        style={{
                            aspectRatio: "auto",
                            height: "100%",
                            gridColumn: c.gridClass.includes("col-span-2")
                                ? "span 2"
                                : "span 1",
                            gridRow: c.gridClass.includes("row-span-2")
                                ? "span 2"
                                : "span 1",
                        }}
                    >
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
                            <div className="cat-label-card">
                                <h3 className="category-text">
                                    {c.name}
                                </h3>
                                <span className="cat-count-badge">
                                    {c.count.replace(" Pieces", "")}+
                                </span>
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
