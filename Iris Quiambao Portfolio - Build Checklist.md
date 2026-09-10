# Iris Quiambao Portfolio — Build Checklist

Track progress phase by phase. Check boxes as you complete them.
Stack: Next.js + React + TypeScript + Tailwind + Motion for React + Vercel.
Fonts: fallbacks for now, swap when downloaded. Images: placeholders. Project URLs: TBD (you will provide).

---

## Phase 1 — Foundation
- [x] Next.js project created (`npx create-next-app@latest iris-quiambao-portfolio`)
- [x] TypeScript enabled
- [x] Tailwind CSS configured
- [x] App Router + import alias configured
- [x] ESLint passing
- [x] `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `app/sitemap.ts`, `app/robots.ts` created
- [x] Design tokens in CSS (`--lavender #e9e8ff`, `--navy #1b1a55`, `--muted-purple #9290c3`, `--deep-navy #070f2b`, `--white`, `--black`, `--olive-gold #8d8400`, `--green #1e5923`, `--accent-purple #9f84dd`, `--dark-purple #39375d`, `--deep-teal #0c4056`, `--muted-teal #2d5971`)
- [x] Font system wired (fallbacks now, local swap later — see Fonts note below)
- [x] Project structure created (`components/navigation|sections|ui|layout`, `data/portfolio.ts`, `types/portfolio.ts`, `public/images/...`, `public/fonts/...`)
- [ ] Git initialized + GitHub repo `iris-quiambao-portfolio` pushed

## Phase 2 — Layout Shell
- [x] `components/layout/Container.tsx` + `Section.tsx`
- [x] `components/navigation/Navbar.tsx` (desktop: Iris Quiambao + About / Work / Background / Contact)
- [x] `components/navigation/MobileMenu.tsx` (client component only)
- [x] `sections/Hero.tsx` — bg #e9e8ff 63%, `Explore my / of crafted works` 19.2px Montserrat + `Portfolio` 122px Le Jour (fallback), editorial asymmetric + placeholder hero image
- [x] `sections/Footer.tsx` — CONNECT WITH ME 14px #39375d, Email/Instagram/Facebook 6.7px, THANK YOU! 59.6px Le Jour #39375d, metadata line, copyright bar #1b1a55 `All rights reserved — Established in 2026`
- [x] `ui/Reveal.tsx`, `ui/ProjectImage.tsx`, `ui/SectionLabel.tsx`, `ui/ProjectLink.tsx` created
- [x] Navbar anchors work (`#about`, `#work`, `#background`, `#contact`)

## Phase 3 — Content Sections
- [x] `sections/About.tsx` — #e9e8ff, `Hey, there!` Lora 21px, `A little walkthrough about me` Tan Nimbus (fallback) 36.4px with 3-color treatment, 2 paragraphs Montserrat 11px
- [x] `sections/Quote.tsx` — #1b1a55, quote Le Jour 21.6px white + support Montserrat 10.8px white, generous whitespace
- [x] `sections/BackgroundSkills.tsx` — heading Le Jour 35px, Core Expertise (7 items), Education (2021-2025 PSU BSIT / 2019-2020 PSNHS HUMSS), Work (Dec25-Jan26 Freelance / Feb-Dec25 Tigernethost), all Montserrat
- [x] Content faithful to spec, no lorem ipsum

