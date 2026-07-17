# Wordmark refinement

## Audit

| Issue | Decision |
|-------|----------|
| Wordmark ×3 (header, hero, footer) | Troppo. Hero rimosso — competeva con headline/CTA |
| `mix-blend-mode` + `invert` | Fragili su Safari/Firefox con blur header. Rimossi |
| PNG con sfondo bianco | `Wordmark.png` intatto; derivata trasparente solo in `public/` |
| Gerarchia | Header = brand primario; footer = chiusura soft |

## Soluzione tecnica

- Derivata RGBA (lettere nere, fondo trasparente) da `Wordmark.png` senza modificarlo
- Rendering: CSS `mask-image` + `background: var(--foreground)`
- Light/dark automatici via token colore — zero filter/blend
- Preload in `layout.tsx`
- Box dimensioni esplicite (aspect 3:1) → no CLS
- Header 20→22px; footer 15→16px; allineamento ottico `-translate-y-px` in nav

## Dove compare ora

1. **Header** (unico brand above-the-fold)
2. **Footer** (chiusura)

## Browser

`mask-image` + `-webkit-mask-image`: Chrome, Safari, Firefox, Edge.

## Verifiche

Build / lint dopo le modifiche.
