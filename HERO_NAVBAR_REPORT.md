# Hero & Navbar Premium Report

Scope esclusivo: Navbar wordmark, Hero Slotiva, collegamento al case study.  
Invariati: branding asset, palette, tipografia, design system tokens, SEO, breakpoint strategy.

## Navbar

| Prima | Dopo |
|-------|------|
| Wordmark 24→26px | **30→36px** (protagonista) |
| Header 4rem | **4.75rem → 5.25rem** (sm+) |
| Menu dominante sul brand | Menu centrato, più quiet; brand a sinistra con più aria |
| Hover brand opacity 0.78 | 0.88 + allineamento ottico `translateY(0.5px)` |
| Footer ~0.7× header | Footer **18→20px** (~0.55×) per lasciare autorità alla navbar |

## Hero — mockup

| Prima | Dopo |
|-------|------|
| Phone max ~240–280px | **Hero frame 300 → 340 → 380 → 400px** |
| Colonna mockup secondaria | Grid **0.92 / 1.08** a favore del prodotto |
| Glow leggero | Alone più ampio, ombra hero dedicata |
| Badge overlay sul telefono | **Eliminato** |

## Case study — nuova soluzione

- Badge “Slotiva — case study” **rimosso** (non migliorato)
- Mockup **interamente cliccabile** → `/apps/slotiva`
- Caption sotto (non sopra): eyebrow “Prodotto in evidenza” + “Esplora Slotiva →”
- Hover: lift del telefono + accent sulla caption + freccia

## Gerarchia (primi 5 secondi)

1. **Brand** — wordmark navbar  
2. **Headline** — sempre prima del mockup (anche mobile)  
3. **Mockup** — protagonista visivo  
4. **CTA** — desktop sotto headline; mobile/tablet dopo il mockup  

CTA primaria: **Esplora Slotiva** (case study). Secondaria: contatto.

## Verifica

- `npm run lint` — OK  
- `npm run build` — OK  
- Responsive: phone scale per breakpoint; CTA stack mobile; nav hamburger invariato  
- a11y: `aria-label` sul link prodotto, focus ring sul mockup
