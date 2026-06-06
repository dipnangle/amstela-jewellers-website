/* ============================================================
   VAIRA — Homepage
   ============================================================ */
function Hero({ variant = "cinematic" }) {
    const nav = useNav();
    if (variant === "editorial") {
        return (
            <section className="hero v-center bg-marble bg-noise">
                <div className="hero-bg bg-marble bg-noise" />
                <div className="hero-grid">
                    <div className="hero-copy reveal in">
                        <span className="eyebrow hero-eyebrow">
                            Crafted for Generations
                        </span>
                        <h1>
                            Timeless Jewellery,
                            <br />
                            <em>Exceptional</em> Craftsmanship
                        </h1>
                        <p className="sub">
                            Discover exquisite diamond and gold jewellery,
                            designed by master artisans to celebrate every
                            milestone.
                        </p>
                        <div className="hero-cta">
                            <Btn
                                variant="gold"
                                lg
                                onClick={() => nav("/collections")}
                            >
                                Shop Collection <IcoArrow size={17} />
                            </Btn>
                            <Btn
                                variant="outline-light"
                                lg
                                onClick={() => nav("/contact")}
                            >
                                Book Consultation
                            </Btn>
                        </div>
                        <div className="hero-meta">
                            <div className="m">
                                <b>1962</b>
                                <span>Established</span>
                            </div>
                            <div className="m">
                                <b>GIA</b>
                                <span>Certified</span>
                            </div>
                            <div className="m">
                                <b>40+</b>
                                <span>Countries</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scrolldown">
                    <span>Scroll</span>
                    <span className="line" />
                </div>
            </section>
        );
    }
    if (variant === "split") {
        return (
            <section className="hero v-split">
                <div className="hero-grid">
                    <div className="hero-copy reveal in">
                        <span className="eyebrow hero-eyebrow">
                            Crafted for Generations
                        </span>
                        <h1>
                            Timeless Jewellery.
                            <br />
                            <em>Exceptional</em> Craftsmanship.
                        </h1>
                        <p className="sub">
                            Exquisite diamond and gold jewellery, designed to
                            celebrate every milestone of a life well lived.
                        </p>
                        <div className="hero-cta">
                            <Btn
                                variant="gold"
                                lg
                                onClick={() => nav("/collections")}
                            >
                                Shop Collection <IcoArrow size={17} />
                            </Btn>
                            <Btn
                                variant="ghost"
                                lg
                                onClick={() => nav("/contact")}
                            >
                                Book Consultation
                            </Btn>
                        </div>
                        <div className="hero-meta">
                            <div className="m">
                                <b>60+</b>
                                <span>Years of mastery</span>
                            </div>
                            <div className="m">
                                <b>100%</b>
                                <span>Certified diamonds</span>
                            </div>
                            <div className="m">
                                <b>40+</b>
                                <span>Export markets</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero-figure">
                        <Placeholder
                            glyph="necklace"
                            tone="champ"
                            label="Hero Photography"
                        />
                    </div>
                </div>
            </section>
        );
    }
    /* cinematic (default) */
    return (
        <section className="hero bg-velvet bg-noise">
            <div className="hero-bg bg-velvet bg-noise" />
            <div className="hero-grid">
                <div className="hero-copy reveal in">
                    <span className="eyebrow hero-eyebrow">
                        Crafted for Generations
                    </span>
                    <h1>
                        Timeless Jewellery.
                        <br />
                        <em>Exceptional</em>
                        <br />
                        Craftsmanship.
                    </h1>
                    <p className="sub">
                        Discover exquisite diamond and gold jewellery, designed
                        by master artisans to celebrate every milestone.
                    </p>
                    <div className="hero-cta">
                        <Btn
                            variant="gold"
                            lg
                            onClick={() => nav("/collections")}
                        >
                            Shop Collection <IcoArrow size={17} />
                        </Btn>
                        <Btn
                            variant="outline-light"
                            lg
                            onClick={() => nav("/contact")}
                        >
                            Book Consultation
                        </Btn>
                    </div>
                    <div className="hero-meta">
                        <div className="m">
                            <b>60+</b>
                            <span>Years of mastery</span>
                        </div>
                        <div className="m">
                            <b>GIA</b>
                            <span>Certified diamonds</span>
                        </div>
                        <div className="m">
                            <b>40+</b>
                            <span>Export markets</span>
                        </div>
                    </div>
                </div>
                <div
                    className="hero-figure reveal in"
                    style={{ transitionDelay: "120ms" }}
                >
                    <Placeholder
                        glyph="necklace"
                        tone="dark"
                        label="Hero Photography"
                    />
                    <span className="tag">The Solitaire Edit</span>
                </div>
            </div>
            <div className="scrolldown">
                <span>Scroll</span>
                <span className="line" />
            </div>
        </section>
    );
}

