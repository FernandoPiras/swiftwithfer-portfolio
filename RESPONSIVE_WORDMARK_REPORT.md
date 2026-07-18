# Responsive & Header Wordmark Report

Data: 2026-07-18  
Scope: responsive/layout pixel-perfect + menu X + header wordmark da `wordmark_logo.png`.  
Non toccati: palette, tipografia, design system, contenuti, SEO, animazioni, gerarchia sezioni.

---

## Problemi trovati

### 1. Menu mobile — X non leggibile (causa reale)
Gli SVG hamburger/X usavano `stroke` **senza `fill="none"`**.  
Il fill di default (`black`) in dark mode rendeva la X praticamente invisibile; contrasto e rendering del path erano inconsistenti.

Altri fattori:
- bottone con `bg-glass/60` troppo trasparente sullo sfondo
- z-index non esplicito rispetto all’overlay

### 2. Overflow hero su viewport ≤320px
`.phone-frame--hero { max-width: 320px }` + wrapper `w-fit` + `px-5` → il telefono poteva superare la larghezza utile e causare overflow orizzontale.

### 3. Header stretto su mobile
`gap-8` + `px-5` con wordmark largo comprimono hamburger e CTA su 320–390px.

### 4. Discovery tabs / FlowSteps su schermi stretti
Testi lunghi nei tab Discovery e step flow potevano stringersi / overfloware senza `break-words` / padding ridotto.

### 5. Header wordmark
Usava mask CSS su `wordmark.png` legacy, non l’asset ufficiale `wordmark_logo.png`.

---

## Problemi risolti

| # | Fix |
|---|-----|
| 1 | SVG: `fill="none"`, `strokeWidth={2.25}`, `text-foreground`; bottone `z-[60]`, `bg-background` opaco; panel con `max-h` + scroll e `mx-3` su mobile |
| 2 | Hero phone: `max-width: min(100%, …)`; link wrapper `w-full max-w-[…]` |
| 3 | Header: `gap-3 px-4` su mobile → `sm:gap-8 sm:px-8` |
| 4 | Discovery tab: `text-xs` + padding ridotto su mobile; FlowSteps: `break-words`, `max-w-full` |
| 5 | Header: `Image` da `/images/brand/wordmark_logo.png` (copia bit-identica del file root); dimensioni 2038×771; `h-9` / `sm:h-[42px]`; `priority` + preload; `dark:invert` solo per leggibilità del logo nero-su-bianco in dark mode (nessun redesign) |

---

## Wordmark header

- Source: `wordmark_logo.png` (MD5 `8d67269ea7573450d4dfba82fbf514c5`)
- Servito: `public/images/brand/wordmark_logo.png` (stesso hash)
- Rendering: Next.js `Image`, aspect ratio nativo, nessun crop/effetto creativo
- Footer: invariato (mask legacy) — richiesta limitata all’header

---

## Breakpoint verificati (layout)

Controllati in codice/CSS per overflow, padding, hero, navbar, menu:

320 · 360 · 375 · 390 · 414 · 430 · 480 · 768 · 820 · 834 · 1024 · 1280 · 1440 · 1600 · 1920

Safe-area: header `pt-[env(safe-area-inset-top)]` e panel sotto `--header-offset` + safe-area — mantenuti.

---

## File modificati

- `public/images/brand/wordmark_logo.png` (nuovo, copia)
- `src/components/brand/SwiftWithFerLogo.tsx`
- `src/components/layout/Header.tsx`
- `src/components/layout/MobileNav.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/DiscoveryDocumentPicker.tsx`
- `src/components/ui/FlowSteps.tsx`
- `src/config/site.ts`
- `src/app/layout.tsx`
- `src/app/globals.css`
- `RESPONSIVE_WORDMARK_REPORT.md`

---

## Verifica tecnica

- `npm run lint` — OK  
- `npm run build` — OK
