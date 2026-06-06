import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "lucide-react";

const STORES = [
    {
        id: 1,
        name: "Amstela — Surat Flagship",
        address: "42, Diamond Nagar, Ring Road, Surat, Gujarat — 395 004",
        phone: "+91 98XXX XXXXX",
        hours: "Mon–Sat: 10 AM – 7 PM · Sun: 11 AM – 5 PM",
        badge: "Flagship",
        image: "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?w=1000&q=80&fit=crop",
    },
    {
        id: 2,
        name: "Amstela — Mumbai Boutique",
        address:
            "B-10, Zaveri Bazaar, Kalbadevi, Mumbai, Maharashtra — 400 002",
        phone: "+91 98XXX XXXXX",
        hours: "Mon–Sat: 11 AM – 8 PM · Sun: Closed",
        badge: "Retail",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=1000&q=80&fit=crop",
    },
];

export default function StoresPage() {
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
                        <span>Stores</span>
                    </div>
                    <h1>Our Boutiques</h1>
                    <p className="lede">
                        Visit us for a private showing, custom consultation, or
                        simply to experience Amstela in person.
                    </p>
                </div>
            </div>

            <section className="section wrap">
                <div className="collections-stack">
                    {STORES.map((store, i) => (
                        <div
                            key={store.id}
                            className={`coll ${i % 2 !== 0 ? "flip" : ""}`}
                        >
                            <div className="coll-media zoom">
                                <img
                                    src={store.image}
                                    alt={store.name}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                            <div className="coll-body">
                                {store.badge && (
                                    <span
                                        className="prod-badge"
                                        style={{
                                            position: "static",
                                            display: "inline-block",
                                            marginBottom: 14,
                                        }}
                                    >
                                        {store.badge}
                                    </span>
                                )}
                                <h3 style={{ marginTop: 0 }}>{store.name}</h3>

                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 12,
                                        marginTop: 20,
                                        marginBottom: 28,
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            gap: 10,
                                            alignItems: "flex-start",
                                        }}
                                    >
                                        <MapPin
                                            size={16}
                                            color="var(--gold)"
                                            style={{
                                                flexShrink: 0,
                                                marginTop: 2,
                                            }}
                                        />
                                        <span
                                            style={{
                                                fontSize: 14,
                                                color: "var(--body)",
                                            }}
                                        >
                                            {store.address}
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            gap: 10,
                                            alignItems: "center",
                                        }}
                                    >
                                        <Phone size={16} color="var(--gold)" />
                                        <a
                                            href={`tel:${store.phone}`}
                                            style={{
                                                fontSize: 14,
                                                color: "var(--body)",
                                            }}
                                        >
                                            {store.phone}
                                        </a>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            gap: 10,
                                            alignItems: "center",
                                        }}
                                    >
                                        <Clock size={16} color="var(--gold)" />
                                        <span
                                            style={{
                                                fontSize: 14,
                                                color: "var(--body)",
                                            }}
                                        >
                                            {store.hours}
                                        </span>
                                    </div>
                                </div>

                                <Link to="/contact" className="link-gold">
                                    Book a visit
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