const TRUST = [
    {
        Ic: IcoCertified,
        t: "Certified Diamonds",
        s: "GIA & IGI graded, conflict-free",
    },
    {
        Ic: IcoHallmark,
        t: "BIS Hallmarked Gold",
        s: "Guaranteed purity, always",
    },
    {
        Ic: IcoShip,
        t: "Worldwide Shipping",
        s: "Fully insured to 40+ countries",
    },
    { Ic: IcoSupport, t: "Lifetime Support", s: "Cleaning, resizing & care" },
];

function TrustBar() {
    return (
        <section className="trust">
            <div className="trust-grid">
                {TRUST.map(({ Ic, t, s }, i) => (
                    <div className="trust-cell reveal" style={delay(i)} key={t}>
                        <span className="ic">
                            <Ic size={34} />
                        </span>
                        <div>
                            <b>{t}</b>
                            <span>{s}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function CategorySection() {
    const nav = useNav();
    return (
        <section className="section wrap">
            <SectionHead
                center
                eyebrow="Explore the Maison"
                title="Shop by Category"
                lede="From everyday elegance to ceremonial grandeur — find the pieces that mark your moments."
            />
            <div className="cat-grid" style={{ marginTop: 56 }}>
                {CATEGORIES.map((c, i) => (
                    <a
                        className="cat reveal"
                        style={delay(i % 3)}
                        key={c.name}
                        onClick={() => nav("/collections")}
                    >
                        <Placeholder
                            glyph={c.glyph}
                            tone={["t1", "t2", "t3"][i % 3]}
                            className="zoom"
                        />
                        <div className="cat-body">
                            <div>
                                <h3>{c.name}</h3>
                                <span>
                                    {c.count} pieces · {c.sub}
                                </span>
                            </div>
                            <span className="pill">
                                <IcoArrow size={18} />
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

function CollectionsSection() {
    const nav = useNav();
    return (
        <section className="section" style={{ background: "var(--offwhite)" }}>
            <div className="wrap">
                <SectionHead
                    center
                    eyebrow="Curated Collections"
                    title="Defined by Design"
                    lede="Four signature collections, each a distinct expression of the VAIRA philosophy."
                />
                <div className="collections-stack" style={{ marginTop: 64 }}>
                    {COLLECTIONS.map((c, i) => (
                        <article
                            className={`coll reveal ${i % 2 ? "flip" : ""}`}
                            key={c.name}
                        >
                            <div className="coll-media zoom">
                                <Placeholder
                                    glyph={c.glyph}
                                    tone={c.tone}
                                    label={c.name}
                                />
                            </div>
                            <div className="coll-body">
                                <span className="idx">
                                    {c.idx} — Collection
                                </span>
                                <h3>{c.name}</h3>
                                <p>{c.desc}</p>
                                <a
                                    className="link-gold"
                                    onClick={() => nav("/collections")}
                                >
                                    Discover the collection{" "}
                                    <IcoArrow size={16} />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

function BestSellers() {
    const rail = React.useRef();
    const scroll = (dir) => {
        if (rail.current)
            rail.current.scrollBy({ left: dir * 320, behavior: "smooth" });
    };
    const items = PRODUCTS.filter(
        (p) =>
            p.badge === "Bestseller" ||
            ["2", "4", "6", "11", "18"].includes(p.id),
    ).slice(0, 8);
    return (
        <section className="section wrap">
            <div
                className="between"
                style={{ alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}
            >
                <SectionHead
                    eyebrow="Most Coveted"
                    title="Best Sellers"
                    lede="The pieces our clients return to, again and again."
                />
                <div style={{ display: "flex", gap: 10 }}>
                    <button
                        className="pill"
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: "50%",
                            border: "1px solid var(--border)",
                            color: "var(--navy)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        onClick={() => scroll(-1)}
                        aria-label="Previous"
                    >
                        <IcoArrowL size={18} />
                    </button>
                    <button
                        className="pill"
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: "50%",
                            border: "1px solid var(--border)",
                            color: "var(--navy)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        onClick={() => scroll(1)}
                        aria-label="Next"
                    >
                        <IcoArrow size={18} />
                    </button>
                </div>
            </div>
            <div
                className="prod-rail reveal"
                style={{ marginTop: 44 }}
                ref={rail}
            >
                {items.map((p) => (
                    <ProductCard key={p.id} p={p} />
                ))}
            </div>
        </section>
    );
}

function CraftSection() {
    const nav = useNav();
    return (
        <section className="craft section">
            <div
                className="bg-velvet"
                style={{ position: "absolute", inset: 0 }}
            />
            <div className="wrap">
                <div className="craft-grid">
                    <div className="craft-media reveal zoom">
                        <Placeholder
                            glyph="diamond"
                            tone="dark"
                            label="Atelier · Diamond Setting"
                        />
                    </div>
                    <div
                        className="craft-copy reveal"
                        style={{ transitionDelay: "100ms" }}
                    >
                        <span className="eyebrow">
                            Our Legacy of Craftsmanship
                        </span>
                        <h2
                            style={{
                                color: "#fff",
                                fontSize: "clamp(30px,4vw,48px)",
                                marginTop: 18,
                            }}
                        >
                            Where the Hand Still Leads the Machine
                        </h2>
                        <p
                            className="lede"
                            style={{
                                color: "rgba(255,255,255,.74)",
                                marginTop: 20,
                            }}
                        >
                            Every VAIRA piece passes through the hands of master
                            setters, polishers and quality artisans — a process
                            refined across three generations. We pair
                            traditional Indian goldsmithing with precision
                            diamond grading to create jewellery worthy of
                            inheritance.
                        </p>
                        <div className="craft-stats">
                            <div className="m">
                                <b>60+</b>
                                <span>Years of mastery</span>
                            </div>
                            <div className="m">
                                <b>180</b>
                                <span>Master artisans</span>
                            </div>
                            <div className="m">
                                <b>100%</b>
                                <span>Hand-finished</span>
                            </div>
                        </div>
                        <div style={{ marginTop: 38 }}>
                            <Btn variant="gold" onClick={() => nav("/about")}>
                                Our Story <IcoArrow size={16} />
                            </Btn>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function BridalBanner() {
    const nav = useNav();
    return (
        <section className="bridal">
            <Placeholder glyph="set" tone="dark" label="Bridal Editorial" />
            <div className="bridal-scrim" />
            <div className="wrap" style={{ position: "relative", zIndex: 3 }}>
                <div className="bridal-inner reveal">
                    <span className="eyebrow">
                        The Vivaha Bridal Collection
                    </span>
                    <h2
                        style={{
                            color: "#fff",
                            fontSize: "clamp(32px,4.4vw,54px)",
                            marginTop: 18,
                        }}
                    >
                        For the Once in a Lifetime
                    </h2>
                    <p
                        className="lede"
                        style={{
                            color: "rgba(255,255,255,.8)",
                            marginTop: 18,
                            marginBottom: 34,
                        }}
                    >
                        Ceremonial sets crafted for the most important day — and
                        the heirlooms that follow. Begin with a private bridal
                        appointment.
                    </p>
                    <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                        <Btn
                            variant="gold"
                            lg
                            onClick={() => nav("/collections")}
                        >
                            Explore Bridal Collection <IcoArrow size={16} />
                        </Btn>
                        <Btn
                            variant="outline-light"
                            lg
                            onClick={() => nav("/contact")}
                        >
                            Book Appointment
                        </Btn>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Testimonials() {
    return (
        <section className="section wrap">
            <SectionHead
                center
                eyebrow="In Their Words"
                title="Treasured by Thousands"
                lede="From bridal clients to global trade partners — the trust we are most proud of."
            />
            <div className="tst-grid" style={{ marginTop: 56 }}>
                {TESTIMONIALS.map((t, i) => (
                    <div className="tst reveal" style={delay(i)} key={t.name}>
                        <Stars n={5} size={16} />
                        <p className="q">“{t.q}”</p>
                        <div className="who">
                            <span className="av">{t.initial}</span>
                            <div>
                                <b>{t.name}</b>
                                <span>{t.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function InstaSection() {
    return (
        <section className="section" style={{ paddingBottom: 0 }}>
            <div className="wrap">
                <SectionHead
                    center
                    eyebrow="@vaira.jewellery"
                    title="Follow the Maison"
                    lede="Styled by our community across the world."
                />
            </div>
            <div
                className="ig-grid"
                style={{
                    marginTop: 48,
                    maxWidth: 1600,
                    margin: "48px auto 0",
                    padding: "0 10px",
                }}
            >
                {[
                    "ring",
                    "necklace",
                    "earring",
                    "bracelet",
                    "diamond",
                    "pendant",
                ].map((g, i) => (
                    <a className="ig reveal" style={delay(i % 6, 60)} key={i}>
                        <Placeholder
                            glyph={g}
                            tone={["t1", "t2", "t3"][i % 3]}
                            className="zoom"
                        />
                        <span className="igico">
                            <IcoInsta size={28} />
                        </span>
                    </a>
                ))}
            </div>
        </section>
    );
}

function Home({ heroVariant }) {
    useReveal();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <main>
            <Hero variant={heroVariant} />
            <TrustBar />
            <CategorySection />
            <CollectionsSection />
            <BestSellers />
            <CraftSection />
            <BridalBanner />
            <Testimonials />
            <InstaSection />
            <Newsletter />
        </main>
    );
}

Object.assign(window, { Home, Hero });
