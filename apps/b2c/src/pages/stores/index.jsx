import { useState, useEffect } from "react";
import { useSEO } from "../../hooks/useSEO";
import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "lucide-react";
import { useSiteConfig } from "../../context/SiteConfigContext";

const INTERVAL = 4000;

function StoreCarousel({ images, name }) {
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (images.length < 2) return;
        const timer = setInterval(() => {
            setActive(prev => (prev + 1) % images.length);
        }, INTERVAL);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="store-carousel">
            {images.map((src, i) => (
                <img
                    key={src}
                    src={src}
                    alt={`${name} — view ${i + 1}`}
                    className={`store-carousel-slide${i === active ? " active" : ""}`}
                />
            ))}

            {images.length > 1 && (
                <div className="store-carousel-bars">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            aria-label={`View ${i + 1}`}
                            className={`store-carousel-bar${i === active ? " active" : i < active ? " done" : ""}`}
                            onClick={() => setActive(i)}
                        >
                            {i === active && (
                                <span
                                    key={active}
                                    className="store-carousel-bar-fill"
                                    style={{ animationDuration: `${INTERVAL}ms` }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

const STORES_STATIC = [
    {
        id: 1,
        name: "Amstela — Surat Flagship",
        address: "42, Diamond Nagar, Ring Road, Surat, Gujarat — 395 004",
        hours: "Mon–Sat: 10 AM – 7 PM · Sun: 11 AM – 5 PM",
        badge: "Flagship",
        images: ["/stores/gujratstore.webp"],
        useConfig: false,
    },
    {
        id: 2,
        name: "Amstela — Mumbai Office",
        address: null,
        hours: "Mon–Sat: 10 AM – 7 PM · Sun: Closed",
        badge: "Head Office",
        images: ["/stores/store.webp", "/stores/insidestore.webp"],
        useConfig: true,
    },
];

export default function StoresPage() {
    useSEO({ title: "Our Stores", description: "Visit Amstela Jewels showrooms. Find our locations, timings, and contact details." });
    const { config } = useSiteConfig();

    const STORES = STORES_STATIC.map(s =>
        s.useConfig
            ? { ...s, address: config?.contact?.address, phone: config?.contact?.phone }
            : { ...s, phone: config?.contact?.phone }
    );

    return (
        <main>
            <div className="page-head bg-velvet">
                <div className="bg-velvet" style={{ position: "absolute", inset: 0 }} />
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
                        <div key={store.id} className={`coll ${i % 2 !== 0 ? "flip" : ""}`}>
                            <div className="coll-media" style={{ aspectRatio: '16/10' }}>
                                <StoreCarousel images={store.images} name={store.name} />
                            </div>
                            <div className="coll-body">
                                {store.badge && (
                                    <span
                                        className="prod-badge"
                                        style={{ position: "static", display: "inline-block", marginBottom: 14 }}
                                    >
                                        {store.badge}
                                    </span>
                                )}
                                <h3 style={{ marginTop: 0 }}>{store.name}</h3>

                                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 20, marginBottom: 28 }}>
                                    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                                        <MapPin size={16} color="var(--gold)" style={{ flexShrink: 0, marginTop: 2 }} />
                                        <span style={{ fontSize: 14, color: "var(--body)" }}>{store.address}</span>
                                    </div>
                                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                                        <Phone size={16} color="var(--gold)" />
                                        <a href={`tel:${store.phone}`} style={{ fontSize: 14, color: "var(--body)" }}>
                                            {store.phone}
                                        </a>
                                    </div>
                                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                                        <Clock size={16} color="var(--gold)" />
                                        <span style={{ fontSize: 14, color: "var(--body)" }}>{store.hours}</span>
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
