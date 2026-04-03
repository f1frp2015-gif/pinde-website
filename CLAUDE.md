@AGENTS.md

# PINDE Website Project

## Brand
- **Brand Name**: PINDE (品德)
- **Domain**: pinde-alu.com
- **Industry**: Premium Aluminum System Windows & Doors
- **Benchmarks**: Schuco (旭格), YKK
- **Manufacturing Base**: Chongqing, China
- **Target Markets**: Australia, New Zealand, USA, Canada, Europe, Middle East
- **Target Customers**: Small B2B + Retail (high-end)

## Tech Stack
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS (v4, @theme inline)
- **Language**: TypeScript, English-only content
- **Icons**: lucide-react
- **Animations**: framer-motion (installed, not yet used)
- **CMS**: None — hardcoded content with placeholders
- **Deployment**: Vercel (pending setup)

## Design
- **Primary Color**: #1a1a2e (dark navy)
- **Accent Color**: #c8a45c (gold)
- **Typography**: Inter (Google Fonts)
- **Style**: Premium, architectural, clean — similar to Schuco aesthetic

## Project Structure
```
src/
├── app/                  # Pages (App Router)
│   ├── layout.tsx        # Root layout (Header + Footer + WhatsApp)
│   ├── page.tsx          # Home
│   ├── about/page.tsx
│   ├── products/page.tsx
│   ├── products/[slug]/page.tsx
│   ├── projects/page.tsx
│   ├── technology/page.tsx
│   ├── quality/page.tsx
│   └── contact/page.tsx
├── components/           # Reusable components
│   ├── Header.tsx        # Sticky nav with mobile menu
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx # Floating chat button
│   ├── ContactForm.tsx
│   ├── HeroSection.tsx
│   ├── ProductCard.tsx
│   ├── ProjectCard.tsx
│   ├── FeatureGrid.tsx
│   └── CertificationBanner.tsx
├── data/
│   ├── products.ts       # 7 product categories (placeholder specs)
│   └── projects.ts       # 6 global project cases
└── lib/
    └── constants.ts      # Brand info, nav links, certifications
```

## Placeholders to Fill
- `src/lib/constants.ts` — phone, email, WhatsApp number, full address
- `src/data/products.ts` — real specs (profile depth, U-value, etc.)
- `src/data/projects.ts` — real project cases and descriptions
- All `[Placeholder]` text blocks in page files
- `public/images/` — product photos, factory photos, project photos, team photos

## Commands
```bash
npm run dev    # Start dev server at http://localhost:3000
npm run build  # Production build
```

## Deployment Status
- GitHub repo: Not yet created (pending `gh auth login`)
- Vercel: Not yet connected
- Domain: pinde-alu.com (to be configured in Vercel)
