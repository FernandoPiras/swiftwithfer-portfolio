# WEBSITE_ICON_UPDATE_REPORT — GynoMetrics (fix)

**Date:** 2026-09-04  
**Issue:** Live site showed a solid teal/green square instead of the official App Icon.

---

## Root cause (verified)

1. First deploy used a tiny solid-green placeholder as `icon.png`.
2. `_next/image` cached that result with `cache-control: public, max-age=31536000, immutable`.
3. Replacing the file at the same URL did **not** bust that CDN cache — browsers still painted `(46, 111, 105)` green.
4. `screenshot-1/2/3.png` were the same green placeholder, so the homepage phone mockup also showed a green square.

Official App Icon (pink **G** + GYNOMETRICS) was already correct on disk after the previous copy; the CDN + green screenshots were the problem.

---

## Fix

| Item | Value |
|------|--------|
| Source | `GynoMetrics/.../AppIcon.appiconset/App_Icon.png` (official) |
| Dest | `public/images/apps/gynometrics/app-icon.png` (**new URL** → cache bust) |
| Format | Same artwork, 8-bit RGBA PNG (matches other apps; web-safe) |
| Config | `site.ts` + `legal/index.ts` → `/images/apps/gynometrics/app-icon.png` |
| Screenshots | Removed green placeholder PNGs; `screenshots: []` so card uses icon fallback |

**Not redesigned.** No ImageMagick. Artwork = official App Icon only.

---

## Build / ship

- `npm run build` SUCCEEDED  
- Commit + push to `main` for Vercel production
