import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "../../hooks/useSEO";
import { 
    Cpu, 
    Diamond, 
    Flame, 
    PenTool, 
    SearchCheck, 
    ShieldCheck, 
    Settings,
    Users,
    Gem,
    Play
} from "lucide-react";

export default function ManufacturingPage() {
    useSEO({ title: "Our Manufacturing", description: "Tour Amstela's 15,000 sq ft diamond jewellery manufacturing facility in Surat — CAD design, laser precision, BIS hallmarking." });
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let startX = 0;
        let startTranslateX = 0;
        let isDragging = false;
        let resumeTimer = null;

        function getComputedTranslateX(el) {
            const matrix = new DOMMatrix(window.getComputedStyle(el).transform);
            return matrix.m41;
        }

        function onTouchStart(e) {
            clearTimeout(resumeTimer);
            startX = e.touches[0].clientX;
            startTranslateX = getComputedTranslateX(track);
            track.style.animationPlayState = 'paused';
            track.style.transform = `translateX(${startTranslateX}px)`;
            isDragging = true;
        }

        function onTouchMove(e) {
            if (!isDragging) return;
            const deltaX = e.touches[0].clientX - startX;
            track.style.transform = `translateX(${startTranslateX + deltaX}px)`;
        }

        function onTouchEnd() {
            isDragging = false;
            resumeTimer = setTimeout(() => {
                track.style.transform = '';
                track.style.animationPlayState = 'running';
            }, 1500);
        }

        track.addEventListener('touchstart', onTouchStart, { passive: true });
        track.addEventListener('touchmove', onTouchMove, { passive: true });
        track.addEventListener('touchend', onTouchEnd);

        return () => {
            clearTimeout(resumeTimer);
            track.removeEventListener('touchstart', onTouchStart);
            track.removeEventListener('touchmove', onTouchMove);
            track.removeEventListener('touchend', onTouchEnd);
        };
    }, []);

    const steps = [
        {
            year: "Step 1",
            title: "Ethical Sourcing",
            desc: "Every journey begins with the finest raw materials. We source conflict-free diamonds and 100% hallmarked gold, ensuring a foundation of purity and integrity.",
            icon: <Gem size={20} />
        },
        {
            year: "Step 2",
            title: "Digital Artistry (CAD)",
            desc: "Our designers use advanced MatrixGold software to create precise 3D blueprints. This allows us to visualize complex geometries and ensure perfect stone fitment.",
            icon: <PenTool size={20} />
        },
        {
            year: "Step 3",
            title: "Wax & Casting",
            desc: "High-resolution 3D printers turn digital designs into physical wax models. These are then cast in precious metal using state-of-the-art vacuum casting machines.",
            icon: <Flame size={20} />
        },
        {
            year: "Step 4",
            title: "Micro-Setting",
            desc: "Under high-powered microscopes, our master setters hand-place every diamond. This level of precision ensures maximum brilliance and lifetime security.",
            icon: <Diamond size={20} />
        },
        {
            year: "Step 5",
            title: "The Final Glow",
            desc: "Multi-stage polishing brings out the mirror-finish luster of the metal. A final 4-point quality check ensures every piece meets the Amstela standard.",
            icon: <SearchCheck size={20} />
        }
    ];

    const pillars = [
        {
            title: "Precision Tech",
            desc: "Equipped with the latest laser soldering and 3D printing technology for unmatched detail.",
            icon: <Cpu className="text-gold" size={32} strokeWidth={1.5} />
        },
        {
            title: "Master Artisans",
            desc: "A team of setters and goldsmiths with over 20 years of individual expertise.",
            icon: <Users className="text-gold" size={32} strokeWidth={1.5} />
        },
        {
            title: "Certified Purity",
            desc: "Rigorous testing at every stage, from metal assaying to final GIA/IGI diamond verification.",
            icon: <ShieldCheck className="text-gold" size={32} strokeWidth={1.5} />
        },
        {
            title: "Ethical Craft",
            desc: "Commitment to sustainable practices and transparent sourcing for a guilt-free luxury.",
            icon: <Settings className="text-gold" size={32} strokeWidth={1.5} />
        }
    ];

    return (
        <main id="manufacturing-page" className="page manufacturing-page">
            {/* ── Immersive Overlay Hero ── */}
            <section id="mfg-hero" className="hero-split" style={{ 
                display: 'flex', 
                minHeight: '100vh', 
                width: '100%', 
                background: '#08162f', 
                overflow: 'hidden',
                position: 'relative'
            }}>
                {/* Background Video (70% width, pushed to right) */}
                <div id="mfg-hero-video-panel" className="split-right" style={{ 
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: '70%', 
                    overflow: 'hidden'
                }}>
                    <video
                        id="mfg-hero-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover' 
                        }}
                    >
                        <source src="/videos/manufacturing.mp4" type="video/mp4" />
                    </video>

                        {/* Technical Data Sidebar (Vertical) */}
                        <div id="mfg-tech-sidebar" style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            width: '80px',
                            background: 'rgba(8, 22, 47, 0.4)',
                            backdropFilter: 'blur(10px)',
                            borderLeft: '1px solid rgba(255,255,255,0.08)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            overflow: 'hidden',
                            zIndex: 20
                        }}>
                            <style dangerouslySetInnerHTML={{ __html: `
                                .tech-label {
                                    writing-mode: vertical-rl;
                                    text-orientation: mixed;
                                    transform: rotate(180deg);
                                    color: var(--champagne);
                                    font-size: 10px;
                                    letter-spacing: 0.3em;
                                    font-weight: 600;
                                    display: flex;
                                    align-items: center;
                                    gap: 1.5rem;
                                    opacity: 0.7;
                                    flex-shrink: 0;
                                }
                                .tech-dot {
                                    width: 4px;
                                    height: 4px;
                                    background: var(--gold);
                                    border-radius: 50%;
                                    animation: pulse-gold 2s infinite;
                                    flex-shrink: 0;
                                }
                                .tech-sidebar-track {
                                    display: flex;
                                    flex-direction: column;
                                    align-items: center;
                                    gap: 5rem;
                                    padding: 3rem 0;
                                    animation: sidebar-scroll 28s linear infinite;
                                }
                                @keyframes sidebar-scroll {
                                    from { transform: translateY(0); }
                                    to   { transform: translateY(-50%); }
                                }

                                /* ── Mobile: hero layout ── */
                                @media (max-width: 768px) {
                                    /* Video fills full hero, content stacks on top */
                                    #mfg-hero-video-panel {
                                        width: 100% !important;
                                    }
                                    /* Full-width gradient so text stays readable */
                                    #mfg-hero-video-panel > div[style*="linear-gradient"] {
                                        background: linear-gradient(to bottom, rgba(8,22,47,0.55) 0%, rgba(8,22,47,0.85) 100%) !important;
                                    }
                                    /* Hide sidebar on mobile — not enough space */
                                    #mfg-tech-sidebar {
                                        display: none !important;
                                    }
                                    /* Content panel: full width, clear of fixed nav */
                                    #mfg-hero-content {
                                        width: 100% !important;
                                        padding: calc(var(--nav-h) + 2rem) 2rem 0rem !important;
                                        align-items: center !important;
                                        min-height: 100vh !important;
                                        box-sizing: border-box !important;
                                    }
                                    /* Glass card: tighter padding on small screens */
                                    #mfg-hero-content .reveal {
                                        padding: 2rem 1.5rem !important;
                                        max-width: 100% !important;
                                    }
                                    /* Softer edge fade on narrow screens */
                                    #mfg-factory-line {
                                        -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%) !important;
                                        mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%) !important;
                                    }
                                }
                            `}} />

                            {/* Duplicated for seamless vertical loop */}
                            <div className="tech-sidebar-track">
                                <div className="tech-label"><div className="tech-dot" style={{ animationDelay: '0s' }} />LASER PRECISION</div>
                                <div className="tech-label"><div className="tech-dot" style={{ animationDelay: '0.5s' }} />CAD ENGINEERED</div>
                                <div className="tech-label"><div className="tech-dot" style={{ animationDelay: '1s' }} />MICRO SETTING</div>
                                <div className="tech-label"><div className="tech-dot" style={{ animationDelay: '0s' }} />LASER PRECISION</div>
                                <div className="tech-label"><div className="tech-dot" style={{ animationDelay: '0.5s' }} />CAD ENGINEERED</div>
                                <div className="tech-label"><div className="tech-dot" style={{ animationDelay: '1s' }} />MICRO SETTING</div>
                            </div>
                        </div>

                    {/* Gradient Overlay for blend */}

                    {/* Gradient Overlay for blend */}
                    <div style={{ 
                        position: 'absolute', 
                        inset: 0, 
                        background: 'linear-gradient(to right, #08162f 0%, rgba(8,22,47,0.4) 30%, transparent 100%)' 
                    }} />
                    
                    <div className="tag" style={{ position: 'absolute', bottom: '40px', right: '40px' }}>
                        SURAT FACILITY
                    </div>
                </div>

                {/* Left Panel: Frosted Overlay Content */}
                <div id="mfg-hero-content" className="split-left" style={{ 
                    position: 'relative',
                    zIndex: 10,
                    width: '50%', // Slightly wider for better text balance
                    padding: 'var(--gut)', 
                    display: 'flex', 
                    alignItems: 'center', // Horizontal center within the left half
                    justifyContent: 'center', // Vertical center
                    minHeight: '100vh'
                }}>
                    <div className="reveal in" style={{ 
                        maxWidth: '580px', 
                        padding: '4.5rem 4rem',
                        background: 'rgba(8, 22, 47, 0.75)',
                        backdropFilter: 'blur(24px)',
                        WebkitBackdropFilter: 'blur(24px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 40px 100px rgba(0,0,0,0.4)',
                        margin: 'auto 0' // Extra insurance for vertical centering
                    }}>
                        <span className="eyebrow" style={{ color: 'var(--gold)', letterSpacing: '0.3em' }}>TECHNICAL EXCELLENCE</span>
                        <h1 style={{ 
                            color: '#fff', 
                            fontSize: 'clamp(36px, 4.5vw, 64px)', 
                            lineHeight: 1.05, 
                            margin: '1.5rem 0' 
                        }}>
                            From <em>Soul</em><br />to Stone.
                        </h1>
                        <p style={{ 
                            color: 'rgba(255,255,255,0.7)', 
                            fontSize: '1rem', 
                            lineHeight: 1.6, 
                            marginBottom: '2.5rem' 
                        }}>
                            Explore the heart of our operations in Surat. Our state-of-the-art facility 
                            fuses heritage craftsmanship with robotic precision to create jewellery 
                            that lasts generations.
                        </p>
                        
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="#mfg-process" className="btn btn-gold">Workshop Tour</a>
                            <Link to="/contact" className="btn btn-outline-light">Our Standards</Link>
                        </div>

                        {/* Stats integrated into panel */}
                        <div style={{ 
                            display: 'flex', 
                            gap: '2.5rem', 
                            marginTop: '3.5rem', 
                            paddingTop: '2rem', 
                            borderTop: '1px solid rgba(255,255,255,0.1)' 
                        }}>
                            <div className="m">
                                <b style={{ display: 'block', color: '#fff', fontSize: '1.8rem', fontFamily: 'var(--serif)' }}>25+</b>
                                <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)' }}>Years Heritage</span>
                            </div>
                            <div className="m">
                                <b style={{ display: 'block', color: '#fff', fontSize: '1.8rem', fontFamily: 'var(--serif)' }}>150+</b>
                                <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)' }}>Artisans</span>
                            </div>
                            <div className="m">
                                <b style={{ display: 'block', color: '#fff', fontSize: '1.8rem', fontFamily: 'var(--serif)' }}>10K+</b>
                                <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)' }}>Annual Pieces</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Intro Section ── */}
            <section id="mfg-pillars" className="section bg-white text-center" style={{ 
                position: 'relative',
                backgroundImage: `linear-gradient(rgba(229, 231, 235, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(229, 231, 235, 0.3) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
            }}>
                <div className="wrap">
                    <div className="section-head is-center reveal in">
                        <span className="eyebrow center-line">THE PILLARS</span>
                        <h2>The Art of the Extraordinary</h2>
                        <p className="lede">
                            Our manufacturing process isn't just about machines - it's about the relentless pursuit of perfection 
                            where every fraction of a millimeter matters.
                        </p>
                    </div>

                    <div className="grid-products reveal in" style={{ marginTop: '4rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                        {pillars.map((p, i) => (
                            <div key={i} className="tst" style={{ textAlign: 'center', border: '1px solid var(--border)', padding: '3rem 2rem' }}>
                                <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                                    {p.icon}
                                </div>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{p.title}</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--body)' }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Step-by-Step Process (Factory Tour) ── */}
            <section id="mfg-process" className="section bg-offwhite" style={{ overflow: 'hidden', paddingBottom: '8rem' }}>
                <div className="wrap">
                    <div className="section-head is-center reveal in">
                        <span className="eyebrow center-line">OUR PROCESS</span>
                        <h2>Seed to Shine</h2>
                        <p className="lede">Follow the journey of an Amstela masterpiece through our specialized assembly line.</p>
                    </div>
                </div>

                <div className="reveal in" style={{ marginTop: '5rem', position: 'relative' }}>
                    {/* No full-width line — connectors are drawn per-card so gaps are disconnected */}

                    <style dangerouslySetInnerHTML={{ __html: `
                        @keyframes factory-scroll {
                            from { transform: translateX(0); }
                            to   { transform: translateX(-50%); }
                        }
                        .factory-track {
                            animation: factory-scroll 90s linear infinite;
                        }
                        .factory-track:hover {
                            animation-play-state: paused;
                        }
                    `}} />

                    {/* Edge fades hide the 5→1 loop reset point */}
                    <div id="mfg-factory-line" style={{
                        overflow: 'hidden',
                        paddingBottom: '40px',
                        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                    }}>
                        {/* Each unit = 5 steps + 1 blank spacer. Doubled for seamless loop. */}
                        <div id="mfg-factory-track" ref={trackRef} className="factory-track" style={{
                            display: 'flex',
                            width: 'max-content',
                            padding: '20px 0 0 0',
                        }}>
                            {(() => {
                                const fullTrack = [...steps, null, ...steps, null];
                                return fullTrack.map((s, i) => {
                                    if (!s) {
                                        return <div key={`gap-${i}`} style={{ width: '300px', flexShrink: 0, marginRight: '48px' }} />;
                                    }
                                    const stepNum = steps.indexOf(s) + 1;
                                    const prevIsGap = i === 0 || !fullTrack[i - 1];
                                    const nextIsGap = i === fullTrack.length - 1 || !fullTrack[i + 1];
                                    return (
                                        <div key={i} style={{
                                            width: '300px',
                                            flexShrink: 0,
                                            marginRight: '48px',
                                            position: 'relative',
                                            zIndex: 1
                                        }}>
                                            {/* Connector line — stops at circle centre toward any gap */}
                                            <div style={{
                                                position: 'absolute',
                                                top: '50px',
                                                left: prevIsGap ? '50%' : '0',
                                                right: nextIsGap ? '50%' : '-48px',
                                                height: '1px',
                                                background: 'var(--border)',
                                                zIndex: 0,
                                            }} />

                                            {/* Circle node — white bg paints over the line */}
                                            <div style={{
                                                width: '100px',
                                                height: '100px',
                                                background: '#fff',
                                                borderRadius: '50%',
                                                border: '1px solid var(--border)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto 2rem',
                                                boxShadow: 'var(--shadow-sm)',
                                                color: 'var(--gold)',
                                                position: 'relative',
                                                zIndex: 1
                                            }}>
                                                {s.icon}
                                                <span style={{
                                                    position: 'absolute',
                                                    top: '-10px',
                                                    right: '-10px',
                                                    background: 'var(--navy)',
                                                    color: '#fff',
                                                    fontSize: '10px',
                                                    width: '24px',
                                                    height: '24px',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 'bold'
                                                }}>
                                                    {stepNum}
                                                </span>
                                            </div>

                                            <div style={{ textAlign: 'center' }}>
                                                <span style={{
                                                    fontSize: '0.7rem',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.2em',
                                                    color: 'var(--gold)',
                                                    fontWeight: 'bold'
                                                }}>
                                                    {s.year}
                                                </span>
                                                <h4 style={{ margin: '0.5rem 0 1rem', fontSize: '1.25rem' }}>{s.title}</h4>
                                                <p style={{ fontSize: '0.9rem', color: 'var(--body)', lineHeight: 1.6 }}>{s.desc}</p>
                                            </div>
                                        </div>
                                    );
                                });
                            })()}
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '1rem', opacity: 0.35, fontSize: '0.7rem', letterSpacing: '0.1em' }}>
                        HOVER TO PAUSE
                    </div>
                </div>
            </section>

            {/* ── Macro-Detail Gallery ── */}
            <section id="mfg-gallery" className="section bg-white" style={{ position: 'relative' }}>
                <div className="wrap">
                    <div className="section-head is-center reveal in">
                        <span className="eyebrow center-line">PRECISION UNDER LENS</span>
                        <h2>Uncompromising Detail</h2>
                        <p className="lede">We believe that true luxury is found in the details that remain invisible to the naked eye.</p>
                    </div>

                    <div className="grid-products reveal in" style={{ marginTop: '5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '40px' }}>
                        {[
                            {
                                img: "/home/GlowSolitaireRing10.webp",
                                title: "The Prongs",
                                spec: "0.4mm tapering for maximum light entry",
                                detail: "Each prong is hand-finished to ensure a mirror-polish that doesn't snag on silk."
                            },
                            {
                                img: "/home/RivieraHaloRing.webp",
                                title: "The Halo",
                                spec: "Uniform 0.01ct stone calibration",
                                detail: "Our halo stones are color-matched within 1 grade to ensure a seamless ring of fire."
                            },
                            {
                                img: "/home/MaharaniHaloRing7.webp",
                                title: "The Hallmark",
                                spec: "Laser-engraved BIS & Amstela marks",
                                detail: "Every piece is laser-inscribed with its unique ID and purity hallmark inside the shank."
                            }
                        ].map((item, i) => (
                            <div key={i} className="zoom" style={{ position: 'relative', background: 'var(--offwhite)', border: '1px solid var(--border)' }}>
                                <div style={{ aspectRatio: '1', overflow: 'hidden' }}>
                                    <img 
                                        src={item.img} 
                                        alt={item.title} 
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                    />
                                </div>
                                
                                {/* Technical Tooltip Overlay */}
                                <div className="detail-overlay" style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: '2rem',
                                    background: 'linear-gradient(to top, rgba(8, 22, 47, 0.95), transparent)',
                                    color: '#fff',
                                    transform: 'translateY(20px)',
                                    opacity: 0,
                                    transition: 'all 0.4s var(--ease)',
                                    pointerEvents: 'none'
                                }}>
                                    <span style={{ color: 'var(--gold)', fontSize: '0.7rem', letterSpacing: '0.15em', fontWeight: 'bold' }}>SPEC: {item.spec}</span>
                                    <h4 style={{ color: '#fff', margin: '0.5rem 0' }}>{item.title}</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>{item.detail}</p>
                                </div>

                                <style dangerouslySetInnerHTML={{ __html: `
                                    .zoom:hover .detail-overlay {
                                        transform: translateY(0);
                                        opacity: 1;
                                    }
                                `}} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Material Palette ── */}
            <section id="mfg-materials" className="section bg-offwhite" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="wrap">
                    <div className="section-head is-center reveal in">
                        <span className="eyebrow center-line">THE FOUNDATION</span>
                        <h2>Pure Components</h2>
                        <p className="lede">Quality starts long before the bench. We only use materials that meet our rigorous standards for purity and ethical origin.</p>
                    </div>

                    <div className="reveal in" style={{ 
                        marginTop: '5rem', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: 'clamp(30px, 8vw, 100px)',
                        flexWrap: 'wrap'
                    }}>
                        {[
                            {
                                title: "24K Gold Grains",
                                label: "PURITY: 99.9%",
                                desc: "Sourced from LBMA-certified refineries. We alloy our own 18K and 14K gold in-house to ensure precise color consistency.",
                                img: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&q=80"
                            },
                            {
                                title: "Conflict-Free Rough",
                                label: "SIGHTHOLDER ORIGIN",
                                desc: "Every diamond is sourced through the Kimberley Process. We select only the top 1% of rough for our master cutting facility.",
                                img: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=400&q=80"
                            },
                            {
                                title: "Recycled Platinum",
                                label: "SUSTAINABLE LUXURY",
                                desc: "Our 950 Platinum is refined from recycled industrial sources, offering the same brilliance with a significantly lower carbon footprint.",
                                img: "https://images.unsplash.com/photo-1536502829567-baf877a670b5?w=400&q=80"
                            }
                        ].map((m, i) => (
                            <div key={i} style={{ 
                                textAlign: 'center', 
                                maxWidth: '280px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <div className="zoom" style={{ 
                                    width: '180px', 
                                    height: '180px', 
                                    borderRadius: '50%', 
                                    overflow: 'hidden',
                                    border: '1px solid var(--gold)',
                                    marginBottom: '2rem',
                                    boxShadow: '0 10px 30px rgba(184, 134, 42, 0.15)',
                                    background: '#fff'
                                }}>
                                    <img src={m.img} alt={m.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <span style={{ 
                                    fontSize: '0.65rem', 
                                    letterSpacing: '0.2em', 
                                    color: 'var(--gold)', 
                                    fontWeight: 'bold',
                                    display: 'block',
                                    marginBottom: '0.5rem'
                                }}>
                                    {m.label}
                                </span>
                                <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{m.title}</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--body)', lineHeight: 1.6 }}>{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Call to Action ── */}
            <section id="mfg-cta" className="section news on-dark">
                <div className="wrap reveal in">
                    <div className="section-head is-center">
                        <span className="eyebrow center-line" style={{ color: 'var(--champagne)' }}>PARTNERSHIP</span>
                        <h2 style={{ color: '#fff' }}>Wholesale & Custom Inquiries</h2>
                        <p className="lede" style={{ color: 'rgba(255,255,255,0.7)' }}>
                            Looking to partner with a reliable manufacturer for your boutique or brand? 
                            We offer bespoke white-label manufacturing services.
                        </p>
                        <div style={{ marginTop: '2.5rem' }}>
                            <button className="btn btn-gold btn-lg">Contact Sales Team</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
