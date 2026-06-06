import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

/* ─── Slide data ───────────────────────────────────────────────────────
   Slots 2-4 are Unsplash placeholders — swap for local webp files when ready:
   /home/home2.webp, /home/home3.webp, /home/home4.webp
──────────────────────────────────────────────────────────────────────── */
const SLIDES = [
  {
    image: '/home/home1.webp',
    eyebrow: 'Crafted in Surat · Since 1999',
    headline: ['Crafted for', 'Every Forever'],
    sub: 'Diamonds that carry the weight of every meaningful moment',
    cta: 'Explore Collections',
    ctaHref: '/collections',
    secondary: 'Our Story',
    secondaryHref: '/story',
  },
  {
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=90&fit=crop',
    eyebrow: 'Bridal Collection',
    headline: ['Begin With', 'a Solitaire'],
    sub: 'Hand-selected diamonds. Platinum settings. IGI certified.',
    cta: 'Bridal Solitaires',
    ctaHref: '/collections/bridal-solitaires',
    secondary: 'Book Appointment',
    secondaryHref: '/contact',
  },
  {
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920&q=90&fit=crop',
    eyebrow: 'Heritage Gold',
    headline: ['Where Tradition', 'Meets Now'],
    sub: '22-karat artistry inspired by centuries of Indian jewellery craft.',
    cta: 'Heritage Gold',
    ctaHref: '/collections/heritage-gold',
    secondary: 'Our Story',
    secondaryHref: '/story',
  },
  {
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1920&q=90&fit=crop',
    eyebrow: 'Diamond Earrings',
    headline: ['Frame Your', 'Natural Beauty'],
    sub: 'From subtle studs to dramatic drops — each pair catches the light.',
    cta: 'Shop Earrings',
    ctaHref: '/collections/diamond-earrings',
    secondary: 'All Collections',
    secondaryHref: '/collections',
  },
]

const AUTO_MS = 5500

export default function HeroSection() {
  const [active, setActive]   = useState(0)
  const [prev, setPrev]       = useState(null)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((idx) => {
    if (animating || idx === active) return
    setPrev(active)
    setActive(idx)
    setAnimating(true)
    setTimeout(() => { setPrev(null); setAnimating(false) }, 900)
  }, [active, animating])

  const next = useCallback(() => goTo((active + 1) % SLIDES.length), [active, goTo])
  const back = useCallback(() => goTo((active - 1 + SLIDES.length) % SLIDES.length), [active, goTo])

  /* Auto-advance */
  useEffect(() => {
    const t = setTimeout(next, AUTO_MS)
    return () => clearTimeout(t)
  }, [active, next])

  const slide = SLIDES[active]

  return (
    <section className="c-hero" aria-label="Featured collections">

      {/* ── Background images / Base Gradient ── */}
      <div className="c-slides bg-velvet bg-noise" aria-hidden="true">
        {SLIDES.map((s, i) => (
          <div
            key={i}
            className={`c-slide ${i === active ? 'c-slide-in' : ''} ${i === prev ? 'c-slide-out' : ''}`}
          >
            {/* The layered foreground image that transitions */}
            <div className="c-slide-img-wrapper" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
              <img
                src={s.image}
                alt=""
                className="c-slide-img"
                style={{ 
                  objectFit: 'contain', 
                  objectPosition: 'right bottom', 
                  width: '100%', 
                  height: '100%',
                  maskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
                  opacity: 0.9
                }}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ── Static gradient overlay — transparent so image shows through ── */}
      <div className="c-overlay" aria-hidden="true" style={{ 
        background: 'linear-gradient(90deg, rgba(8, 22, 47, 0.95) 0%, rgba(8, 22, 47, 0.6) 45%, transparent 100%)' 
      }} />

      {/* ── Content ── */}
      <div className="c-content">
        <div className="c-inner">

          <p className="c-eyebrow" key={`ey-${active}`}>{slide.eyebrow}</p>

          <h1 className="c-headline" key={`h-${active}`}>
            {slide.headline[0]}<br />
            <em>{slide.headline[1]}</em>
          </h1>

          <p className="c-sub" key={`s-${active}`}>{slide.sub}</p>

          <div className="c-cta" key={`cta-${active}`}>
            <Link to={slide.ctaHref} className="btn btn-champagne btn-lg">
              {slide.cta} <ArrowRight size={15} />
            </Link>
            <Link to={slide.secondaryHref} className="btn btn-ghost-white btn-lg">
              {slide.secondary}
            </Link>
          </div>

          {/* Slide counter */}
          <div className="c-counter">
            <span className="c-count-current">{String(active + 1).padStart(2, '0')}</span>
            <span className="c-count-sep" />
            <span className="c-count-total">{String(SLIDES.length).padStart(2, '0')}</span>
          </div>
        </div>
      </div>

      {/* ── Dot navigation ── */}
      <div className="c-dots" role="tablist" aria-label="Carousel navigation">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === active}
            aria-label={`Slide ${i + 1}`}
            className={`c-dot ${i === active ? 'c-dot-active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      {/* ── Arrow navigation ── */}
      <button className="c-arrow c-arrow-prev" onClick={back} aria-label="Previous slide">
        <ChevronLeft size={22} strokeWidth={1.5} />
      </button>
      <button className="c-arrow c-arrow-next" onClick={next} aria-label="Next slide">
        <ChevronRight size={22} strokeWidth={1.5} />
      </button>

      {/* ── Progress bar ── */}
      <div className="c-progress" aria-hidden="true">
        <div className="c-progress-bar" key={active} />
      </div>

      {/* ── Scroll hint ── */}
      <div className="c-scroll" aria-hidden="true">
        <span>Scroll</span>
        <span className="c-scroll-line" />
      </div>

      {/* ────────────────────────────────────────────────────────────────
          GOLD FRAME DESIGN — kept for reference, not rendered
          ────────────────────────────────────────────────────────────────
      {false && (
        <div className="hero-figure reveal in">
          <img src={slide.image} alt="Amstela fine jewellery"
            style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }} />
          <span className="tag">Bridal Solitaires — New Arrivals</span>
        </div>
      )}
      ──────────────────────────────────────────────────────────────── */}
    </section>
  )
}
