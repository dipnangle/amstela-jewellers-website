import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Phone,
    Mail,
    MapPin,
    MessageCircle,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";
import { isEmail, isRequired } from "@jewel/shared/utils/validators.js";
import { SITE } from "../../config/site";

function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        country: "",
        requirement: "",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

    const submit = (e) => {
        e.preventDefault();
        const errs = {};
        if (!isRequired(form.name)) errs.name = "Required";
        if (!isEmail(form.email)) errs.email = "Valid email required";
        if (!isRequired(form.requirement)) errs.requirement = "Required";
        if (Object.keys(errs).length) {
            setErrors(errs);
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
        }, 1400);
    };

    if (success) {
        return (
            <div style={{ textAlign: "center", padding: "60px 20px" }}>
                <CheckCircle2
                    size={44}
                    color="var(--gold)"
                    style={{ margin: "0 auto 16px" }}
                />
                <h3
                    style={{
                        fontFamily: "var(--serif)",
                        fontSize: 26,
                        color: "var(--ink)",
                        marginBottom: 10,
                        fontWeight: 400,
                    }}
                >
                    Enquiry Received
                </h3>
                <p style={{ color: "var(--body)", fontSize: 14 }}>
                    Thank you, {form.name.split(" ")[0]}. Our export team will
                    respond within 24 hours.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={submit} noValidate>
            <div className="form-grid">
                <div className="field">
                    <label>Full Name</label>
                    <input
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={set("name")}
                    />
                    {errors.name && (
                        <span style={{ fontSize: 12, color: "#c00" }}>
                            {errors.name}
                        </span>
                    )}
                </div>
                <div className="field">
                    <label>Company</label>
                    <input
                        type="text"
                        placeholder="Company name"
                        value={form.company}
                        onChange={set("company")}
                    />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="trade@company.com"
                        value={form.email}
                        onChange={set("email")}
                    />
                    {errors.email && (
                        <span style={{ fontSize: 12, color: "#c00" }}>
                            {errors.email}
                        </span>
                    )}
                </div>
                <div className="field">
                    <label>Phone</label>
                    <input
                        type="tel"
                        placeholder="+1 555 000 0000"
                        value={form.phone}
                        onChange={set("phone")}
                    />
                </div>
                <div className="field full">
                    <label>Your Requirement</label>
                    <textarea
                        rows={4}
                        placeholder="Describe your order, volume, or enquiry…"
                        value={form.requirement}
                        onChange={set("requirement")}
                    />
                    {errors.requirement && (
                        <span style={{ fontSize: 12, color: "#c00" }}>
                            {errors.requirement}
                        </span>
                    )}
                </div>
            </div>
            <button
                type="submit"
                className="btn btn-navy btn-lg btn-block"
                style={{ marginTop: 22 }}
                disabled={loading}
            >
                {loading ? (
                    "Sending…"
                ) : (
                    <>
                        Send Enquiry <ArrowRight size={15} />
                    </>
                )}
            </button>
        </form>
    );
}

export default function ContactPage() {
    const waUrl = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=Hi%2C%20I%27m%20interested%20in%20sourcing%20from%20Amstela.`;

    return (
        <main>
            <div className="page-head bg-velvet">
                <div
                    className="bg-velvet"
                    style={{ position: "absolute", inset: 0 }}
                />
                <div className="wrap">
                    <div className="crumb">
                        <Link to="/">Home</Link>
                        <span className="sep">/</span>
                        <span>Contact</span>
                    </div>
                    <h1>Contact Trade Desk</h1>
                    <p className="lede">
                        Our export team is available Monday–Friday, 9 AM–6 PM
                        IST. We respond to all enquiries within 24 hours.
                    </p>
                </div>
            </div>

            <section className="section wrap">
                <div className="contact-grid">
                    <div className="contact-info">
                        <h3
                            style={{
                                fontFamily: "var(--serif)",
                                fontSize: 26,
                                color: "var(--ink)",
                                marginBottom: 8,
                                fontWeight: 400,
                            }}
                        >
                            Get in Touch
                        </h3>
                        <p
                            style={{
                                color: "var(--body)",
                                fontSize: 14,
                                marginBottom: 6,
                            }}
                        >
                            Reach our export desk directly by phone, email, or
                            WhatsApp.
                        </p>

                        <div className="ci">
                            <div className="ic">
                                <Phone size={18} />
                            </div>
                            <div>
                                <b>Trade Support</b>
                                <a
                                    href={`tel:${SITE.phone}`}
                                    style={{
                                        display: "block",
                                        fontSize: 14,
                                        color: "var(--body)",
                                    }}
                                >
                                    {SITE.phone}
                                </a>
                            </div>
                        </div>
                        <div className="ci">
                            <div className="ic">
                                <Mail size={18} />
                            </div>
                            <div>
                                <b>Export Email</b>
                                <a
                                    href={`mailto:${SITE.email}`}
                                    style={{
                                        display: "block",
                                        fontSize: 14,
                                        color: "var(--body)",
                                    }}
                                >
                                    {SITE.email}
                                </a>
                            </div>
                        </div>
                        <div className="ci">
                            <div className="ic">
                                <MessageCircle size={18} />
                            </div>
                            <div>
                                <b>WhatsApp</b>
                                <a
                                    href={waUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "block",
                                        fontSize: 14,
                                        color: "var(--body)",
                                    }}
                                >
                                    {SITE.whatsapp}
                                </a>
                            </div>
                        </div>
                        <div className="ci">
                            <div className="ic">
                                <MapPin size={18} />
                            </div>
                            <div>
                                <b>Head Office</b>
                                <span
                                    style={{
                                        display: "block",
                                        fontSize: 14,
                                        color: "var(--body)",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {SITE.address}
                                </span>
                            </div>
                        </div>

                        <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-gold btn-lg"
                            style={{
                                marginTop: 28,
                                background: "#1FA855",
                                color: "#fff",
                            }}
                        >
                            <MessageCircle size={16} /> WhatsApp Trade Desk
                        </a>
                    </div>

                    <div>
                        <h3
                            style={{
                                fontFamily: "var(--serif)",
                                fontSize: 26,
                                color: "var(--ink)",
                                marginBottom: 24,
                                fontWeight: 400,
                            }}
                        >
                            Trade Enquiry Form
                        </h3>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
