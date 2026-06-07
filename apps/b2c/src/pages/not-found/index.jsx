import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
    return (
        <main className="nf-page">
            <div className="nf-inner">
                {/* Shell image */}
                <img
                    src="/404/openshell.webp"
                    className="nf-shell"
                    alt="Pearl shell"
                />

                {/* Labels */}
                <span className="nf-eyebrow">Page not found</span>
                <div className="nf-number">404</div>
                <div className="nf-divider" />
                <p className="nf-tagline">
                    Looks like this treasure is still hidden.
                </p>

                <Link to="/" className="btn btn-navy btn-lg nf-btn">
                    <ArrowLeft size={16} />
                    Return Home
                </Link>
            </div>
        </main>
    );
}
