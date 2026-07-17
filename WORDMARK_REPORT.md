# Wordmark navbar balance

## Problema
Wordmark a 20–22px su una riga controlli da 40px (~50%): sembrava un elemento secondario.

## Equilibrio scelto
| Elemento | Misura |
|----------|--------|
| Navbar content | `4rem` (64px) fissa |
| Controlli (nav / CTA / menu) | `40px` (`h-10`) |
| Wordmark header | **24px → 26px** (~60–65% della riga) |
| Wordmark footer | 17→18px (~0.7× header) |
| Larghezza wordmark | ~72–78px (aspect 3:1) |

Non “più grande per forza”: scala che eguaglia il peso della CTA senza invadere la nav.

## Navbar (dettagli correlati)
- Altezza fissa + safe-area sul `<header>` (non dentro la row)
- CTA `text-sm` uniforme (rimosso `text-xs`)
- Link nav: tracking stretto, `font-medium`, hover più pulito
- Gap brand ↔ nav più generoso (`gap-4` / `sm:gap-6`)
- Hover brand meno aggressivo (`0.78`)
- Mobile menu ancorato a `--header-offset`

## Vincoli rispettati
- Solo CSS scaling
- `Wordmark.png` non modificato
- Mask + `--foreground` (Chrome / Safari / Firefox / Edge)

## Verifica
Build + lint.
