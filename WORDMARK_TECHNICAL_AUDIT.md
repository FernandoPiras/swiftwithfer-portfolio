# Wordmark technical audit

Date: 2026-07-18

## Verdict

**Il browser sta renderizzando questo file: `/images/brand/wordmark.png`**

Dopo la correzione, i byte serviti sono **identici** all’originale utente:

| Campo | Valore |
|-------|--------|
| Path richiesto | `/images/brand/wordmark.png` |
| URL assoluto (prod locale) | `http://127.0.0.1:3490/images/brand/wordmark.png` |
| Dimensioni pixel | **1536 × 1024** |
| Formato | PNG RGBA |
| Dimensione file | **2 128 962 bytes** |
| MD5 | **`749b46cf67a573c258032a01e62add2e`** |
| Corner alpha | `a=0` (trasparente) |

## Causa reale (prima della correzione)

Il codice puntava già a `/images/brand/wordmark.png`, ma **quel path non conteneva il PNG originale**.

| File | MD5 | Size | Pixel |
|------|-----|------|-------|
| Originale utente `./wordmark.png` | `749b46cf…` | 2 128 962 | 1536×1024 |
| **Servito** `public/images/brand/wordmark.png` (prima) | `ca8f7a76…` | 93 771 | 1337×280 |

Differenza: un pass precedente aveva **ritagliato e riconvertito** l’asset in `public/`, lasciando un derivato diverso. Il browser chiedeva il path giusto e riceveva il file sbagliato.

Non era un “problema del PNG”. Era un **file diverso sullo stesso URL**.

## Prove runtime (post-fix, `next start` :3490)

### 1. Network / curl

```
GET /images/brand/wordmark.png → 200
Content-Type: image/png
Content-Length: 2128962
MD5 body: 749b46cf67a573c258032a01e62add2e  (== originale)
```

### 2. DOM header (`<img class="header-wordmark">`)

```
src: /images/brand/wordmark.png
currentSrc: http://127.0.0.1:3490/images/brand/wordmark.png
naturalWidth × naturalHeight: 1536 × 1024
```

### 3. Playwright response interception

Una sola richiesta wordmark; body MD5 `749b46cf67a573c258032a01e62add2e`.

### 4. Preload

`link rel=preload href="/images/brand/wordmark.png"` — stesso path, stessi byte.

## Checklist audit

| Check | Esito |
|-------|-------|
| Copie legacy `wordmark_logo` / `wordmark_lockup` in `public/` | Assenti |
| Import / config hardcoded legacy | Assenti (`siteConfig.logo.wordmark` → `/images/brand/wordmark.png`) |
| CSS mask su wordmark | Assente |
| `dark:invert` sul wordmark header | Assente |
| Next Image optimizer (`/_next/image?...`) | Non usato (`unoptimized`) |
| Cache `.next` | Pulita prima del rebuild |
| `Cache-Control: immutable` su `/images/*` | Presente — su deploy, client/CDN possono tenere il **vecchio** body per lo stesso URL finché non invalidano la cache |

## Correzione applicata (solo asset path, zero redesign)

1. Sostituiti i byte in `public/images/brand/wordmark.png` con l’originale bit-identico (`cp` da `./wordmark.png`, stesso MD5).
2. Aggiornate sole le costanti `width`/`height` di `next/image` a 1536×1024 (metadati, non layout CSS).
3. `npm run build` + verifica su `next start`.

## File coinvolti

- `public/images/brand/wordmark.png` — ora = originale
- `src/components/brand/SwiftWithFerLogo.tsx` — intrinsic 1536×1024
- `src/config/site.ts` — già `/images/brand/wordmark.png`
- `src/app/layout.tsx` — preload già sullo stesso path
