# WEBSITE_ICON_UPDATE_REPORT — GynoMetrics

**Date:** 2026-09-04  
**Commit:** `Website: Use official GynoMetrics app icon`  
**Repo:** `swiftwithfer-portfolio` (site only — app untouched)

---

## Asset sorgente

| Campo | Valore |
|--------|--------|
| File | `App_Icon.png` |
| Percorso | `GynoMetrics/GynoMetrics/Resources/Assets.xcassets/AppIcon.appiconset/App_Icon.png` |
| Formato | PNG 1024×1024, RGBA |
| SHA-256 | `4c6c1985b78c95e191b15404f289e340b97abe09181f7f9174a7f0e3400445e2` |

**Conferma:** icona ufficiale dell’app iOS (Asset Catalog `AppIcon`). Nessun altro file usato.

---

## Destinazione

| Campo | Valore |
|--------|--------|
| Percorso | `public/images/apps/gynometrics/icon.png` |
| SHA-256 | `4c6c1985b78c95e191b15404f289e340b97abe09181f7f9174a7f0e3400445e2` (identico alla sorgente) |

Copia byte-identica (`cp`). Nessuna generazioni, ridimensionamento, ImageMagick, AI, o modifica colori.

---

## File modificati

| File | Modifica |
|------|----------|
| `public/images/apps/gynometrics/icon.png` | Placeholder (4.5 KB) → App Icon ufficiale (byte-identica) |

**Non modificati:** `site.ts`, routing, SEO/metadata, legal, copy, componenti, altre app, OpenGraph (il sito usa `/og-image.png` globale — stesso pattern delle altre app, non l’icona per-app).

Card homepage, `/apps/gynometrics` e hub legal leggono già `app.icon` → `/images/apps/gynometrics/icon.png`.

---

## Conferme

- [x] Usata esclusivamente l’App Icon ufficiale dell’app
- [x] Nessuna immagine generata / ridisegnata / riesportata
- [x] Nessuna altra app modificata
- [x] Nessuna modifica all’app iOS

---

## Build

`npm run build` → **SUCCEEDED** · 0 errori · 0 warning di lint/typecheck
