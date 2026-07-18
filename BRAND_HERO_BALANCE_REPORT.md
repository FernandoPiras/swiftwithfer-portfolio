# Brand / Hero Balance Report

## Problema
Dopo il pass responsive, il wordmark era troppo piccolo (altezza fissa `h-9`) e il telefono troppo grande (fino a 480px) → gerarchia rotta.

## Wordmark — sizing da aspect ratio

Asset: `wordmark_logo.png` **2038×771** → aspect **2.643**

Dimensionato per **larghezza** (asse di lettura), altezza = `width / aspect` (mai forzata):

| Breakpoint | Width | Height derivata |
|------------|-------|-----------------|
| base | **132px** | ~50px |
| sm+ | **172px** | ~65px |

- `object-contain`, `w-auto` via CSS var, `sizes` Retina allineati
- Navbar: **4.75rem → 5.5rem** (fit al mark + aria, non bar vuota)
- Header allineato a `max-w-6xl` come il resto del sito

## Hero — scala intermedia

Telefono (non ritorno al mini, non lancio oversize):

| Breakpoint | Max width |
|------------|-----------|
| base | **280px** |
| sm | **300px** |
| lg | **340px** |
| xl | **360px** |

Griglia: **1.05 / 0.95** (copy leggermente dominante). Glow attenuato.

## Gerarchia risultante

1. Brand (navbar, lockup leggibile)  
2. Headline  
3. Telefono (supporto, non protagonista)  
4. CTA  

## Verifica

- lint OK · build OK
