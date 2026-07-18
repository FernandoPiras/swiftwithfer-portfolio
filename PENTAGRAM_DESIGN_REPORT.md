# Pentagram Design Director Report

Audit rigoroso: portfolio trattato come sconosciuto.  
Vincoli: no palette, no branding asset, no contenuti, no SEO, no nuove feature.

Standard di giudizio: “Lo lascerei così su Apple / Linear / Stripe / Figma / Vercel?”  
Solo interventi che alzano qualità percepita.

---

## 14 migliorie applicate

### 1. Tipografia display
Line-height 1.05 → **1.08**, tracking più stretto, scala clamp ricalibrata. Headline meno “compressa”, più respirazione.

### 2. Lead / body
Lead line-height **1.65**, size leggermente ridotta al max. Meno “marketing loud”, più leggibilità da prodotto.

### 3. Eyebrow
Tracking 0.14em → **0.11em**. Meno shouty, più editorial.

### 4. Luce hero
Doppio blob accent + secondary → **un solo alone soft all’8%**. Meno glow da template AI.

### 5. Scroll indicator
Mouse hint in fondo hero **rimosso**. Cliché SaaS mid-tier.

### 6. Caption prodotto
Eyebrow “Prodotto in evidenza” **eliminato**. Solo “Esplora Slotiva →” in muted, peso 500.

### 7. Meta hero
Separatori `·` → **hairline verticali**. Peso tipografico abbassato.

### 8. Motion
Travel 18px → **10px**, durate più corte. Entrances di precisione, non float teatrale.

### 9. Hover card / phone / tech
Lift -3/−5px → **-1/−2px**. Tech-tile senza bounce. Stat senza lift. Premium shadow più soft.

### 10. Ombre device
Shadow piatte → **layer doppio** (ambient + contact). Bordo più sottile.

### 11. Glass / sezioni
Glass meno opaco, border più soft. Section padding **py-20→32**. Surface al **42%** (prima 58% fangoso). Glow contact attenuato.

### 12. Navbar
Pill hover sulle voci **rimossi**. Contattami da secondary glass → **ghost**. Border header più leggero. Brand resta autorità.

### 13. App cards
Ring accent flagship **rimosso**. Legal link → ghost. Spacing interno più ampio. Banner App Store dematerializzato (meno card).

### 14. Footer + ponti
Social senza box glass. Bridge CTA → **ghost con freccia**. Copyright snellito. Meno UI “dashboard”, più editoriale.

---

## Cosa non ho toccato (di proposito)

- Palette hex, wordmark asset, copy, SEO, struttura sezioni, stack tecnologico dichiarato

---

## Verifica

- `npm run lint` — OK  
- `npm run build` — OK  

---

## Verdetto

Prima: portfolio competente con troppi pattern mid-SaaS (glow, pill hover, lift aggressivi, caption ridondanti).  
Dopo: meno rumore, più gerarchia e precisione. Ancora migliorabile (case study depth, densità Discovery), ma ogni modifica sopra passa il test “non lo lascerei così”.
