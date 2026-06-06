import { useEffect, useRef, useState } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import productsData from "../../config/content/products.json";

const QUICK_LINKS = [
    { label: "Bridal Solitaires", href: "/collections/bridal-solitaires" },
    { label: "Diamond Earrings", href: "/collections/diamond-earrings" },
    { label: "Mangalsutra", href: "/collections/mangalsutra" },
    { label: "Statement Rings", href: "/collections/statement-rings" },
];

export default function SearchOverlay({ open, onClose }) {
    const [query, setQuery] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        if (open) {
            setTimeout(() => inputRef.current?.focus(), 80);
            document.body.style.overflow = "hidden";
        } else {
            setQuery("");
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    useEffect(() => {
        const fn = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", fn);
        return () => window.removeEventListener("keydown", fn);
    }, [onClose]);

    const results =
        query.length > 1
            ? productsData
                  .filter(
                      (p) =>
                          p.name.toLowerCase().includes(query.toLowerCase()) ||
                          p.collectionName
                              .toLowerCase()
                              .includes(query.toLowerCase()) ||
                          p.metal.toLowerCase().includes(query.toLowerCase()),
                  )
                  .slice(0, 4)
            : [];

    if (!open) return null;

    return (
        <div
            className="search-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Search"
        >
            {/* Backdrop */}
            <div className="search-backdrop" onClick={onClose} />

            {/* Panel */}
            <div className="search-panel">
                {/* Input row */}
                <div className="search-row">
                    <Search
                        size={20}
                        className="search-icon-prefix"
                        strokeWidth={1.5}
                    />
                    <input
                        ref={inputRef}
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search rings, earrings, bridal, gold…"
                        className="search-input"
                        autoComplete="off"
                    />
                    <button
                        className="search-close"
                        onClick={onClose}
                        aria-label="Close search"
                    >
                        <X size={20} strokeWidth={1.5} />
                    </button>
                </div>

                <div className="search-body">
                    {results.length > 0 ? (
                        <div className="search-results">
                            <p className="search-label">
                                Results for "{query}"
                            </p>
                            {results.map((p) => (
                                <Link
                                    key={p.id}
                                    to={`/product/${p.slug}`}
                                    className="search-result-row"
                                    onClick={onClose}
                                >
                                    <img
                                        src={p.images[0]}
                                        alt={p.name}
                                        className="search-thumb"
                                    />
                                    <div>
                                        <p className="search-result-collection">
                                            {p.collectionName}
                                        </p>
                                        <p className="search-result-name">
                                            {p.name}
                                        </p>
                                        <p className="search-result-meta">
                                            {p.metal} · {p.carat}
                                        </p>
                                    </div>
                                    <ArrowRight
                                        size={14}
                                        className="search-result-arrow"
                                        strokeWidth={1.5}
                                    />
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="search-empty">
                            <p className="search-label">Popular searches</p>
                            <div className="search-quick">
                                {QUICK_LINKS.map((l) => (
                                    <Link
                                        key={l.href}
                                        to={l.href}
                                        className="search-quick-link"
                                        onClick={onClose}
                                    >
                                        {l.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
