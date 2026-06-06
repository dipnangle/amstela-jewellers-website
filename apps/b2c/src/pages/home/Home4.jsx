import SimpleCategoryList from './SimpleCategoryList'
import NewArrivals from './NewArrivals'
import BrandIntro from './BrandIntro'
import Newsletter from '../../components/shared/Newsletter'
import { Link } from 'react-router-dom'

function MinimalHero() {
  return (
    <section className="hero v-center bg-marble">
      <div className="hero-grid">
        <div className="hero-copy reveal in">
          <span className="eyebrow hero-eyebrow center-line">Minimal Fine</span>
          <h1>Quiet<br /><em>Luxury</em></h1>
          <p className="sub">Everyday pieces that speak volumes. Crafted meticulously in 18k solid gold.</p>
          <div className="hero-cta center">
            <Link to="/collections/everyday-elegance" className="btn btn-gold btn-lg">Explore Essentials</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home4Page() {
  return (
    <main>
      <MinimalHero />
      <SimpleCategoryList />
      <NewArrivals />
      <BrandIntro />
      <Newsletter />
    </main>
  )
}
