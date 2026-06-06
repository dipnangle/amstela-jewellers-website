import HeroSection from "./HeroSection";
import TrustBar from "./TrustBar";
import FeaturedCollections from "./FeaturedCollections";
import BrandIntro from "./BrandIntro";
import NewArrivals from "./NewArrivals";
import TestimonialsSection from "./TestimonialsSection";
import Newsletter from "../../components/shared/Newsletter";

export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <TrustBar />
            <FeaturedCollections />
            <BrandIntro />
            <NewArrivals />
            <TestimonialsSection />
            <Newsletter />
        </main>
    );
}
