import HeroSection from "./HeroSection";
import TrustBar from "./TrustBar";
import AsymmetricCategoryGrid from "./AsymmetricCategoryGrid";
import FeaturedCollections from "./FeaturedCollections";
import LegacySection from "./LegacySection";
import NewArrivals from "./NewArrivals";
import TestimonialsSection from "./TestimonialsSection";
import Newsletter from "../../components/shared/Newsletter";

export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <TrustBar />
            <AsymmetricCategoryGrid />
            <FeaturedCollections />
            <LegacySection />
            <NewArrivals />
            <TestimonialsSection />
            <Newsletter />
        </main>
    );
}
