/* ============================================================
   VAIRA — About · Manufacturing · Contact
   ============================================================ */
function PageHead({ crumb, title, lede }) {
    return (
        <section className="page-head">
            <div className="bg-velvet bg-noise" />
            <div className="wrap">
                <div className="crumb">
                    <Link to="/">Home</Link>
                    <span className="sep">/</span>
                    <span>{crumb}</span>
                </div>
                <h1>{title}</h1>
                <p className="lede">{lede}</p>
            </div>
        </section>
    );
}

/* ---------------- ABOUT ---------------- */
const TIMELINE = [
    [
        "1962",
        "A workshop in Jaipur",
        "Founder Vishwanath Rao opens a single goldsmithing bench, trading in hallmarked gold for local families.",
    ],
    [
        "1984",
        "The second generation",
        "The atelier expands into fine diamond jewellery, introducing certified stones to the region.",
    ],
    [
        "2001",
        "Export house status",
        "VAIRA earns recognised export house status, shipping to the Gulf, Europe and Southeast Asia.",
    ],
    [
        "2015",
        "The modern atelier",
        "A 60,000 sq ft facility opens, pairing master handcraft with CAD design and laser precision.",
    ],
    [
        "2026",
        "A global maison",
        "180 artisans, 40+ export markets, and a flagship retail experience — heritage, reimagined.",
    ],
];
const CERTS = [
    "BIS Hallmark",
    "GIA Certified",
    "IGI Graded",
    "RJC Member",
    "ISO 9001",
    "Kimberley Process",
];

