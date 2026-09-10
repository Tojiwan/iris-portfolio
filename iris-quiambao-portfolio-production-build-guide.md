# Iris Quiambao Portfolio — Production & Build Guide

## 1. Purpose

This document is the implementation guide for building the Iris Quiambao portfolio from the approved visual specification.

The goal is not to create a generic portfolio template. The implementation should reproduce the editorial, premium, typography-led direction of the supplied portfolio while using a modern production-ready web stack.

The build should also follow the approach used in the user's previous premium portfolio project:

- Modern portfolio / creative-agency feel
- Strong visual hierarchy
- Large typography
- Carefully curated project presentation
- Responsive layouts
- Smooth, purposeful motion
- GitHub-based version control
- Vercel deployment
- Component-based React architecture
- AI-assisted development through the user's existing OpenCode workflow

---

# 2. Recommended Tech Stack

## Core Stack

### Next.js

Use **Next.js with the App Router**.

Why:

- React-based
- Excellent for portfolio websites
- Built-in routing
- Image optimization
- Font optimization
- Metadata / SEO support
- Server Components by default
- Easy Vercel deployment
- Can remain mostly static while still allowing interactive Client Components

Next.js currently recommends the App Router for its newer React features, including Server Components and Suspense.

Official documentation:
https://nextjs.org/docs/app

---

### React

Use React as the UI component layer.

React should be used for:

- Reusable portfolio sections
- Interactive navigation
- Project galleries
- Image interactions
- Motion components
- Mobile navigation
- Contact interactions

This project is a web portfolio, so the correct stack is:

```text
Next.js
+
React
```

---

### TypeScript

Use TypeScript.

Recommended:

```text
TypeScript
```

instead of plain JavaScript.

Benefits:

- Better component props
- Safer project data
- Easier refactoring
- Better AI-assisted coding
- Better maintainability
- Better autocomplete
- Easier scaling if the portfolio grows

---

### Tailwind CSS

Use Tailwind CSS for the majority of styling.

Use Tailwind for:

- Layout
- Spacing
- Responsive behavior
- Colors
- Typography
- Grid
- Flexbox
- Positioning
- Responsive breakpoints

However, do not force every visual effect into utility classes.

Use a global CSS file for:

- Custom font-face declarations
- CSS variables
- Complex editorial layouts
- Text effects
- Custom scrollbar behavior
- Global selection styles
- Special image treatments
- Complex animations that are better expressed in CSS

---

### Motion for React

Use **Motion for React** for animations.

The library was previously known as Framer Motion.

Current recommended package:

```bash
npm install motion
```

Import from:

```tsx
import { motion } from "motion/react";
```

Use Motion for:

- Section reveals
- Image reveals
- Fade/slide animations
- Hover interactions
- Scroll-based animation
- Navigation transitions
- Project image movement
- Text entrance animations
- Layout transitions

Do not animate every element.

Motion should reinforce the editorial design.

Official documentation:
https://motion.dev/docs/react

---

### Vercel

Use Vercel for production deployment.

Recommended flow:

```text
Local Development
        ↓
Git
        ↓
GitHub
        ↓
Vercel
        ↓
Production
```

Vercel has first-class Next.js support and can automatically create deployments from connected Git repositories.

Official documentation:
https://vercel.com/docs/frameworks/full-stack/nextjs

---

### GitHub

Use GitHub for:

- Source control
- Backup
- Version history
- Collaboration
- Vercel deployment integration
- Portfolio project credibility

Recommended repository:

```text
iris-quiambao-portfolio
```

Use meaningful commits.

Examples:

```text
feat: build hero section
feat: add about section
feat: add UI design showcase
feat: add brand identity projects
feat: add responsive navigation
feat: add motion transitions
fix: mobile typography
fix: image loading
perf: optimize project images
```

---

# 3. Final Recommended Stack

```text
Frontend:
Next.js
React
TypeScript

Styling:
Tailwind CSS
CSS Modules / global CSS where appropriate

Animation:
Motion for React

Images:
Next.js Image

Fonts:
next/font + local font files where available

Icons:
Lucide React (only where icons are actually needed)

Version Control:
Git
GitHub

Deployment:
Vercel

Development:
VS Code / OpenCode
Node.js
npm
```

---

# 4. Technologies NOT Required

Do not over-engineer this portfolio.

The initial version does NOT need:

```text
React Native
Express
Node.js API server
MongoDB
PostgreSQL
Supabase
Firebase
Redux
GraphQL
Docker
CMS
Authentication
Payment system
```

Next.js already provides everything necessary for this mostly-static portfolio.

