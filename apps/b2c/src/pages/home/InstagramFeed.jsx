import { Instagram } from "lucide-react";

export default function InstagramFeed() {
    return (
        <section className="section">
            <div className="wrap">
                <div
                    className="section-head is-center"
                    style={{ marginBottom: 50 }}
                >
                    <span className="eyebrow center-line">Social Journal</span>
                    <h2>@AmstelaJewels</h2>
                </div>
            </div>

            <div className="ig-grid">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="ig">
                        <div
                            className="ph"
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "#f5f3f0",
                            }}
                        >
                            <img
                                src={`https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80&fit=crop&random=${i}`}
                                alt="Instagram"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                        <div className="igico">
                            <Instagram size={24} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
