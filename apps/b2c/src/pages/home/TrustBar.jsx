const ITEMS = [
    {
        icon: (
            <svg
                width="26"
                height="26"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M32 4c2 0 3 2 5 3s5 0 7 1c2 2 2 5 4 6 2 2 5 2 6 4s0 5 1 7 5 4 5 7-4 5-5 7 0 5-1 7-4 2-6 4c-2 1-2 4-4 6-2 1-5 0-7 1s-3 3-5 3-3-2-5-3-5 0-7-1c-2-2-2-5-4-6-2-2-5-2-6-4s0-5-1-7-5-4-5-7 4-5 5-7 0-5 1-7 4-2 6-4c2-1 2-4 4-6 2-1 5 0 7-1s3-3 5-3Z"
                    fill="#d4a84b"
                    stroke="#b8862a"
                    strokeWidth="1.5"
                />
                <circle
                    cx="32"
                    cy="32"
                    r="22"
                    stroke="#fff"
                    strokeOpacity=".75"
                    strokeWidth="1.5"
                />
                <circle cx="32" cy="32" r="20" stroke="#fff" strokeOpacity=".35" />
                <text
                    x="32"
                    y="24"
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="8"
                    fontWeight="700"
                    fontFamily="DM Sans, Arial, sans-serif"
                    letterSpacing="1"
                >
                    BIS
                </text>
                <path
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    d="M20 30h8"
                />
                <circle cx="32" cy="30" r="1.4" fill="#fff" />
                <path
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    d="M36 30h8"
                />
                <path
                    d="m24 39 6 6 12-12"
                    stroke="#fff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
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
        <section className="trust trust-section section">
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
