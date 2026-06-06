import HeroCarousel from "./HeroCarousel";
import TrustBar from "./TrustBar";
import CategoryGrid from "./CategoryGrid";
import BrandIntro from "./BrandIntro";
import NewArrivals from "./NewArrivals";
import InstagramFeed from "./InstagramFeed";
import Newsletter from "../../components/shared/Newsletter";

export default function Home2Page() {
    return (
        <main>
            <HeroCarousel />
            <TrustBar />
            <CategoryGrid />
            <BrandIntro />
            <NewArrivals />
            <InstagramFeed />
            <Newsletter />
        </main>
    );
}
