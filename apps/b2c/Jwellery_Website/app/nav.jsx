/* ============================================================
   VAIRA — Navigation: announce bar, navbar, mega menu, mobile drawer
   ============================================================ */

function Brand({ onClick }) {
  return (
    <RLink to="/" className="brand" onClick={onClick} aria-label="VAIRA home">
      <span className="brand-mark">VAIRA</span>
      <span className="brand-sub">Fine Jewellery</span>
    </RLink>
  );
}

const MEGA = {
  "Shop by Category": ["Necklaces", "Rings", "Earrings", "Bracelets", "Mangalsutra", "Bridal Sets"],
  "Shop by Metal": ["Platinum", "White Gold", "Yellow Gold", "Rose Gold", "22K Heritage Gold"],
  "Collections": ["The Solitaire Edit", "Aurum — 22K Gold", "Vivaha Bridal", "Everyday Fine", "High Jewellery"],
};

function MegaMenu({ open, onClose }) {
  const nav = useNav();
  const go = (to) => { onClose(); nav(to); };
  return (
    <div className={`mega ${open ? "open" : ""}`} onMouseLeave={onClose}>
      <div className="mega-grid">
        {Object.entries(MEGA).map(([head, items]) => (
          <div className="mega-col" key={head}>
            <h5>{head}</h5>
            {items.map(it => <a key={it} onClick={() => go("/collections")}>{it}</a>)}
          </div>
        ))}
        <div className="mega-feature">
          <Placeholder glyph="diamond" tone="dark" label="Featured" />
          <div className="cap">
            <b>The Solitaire Edit</b>
            <span>GIA-certified, hand-set brilliance.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Navbar({ darkHeader }) {
  const { cartCount, wish, setCartOpen, setSearchOpen } = useShop();
  const [scrolled, setScrolled] = React.useState(false);
  const [mega, setMega] = React.useState(false);
  const [drawer, setDrawer] = React.useState(false);
  const nav = useNav();
  const loc = useLocation();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  React.useEffect(() => { setDrawer(false); setMega(false); }, [loc.pathname]);
  React.useEffect(() => { document.body.style.overflow = drawer ? "hidden" : ""; }, [drawer]);

  const solid = scrolled || !darkHeader;

  return (
    <React.Fragment>
      <header className={`nav ${solid ? "is-solid" : "is-top"}`}>
        <div className="announce">Complimentary insured shipping worldwide · <b>Book a private consultation</b></div>
        <div className="nav-inner">
          <nav className="nav-left">
            <span className="nav-link has-mega" onMouseEnter={() => setMega(true)} onClick={() => nav("/collections")}>Collections</span>
            <RLink className="nav-link" to="/collections">Diamond</RLink>
            <RLink className="nav-link" to="/collections">Gold</RLink>
            <RLink className="nav-link" to="/collections">Bridal</RLink>
          </nav>
          <button className="burger" onClick={() => setDrawer(true)} aria-label="Open menu"><IcoMenu size={24} /></button>
          <Brand />
          <div className="nav-right">
            <nav className="nav-left" style={{ marginRight: 8 }}>
              <RLink className="nav-link" to="/about">About</RLink>
              <RLink className="nav-link" to="/manufacturing">Manufacturing</RLink>
              <RLink className="nav-link" to="/contact">Contact</RLink>
            </nav>
            <button className="nav-ico" onClick={() => setSearchOpen(true)} aria-label="Search"><IcoSearch size={20} /></button>
            <button className="nav-ico" onClick={() => nav("/collections")} aria-label="Wishlist">
              <IcoHeart size={20} />{wish.length ? <span className="badge">{wish.length}</span> : null}
            </button>
            <button className="nav-ico" aria-label="Account"><IcoUser size={20} /></button>
            <button className="nav-ico" onClick={() => setCartOpen(true)} aria-label="Bag">
              <IcoBag size={20} />{cartCount ? <span className="badge">{cartCount}</span> : null}
            </button>
          </div>
        </div>
        <MegaMenu open={mega} onClose={() => setMega(false)} />
      </header>

      {/* mobile drawer */}
      <div className={`drawer-scrim ${drawer ? "open" : ""}`} onClick={() => setDrawer(false)} />
      <aside className={`drawer ${drawer ? "open" : ""}`} aria-hidden={!drawer}>
        <div className="drawer-top">
          <Brand onClick={() => setDrawer(false)} />
          <button className="nav-ico" onClick={() => setDrawer(false)} aria-label="Close"><IcoClose size={24} /></button>
        </div>
        <nav className="drawer-nav">
          {[["Collections", "/collections"], ["Diamond Jewellery", "/collections"], ["Gold Jewellery", "/collections"],
            ["Bridal", "/collections"], ["About Us", "/about"], ["Manufacturing", "/manufacturing"], ["Contact", "/contact"]]
            .map(([l, t]) => <RLink key={l} to={t} onClick={() => setDrawer(false)}>{l}<span><IcoChevR size={18} /></span></RLink>)}
        </nav>
        <div className="drawer-foot">
          <button className="nav-ico" onClick={() => { setDrawer(false); setSearchOpen(true); }}><IcoSearch size={22} /></button>
          <button className="nav-ico" onClick={() => { setDrawer(false); nav("/collections"); }}><IcoHeart size={22} /></button>
          <button className="nav-ico"><IcoUser size={22} /></button>
          <button className="nav-ico" onClick={() => { setDrawer(false); setCartOpen(true); }}><IcoBag size={22} /></button>
        </div>
      </aside>
    </React.Fragment>
  );
}

Object.assign(window, { Navbar, Brand });