A database or CMS should only be introduced later if the portfolio needs dynamic project management.

---

# 5. Optional Technologies

These should NOT be installed automatically.

Only introduce them if a real design requirement appears.

## Lenis

Potential use:

```text
Smooth scrolling
```

However, first test native browser scrolling + Motion.

Do not add Lenis simply because it is common in creative portfolios.

---

## GSAP

Potential use:

```text
Highly complex timeline animations
Advanced scroll choreography
Canvas-like animation
```

For this portfolio, Motion should be the default.

Only use GSAP if Motion cannot reasonably achieve a specific animation.

Avoid having both Motion and GSAP for simple animations.

---

## Three.js

Not recommended for the initial build.

Do not add WebGL/3D unless the visual direction specifically requires it.

The portfolio should remain focused on:

```text
Typography
Images
Layout
Editorial composition
Motion
```

---

# 6. Architecture

Recommended project structure:

```text
iris-quiambao-portfolio/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── sitemap.ts
│
├── components/
│   ├── navigation/
│   │   ├── Navbar.tsx
│   │   └── MobileMenu.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Quote.tsx
│   │   ├── BackgroundSkills.tsx
│   │   ├── PhaseDivider.tsx
│   │   ├── UIDesign.tsx
│   │   ├── BrandIdentity.tsx
│   │   ├── KnitKnots.tsx
│   │   ├── Techvance.tsx
│   │   ├── PostersPatterns.tsx
│   │   ├── Patterns.tsx
│   │   └── Footer.tsx
│   │
│   ├── ui/
│   │   ├── Reveal.tsx
│   │   ├── ProjectImage.tsx
│   │   ├── ProjectLink.tsx
│   │   └── SectionLabel.tsx
│   │
│   └── layout/
│       ├── Container.tsx
│       └── Section.tsx
│
├── data/
│   └── portfolio.ts
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── ui-design/
│   │   ├── knit-knots/
│   │   ├── techvance/
│   │   └── patterns/
│   │
│   └── fonts/
│       ├── montserrat/
│       ├── lora/
│       ├── le-jour-serif/
│       └── tan-nimbus/
│
├── types/
│   └── portfolio.ts
│
├── package.json
├── tsconfig.json
├── eslint.config.*
├── postcss.config.*
├── next.config.ts
└── README.md
```

---

# 7. Component Strategy

Do not create one enormous `page.tsx`.

`page.tsx` should primarily compose the page:

```tsx
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Quote />
        <BackgroundSkills />

        <PhaseDivider
          title="UI Design"
          phase="First Phase"
        />

        <UIDesign />

        <PhaseDivider
          title="Brand Identity"
          phase="Second Phase"
        />

        <BrandIdentity />
        <KnitKnots />
        <Techvance />

        <PhaseDivider
          title="Posters & Patterns"
          phase="Third Phase"
        />

        <PostersPatterns />
        <Patterns />
      </main>
      <Footer />
    </>
  );
}
```

---

# 8. Keep Content Separate From Components

Do not hardcode every project detail directly into the JSX.

Create:

```text
data/portfolio.ts
```

Example:

```ts
export const projects = {
  uiDesign: [
    {
      title: "MACCII",
      link: "...",
      images: [],
    },
    {
      title: "SUPER-AIRE",
      link: "...",
      images: [],
    },
    {
      title: "CHEF VINCE GARCIA",
      link: "...",
      images: [],
    },
  ],

  brandIdentity: [
    {
      title: "Knit Knots",
      images: [],
    },
    {
      title: "Techvance",
      images: [],
    },
  ],
};
```

This makes future updates much easier.

---

# 9. Design Tokens

Create CSS variables for the portfolio's core colors.

Example:

```css
:root {
  --lavender: #e9e8ff;
  --navy: #1b1a55;
  --muted-purple: #9290c3;
  --deep-navy: #070f2b;
  --white: #ffffff;
  --black: #000000;

  --olive-gold: #8d8400;
  --green: #1e5923;
  --accent-purple: #9f84dd;

  --dark-purple: #39375d;

  --deep-teal: #0c4056;
  --muted-teal: #2d5971;
}
```

Do not scatter raw hex values throughout components.

Prefer:

```css
var(--navy)
```

or Tailwind theme tokens.

---

# 10. Font Strategy

The exact fonts are important to this portfolio.

Priority:

1. Obtain the actual font files.
2. Store them locally.
3. Load them through Next.js.
4. Create semantic font variables.
5. Use fallbacks.

Recommended naming:

```text
--font-montserrat
--font-lora
--font-le-jour
--font-tan-nimbus
```

