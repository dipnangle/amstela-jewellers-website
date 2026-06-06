/* ============================================================
   VAIRA — Product Detail page (PDP)
   ============================================================ */

const SIZES = ["6", "8", "10", "12", "14", "16"];

function Pdp() {
  useReveal();
  const { id } = useParams();
  const p = findProduct(id);
  const { addToCart, toggleWish, wish } = useShop();
  const nav = useNav();

  const [active, setActive] = React.useState(0);
  const [metal, setMetal] = React.useState(p.metal);
  const [size, setSize] = React.useState(p.category === "Rings" ? "10" : "");
  const [qty, setQty] = React.useState(1);
  const [tab, setTab] = React.useState("Description");
  const [showSticky, setShowSticky] = React.useState(false);
  const ctaRef = React.useRef();

  React.useEffect(() => { window.scrollTo(0, 0); setActive(0); setMetal(p.metal); setQty(1); setTab("Description"); }, [id]);

  React.useEffect(() => {
    const onScroll = () => { if (ctaRef.current) setShowSticky(ctaRef.current.getBoundingClientRect().bottom < 0); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const on = wish.includes(p.id);
  const add = () => addToCart(p, { metal, size }, qty);
  const thumbs = [p.glyph, "diamond", p.glyph, "ring"];

  const TABS = {
    Description: (
      <div style={{ maxWidth: 760, color: "var(--body)", fontSize: 15.5, lineHeight: 1.8 }}>
        <p>The {p.name} is a study in considered luxury — hand-crafted in {metal.toLowerCase()} by VAIRA's master artisans and finished to a flawless mirror polish. {p.diamond !== "None" ? `Each ${p.diamond.toLowerCase()} diamond is hand-selected for exceptional fire and brilliance, GIA-certified and conflict-free.` : "Solid, hallmarked metal ensures enduring weight and warmth that only grows more beautiful with wear."}</p>
        <p style={{ marginTop: 16 }}>Designed to move effortlessly from milestone to everyday, it arrives in signature VAIRA packaging with a certificate of authenticity and a lifetime care commitment.</p>
      </div>
    ),
    Specifications: (
      <table className="spec-table" style={{ maxWidth: 620 }}>
        <tbody>
          {[["Metal", `${metal} (hallmarked)`], ["Purity", metal.includes("Gold") ? "18K / 22K" : "950 Platinum"], ["Gross Weight", "4.2 – 6.8 g"], ["Category", p.category], ["Collection", `${p.collection} Collection`], ["Finish", "Hand-polished mirror finish"], ["SKU", `VR-${p.id.padStart(4, "0")}`]].map(([k, v]) => (
            <tr key={k}><td>{k}</td><td>{v}</td></tr>
          ))}
        </tbody>
      </table>
    ),
    "Diamond Details": (
      <table className="spec-table" style={{ maxWidth: 620 }}>
        <tbody>
          {p.diamond !== "None" ? [["Setting", p.diamond], ["Certification", "GIA / IGI graded"], ["Carat (total)", "0.45 – 1.20 ct"], ["Cut", "Excellent"], ["Colour", "D – F (Colourless)"], ["Clarity", "VVS – VS"], ["Origin", "Conflict-free, ethically sourced"]].map(([k, v]) => (
            <tr key={k}><td>{k}</td><td>{v}</td></tr>
          )) : <tr><td colSpan="2" style={{ color: "var(--body)" }}>This piece is crafted in solid hallmarked metal without diamonds.</td></tr>}
        </tbody>
      </table>
    ),
    Shipping: (
      <div style={{ maxWidth: 700 }}>
        {[[IcoTruck, "Complimentary insured shipping", "Fully insured, signature-required delivery worldwide to 40+ countries."],
          [IcoRotate, "15-day returns", "Unworn pieces may be returned within 15 days for exchange or refund."],
          [IcoShield2, "Lifetime warranty", "Manufacturing warranty with free cleaning and inspection for life."]].map(([Ic, t, s], i) => (
            <div key={i} style={{ display: "flex", gap: 16, padding: "18px 0", borderBottom: "1px solid var(--border)" }}>
              <span style={{ color: "var(--gold)" }}><Ic size={26} /></span>
              <div><b style={{ color: "var(--ink)", display: "block", marginBottom: 4 }}>{t}</b><span style={{ color: "var(--body)", fontSize: 14 }}>{s}</span></div>
            </div>
        ))}
      </div>
    ),
    Reviews: (
      <div style={{ maxWidth: 760 }}>
        <div style={{ display: "flex", gap: 30, alignItems: "center", marginBottom: 28, flexWrap: "wrap" }}>
          <div><div style={{ fontFamily: "var(--serif)", fontSize: 52, color: "var(--ink)", lineHeight: 1 }}>{p.rating.toFixed(1)}</div><Stars n={p.rating} size={16} /><div style={{ fontSize: 13, color: "var(--body)", marginTop: 4 }}>{p.reviews} reviews</div></div>
          <div style={{ flex: 1, minWidth: 200 }}>
            {[5, 4, 3, 2, 1].map(s => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <span style={{ fontSize: 12, color: "var(--body)", width: 10 }}>{s}</span>
                <div style={{ flex: 1, height: 6, background: "var(--offwhite)", borderRadius: 3, overflow: "hidden" }}>
                  <div style={{ width: `${s === 5 ? 82 : s === 4 ? 14 : 2}%`, height: "100%", background: "var(--gold)" }} /></div>
              </div>
            ))}
          </div>
        </div>
        {[["Ritu S.", "Exceeded every expectation", "Even more stunning in person. The brilliance is unreal and the finish is flawless."],
          ["Arjun M.", "Heirloom quality", "Bought for our anniversary. Impeccable craftsmanship and the packaging felt like an event."]].map(([n, t, q], i) => (
          <div key={i} style={{ padding: "20px 0", borderTop: "1px solid var(--border)" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}><b style={{ color: "var(--ink)" }}>{t}</b><Stars n={5} size={14} /></div>
            <p style={{ color: "var(--body)", margin: "8px 0", fontSize: 14.5 }}>{q}</p>
            <span style={{ fontSize: 12, color: "var(--gold)", letterSpacing: ".1em" }}>{n} · Verified buyer</span>
          </div>
        ))}
      </div>
    ),
  };

  return (
    <main style={{ paddingTop: "var(--nav-h)" }}>
      <div className="wrap" style={{ paddingTop: 26 }}>
        <div className="crumb" style={{ color: "var(--body)" }}>
          <Link to="/">Home</Link><span className="sep">/</span>
          <Link to="/collections">Collections</Link><span className="sep">/</span>
          <span style={{ color: "var(--ink)" }}>{p.name}</span>
        </div>
      </div>

      <section className="wrap" style={{ paddingTop: 28, paddingBottom: 40 }}>
        <div className="pdp">
          <div className="pdp-gallery">
            <div className="pdp-thumbs">
              {thumbs.map((g, i) => (
                <div key={i} className={`pdp-thumb ${active === i ? "on" : ""}`} onClick={() => setActive(i)}>
                  <Placeholder glyph={g} tone={p.tone} />
                </div>
              ))}
            </div>
            <div className="pdp-main zoom">
              <span className="pdp-360"><IcoRotate size={14} /> 360° View</span>
              <Placeholder glyph={thumbs[active]} tone={p.tone} label="Product Photography" />
              <span className="pdp-zoomtag"><IcoSearch size={14} /> Hover to zoom</span>
            </div>
          </div>

          <div className="pdp-info">
            <div className="cat-name">{p.category} · {p.collection} Collection</div>
            <h1>{p.name}</h1>
            <div className="pdp-rate">
              <Stars n={p.rating} size={16} /><span>{p.rating.toFixed(1)} · {p.reviews} reviews</span>
            </div>
            <div className="pdp-price">{p.was ? <span className="was">{inr(p.was)}</span> : null}{inr(p.price)}
              <span style={{ fontSize: 13, color: "var(--body)", fontFamily: "var(--sans)", marginLeft: 12 }}>incl. taxes</span></div>

            <div className="opt-row">
              <div className="lbl">Metal <span style={{ color: "var(--body)", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>{metal}</span></div>
              <div className="opt-pills">
                {FACETS.Metal.map(m => (
                  <span key={m} className={`opt-pill ${metal === m ? "on" : ""}`} onClick={() => setMetal(m)}>
                    <span style={{ display: "inline-block", width: 12, height: 12, borderRadius: "50%", background: METAL_SWATCH[m], marginRight: 8, verticalAlign: "middle", border: "1px solid rgba(0,0,0,.1)" }} />{m}
                  </span>
                ))}
              </div>
            </div>

            {p.category === "Rings" ? (
              <div className="opt-row">
                <div className="lbl">Ring Size <a style={{ color: "var(--gold)", fontWeight: 600, textTransform: "none", letterSpacing: 0, cursor: "pointer" }}>Size guide</a></div>
                <div className="opt-pills">
                  {SIZES.map(s => <span key={s} className={`opt-pill ${size === s ? "on" : ""}`} onClick={() => setSize(s)}>{s}</span>)}
                </div>
              </div>
            ) : null}

            <div className="opt-row">
              <div className="lbl">Quantity</div>
              <div className="qty">
                <button onClick={() => setQty(q => Math.max(1, q - 1))}><IcoMinus size={16} /></button>
                <span>{qty}</span>
                <button onClick={() => setQty(q => q + 1)}><IcoPlus size={16} /></button>
              </div>
            </div>

            <div className="pdp-cta" ref={ctaRef}>
              <Btn variant="gold" lg className="btn-block" onClick={add}><IcoBag size={17} /> Add to Bag — {inr(p.price * qty)}</Btn>
              <button className={`wish ${on ? "on" : ""}`} style={{ position: "static", width: 56, height: 56, borderRadius: 2, border: "1px solid var(--border)", flex: "none" }} onClick={() => toggleWish(p)} aria-label="Wishlist">
                <IcoHeart size={20} filled={on} />
              </button>
            </div>
            <Btn variant="navy" className="btn-block" onClick={() => nav("/contact")}>Book a Private Viewing</Btn>

            <div className="pdp-assure">
              {[[IcoCertified, "GIA Certified"], [IcoTruck, "Free insured shipping"], [IcoRotate, "15-day returns"], [IcoShield2, "Lifetime warranty"]].map(([Ic, t]) => (
                <div className="a" key={t}><Ic size={22} /> {t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* tabs */}
      <section className="wrap section" style={{ paddingTop: 20 }}>
        <div className="tabs">
          {Object.keys(TABS).map(t => <span key={t} className={`tab ${tab === t ? "on" : ""}`} onClick={() => setTab(t)}>{t}</span>)}
        </div>
        {TABS[tab]}
      </section>

      {/* related */}
      <section className="section wrap" style={{ paddingTop: 0 }}>
        <SectionHead center eyebrow="You May Also Love" title="Complete the Look" />
        <div className="grid-products" style={{ marginTop: 48 }}>
          {related(p, 4).map(rp => <div className="reveal" key={rp.id}><ProductCard p={rp} /></div>)}
        </div>
      </section>

      {/* sticky add-to-cart */}
      <div className={`sticky-buy ${showSticky ? "show" : ""}`}>
        <div className="in">
          <div className="sb-prod">
            <Placeholder glyph={p.glyph} tone={p.tone} />
            <div><b>{p.name}</b><span>{inr(p.price)} · {metal}</span></div>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div className="qty" style={{ }}>
              <button onClick={() => setQty(q => Math.max(1, q - 1))}><IcoMinus size={15} /></button>
              <span>{qty}</span>
              <button onClick={() => setQty(q => q + 1)}><IcoPlus size={15} /></button>
            </div>
            <Btn variant="gold" onClick={add}><IcoBag size={16} /> Add to Bag</Btn>
          </div>
        </div>
      </div>
    </main>
  );
}

Object.assign(window, { Pdp });
