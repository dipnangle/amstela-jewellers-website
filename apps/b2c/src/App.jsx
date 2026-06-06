import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SiteConfigProvider } from './context/SiteConfigContext'
import { ShopProvider } from './context/ShopContext'
import B2CHeader from './components/layout/B2CHeader'
import B2CFooter from './components/layout/B2CFooter'
import PageWrapper from '@jewel/shared/components/layout/PageWrapper.jsx'
import WhatsAppFloat from './components/shared/WhatsAppFloat'
import MiniBag from './components/shared/MiniBag'

import HomePage from './pages/home'
import Home2Page from './pages/home/Home2'
import Home3Page from './pages/home/Home3'
import Home4Page from './pages/home/Home4'
import Home5Page from './pages/home/Home5'
import CollectionsPage from './pages/collections'
import ProductPage from './pages/product'
import StoryPage from './pages/story'
import StoresPage from './pages/stores'
import ContactPage from './pages/contact'

function ScrollRoutes() {
  return (
    <PageWrapper>
      <B2CHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home2" element={<Home2Page />} />
        <Route path="/home3" element={<Home3Page />} />
        <Route path="/home4" element={<Home4Page />} />
        <Route path="/home5" element={<Home5Page />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/collections/:slug" element={<CollectionsPage />} />
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/stores" element={<StoresPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <B2CFooter />
      <WhatsAppFloat />
      <MiniBag />
    </PageWrapper>
  )
}

export default function App() {
  const [booted, setBooted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setBooted(true), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <SiteConfigProvider>
      <ShopProvider>
        <div className={`boot ${booted ? 'hidden-boot' : ''}`}>
          <div className="mk">AMSTELA</div>
          <div className="sub">Fine Jewellery</div>
          <div className="ld" />
        </div>
        <BrowserRouter>
          <ScrollRoutes />
        </BrowserRouter>
      </ShopProvider>
    </SiteConfigProvider>
  )
}