The serif/sans-serif contrast is a major part of the visual identity.

---

# 11. Image Strategy

Use Next.js `<Image>` rather than regular `<img>` whenever possible.

Example:

```tsx
import Image from "next/image";

<Image
  src="/images/knit-knots/logo.jpg"
  alt="Knit Knots brand identity"
  width={1600}
  height={1200}
  priority={false}
/>
```

Use:

```text
priority
```

only for above-the-fold images that are actually important to initial rendering.

Use lazy loading for most project images.

---

# 12. Image Folder Organization

Keep the supplied design work organized.

```text
public/images/

hero/
    hero-main.webp

ui-design/
    maccii/
    superaire/
    chef-vince/

knit-knots/
    logo.webp
    packaging.webp
    social.webp
    identity.webp

techvance/
    logo.webp
    business-card.webp
    website.webp
    signage.webp

patterns/
    poster.webp
    pattern-01.webp
    pattern-02.webp
```

Prefer:

```text
.webp
.avif
```

for optimized raster imagery where practical.

---

# 13. Animation System

Create reusable animation variants.

Example:

```ts
export const revealUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
```

Then reuse the same animation system.

Do not create 30 unrelated animations.

---

# 14. Animation Rules

### Hero

Use:

- Initial typography reveal
- Image fade/scale
- Small staggered supporting text

### About

Use:

- Fade-up text
- Slight image movement if an image is present

### Phase Dividers

Use:

- Large heading reveal
- Phase label reveal
- Subtle background transition

### Project Sections

Use:

- Image reveal
- Image scale
- Text fade-up

### Hover

Use:

- Small image scale
- Link underline
- Slight movement

Avoid:

```text
Huge rotations
Excessive blur
Aggressive parallax
Constant cursor effects
```

---

# 15. Motion Accessibility

Respect reduced-motion preferences.

Motion should not be required to understand the website.

Provide reduced-motion behavior using Motion's accessibility support or CSS.

Example concept:

```tsx
const shouldReduceMotion = useReducedMotion();
```

When reduced motion is enabled:

```text
Disable large movement
Reduce transitions
Keep opacity transitions subtle
Avoid parallax
```

---

# 16. Responsive Strategy

Build mobile-first.

Breakpoints should be based on layout needs rather than arbitrary device names.

Desktop:

```text
Large editorial typography
Wide project compositions
Asymmetric layouts
Large whitespace
```

Tablet:

```text
Reduced heading sizes
Adjusted grid
Reduced image overlap
```

Mobile:

```text
Stack content
Reduce typography
Maintain hierarchy
Avoid horizontal overflow
Preserve visual rhythm
```

Do not simply scale every desktop value down.

---

# 17. Mobile Navigation

Desktop:

```text
Iris Quiambao

About
Work
Background
Contact
```

Mobile:

```text
Iris Quiambao
             MENU
```

Use a Client Component only for the interactive menu.

Keep the rest of the navigation as simple as possible.

---

# 18. Accessibility Requirements

Every project image should have meaningful alt text.

Bad:

```text
alt="image1"
```

Good:

```text
alt="Knit Knots crochet brand identity and packaging"
```

Links must have visible focus states.

Use semantic HTML:

