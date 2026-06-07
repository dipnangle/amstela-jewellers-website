import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function LegacySection() {
    return (
        <section className="section bg-white overflow-hidden">
            <div className="wrap">
                <div
                    className="row center"
                    style={{ gap: "clamp(32px, 5vw, 80px)", flexWrap: "wrap" }}
                >
                    <div style={{ flex: "1 1 400px", maxWidth: 540 }}>
                        <span className="eyebrow">The Legacy</span>
                        <h2
                            style={{
                                fontSize: "clamp(32px, 5vw, 48px)",
                                marginTop: 24,
                                lineHeight: 1.2,
                            }}
                        >
                            Every diamond tells a story.
                            <br />
                            <em>We make sure it's yours.</em>
                        </h2>
                        <p
                            className="lede"
                            style={{ marginTop: 24, fontSize: 18 }}
                        >
                            At Amstela, we believe that jewellery is more than
                            just an accessory. It is a container for memories, a
                            symbol of commitment, and a piece of your personal
                            history that will be passed down for generations.
                        </p>
                        <div style={{ marginTop: 40 }}>
                            <Link to="/about" className="btn btn-navy">
                                Discover our heritage <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    <div
                        style={{
                            flex: "1 1 400px",
                            position: "relative",
                            padding: "40px",
                        }}
                    >
                        <div
                            style={{
                                aspectRatio: "1",
                                borderRadius: "50%",
                                overflow: "hidden",
                                border: "1px solid var(--border)",
                                background: "var(--offwhite)",
                            }}
                        >
                            <img
                                src="/home/manufacturing1.webp"
                                alt="Our Legacy"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                        {/* Floating diamond accent */}
                        <div
                            className="legacy-diamond-accent"
                            style={{
                                position: "absolute",
                                bottom: "-8%",
                                left: "-10%",
                                width: "52%",
                                zIndex: 2,
                                pointerEvents: "none",
                                userSelect: "none",
                            }}
                        >

                            {/* Diamond image — multiply blends white edges smoothly */}
                            <img
                                src="/home/floatingdiamond.webp"
                                alt="Diamond"
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    display: "block",
                                    zIndex: 1,
                                    mixBlendMode: "multiply",
                                    filter: "drop-shadow(0 6px 18px rgba(100,150,220,0.28))",
                                }}
                            />

                            {/* Option-5 reflection — rotateX flip + blur(4px) + mask fade (most realistic surface reflection) */}
                            <img
                                src="/home/floatingdiamond.webp"
                                alt=""
                                aria-hidden="true"
                                style={{
                                    position: "absolute",
                                    top: "100%",
                                    left: 0,
                                    width: "100%",
                                    display: "block",
                                    transform: "rotateX(180deg) translateY(15px)",
                                    filter: "blur(4px)",
                                    maskImage: "linear-gradient(transparent 50%, white 90%)",
                                    WebkitMaskImage: "linear-gradient(transparent 50%, white 90%)",
                                    mixBlendMode: "multiply",
                                    zIndex: 0,
                                }}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
