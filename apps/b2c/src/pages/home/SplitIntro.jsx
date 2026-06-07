import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function SplitIntro() {
    return (
        <section className="section bg-offwhite">
            <div className="wrap">
                <div
                    className="row center"
                    style={{ gap: 60, flexWrap: "wrap" }}
                >
                    <div style={{ flex: "1 1 400px", maxWidth: 600 }}>
                        <span className="eyebrow">The Art of Fine Jewelry</span>
                        <h2
                            style={{
                                fontSize: "clamp(32px, 5vw, 54px)",
                                marginTop: 24,
                            }}
                        >
                            Designing for your
                            <br />
                            <em>Legacy</em>
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
                                Discover our process <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    <div style={{ flex: "1 1 400px", position: "relative" }}>
                        <div
                            className="ph"
                            style={{
                                aspectRatio: "1",
                                borderRadius: "50%",
                                overflow: "hidden",
                            }}
                        >
                            <img
                                src="/home/manufacturing1.webp"
                                alt="Craft"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                        <div
                            className="ph"
                            style={{
                                position: "absolute",
                                bottom: "-20px",
                                left: "-20px",
                                width: "50%",
                                aspectRatio: "1",
                                border: "4px solid #fff",
                                boxShadow: "var(--shadow-lg)",
                            }}
                        >
                            <img
                                src="/home/jewellery1.webp"
                                alt="Jewel"
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
