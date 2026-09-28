# BVM Tech Limited — Next.js 16.3.0 Migration

## Status

**Architecture & infrastructure: largely complete.**  
**Full section markup for all 14 pages: in progress (Home Hero + CTA done; other pages have PageHeader + stubs).**

This is a migration of the finalized static site in `../bvm_new/`. Design, content, and animation behavior are taken from that source only.

## Quick start (you handle install)

```bash
cd bvm-nextjs
# Requires Node.js v24.19.0 and npm v12+
npm install
npm run dev
```

Do **not** commit `node_modules/`.

## Required versions

| Package   | Version   |
|-----------|-----------|
| Next.js   | 16.3.0    |
| Node.js   | v24.19.0  |
| npm       | v12+      |
| GSAP      | 3.12.5+   |
| Lenis     | 1.1.18+   |
| Swiper    | 11.x      |
| Bootstrap | 5.3.3     |

## What is already implemented

1. **App Router** routes for every static HTML page  
2. **Global layout** with Header, Footer, Preloader, Lenis, Bootstrap client  
3. **Single Lenis instance** + ScrollTrigger sync  
4. **Immediate scroll-to-top on route change** (no smooth scroll animation)  
5. **GSAP + `@gsap/react` `useGSAP()`** with scoped cleanup  
6. **Animation hooks** matching the final static engine:
   - Hero (dedicated)
   - Page Header (dedicated)
   - About timeline (laser + items)
   - Services (curtain)
   - Technology
   - Process stack
   - App services
   - Generic `.anim-reveal` / `.anim-text-reveal`
   - Image reveals
   - Counters
   - Service cards interaction
   - Footer watermark scrub
   - CTA glow scrub
7. **Preloader** only on first load (not on client navigations)  
8. **Assets** copied to `public/images/`  
9. **CSS** from static `style.css` + `responsive.css` (source of truth)  
10. **No** Three.js, grain, custom cursor, back-to-top, magnetic extras, fake form JS  

## What still needs section-by-section port

From each static HTML file, the body sections (after PageHeader / Hero) must be copied into the corresponding `app/*/page.tsx` (or extracted into components under `components/`) **without redesign**. Priority:

1. Home — Trusted, Who We Are, Services, Industries, Projects, Choose Us, Technology, Awards, Process, Testimonials, FAQ (Hero + CTA already present)
2. About — full timeline and content
3. Service pages (web, mobile, CRM, ERP, custom)
4. Industries, Projects, Blog, Blog detail, Case study detail, FAQ, Contact

Swiper components (Industries / Awards / Testimonials) should use the Swiper React package with the same options as `common.js`.

## Critical behaviors already coded

- Route change → scroll position set to **0 immediately** (Lenis `scrollTo(0, { immediate: true })`)
- `useGSAP` scopes + automatic cleanup on unmount
- `prefers-reduced-motion` respected in animation hooks and preloader
- Header shrink + mobile nav React state
- Internal links via `next/link`

## Folder structure (current)

```
bvm-nextjs/
  app/
    layout.tsx
    page.tsx                 # Home (Hero + CTA)
    about/page.tsx
    blog/page.tsx
    blog-detail/page.tsx
    case-study-detail/page.tsx
    contact/page.tsx
    crm-development/page.tsx
    custom-software-development/page.tsx
    erp-development/page.tsx
    faq/page.tsx
    industries/page.tsx
    mobile-apps/page.tsx
    projects/page.tsx
    web-development/page.tsx
  animations/
    useHeroAnimation.ts
    usePageHeaderAnimation.ts
    useServicesAnimation.ts
    useTechAnimation.ts
    useAboutTimeline.ts
    usePageAnimations.ts
  components/
    Header/Header.tsx
    Footer/Footer.tsx
    Preloader/Preloader.tsx
    PageHeader/PageHeader.tsx
  lib/
    lenis-provider.tsx
    bootstrap-client.tsx
  styles/
    globals.css
    style.css                # from static
    responsive.css           # from static
  public/images/             # all static images
  package.json
  next.config.ts
  tsconfig.json
```
