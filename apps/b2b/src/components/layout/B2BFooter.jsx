import { Link } from 'react-router-dom'
import { Linkedin, Globe } from 'lucide-react'
import { SITE, NAV_LINKS } from '../../config/site'

export default function B2BFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-col footer-brand">
            <div className="brand">
              <span className="brand-mark">AMSTELA</span>
              <span className="brand-sub">Fine Jewellery</span>
            </div>
            <p>Surat's premier diamond manufacturer. Supplying certified, hallmarked jewellery to 40+ export markets worldwide.</p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn"><Linkedin size={15} strokeWidth={1.5} /></a>
              <a href={SITE.b2cUrl} target="_blank" rel="noopener noreferrer" aria-label="Consumer Site"><Globe size={15} strokeWidth={1.5} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h6>Trade Portal</h6>
            {NAV_LINKS.map(l => (
              <Link key={l.href} to={l.href}>{l.label}</Link>
            ))}
          </div>

          <div className="footer-col">
            <h6>Certifications</h6>
            {['BIS Hallmarked', 'IGI Certified', 'GIA Standards', 'ISO 9001:2015', 'GJEPC Member'].map(c => (
              <span key={c} style={{ display: 'block', fontSize: 13, padding: '5px 0', color: 'rgba(255,255,255,.62)' }}>{c}</span>
            ))}
          </div>

          <div className="footer-col">
            <h6>Trade Support</h6>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>
            <span style={{ display: 'block', fontSize: 13, padding: '5px 0', color: 'rgba(255,255,255,.62)', lineHeight: 1.6, marginTop: 4 }}>
              {SITE.address}
            </span>
          </div>
        </div>
      </div>

      <div className="footer-bottom wrap">
        <span>Surat · Dubai · Antwerp · Hong Kong</span>
        <span>© {new Date().getFullYear()} Amstela Jewels Pvt. Ltd. Export Division.</span>
      </div>
    </footer>
  )
}
