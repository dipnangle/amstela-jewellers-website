import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Phone, ShoppingBag, CheckCircle2, Truck, Shield, RefreshCw } from 'lucide-react'
import { useShop } from '../../context/ShopContext'
import { SITE } from '../../config/site'

export default function ProductInfo({ product }) {
  const { wish, toggleWish, addToCart } = useShop()
  const [tab, setTab] = useState('Description')
  const wished = wish.includes(product.id)

  const waUrl = `https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(product.name)}%20from%20Amstela.`

  return (
    <div className="pdp-info">
      <div className="cat-name">{product.collectionName}</div>
      <h1>{product.name}</h1>
      <p className="pdp-meta">{product.metal} · {product.carat} · {product.category}</p>

      <div className="pdp-price" style={{ margin: '20px 0', fontSize: 28, fontFamily: 'var(--serif)', color: 'var(--ink)' }}>
        ₹{product.price.toLocaleString()}
      </div>

      {product.badge && (
        <span className="prod-badge" style={{ position: 'static', display: 'inline-block', marginBottom: 16 }}>{product.badge}</span>
      )}

      {/* Primary Actions */}
      <div className="pdp-main-actions" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15, marginBottom: 20 }}>
        <button 
          onClick={() => addToCart(product)}
          className="btn btn-navy btn-lg"
        >
          <ShoppingBag size={18} /> Add to Bag
        </button>
        <button
          onClick={() => toggleWish(product)}
          className="btn btn-ghost btn-lg"
          style={{ borderColor: wished ? 'var(--gold)' : 'var(--border)', color: wished ? 'var(--gold)' : 'var(--ink)' }}
        >
          <Heart size={18} fill={wished ? 'currentColor' : 'none'} />
          {wished ? 'Saved' : 'Wishlist'}
        </button>
      </div>

      {/* Enquiry CTA */}
      <div className="pdp-cta" style={{ marginBottom: 30 }}>
        <Link to="/contact" className="btn btn-gold btn-block btn-lg">
          <Phone size={15} /> Book Boutique Visit
        </Link>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn wa-btn btn-lg btn-block" style={{ marginTop: 10 }}>
          WhatsApp Enquiry
        </a>
      </div>

      {/* Tabs */}
      <div className="tabs">
        {['Description', 'Features', 'Shipping'].map(t => (
          <span key={t} className={`tab ${tab === t ? 'on' : ''}`} onClick={() => setTab(t)}>{t}</span>
        ))}
      </div>

      {tab === 'Description' && (
        <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--body)' }}>{product.description}</p>
      )}
      {tab === 'Features' && (
        <table className="spec-table">
          <tbody>
            {product.features.map(f => (
              <tr key={f}>
                <td>
                  <CheckCircle2 size={14} color="var(--gold)" style={{ display: 'inline', marginRight: 8 }} />
                  {f}
                </td>
              </tr>
            ))}
            <tr><td>Metal</td><td>{product.metal}</td></tr>
            <tr><td>Carat</td><td>{product.carat}</td></tr>
            <tr><td>Category</td><td>{product.category}</td></tr>
          </tbody>
        </table>
      )}
      {tab === 'Shipping' && (
        <div>
          {[
            [Truck,    'Insured Shipping',   'Complimentary, fully insured delivery across India.'],
            [RefreshCw,'15-Day Returns',      'Unworn pieces may be returned within 15 days.'],
            [Shield,   'Lifetime Warranty',  'Free cleaning and inspection for life.'],
          ].map(([Icon, title, desc], i) => (
            <div key={i} className="pdp-assure" style={{ display: 'flex', gap: 14, padding: '16px 0', borderBottom: '1px solid var(--border)', gridTemplateColumns: 'none' }}>
              <Icon size={22} color="var(--gold)" style={{ flexShrink: 0 }} />
              <div><b style={{ color: 'var(--ink)', display: 'block', marginBottom: 3 }}>{title}</b><span style={{ color: 'var(--body)', fontSize: 13 }}>{desc}</span></div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
