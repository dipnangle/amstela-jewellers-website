import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronRight, Phone } from 'lucide-react'
import { NAV_LINKS, SITE } from '../../config/site'

export default function B2BHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [drawer, setDrawer]     = useState(false)
  const loc = useLocation()
  const navigate = useNavigate()

  const darkHeader = ['/', '/about', '/capabilities', '/certifications'].includes(loc.pathname)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setDrawer(false) }, [loc.pathname])
  useEffect(() => { document.body.style.overflow = drawer ? 'hidden' : '' }, [drawer])

  const solid = scrolled || !darkHeader

  return (
    <>
      <header className={`nav ${solid ? 'is-solid' : 'is-top'}`}>
        <div className="nav-inner">
          <Link to="/" className="brand" aria-label="Amstela Trade Portal">
            <span className="brand-mark">AMSTELA</span>
            <span className="brand-sub">Fine Jewellery</span>
            <span className="brand-badge">B2B Trade Portal</span>
          </Link>

          <nav className="nav-links">
            {NAV_LINKS.map(l => (
              <NavLink
                key={l.href}
                to={l.href}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a href={`tel:${SITE.phone}`} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 600, color: 'inherit' }}>
              <Phone size={14} color="var(--gold)" /> Trade Support
            </a>
            <Link to="/catalogue" className="btn btn-gold" style={{ padding: '10px 20px', fontSize: 11 }}>
              Catalogue
            </Link>
            <button className="burger" onClick={() => setDrawer(true)} aria-label="Open menu">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer-scrim ${drawer ? 'open' : ''}`} onClick={() => setDrawer(false)} />
      <aside className={`drawer ${drawer ? 'open' : ''}`} aria-hidden={!drawer}>
        <div className="drawer-top">
          <Link to="/" className="brand" onClick={() => setDrawer(false)} style={{ color: '#fff' }}>
            <span className="brand-mark" style={{ fontSize: 16 }}>AMSTELA</span>
            <span className="brand-sub" style={{ color: 'var(--champagne)' }}>Trade Portal</span>
          </Link>
          <button onClick={() => setDrawer(false)} aria-label="Close" style={{ color: 'rgba(255,255,255,.7)' }}>
            <X size={22} />
          </button>
        </div>
        <nav className="drawer-nav">
          {NAV_LINKS.map(l => (
            <Link key={l.href} to={l.href} onClick={() => setDrawer(false)}>
              {l.label}<span><ChevronRight size={16} /></span>
            </Link>
          ))}
        </nav>
        <div className="drawer-foot">
          <Link to="/catalogue" className="btn btn-gold btn-block" onClick={() => setDrawer(false)}>
            Access Trade Catalogue
          </Link>
        </div>
      </aside>
    </>
  )
}
