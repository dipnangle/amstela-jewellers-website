import React, { useEffect } from "react";
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
    useEffect(() => {
        window.scrollTo(0, 0);
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
        <main className="page manufacturing-page">
            {/* ── Immersive Overlay Hero ── */}
            <section className="hero-split" style={{ 
                display: 'flex', 
                minHeight: '100vh', 
                width: '100%', 
                background: '#08162f', 
                overflow: 'hidden',
                position: 'relative'
            }}>
                {/* Background Video (70% width, pushed to right) */}
                <div className="split-right" style={{ 
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: '70%', 
                    overflow: 'hidden'
                }}>
                    <video 
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
                        <div style={{ 
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
                            justifyContent: 'center',
                            gap: '8rem',
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
                                    transition: opacity 0.3s;
                                }
                                .tech-label:hover {
                                    opacity: 1;
                                }
                                .tech-dot {
                                    width: 4px;
                                    height: 4px;
                                    background: var(--gold);
                                    border-radius: 50%;
                                    animation: pulse-gold 2s infinite;
                                }
                            `}} />

                            <div className="tech-label">
                                <div className="tech-dot" style={{ animationDelay: '0s' }} />
                                LASER PRECISION
                            </div>
                            <div className="tech-label">
                                <div className="tech-dot" style={{ animationDelay: '0.5s' }} />
                                CAD ENGINEERED
                            </div>
                            <div className="tech-label">
                                <div className="tech-dot" style={{ animationDelay: '1s' }} />
                                MICRO SETTING
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
                <div className="split-left" style={{ 
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
                            <button className="btn btn-gold">Workshop Tour</button>
                            <button className="btn btn-outline-light">Our Standards</button>
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
            <section className="section bg-white text-center" style={{ 
                position: 'relative',
                backgroundImage: `linear-gradient(rgba(229, 231, 235, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(229, 231, 235, 0.3) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
            }}>
                <div className="wrap">
                    <div className="section-head is-center reveal in">
                        <span className="eyebrow center-line">THE PILLARS</span>
                        <h2>The Art of the Extraordinary</h2>
                        <p className="lede">
                            Our manufacturing process isn't just about machines—it's about the relentless pursuit of perfection 
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
            <section className="section bg-offwhite" style={{ overflow: 'hidden', paddingBottom: '8rem' }}>
                <div className="wrap">
                    <div className="section-head is-center reveal in">
                        <span className="eyebrow center-line">OUR PROCESS</span>
                        <h2>Seed to Shine</h2>
                        <p className="lede">Follow the journey of an Amstela masterpiece through our specialized assembly line.</p>
                    </div>
                </div>

                <div className="reveal in" style={{ marginTop: '5rem', position: 'relative' }}>
                    {/* The "Conveyor" Line */}
                    <div style={{ 
                        position: 'absolute', 
                        top: '50px', 
                        left: 0, 
                        right: 0, 
                        height: '1px', 
                        background: 'linear-gradient(90deg, transparent, var(--border) 10%, var(--border) 90%, transparent)',
                        zIndex: 1
                    }} />

                    <div className="factory-line" style={{ 
                        display: 'flex', 
                        gap: '40px', 
                        overflowX: 'auto', 
                        padding: '0 10vw 40px',
                        scrollSnapType: 'x mandatory',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}>
                        {steps.map((s, i) => (
                            <div key={i} style={{ 
                                flex: '0 0 320px', 
                                scrollSnapAlign: 'center',
                                position: 'relative',
                                zIndex: 2
                            }}>
                                {/* Connection Node */}
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
                                    position: 'relative'
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
                                        {i + 1}
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
                        ))}
                    </div>
                    
                    {/* Scroll Hint */}
                    <div style={{ textAlign: 'center', marginTop: '2rem', opacity: 0.4, fontSize: '0.7rem', letterSpacing: '0.1em' }}>
                        DRAG TO EXPLORE THE LINE
                    </div>
                </div>
            </section>

            {/* ── Macro-Detail Gallery ── */}
            <section className="section bg-white" style={{ position: 'relative' }}>
                <div className="wrap">
                    <div className="section-head is-center reveal in">
                        <span className="eyebrow center-line">PRECISION UNDER LENS</span>
                        <h2>Uncompromising Detail</h2>
                        <p className="lede">We believe that true luxury is found in the details that remain invisible to the naked eye.</p>
                    </div>

                    <div className="grid-products reveal in" style={{ marginTop: '5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
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
            <section className="section bg-offwhite" style={{ borderTop: '1px solid var(--border)' }}>
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
            <section className="section news on-dark">
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
