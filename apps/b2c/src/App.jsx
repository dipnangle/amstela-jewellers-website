import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SiteConfigProvider } from "./context/SiteConfigContext";
import { ShopProvider } from "./context/ShopContext";
import B2CHeader from "./components/layout/B2CHeader";
import B2CFooter from "./components/layout/B2CFooter";
import PageWrapper from "@jewel/shared/components/layout/PageWrapper.jsx";
import WhatsAppFloat from "./components/shared/WhatsAppFloat";
import MiniBag from "./components/shared/MiniBag";
import EventFloatingWidget from "./components/shared/EventFloatingWidget";

const HomePage = lazy(() => import("./pages/home"));
const Home2Page = lazy(() => import("./pages/home/Home2"));
const Home3Page = lazy(() => import("./pages/home/Home3"));
const Home4Page = lazy(() => import("./pages/home/Home4"));
const Home5Page = lazy(() => import("./pages/home/Home5"));
const CollectionsPage = lazy(() => import("./pages/collections"));
const ProductPage = lazy(() => import("./pages/product"));
const AboutPage = lazy(() => import("./pages/about"));
const ManufacturingPage = lazy(() => import("./pages/manufacturing"));
const StoresPage = lazy(() => import("./pages/stores"));
const ContactPage = lazy(() => import("./pages/contact"));
const WishlistPage = lazy(() => import("./pages/wishlist"));
const NotFoundPage = lazy(() => import("./pages/not-found"));

function PageLoader() {
    return (
        <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="ld" />
        </div>
    );
}

function ScrollRoutes() {
    return (
        <PageWrapper>
            <B2CHeader />
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home2" element={<Home2Page />} />
                    <Route path="/home3" element={<Home3Page />} />
                    <Route path="/home4" element={<Home4Page />} />
                    <Route path="/home5" element={<Home5Page />} />
                    <Route path="/collections" element={<CollectionsPage />} />
                    <Route path="/collections/:slug" element={<CollectionsPage />} />
                    <Route path="/product/:slug" element={<ProductPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/manufacturing" element={<ManufacturingPage />} />
                    <Route path="/stores" element={<StoresPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/wishlist" element={<WishlistPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
            <B2CFooter />
            <MiniBag />
            <div className="floating-bar">
                <EventFloatingWidget />
                <WhatsAppFloat />
            </div>
        </PageWrapper>
    );
}

export default function App() {
    const [booted, setBooted] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setBooted(true), 600);
        return () => clearTimeout(t);
    }, []);

    return (
        <SiteConfigProvider>
            <ShopProvider>
                <div className={`boot ${booted ? "hidden-boot" : ""}`}>
                    <div className="mk">AMSTELA</div>
                    <div className="sub">Fine Jewellery</div>
                    <div className="ld" />
                </div>
                <BrowserRouter>
                    <ScrollRoutes />
                </BrowserRouter>
            </ShopProvider>
        </SiteConfigProvider>
    );
}
