import { Link } from 'react-router-dom'
import { ArrowRight, Factory, ShieldCheck, Globe, BadgeCheck } from 'lucide-react'
import { useSiteConfig } from '../../context/SiteConfigContext'
import { useIntersection } from '@jewel/shared/hooks/useIntersection.js'

const CAPS = [
  { Icon: Factory,    title: 'In-House Production',  desc: 'Direct access to our 15,000 sq ft Surat facility — from rough casting to hallmarked masterpiece.' },
  { Icon: ShieldCheck,title: 'OEM & Private Label',  desc: 'Scale your brand with our certified craftsmanship. NDA-protected design development.' },
  { Icon: Globe,      title: 'Global Export',         desc: 'Efficient logistics supplying 40+ countries. GJEPC member with full compliance support.' },
]

export default function HomePage() {
  const { config } = useSiteConfig()
  const [ref, visible] = useIntersection()

  if (!config) return null
  const { hero, stats } = config

  return (
    <main>
      {/* Hero */}
      <section className="hero bg-velvet bg-noise">
        <div className="hero-bg" style={{ position: 'absolute', inset: 0 }}>
          <img src={hero.image} alt="Amstela manufacturing" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: .22 }} />
        </div>
        <div className="hero-copy reveal in">
          <span className="eyebrow hero-eyebrow" style={{ color: 'var(--champagne)' }}>Manufacturing Excellence · Surat</span>
          <h1>{hero.headline.split(' ').slice(0, 3).join(' ')}<br /><em>{hero.headline.split(' ').slice(3).join(' ')}</em></h1>
          <p className="sub">{hero.subheadline}</p>
          <div className="hero-cta">
            <Link to="/catalogue" className="btn btn-gold btn-lg">{hero.ctaText} <ArrowRight size={16} /></Link>
            <Link to="/contact" className="btn btn-outline-light btn-lg">Contact Export Desk</Link>
          </div>
          {stats && (
            <div className="hero-stats">
              {stats.map(s => (
                <div className="m" key={s.label}><b>{s.value}</b><span>{s.label}</span></div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Trust bar */}
      <section className="trust">
        <div className="wrap trust-grid">
          {[
            { title: 'BIS Hallmarked',  sub: 'Government certified purity' },
            { title: 'IGI Certified',   sub: 'International diamond grading' },
            { title: 'GJEPC Member',    sub: 'Industry compliance assured' },
            { title: '40+ Markets',     sub: 'Worldwide export logistics' },
          ].map(it => (
            <div className="trust-cell" key={it.title}>
              <span className="ic">
                <BadgeCheck size={24} strokeWidth={1.4} />
              </span>
              <div><b>{it.title}</b><span>{it.sub}</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section ref={ref} className="section wrap">
        <div className="section-head is-center" style={{ marginBottom: 52 }}>
          <span className="eyebrow center-line">The Infrastructure</span>
          <h2>Scale & Precision</h2>
          <p className="lede" style={{ margin: '16px auto 0', textAlign: 'center' }}>
            Our vertically integrated facility handles every stage — from stone sourcing to export-ready packaging.
          </p>
        </div>
        <div className="cap-grid">
          {CAPS.map(({ Icon, title, desc }) => (
            <div key={title} className={`cap-card reveal ${visible ? 'in' : ''}`}>
              <div className="ic"><Icon size={24} /></div>
              <h4>{title}</h4>
              <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dark craft section */}
      <section className="craft section">
        <div className="wrap">
          <div className="craft-grid">
            <div className="craft-media" style={{ overflow: 'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1576669801775-7b8e8a7de97d?w=1200&q=85&fit=crop"
                alt="Amstela manufacturing facility"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="on-dark">
              <span className="eyebrow" style={{ color: 'var(--champagne)' }}>Why Partner With Us</span>
              <h2 style={{ color: '#fff', marginTop: 16 }}>Built for the world's most demanding buyers</h2>
              <p className="lede" style={{ marginTop: 16 }}>
                Every piece we produce carries full traceability — from conflict-free sourcing to certified hallmarking.
                Our OEM program is trusted by retailers across 40+ countries.
              </p>
              <div style={{ display: 'flex', gap: 14, marginTop: 30 }}>
                <Link to="/capabilities" className="btn btn-gold">Our Capabilities</Link>
                <Link to="/contact" className="btn btn-outline-light">Contact Trade Desk</Link>
              </div>
              <div className="craft-stats">
                {stats.map(s => (
                  <div className="m" key={s.label}><b>{s.value}</b><span>{s.label}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="cta-banner section">
        <div className="wrap">
          <div className="section-head is-center">
            <span className="eyebrow center-line">Start a Partnership</span>
            <h2 style={{ color: '#fff', marginTop: 16 }}>Ready to source certified diamonds?</h2>
            <p style={{ color: 'rgba(255,255,255,.7)', marginTop: 14, maxWidth: '52ch', margin: '14px auto 0' }}>
              Request our trade catalogue or speak directly with our export desk. We respond within 24 hours.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 32 }}>
              <Link to="/catalogue" className="btn btn-gold btn-lg">Request Catalogue <ArrowRight size={16} /></Link>
              <Link to="/contact" className="btn btn-outline-light btn-lg">Export Desk</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
