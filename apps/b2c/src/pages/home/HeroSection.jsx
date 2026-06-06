import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
    {
        category: "Bridal Solitaires",
        headline: ["Royal Bridal", "Masterpieces"],
        sub: "Hand-set diamonds in 18K gold, crafted to be as eternal as your vows.",
        image: "/home/bridebackless.webp",
        cta: "Explore Bridal",
        href: "/collections/bridal-solitaires",
        tag: "Vivaha Collection",
    },
    {
        category: "Family Heritage",
        headline: ["Treasures for", "Generations"],
        sub: "Heritage gold and uncut diamonds that carry the legacy of Surat artistry.",
        image: "/home/familybackless.webp",
        cta: "Discover Heritage",
        href: "/collections/heritage-gold",
        tag: "Heritage Series",
    },
    {
        category: "Modern Solitaires",
        headline: ["The Solitaire", "Edit"],
        sub: "GIA-certified brilliance for every day. Minimalist design, maximum fire.",
        image: "/home/portrait1.webp",
        cta: "Shop Solitaires",
        href: "/collections/bridal-solitaires",
        tag: "Everyday Fine",
    },
    {
        category: "Statement Necklaces",
        headline: ["Artistry in", "Every Link"],
        sub: "From delicate chains to royal chokers — each piece is a masterpiece of design.",
        image: "/home/portraitvertical.webp",
        cta: "View Necklaces",
        href: "/collections/diamond-earrings",
        tag: "Signature Series",
    },
];

export default function HeroSection() {
    const [active, setActive] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = useCallback(() => {
        if (animating) return;
        setAnimating(true);
        setActive((prev) => (prev + 1) % SLIDES.length);
        setTimeout(() => setAnimating(false), 800);
    }, [animating]);

    const prev = useCallback(() => {
        if (animating) return;
        setAnimating(true);
        setActive((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
        setTimeout(() => setAnimating(false), 800);
    }, [animating]);

    useEffect(() => {
        const t = setInterval(next, 6000);
        return () => clearInterval(t);
    }, [next]);

    const slide = SLIDES[active];

    return (
        <section className="hero bg-velvet bg-noise">
            <div className="hero-bg" />

            <div className="hero-grid">
                {/* ── LEFT — text content (Rotates) ── */}
                <div
                    className="hero-copy"
                    key={`text-${active}`}
                    style={{ animation: "cFadeUp 0.8s ease both" }}
                >
                    <span className="eyebrow hero-eyebrow">
                        {slide.category} · Since 1999
                    </span>

                    <h1 style={{ minHeight: "2.2em" }}>
                        {slide.headline[0]}
                        <br />
                        <em>{slide.headline[1]}</em>
                    </h1>

                    <p className="sub">{slide.sub}</p>

                    <div className="hero-cta">
                        <Link
                            to={slide.href}
                            className="btn btn-champagne btn-lg"
                        >
                            {slide.cta} <ArrowRight size={16} />
                        </Link>
                        <Link
                            to="/story"
                            className="btn btn-ghost-white btn-lg"
                        >
                            Our Story
                        </Link>
                    </div>

                    <div className="hero-meta">
                        <div className="m">
                            <b>25+</b>
                            <span>Years Legacy</span>
                        </div>
                        <div className="m">
                            <b>100%</b>
                            <span>Certified</span>
                        </div>
                    </div>
                </div>

                {/* ── RIGHT — backless image (Rotates) ── */}
                <div
                    className="hero-figure"
                    key={`img-${active}`}
                    style={{
                        animation: "cFadeInRight 0.8s ease both",
                        display: "flex",
                        alignItems:
                            "center" /* Vertically center as requested */,
                        justifyContent: "center",
                        position: "relative",
                        border: "1px solid rgba(212,176,106,0.15)" /* Full thin border */,
                        overflow: "visible",
                    }}
                >
                    <div
                        className="hero-glow-backing"
                        style={{
                            position: "absolute",
                            inset: "10%",
                            background:
                                "radial-gradient(circle, rgba(184,134,42,0.15) 0%, transparent 70%)",
                            filter: "blur(40px)",
                            zIndex: 0,
                        }}
                    />

                    <img
                        src={slide.image}
                        alt={slide.category}
                        className="hero-lady"
                        style={{
                            objectFit: "contain",
                            filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.4))",
                            maxHeight: "92%",
                            width: "auto",
                            marginBottom: "0",
                            zIndex: 1,
                        }}
                    />

                    {/* Enhanced Corner Accents — Offset for "Double Frame" effect */}
                    <span
                        className="hero-frame-corner tc-l"
                        style={{
                            position: "absolute",
                            top: -12,
                            left: -12,
                            width: 40,
                            height: 40,
                            borderTop: "2px solid var(--gold)",
                            borderLeft: "2px solid var(--gold)",
                        }}
                    />
                    <span
                        className="hero-frame-corner bc-r"
                        style={{
                            position: "absolute",
                            bottom: -12,
                            right: -12,
                            width: 40,
                            height: 40,
                            borderBottom: "2px solid var(--gold)",
                            borderRight: "2px solid var(--gold)",
                        }}
                    />

                    <span className="tag">{slide.tag}</span>
                </div>
            </div>

            {/* Navigation Arrows */}
            <div
                className="hero-nav-controls"
                style={{
                    position: "absolute",
                    bottom: "40px",
                    right: "var(--gut)",
                    display: "flex",
                    gap: "12px",
                    zIndex: 10,
                }}
            >
                <button
                    onClick={prev}
                    className="nav-ico"
                    style={{
                        border: "1px solid rgba(255,255,255,0.2)",
                        borderRadius: "50%",
                        width: "44px",
                        height: "44px",
                    }}
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={next}
                    className="nav-ico"
                    style={{
                        border: "1px solid rgba(255,255,255,0.2)",
                        borderRadius: "50%",
                        width: "44px",
                        height: "44px",
                    }}
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Scroll indicator */}
            <div className="scrolldown">
                <span>Explore</span>
                <span className="line" />
            </div>

            <style
                dangerouslySetInnerHTML={{
                    __html: `
        @keyframes cFadeInRight {
          from { opacity: 0; transform: translateX(40px) scale(0.95); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
      `,
                }}
            />
        </section>
    );
}
