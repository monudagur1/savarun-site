# SAVARUN.com — Phase 1 Architecture

> Product website for **SAVARUN** (Coming Soon).  
> Parent: **SAWARUN TECH PRIVATE LIMITED** · Corporate: [savarun.in](https://www.savarun.in)

## 1. Goals

| Goal | Approach |
|------|----------|
| Flagship product experience | Cinematic home, editorial typography, monochrome luxury |
| Honesty | Future tense copy; simulated demo labeled; no fake metrics |
| Performance | Static export; R3F desktop-only; mobile CSS hero fallback |
| Maintainability | Feature-based folders, typed env, shared primitives (Phase 2+) |
| Deploy | GitHub Actions → `out/` → GitHub Pages @ `www.savarun.com` |

## 2. Information Architecture

```
/                          Home (cinematic)
/vision/                   Brand & product vision
/technology/               Stack & approach (planned)
/how-it-works/             User journey (planned)
/features/                 Feature grid (planned tense)
/demo/                     Simulated preview — NOT live AI
/ai-fashion-intelligence/  Deep dive on AI styling (planned)
/blog/                     Coming soon + email capture only
/careers/                  Not hiring — check back
/contact/                  Contact form → placeholder endpoint
/privacy/                  Legal
/terms/                    Legal
404                        Custom not-found
```

**Omitted until real assets exist:** `/press/` (no nav link)

## 3. Tech Stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | Next.js 15 App Router | `output: 'export'` for GitHub Pages |
| Language | TypeScript strict | No `any` in production code |
| Styling | Tailwind CSS 3 | Tokens in Phase 2 |
| Motion | Framer Motion + GSAP | Lenis smooth scroll (Phase 5) |
| 3D | R3F + Drei | Desktop only; static fallback mobile |
| UI primitives | shadcn/ui | Phase 2 |
| State | Zustand | UI / demo state |
| Server state | TanStack Query | When API exists |
| Validation | Zod | Forms, env |
| Content | MDX | Blog when ready |
| Test | Vitest + Playwright | Phase 8 |
| CI/CD | GitHub Actions | Build → Pages artifact |
| Container | Docker | Optional local preview |

## 4. Repository Layout

```
app/                    Routes (App Router)
components/
  layout/               Shell, nav, footer (Phase 3)
  sections/             Page sections (Phase 4)
  three/                R3F scenes (Phase 6)
  motion/               Animation wrappers (Phase 5)
  ui/                   shadcn + custom (Phase 2)
  forms/                Waitlist, contact (Phase 4)
lib/
  constants.ts          Site + legal placeholders
  env.ts                Typed public env
  metadata.ts           SEO helpers
  utils.ts              cn(), helpers
hooks/                  useMediaQuery, useReducedMotion, etc.
stores/                 Zustand slices
content/                MDX + static copy (Phase 4+)
public/                 CNAME, favicon, static assets
docs/                   Architecture, decisions
```

## 5. Rendering & Deploy

- **Static export** — no Node server on GitHub Pages
- **Client components** for motion, 3D, forms
- **Server components** for metadata, static shells where possible
- **Trailing slashes** — `trailingSlash: true` for Pages compatibility
- **Images** — `unoptimized: true` (static host)

### CI pipeline

```
push main → checkout → npm ci → npm run build → upload out/ → deploy-pages
```

Env vars (GitHub Secrets / `.env.local`):

- `NEXT_PUBLIC_SITE_URL` = `https://www.savarun.com`
- `NEXT_PUBLIC_WAITLIST_ENDPOINT` = `[WAITLIST_API_ENDPOINT]`

## 6. Motion & 3D Architecture (planned)

```
┌─────────────────────────────────────────┐
│ RootLayout                               │
│  ├─ Providers (Lenis, reduced-motion)   │
│  ├─ Header / Footer                     │
│  └─ Page                                 │
│       ├─ HeroScene (client)              │
│       │    ├─ Desktop: R3F canvas        │
│       │    └─ Mobile: StaticHero (CSS)   │
│       └─ Sections (Reveal, GSAP pins)    │
└─────────────────────────────────────────┘
```

**Rules:**

- `prefers-reduced-motion` → disable Lenis, GSAP, R3F; show static layout
- Touch / mobile width → no R3F, no magnetic buttons, no cursor physics
- Monochrome shaders only (grayscale materials)

## 7. Honesty & Copy System

- Central `lib/copy.ts` (Phase 4) — future tense helpers
- Demo page banner: "Simulated preview — not connected to live AI"
- No testimonials, stats, press logos without real data
- Placeholder assets use `.placeholder-surface` utility (Phase 2)

## 8. SEO & Schema

- `Organization` → SAWARUN TECH PRIVATE LIMITED
- `SoftwareApplication` → SAVARUN (preorder / coming soon)
- Per-page `generateMetadata`
- `robots.ts`, `sitemap.ts` auto-generated from routes

## 9. Accessibility

- WCAG AA contrast on `#B3B3B3` / `#808080` vs `#000` / `#0A0A0A`
- Skip link, focus rings, semantic landmarks
- Full static fallback under `prefers-reduced-motion`

## 10. Performance Budget

| Target | Desktop | Mobile |
|--------|---------|--------|
| Lighthouse Performance | >95 | >85 |
| Accessibility | >95 | >95 |
| SEO | >95 | >95 |
| Best Practices | >95 | >95 |

Degrade animation before degrading a11y/SEO.

## 11. Phase Roadmap

| Phase | Deliverable | Status |
|-------|-------------|--------|
| 1 | Architecture + scaffold | **Current** |
| 2 | Design system (tokens, typography, shadcn) | Pending |
| 3 | Layout (header, footer, page shells) | Pending |
| 4 | Components + copy | Pending |
| 5 | Animations + fallbacks | Pending |
| 6 | 3D + interactive demo | Pending |
| 7 | Optimization | Pending |
| 8 | Testing (Vitest, Playwright, a11y) | Pending |

---

*Stop here. Say **Continue** for Phase 2.*