function About() {
    useReveal();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <main>
            <PageHead
                crumb="About Us"
                title="A Legacy in Light"
                lede="Three generations of master jewellers, one enduring belief — that jewellery should be made to be inherited."
            />

            {/* founder story */}
            <section className="section wrap">
                <div className="coll reveal">
                    <div className="coll-media zoom">
                        <Placeholder
                            glyph="diamond"
                            tone="champ"
                            label="The Founder · 1962"
                        />
                    </div>
                    <div className="coll-body">
                        <span className="idx">Our Story</span>
                        <h3>From a Single Bench to a Global Maison</h3>
                        <p>
                            What began in 1962 as one goldsmith's workshop has
                            grown into a house trusted across forty countries —
                            yet our founding principle remains unchanged. Every
                            piece is made by hand, certified without compromise,
                            and finished to last lifetimes.
                        </p>
                        <p style={{ marginTop: 14 }}>
                            We exist at the meeting point of two worlds: the
                            soul of traditional Indian craftsmanship and the
                            precision of modern diamond science. That duality is
                            the VAIRA signature.
                        </p>
                    </div>
                </div>
            </section>

            {/* stats band */}
            <section
                className="section"
                style={{ background: "var(--offwhite)" }}
            >
                <div className="wrap">
                    <div className="mfg-stats reveal">
                        {[
                            ["60+", "Years of mastery"],
                            ["180", "Master artisans"],
                            ["40+", "Export markets"],
                            ["2M+", "Pieces crafted"],
                        ].map(([b, s]) => (
                            <div className="m" key={s}>
                                <b>{b}</b>
                                <span>{s}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* timeline */}
            <section className="section wrap">
                <SectionHead
                    center
                    eyebrow="Our Journey"
                    title="Six Decades of Craft"
                />
                <div
                    className="timeline"
                    style={{
                        marginTop: 50,
                        maxWidth: 820,
                        marginInline: "auto",
                    }}
                >
                    {TIMELINE.map(([y, t, d], i) => (
                        <div
                            className="tl-row reveal"
                            style={delay(i, 60)}
                            key={y}
                        >
                            <div className="tl-year">{y}</div>
                            <div className="tl-body">
                                <h4>{t}</h4>
                                <p style={{ color: "var(--body)" }}>{d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* values */}
            <section className="craft section">
                <div
                    className="bg-velvet"
                    style={{ position: "absolute", inset: 0 }}
                />
                <div className="wrap">
                    <SectionHead
                        center
                        dark
                        eyebrow="What We Stand For"
                        title="The VAIRA Principles"
                    />
                    <div className="mfg-feature" style={{ marginTop: 50 }}>
                        {[
                            [
                                IcoGem,
                                "Uncompromised Quality",
                                "Only GIA/IGI-certified diamonds and BIS-hallmarked metals. No exceptions, no shortcuts.",
                            ],
                            [
                                IcoLeaf,
                                "Responsible Sourcing",
                                "Conflict-free stones and recycled gold, fully traceable through the Kimberley Process.",
                            ],
                            [
                                IcoSupport,
                                "Built to be Inherited",
                                "A lifetime of free cleaning, resizing and care — because heirlooms deserve it.",
                            ],
                        ].map(([Ic, t, d]) => (
                            <div
                                className="mfg-card reveal"
                                key={t}
                                style={{
                                    background: "rgba(255,255,255,.04)",
                                    borderColor: "rgba(255,255,255,.12)",
                                }}
                            >
                                <span
                                    className="ic"
                                    style={{
                                        background: "rgba(201,162,39,.12)",
                                    }}
                                >
                                    <Ic size={26} />
                                </span>
                                <h4 style={{ color: "#fff" }}>{t}</h4>
                                <p style={{ color: "rgba(255,255,255,.7)" }}>
                                    {d}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* certifications */}
            <section className="section wrap" style={{ textAlign: "center" }}>
                <SectionHead
                    center
                    eyebrow="Trust, Certified"
                    title="Recognised & Accredited"
                />
                <div
                    className="reveal"
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 16,
                        justifyContent: "center",
                        marginTop: 40,
                    }}
                >
                    {CERTS.map((c) => (
                        <div
                            key={c}
                            style={{
                                border: "1px solid var(--border)",
                                padding: "20px 30px",
                                minWidth: 160,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 10,
                            }}
                        >
                            <IcoShield2
                                size={26}
                                style={{ color: "var(--gold)" }}
                            />
                            <b
                                style={{
                                    fontFamily: "var(--serif)",
                                    color: "var(--ink)",
                                    fontSize: 17,
                                    fontWeight: 500,
                                }}
                            >
                                {c}
                            </b>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

/* ---------------- MANUFACTURING (B2B) ---------------- */
function Manufacturing() {
    useReveal();
    const { toast } = useShop();
    const [sent, setSent] = React.useState(false);
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const submit = (e) => {
        e.preventDefault();
        setSent(true);
        toast("Enquiry received — our trade team will respond within 24h");
    };
    return (
        <main>
            <PageHead
                crumb="Manufacturing"
                title="Manufacturing & Export"
                lede="A full-service jewellery manufacturing partner for retailers, wholesalers and global brands — OEM, ODM and private label, at scale."
            />

            {/* intro + capacity */}
            <section className="section wrap">
                <div className="coll reveal">
                    <div className="coll-media zoom">
                        <Placeholder
                            glyph="ring"
                            tone="dark"
                            label="The VAIRA Atelier"
                        />
                    </div>
                    <div className="coll-body">
                        <span className="idx">B2B Partnership</span>
                        <h3>Your Manufacturing Partner, End to End</h3>
                        <p>
                            From a 60,000 sq ft facility, our 180 artisans and
                            an in-house CAD studio deliver certified diamond and
                            hallmarked gold jewellery to retailers and brands
                            across 40+ countries — with the consistency,
                            compliance and confidentiality global trade demands.
                        </p>
                        <div
                            style={{
                                display: "flex",
                                gap: 14,
                                marginTop: 26,
                                flexWrap: "wrap",
                            }}
                        >
                            <Btn
                                variant="gold"
                                onClick={() =>
                                    document
                                        .getElementById("mfg-form")
                                        .scrollIntoView({ behavior: "smooth" })
                                }
                            >
                                Request a Quote <IcoArrow size={16} />
                            </Btn>
                            <Btn variant="ghost" onClick={() => {}}>
                                Download Catalogue
                            </Btn>
                        </div>
                    </div>
                </div>
                <div className="mfg-stats reveal" style={{ marginTop: 70 }}>
                    {[
                        ["60K", "sq ft facility"],
                        ["50K+", "pieces / month"],
                        ["180", "skilled artisans"],
                        ["72h", "sampling turnaround"],
                    ].map(([b, s]) => (
                        <div className="m" key={s}>
                            <b>{b}</b>
                            <span>{s}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* capabilities */}
            <section
                className="section"
                style={{ background: "var(--offwhite)" }}
            >
                <div className="wrap">
                    <SectionHead
                        center
                        eyebrow="Capabilities"
                        title="A Complete Production House"
                        lede="Every stage handled in-house, under one roof — for total quality control and traceability."
                    />
                    <div className="mfg-feature" style={{ marginTop: 54 }}>
                        {[
                            [
                                IcoSettings,
                                "OEM / ODM Services",
                                "From your tech-pack or ours — full design-to-delivery, private label and white label production.",
                            ],
                            [
                                IcoFactory,
                                "Scaled Production",
                                "CAD, casting, hand-setting and finishing lines producing 50,000+ pieces monthly without quality drift.",
                            ],
                            [
                                IcoShield2,
                                "Quality Control",
                                "Four-stage QC with diamond verification, weight tolerance checks and hallmark assaying on every batch.",
                            ],
                            [
                                IcoGlobe,
                                "Global Export",
                                "Documentation, insurance and logistics handled in-house for compliant shipping to 40+ markets.",
                            ],
                            [
                                IcoGem,
                                "In-House Diamond Sourcing",
                                "Direct stone procurement, Kimberley-certified, with calibrated matching for large repeat orders.",
                            ],
                            [
                                IcoBox,
                                "Private Packaging",
                                "Custom branded boxes, certificates and retail-ready presentation under your label.",
                            ],
                        ].map(([Ic, t, d], i) => (
                            <div
                                className="mfg-card reveal"
                                style={delay(i % 3)}
                                key={t}
                            >
                                <span className="ic">
                                    <Ic size={26} />
                                </span>
                                <h4>{t}</h4>
                                <p style={{ color: "var(--body)" }}>{d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* export markets */}
            <section className="section wrap">
                <SectionHead
                    center
                    eyebrow="Where We Ship"
                    title="Trusted Across 40+ Markets"
                />
                <div
                    className="reveal"
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 12,
                        justifyContent: "center",
                        marginTop: 40,
                        maxWidth: 900,
                        marginInline: "auto",
                    }}
                >
                    {[
                        "United States",
                        "United Kingdom",
                        "UAE",
                        "Saudi Arabia",
                        "Singapore",
                        "Hong Kong",
                        "Australia",
                        "Canada",
                        "Germany",
                        "Malaysia",
                        "Qatar",
                        "South Africa",
                    ].map((m) => (
                        <span
                            key={m}
                            style={{
                                border: "1px solid var(--border)",
                                borderRadius: 30,
                                padding: "10px 20px",
                                fontSize: 13.5,
                                color: "var(--navy)",
                                display: "inline-flex",
                                gap: 8,
                                alignItems: "center",
                            }}
                        >
                            <IcoPin
                                size={15}
                                style={{ color: "var(--gold)" }}
                            />
                            {m}
                        </span>
                    ))}
                </div>
            </section>

            {/* inquiry form */}
            <section
                className="section"
                id="mfg-form"
                style={{ background: "var(--navy-dark)" }}
            >
                <div className="wrap">
                    <div style={{ maxWidth: 760, margin: "0 auto" }}>
                        <SectionHead
                            center
                            dark
                            eyebrow="Start a Conversation"
                            title="Trade & Wholesale Enquiry"
                            lede="Tell us about your project. Our trade team responds within one business day."
                        />
                        {sent ? (
                            <div
                                className="reveal"
                                style={{
                                    textAlign: "center",
                                    marginTop: 40,
                                    color: "#fff",
                                }}
                            >
                                <IcoCheck
                                    size={44}
                                    style={{ color: "var(--champagne)" }}
                                />
                                <h3 style={{ color: "#fff", marginTop: 16 }}>
                                    Thank you — enquiry received.
                                </h3>
                                <p
                                    style={{
                                        color: "rgba(255,255,255,.7)",
                                        marginTop: 10,
                                    }}
                                >
                                    A VAIRA trade specialist will be in touch
                                    within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form
                                className="form-grid reveal"
                                style={{ marginTop: 40 }}
                                onSubmit={submit}
                            >
                                <div className="field">
                                    <label>Company</label>
                                    <input
                                        required
                                        placeholder="Your company"
                                    />
                                </div>
                                <div className="field">
                                    <label>Contact Name</label>
                                    <input required placeholder="Full name" />
                                </div>
                                <div className="field">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="you@company.com"
                                    />
                                </div>
                                <div className="field">
                                    <label>Country</label>
                                    <input required placeholder="Country" />
                                </div>
                                <div className="field">
                                    <label>Service</label>
                                    <select>
                                        <option>OEM / ODM Manufacturing</option>
                                        <option>Private Label</option>
                                        <option>Wholesale Supply</option>
                                        <option>Bulk Export Order</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <label>Est. Monthly Volume</label>
                                    <select>
                                        <option>Under 500 pieces</option>
                                        <option>500 – 2,000</option>
                                        <option>2,000 – 10,000</option>
                                        <option>10,000+</option>
                                    </select>
                                </div>
                                <div className="field full">
                                    <label>Project Details</label>
                                    <textarea placeholder="Tell us about your designs, materials, timelines…" />
                                </div>
                                <div className="field full">
                                    <Btn
                                        variant="gold"
                                        lg
                                        className="btn-block"
                                        as="button"
                                        type="submit"
                                    >
                                        Submit Enquiry <IcoArrow size={16} />
                                    </Btn>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
    useReveal();
    const { toast } = useShop();
    const [sent, setSent] = React.useState(false);
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const submit = (e) => {
        e.preventDefault();
        setSent(true);
        toast("Message sent — we'll reply shortly");
    };
    return (
        <main>
            <PageHead
                crumb="Contact"
                title="Book a Private Appointment"
                lede="Visit our flagship atelier, speak to a jewellery consultant, or begin a bespoke commission."
            />

            <section className="section wrap">
                <div className="contact-grid">
                    {/* info */}
                    <div className="contact-info reveal">
                        <div className="ci">
                            <span className="ic">
                                <IcoPin size={20} />
                            </span>
                            <div>
                                <b>Flagship Atelier</b>
                                <span
                                    style={{
                                        color: "var(--body)",
                                        fontSize: 14,
                                    }}
                                >
                                    VAIRA House, MI Road, Jaipur 302001,
                                    Rajasthan, India
                                </span>
                            </div>
                        </div>
                        <div className="ci">
                            <span className="ic">
                                <IcoPhone size={20} />
                            </span>
                            <div>
                                <b>Call Us</b>
                                <span
                                    style={{
                                        color: "var(--body)",
                                        fontSize: 14,
                                    }}
                                >
                                    +91 141 400 1962 · Mon–Sat, 10am–8pm IST
                                </span>
                            </div>
                        </div>
                        <div className="ci">
                            <span className="ic">
                                <IcoMail size={20} />
                            </span>
                            <div>
                                <b>Email</b>
                                <span
                                    style={{
                                        color: "var(--body)",
                                        fontSize: 14,
                                    }}
                                >
                                    concierge@vaira.jewellery ·
                                    trade@vaira.jewellery
                                </span>
                            </div>
                        </div>
                        <div className="ci">
                            <span className="ic">
                                <IcoClock size={20} />
                            </span>
                            <div>
                                <b>Atelier Hours</b>
                                <span
                                    style={{
                                        color: "var(--body)",
                                        fontSize: 14,
                                    }}
                                >
                                    Monday – Saturday, 10:00 – 20:00 · Sunday by
                                    appointment
                                </span>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                gap: 12,
                                marginTop: 26,
                                flexWrap: "wrap",
                            }}
                        >
                            <Btn variant="gold" className="wa-btn" as="button">
                                <IcoWhatsapp size={18} /> Chat on WhatsApp
                            </Btn>
                            <Btn variant="ghost">
                                <IcoPin size={16} /> Get Directions
                            </Btn>
                        </div>
                        <div className="map-ph">
                            <Placeholder
                                glyph="diamond"
                                tone="t2"
                                label="Map · VAIRA House, Jaipur"
                            />
                        </div>
                    </div>

                    {/* form */}
                    <div className="reveal">
                        <div
                            style={{
                                border: "1px solid var(--border)",
                                padding: "clamp(26px,4vw,44px)",
                            }}
                        >
                            <h3 style={{ fontSize: 26, marginBottom: 6 }}>
                                Send a Message
                            </h3>
                            <p
                                style={{
                                    color: "var(--body)",
                                    marginBottom: 26,
                                    fontSize: 14.5,
                                }}
                            >
                                We typically reply within one business day.
                            </p>
                            {sent ? (
                                <div
                                    style={{
                                        textAlign: "center",
                                        padding: "30px 10px",
                                    }}
                                >
                                    <IcoCheck
                                        size={44}
                                        style={{ color: "var(--gold)" }}
                                    />
                                    <h4 style={{ marginTop: 14 }}>
                                        Message sent.
                                    </h4>
                                    <p
                                        style={{
                                            color: "var(--body)",
                                            marginTop: 8,
                                        }}
                                    >
                                        Thank you for reaching out — a
                                        consultant will be in touch shortly.
                                    </p>
                                </div>
                            ) : (
                                <form className="form-grid" onSubmit={submit}>
                                    <div className="field">
                                        <label>First Name</label>
                                        <input
                                            required
                                            placeholder="First name"
                                        />
                                    </div>
                                    <div className="field">
                                        <label>Last Name</label>
                                        <input
                                            required
                                            placeholder="Last name"
                                        />
                                    </div>
                                    <div className="field">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="you@email.com"
                                        />
                                    </div>
                                    <div className="field">
                                        <label>Phone</label>
                                        <input placeholder="+91" />
                                    </div>
                                    <div className="field full">
                                        <label>Reason</label>
                                        <select>
                                            <option>Book an appointment</option>
                                            <option>Product enquiry</option>
                                            <option>Bespoke commission</option>
                                            <option>Repairs & care</option>
                                            <option>Wholesale / trade</option>
                                        </select>
                                    </div>
                                    <div className="field full">
                                        <label>Message</label>
                                        <textarea placeholder="How can we help?" />
                                    </div>
                                    <div className="field full">
                                        <Btn
                                            variant="navy"
                                            lg
                                            className="btn-block"
                                            as="button"
                                            type="submit"
                                        >
                                            Send Message <IcoArrow size={16} />
                                        </Btn>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

Object.assign(window, { About, Manufacturing, Contact, PageHead });
