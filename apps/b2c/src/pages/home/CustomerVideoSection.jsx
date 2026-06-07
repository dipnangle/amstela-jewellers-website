import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function CustomerVideoSection() {
    const videoRef = useRef(null);
    const [muted, setMuted] = useState(true);

    const toggleSound = () => {
        setMuted(prev => {
            if (videoRef.current) videoRef.current.muted = !prev;
            return !prev;
        });
    };

    return (
        <section className="cust-video-section">
            <video
                ref={videoRef}
                className="cust-video-bg"
                src="/home/indian_customers.mp4"
                autoPlay
                muted
                loop
                playsInline
            />
            <div className="cust-video-overlay" />

            <div className="cust-video-content">
                <span className="eyebrow" style={{ color: "var(--champagne)" }}>
                    Our Customers
                </span>
                <h2 className="cust-video-heading">
                    Loved across India &amp; beyond
                </h2>
                <p className="cust-video-sub">
                    Real moments. Real joy. Every piece tells a story of life's most
                    cherished milestones.
                </p>
            </div>

            <button
                type="button"
                onClick={toggleSound}
                className="cust-video-sound"
                aria-label={muted ? "Unmute video" : "Mute video"}
            >
                {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
        </section>
    );
}
