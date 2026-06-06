import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import EnquiryForm from "./EnquiryForm";
import { SITE } from "../../config/site";

export default function ContactPage() {
    const waUrl = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Amstela%20jewellery.`;

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
                    <h1>Personalized Consultation</h1>
                    <p className="lede">
                        Our master advisors are at your service — for bespoke
                        creations, bridal planning, or any enquiry.
                    </p>
                </div>
            </div>

            <section className="section wrap">
                <div className="contact-grid">
                    {/* Left: contact info */}
                    <div className="contact-info">
                        <h3
                            style={{
                                fontFamily: "var(--serif)",
                                fontSize: 26,
                                color: "var(--ink)",
                                marginBottom: 8,
                            }}
                        >
                            Direct Channels
                        </h3>
                        <p
                            style={{
                                color: "var(--body)",
                                fontSize: 14,
                                marginBottom: 8,
                            }}
                        >
                            Reach us by any of the methods below — we respond
                            within 24 hours.
                        </p>

                        <div className="ci">
                            <div className="ic">
                                <Phone size={20} />
                            </div>
                            <div>
                                <b>Phone</b>
                                <span
                                    style={{
                                        display: "block",
                                        fontSize: 14,
                                        color: "var(--body)",
                                    }}
                                >
                                    {SITE.phone}
                                </span>
                            </div>
                        </div>
                        <div className="ci">
                            <div className="ic">
                                <Mail size={20} />
                            </div>
                            <div>
                                <b>Email</b>
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
                                <MessageCircle size={20} />
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
                                <MapPin size={20} />
                            </div>
                            <div>
                                <b>Address</b>
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
                            className="btn wa-btn btn-lg"
                            style={{ marginTop: 28 }}
                        >
                            <MessageCircle size={16} /> WhatsApp Enquiry
                        </a>
                    </div>

                    {/* Right: enquiry form */}
                    <div>
                        <h3
                            style={{
                                fontFamily: "var(--serif)",
                                fontSize: 26,
                                color: "var(--ink)",
                                marginBottom: 28,
                            }}
                        >
                            Send an Enquiry
                        </h3>
                        <EnquiryForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
