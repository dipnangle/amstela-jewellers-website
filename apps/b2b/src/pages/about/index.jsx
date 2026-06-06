import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useIntersection } from "@jewel/shared/hooks/useIntersection.js";

const TIMELINE = [
    {
        year: "1999",
        title: "Founded",
        body: "Founded in the diamond district of Surat with a 500 sq ft workshop and 8 craftsmen.",
    },
    {
        year: "2004",
        title: "First Exports",
        body: "First international exports to UAE and Bahrain. Turnover crosses ₹5 crore.",
    },
    {
        year: "2008",
        title: "Facility Expansion",
        body: "Expanded to 8,000 sq ft. In-house casting and QC lab established.",
    },
    {
        year: "2012",
        title: "IGI Certified",
        body: "IGI certification obtained. Diamond grading brought in-house.",
    },
    {
        year: "2016",
        title: "OEM Division",
        body: "OEM division launched. First private-label client in UK. Facility reaches 15,000 sq ft.",
    },
    {
        year: "2020",
        title: "40 Countries",
        body: "Export markets reach 40 countries. GIA sourcing partnerships formalised.",
    },
    {
        year: "2024",
        title: "Digital Era",
        body: "Digital catalogue launched. Amstela consumer brand introduced to Indian retail.",
    },
];

const STATS = [
    { n: "25+", l: "Years Manufacturing" },
    { n: "40+", l: "Export Markets" },
    { n: "10K+", l: "Pieces / Year" },
    { n: "3", l: "Certifications" },
];

export default function AboutPage() {
    const [ref, visible] = useIntersection();

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
                        <span>About</span>
                    </div>
                    <h1>About Amstela</h1>
                    <p className="lede">
                        A quarter century of certified diamond manufacturing
                        from Surat's diamond heartland.
                    </p>
                </div>
            </div>

            <section className="trust">
                <div className="wrap trust-grid">
                    {STATS.map((s) => (
                        <div
                            className="trust-cell"
                            key={s.l}
                            style={{
                                justifyContent: "center",
                                flexDirection: "column",
                                gap: 4,
                                textAlign: "center",
                            }}
                        >
                            <b
                                style={{
                                    fontSize: 32,
                                    fontFamily: "var(--serif)",
                                }}
                            >
                                {s.n}
                            </b>
                            <span>{s.l}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section wrap">
                <div
                    className="between"
                    style={{
                        alignItems: "flex-start",
                        gap: 64,
                        flexWrap: "wrap",
                    }}
                >
                    <div
                        className="section-head"
                        ref={ref}
                        style={{ maxWidth: 520 }}
                    >
                        <span className="eyebrow">The Journey</span>
                        <h2>Built over 25 Years</h2>
                        <p className="lede" style={{ marginTop: 16 }}>
                            Amstela Jewels was founded in Surat with a singular
                            belief — that manufacturing excellence and
                            international trust go hand in hand. From a small
                            workshop to a 15,000 sq ft certified facility, our
                            journey reflects decades of disciplined growth.
                        </p>
                    </div>

                    <div
                        className={`timeline reveal ${visible ? "in" : ""}`}
                        style={{ flex: 1, minWidth: 320 }}
                    >
                        {TIMELINE.map((t) => (
                            <div className="tl-row" key={t.year}>
                                <div className="tl-year">{t.year}</div>
                                <div className="tl-body">
                                    <h4>{t.title}</h4>
                                    <p
                                        style={{
                                            fontSize: 14,
                                            color: "var(--body)",
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        {t.body}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="craft section">
                <div className="wrap">
                    <div className="craft-grid">
                        <div className="craft-media">
                            <img
                                src="https://images.unsplash.com/photo-1613843433065-0c9ca2a30a50?w=1200&q=85&fit=crop"
                                alt="Amstela facility"
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                        <div className="on-dark">
                            <span
                                className="eyebrow"
                                style={{ color: "var(--champagne)" }}
                            >
                                Our Philosophy
                            </span>
                            <h2 style={{ color: "#fff", marginTop: 16 }}>
                                Certified at every stage
                            </h2>
                            <p className="lede" style={{ marginTop: 16 }}>
                                We don't cut corners. Every piece passes through
                                hallmarking, independent gemological
                                certification, and multi-stage QC before it
                                leaves our facility.
                            </p>
                            <Link
                                to="/certifications"
                                className="btn btn-gold btn-lg"
                                style={{ marginTop: 30 }}
                            >
                                View Certifications <ArrowRight size={15} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