```text
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Headings should follow a logical hierarchy.

---

# 19. SEO

Implement basic portfolio SEO.

`app/layout.tsx` should include:

```text
title
description
keywords where appropriate
Open Graph metadata
Twitter/X metadata
```

Example:

```ts
export const metadata = {
  title: "Iris Quiambao — Designer",
  description:
    "Portfolio of Iris Quiambao, showcasing UI design, branding, posters, patterns, and creative digital work.",
};
```

Also create:

```text
sitemap.ts
robots.ts
```

---

# 20. Performance Requirements

Target:

```text
Fast initial load
Optimized images
Minimal JavaScript
No unnecessary libraries
No massive animation bundles
No unnecessary client components
```

Important rule:

**Do not make the entire page a Client Component.**

Next.js uses Server Components by default. Only interactive components should become Client Components.

Examples:

```text
Navbar → Client if menu interaction requires it
Hero → Server unless interactive
About → Server
Quote → Server
Project content → Server
Motion wrapper → Client where required
Footer → Server
```

This keeps the JavaScript footprint lower.

---

# 21. Avoid Overengineering

This is a portfolio, not a SaaS application.

Do not introduce:

```text
Database
Authentication
Admin dashboard
CMS
API server
State management library
```

unless a future requirement actually needs them.

The initial architecture should remain simple.

---

# 22. Development Workflow

## Step 1 — Create project

```bash
npx create-next-app@latest iris-quiambao-portfolio
```

Select:

```text
TypeScript: Yes
ESLint: Yes
Tailwind CSS: Yes
App Router: Yes
src directory: preferred
Import alias: Yes
```

---

## Step 2 — Install Motion

Current Motion for React installation:

```bash
npm install motion
```

Then:

```tsx
import { motion } from "motion/react";
```

---

## Step 3 — Configure Fonts

Add the actual font files.

Test:

```text
Montserrat
Lora
Le Jour Serif
Tan Nimbus
```

before building the sections.

---

# 23. Build Order

Do NOT start by building every section.

Build in this order.

## Phase 1 — Foundation

```text
1. Create Next.js project
2. Configure TypeScript
3. Configure Tailwind
4. Configure fonts
5. Configure design tokens
6. Create global CSS
7. Set up Git
8. Create GitHub repository
```

---

## Phase 2 — Layout

Build:

```text
Navbar
Hero
Section container
Responsive system
Footer
```

Do not worry about advanced animation yet.

---

## Phase 3 — Content Sections

Build:

```text
About
Quote
Background & Skills
```

---

## Phase 4 — Portfolio Chapters

Build:

```text
UI Design
Brand Identity
Knit Knots
Techvance
Posters & Patterns
Patterns
```

---

## Phase 5 — Animation

After the static layout is correct:

```text
Hero animation
Section reveals
Image reveals
Hover states
Phase transitions
Scroll interactions
```

Do not animate before the underlying layout is stable.

---

## Phase 6 — Responsive

Test:

```text
Mobile
Tablet
Desktop
Large desktop
```

Pay particular attention to:

```text
122px Portfolio heading
95.1px Phase headings
59.4px Project headings
```

These large desktop values must not cause horizontal overflow on smaller screens.

---

## Phase 7 — Optimization

Check:

```text
Image sizes
Font loading
JavaScript bundle
Unused CSS
Animation performance
Accessibility
SEO
```

---

## Phase 8 — Deployment

Push to GitHub.

Connect repository to Vercel.

```text
GitHub
    ↓
Vercel
    ↓
Production URL
```

Each future push can trigger a new deployment.

---

# 24. Git Workflow

Recommended branches:

```text
main
develop
```

For small portfolio work, `main` can be sufficient.

Recommended workflow:

```text
Edit
↓
npm run lint
↓
npm run build
↓
git add .
↓
git commit
↓
git push
↓
Vercel deployment
```

Before pushing:

```bash
npm run lint
npm run build
```

---

# 25. Suggested Package Set

Start with only:

```json
{
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "motion": "latest",
    "lucide-react": "latest"
  }
}
```

Development tooling:

```text
typescript
eslint
tailwindcss
```

Do not add additional packages until they solve a specific requirement.

---

# 26. Vercel Deployment

Vercel is the recommended production platform for this project.

Connect the GitHub repository to Vercel.

Recommended deployment flow:

```text
Developer
   ↓
Local Next.js project
   ↓
Git commit
   ↓
GitHub
   ↓
Vercel
   ↓
Production
```

Vercel can automatically create deployments when commits are pushed to the connected repository.

---

# 27. Environment Variables

This portfolio should require little or no environment configuration.

Do NOT expose secrets in:

```text
NEXT_PUBLIC_*
```

unless they are genuinely public values.

If a contact form or analytics integration is added later, keep private credentials in Vercel Environment Variables.

---

# 28. Contact Form

Do not build a custom backend initially.

The first version can simply use:

```text
mailto:
```

or external contact links.

If a real contact form becomes necessary later, evaluate:

```text
Resend
Formspree
Web3Forms
Vercel Functions
```

Only add this after the visual portfolio is complete.

---

# 29. Project Data Model

Use a typed project structure.

Example:

```ts
export interface Project {
  title: string;
  category: string;
  description: string;
  images: string[];
  link?: string;
  accentColor?: string;
}
```

This makes it easier to add future projects.

---

# 30. Reference to the Previous Portfolio

The previous portfolio project should be used as a **technical and interaction reference**, not copied visually.

Carry forward the useful characteristics:

```text
Premium visual presentation
Strong typography
Creative-agency influence
Responsive design
Interactive sections
Modern React architecture
Vercel deployment
GitHub workflow
AI-assisted development
```

For this Iris portfolio, however, the supplied design specification takes priority.

The Iris portfolio should retain its own:

```text
Lavender / navy palette
Editorial serif typography
Large phase headings
Minimal layouts
Brand-focused presentation
Designer portfolio aesthetic
```

Do not force the previous portfolio's visual style into this project.

---

# 31. OpenCode / AI Development Rules

Because this project may be built with AI-assisted coding, use the following rules.

### Rule 1

Do not allow the AI to redesign the portfolio without instruction.

The design specification is the source of truth.

### Rule 2

Do not replace exact colors with "similar" colors.

Use the specified tokens.

### Rule 3

Do not replace typography casually.

Font choice is part of the design.

### Rule 4

Do not install unnecessary libraries.

If the requirement can be solved with:

```text
React
CSS
Tailwind
Motion
```

use those first.

### Rule 5

Build one section at a time.

After every major section:

```text
run
↓
inspect
↓
fix
↓
commit
```

### Rule 6

Never overwrite working sections unnecessarily.

When modifying one section, avoid changing unrelated components.

---

# 32. Recommended AI Build Prompt Strategy

Instead of asking the AI:

> Build the entire portfolio.

Use sequential prompts.

### Prompt 1

```text
Initialize the Next.js + TypeScript + Tailwind portfolio project.

