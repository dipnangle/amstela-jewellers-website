import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import productsData from '../../config/content/products.json'

export default function RelatedProducts({ current }) {
  const related = productsData
    .filter(p => p.collectionSlug === current.collectionSlug && p.id !== current.id)
    .slice(0, 4)

  if (!related.length) return null

  return (
    <section>
      <div className="between" style={{ marginBottom: 36 }}>
        <div className="section-head">
          <span className="eyebrow">From the Collection</span>
          <h2>You May Also Love</h2>
        </div>
        <Link to={`/collections/${current.collectionSlug}`} className="link-gold">
          Full collection <ArrowRight size={15} />
        </Link>
      </div>

      <div className="grid-products">
        {related.map(p => (
          <article className="prod-card" key={p.id}>
            <div className="prod-thumb zoom">
              <Link to={`/product/${p.slug}`} style={{ position: 'absolute', inset: 0 }}>
                <img src={p.images[0]} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Link>
            </div>
            <div className="prod-info">
              <div className="cat-name">{p.collectionName}</div>
              <h4><Link to={`/product/${p.slug}`}>{p.name}</Link></h4>
              <p className="prod-meta">{p.metal}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
