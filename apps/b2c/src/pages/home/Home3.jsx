import SplitIntro from "./SplitIntro";
import FeaturedCollections from "./FeaturedCollections";
import ProductRail from "./ProductRail";
import TestimonialsSection from "./TestimonialsSection";
import Newsletter from "../../components/shared/Newsletter";
import { Link } from "react-router-dom";

function EditorialHero() {
    return (
        <section className="hero v-split">
            <div className="hero-grid">
                <div className="hero-copy reveal in">
                    <span className="eyebrow hero-eyebrow">
                        Editorial Collection
                    </span>
                    <h1>
                        Modern
                        <br />
                        <em>Masterpieces</em>
                    </h1>
                    <p className="sub">
                        Clean lines. Conflict-free stones. Designed for the
                        contemporary aesthetic.
                    </p>
                    <div className="hero-cta">
                        <Link to="/collections" className="btn btn-navy btn-lg">
                            Shop The Edit
                        </Link>
                        <Link to="/story" className="btn btn-ghost btn-lg">
                            Read Our Story
                        </Link>
                    </div>
                </div>
                <div className="hero-figure">
                    <img
                        src="/home/portrait1.webp"
                        alt="Editorial"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

export default function Home3Page() {
    return (
        <main>
            <EditorialHero />
            <ProductRail />
            <SplitIntro />
            <FeaturedCollections />
            <TestimonialsSection />
            <Newsletter />
        </main>
    );
}
