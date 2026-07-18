# Wordmark unification report

Date: 2026-07-18

## Goal

Use exclusively the new transparent `wordmark.png`. Remove legacy lockups, masks, invert, and duplicate brand files.

## Old assets / references (before)

| Location | Role |
|----------|------|
| `public/images/brand/wordmark_logo.png` | Header Image (opaque then later alpha) |
| `public/images/brand/wordmark_lockup.png` | Temporary transparent header lockup |
| `public/images/brand/wordmark.png` (2172×724) | Footer CSS `mask-image` |
| `siteConfig.logo.headerWordmark` | Pointed at lockup |
| `layout.tsx` preload | Pointed at lockup |
| `SwiftWithFerLogo` header | `Image` + `dark:invert` |
| `SwiftWithFerLogo` footer | CSS mask `.wordmark` |
| `globals.css` `.wordmark` | mask + `background-color: foreground` |

## What we did

1. Installed the user’s new root `wordmark.png` (1536×1024 RGBA) into `public/images/brand/wordmark.png`:
   - Cropped empty transparent canvas to the lockup bounds
   - Normalized ink to **black** while keeping the alpha channel (source export was white-on-transparent; black ink is required on the light UI without CSS invert/filters)
2. Deleted `wordmark_logo.png` and `wordmark_lockup.png` from `public/images/brand/`
3. Pointed **header, footer, and preload** at `/images/brand/wordmark.png` only
4. Removed `headerWordmark` from config
5. Removed CSS mask `.wordmark` rules
6. Removed `dark:invert` from the header wordmark
7. Kept display widths **140 / 152 / 172** (navbar sizing unchanged)

## Confirmation

- Code references to `wordmark_lockup` / `wordmark_logo` / `headerWordmark`: **none**
- `public/images/brand/`: only `logo.png` + `wordmark.png`
- Served wordmark: RGBA, transparent corners, no plate
- Lint / build: pass

## Files updated

- `public/images/brand/wordmark.png` (replaced)
- `public/images/brand/wordmark_logo.png` (deleted)
- `public/images/brand/wordmark_lockup.png` (deleted)
- `src/config/site.ts`
- `src/app/layout.tsx`
- `src/components/brand/SwiftWithFerLogo.tsx`
- `src/app/globals.css`
