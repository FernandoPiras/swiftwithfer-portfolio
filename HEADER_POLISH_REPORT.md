# Header polish report

Date: 2026-07-18

## Problems found

1. **Mobile header imbalance** — Contattami was hidden below `sm` (640px). Burger alone sat on the right; the requested cluster `[Contattami][Burger]` did not exist on phones.
2. **Wordmark opaque plate** — `wordmark_logo.png` was RGB (no alpha) with a baked white background. Through a translucent header (and via `dark:invert` on dark UI) it read as a solid rectangular plate — not a native lockup.
3. **Contattami hit-area too wide** — `ButtonLink` base `px-6` overrode compact padding (no `tailwind-merge`), so Contattami did not sit tightly beside the burger.
4. **320 crowding** — With Contattami always visible, the previous 148px mark left only ~7px between brand and actions.

## Problems resolved

| Fix | Detail |
|-----|--------|
| Action cluster | `[Contattami][Burger]` in `.header-actions` with `max-md:ml-auto`; burger remains the trailing-edge control (~16px inset). |
| Contattami always on mobile | Dedicated compact `Link` (not `ButtonLink`) so padding stays `px-2.5`. |
| Transparent asset | New `public/images/brand/wordmark_lockup.png` — identical black lockup, true RGBA alpha (no blend/mask/opacity hacks). |
| Serve as designed | Header `Image` uses `unoptimized` so Next’s optimizer cannot flatten the alpha plate. |
| Config | `siteConfig.logo.headerWordmark` + preload → `wordmark_lockup.png`. |
| Mobile mark widths | 140 / 152 / **172 desktop unchanged** — room for Contattami + burger on 320. |

## Unchanged

Hero, CTAs (page), palette, typography tokens, SEO, motion, desktop nav structure (aside from the wordmark asset).

## Breakpoints checked

320 · 360 · 375 · 390 · 393 · 412 · 414 · 428 · 430 · 480 · desktop 1440

Results after fix:

- Overflow: 0  
- Burger from right: 16px  
- Contattami visible on all phone widths  
- Gap brand→actions ≥ 15px on 320  
- Gap Contattami→burger: 4px (single trailing group)  
- Wordmark corner alpha: 0 (transparent)  
- Desktop wordmark width: 172px  

## Files modified

- `src/components/layout/Header.tsx`
- `src/components/brand/SwiftWithFerLogo.tsx`
- `src/config/site.ts`
- `src/app/layout.tsx`
- `src/app/globals.css`
- `public/images/brand/wordmark_lockup.png` (new)
- `public/images/brand/wordmark_logo.png` (replaced with same transparent lockup)

## Validation

- `npm run lint` — pass  
- `npm run build` — pass  
