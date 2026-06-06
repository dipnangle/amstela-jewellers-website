import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useSiteConfig } from '../../context/SiteConfigContext'
import { useIntersection } from '@jewel/shared/hooks/useIntersection.js'

export default function FeaturedCollections() {
  const { config } = useSiteConfig()
  if (!config) return null
  const { featuredCollections } = config

  return (
    <section className="section wrap">
      <div className="between" style={{ marginBottom: 56 }}>
        <div className="section-head">
          <span className="eyebrow">The Collections</span>
          <h2>Curated Masterpieces</h2>
        </div>
        <Link to="/collections" className="link-gold">
          View all <ArrowRight size={15} />
        </Link>
      </div>

      <div className="collections-stack">
        {featuredCollections.map((col, i) => (
          <CollItem key={col.id} col={col} flip={i % 2 !== 0} idx={String(i + 1).padStart(2, '0')} />
        ))}
      </div>
    </section>
  )
}

function CollItem({ col, flip, idx }) {
  const [ref, visible] = useIntersection()
  return (
    <div ref={ref} className={`coll reveal ${visible ? 'in' : ''} ${flip ? 'flip' : ''}`}>
      <div className="coll-media zoom">
        <img src={col.image} alt={col.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div className="coll-body">
        <span className="idx">{idx}</span>
        <h3>{col.name}</h3>
        <p>{col.tagline}</p>
        <Link to={`/collections/${col.slug}`} className="link-gold">
          Explore Collection <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  )
}