Do not build the sections yet.

Set up:
- App Router
- TypeScript
- Tailwind
- global CSS
- design tokens
- font system
- project structure
- ESLint
```

### Prompt 2

```text
Build the Hero section based strictly on the portfolio specification.

Do not modify other sections.

Match the specified:
- typography
- colors
- spacing
- hierarchy
- responsive behavior

Use placeholder imagery if the actual project assets are not available.
```

### Prompt 3

```text
Build the About and Quote sections.

Do not change the Hero.

Use the exact typography and color specifications.
```

Continue section by section.

This produces much more predictable results than asking an AI coding agent to generate the entire site in one pass.

---

# 33. Quality-Control Checklist

Before production:

## Visual

- [ ] Hero matches specification
- [ ] Typography hierarchy is correct
- [ ] Colors are correct
- [ ] Background opacity is correct
- [ ] Images are properly positioned
- [ ] Section spacing feels intentional
- [ ] Project presentation feels editorial

## Responsive

- [ ] Mobile layout works
- [ ] Tablet layout works
- [ ] Desktop layout works
- [ ] No horizontal overflow
- [ ] Large typography scales correctly
- [ ] Navigation works on mobile

## Performance

- [ ] Images optimized
- [ ] Fonts optimized
- [ ] No unnecessary Client Components
- [ ] Animations are smooth
- [ ] No unnecessary dependencies
- [ ] No layout shift caused by images

## Accessibility

- [ ] Alt text
- [ ] Keyboard navigation
- [ ] Focus states
- [ ] Semantic HTML
- [ ] Reduced motion support
- [ ] Sufficient contrast

## SEO

- [ ] Page title
- [ ] Description
- [ ] Open Graph metadata
- [ ] Sitemap
- [ ] Robots
- [ ] Favicon
- [ ] Social preview image

## Production

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] GitHub repository updated
- [ ] Vercel deployment successful
- [ ] Production URL tested
- [ ] Mobile production URL tested

---

# 34. Final Architecture Recommendation

The final stack should be:

```text
                    ┌──────────────────┐
                    │     GitHub       │
                    │  Source Control  │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │     Vercel       │
                    │    Deployment    │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │     Next.js      │
                    │    App Router    │
                    └────────┬─────────┘
                             │
                  ┌──────────┴──────────┐
                  ▼                     ▼
            ┌───────────┐        ┌─────────────┐
            │   React   │        │ TypeScript  │
            └─────┬─────┘        └─────────────┘
                  │
          ┌───────┴────────┐
          ▼                ▼
    ┌───────────┐    ┌──────────────┐
    │ Tailwind  │    │ Motion       │
    │    CSS    │    │ for React    │
    └───────────┘    └──────────────┘
```

---

# 35. Final Recommendation

Use:

```text
NEXT.JS
REACT
TYPESCRIPT
TAILWIND CSS
MOTION FOR REACT
NEXT/IMAGE
NEXT/FONT
GITHUB
VERCEL
```

This is the right level of technology for this portfolio.

The important correction to the originally proposed stack is:

```text
❌ React Native
✅ React
```

React Native is unnecessary because this is a web portfolio.

Do not add a backend or database yet.

The portfolio should remain a fast, mostly-static Next.js application with selective client-side animation and interaction.

The result should be:

```text
Design-focused
+
Fast
+
Responsive
+
SEO-friendly
+
Easy to maintain
+
Easy to deploy
+
Easy to extend
+
Good portfolio piece for the developer
```

The project itself should also demonstrate modern web-development skills rather than simply being a static HTML page.
