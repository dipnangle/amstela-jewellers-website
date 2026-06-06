import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent]   = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (email.trim()) setSent(true)
  }

  return (
    <section className="news section">
      <div className="wrap">
        <span className="eyebrow center-line">The Inner Circle</span>
        <h2 style={{ fontSize: 'clamp(28px,4vw,46px)', marginTop: 18, color: '#fff' }}>
          First to know. First to choose.
        </h2>
        <p className="lede" style={{ margin: '16px auto 0', color: 'rgba(255,255,255,.7)', textAlign: 'center', maxWidth: '54ch' }}>
          Receive invitations to private previews, new arrivals, and exclusive events from Amstela.
        </p>
        {sent ? (
          <p style={{ marginTop: 32, color: 'var(--champagne)', fontFamily: 'var(--serif)', fontSize: 20, fontStyle: 'italic' }}>
            Welcome to the circle — we'll be in touch.
          </p>
        ) : (
          <form className="news-form" onSubmit={submit}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-gold">Subscribe</button>
          </form>
        )}
        <p className="fineprint">Unsubscribe anytime. We never share your details.</p>
      </div>
    </section>
  )
}
