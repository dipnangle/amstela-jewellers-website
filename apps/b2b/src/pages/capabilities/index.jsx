import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import capabilitiesData from '../../config/content/capabilities.json'
import { useIntersection } from '@jewel/shared/hooks/useIntersection.js'

const PROCESS = [
  { step: '01', title: 'Design Brief',  desc: 'Share your concept, sketch, or CAD file. We confirm feasibility within 48h.' },
  { step: '02', title: 'Quotation',     desc: 'Detailed quote covering metal, stones, certification, and packaging.' },
  { step: '03', title: 'Sampling',      desc: 'Wax prototype or metal sample within 2–3 weeks for your approval.' },
  { step: '04', title: 'Production',    desc: 'Full production with QC checkpoints at casting, setting, and finishing.' },
  { step: '05', title: 'Certification', desc: 'BIS hallmarking and IGI/GIA certification completed before dispatch.' },
  { step: '06', title: 'Dispatch',      desc: 'Insured shipment via registered carrier. Full export documentation.' },
]

export default function CapabilitiesPage() {
  const [ref, visible] = useIntersection()

  return (
    <main>
      <div className="page-head bg-velvet">
        <div className="bg-velvet" style={{ position: 'absolute', inset: 0 }} />
        <div className="wrap">
          <div className="crumb">
            <Link to="/">Home</Link><span className="sep">/</span><span>Capabilities</span>
          </div>
          <h1>Manufacturing Capabilities</h1>
          <p className="lede">End-to-end production under one roof — from design brief to export-ready dispatch.</p>
        </div>
      </div>

      {/* Capability cards */}
      <section className="section wrap">
        <div className="section-head is-center" style={{ marginBottom: 52 }}>
          <span className="eyebrow center-line">The Facility</span>
          <h2>What We Do</h2>
        </div>
        <div className="cap-grid">
          {capabilitiesData.map((cap, i) => (
            <div key={cap.id} className="cap-card" ref={i === 0 ? ref : null}>
              <div className="ic">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                </svg>
              </div>
              <h4>{cap.title}</h4>
              <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.7, marginBottom: 16 }}>{cap.fullDesc}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                {cap.specs.map(s => (
                  <li key={s} style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, color: 'var(--body)' }}>
                    <CheckCircle2 size={13} color="var(--gold)" style={{ flexShrink: 0 }} /> {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process steps */}
      <section className="section" style={{ background: 'var(--offwhite)' }}>
        <div className="wrap">
          <div className="section-head is-center" style={{ marginBottom: 52 }}>
            <span className="eyebrow center-line">Our Process</span>
            <h2>From Brief to Boutique</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '22px' }}>
            {PROCESS.map(p => (
              <div key={p.step} style={{ padding: '28px 24px', background: '#fff', border: '1px solid var(--border)' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 36, color: 'var(--border)', marginBottom: 14, fontWeight: 400 }}>{p.step}</div>
                <h4 style={{ fontSize: 18, marginBottom: 10 }}>{p.title}</h4>
                <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--navy-dark)', textAlign: 'center' }} className="section">
        <div className="wrap on-dark">
          <span className="eyebrow center-line" style={{ color: 'var(--champagne)' }}>Ready to Partner?</span>
          <h2 style={{ color: '#fff', marginTop: 16 }}>Start your order today</h2>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 28 }}>
            <Link to="/catalogue" className="btn btn-gold btn-lg">Request Catalogue <ArrowRight size={15} /></Link>
            <Link to="/contact" className="btn btn-outline-light btn-lg">Trade Desk</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
