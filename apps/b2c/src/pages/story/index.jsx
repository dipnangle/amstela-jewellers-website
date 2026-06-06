import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useIntersection } from '@jewel/shared/hooks/useIntersection.js'

const TIMELINE = [
  { year: '1999', title: 'Founded', body: 'Founded in the diamond district of Surat with a small workshop and a vision for uncompromising purity.' },
  { year: '2008', title: 'Expansion', body: 'Expanded to a 15,000 sq ft manufacturing facility, integrating CAD design and laser precision.' },
  { year: '2015', title: 'Global Reach', body: 'Achieved international status with export certifications and presence in Dubai and Antwerp trade circles.' },
  { year: '2023', title: 'Signature Collection', body: 'Launched the Amstela bridal collection, blending ancient Indian motifs with modern minimalism.' },
]

const STATS = [
  { n: '25+', l: 'Years of craft' },
  { n: '10K+', l: 'Pieces made' },
  { n: '40+', l: 'Export markets' },
  { n: '3', l: 'Certifications' },
]

export default function StoryPage() {
  const [ref, visible] = useIntersection()

  return (
    <main>
      {/* Page header */}
      <div className="page-head bg-velvet">
        <div className="bg-velvet" style={{ position: 'absolute', inset: 0 }} />
        <div className="wrap">
          <div className="crumb">
            <Link to="/">Home</Link><span className="sep">/</span><span>Our Story</span>
          </div>
          <h1>A Quarter Century<br /><em style={{ fontStyle: 'italic', color: 'var(--champagne)' }}>of Brilliance</em></h1>
          <p className="lede">From Surat's diamond heartland to the world's most meaningful occasions.</p>
        </div>
      </div>

      {/* Stats */}
      <section className="trust">
        <div className="wrap trust-grid">
          {STATS.map(s => (
            <div className="trust-cell" key={s.l} style={{ justifyContent: 'center', flexDirection: 'column', gap: 4, textAlign: 'center' }}>
              <b style={{ fontSize: 34, fontFamily: 'var(--serif)' }}>{s.n}</b>
              <span>{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section wrap">
        <div className="section-head" ref={ref}>
          <span className="eyebrow">The Journey</span>
          <h2>How We Got Here</h2>
        </div>

        <div className={`timeline reveal ${visible ? 'in' : ''}`} style={{ marginTop: 48 }}>
          {TIMELINE.map(t => (
            <div className="tl-row" key={t.year}>
              <div className="tl-year">{t.year}</div>
              <div className="tl-body">
                <h4>{t.title}</h4>
                <p>{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Craft image section */}
      <section className="craft section">
        <div className="wrap">
          <div className="craft-grid">
            <div className="craft-media zoom">
              <img
                src="https://images.unsplash.com/photo-1601121141461-9d6647bef0a1?w=1200&q=85&fit=crop"
                alt="Amstela craftsmanship"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="on-dark">
              <span className="eyebrow" style={{ color: 'var(--champagne)' }}>Our Craft</span>
              <h2 style={{ color: '#fff', marginTop: 16 }}>Every diamond tells a story</h2>
              <p className="lede" style={{ marginTop: 16 }}>
                From hand-selecting each rough stone to the final hallmark stamp, every Amstela piece passes through sixty artisan hands.
                We believe fine jewellery should feel personal, not merely purchased.
              </p>
              <Link to="/contact" className="btn btn-gold btn-lg" style={{ marginTop: 32, display: 'inline-flex' }}>
                Book a Consultation <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
