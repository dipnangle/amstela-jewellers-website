/* ============================================================
   VAIRA — shop state (cart, wishlist, search) + shared shop UI
   ============================================================ */
const ShopCtx = React.createContext(null);
const useShop = () => React.useContext(ShopCtx);

function ShopProvider({ children }) {
    const load = (k, d) => {
        try {
            return JSON.parse(localStorage.getItem(k)) ?? d;
        } catch {
            return d;
        }
    };
    const [cart, setCart] = React.useState(() => load("vaira_cart", []));
    const [wish, setWish] = React.useState(() => load("vaira_wish", []));
    const [cartOpen, setCartOpen] = React.useState(false);
    const [searchOpen, setSearchOpen] = React.useState(false);
    const [toasts, setToasts] = React.useState([]);

    React.useEffect(
        () => localStorage.setItem("vaira_cart", JSON.stringify(cart)),
        [cart],
    );
    React.useEffect(
        () => localStorage.setItem("vaira_wish", JSON.stringify(wish)),
        [wish],
    );

    const toast = (msg) => {
        const id = Date.now() + Math.random();
        setToasts((t) => [...t, { id, msg }]);
        setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2800);
    };

    const addToCart = (p, opts = {}, qty = 1) => {
        const key = p.id + (opts.metal || "") + (opts.size || "");
        setCart((c) => {
            const ex = c.find((i) => i.key === key);
            if (ex)
                return c.map((i) =>
                    i.key === key ? { ...i, qty: i.qty + qty } : i,
                );
            return [
                ...c,
                {
                    key,
                    id: p.id,
                    name: p.name,
                    price: p.price,
                    glyph: p.glyph,
                    tone: p.tone,
                    category: p.category,
                    metal: opts.metal || p.metal,
                    size: opts.size || "",
                    qty,
                },
            ];
        });
        toast(`${p.name} added to bag`);
        setCartOpen(true);
    };
    const setQty = (key, q) =>
        setCart((c) =>
            q <= 0
                ? c.filter((i) => i.key !== key)
                : c.map((i) => (i.key === key ? { ...i, qty: q } : i)),
        );
    const removeItem = (key) => setCart((c) => c.filter((i) => i.key !== key));
    const toggleWish = (p) =>
        setWish((w) => {
            if (w.includes(p.id)) {
                toast(`${p.name} removed from wishlist`);
                return w.filter((x) => x !== p.id);
            }
            toast(`${p.name} saved to wishlist`);
            return [...w, p.id];
        });

    const cartCount = cart.reduce((n, i) => n + i.qty, 0);
    const cartTotal = cart.reduce((n, i) => n + i.qty * i.price, 0);

    const val = {
        cart,
        wish,
        cartOpen,
        setCartOpen,
        searchOpen,
        setSearchOpen,
        toasts,
        toast,
        addToCart,
        setQty,
        removeItem,
        toggleWish,
        cartCount,
        cartTotal,
    };
    return <ShopCtx.Provider value={val}>{children}</ShopCtx.Provider>;
}

