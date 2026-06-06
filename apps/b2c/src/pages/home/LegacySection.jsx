import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function LegacySection() {
    return (
        <section className="section bg-white overflow-hidden">
            <div className="wrap">
                <div
                    className="row center"
                    style={{ gap: 80, flexWrap: "wrap" }}
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
                            <Link to="/story" className="btn btn-navy">
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
                        <div
                            style={{
                                position: "absolute",
                                bottom: "0",
                                left: "0",
                                width: "55%",
                                aspectRatio: "1",
                                border: "12px solid #fff",
                                boxShadow: "var(--shadow-lg)",
                                zIndex: 2,
                            }}
                        >
                            <img
                                src="/home/jewellery1.webp"
                                alt="Jewel Detail"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
