@AGENTS.md

# PINDÉ Website Project

## Brand
- **Brand Name**: PINDÉ (品德)
- **Domain**: pinde-alu.com
- **Industry**: Premium Architectural Aluminium Systems
- **Benchmarks**: Schuco (旭格), YKK
- **Manufacturing Base**: Chongqing, China
- **Target Markets**: Australia, New Zealand, USA, Canada, Europe, Middle East
- **Target Customers**: Small B2B + Retail (high-end)

## Tech Stack
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS (v4, @theme inline)
- **Language**: TypeScript, English-only content
- **Icons**: lucide-react
- **Fonts**: Cormorant Garamond (serif display), DM Sans (body), JetBrains Mono (data)
- **Animations**: framer-motion (installed, not yet used)
- **CMS**: None — hardcoded content with placeholders
- **Deployment**: Vercel (pending setup)

## Design — φ-Cascade VI System

### Color Palette (8 colors ONLY, golden ratio proportions)
| Level | Name      | Hex     | φ target | Usage                         |
|-------|-----------|---------|----------|-------------------------------|
| L0    | Obsidian  | #0A0A0C | 61.8%    | Primary bg (hero, main, footer) |
| L1    | Surface   | #111113 | 14.6%    | Cards, alt sections, inputs    |
| L2    | Alabaster | #F5F0EB | 9.0%     | Headlines, primary text, logo  |
| L3    | Warm      | #B5AFA8 | 5.6%     | Body text, descriptions        |
| L4    | Bronze    | #C4956A | 3.4%     | Editorial accent (italic, data)|
| L5    | Signal Red| #D42B2B | 2.1%     | Dot, CTA, period punctuation   |
| L6    | Muted     | #555555 | 1.3%     | Labels, metadata, captions     |
| L7    | Line      | #1A1A1E | 0.8%     | All borders, dividers          |

### Rules
1. Obsidian ≥ 61.8% of visual surface — non-negotiable
2. Surface has ONE value: #111113 — no near-black variants
3. Border has ONE value: #1A1A1E — no gray variants
4. Red ≤ 2.13% of visible surface — scarcity = luxury
5. Bronze is editorial only — never structural/buttons/backgrounds
6. Text hierarchy: Alabaster → Warm → Muted (3 levels only)
7. Spacing uses Fibonacci: 8, 13, 21, 34, 55, 89, 144

### Logo
- Square + red dot SVG (PindeMark component)
- Dot diameter = side / φ³ = side × 0.1459
- Dot center = top-right vertex, 75% outside / 25% inside
- Font: Outfit Light 300, letter-spacing 0.44em

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
│   ├── PindeMark.tsx     # SVG logo mark (square + red dot)
│   ├── Header.tsx        # Fixed dark nav with mark + wordmark
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx
│   ├── ContactForm.tsx
│   ├── HeroSection.tsx
│   ├── ProductCard.tsx
│   ├── ProjectCard.tsx
│   ├── FeatureGrid.tsx
│   └── CertificationBanner.tsx
├── data/
│   ├── products.ts       # 15 products with real specs
│   └── projects.ts       # 6 global project cases
└── lib/
    └── constants.ts      # Brand info, L color system, nav links
```

## Placeholders to Fill
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
