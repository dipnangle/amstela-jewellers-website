import React, { useState, useEffect } from "react";
import { MapPin, Calendar, MessageCircle, X, ExternalLink, ArrowRight } from "lucide-react";
import { EVENTS } from "../../config/content/events";

export default function EventFloatingWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    
    // Get the next upcoming event
    const nextEvent = EVENTS.find(e => e.status !== 'completed') || EVENTS[0];

    useEffect(() => {
        // Show after a short delay
        const timer = setTimeout(() => setIsVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible || !nextEvent) return null;

    const handleWhatsApp = () => {
        const text = encodeURIComponent(`Hi Amstela! I'm interested in visiting your stall ${nextEvent.stall} at ${nextEvent.name} in ${nextEvent.city}. Could you share more details?`);
        window.open(`https://wa.me/+918652319668?text=${text}`, '_blank');
    };

    return (
        <div 
            className={`event-widget-container ${isOpen ? 'is-open' : ''}`}
            style={{
                position: 'fixed',
                bottom: '100px',
                left: '30px',
                zIndex: 1000,
                transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)'
            }}
        >
            {/* The Floating Pill */}
            {!isOpen && (
                <button 
                    onClick={() => setIsOpen(true)}
                    className="event-pill pulse"
                    style={{
                        background: 'var(--navy)',
                        color: '#fff',
                        padding: '14px 24px',
                        borderRadius: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        border: '1px solid var(--gold)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                        cursor: 'pointer'
                    }}
                >
                    <div className="status-dot-container">
                        <div className="status-dot" style={{ background: '#f59e0b', boxShadow: '0 0 10px #f59e0b' }} />
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--champagne)' }}>
                        Upcoming: {nextEvent.city}
                    </span>
                    <ArrowRight size={14} className="text-gold" />
                </button>
            )}

            {/* Expanded Modal/Card */}
            {isOpen && (
                <div 
                    className="event-card-expanded"
                    style={{
                        width: '320px',
                        background: '#fff',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                        border: '1px solid var(--border)',
                        animation: 'slideUp 0.4s ease-out'
                    }}
                >
                    <div style={{ background: 'var(--navy)', padding: '24px', color: '#fff', position: 'relative' }}>
                        <button 
                            onClick={() => setIsOpen(false)}
                            style={{ position: 'absolute', top: 16, right: 16, color: 'rgba(255,255,255,0.6)' }}
                        >
                            <X size={18} />
                        </button>
                        <span className="eyebrow" style={{ color: 'var(--gold)', marginBottom: 8, display: 'block' }}>Upcoming Exhibition</span>
                        <h4 style={{ margin: 0, fontSize: '1.2rem', fontFamily: 'var(--serif)' }}>{nextEvent.name}</h4>
                    </div>

                    <div style={{ padding: '24px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
                                <MapPin size={16} className="text-gold" style={{ marginTop: 2 }} />
                                <div>
                                    <div style={{ fontWeight: 600, fontSize: '13px', color: 'var(--ink)' }}>{nextEvent.venue}</div>
                                    <div style={{ fontSize: '12px', color: 'var(--body)' }}>{nextEvent.city} — {nextEvent.stall}</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
                                <Calendar size={16} className="text-gold" style={{ marginTop: 2 }} />
                                <div>
                                    <div style={{ fontWeight: 600, fontSize: '13px', color: 'var(--ink)' }}>{nextEvent.dates}</div>
                                    <div style={{ fontSize: '12px', color: 'var(--body)' }}>Olympia London</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <button 
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

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes pulse-dot {
                    0% { transform: scale(0.8); opacity: 0.5; }
                    50% { transform: scale(1.2); opacity: 1; }
                    100% { transform: scale(0.8); opacity: 0.5; }
                }
                @keyframes slideUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .status-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    animation: pulse-dot 2s infinite;
                }
                .event-pill:hover {
                    transform: scale(1.05);
                    border-color: var(--gold);
                }
            `}} />
        </div>
    );
}
