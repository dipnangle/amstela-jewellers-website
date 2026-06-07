import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight, Clock, ExternalLink } from "lucide-react";
import { EVENTS } from "../../config/content/events";

export default function HomeEvents() {
    const nextEvent = EVENTS.find(e => e.status !== 'completed') || null;
    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
        if (!nextEvent) return;
        const target = new Date(nextEvent.startDate).getTime();

        const calc = () => {
            const distance = target - Date.now();
            if (distance <= 0) { setTimeLeft(null); return; }
            setTimeLeft({
                days: Math.floor(distance / 86400000),
                hours: Math.floor((distance % 86400000) / 3600000),
                mins: Math.floor((distance % 3600000) / 60000),
            });
        };

        calc();
        const timer = setInterval(calc, 1000);
        return () => clearInterval(timer);
    }, [nextEvent?.startDate]);

    if (!nextEvent) return null;

    return (
        <section className="section bg-navy" style={{ overflow: 'hidden' }}>
            <div className="wrap">
                <div className="home-events-grid">

                    {/* Event Info */}
                    <div>
                        <span className="eyebrow" style={{ color: 'var(--gold)' }}>Exhibitions & Events</span>
                        <h2 className="home-events-heading">
                            Meet Us in <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>{nextEvent.city}</span>
                        </h2>
                        <p className="lede home-events-lede">{nextEvent.description}</p>

                        <div className="home-events-details">
                            <div className="event-info-row">
                                <div className="event-icon-circle"><MapPin size={20} /></div>
                                <div>
                                    <h5 className="event-detail-label">Venue & Stall</h5>
                                    <p className="event-detail-value">{nextEvent.venue} — {nextEvent.stall}</p>
                                    {nextEvent.mapLink && (
                                        <a
                                            href={nextEvent.mapLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="event-map-link"
                                        >
                                            <ExternalLink size={11} /> Get Directions
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="event-info-row">
                                <div className="event-icon-circle"><Calendar size={20} /></div>
                                <div>
                                    <h5 className="event-detail-label">Dates</h5>
                                    <p className="event-detail-value">{nextEvent.dates}</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '3.5rem' }}>
                            <Link to="/contact" className="btn btn-gold btn-lg">
                                Schedule a Meeting <ArrowRight size={16} style={{ marginLeft: 8 }} />
                            </Link>
                        </div>
                    </div>

                    {/* Countdown Card */}
                    <div style={{ position: 'relative' }}>
                        <div className="events-countdown-card">
                            <Clock size={32} style={{ color: 'var(--gold)', marginBottom: '24px' }} />
                            <h5 className="events-countdown-label">Countdown to Event</h5>

                            {timeLeft ? (
                                <div className="events-timer-row">
                                    <div className="timer-unit">
                                        <div className="timer-number">{timeLeft.days}</div>
                                        <div className="timer-label">DAYS</div>
                                    </div>
                                    <div className="timer-sep">:</div>
                                    <div className="timer-unit">
                                        <div className="timer-number">{timeLeft.hours}</div>
                                        <div className="timer-label">HOURS</div>
                                    </div>
                                    <div className="timer-sep">:</div>
                                    <div className="timer-unit">
                                        <div className="timer-number">{timeLeft.mins}</div>
                                        <div className="timer-label">MINS</div>
                                    </div>
                                </div>
                            ) : (
                                <p className="events-expired-msg">Event is underway</p>
                            )}

                            <div className="events-countdown-footer">
                                <p className="events-countdown-quote">
                                    "Bringing the weight of every meaningful moment to {nextEvent.city}."
                                </p>
                            </div>
                        </div>

                        <div className="events-deco-circle" />
                    </div>

                </div>
            </div>
        </section>
    );
}
