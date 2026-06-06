/* ============================================================
   VAIRA — Newsletter + Footer
   ============================================================ */
function Newsletter() {
    const { toast } = useShop();
    const [email, setEmail] = React.useState("");
    const [done, setDone] = React.useState(false);
    const submit = (e) => {
        e.preventDefault();
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
            toast("Please enter a valid email");
            return;
        }
        setDone(true);
        toast("Welcome to the VAIRA Circle");
        setEmail("");
    };
    return (
        <section className="news section">
            <div className="wrap">
                <div
                    className="reveal"
                    style={{
                        maxWidth: 620,
                        margin: "0 auto",
                        textAlign: "center",
                    }}
                >
                    <span
                        className="eyebrow center-line"
                        style={{ color: "var(--champagne)" }}
                    >
                        Private Access
                    </span>
                    <h2
                        style={{
                            color: "#fff",
                            fontSize: "clamp(30px,4vw,48px)",
                            marginTop: 18,
                        }}
                    >
                        Join Our Exclusive Circle
                    </h2>
                    <p
                        className="lede"
                        style={{
                            color: "rgba(255,255,255,.74)",
                            marginTop: 16,
                        }}
                    >
                        Be the first to preview new collections, private
                        viewings and atelier appointments — reserved for our
                        members.
                    </p>
                    {done ? (
                        <div
                            style={{
                                marginTop: 30,
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 10,
                                color: "var(--champagne)",
                                fontSize: 16,
                            }}
                        >
                            <IcoCheck size={20} /> You're on the list. Welcome
                            to VAIRA.
                        </div>
                    ) : (
                        <form className="news-form" onSubmit={submit}>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email address"
                                aria-label="Email"
                            />
                            <button className="btn btn-gold" type="submit">
                                Join
                            </button>
                        </form>
                    )}
                    <p className="fineprint">
                        By joining you agree to receive curated communications.
                        Unsubscribe anytime.
                    </p>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    const nav = useNav();
    const cols = {
        Maison: [
            ["Our Story", "/about"],
            ["Craftsmanship", "/about"],
            ["Sustainability", "/about"],
            ["Careers", "/about"],
            ["Press", "/about"],
        ],
        Collections: [
            ["Diamond Jewellery", "/collections"],
            ["Gold Jewellery", "/collections"],
            ["Bridal", "/collections"],
            ["Mangalsutra", "/collections"],
            ["New Arrivals", "/collections"],
        ],
        "Client Care": [
            ["Book Appointment", "/contact"],
            ["Shipping & Returns", "/contact"],
            ["Ring Sizing", "/contact"],
            ["Care Guide", "/contact"],
            ["Certification", "/contact"],
        ],
        "Trade & Export": [
            ["Manufacturing", "/manufacturing"],
            ["OEM / ODM", "/manufacturing"],
            ["Wholesale", "/manufacturing"],
            ["Export Enquiry", "/contact"],
        ],
    };
    return (
        <footer className="footer">
            <div className="wrap">
                <div className="footer-top">
                    <div className="footer-brand">
                        <span
                            className="brand-mark"
                            style={{
                                fontFamily: "var(--serif)",
                                letterSpacing: ".3em",
                            }}
                        >
                            VAIRA
                        </span>
                        <div
                            className="brand-sub"
                            style={{
                                fontSize: 9,
                                letterSpacing: ".4em",
                                marginTop: 4,
                            }}
                        >
                            FINE JEWELLERY · SINCE 1962
                        </div>
                        <p>
                            A house of master jewellers crafting certified
                            diamond and hallmarked gold jewellery for milestones
                            that last generations.
                        </p>
                        <div className="footer-social">
                            <a aria-label="Instagram">
                                <IcoInsta size={18} />
                            </a>
                            <a aria-label="Facebook">
                                <IcoFb size={18} />
                            </a>
                            <a aria-label="Pinterest">
                                <IcoPin2 size={18} />
                            </a>
                            <a aria-label="YouTube">
                                <IcoYt size={18} />
                            </a>
                        </div>
                    </div>
                    {Object.entries(cols).map(([h, links]) => (
                        <div className="footer-col" key={h}>
                            <h6>{h}</h6>
                            {links.map(([l, t]) => (
                                <a key={l} onClick={() => nav(t)}>
                                    {l}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="footer-bottom">
                    <span>
                        © 2026 VAIRA Fine Jewellery Pvt. Ltd. · All rights
                        reserved · BIS Hallmarked · GIA Certified
                    </span>
                    <div className="pays">
                        <span>VISA</span>
                        <span>MASTERCARD</span>
                        <span>AMEX</span>
                        <span>UPI</span>
                        <span>EMI</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

Object.assign(window, { Newsletter, Footer });
