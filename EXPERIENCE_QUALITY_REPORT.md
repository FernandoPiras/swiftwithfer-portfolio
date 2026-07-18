# Experience Quality Report

## Obiettivo
Rendere il portfolio un’esperienza memorabile — fluidità, ritmo, profondità e micro-cura — senza toccare branding, wordmark, design system (palette/tipografia), SEO, responsive o contenuti dei case study.

## Diagnosi iniziale
- Scroll uniforme ma poco cinematografico (fade-up identici ovunque)
- Ritmo piatto: Apps → Process → Services = tre blocchi “card” consecutivi sullo stesso fondo
- Profondità limitata (superfici piatte, poca luce/layer)
- CTA statiche, pochi ponti tra sezioni
- Hover presenti ma poco “vivi”

## Interventi

### Scroll & motion
- Token motion raffinati (`EASE_OUT_SOFT`, distanze più corte, durata più lunga, viewport % basato)
- Componente `Reveal` condiviso
- Hero a stadi (titolo → lead → CTA → meta)
- Hint scroll soft in basso hero
- Flow steps e card con stagger morbido
- `prefers-reduced-motion` rispettato (Stats inclusa)

### Ritmo
Alternanza superfici:
| Sezione | Tone |
|---------|------|
| Hero | gradient ambient |
| Stats | band + glow soft |
| Apps | surface |
| Process | default (rompe la monotonia) |
| Services | surface |
| Bio | default + ritratto con alone |
| Technologies | surface + tech-tile hover |
| Contact | glow (chiusura cinematografica) |

Ponti di flusso (CTA secondarie):
Apps → Metodo → Servizi → Bio → Stack → Contatti

### Depth & microdetails
- `section-surface` con fade in/out (non taglio duro)
- `section-glow` per Contact
- Phone frame: ombra a layer + lift hover
- Premium card / stat / tech-tile: hover elevazione + bordo accent soft
- CTA primary: lift + ombra più viva
- Nav: pill hover
- Bio: separatori interni, spacing più respirato, `text-pretty`

### Invariato
Branding, wordmark, colori, tipografia, SEO, breakpoint, copy case study.

## Quality check (Apple / Linear / Stripe / Vercel / Figma)
| Criterio | Esito |
|----------|-------|
| Fluidità | Entrances più morbidi, meno “pop” |
| Eleganza | Layering leggero, niente effetti vistosi |
| Pulizia | Ritmo alternato, meno monotonia |
| Cura | Hover, spacing, ponti tra sezioni |
| Equilibrio | Mockup ↔ metodo ↔ testo ↔ stack ↔ CTA |
| Percezione | Più “prodotto premium” che lista di sezioni |

## Verifica
- `npm run lint` — OK
- `npm run build` — OK
- a11y: focus ring, reduced motion, aria sui flow
- performance: +~0.7kB homepage JS (Reveal/stagger), nessun asset nuovo
- responsive: layout invariato, solo polish
