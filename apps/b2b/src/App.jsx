import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SiteConfigProvider } from "./context/SiteConfigContext";
import B2BHeader from "./components/layout/B2BHeader";
import B2BFooter from "./components/layout/B2BFooter";
import PageWrapper from "@jewel/shared/components/layout/PageWrapper.jsx";

import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import CapabilitiesPage from "./pages/capabilities";
import CollectionsPage from "./pages/collections";
import CertificationsPage from "./pages/certifications";
import CataloguePage from "./pages/catalogue";
import ContactPage from "./pages/contact";

function AppRoutes() {
    return (
        <PageWrapper>
            <B2BHeader />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/capabilities" element={<CapabilitiesPage />} />
                <Route path="/collections" element={<CollectionsPage />} />
                <Route
                    path="/certifications"
                    element={<CertificationsPage />}
                />
                <Route path="/catalogue" element={<CataloguePage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <B2BFooter />
        </PageWrapper>
    );
}

export default function App() {
    const [booted, setBooted] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setBooted(true), 1200);
        return () => clearTimeout(t);
    }, []);

    return (
        <SiteConfigProvider>
            <div className={`boot ${booted ? "hidden-boot" : ""}`}>
                <div className="mk">AMSTELA</div>
                <div className="sub">Trade Portal</div>
                <div className="ld" />
            </div>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </SiteConfigProvider>
    );
}
