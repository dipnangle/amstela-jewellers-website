import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useSiteConfig } from "../../context/SiteConfigContext";
import { useIntersection } from "@jewel/shared/hooks/useIntersection.js";

export default function BrandIntro() {
    const { config } = useSiteConfig();
    const [ref, visible] = useIntersection();
    if (!config) return null;
    const { brandIntro, stats } = config;

    return (
        <section className="craft section">
            <div className="wrap">
                <div className="craft-grid">
                    <div
                        ref={ref}
                        className={`craft-media zoom reveal ${visible ? "in" : ""}`}
                    >
                        <img
                            src={brandIntro.image}
                            alt="Amstela craftsmanship"
                            style={{
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>

                    <div
                        className={`on-dark reveal ${visible ? "in" : ""}`}
                        style={{ transitionDelay: "150ms" }}
                    >
                        <span
                            className="eyebrow"
                            style={{ color: "var(--champagne)" }}
                        >
                            The Legacy
                        </span>
                        <h2 style={{ color: "#fff", marginTop: 18 }}>
                            {brandIntro.heading}
                        </h2>
                        <p className="lede" style={{ marginTop: 18 }}>
                            {brandIntro.body}
                        </p>
                        <Link
                            to={brandIntro.ctaLink}
                            className="link-gold"
                            style={{ marginTop: 32, display: "inline-flex" }}
                        >
                            {brandIntro.ctaText} <ArrowRight size={15} />
                        </Link>

                        {stats && (
                            <div className="craft-stats">
                                {stats.slice(0, 3).map((s) => (
                                    <div className="m" key={s.label}>
                                        <b>{s.value}</b>
                                        <span>{s.label}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
