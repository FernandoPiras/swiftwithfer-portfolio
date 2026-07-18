# Mobile hero fold report

Date: 2026-07-18

## Problem

On mobile the Slotiva mockup stacked **above** the CTAs, so the first viewport led with the phone and the headline/CTA fell below the fold.

## Goal

Mobile first viewport = brand → message → primary CTA → start of mockup. Phone is support, not protagonist.

## Changes (mobile only, `<640px` + short landscape)

| Change | Detail |
|--------|--------|
| Order | CTAs (+ meta) moved **above** the phone via `.hero-ctas-mobile` |
| Spacing | Tighter `gap` / `pt` / `pb` / lead `mt` (`max-sm:*`) |
| Hero height | `max-sm:min-h-0 max-sm:items-start` (no forced full-viewport centering) |
| Phone scale bands | `168` (320–359) · `176` (360–389) · `188` (390–430) · `200` (431–639) |
| Landscape short | `max-height: 520px` + `max-width: 1023px`: message-first CTAs, phone hidden (cannot fit) |

## Unchanged

- Desktop (`lg+`) layout, phone ladder `288/308`, CTAs in copy column  
- Tablet portrait (`sm`–`lg`): phone then CTAs, scale `248`  
- Wordmark, palette, typography tokens, copy, SEO, motion tokens, glow/shadow style  

## Device verification (post-animation)

| Device | Viewport | Fold: brand + h1 + lead + primary CTA | Phone |
|--------|----------|----------------------------------------|-------|
| narrow | 320×568 | ✓ | peek (~168px) |
| Galaxy S23 | 360×780 | ✓ | peek (~176px) |
| iPhone SE | 375×667 | ✓ | peek (~176px) |
| iPhone 13/14 | 390×844 | ✓ | peek (~188px) |
| iPhone 15 | 393×852 | ✓ | peek (~188px) |
| Pixel | 412×915 | ✓ | peek (~188px) |
| Pro Max | 430×932 | ✓ | peek (~188px) |
| iPhone 14 landscape | 844×390 | ✓ (CTA in fold) | hidden (height) |
| iPad portrait | 768×1024 | unchanged tablet order | 248px |
| Desktop | 1440×900 | unchanged | 308px |

## Validation

- `npm run lint` — pass  
- `npm run build` — pass  
