import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight, Clock } from "lucide-react";
import { EVENTS } from "../../config/content/events";

export default function HomeEvents() {
    const nextEvent = EVENTS[0]; // Take the primary next event
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0 });

    useEffect(() => {
        const target = new Date(nextEvent.startDate).getTime();
        
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = target - now;
            
            if (distance < 0) {
                clearInterval(timer);
                return;
            }
            
            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [nextEvent.startDate]);

    return (
        <section className="section bg-navy" style={{ color: '#fff', overflow: 'hidden' }}>
            <div className="wrap">
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }}>
                    
                    {/* Event Info */}
                    <div>
                        <span className="eyebrow" style={{ color: 'var(--gold)' }}>Exhibitions & Events</span>
                        <h2 style={{ color: '#fff', fontSize: 'clamp(32px, 4vw, 48px)', marginTop: '1rem' }}>
                            Meet Us in <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>{nextEvent.city}</span>
                        </h2>
                        <p className="lede" style={{ color: 'rgba(255,255,255,0.7)', marginTop: '1.5rem', maxWidth: '500px' }}>
                            {nextEvent.description}
                        </p>
                        
                        <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(212,176,106,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', flexShrink: 0 }}>
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h5 style={{ margin: 0, fontSize: '13px', letterSpacing: '0.1em', color: 'var(--gold)' }}>VENUE & STALL</h5>
                                    <p style={{ margin: '4px 0 0', color: '#fff', fontSize: '15px', fontWeight: 500 }}>{nextEvent.venue} — {nextEvent.stall}</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(212,176,106,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', flexShrink: 0 }}>
                                    <Calendar size={20} />
                                </div>
                                <div>
                                    <h5 style={{ margin: 0, fontSize: '13px', letterSpacing: '0.1em', color: 'var(--gold)' }}>DATES</h5>
                                    <p style={{ margin: '4px 0 0', color: '#fff', fontSize: '15px', fontWeight: 500 }}>{nextEvent.dates}</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '3.5rem' }}>
                            <Link to="/contact" className="btn btn-gold btn-lg">
                                Schedule a Meeting <ArrowRight size={16} style={{ marginLeft: 8 }} />
                            </Link>
                        </div>
                    </div>

                    {/* Visual / Countdown */}
                    <div style={{ position: 'relative' }}>
                        <div style={{ 
                            background: 'rgba(255,255,255,0.03)', 
                            border: '1px solid rgba(255,255,255,0.1)', 
                            padding: '40px',
                            borderRadius: '4px',
                            textAlign: 'center'
                        }}>
                            <Clock size={32} style={{ color: 'var(--gold)', marginBottom: '24px' }} />
                            <h5 style={{ letterSpacing: '0.2em', fontSize: '12px', marginBottom: '32px', opacity: 0.6 }}>COUNTDOWN TO LAUNCH</h5>
                            
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', alignItems: 'center' }}>
                                <div className="timer-unit">
                                    <div style={{ fontSize: '42px', fontFamily: 'var(--serif)', fontWeight: 600, color: '#fff', lineHeight: 1 }}>{timeLeft.days}</div>
                                    <div style={{ fontSize: '10px', color: 'var(--gold)', letterSpacing: '0.15em', fontWeight: 700, marginTop: 8 }}>DAYS</div>
                                </div>
                                <div style={{ fontSize: '32px', color: 'rgba(212, 176, 106, 0.4)', marginBottom: 20 }}>:</div>
                                <div className="timer-unit">
                                    <div style={{ fontSize: '42px', fontFamily: 'var(--serif)', fontWeight: 600, color: '#fff', lineHeight: 1 }}>{timeLeft.hours}</div>
                                    <div style={{ fontSize: '10px', color: 'var(--gold)', letterSpacing: '0.15em', fontWeight: 700, marginTop: 8 }}>HOURS</div>
                                </div>
                                <div style={{ fontSize: '32px', color: 'rgba(212, 176, 106, 0.4)', marginBottom: 20 }}>:</div>
                                <div className="timer-unit">
                                    <div style={{ fontSize: '42px', fontFamily: 'var(--serif)', fontWeight: 600, color: '#fff', lineHeight: 1 }}>{timeLeft.mins}</div>
                                    <div style={{ fontSize: '10px', color: 'var(--gold)', letterSpacing: '0.15em', fontWeight: 700, marginTop: 8 }}>MINS</div>
                                </div>
                            </div>

                            <div style={{ marginTop: '48px', padding: '24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                <p style={{ fontSize: '13px', opacity: 0.5, fontStyle: 'italic' }}>
                                    "Bringing the weight of every meaningful moment to {nextEvent.city}."
                                </p>
                            </div>
                        </div>

                        {/* Decorative circle */}
                        <div style={{ 
                            position: 'absolute', 
                            top: '-20px', 
                            right: '-20px', 
                            width: '100px', 
                            height: '100px', 
                            border: '1px solid var(--gold)', 
                            borderRadius: '50%', 
                            opacity: 0.1,
                            zIndex: 0
                        }} />
                    </div>

                </div>
            </div>
        </section>
    );
}
