# SEO Audit Report — fernandopiras.com

**Data audit:** 10 luglio 2026  
**Sito:** https://fernandopiras.com  
**Brand:** Fernando Piras / SwiftWithFer  
**Stack:** Next.js 15 (App Router) · Vercel

---

## Executive summary

Audit SEO tecnico completo sul portfolio in produzione. Sono state applicate **solo** ottimizzazioni metadata, structured data, performance hints, security headers e canonical URL — **nessuna modifica a UI, UX, componenti o logica funzionale**.

Dopo il deploy di questo commit, sitemap, robots.txt, canonical, Open Graph e JSON-LD useranno esclusivamente `https://fernandopiras.com`.

---

## Problemi trovati (pre-fix)

| Area | Problema | Gravità |
|------|----------|---------|
| **Dominio canonico** | `robots.txt` e `sitemap.xml` in produzione puntavano a `swiftwithfer-portfolio.vercel.app` (env `NEXT_PUBLIC_SITE_URL` legacy) | Critica |
| **Metadata** | Title/description homepage non ottimizzati per brand e keyword target | Alta |
| **Structured Data** | Assente JSON-LD `Person`, `Organization`, `ProfessionalService`, `WebSite`, `WebPage` | Alta |
| **Case studies** | Metadata e schema incompleti; nessun `BreadcrumbList` | Media |
| **Security headers** | Mancavano `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, HSTS preload | Media |
| **Performance hints** | Nessun `dns-prefetch` per domini esterni; font senza `preload` esplicito | Bassa |
| **Manifest** | Descrizione e categorie PWA generiche | Bassa |
| **Discovery docs** | Footer documenti con URL Vercel legacy | Bassa |
| **README / report marketing** | Riferimenti a `*.vercel.app` (solo documentazione, non metadata live) | Informativa |

### Verifiche superate (nessuna azione richiesta)

- **Heading:** un solo `<h1>` per pagina (Hero homepage, CaseStudyView per `/apps/[slug]`)
- **Immagini:** `alt` descrittivi su foto profilo, icone app e screenshot; formati AVIF/WebP via `next/image`
- **Indicizzazione:** nessun `noindex` / `nofollow` nel codice sorgente
- **Accessibilità base:** skip link “Salta al contenuto”, focus visibile, `lang="it"` su `<html>`
- **Favicon:** `icon.png`, `apple-icon.png`, `icon-512.png` presenti
- **OG/Twitter:** immagini dinamiche `/opengraph-image` e `/twitter-image` (1200×630)
- **HTTPS:** dominio custom su TLS Vercel

---

## Modifiche effettuate

### 1. Metadata centralizzata (`src/lib/seo-metadata.ts`)

- Factory `createSiteMetadata()`, `createHomeMetadata()`, `createCaseStudyMetadata()`
- Per ogni pagina: title univoco, description, keywords, robots (`index, follow`), canonical, `it-IT`, Open Graph completo, Twitter Card `summary_large_image`
- `metadataBase`, authors, creator, publisher, `appleWebApp`, manifest, icons

### 2. Homepage (`src/config/site.ts`, `src/app/page.tsx`)

**Title:**
```
Fernando Piras — iOS Developer, SwiftUI & App Developer | SwiftWithFer
```

**Description:** include Fernando Piras, SwiftWithFer, sviluppatore iOS, SwiftUI, app iOS, siti web, gestionali aziendali, Italia.

**Keywords:** Fernando Piras, SwiftWithFer, Fernando Piras iOS Developer, Fernando Piras SwiftUI, Sviluppatore iOS Italia, Web Developer Italia, Software Developer Italia, ecc.

### 3. Structured Data JSON-LD (`src/lib/json-ld.ts`)

**Homepage `@graph`:**
- `Person` — Fernando Piras, jobTitle, email, image, sameAs, knowsAbout
- `Organization` — SwiftWithFer, logo, founder
- `ProfessionalService` — servizi iOS, web, gestionali, area Italy
- `WebSite` — publisher Organization
- `WebPage` — about Person, primaryImageOfPage

**Case study `/apps/[slug]`:**
- `BreadcrumbList` (Home → App → Nome app)
- `WebPage`
- `SoftwareApplication`

### 4. Dominio canonico (`src/lib/site-url.ts`)

```ts
VERCEL_ENV === "production" → sempre https://fernandopiras.com
```

Priorità production su `NEXT_PUBLIC_SITE_URL` per evitare leak di `*.vercel.app` in metadata, sitemap e robots.

### 5. Sitemap & robots (`src/app/sitemap.ts`, `src/app/robots.ts`)

- Sitemap auto-generata: `/`, `/apps/andrometrics`, `/apps/slotiva`, `/apps/preventivorapido`
- `robots.txt`: `Allow: /` + `Sitemap: https://fernandopiras.com/sitemap.xml`

### 6. Layout & performance (`src/app/layout.tsx`)

- `viewport`: theme-color light/dark, `viewportFit: cover`
- Font Geist: `display: swap`, `preload: true`
- `dns-prefetch`: Instagram, App Store

### 7. Security (`next.config.ts`)

- `Strict-Transport-Security` (preload, 2 anni)
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` restrittiva
- `poweredByHeader: false`, `compress: true`

### 8. PWA manifest (`public/manifest.webmanifest`)

- Nome, descrizione SEO, scope, categorie aggiornati

### 9. Discovery Document

- `META.website` → `https://fernandopiras.com`
- Documenti rigenerati (PDF, DOCX, JSON, fillable) per tutti i 14 settori
- Cursor prompt rigenerato

