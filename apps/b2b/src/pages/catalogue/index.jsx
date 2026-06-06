import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Lock, CheckCircle2, ArrowRight } from 'lucide-react'
import { isEmail, isRequired } from '@jewel/shared/utils/validators.js'

const COUNTRIES = ['United States', 'United Kingdom', 'UAE', 'Singapore', 'Australia', 'Germany', 'France', 'Canada', 'Hong Kong', 'South Africa', 'India', 'Other']
const INTERESTS = ['Rings', 'Earrings', 'Bracelets', 'Necklaces', 'Full Range', 'Custom / OEM']

export default function CataloguePage() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', country: '', interest: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    const errs = {}
    if (!isRequired(form.name))    errs.name    = 'Required'
    if (!isRequired(form.company)) errs.company = 'Required'
    if (!isEmail(form.email))      errs.email   = 'Valid email required'
    if (!isRequired(form.country)) errs.country = 'Required'
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); setSuccess(true) }, 1400)
  }

  return (
    <main>
      <div className="page-head bg-velvet">
        <div className="bg-velvet" style={{ position: 'absolute', inset: 0 }} />
        <div className="wrap">
          <div className="crumb">
            <Link to="/">Home</Link><span className="sep">/</span><span>Catalogue</span>
          </div>
          <h1>Trade Catalogue</h1>
          <p className="lede">Complete details of our diamond jewellery range — pricing, specifications, and MOQ — available to verified trade buyers.</p>
        </div>
      </div>

      <section className="section wrap">
        <div className="contact-grid">
          {/* Left: what you get */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <Lock size={18} color="var(--gold)" />
              <span style={{ fontFamily: 'var(--sans)', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700 }}>
                Verified Trade Access
              </span>
            </div>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: 28, color: 'var(--ink)', marginBottom: 16, fontWeight: 400 }}>What You'll Receive</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'Full SKU catalogue — 200+ designs',
                'Ex-factory pricing by metal & stone',
                'MOQ requirements per category',
                'Lead time by order size',
                'Certification & compliance guide',
                'OEM & private label terms',
              ].map(item => (
                <li key={item} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 14, color: 'var(--body)' }}>
                  <CheckCircle2 size={15} color="var(--gold)" style={{ flexShrink: 0 }} /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: gate form */}
          <div>
            {success ? (
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <CheckCircle2 size={44} color="var(--gold)" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 26, color: 'var(--ink)', marginBottom: 10 }}>Request Received</h3>
                <p style={{ color: 'var(--body)', fontSize: 14 }}>
                  Thank you, {form.name.split(' ')[0]}. Our export team will send you the catalogue within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 26, color: 'var(--ink)', marginBottom: 24, fontWeight: 400 }}>Request Access</h3>
                <form onSubmit={submit} noValidate>
                  <div className="form-grid">
                    <div className="field">
                      <label>Full Name</label>
                      <input type="text" placeholder="Your name" value={form.name} onChange={set('name')} />
                      {errors.name && <span style={{ fontSize: 12, color: '#c00' }}>{errors.name}</span>}
                    </div>
                    <div className="field">
                      <label>Company</label>
                      <input type="text" placeholder="Company name" value={form.company} onChange={set('company')} />
                      {errors.company && <span style={{ fontSize: 12, color: '#c00' }}>{errors.company}</span>}
                    </div>
                    <div className="field">
                      <label>Email</label>
                      <input type="email" placeholder="trade@company.com" value={form.email} onChange={set('email')} />
                      {errors.email && <span style={{ fontSize: 12, color: '#c00' }}>{errors.email}</span>}
                    </div>
                    <div className="field">
                      <label>Phone</label>
                      <input type="tel" placeholder="+1 555 000 0000" value={form.phone} onChange={set('phone')} />
                    </div>
                    <div className="field">
                      <label>Country</label>
                      <select value={form.country} onChange={set('country')}>
                        <option value="">Select country</option>
                        {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                      {errors.country && <span style={{ fontSize: 12, color: '#c00' }}>{errors.country}</span>}
                    </div>
                    <div className="field">
                      <label>Category Interest</label>
                      <select value={form.interest} onChange={set('interest')}>
                        <option value="">Select category</option>
                        {INTERESTS.map(i => <option key={i} value={i}>{i}</option>)}
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-navy btn-lg btn-block" style={{ marginTop: 22 }} disabled={loading}>
                    {loading ? 'Submitting…' : <>Request Catalogue <ArrowRight size={15} /></>}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
