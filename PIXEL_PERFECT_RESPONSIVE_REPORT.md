# Pixel-perfect responsive report

Date: 2026-07-18

## Scope

Hero phone scale, mobile wordmark bands only, full breakpoint audit. No changes to branding assets, palette, typography tokens, content, SEO, motion, section order, or desktop wordmark width (172px).

## Problems found

1. **Hero phone too large** — previous ladder `280 / 300 / 340 / 360` still dominated the first viewport vs the headline.
2. **Mobile Contattami always visible** — `ButtonLink` base `inline-flex` overrode `hidden` (no `tailwind-merge`), crowding the bar and overflowing at 320px.
3. **Mobile actions not reliably right-aligned** — when Contattami leaked into the layout, the hamburger sat mid-bar instead of at the trailing edge.
4. **Mobile wordmark too small for lockup text** — fixed 132px width made “swiftwithfer” hard to read on Retina phones.

## Fixes applied

| Area | Change |
|------|--------|
| Hero phone | Scale only: `232 / 248 / 288 / 308` (link `max-w-*` + `.phone-frame--hero`). Glow/shadow/position unchanged. |
| Wordmark mobile | Width bands: `<390` → 148px, `390–639` → 156px, `≥640` → **172px unchanged**. Header offset mobile `5rem`. |
| Navbar | Hide Contattami via `hidden sm:contents` wrapper; `max-md:ml-auto` on actions cluster; mobile gap `gap-3`. |

## Breakpoints verified (Playwright Chromium)

320 · 360 · 375 · 390 · 393 · 412 · 414 · 428 · 430 · 480 · 640 · 768 · 820 · 834 · 1024 · 1280 · 1366 · 1440 · 1600 · 1728 · 1920

Landscape: 667×390 · 736×390 · 844×390 · 926×390

### Results after fix

- Horizontal overflow: **0** at all checked widths
- Contattami hidden below 640px: **yes**
- Hamburger trailing edge (16–24px inset): **yes** on mobile
- Wordmark measured: 148×56 (<390), 156×59 (390–639), 172×65 (sm+)
- Phone measured: 232 / 248 / 288 / 308 as expected
- Lint: clean (after removing local audit scripts)
- Build: success

## Intentionally unchanged

Desktop wordmark, palette, type scale, copy, SEO, motion, CTAs labels/targets, section hierarchy, phone glow/shadow styling.
