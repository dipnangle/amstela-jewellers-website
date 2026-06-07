import React, { useState, useEffect, useRef } from "react";
import { MapPin, Calendar, MessageCircle, X, ExternalLink, ArrowRight } from "lucide-react";
import { EVENTS } from "../../config/content/events";
import { useSiteConfig } from "../../context/SiteConfigContext";

export default function EventFloatingWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);
    const { config } = useSiteConfig();

    const nextEvent = EVENTS.find(e => e.status !== 'completed') || null;

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isOpen) return;
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    if (!isVisible || !nextEvent) return null;

    const handleWhatsApp = () => {
        const phone = (config?.contact?.whatsapp || '+918652319668').replace(/\s/g, '');
        const text = encodeURIComponent(
            `Hi Amstela! I'm interested in visiting your stall ${nextEvent.stall} at ${nextEvent.name} in ${nextEvent.city}. Could you share more details?`
        );
        window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    };

    return (
        <div ref={containerRef} className="event-widget-container">

            {/* Card — pops above the pill */}
            {isOpen && (
                <div className="event-card-expanded">
                    <div className="event-card-header">
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="event-card-close"
                        >
                            <X size={18} />
                        </button>
                        <span className="eyebrow" style={{ color: 'var(--gold)', marginBottom: 8, display: 'block' }}>
                            Upcoming Exhibition
                        </span>
                        <h4 className="event-card-title">{nextEvent.name}</h4>
                    </div>

                    <div className="event-card-body">
                        <div className="event-card-details">
                            <div className="event-card-row">
                                <MapPin size={16} style={{ color: 'var(--gold)', marginTop: 2, flexShrink: 0 }} />
                                <div>
                                    <div className="event-card-detail-title">{nextEvent.venue}</div>
                                    <div className="event-card-detail-sub">{nextEvent.city} — {nextEvent.stall}</div>
                                    {nextEvent.mapLink && (
                                        <a
                                            href={nextEvent.mapLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="event-map-link"
                                            style={{ marginTop: 4 }}
                                        >
                                            <ExternalLink size={11} /> Get Directions
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="event-card-row">
                                <Calendar size={16} style={{ color: 'var(--gold)', marginTop: 2, flexShrink: 0 }} />
                                <div>
                                    <div className="event-card-detail-title">{nextEvent.dates}</div>
                                    <div className="event-card-detail-sub">{nextEvent.venue}</div>
                                </div>
                            </div>
                        </div>

                        <div className="event-card-actions">
                            <button
                                type="button"
                                onClick={handleWhatsApp}
                                className="btn btn-gold btn-block"
                                style={{ justifyContent: 'center', gap: 8 }}
                            >
                                <MessageCircle size={16} /> RSVP via WhatsApp
                            </button>
                            <a
                                href={nextEvent.link}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-ghost btn-block"
                                style={{ justifyContent: 'center', gap: 8, fontSize: '12px' }}
                            >
                                <ExternalLink size={14} /> Official Site
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Pill — always visible */}
            <button
                type="button"
                onClick={() => setIsOpen(prev => !prev)}
                className="event-pill"
            >
                <span className="status-dot-container">
                    <span className="status-dot" />
                </span>
                <span className="event-pill-label">Upcoming: {nextEvent.city}</span>
                <ArrowRight size={14} className="event-pill-arrow" style={{ color: 'var(--gold)', flexShrink: 0 }} />
                <Calendar size={16} className="event-pill-icon-mobile" style={{ color: 'var(--champagne)', flexShrink: 0 }} />
            </button>

        </div>
    );
}
