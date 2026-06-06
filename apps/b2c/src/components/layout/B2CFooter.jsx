import { Link } from 'react-router-dom'
import { Instagram, Facebook, Youtube } from 'lucide-react'

function PinterestIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
    </svg>
  )
}
import { SITE, FOOTER_LINKS } from '../../config/site'

export default function B2CFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-col footer-brand">
            <div className="brand">
              <span className="brand-mark">AMSTELA</span>
              <span className="brand-sub">Fine Jewellery</span>
            </div>
            <p>Surat's premier diamond destination since 1999. Ethically sourced, certified masterpieces crafted for every milestone.</p>
            <div className="footer-social">
              {[
                { id: 'ig', href: SITE.socials.instagram, Icon: Instagram },
                { id: 'fb', href: SITE.socials.facebook,  Icon: Facebook  },
                { id: 'yt', href: SITE.socials.youtube,   Icon: Youtube   },
                { id: 'pn', href: SITE.socials.pinterest, Icon: PinterestIcon },
              ].map(({ id, href, Icon }) => (
                <a key={id} href={href} aria-label={Icon.displayName}>
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h6>Collections</h6>
            {FOOTER_LINKS.collections.map((l, i) => (
              <Link key={`col-${i}`} to={l.href}>{l.label}</Link>
            ))}
          </div>

          <div className="footer-col">
            <h6>The House</h6>
            {FOOTER_LINKS.company.map((l, i) => (
              l.external
                ? <a key={`house-${i}`} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                : <Link key={`house-${i}`} to={l.href}>{l.label}</Link>
            ))}
          </div>

          <div className="footer-col">
            <h6>Certifications</h6>
            {FOOTER_LINKS.certifications.map((cert, i) => (
              <span key={`cert-${i}`} style={{ display: 'block', fontSize: 13, padding: '6px 0', color: 'rgba(255,255,255,.65)' }}>{cert}</span>
            ))}
          </div>

          <div className="footer-col">
            <h6>Boutique</h6>
            <span style={{ display: 'block', fontSize: 13, padding: '6px 0', color: 'rgba(255,255,255,.65)', lineHeight: 1.6 }}>{SITE.address}</span>
            <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom wrap">
        <span>© {new Date().getFullYear()} Amstela Jewels Pvt. Ltd. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 24 }}>
          <a key="f-priv" href="#">Privacy</a>
          <a key="f-terms" href="#">Terms</a>
          <a key="f-ship" href="#">Shipping</a>
        </div>
      </div>
    </footer>
  )
}
