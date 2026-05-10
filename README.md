# TEAM DARK — Premium Social Media & Creative Agency Website

A full-stack Next.js 15 website for **TEAM DARK**, a premium creative social media agency.

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## 📁 Folder Structure

```
team-dark/
├── public/
│   └── favicon.svg
├── src/
│   ├── app/
│   │   ├── globals.css          ← Global styles, grain texture, custom scrollbar
│   │   ├── layout.tsx           ← Root layout (fonts, metadata, wrappers)
│   │   ├── page.tsx             ← Home page
│   │   ├── not-found.tsx        ← 404 page
│   │   ├── error.tsx            ← Error boundary
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── portfolio/
│   │   │   └── page.tsx
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   └── components/
│       ├── layout/
│       │   ├── Navbar.tsx        ← Sticky navbar + mobile drawer
│       │   ├── Footer.tsx        ← Full footer with CTA band
│       │   └── LoadingScreen.tsx ← Animated loading screen
│       ├── ui/
│       │   ├── CustomCursor.tsx  ← Custom cursor (desktop only)
│       │   ├── ScrollProgress.tsx← Gold scroll progress bar
│       │   └── AnimatedCounter.tsx← Count-up numbers on scroll
│       └── sections/
│           ├── home/
│           │   ├── HeroSection.tsx
│           │   ├── ServicesOverview.tsx
│           │   ├── WhyChooseUs.tsx
│           │   ├── ProcessSection.tsx
│           │   ├── Testimonials.tsx
│           │   └── FinalCTA.tsx
│           ├── services/
│           │   └── ServicesPage.tsx
│           ├── portfolio/
│           │   └── PortfolioPage.tsx
│           ├── pricing/
│           │   └── PricingPage.tsx
│           ├── about/
│           │   └── AboutPage.tsx
│           └── contact/
│               └── ContactPage.tsx
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
├── postcss.config.js
└── package.json
```

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 15 | Framework (App Router) |
| React 19 | UI library |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| Google Fonts (Syne, DM Sans, Space Mono) | Typography |

---

## 🎨 Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `gold` | `#c9a84c` | Primary accent |
| `gold-light` | `#e4c87a` | Hover state |
| `dark-900` | `#050505` | Page background |
| `dark-800` | `#0a0a0a` | Section background |
| `dark-700` | `#111111` | Card background |
| `gray-muted` | `#888888` | Body text |

### Fonts
- **Syne** — Display headings (font-display)
- **DM Sans** — Body text (font-body)
- **Space Mono** — Monospace labels (font-mono)

---

## 🚀 Deployment to Vercel

```bash
# Option 1: CLI
npm i -g vercel
vercel

# Option 2: GitHub → Vercel
# Push to GitHub → Import to vercel.com → Auto-deploy

# Build command: npm run build
# Output directory: .next (auto-detected)
# Node version: 18+
```

### Environment Variables (add in Vercel dashboard)
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
# Add your contact form endpoint, Cal.com link, WhatsApp number etc.
```

---

## 📋 Pages Overview

| Page | Route | Key Features |
|------|-------|-------------|
| Home | `/` | Hero, Services overview, Why Us, Process, Testimonials, CTA |
| Services | `/services` | 8 service cards, workflow pipeline |
| Portfolio | `/portfolio` | Filterable grid, before/after, stats |
| Pricing | `/pricing` | 3 tiers, comparison table, FAQ |
| About | `/about` | Story, timeline, team, values |
| Contact | `/contact` | Form, WhatsApp/IG CTAs, booking, hours |

---

## 🔧 Customisation Guide

### Change contact details
`src/components/layout/Footer.tsx` and `src/components/sections/contact/ContactPage.tsx`
- Replace WhatsApp number, email, Instagram handle

### Change pricing
`src/components/sections/pricing/PricingPage.tsx` → `plans` array

### Add real portfolio items
`src/components/sections/portfolio/PortfolioPage.tsx` → `projects` array
- Add `thumbnail` field and replace gradient divs with `<Image>` tags

### Connect contact form
`src/components/sections/contact/ContactPage.tsx` → `handleSubmit` function
- Replace the fake timeout with a real API call (e.g. Resend, EmailJS, Formspree)

### Change team members
`src/components/sections/about/AboutPage.tsx` → `team` array

---

## 📈 Performance Tips

- Replace gradient placeholders in Portfolio with real `next/image` optimised images
- Add `loading="lazy"` to below-fold images
- Connect a real CMS (Sanity, Contentful) for blog/portfolio content
- Add `revalidate` to any server components that fetch data

---

## 📄 License
© 2024 TEAM DARK. All rights reserved.
