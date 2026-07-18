# Mobile SaaS hero report

Date: 2026-07-18

## Goal

Premium mobile hero hierarchy:

1. Wordmark  
2. Headline  
3. Description  
4. Slotiva mockup  
5. CTA  

Message first, product second, action third. Desktop untouched.

## Applied changes (mobile only)

| Area | Change |
|------|--------|
| Order | Removed CTAs from the copy column on mobile. CTAs live in `.hero-ctas-below` (order 3) under the mockup for all `<lg`. |
| Spacing | Tighter mobile shell: `gap-6`, `pt-4`, `pb-12`, `px-5`; lead `mt-3.5`. |
| Headline | Full available width on mobile (`max-w-none`). |
| Lead | Full width on mobile (no `max-w-lg` clamp). |
| Phone scale | Optical bands capped at **72vw** (never >75vw): 228 / 248 / 264 / 276 / 288 / 300. Glow/shadow unchanged. |
| Caption | Hidden on mobile (CTA sits directly under the device). |
| Landscape short | Phone hidden; CTAs follow copy (height ≤520px). |

## Unchanged

Desktop layout & phone width **308px**, tablet `sm+` ladder **248/288/308**, wordmark asset/desktop size, palette, type tokens, copy, SEO, motion tokens.

## Breakpoint check

| Width | Phone W | ≈vw | Order | Overflow |
|------:|--------:|----:|:------:|:--------:|
| 320 | 228 | 71.3 | ✓ | 0 |
| 360 | 248 | 68.9 | ✓ | 0 |
| 375 | 248 | 66.1 | ✓ | 0 |
| 390 | 264 | 67.7 | ✓ | 0 |
| 393 | 264 | 67.2 | ✓ | 0 |
| 412 | 264 | 64.1 | ✓ | 0 |
| 414 | 276 | 66.7 | ✓ | 0 |
| 428 | 276 | 64.5 | ✓ | 0 |
| 430 | 288 | 67.0 | ✓ | 0 |
| 480 | 300 | 62.5 | ✓ | 0 |
| 1440 (control) | 308 | — | desktop | 0 |

On every phone width: headline + description fully above the fold; mockup begins after the message; CTAs follow the mockup.

## Validation

- `npm run lint` — pass  
- `npm run build` — pass  
