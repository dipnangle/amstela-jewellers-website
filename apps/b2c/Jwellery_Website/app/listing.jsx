/* ============================================================
   VAIRA — Collections / Product Listing page
   ============================================================ */

const PRICE_BUCKETS = [
  { label: "Under ₹50,000", test: p => p.price < 50000 },
  { label: "₹50,000 – ₹1,00,000", test: p => p.price >= 50000 && p.price < 100000 },
  { label: "₹1,00,000 – ₹3,00,000", test: p => p.price >= 100000 && p.price < 300000 },
  { label: "Above ₹3,00,000", test: p => p.price >= 300000 },
];

function FilterGroup({ title, children, defaultOpen = true }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div className="filter-group">
      <h5 onClick={() => setOpen(o => !o)}>{title}<IcoChevD size={16} style={{ transform: open ? "none" : "rotate(-90deg)", transition: ".25s", color: "var(--body)" }} /></h5>
      {open ? children : null}
    </div>
  );
}

function Check({ label, count, on, onClick }) {
  return (
    <div className={`chk ${on ? "on" : ""}`} onClick={onClick}>
      <span className="box">{on ? <IcoCheck size={12} /> : null}</span>
      {label}{count != null ? <span className="count">{count}</span> : null}
    </div>
  );
}

function Listing() {
  useReveal();
  const [params] = useSearchParams();
  const [sel, setSel] = React.useState({ Category: [], Metal: [], Diamond: [], Occasion: [], Collection: [], Price: [] });
  const [sort, setSort] = React.useState("Featured");
  const [openMobile, setOpenMobile] = React.useState(false);

  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  const toggle = (group, val) => setSel(s => ({ ...s, [group]: s[group].includes(val) ? s[group].filter(v => v !== val) : [...s[group], val] }));
  const clearAll = () => setSel({ Category: [], Metal: [], Diamond: [], Occasion: [], Collection: [], Price: [] });

  const count = (group, val) => PRODUCTS.filter(p => {
    if (group === "Metal") return p.metal === val;
    if (group === "Diamond") return p.diamond === val;
    if (group === "Occasion") return p.occasion === val;
    if (group === "Collection") return p.collection === val;
    return p.category === val;
  }).length;

  let list = PRODUCTS.filter(p => {
    if (sel.Category.length && !sel.Category.includes(p.category)) return false;
    if (sel.Metal.length && !sel.Metal.includes(p.metal)) return false;
    if (sel.Diamond.length && !sel.Diamond.includes(p.diamond)) return false;
    if (sel.Occasion.length && !sel.Occasion.includes(p.occasion)) return false;
    if (sel.Collection.length && !sel.Collection.includes(p.collection)) return false;
    if (sel.Price.length && !PRICE_BUCKETS.filter(b => sel.Price.includes(b.label)).some(b => b.test(p))) return false;
    return true;
  });
  if (sort === "Price: Low to High") list = [...list].sort((a, b) => a.price - b.price);
  if (sort === "Price: High to Low") list = [...list].sort((a, b) => b.price - a.price);
  if (sort === "Top Rated") list = [...list].sort((a, b) => b.rating - a.rating);

  const activeChips = Object.entries(sel).flatMap(([g, vals]) => vals.map(v => ({ g, v })));

  return (
    <main>
      <section className="page-head">
        <div className="bg-velvet bg-noise" />
        <div className="wrap">
          <div className="crumb"><Link to="/">Home</Link><span className="sep">/</span><span>Collections</span></div>
          <h1>The Collection</h1>
          <p className="lede">Browse the full VAIRA atelier — certified diamonds, hallmarked gold, and bridal heirlooms, each made to last generations.</p>
        </div>
      </section>

      <section className="section wrap">
        <div className="listing">
          <aside className={`filters ${openMobile ? "open" : ""}`}>
            <div className="between" style={{ marginBottom: 18 }}>
              <h5 style={{ fontFamily: "var(--serif)", fontSize: 20, color: "var(--ink)" }}>Filter</h5>
              {activeChips.length ? <button className="link-gold" style={{ fontSize: 11 }} onClick={clearAll}>Clear all</button> : null}
            </div>
            <FilterGroup title="Category">
              {FACETS.Category.map(v => <Check key={v} label={v} count={count("Category", v)} on={sel.Category.includes(v)} onClick={() => toggle("Category", v)} />)}
            </FilterGroup>
            <FilterGroup title="Metal">
              <div className="swatch-row" style={{ marginBottom: 14 }}>
                {FACETS.Metal.map(v => (
                  <span key={v} className={`swatch ${sel.Metal.includes(v) ? "on" : ""}`} title={v}
                    style={{ background: METAL_SWATCH[v] }} onClick={() => toggle("Metal", v)} />
                ))}
              </div>
              {FACETS.Metal.map(v => <Check key={v} label={v} count={count("Metal", v)} on={sel.Metal.includes(v)} onClick={() => toggle("Metal", v)} />)}
            </FilterGroup>
            <FilterGroup title="Diamond">
              {FACETS.Diamond.map(v => <Check key={v} label={v} count={count("Diamond", v)} on={sel.Diamond.includes(v)} onClick={() => toggle("Diamond", v)} />)}
            </FilterGroup>
            <FilterGroup title="Price">
              {PRICE_BUCKETS.map(b => <Check key={b.label} label={b.label} on={sel.Price.includes(b.label)} onClick={() => toggle("Price", b.label)} />)}
            </FilterGroup>
            <FilterGroup title="Occasion">
              {FACETS.Occasion.map(v => <Check key={v} label={v} count={count("Occasion", v)} on={sel.Occasion.includes(v)} onClick={() => toggle("Occasion", v)} />)}
            </FilterGroup>
            <FilterGroup title="Collection">
              {FACETS.Collection.map(v => <Check key={v} label={v} count={count("Collection", v)} on={sel.Collection.includes(v)} onClick={() => toggle("Collection", v)} />)}
            </FilterGroup>
          </aside>

          <div>
            <div className="listing-toolbar">
              <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                <button className="btn btn-ghost" style={{ padding: "11px 18px" }} onClick={() => setOpenMobile(o => !o)}>
                  <IcoSettings size={16} /> Filters{activeChips.length ? ` (${activeChips.length})` : ""}
                </button>
                <span className="count">{list.length} pieces</span>
              </div>
              <select className="select" value={sort} onChange={e => setSort(e.target.value)}>
                {["Featured", "Price: Low to High", "Price: High to Low", "Top Rated"].map(s => <option key={s}>{s}</option>)}
              </select>
            </div>

            {activeChips.length ? (
              <div className="chips">
                {activeChips.map(({ g, v }) => (
                  <span className="chip" key={g + v}>{v}<button onClick={() => toggle(g, v)} aria-label="Remove"><IcoClose size={13} /></button></span>
                ))}
              </div>
            ) : null}

            {list.length ? (
              <div className="grid-products">
                {list.map(p => <div className="reveal" key={p.id}><ProductCard p={p} /></div>)}
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "80px 20px", color: "var(--body)" }}>
                <IcoSearch size={36} style={{ color: "var(--border)" }} />
                <p style={{ marginTop: 16, fontFamily: "var(--serif)", fontSize: 22, color: "var(--ink)" }}>No pieces match those filters</p>
                <button className="btn btn-navy" style={{ marginTop: 18 }} onClick={clearAll}>Clear filters</button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { Listing });
