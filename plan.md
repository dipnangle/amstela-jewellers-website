# Jewellery Website — Project Reference

> **Purpose:** This document is the single source of truth for building the jewellery client website.
> Read this before writing any code. Every folder, file, and decision is documented here.
> Demo phase uses hardcoded JSON. Production phase replaces JSON with Django API calls — folder structure does not change.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [URL Structure](#2-url-structure)
3. [Tech Stack](#3-tech-stack)
4. [Monorepo Structure](#4-monorepo-structure)
5. [Shared Package — `packages/shared`](#5-shared-package--packagesshared)
6. [B2C App — `apps/b2c`](#6-b2c-app--appsb2c)
7. [B2B App — `apps/b2b`](#7-b2b-app--appsb2b)
8. [Config & Hardcoded JSON — Demo Phase](#8-config--hardcoded-json--demo-phase)
9. [How to Switch from JSON to API — Production Phase](#9-how-to-switch-from-json-to-api--production-phase)
10. [Django Backend — Models & Admin Panel](#10-django-backend--models--admin-panel)
11. [How Frontend Connects to Django Admin](#11-how-frontend-connects-to-django-admin)
12. [CI/CD — GitHub Actions](#12-cicd--github-actions)
13. [Nginx — Subdomain Routing](#13-nginx--subdomain-routing)
14. [Demo Build Checklist](#14-demo-build-checklist)
15. [Production Launch Checklist](#15-production-launch-checklist)

---

## 1. Project Overview

The client is a diamond jewellery manufacturer selling in domestic and international markets.
The website has two distinct audiences that require two separate experiences:

| Audience | Goal | URL |
|---|---|---|
| **B2C** — retail customers | Browse collections, fall in love with product, make enquiry | `brand.com` |
| **B2B** — wholesale buyers, export partners | Verify manufacturing credibility, request catalogue, submit inquiry | `b2b.brand.com` |

Both frontends share one Django backend. One codebase, one database, one admin panel.

---

## 2. URL Structure

```
brand.com               → B2C React SPA (Vite)
b2b.brand.com           → B2B React SPA (Vite)
api.brand.com           → Django REST API (shared by both)
api.brand.com/admin/    → Django Admin Panel (client manages content here)
```

Both React apps call the same `VITE_API_URL=https://api.brand.com` in their `.env` files.

---

## 3. Tech Stack

| Layer | Technology | Reason |
|---|---|---|
| Frontend | React 18 + Vite + React Router v6 | Fast build, SPA, already familiar |
| Styling | Tailwind CSS + shared CSS tokens | Utility-first, consistent design system |
| HTTP client | Axios | Interceptors for auth headers |
| Backend | Django 4.x + Django REST Framework | Robust admin, secure, known stack |
| Database | PostgreSQL | Relational, handles product variants |
| Media | Cloudflare R2 (S3-compatible) | Images served from CDN globally |
| Server | VPS — Nginx reverse proxy | Full control, subdomain routing |
| Edge | Cloudflare | CDN, SSL, DDoS protection |
| Deploy | GitHub Actions CI/CD | Automated staging → production |

---

## 4. Monorepo Structure

```
jewellery-web/                        ← root of git repo
│
├── package.json                      ← workspaces: ["apps/*", "packages/*"]
├── .gitignore
├── .env.example                      ← copy this to .env in each app
├── README.md
│
├── packages/
│   └── shared/                       ← @jewel/shared — imported by both apps
│
└── apps/
    ├── b2c/                          ← brand.com
    └── b2b/                          ← b2b.brand.com
```

### Root `package.json`

```json
{
  "name": "jewellery-web",
  "private": true,
  "workspaces": ["apps/*", "packages/*"],
  "scripts": {
    "dev:b2c": "npm run dev --workspace=apps/b2c",
    "dev:b2b": "npm run dev --workspace=apps/b2b",
    "build:b2c": "npm run build --workspace=apps/b2c",
    "build:b2b": "npm run build --workspace=apps/b2b"
  }
}
```

---

## 5. Shared Package — `packages/shared`

> Everything in this package is used by BOTH apps.
> If only one app uses it, it stays inside that app. Do not put it here.

```
packages/shared/
│
├── package.json                      ← name: "@jewel/shared"
├── index.js                          ← barrel export — import everything from here
│
├── components/
│   ├── ui/
│   │   ├── Button.jsx                ← primary, secondary, ghost variants
│   │   ├── Input.jsx                 ← text, email, tel, textarea
│   │   ├── Modal.jsx
│   │   ├── Badge.jsx                 ← metal type, category labels
│   │   ├── Spinner.jsx
│   │   └── Card.jsx                  ← base card wrapper
│   │
│   ├── layout/
│   │   ├── Container.jsx             ← max-width wrapper with padding
│   │   ├── Section.jsx               ← section with top/bottom spacing
│   │   ├── Grid.jsx                  ← responsive product/collection grid
│   │   └── PageWrapper.jsx           ← wraps every page — sets scroll to top
│   │
│   └── icons/
│       ├── DiamondIcon.jsx
│       ├── CertIcon.jsx
│       ├── WhatsAppIcon.jsx
│       └── ArrowIcon.jsx
│
├── hooks/
│   ├── useApi.js                     ← base fetch wrapper, handles errors
│   ├── useForm.js                    ← controlled form state + validation
│   ├── useWindowSize.js              ← responsive breakpoint detection
│   └── useIntersection.js            ← IntersectionObserver — scroll animations
│
├── services/
│   ├── api.js                        ← axios instance — BASE URL from env
│   ├── products.js                   ← getProducts(), getCollection(), getProduct(slug)
│   ├── leads.js                      ← submitB2BLead(), requestCatalogue()
│   └── settings.js                   ← getSiteConfig() — fetches dynamic content
│
├── utils/
│   ├── formatPrice.js                ← "₹1,20,000" or "Price on Request"
│   ├── validators.js                 ← isEmail(), isPhone(), isRequired()
│   └── truncate.js                   ← truncate text to N chars with ellipsis
│
└── styles/
    ├── tokens.css                    ← CSS custom properties — colours, spacing, type
    └── reset.css                     ← minimal CSS reset
```

### `packages/shared/package.json`

```json
{
  "name": "@jewel/shared",
  "version": "1.0.0",
  "main": "index.js",
  "dependencies": {
    "axios": "^1.6.0"
  }
}
```

### `packages/shared/services/api.js`

```js
// This is the ONLY place the API base URL is set.
// Demo phase: VITE_API_URL is not set, so all service calls
// are intercepted and return hardcoded JSON from config/.
// Production phase: set VITE_API_URL in .env and remove the mock interceptor.

import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '',
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
})

// Response interceptor — handles 401, 500 globally
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API error:', error.response?.status, error.message)
    return Promise.reject(error)
  }
)

export default apiClient
```

---

## 6. B2C App — `apps/b2c`

> URL: `brand.com`
> Tone: warm, premium, consumer-facing
> Primary font: Cormorant Garamond (headings) + DM Sans (body)
> Colour mood: warm ivory, gold accents, deep charcoal text

```
apps/b2c/
│
├── index.html
├── vite.config.js
├── package.json                      ← imports @jewel/shared
├── .env                              ← VITE_API_URL=https://api.brand.com
├── .env.example
│
└── src/
    │
    ├── main.jsx                      ← mounts App, imports main.css
    ├── App.jsx                       ← React Router routes + context providers
    │
    ├── assets/
    │   ├── fonts/                    ← Cormorant Garamond, DM Sans woff2 files
    │   └── images/                   ← B2C lifestyle photography, hero images
    │
    ├── components/
    │   ├── layout/
    │   │   ├── B2CHeader.jsx         ← logo left, nav centre, enquire CTA right
    │   │   ├── B2CFooter.jsx         ← collections, story, contact, social links
    │   │   └── MobileNav.jsx         ← hamburger drawer for mobile
    │   │
    │   └── shared/                   ← B2C-only reusable components
    │       ├── ProductCard.jsx       ← image, name, metal type, enquire button
    │       ├── CollectionBanner.jsx  ← full-width collection hero image + title
    │       ├── Lookbook.jsx          ← editorial image grid component
    │       └── WishlistBtn.jsx       ← save product (uses WishlistContext)
    │
    ├── pages/
    │   ├── home/
    │   │   ├── index.jsx             ← route entry point — assembles sections
    │   │   ├── HeroSection.jsx       ← full-screen lifestyle image + headline
    │   │   ├── FeaturedCollections.jsx ← 3 collection cards from config
    │   │   ├── BrandIntro.jsx        ← short brand story strip with CTA
    │   │   └── TrustBar.jsx          ← certifications + years of experience
    │   │
    │   ├── collections/
    │   │   ├── index.jsx             ← grid of all collections, filter by category
    │   │   └── CollectionFilter.jsx  ← category tabs: Rings, Earrings, Necklaces...
    │   │
    │   ├── product/
    │   │   ├── index.jsx             ← product detail route — /collections/:slug
    │   │   ├── ImageGallery.jsx      ← main image + thumbnail strip
    │   │   ├── ProductInfo.jsx       ← name, metal, description, enquire CTA
    │   │   └── RelatedProducts.jsx   ← 4 products from same collection
    │   │
    │   ├── story/
    │   │   ├── index.jsx             ← brand story + craftsmanship + heritage
    │   │   └── CraftsmanshipGrid.jsx ← process steps with images
    │   │
    │   ├── stores/
    │   │   └── index.jsx             ← retail location, address, Google Map embed
    │   │
    │   └── contact/
    │       ├── index.jsx             ← retail enquiry form
    │       └── EnquiryForm.jsx       ← name, email, phone, message, product interest
    │
    ├── config/
    │   ├── routes.js                 ← all route path constants
    │   ├── site.js                   ← nav links, footer links, SEO meta defaults
    │   └── content/
    │       ├── collections.json      ← DEMO DATA — replaced by API in production
    │       ├── products.json         ← DEMO DATA — replaced by API in production
    │       └── siteConfig.json       ← DEMO DATA — replaced by API in production
    │
    ├── context/
    │   ├── SiteConfigContext.jsx     ← loads siteConfig — demo: JSON, prod: API
    │   └── WishlistContext.jsx       ← wishlist state — localStorage in demo
    │
    └── styles/
        └── main.css                  ← @import shared tokens + B2C colour overrides
```

### `apps/b2c/src/App.jsx`

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SiteConfigProvider } from './context/SiteConfigContext'
import { WishlistProvider } from './context/WishlistContext'
import B2CHeader from './components/layout/B2CHeader'
import B2CFooter from './components/layout/B2CFooter'

import HomePage from './pages/home'
import CollectionsPage from './pages/collections'
import ProductPage from './pages/product'
import StoryPage from './pages/story'
import StoresPage from './pages/stores'
import ContactPage from './pages/contact'

export default function App() {
  return (
    <SiteConfigProvider>
      <WishlistProvider>
        <BrowserRouter>
          <B2CHeader />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/collections/:slug" element={<ProductPage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/stores" element={<StoresPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <B2CFooter />
        </BrowserRouter>
      </WishlistProvider>
    </SiteConfigProvider>
  )
}
```

---

## 7. B2B App — `apps/b2b`

> URL: `b2b.brand.com`
> Tone: corporate, credibility-focused, international buyer
> Primary font: Cormorant Garamond (headings) + DM Sans (body) — same fonts, darker palette
> Colour mood: deep navy/charcoal, gold accents, white surfaces

```
apps/b2b/
│
├── index.html
├── vite.config.js
├── package.json                      ← imports @jewel/shared
├── .env                              ← VITE_API_URL=https://api.brand.com
├── .env.example
│
└── src/
    │
    ├── main.jsx
    ├── App.jsx                       ← routes + SiteConfigContext provider
    │
    ├── assets/
    │   ├── fonts/                    ← same font files as B2C (or symlink)
    │   └── images/                   ← factory photos, team, certifications
    │
    ├── components/
    │   ├── layout/
    │   │   ├── B2BHeader.jsx         ← logo, nav with capabilities/certifications
    │   │   ├── B2BFooter.jsx         ← corporate footer, export markets, legal
    │   │   └── MobileNav.jsx         ← mobile drawer
    │   │
    │   └── shared/                   ← B2B-only reusable components
    │       ├── CapabilityCard.jsx    ← icon + title + description card
    │       ├── CertBadge.jsx         ← BIS / IGI / GIA badge display
    │       ├── FactoryGallery.jsx    ← masonry image grid for factory photos
    │       └── StatCounter.jsx       ← animated: "25+ years", "40 countries"
    │
    ├── pages/
    │   ├── home/
    │   │   ├── index.jsx             ← assembles all home sections
    │   │   ├── HeroSection.jsx       ← manufacturing-focused hero + headline
    │   │   ├── ExportStats.jsx       ← StatCounter row: years, countries, clients
    │   │   ├── CapabilitiesPreview.jsx ← 3 capability cards with link to full page
    │   │   ├── CertificationsBar.jsx ← certification logos strip
    │   │   └── B2CLink.jsx           ← "View our retail collection →" link to B2C
    │   │
    │   ├── about/
    │   │   ├── index.jsx             ← founder story, factory, team
    │   │   └── FactorySection.jsx    ← factory photo gallery + stats
    │   │
    │   ├── capabilities/
    │   │   ├── index.jsx             ← full capabilities page
    │   │   ├── InfrastructureGrid.jsx ← machinery, capacity, production volume
    │   │   ├── ProcessSteps.jsx      ← design → casting → setting → QC → dispatch
    │   │   └── OEMServices.jsx       ← private label, ODM, custom design services
    │   │
    │   ├── collections/
    │   │   ├── index.jsx             ← product grid — NO prices shown
    │   │   └── ProductCard.jsx       ← image, name, metal, "Request Price" only
    │   │
    │   ├── certifications/
    │   │   └── index.jsx             ← full page: BIS, IGI, GIA + download docs
    │   │
    │   ├── catalogue/
    │   │   ├── index.jsx             ← gated catalogue page
    │   │   ├── CataloguePreview.jsx  ← blurred PDF preview with overlay CTA
    │   │   ├── GateForm.jsx          ← name, company, email, phone, country, interest
    │   │   └── SuccessMessage.jsx    ← "Check your email" confirmation screen
    │   │
    │   └── contact/
    │       ├── index.jsx             ← B2B inquiry page
    │       └── B2BInquiryForm.jsx    ← company, designation, country, requirement
    │
    ├── config/
    │   ├── routes.js
    │   ├── site.js                   ← B2B nav links, footer links, SEO meta
    │   └── content/
    │       ├── capabilities.json     ← DEMO DATA
    │       ├── collections.json      ← DEMO DATA — same products, no prices
    │       ├── certifications.json   ← DEMO DATA
    │       └── siteConfig.json       ← DEMO DATA
    │
    ├── context/
    │   └── SiteConfigContext.jsx     ← same pattern as B2C
    │
    └── styles/
        └── main.css                  ← @import shared tokens + B2B colour overrides
```

### `apps/b2b/src/App.jsx`

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SiteConfigProvider } from './context/SiteConfigContext'
import B2BHeader from './components/layout/B2BHeader'
import B2BFooter from './components/layout/B2BFooter'

import HomePage from './pages/home'
import AboutPage from './pages/about'
import CapabilitiesPage from './pages/capabilities'
import CollectionsPage from './pages/collections'
import CertificationsPage from './pages/certifications'
import CataloguePage from './pages/catalogue'
import ContactPage from './pages/contact'

export default function App() {
  return (
    <SiteConfigProvider>
      <BrowserRouter>
        <B2BHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/capabilities" element={<CapabilitiesPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <B2BFooter />
      </BrowserRouter>
    </SiteConfigProvider>
  )
}
```

---

## 8. Config & Hardcoded JSON — Demo Phase

> **Rule:** During the demo, all dynamic content lives in `config/content/*.json` files.
> The service files in `packages/shared/services/` check if `VITE_API_URL` is set.
> If not set → they import and return the local JSON.
> If set → they call the real Django API.
> **No other file changes when switching from demo to production.**

### `apps/b2c/src/config/content/siteConfig.json`

```json
{
  "hero": {
    "headline": "Crafted with Intention. Worn with Pride.",
    "subheadline": "Diamond jewellery for every milestone",
    "ctaText": "Explore Collections",
    "ctaLink": "/collections",
    "backgroundImage": "/images/hero-bg.jpg"
  },
  "featuredCollections": [
    { "id": 1, "name": "Bridal Solitaires", "slug": "bridal-solitaires", "image": "/images/bridal.jpg" },
    { "id": 2, "name": "Everyday Elegance", "slug": "everyday-elegance", "image": "/images/everyday.jpg" },
    { "id": 3, "name": "Heritage Collection", "slug": "heritage", "image": "/images/heritage.jpg" }
  ],
  "brandIntro": "For over 25 years, we have crafted diamond jewellery that tells your story.",
  "contact": {
    "phone": "+91 98XXX XXXXX",
    "email": "hello@brand.com",
    "whatsapp": "+91 98XXX XXXXX",
    "address": "Surat, Gujarat, India"
  }
}
```

### `apps/b2c/src/config/content/collections.json`

```json
[
  {
    "id": 1,
    "name": "Bridal Solitaires",
    "slug": "bridal-solitaires",
    "description": "Timeless solitaire rings crafted for your forever moment.",
    "coverImage": "/images/collections/bridal-cover.jpg",
    "category": "Rings"
  },
  {
    "id": 2,
    "name": "Everyday Elegance",
    "slug": "everyday-elegance",
    "description": "Lightweight diamond pieces you can wear every day.",
    "coverImage": "/images/collections/everyday-cover.jpg",
    "category": "Earrings"
  }
]
```

### `apps/b2b/src/config/content/capabilities.json`

```json
[
  {
    "id": 1,
    "title": "In-House Manufacturing",
    "description": "Complete production facility with casting, setting, and finishing under one roof.",
    "icon": "factory"
  },
  {
    "id": 2,
    "title": "OEM & Private Label",
    "description": "Custom design and manufacturing for international retail brands.",
    "icon": "label"
  },
  {
    "id": 3,
    "title": "Quality Certifications",
    "description": "BIS hallmarked, IGI and GIA certified stones across all collections.",
    "icon": "cert"
  }
]
```

### `SiteConfigContext.jsx` — same pattern in both apps

```jsx
import { createContext, useContext, useEffect, useState } from 'react'

// DEMO: import local JSON directly
import localConfig from '../config/content/siteConfig.json'

// PRODUCTION: import getSiteConfig from '@jewel/shared' and call API instead

const SiteConfigContext = createContext(null)

export function SiteConfigProvider({ children }) {
  const [config, setConfig] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // DEMO PHASE: use local JSON
    setConfig(localConfig)
    setLoading(false)

    // PRODUCTION PHASE: replace above two lines with:
    // getSiteConfig().then(data => { setConfig(data); setLoading(false) })
  }, [])

  return (
    <SiteConfigContext.Provider value={{ config, loading }}>
      {children}
    </SiteConfigContext.Provider>
  )
}

export const useSiteConfig = () => useContext(SiteConfigContext)
```

---

## 9. How to Switch from JSON to API — Production Phase

> This is a one-time switch per service file. The folder structure does not change.
> Total time to switch all services: approximately 2–3 hours.

### Step 1 — Set environment variable

In `apps/b2c/.env` and `apps/b2b/.env`:

```
VITE_API_URL=https://api.brand.com
```

### Step 2 — Update `SiteConfigContext.jsx` in both apps

Remove the local JSON import. Uncomment the API call.

```jsx
// REMOVE THIS:
import localConfig from '../config/content/siteConfig.json'

// ADD THIS:
import { getSiteConfig } from '@jewel/shared'

// In useEffect, REMOVE:
setConfig(localConfig)
setLoading(false)

// And ADD:
getSiteConfig()
  .then(data => { setConfig(data); setLoading(false) })
  .catch(() => setLoading(false))
```

### Step 3 — Update `packages/shared/services/settings.js`

```js
import apiClient from './api'

// This is already the production-ready call.
// It works as soon as VITE_API_URL is set.
export const getSiteConfig = () =>
  apiClient.get('/api/site-config/').then(res => res.data)
```

### Step 4 — Update `packages/shared/services/products.js`

```js
import apiClient from './api'

export const getProducts = (params = {}) =>
  apiClient.get('/api/products/', { params }).then(res => res.data)

export const getCollection = (slug) =>
  apiClient.get(`/api/collections/${slug}/`).then(res => res.data)

export const getProduct = (slug) =>
  apiClient.get(`/api/products/${slug}/`).then(res => res.data)
```

### Step 5 — Update `packages/shared/services/leads.js`

```js
import apiClient from './api'

export const submitB2BLead = (formData) =>
  apiClient.post('/api/leads/', formData).then(res => res.data)

export const requestCatalogue = (formData) =>
  apiClient.post('/api/catalogue/request/', formData).then(res => res.data)
```

That is the entire switch. All pages, components, and hooks remain untouched.

---

## 10. Django Backend — Models & Admin Panel

> The Django project lives in a separate repo: `jewellery-api/`
> It serves `api.brand.com` via Nginx.
> The admin panel lives at `api.brand.com/admin/`

### Django App Structure

```
jewellery-api/
│
├── manage.py
├── requirements.txt
├── .env                              ← SECRET_KEY, DB credentials, R2 keys
│
├── config/
│   ├── settings.py
│   ├── urls.py                       ← includes all app URLs under /api/
│   └── wsgi.py
│
├── products/                         ← products, collections, variants
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   ├── urls.py
│   └── admin.py
│
├── leads/                            ← B2B form submissions, catalogue requests
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   ├── urls.py
│   └── admin.py
│
├── catalogue/                        ← PDF upload, gated download link generation
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   └── admin.py
│
└── siteconfig/                       ← dynamic content the client edits in admin
    ├── models.py
    ├── serializers.py
    ├── views.py
    ├── urls.py
    └── admin.py
```

### Core Django Models

#### `products/models.py`

```python
from django.db import models

class Collection(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    cover_image = models.ImageField(upload_to='collections/')
    is_featured = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.name


class Product(models.Model):
    METAL_CHOICES = [
        ('yellow_gold', 'Yellow Gold'),
        ('white_gold', 'White Gold'),
        ('rose_gold', 'Rose Gold'),
        ('platinum', 'Platinum'),
    ]

    collection = models.ForeignKey(Collection, on_delete=models.CASCADE, related_name='products')
    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    metal_type = models.CharField(max_length=50, choices=METAL_CHOICES)
    carat_weight = models.CharField(max_length=50, blank=True)
    show_price = models.BooleanField(default=False)
    price = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='products/')
    is_primary = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)
```

#### `leads/models.py`

```python
from django.db import models

class B2BLead(models.Model):
    STATUS_CHOICES = [
        ('new', 'New'),
        ('contacted', 'Contacted'),
        ('qualified', 'Qualified'),
        ('closed', 'Closed'),
    ]

    name = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=30)
    country = models.CharField(max_length=100)
    product_interest = models.TextField(blank=True)
    source = models.CharField(max_length=50, default='website')  # catalogue / contact / home
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')
    created_at = models.DateTimeField(auto_now_add=True)
    notes = models.TextField(blank=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} — {self.company} ({self.country})"
```

#### `siteconfig/models.py`

```python
from django.db import models

class SiteConfig(models.Model):
    """
    Singleton model — only one row ever exists.
    The client edits this in Django admin to change
    homepage content without touching code.
    """
    # B2C Hero
    b2c_hero_headline = models.CharField(max_length=200)
    b2c_hero_subheadline = models.CharField(max_length=300)
    b2c_hero_cta_text = models.CharField(max_length=50, default='Explore Collections')

    # B2B Hero
    b2b_hero_headline = models.CharField(max_length=200)
    b2b_hero_subheadline = models.CharField(max_length=300)

    # Brand stats shown on B2B
    years_experience = models.PositiveIntegerField(default=25)
    countries_served = models.PositiveIntegerField(default=40)
    products_manufactured = models.CharField(max_length=50, default='10,000+')

    # Contact
    phone = models.CharField(max_length=30)
    whatsapp = models.CharField(max_length=30)
    email = models.EmailField()
    address = models.TextField()

    # Toggles
    show_b2c_link_on_b2b = models.BooleanField(default=True)
    catalogue_active = models.BooleanField(default=True)

    def save(self, *args, **kwargs):
        # Enforce singleton — always use pk=1
        self.pk = 1
        super().save(*args, **kwargs)

    def __str__(self):
        return "Site Configuration"
```

#### `catalogue/models.py`

```python
from django.db import models
import uuid

class Catalogue(models.Model):
    title = models.CharField(max_length=200)
    pdf_file = models.FileField(upload_to='catalogues/')
    version = models.CharField(max_length=50)
    is_active = models.BooleanField(default=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} v{self.version}"


class CatalogueRequest(models.Model):
    catalogue = models.ForeignKey(Catalogue, on_delete=models.SET_NULL, null=True)
    lead = models.ForeignKey('leads.B2BLead', on_delete=models.CASCADE)
    token = models.UUIDField(default=uuid.uuid4, unique=True)
    expires_at = models.DateTimeField()
    downloaded = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
```

---

## 11. How Frontend Connects to Django Admin

> The client manages ALL website content from one URL: `api.brand.com/admin/`
> No code changes needed to update products, text, leads, or catalogue.

### What the client sees in Django Admin

| Section | What they can do |
|---|---|
| **Collections** | Add, edit, delete collections. Set featured status. Reorder via `order` field. |
| **Products** | Add products with photos, description, metal type. Toggle price visible/hidden. |
| **Product Images** | Upload multiple images per product. Set primary image. |
| **Site Config** | Edit homepage headlines, stats, contact details. All frontend reads this. |
| **B2B Leads** | View all form submissions. Filter by country, status, date. Export to CSV. |
| **Catalogue** | Upload new PDF. Mark as active. Old version auto-deactivated. |
| **Catalogue Requests** | See who requested catalogue, when, whether they downloaded it. |

### Admin Registration — `products/admin.py`

```python
from django.contrib import admin
from .models import Collection, Product, ProductImage

class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 3

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'collection', 'metal_type', 'show_price', 'is_active']
    list_filter = ['collection', 'metal_type', 'is_active']
    list_editable = ['is_active', 'show_price']
    search_fields = ['name', 'description']
    prepopulated_fields = {'slug': ('name',)}
    inlines = [ProductImageInline]

@admin.register(Collection)
class CollectionAdmin(admin.ModelAdmin):
    list_display = ['name', 'is_featured', 'order']
    list_editable = ['is_featured', 'order']
    prepopulated_fields = {'slug': ('name',)}
```

### Admin Registration — `leads/admin.py`

```python
from django.contrib import admin
from .models import B2BLead

@admin.register(B2BLead)
class B2BLeadAdmin(admin.ModelAdmin):
    list_display = ['name', 'company', 'country', 'email', 'status', 'created_at']
    list_filter = ['status', 'country', 'source', 'created_at']
    list_editable = ['status']
    search_fields = ['name', 'company', 'email']
    readonly_fields = ['created_at']
```

### Django API Endpoints consumed by frontend

| Endpoint | Method | Used by | Returns |
|---|---|---|---|
| `/api/site-config/` | GET | Both | SiteConfig JSON |
| `/api/collections/` | GET | Both | All collections list |
| `/api/collections/:slug/` | GET | Both | Single collection + products |
| `/api/products/` | GET | Both | Products, filterable by collection |
| `/api/products/:slug/` | GET | Both | Single product with images |
| `/api/leads/` | POST | B2B | Create new B2B lead |
| `/api/catalogue/request/` | POST | B2B | Submit gate form, triggers email |

---

## 12. CI/CD — GitHub Actions

> Two separate workflow files — one per app.
> Push to `main` branch triggers build and deploy.
> Staging: push to `dev` branch deploys to staging subdomain.

### `.github/workflows/deploy-b2c.yml`

```yaml
name: Deploy B2C

on:
  push:
    branches: [main]
    paths: ['apps/b2c/**', 'packages/shared/**']

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build:b2c
        env:
          VITE_API_URL: ${{ secrets.API_URL }}
      - name: Deploy to VPS
        uses: appleboy/scp-action@master
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USER }}
          key: ${{ secrets.VPS_SSH_KEY }}
          source: "apps/b2c/dist/*"
          target: "/var/www/brand.com"
          strip_components: 3
```

### `.github/workflows/deploy-b2b.yml`

Same as above — change `b2c` to `b2b` and target to `/var/www/b2b.brand.com`.

---

## 13. Nginx — Subdomain Routing

```nginx
# B2C — brand.com
server {
    listen 80;
    server_name brand.com www.brand.com;
    root /var/www/brand.com;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}

# B2B — b2b.brand.com
server {
    listen 80;
    server_name b2b.brand.com;
    root /var/www/b2b.brand.com;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}

# Django API — api.brand.com
server {
    listen 80;
    server_name api.brand.com;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

> SSL is handled by Cloudflare — no Certbot needed if using Cloudflare Full (Strict) mode.

---

## 14. Demo Build Checklist

Build only these pages for the demo. Nothing else.

### B2C Demo — `brand.com`

- [ ] `pages/home/index.jsx` — hero, 3 featured collections, brand intro strip, footer
- [ ] `pages/collections/index.jsx` — product grid, category filter (static)
- [ ] `components/layout/B2CHeader.jsx` — logo, nav links, mobile hamburger
- [ ] `components/layout/B2CFooter.jsx`
- [ ] All data from `config/content/collections.json` and `siteConfig.json`

### B2B Demo — `b2b.brand.com`

- [ ] `pages/home/index.jsx` — manufacturing hero, stats row, capabilities preview, cert bar
- [ ] `pages/catalogue/index.jsx` — blurred preview + gate form + success screen
- [ ] `components/layout/B2BHeader.jsx`
- [ ] `components/layout/B2BFooter.jsx`
- [ ] All data from `config/content/capabilities.json` and `siteConfig.json`

### Demo Staging Setup

- [ ] Run `npm run build:b2c` and `npm run build:b2b`
- [ ] Drop `/dist` folders on VPS manually via SCP or SFTP
- [ ] Confirm `brand.com` and `b2b.brand.com` resolve to correct builds
- [ ] Test catalogue gate form end-to-end (can mock the email for demo)
- [ ] Test on mobile — both sites must be responsive

---

## 15. Production Launch Checklist

Complete this only after client approval.

### Frontend
- [ ] All pages built for both B2B and B2C
- [ ] `VITE_API_URL` set in both `.env` files
- [ ] All JSON imports replaced with API service calls
- [ ] SEO meta tags added via `react-helmet` on all pages
- [ ] Lighthouse score above 85 on both sites
- [ ] GitHub Actions CI/CD workflows tested end-to-end

### Backend
- [ ] All Django models migrated to production PostgreSQL
- [ ] Media files configured to upload to Cloudflare R2
- [ ] Django admin superuser created for client
- [ ] CORS settings: allow `brand.com` and `b2b.brand.com` only
- [ ] Rate limiting on `/api/leads/` and `/api/catalogue/request/`
- [ ] Catalogue email sending tested with real SMTP

### Infrastructure
- [ ] Cloudflare DNS pointing `brand.com`, `b2b.brand.com`, `api.brand.com` to VPS
- [ ] Cloudflare SSL mode set to Full (Strict)
- [ ] Nginx config live and tested for all three subdomains
- [ ] VPS firewall: only ports 80, 443, 22 open
- [ ] Daily database backup configured

### Handover
- [ ] Client shown Django admin walkthrough (recorded)
- [ ] Client can add a product, edit hero text, view leads independently
- [ ] Documentation shared with client
- [ ] 3-month support retainer agreement signed
