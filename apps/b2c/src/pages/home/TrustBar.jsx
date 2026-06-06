const ITEMS = [
    {
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                width="26"
                height="26"
            >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
        ),
        title: "BIS Hallmarked",
        sub: "Government certified purity",
    },
    {
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                width="26"
                height="26"
            >
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="M7 10h10M7 14h10M7 18h6" />
            </svg>
        ),
        title: "IGI Certified",
        sub: "International diamond grading",
    },
    {
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                width="26"
                height="26"
            >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: "GIA Standards",
        sub: "World's finest grading",
    },
    {
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                width="26"
                height="26"
            >
                <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
        ),
        title: "Insured Shipping",
        sub: "Across India, fully covered",
    },
];

export default function TrustBar() {
    return (
        <section className="trust">
            <div className="wrap trust-grid">
                {ITEMS.map((it) => (
                    <div className="trust-cell" key={it.title}>
                        <span className="ic">{it.icon}</span>
                        <div>
                            <b>{it.title}</b>
                            <span>{it.sub}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
