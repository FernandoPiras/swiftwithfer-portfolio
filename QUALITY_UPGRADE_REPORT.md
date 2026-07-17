# Quality Upgrade Report — fernandopiras.com

**Data:** 17 luglio 2026  
**Riferimento qualitativo:** zondrabrain.com (percezione premium, non copia di layout/asset)  
**Obiettivo:** stesso livello di cura, fluidità e fiducia percepita, mantenendo l’identità SwiftWithFer

---

## Verdetto

Il portfolio è passato da un layout lungo e denso (10 sezioni, hero rumorosa, media ~76MB) a un’esperienza più sparsa, product-first e conversion-oriented, con Slotiva come progetto principale e case study strutturalmente più ricchi.

**Build:** ✅  
**Lint:** ✅  
**Homepage First Load JS:** 176 kB (−2 kB)

---

## FASE 1 — Audit (sintesi)

| Area | Prima | Gap vs SaaS premium |
|------|-------|---------------------|
| Hero | Nome + lista + 6 badge + 2 CTA | Troppo CV, poco prodotto |
| Sezioni | 10 blocchi | Skills/Tech/Social/Timeline ridondanti |
| Slotiva | Feature dump | Poco narrative / no architettura |
| Media | Video 62MB + icone multi-MB | Killer performance |
| Motion | Dialetti multipli | Non uniforme |
| CTA | Primary nero | Meno “prodotto SaaS” |

---

## FASE 2 — Design system

- Token spacing (`--space-*`), radius (`--radius-*`), duration (`--duration-fast/base/slow`)
- Palette raffinata: accent Apple blue, secondary meno “purple AI”
- Tipografia: `.text-display`, `.text-section-title`, `.text-lead`, `.text-eyebrow`
- Surface cards più leggere (meno glass pesante)
- Primary CTA = accent blu (stile prodotto, non template nero)
- Phone frame e shadow scale unificati

**File:** `src/app/globals.css`

---

## FASE 3 — Hero

Struttura ispirata alla chiarezza SaaS (non al layout Zondra):

1. Brand eyebrow (`SwiftWithFer`)
2. **Una** headline: *“Software che genera risultati, non solo codice.”*
3. **Una** subhead di valore
4. Due CTA
5. Visual dominante: screenshot reale Slotiva in `PhoneFrame` + chip case study

Rimossi: value props list, credibility pills, mini-stats, CTA Instagram.

**File:** `src/components/sections/Hero.tsx`, `src/config/site.ts`

---

## FASE 4 — Copy

Copy riscritto outcome-first:

- Tagline, bio, servizi (4 offerte, non 8)
- Posizionamento prodotti: Slotiva enterprise · AndroMetrics medicale · PreventivoRapido professionale
- Discovery Document: risposta allineata a **48 ore**

---

## FASE 5 — Progetti / Case study

- **Slotiva primo** in homepage e route generation
- Badge “Progetto principale”
- Campo `architecture` su ogni app
- Slotiva feature groups narrativi:
  - App iOS (prenotazioni, staff, pagamenti, chat, multi business, sync…)
  - Gestionale web CRM (dashboard, KPI, BI, marketing…)
  - Backend & AI (Firebase, Functions, realtime, AI)
- Demo video solo nelle pagine case study (homepage più leggera)
- Case study: problema → soluzione → architettura → feature → stack → sfide → risultati → screenshot → CTA

---

## FASE 6 — Motion

- `useReducedMotion` su Hero, Section, Services, Technologies, AppCard
- Easing unico `[0.22, 1, 0.36, 1]`
- Stagger coerente via `MOTION`

---

## FASE 7 — Percezione premium

- Homepage ridotta: **Hero → Stats → Apps → Services → Bio → Technologies → Contact**
- Rimosse dalla home: Skills, Timeline, Social (link restano in Contact/Footer)
- Nav desktop/mobile allineate: Progetti · Servizi · Bio · Stack · Contatti
- Meno glass, più spazio, gerarchia più forte
- Nested `<article>` rimosso da AppCard

---

## FASE 8 — Performance

| Asset | Prima | Dopo |
|-------|-------|------|
| Video totali | ~62 MB | ~9.5 MB |
| Icone app | fino a 2.5 MB | ~250 KB |
| Screenshot | fino a 2.6 MB | ≤ ~450 KB |
| Profile bio | 125 KB | 97 KB |
| fernando.jpg | 3.0 MB | 101 KB |

Altro:
- Lazy load video (già presente) + cache headers lunghi su `/videos` e `/images`
- `minimumCacheTTL` immagini Next
- Demo non più sulla home → meno work al first paint

---

## FASE 9 — Accessibilità

- MobileNav: Escape, focus trap, `aria-labelledby`
- Screenshot tabs: frecce tastiera, `aria-controls`, `tabIndex`
- Focus ring e touch target mantenuti
- Reduced motion rispettato anche da Framer Motion

---

## FASE 10 — SEO

- Title/description aggiornati
- Keywords ridotte (meno spam)
- JSON-LD: `aggregateRating` + `Review` (AndroMetrics)
- Slotiva tipizzato come MobileApplication + WebApplication / BusinessApplication
- Breadcrumb “Progetti”

---

## FASE 11 — Responsive

- Hero clamp tipografico e frame phone coerenti
- Grid servizi 2×2, progetti stacked
- Safe area / header offset aggiornati

---

## FASE 12 — Review finale

Domanda: *“Questo sito comunica immediatamente qualità, competenza e fiducia?”*

**Sì, più di prima**, grazie a:
- hero memorabile e product-proof
- Slotiva come flagship enterprise
- media disciplinati
- meno rumore, più ritmo

Nota Lighthouse: i target ≥95/100/100/100 vanno rivalutati **dopo il deploy** (i punteggi live precedenti erano su asset non compressi). Con video −85% e home senza 3 player, Performance dovrebbe salire in modo significativo.

---

## File principali toccati

```
public/videos/* (ricompressi)
public/images/apps/** (ridimensionati)
public/images/profile/*
src/app/globals.css
src/app/page.tsx
src/config/site.ts
src/config/case-studies.ts
src/config/stats.ts
src/lib/json-ld.ts
src/components/sections/Hero.tsx
src/components/sections/Apps.tsx
src/components/sections/Services.tsx
src/components/sections/Contact.tsx
src/components/sections/Technologies.tsx
src/components/sections/DiscoveryDocumentPicker.tsx
src/components/ui/AppCard.tsx
src/components/ui/Section.tsx
src/components/ui/GlassCard.tsx
src/components/case-study/CaseStudyView.tsx
src/components/layout/Header.tsx
src/components/layout/MobileNav.tsx
next.config.ts
```

---

## Non copiato da zondrabrain.com

- Nessun layout, asset, copy o brand identity
- Solo standard qualitativi: hero sparsa, prova prodotto, CTA chiare, whitespace, restraint
