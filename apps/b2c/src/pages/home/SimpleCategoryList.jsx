import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const CATS = [
  { name: 'Necklaces', slug: 'diamond-earrings' },
  { name: 'Earrings', slug: 'diamond-earrings' },
  { name: 'Rings', slug: 'bridal-solitaires' },
  { name: 'Bracelets', slug: 'bridal-solitaires' },
  { name: 'Charms', slug: 'everyday-elegance' },
]

export default function SimpleCategoryList() {
  return (
    <section className="section wrap" style={{ maxWidth: 900 }}>
       <div className="section-head is-center" style={{ marginBottom: 60 }}>
          <span className="eyebrow center-line">The Collection</span>
          <h2>Shop the Essentials</h2>
       </div>
       
       <div className="cat-list">
         {CATS.map(c => (
           <Link key={c.name} to={`/collections/${c.slug}`} className="cat-list-item" style={{ 
             display: 'flex', 
             alignItems: 'center', 
             justifyContent: 'space-between',
             padding: '30px 0',
             borderBottom: '1px solid var(--border)',
             fontSize: 'clamp(20px, 3vw, 32px)',
             fontFamily: 'var(--serif)',
             color: 'var(--ink)',
             transition: 'color 0.3s'
           }}>
             <span>{c.name}</span>
             <ArrowRight size={24} />
           </Link>
         ))}
       </div>
       
       <style dangerouslySetInnerHTML={{ __html: `
         .cat-list-item:hover { color: var(--gold) !important; padding-left: 20px !important; }
         .cat-list-item { transition: all 0.4s var(--ease) !important; }
       `}} />
    </section>
  )
}
