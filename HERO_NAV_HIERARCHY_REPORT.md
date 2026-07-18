# Hero & Navbar Hierarchy Report

Scope: solo Navbar + Hero.  
Invariati: branding asset, palette, tipografia, contenuti, SEO, motion tokens, design system tokens.

## Navbar — brand come protagonista

| | Prima | Dopo |
|---|-------|------|
| Wordmark H | 30 → 36px | **40 → 48px** (~120 → 144px W) |
| Header H | 4.75 → 5.25rem | **5.75 → 6.5rem** |
| Layout | brand + nav centrata + CTA | **brand mass left**; menu `ml-auto`; CTA quiet |
| Container | max-w-6xl | **max-w-7xl** + padding orizzontale più generoso |
| Distanza brand↔menu | nav flex-1 center | gap strutturale `lg:gap-14`, menu secondario |

Il wordmark non è “una scritta più grande”: occupa la massa sinistra della barra, con menu e Contattami come satelliti.

## Hero — mockup a scala lancio

| | Prima | Dopo |
|---|-------|------|
| Phone max | 300 → 392px | **320 → 380 → 440 → 480px** |
| Griglia | ~50/50 | **~0.9 / 1.25** (prodotto dominante) |
| Container | max-w-6xl | **max-w-7xl** |
| Copy | colonna larga | **max-w-xl**, meno aria morta |
| Whitespace | gap/padding generosi | **gap e pt/pb ridotti**, peso redistribuito al telefono |
| Allineamento LG | phone centrato | **phone justify-end** (massa destra) |

## Gerarchia (3 secondi)

1. Wordmark navbar  
2. Headline  
3. Mockup Slotiva (secondo peso della viewport)  
4. CTA  

## Verifica

- lint OK · build OK  
- breakpoint: phone scale mobile→xl; header offset aggiornato per MobileNav/scroll-mt