## Phase 4 — Portfolio Chapters
- [x] `sections/PhaseDivider.tsx` reusable (`title` + `phase` props)
- [x] PhaseDivider 1: UI DESIGN 95.1px #e9e8ff on #1b1a55 90% + `First Phase` 10.8px
- [x] `sections/UIDesign.tsx` — #e9e8ff, `1st Phase` 13px, `UI Design` 24.4px #1b1a55, links MACCII / SUPER-AIRE / CHEF VINCE GARCIA (href TBD), description 11.8px, footer meta `Iris Quiambao | Portfolio '26`
- [x] PhaseDivider 2: BRAND IDENTITY 95.1px white on #9290c3 90% + `Second Phase`
- [x] `sections/BrandIdentity.tsx` intro + `sections/KnitKnots.tsx` (KNIT KNOTS 59.4px #9290c3, overview 14.6px, body 11.4px, editorial gallery placeholders: logo/typography/palette/packaging/social)
- [x] `sections/Techvance.tsx` (Techvance 59.4px #0c4056, overview #2d5971, body 11.4px, placeholders: logo/card/website/signage)
- [x] PhaseDivider 3: POSTERS AND PATTERNS 95.1px white on #1b1a55 + `Third Phase`
- [x] `sections/PostersPatterns.tsx` — #e9e8ff, `3rd Phase` 13px, heading 24.4px #1b1a55, poster placeholders
- [x] `sections/Patterns.tsx` — #ffffff, `Patterns` 14px #9f84dd, Kapampangan heritage copy 11.4px, grid placeholders
- [x] `page.tsx` composes all in correct order, no mega-file

## Phase 5 — Animation (Motion for React only)
- [x] `motion` installed, imports from `motion/react`
- [x] Reusable variants (`revealUp` etc.) — no 30 one-off animations
- [x] Hero: typography reveal + image fade/scale + staggered support text
- [x] PhaseDividers: heading + label reveal + subtle bg transition
- [x] Projects: image reveal + scale + text fade-up; hover: image scale + underline
- [x] No bounce / spin / 3D / glassmorphism / heavy parallax
- [x] `useReducedMotion` respected (disable large movement, keep subtle opacity)

## Phase 6 — Responsive
- [x] Mobile-first, no horizontal overflow
- [x] Hero `Portfolio`: 122px desktop → 64-78px mobile via clamp
- [x] Phase titles 95.1px → 55-70px mobile
- [x] Project titles 59.4px → 28-42px mobile
- [x] Tablet: reduced headings, adjusted grid, less overlap
- [x] Mobile: stacked, recomposed (not shrunk), nav → MENU button
- [ ] Tested: 360px / 768px / 1280px / 1440px+

## Phase 7 — Optimization, A11y, SEO
- [x] Images: `next/image`, lazy except hero `priority`, `.webp/.avif`, explicit sizes (no layout shift)
- [x] Fonts: `next/font`, no FOUT/CLS regression
- [x] Server Components by default; client only where interactive (menu, motion wrappers)
- [x] No unused deps (only next, react, react-dom, motion, lucide-react)
- [x] Alt text meaningful (e.g. `Knit Knots crochet brand identity and packaging`, not `image1`)
- [x] Semantic HTML (`header/nav/main/section/article/footer`), logical H1-H3, focus states, keyboard nav, contrast
- [x] SEO: title `Iris Quiambao — Designer`, description, Open Graph, Twitter card, favicon, social preview, sitemap + robots

## Phase 8 — Deployment
- [x] `npm run lint` passes
- [x] `npm run build` passes
- [ ] Committed with meaningful messages (`feat:`, `fix:`, `perf:`)
- [ ] Pushed to GitHub `main`
- [ ] Vercel connected, production deploy succeeds
- [ ] Production URL tested desktop + mobile
- [ ] Final visual pass vs PNG overview

---

### Fonts — where to put them when downloaded
```
public/fonts/montserrat/*.woff2
public/fonts/lora/*.woff2
public/fonts/le-jour-serif/*.woff2
public/fonts/tan-nimbus/*.woff2
```
Then swap `next/font/local` in one place (CSS vars `--font-montserrat`, `--font-lora`, `--font-le-jour`, `--font-tan-nimbus`). Tell me when you have them.

### Images — placeholders now
```
public/images/hero/hero-main.webp
public/images/ui-design/maccii|superaire|chef-vince/
public/images/knit-knots/logo|packaging|social|identity.webp
public/images/techvance/logo|business-card|website|signage.webp
public/images/patterns/poster|pattern-01|pattern-02.webp
```
Swap files later, no code change needed.

### Project URLs — TBD
Edit `data/portfolio.ts` → `projects.uiDesign[].link` when you provide MACCII / SUPER-AIRE / Chef Vince Garcia links. Contacts default: `iriskayequiambao@gmail.com`, `eyeriskey` (FB/IG).
