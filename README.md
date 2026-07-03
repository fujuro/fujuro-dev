# Dzhalil Kalimov | Frontend Developer

Personal portfolio site built with Next.js 16, React 19, TypeScript and Tailwind CSS 4. Glassmorphism design, dark/light themes, RU/EN localization, SEO optimized.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **UI:** React 19, TypeScript, Tailwind CSS 4
- **Features:** i18n (RU/EN), theme toggle with View Transitions API, responsive layout, scroll animations, JSON-LD schema

## Project structure

```
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx       # Locale layout, metadata, providers
│   │   └── page.tsx         # Main page composition
│   ├── globals.css          # Global styles, theme variables
│   ├── theme-init.tsx       # Inline script for theme flash prevention
│   ├── robots.ts            # SEO: robots.txt generation
│   ├── sitemap.ts           # SEO: sitemap.xml generation
│   └── manifest.ts          # PWA manifest
├── content/
│   └── i18n.ts              # Localized content (RU/EN)
├── layout/
│   ├── header/              # Navigation, theme/locale switcher
│   └── footer/              # Footer component
├── sections/
│   ├── hero/                # Hero section
│   ├── about/               # About section
│   ├── skills/              # Skills section
│   ├── experience/          # Experience section
│   ├── projects/            # Projects section
│   ├── achievements/        # Achievements section
│   └── contact/             # Contact section
├── providers/
│   ├── theme/               # Theme context (light/dark/system)
│   └── i18n/                # i18n context
├── shared/
│   ├── components/          # Reusable UI (GlassCard, AnimateOnScroll)
│   ├── constants/           # Links, skills, projects data
│   ├── helpers/             # Utilities (JSON-LD generation)
│   ├── icons/               # SVG icon components
│   └── types/               # Shared TypeScript types
└── public/
    ├── cv/                  # PDF resumes (RU, EN)
    └── opengraph.png        # OG image
```

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Author

**Dzhalil Kalimov** — [GitHub](https://github.com/fujuro) · [LinkedIn](https://www.linkedin.com/in/fujuro) · [Telegram](https://t.me/fujura)
