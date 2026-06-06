import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const CATS = [
    {
        name: "Solitaire Rings",
        count: "42 Pieces",
        image: "/home/showcase1.webp",
        href: "/collections/bridal-solitaires",
        gridClass: "col-span-2 row-span-2",
    },
    {
        name: "Diamond Earrings",
        count: "28 Pieces",
        image: "/home/portrait1.webp",
        href: "/collections/diamond-earrings",
        gridClass: "col-span-1 row-span-2",
    },
    {
        name: "Bridal Sets",
        count: "15 Pieces",
        image: "/home/bride1.webp",
        href: "/collections/bridal-solitaires",
        gridClass: "col-span-1 row-span-1",
    },
    {
        name: "Gold Heritage",
        count: "34 Pieces",
        image: "/home/landscape1.webp",
        href: "/collections/heritage-gold",
        gridClass: "col-span-2 row-span-1",
    },
    {
        name: "Modern Necklaces",
        count: "22 Pieces",
        image: "/home/necklace1.webp",
        href: "/collections/diamond-earrings",
        gridClass: "col-span-1 row-span-1",
    },
    {
        name: "Men's Fine",
        count: "12 Pieces",
        image: "/home/manufacturing1.webp",
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
                    gridAutoRows: "minmax(200px, auto)",
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
                            <div>
                                <h3 style={{ fontSize: "clamp(18px, 2vw, 24px)" }}>
                                    {c.name}
                                </h3>
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
