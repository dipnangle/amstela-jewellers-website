import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { isEmail, isRequired } from '@jewel/shared/utils/validators.js'

const INTERESTS = [
  'Bridal Solitaire', 'Engagement Rings', 'Diamond Necklaces',
  'Mangalsutra Collection', 'Daily Wear', 'Custom Bespoke Piece',
]

export default function EnquiryForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', product: '', message: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const set = key => e => setForm({ ...form, [key]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    const errs = { name: isRequired(form.name), email: isEmail(form.email), message: isRequired(form.message) }
    setErrors(errs)
    if (Object.values(errs).some(v => v !== null)) return
    setLoading(true)
    setTimeout(() => { setLoading(false); setSuccess(true) }, 1400)
  }

  if (success) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <CheckCircle2 size={44} color="var(--gold)" style={{ margin: '0 auto 16px' }} />
        <h3 style={{ fontFamily: 'var(--serif)', fontSize: 26, color: 'var(--ink)', marginBottom: 10 }}>Message Received</h3>
        <p style={{ color: 'var(--body)', fontSize: 14 }}>
          Thank you, {form.name.split(' ')[0]}. A master advisor will contact you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" placeholder="e.g. Priya Mehta" value={form.name} onChange={set('name')} />
          {errors.name && <span style={{ fontSize: 12, color: '#c00' }}>{errors.name}</span>}
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="your@email.com" value={form.email} onChange={set('email')} />
          {errors.email && <span style={{ fontSize: 12, color: '#c00' }}>{errors.email}</span>}
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="tel" placeholder="+91 98XXX XXXXX" value={form.phone} onChange={set('phone')} />
        </div>
        <div className="field">
          <label htmlFor="product">Interest</label>
          <select id="product" value={form.product} onChange={set('product')}>
            <option value="">Select a collection</option>
            {INTERESTS.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div className="field full">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows={4} placeholder="Tell us about the occasion or specific requirements…" value={form.message} onChange={set('message')} />
          {errors.message && <span style={{ fontSize: 12, color: '#c00' }}>{errors.message}</span>}
        </div>
      </div>

      <button type="submit" className="btn btn-navy btn-lg btn-block" style={{ marginTop: 24 }} disabled={loading}>
        {loading ? 'Sending…' : <>Send Enquiry <ArrowRight size={15} /></>}
      </button>
    </form>
  )
}
