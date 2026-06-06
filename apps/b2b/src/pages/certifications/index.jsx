import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import certificationsData from '../../config/content/certifications.json'
import { useIntersection } from '@jewel/shared/hooks/useIntersection.js'

export default function CertificationsPage() {
  return (
    <main>
      <div className="page-head bg-velvet">
        <div className="bg-velvet" style={{ position: 'absolute', inset: 0 }} />
        <div className="wrap">
          <div className="crumb">
            <Link to="/">Home</Link><span className="sep">/</span><span>Certifications</span>
          </div>
          <h1>International Certifications</h1>
          <p className="lede">Every Amstela piece carries internationally recognised certification — the assurance your buyers demand.</p>
        </div>
      </div>

      <section className="section wrap">
        <div className="cert-grid">
          {certificationsData.map((cert, i) => <CertCard key={cert.id} cert={cert} index={i} />)}
        </div>
      </section>

      <section className="craft section">
        <div className="wrap on-dark" style={{ textAlign: 'center' }}>
          <span className="eyebrow center-line" style={{ color: 'var(--champagne)' }}>Compliance Ready</span>
          <h2 style={{ color: '#fff', marginTop: 16 }}>Full traceability on every shipment</h2>
          <p className="lede" style={{ margin: '14px auto 28px', textAlign: 'center' }}>
            We provide complete documentation — hallmark certificates, stone grading reports, and export compliance paperwork — for every order.
          </p>
          <Link to="/contact" className="btn btn-gold btn-lg">Talk to Our Export Desk</Link>
        </div>
      </section>
    </main>
  )
}

function CertCard({ cert, index }) {
  const [ref, visible] = useIntersection()
  return (
    <div ref={ref} className={`cert-card reveal ${visible ? 'in' : ''}`} style={{ transitionDelay: `${index * 120}ms` }}>
      <div className="ic" style={{ background: cert.color + '15', borderRadius: '50%' }}>
        <span style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 400, color: cert.color }}>{cert.badge}</span>
      </div>
      <h4>{cert.name}</h4>
      <p style={{ fontSize: 12, color: 'var(--gold)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 12 }}>{cert.fullName}</p>
      <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.7, marginBottom: 16 }}>{cert.description}</p>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7, textAlign: 'left' }}>
        {cert.benefits.map(b => (
          <li key={b} style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, color: 'var(--body)' }}>
            <CheckCircle2 size={13} color="var(--gold)" style={{ flexShrink: 0 }} /> {b}
          </li>
        ))}
      </ul>
      <p style={{ fontSize: 11, color: 'var(--body)', marginTop: 14, letterSpacing: '.08em' }}>Scope: {cert.scope} · Since {cert.since}</p>
    </div>
  )
}
