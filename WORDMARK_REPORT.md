# Wordmark Integration Report

**Data:** 17 luglio 2026  
**Asset:** `Wordmark.png` (2172×724) → `public/images/brand/wordmark.png` (copia identica, SHA256 invariato)

---

## Modifiche

### Asset
- Copiato il wordmark in `public/images/brand/wordmark.png` senza ritagli, ricompressioni o alterazioni pixel.
- Favicon / app icon restano su `logo.png` (SF mark) — il wordmark non è adatto come favicon.

### Header
- Testo “SwiftWithFer” sostituito dal wordmark.
- Altezze: `24px` mobile / `28px` desktop (`h-6` / `h-7`), aspect ratio nativo.
- Link a `/#hero`, hover opacity discreto (`.brand-link`), focus ring accessibile.
- `priority` + `sizes` mirati per LCP/CLS.

### Footer
- Wordmark ridotto (`20–22px`), centrato, link alla home.
- Spaziatura premium sopra tagline e social.

### Hero
- Eyebrow testuale sostituita dal wordmark (branding primario coerente).

### Light / Dark
- Sfondo bianco del PNG non modificato.
- Light: `mix-blend-mode: multiply` (sfondo bianco “scompare”).
- Dark: `invert` + `mix-blend-mode: screen` (testo bianco, sfondo invisibile).

### Config
- `siteConfig.logo.wordmark` + `wordmarkAlt` aggiunti.

---

## Verifiche

| Check | Esito |
|-------|-------|
| Build | ✅ |
| Lint | ✅ |
| Immagine non modificata | ✅ stesso hash |
| Responsive (overflow/deformazione) | ✅ `h-* w-auto max-w-full` |
| SEO / funzionalità | ✅ invariate |

---

## File toccati

```
public/images/brand/wordmark.png
src/config/site.ts
src/components/brand/SwiftWithFerLogo.tsx
src/components/layout/Header.tsx
src/components/layout/Footer.tsx
src/components/sections/Hero.tsx
src/app/globals.css
```
