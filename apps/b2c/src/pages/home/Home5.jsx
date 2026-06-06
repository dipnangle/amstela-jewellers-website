import HeritageTimeline from "./HeritageTimeline";
import FeaturedCollections from "./FeaturedCollections";
import BrandIntro from "./BrandIntro";
import NewArrivals from "./NewArrivals";
import Newsletter from "../../components/shared/Newsletter";
import { Link } from "react-router-dom";

function HeritageHero() {
    return (
        <section className="hero bg-velvet">
            <div className="hero-grid">
                <div className="hero-copy reveal in" style={{ zIndex: 10 }}>
                    <span className="eyebrow hero-eyebrow">Royal Heritage</span>
                    <h1>
                        Heirloom
                        <br />
                        <em>Treasures</em>
                    </h1>
                    <p className="sub">
                        22 Karat gold, uncut diamonds, and century-old Kundan
                        craftsmanship.
                    </p>
                    <div className="hero-cta">
                        <Link
                            to="/collections/heritage-gold"
                            className="btn btn-champagne btn-lg"
                        >
                            Discover Heritage
                        </Link>
                    </div>
                </div>
                <div
                    className="hero-figure reveal in"
                    style={{ transitionDelay: "100ms" }}
                >
                    <img
                        src="/home/bride1.webp"
                        alt="Bridal Heritage"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                    <span className="tag">Vivaha Bridal Collection</span>
                </div>
            </div>
        </section>
    );
}

export default function Home5Page() {
    return (
        <main>
            <HeritageHero />
            <HeritageTimeline />
            <FeaturedCollections />
            <BrandIntro />
            <NewArrivals />
            <Newsletter />
        </main>
    );
}