/* ---------- product card (used in grids + carousels) ---------- */
function ProductCard({ p, compact }) {
    const { addToCart, toggleWish, wish } = useShop();
    const nav = useNavigate();
    const on = wish.includes(p.id);
    const go = () => nav(`/product/${p.id}`);
    return (
        <article className="prod-card">
            <div className="prod-thumb zoom">
                {p.badge ? (
                    <span
                        className={`prod-badge ${p.badge === "Sale" ? "sale" : ""}`}
                    >
                        {p.badge}
                    </span>
                ) : null}
                <button
                    className={`wish ${on ? "on" : ""}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleWish(p);
                    }}
                    aria-label="Add to wishlist"
                >
                    <IcoHeart size={17} filled={on} />
                </button>
                <div
                    onClick={go}
                    style={{
                        position: "absolute",
                        inset: 0,
                        cursor: "pointer",
                    }}
                >
                    <Placeholder glyph={p.glyph} tone={p.tone} />
                </div>
                <div className="prod-actions">
                    <button className="btn btn-navy" onClick={go}>
                        <IcoEye size={15} /> Quick view
                    </button>
                    <button
                        className="btn btn-gold"
                        onClick={() => addToCart(p)}
                    >
                        <IcoBag size={15} /> Add
                    </button>
                </div>
            </div>
            <div className="prod-info">
                <div className="cat-name">{p.category}</div>
                <h4 onClick={go} style={{ cursor: "pointer" }}>
                    {p.name}
                </h4>
                {!compact ? <Stars n={p.rating} /> : null}
                <div className="prod-price">
                    {p.was ? <span className="was">{inr(p.was)}</span> : null}
                    {inr(p.price)}
                </div>
            </div>
        </article>
    );
}

/* ---------- mini cart drawer ---------- */
function MiniCart() {
    const { cart, cartOpen, setCartOpen, setQty, removeItem, cartTotal } =
        useShop();
    const nav = useNavigate();
    return (
        <React.Fragment>
            <div
                className={`cart-scrim ${cartOpen ? "open" : ""}`}
                onClick={() => setCartOpen(false)}
            />
            <aside
                className={`cart-panel ${cartOpen ? "open" : ""}`}
                aria-hidden={!cartOpen}
            >
                <div className="cart-head">
                    <h3>
                        Your Bag{" "}
                        <span
                            style={{
                                color: "var(--gold)",
                                fontFamily: "var(--sans)",
                                fontSize: 15,
                            }}
                        >
                            ({cart.reduce((n, i) => n + i.qty, 0)})
                        </span>
                    </h3>
                    <button
                        className="nav-ico"
                        onClick={() => setCartOpen(false)}
                        aria-label="Close"
                    >
                        <IcoClose size={22} />
                    </button>
                </div>
                {cart.length === 0 ? (
                    <div className="cart-empty">
                        <IcoBag size={40} style={{ color: "var(--border)" }} />
                        <div>
                            <b
                                style={{
                                    fontFamily: "var(--serif)",
                                    fontSize: 20,
                                    color: "var(--ink)",
                                }}
                            >
                                Your bag is empty
                            </b>
                            <p style={{ marginTop: 8 }}>
                                Discover pieces made to be treasured.
                            </p>
                        </div>
                        <button
                            className="btn btn-navy"
                            onClick={() => {
                                setCartOpen(false);
                                nav("/collections");
                            }}
                        >
                            Explore collections
                        </button>
                    </div>
                ) : (
                    <React.Fragment>
                        <div className="cart-items">
                            {cart.map((i) => (
                                <div className="cart-item" key={i.key}>
                                    <Placeholder
                                        glyph={i.glyph}
                                        tone={i.tone}
                                    />
                                    <div>
                                        <h5>{i.name}</h5>
                                        <div className="cmeta">
                                            {i.metal}
                                            {i.size ? ` · Size ${i.size}` : ""}
                                        </div>
                                        <div className="cqty">
                                            <button
                                                onClick={() =>
                                                    setQty(i.key, i.qty - 1)
                                                }
                                                aria-label="Decrease"
                                            >
                                                <IcoMinus size={13} />
                                            </button>
                                            <span>{i.qty}</span>
                                            <button
                                                onClick={() =>
                                                    setQty(i.key, i.qty + 1)
                                                }
                                                aria-label="Increase"
                                            >
                                                <IcoPlus size={13} />
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="cprice">
                                            {inr(i.price * i.qty)}
                                        </div>
                                        <button
                                            className="crm"
                                            onClick={() => removeItem(i.key)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="cart-foot">
                            <div className="line">
                                <span>Subtotal</span>
                                <b style={{ color: "var(--ink)" }}>
                                    {inr(cartTotal)}
                                </b>
                            </div>
                            <div className="line">
                                <span>Shipping</span>
                                <span style={{ color: "var(--gold)" }}>
                                    Complimentary, insured
                                </span>
                            </div>
                            <div
                                className="total"
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <span>Total</span>
                                <span>{inr(cartTotal)}</span>
                            </div>
                            <button
                                className="btn btn-gold btn-block btn-lg"
                                onClick={() => {
                                    setCartOpen(false);
                                }}
                            >
                                Secure Checkout
                            </button>
                            <button
                                className="btn btn-ghost btn-block"
                                style={{ marginTop: 10 }}
                                onClick={() => setCartOpen(false)}
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </React.Fragment>
                )}
            </aside>
        </React.Fragment>
    );
}

/* ---------- search overlay ---------- */
function SearchOverlay() {
    const { searchOpen, setSearchOpen } = useShop();
    const [q, setQ] = React.useState("");
    const nav = useNavigate();
    const ref = React.useRef();
    React.useEffect(() => {
        if (searchOpen && ref.current)
            setTimeout(() => ref.current.focus(), 250);
    }, [searchOpen]);
    const results =
        q.length > 1
            ? PRODUCTS.filter((p) =>
                  (p.name + p.category + p.collection)
                      .toLowerCase()
                      .includes(q.toLowerCase()),
              ).slice(0, 5)
            : [];
    const goto = (to) => {
        setSearchOpen(false);
        setQ("");
        nav(to);
    };
    return (
        <div className={`search-overlay ${searchOpen ? "open" : ""}`}>
            <button
                className="nav-ico"
                style={{
                    position: "absolute",
                    top: 28,
                    right: 32,
                    color: "var(--ink)",
                }}
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
            >
                <IcoClose size={26} />
            </button>
            <div className="search-box">
                <IcoSearch size={28} style={{ color: "var(--gold)" }} />
                <input
                    ref={ref}
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Search rings, solitaires, bridal…"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") goto("/collections");
                    }}
                />
            </div>
            {results.length ? (
                <div style={{ width: "min(680px,90vw)", marginTop: 26 }}>
                    {results.map((p) => (
                        <div
                            key={p.id}
                            onClick={() => goto(`/product/${p.id}`)}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 16,
                                padding: "12px 0",
                                borderBottom: "1px solid var(--border)",
                                cursor: "pointer",
                            }}
                        >
                            <Placeholder
                                glyph={p.glyph}
                                tone={p.tone}
                                style={{ width: 48, height: 54 }}
                            />
                            <div style={{ flex: 1 }}>
                                <b
                                    style={{
                                        fontFamily: "var(--serif)",
                                        color: "var(--ink)",
                                        fontSize: 17,
                                    }}
                                >
                                    {p.name}
                                </b>
                                <div
                                    style={{
                                        fontSize: 12.5,
                                        color: "var(--body)",
                                    }}
                                >
                                    {p.category}
                                </div>
                            </div>
                            <span
                                style={{ color: "var(--ink)", fontWeight: 600 }}
                            >
                                {inr(p.price)}
                            </span>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="search-sugg">
                    {[
                        "Solitaire rings",
                        "Bridal sets",
                        "Mangalsutra",
                        "Diamond necklaces",
                        "22K gold",
                    ].map((s) => (
                        <a key={s} onClick={() => goto("/collections")}>
                            {s}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

/* ---------- toasts ---------- */
function Toasts() {
    const { toasts } = useShop();
    return (
        <div className="toast-wrap">
            {toasts.map((t) => (
                <div className="toast" key={t.id}>
                    <IcoCheck size={18} />
                    {t.msg}
                </div>
            ))}
        </div>
    );
}

Object.assign(window, {
    ShopCtx,
    useShop,
    ShopProvider,
    ProductCard,
    MiniCart,
    SearchOverlay,
    Toasts,
});
