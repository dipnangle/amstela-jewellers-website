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
        category: "Signature Necklaces",
        headline: ["Artistry in", "Every Link"],
        sub: "From delicate chains to royal chokers — each piece is a masterpiece of design.",
        image: "/home/necklacebackless.webp",
        cta: "View Necklaces",
        href: "/collections/diamond-earrings",
        tag: "Statement Series",
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
        <section
            className="hero-wide-layout bg-velvet bg-noise"
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "grid",
                placeItems: "center",
                padding: "40px var(--gut)",
                overflow: "hidden",
                color: "#fff",
            }}
        >
            <div
                className="hero-bg"
                style={{ position: "absolute", inset: 0, zIndex: 0 }}
            />

            {/* ── 3-Column Content Grid ── */}
            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    width: "100%",
                    maxWidth: "1400px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1.4fr 1fr",
                    alignItems: "center",
                    gap: "40px",
                }}
            >
                {/* ── Left Column: Headline ── */}
                <div
                    className="hero-copy-left"
                    key={`left-${active}`}
                    style={{
                        animation: "cFadeUp 0.8s ease both",
                        textAlign: "left",
                    }}
                >
                    <span
                        className="eyebrow hero-eyebrow"
                        style={{ color: "var(--champagne)" }}
                    >
                        {slide.category} · Since 1999
                    </span>

                    <h1
                        style={{
                            marginTop: "20px",
                            fontSize: "clamp(32px, 4.5vw, 68px)",
                            lineHeight: "1.1",
                            fontWeight: "400",
                            color: "var(--champagne)",
                        }}
                    >
                        {slide.headline[0]}
                        <br />
                        <em style={{ color: "#fff" }}>
                            {slide.headline[1]}
                        </em>
                    </h1>
                    
                    <div style={{ marginTop: '40px' }}>
                        <div className="m" style={{ marginBottom: '20px' }}>
                            <b style={{ fontSize: '24px', color: 'var(--champagne)', fontFamily: 'var(--serif)' }}>25+</b>
                            <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', opacity: 0.7 }}>Years Legacy</span>
                        </div>
                        <div className="m">
                            <b style={{ fontSize: '24px', color: 'var(--champagne)', fontFamily: 'var(--serif)' }}>100%</b>
                            <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', opacity: 0.7 }}>Certified Diamonds</span>
                        </div>
                    </div>
                </div>

                {/* ── Center Column: Perfectly Centered Image Frame ── */}
                <div
                    className="hero-figure-center"
                    key={`img-${active}`}
                    style={{
                        animation: "cFadeInUp 1s ease both",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        overflow: "hidden",
                        background: "rgba(255, 255, 255, 0.02)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(212, 176, 106, 0.15)",
                        boxShadow: "0 50px 120px -30px rgba(0, 0, 0, 0.6)",
                        padding: "40px",
                        width: "100%",
                        aspectRatio: "4/5",
                        margin: "0 auto",
                    }}
                >
                    {/* Inner Decorative Frame */}
                    <div
                        style={{
                            position: "absolute",
                            inset: "15px",
                            border: "1px solid rgba(212, 176, 106, 0.08)",
                            pointerEvents: "none",
                        }}
                    />

                    <div
                        className="hero-glow-backing"
                        style={{
                            position: "absolute",
                            inset: "0",
                            background:
                                "radial-gradient(circle at center, rgba(184, 134, 42, 0.1) 0%, transparent 80%)",
                            zIndex: 0,
                        }}
                    />

                    <img
                        src={slide.image}
                        alt={slide.category}
                        className="hero-lady"
                        style={{
                            position: "absolute",
                            inset: "40px",
                            width: "calc(100% - 80px)",
                            height: "calc(100% - 80px)",
                            objectFit: "contain",
                            objectPosition: "center",
                            filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.7))",
                            zIndex: 1,
                        }}
                    />

                    {/* Premium Corner Brackets */}
                    <div
                        className="corner-brackets"
                        style={{
                            position: "absolute",
                            inset: "-15px",
                            pointerEvents: "none",
                        }}
                    >
                        <span
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: 80,
                                height: 80,
                                borderTop: "1px solid var(--gold)",
                                borderLeft: "1px solid var(--gold)",
                            }}
                        />
                        <span
                            style={{
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                width: 80,
                                height: 80,
                                borderBottom: "1px solid var(--gold)",
                                borderRight: "1px solid var(--gold)",
                            }}
                        />
                    </div>

                    <span
                        className="tag"
                        style={{
                            position: "absolute",
                            bottom: "30px",
                            left: "-15px",
                            background: "var(--gold)",
                            color: "var(--navy-dark)",
                            padding: "10px 24px",
                            fontSize: "10px",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            fontWeight: "700",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                            zIndex: 3,
                        }}
                    >
                        {slide.tag}
                    </span>
                </div>

                {/* ── Right Column: Subtext & CTA ── */}
                <div
                    className="hero-copy-right"
                    key={`right-${active}`}
                    style={{
                        animation: "cFadeUp 0.8s ease both",
                        textAlign: "left",
                        paddingLeft: "40px",
                    }}
                >
                    <p
                        className="sub"
                        style={{
                            fontSize: "clamp(16px, 1.2vw, 20px)",
                            lineHeight: "1.6",
                            color: "rgba(255,255,255,0.8)",
                            maxWidth: "340px",
                        }}
                    >
                        {slide.sub}
                    </p>

                    <div
                        className="hero-cta"
                        style={{
                            marginTop: "40px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "15px",
                            alignItems: "flex-start",
                        }}
                    >
                        <Link
                            to={slide.href}
                            className="btn btn-champagne btn-lg"
                            style={{ width: "fit-content" }}
                        >
                            {slide.cta} <ArrowRight size={18} />
                        </Link>
                        <Link
                            to="/story"
                            className="btn btn-ghost-white btn-lg"
                            style={{ width: "fit-content" }}
                        >
                            Our Story
                        </Link>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows — Side to Side Extreme */}
            <button
                onClick={prev}
                className="nav-ico hero-side-btn left"
                style={{
                    position: "absolute",
                    left: "30px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "50%",
                    width: "64px",
                    height: "64px",
                    zIndex: 20,
                    background: "rgba(8, 22, 47, 0.4)",
                    backdropFilter: "blur(12px)",
                    color: "#fff",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "0.4s var(--ease)",
                }}
            >
                <ChevronLeft size={32} strokeWidth={1.5} />
            </button>
            <button
                onClick={next}
                className="nav-ico hero-side-btn right"
                style={{
                    position: "absolute",
                    right: "30px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "50%",
                    width: "64px",
                    height: "64px",
                    zIndex: 20,
                    background: "rgba(8, 22, 47, 0.4)",
                    backdropFilter: "blur(12px)",
                    color: "#fff",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "0.4s var(--ease)",
                }}
            >
                <ChevronRight size={32} strokeWidth={1.5} />
            </button>

            {/* Scroll indicator */}
            <div className="scrolldown">
                <span style={{ color: "var(--champagne)", opacity: 0.8 }}>
                    Explore Our Legacy
                </span>
                <span className="line" />
            </div>

            <style
                dangerouslySetInnerHTML={{
                    __html: `
        @keyframes cFadeInUp {
          from { opacity: 0; transform: translateY(80px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cFadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-side-btn:hover {
          background: var(--gold) !important;
          color: var(--navy-dark) !important;
          border-color: var(--gold) !important;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 0 30px rgba(212, 176, 106, 0.3);
        }
      `,
                }}
            />
        </section>
    );
}