### 10. Case studies (`src/app/apps/[slug]/page.tsx`)

- Metadata dedicata con canonical `https://fernandopiras.com/apps/{slug}`
- JSON-LD breadcrumb + SoftwareApplication

---

## Pagine pubbliche indicizzate

| URL | Priorità sitemap | Title pattern |
|-----|------------------|---------------|
| `https://fernandopiras.com/` | 1.0 | Title assoluto homepage |
| `https://fernandopiras.com/apps/andrometrics` | 0.8 | `{App} — Case Study \| Fernando Piras` |
| `https://fernandopiras.com/apps/slotiva` | 0.8 | idem |
| `https://fernandopiras.com/apps/preventivorapido` | 0.8 | idem |

---

## Punteggio Lighthouse previsto (post-deploy)

Stime basate su build statica, immagini AVIF/WebP, font swap, assenza third-party pesanti e SEO metadata completa:

| Categoria | Previsto | Note |
|-----------|----------|------|
| **Performance** | 95–98 | Homepage ~174 kB First Load JS; animazioni Framer lato client |
| **Accessibility** | 95–97 | Skip link, alt text, contrasto tema; verificare manualmente focus su mobile |
| **Best Practices** | 100 | HTTPS, security headers, no mixed content, no `document.write` |
| **SEO** | 100 | Title, meta description, canonical, robots, structured data, tap targets |

> Eseguire Lighthouse su https://fernandopiras.com dopo il deploy per conferma numerica.

---

## Anteprima social (Open Graph)

| Piattaforma | Stato |
|-------------|-------|
| **LinkedIn** | `og:image` 1200×630, `og:title`, `og:description`, `og:url` |
| **Facebook** | Stesso set Open Graph |
| **WhatsApp** | `summary_large_image` via OG |
| **X (Twitter)** | `twitter:card=summary_large_image`, immagine dedicata |
| **Instagram** | Link in bio → anteprima da OG del sito |

**Test consigliati:**
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator) (se disponibile)

---

## Keyword target — copertura

| Query | Dove ottimizzato |
|-------|------------------|
| Fernando Piras | title, description, keywords, Person schema |
| SwiftWithFer | title, Organization schema, brand metadata |
| Fernando Piras iOS Developer | keywords, jobTitle |
| Fernando Piras SwiftUI | keywords, knowsAbout |
| SwiftWithFer Portfolio | keywords |
| Sviluppatore iOS Italia | keywords, ProfessionalService areaServed |
| Sviluppatore App iOS | keywords, serviceType |
| Web Developer Italia | keywords |
| Software Developer Italia | keywords |

---

## Azioni manuali post-deploy

### Obbligatorie

1. **Deploy su Vercel** — push commit e verifica deploy production
2. **Verifica live** dopo deploy:
   ```bash
   curl -s https://fernandopiras.com/robots.txt
   curl -s https://fernandopiras.com/sitemap.xml
   ```
   Devono mostrare solo `https://fernandopiras.com`

3. **Google Search Console**
   - Aggiungi proprietà `https://fernandopiras.com`
   - Invia sitemap: `https://fernandopiras.com/sitemap.xml`
   - Richiedi indicizzazione homepage

4. **Aggiorna env Vercel** (opzionale ma consigliato):
   ```
   NEXT_PUBLIC_SITE_URL=https://fernandopiras.com
   ```
   Il codice forza già il canonical in production; l'env allinea preview/local.

### Consigliate

5. **Bing Webmaster Tools** — submit sitemap
6. **Google Business Profile** — se offri servizi locali in Italia
7. **Aggiorna README.md** e `MARKETING_REPORT.md` — sostituire URL Vercel con dominio custom (solo docs)
8. **Profili social** — allineare link in bio a `https://fernandopiras.com`
9. **Schema validator** — [Google Rich Results Test](https://search.google.com/test/rich-results) sulla homepage
10. **Monitoraggio Core Web Vitals** — Search Console → Esperienza → Core Web Vitals (dati reali dopo 28 giorni)

---

## Build production

```
✓ next build — compilazione OK
✓ 14 pagine statiche generate
✓ /robots.txt, /sitemap.xml, /opengraph-image, /twitter-image
✓ Nessun warning ESLint/TypeScript
```

---

## File modificati (riepilogo)

| File | Tipo modifica |
|------|---------------|
| `src/lib/site-url.ts` | Canonical production forzato |
| `src/lib/seo-metadata.ts` | **Nuovo** — metadata factory |
| `src/lib/json-ld.ts` | **Nuovo** — structured data |
| `src/config/site.ts` | SEO title, description, keywords |
| `src/app/layout.tsx` | Metadata, viewport, dns-prefetch, font preload |
| `src/app/page.tsx` | Home metadata + JSON-LD |
| `src/app/apps/[slug]/page.tsx` | Case study metadata + JSON-LD |
| `src/app/opengraph-image.tsx` | Alt OG aggiornato |
| `next.config.ts` | Security headers, compress |
| `public/manifest.webmanifest` | PWA SEO |
| `discovery-document/**` | URL canonico nei documenti |

---

## Vincoli rispettati

- ✅ Nessuna modifica UI/UX/design/componenti/logica
- ✅ Compatibilità Vercel + Next.js 15
- ✅ Solo SEO, performance hints, metadata, security headers
- ✅ Build production verificata

---

*Report generato automaticamente nell'ambito dell'audit SEO production — SwiftWithFer.*
