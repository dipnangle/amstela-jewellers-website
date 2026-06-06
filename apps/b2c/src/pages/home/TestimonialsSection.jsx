import { useIntersection } from '@jewel/shared/hooks/useIntersection.js'

const TESTIMONIALS = [
  {
    id: 1, name: 'Priya Mehta', location: 'Mumbai', collection: 'Bridal Solitaires',
    text: 'My bridal solitaire from Amstela is absolutely breathtaking. The IGI certification gave me complete confidence, and the craftsmanship is beyond what I had imagined.',
  },
  {
    id: 2, name: 'Sneha Patel', location: 'Ahmedabad', collection: 'Mangalsutra',
    text: "I've been wearing the Mangalsutra every single day. It's light, modern, and meaningful. The Amstela team took time to understand exactly what I wanted.",
  },
  {
    id: 3, name: 'Kavya Reddy', location: 'Hyderabad', collection: 'Diamond Earrings',
    text: 'The Drop Earrings were a gift from my husband on our anniversary. Every time I wear them, I get compliments. The rose gold is a perfect, warm tone.',
  },
]

export default function TestimonialsSection() {
  const [ref, visible] = useIntersection()

  return (
    <section className="section" style={{ background: 'var(--offwhite)' }}>
      <div className="wrap">
        <div className="section-head is-center" ref={ref}>
          <span className="eyebrow center-line">Voices of Amstela</span>
          <h2>Worn with Love</h2>
        </div>

        <div className={`tst-grid reveal ${visible ? 'in' : ''}`} style={{ marginTop: 56 }}>
          {TESTIMONIALS.map((t, i) => (
            <div className="tst" key={t.id} style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="stars">
                {Array(5).fill(0).map((_, j) => (
                  <svg key={j} width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="q">"{t.text}"</p>
              <div className="who">
                <div className="av">{t.name[0]}</div>
                <div>
                  <b>{t.name}</b>
                  <span>{t.location} · {t.collection}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
