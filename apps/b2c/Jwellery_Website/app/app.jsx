/* ============================================================
   VAIRA — App shell: router, layout, tweaks, mount
   ============================================================ */
const { HashRouter, Routes, Route, useLocation: useLoc } = ReactRouterDOM;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/ {
    heroDirection: "cinematic",
    accent: "#C9A227",
    headingFont: "'Playfair Display', Georgia, serif",
    corner: "sharp",
}; /*EDITMODE-END*/

const DARK_HEADER = [
    "/",
    "/collections",
    "/about",
    "/manufacturing",
    "/contact",
];

function ScrollTop() {
    const loc = useLoc();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [loc.pathname]);
    return null;
}

function Layout({ t, setTweak }) {
    const loc = useLoc();
    const darkHeader = DARK_HEADER.includes(loc.pathname);

    React.useEffect(() => {
        const r = document.documentElement;
        r.style.setProperty("--gold", t.accent);
        // derive a lighter champagne from accent choice for harmony
        const champ =
            t.accent === "#C9A227"
                ? "#D4B06A"
                : t.accent === "#B76E79"
                  ? "#E8C0AE"
                  : "#E2C98A";
        r.style.setProperty("--champagne", champ);
        r.style.setProperty("--serif", t.headingFont);
    }, [t.accent, t.headingFont]);

    React.useEffect(() => {
        document.body.classList.toggle("soft-corners", t.corner === "soft");
    }, [t.corner]);

    return (
        <React.Fragment>
            <ScrollTop />
            <Navbar darkHeader={darkHeader} />
            <Routes>
                <Route
                    path="/"
                    element={<Home heroVariant={t.heroDirection} />}
                />
                <Route path="/collections" element={<Listing />} />
                <Route path="/product/:id" element={<Pdp />} />
                <Route path="/about" element={<About />} />
                <Route path="/manufacturing" element={<Manufacturing />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                    path="*"
                    element={<Home heroVariant={t.heroDirection} />}
                />
            </Routes>
            <Footer />
            <MiniCart />
            <SearchOverlay />
            <Toasts />

            <TweaksPanel>
                <TweakSection label="Hero Direction" />
                <TweakRadio
                    label="Layout"
                    value={t.heroDirection}
                    options={["cinematic", "editorial", "split"]}
                    onChange={(v) => setTweak("heroDirection", v)}
                />
                <TweakSection label="Brand Accent" />
                <TweakColor
                    label="Gold tone"
                    value={t.accent}
                    options={["#C9A227", "#B8860B", "#B76E79", "#9C7A3C"]}
                    onChange={(v) => setTweak("accent", v)}
                />
                <TweakSection label="Typography" />
                <TweakSelect
                    label="Heading font"
                    value={t.headingFont}
                    options={[
                        {
                            label: "Playfair Display",
                            value: "'Playfair Display', Georgia, serif",
                        },
                        {
                            label: "Cormorant Garamond",
                            value: "'Cormorant Garamond', Georgia, serif",
                        },
                        {
                            label: "Bodoni Moda",
                            value: "'Bodoni Moda', Georgia, serif",
                        },
                    ]}
                    onChange={(v) => setTweak("headingFont", v)}
                />
                <TweakSection label="Detailing" />
                <TweakRadio
                    label="Corners"
                    value={t.corner}
                    options={["sharp", "soft"]}
                    onChange={(v) => setTweak("corner", v)}
                />
            </TweaksPanel>
        </React.Fragment>
    );
}

function App() {
    const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
    return (
        <ShopProvider>
            <HashRouter>
                <Layout t={t} setTweak={setTweak} />
            </HashRouter>
        </ShopProvider>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
