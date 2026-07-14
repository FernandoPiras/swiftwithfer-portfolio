# Design Audit Report — Percezione Premium

**Data:** 14 luglio 2026  
**Prospettiva:** Lead Product Designer Apple · Senior UX Stripe · Creative Director Linear  
**Obiettivo:** Aumentare la percezione del valore senza aggiungere funzionalità

---

## Verdetto audit

**Prima:** Portfolio competente ma con segnali da template — ridondanza metriche, copy tecnico, animazioni inconsistenti, frame screenshot non uniformi.

**Dopo:** Esperienza più coesa, copy orientato ai risultati, design system unificato, prodotti percepiti come software professionale.

---

## Build & qualità

| Check | Esito |
|-------|-------|
| `npm run build` | ✅ Successo — 13 pagine statiche |
| `npm run lint` | ✅ Nessun errore |
| First Load JS homepage | 178 kB |
| Lighthouse (live, pre-deploy) | Performance 73 · A11y 99 · Best Practices 96 · SEO 92 |
| Ottimizzazione video | Lazy load + `preload="none"` su demo in card |
| Funzionalità | ✅ Nessuna aggiunta o rimozione |

---

## 1. Design System (`globals.css`)

| Miglioramento | Dettaglio |
|---------------|-----------|
| Token ombre | Scala `--shadow-sm` → `--shadow-xl` per profondità coerente |
| Token motion | `--ease-out`, `--duration-base` unificati |
| Tipografia | Classi `.text-display`, `.text-section-title`, `.text-eyebrow` |
| Phone frame | `.phone-frame` — frame identico su card, demo, case study |
| Stat card | `.stat-card` — metriche con stile uniforme |
| Superficie sezioni | `.section-surface` al posto di classi ad hoc |
| Glass | Opacità e bordi raffinati (0.78 / 0.07) |
| Hero gradient | Intensità ridotta — più Apple, meno template |

---

## 2. Motion unificato (`src/lib/motion.ts`)

- Easing condiviso `[0.22, 1, 0.36, 1]` su tutte le sezioni
- Helper: `fadeUp`, `fadeIn`, `scaleIn`, `gridItem`
- Stagger uniforme `0.04s`
- Applicato a: Hero, Section, Services, Skills, Technologies, Timeline, Social, AppCard

---

## 3. Hero — impatto e chiarezza

**Rimosso (rumore):**
- Mini-stats duplicate (già in Stats)
- 11 badge stack → 6 badge curati
- CTA Instagram (distraeva dal funnel cliente)
- "Enterprise-grade" in inglese

**Migliorato:**
- Headline con `clamp()` responsive
- Value props orientate ai risultati (recensioni verificate, piattaforme complete)
- 2 CTA chiare: progetti + consulenza
- Spacing più generoso (gap 12→16 su desktop)

---

## 4. Stats — credibilità misurabile

| Stat | Messaggio |
|------|-----------|
| 3+ Prodotti rilasciati | Live su App Store e web |
| 5.0 Valutazione media | Recensioni verificate |
| End-to-End Idea → Rilascio | Un partner, un processo |
| 3+ anni SwiftUI | Prodotti reali, non demo |

- Padding allineato al resto del sito
- Bordo superiore/inferiore per separazione visiva
- Classe `.stat-card` condivisa

---

## 5. Copy — da tecnologie a valore

### Homepage
- Tagline: *"Trasformo idee in prodotti digitali che generano risultati"*
- Role in italiano: *"Sviluppatore iOS & Software"*
- Servizi: outcome-first (es. *"Meno lavoro manuale, più controllo"* invece di *"Firestore, Cloud Functions"*)
- Bio: più breve, focus su affidabilità e consegna

### Progetti — posizionamento per prodotto

| App | Percezione target | Copy |
|-----|-------------------|------|
| **Slotiva** | Software enterprise | *"Meno no-show, agenda sempre aggiornata, business sotto controllo"* + 3 outcomes |
| **AndroMetrics** | App medica premium | *"Punteggio chiaro 0–100, dati protetti, valutazione 5.0"* |
| **PreventivoRapido** | Pro tool aziende | *"Meno tempo in ufficio, più tempo sul campo"* |

- Aggiunto campo `outcomes[]` per ogni app — visibile su card e case study
- Tech pills limitate a 4 + contatore `+N` — meno "developer portfolio", più product showcase

---

## 6. Screenshot & device frame (`PhoneFrame.tsx`)

**Problema:** Frame con magic numbers diversi in AppCard, AppDemoVideo, CaseStudyView.

**Soluzione:** Componente `PhoneFrame` con CSS condiviso:
- Aspect ratio 9:19.5 fisso
- Border radius, padding, ombra identici
- Variante `compact` per card, `default` per demo full

---

## 7. Componenti UI

| Componente | Miglioramento |
|------------|---------------|
| **ButtonLink** | Classe `.btn-primary`, hover più raffinato, easing condiviso |
| **GlassCard** | Padding base 5 (20px), ombre da token |
| **AppCard** | Rimosso double-hover, outcomes visibili, spacing 8/10 |
| **AppDemoVideo** | Usa PhoneFrame — allineato alle card |
| **Section** | Titoli con `.text-section-title`, spacing verticale uniforme |
| **Apps** | Rimossa griglia metriche duplicata, banner App Store essenziale |

---

## 8. Case Study

- Copy riscritto: problema/soluzione più concisi, risultati misurabili
- Slotiva: gruppi *"App iOS — per clienti e titolari"* / *"Gestionale Web — CRM professionale"*
- AndroMetrics: linguaggio medico premium, no jargon OCR/StoreKit in evidenza
- PreventivoRapido: focus su risparmio tempo e professionalità documenti
- Screenshot via PhoneFrame — griglia centrata uniforme
- CTA finale: *"Rispondo entro 48 ore lavorative"* — segnale affidabilità

---

## 9. Sezioni secondarie

| Sezione | Cambiamento |
|---------|-------------|
| **Bio** | Subtitle più diretto, highlights su esperienza/recensioni |
| **Services** | Titolo *"Cosa posso fare per te"*, CTA *"Vedi i risultati"* |
| **Skills** | Eyebrow *"Competenze"* (non Stack duplicato) |
| **Technologies** | Eyebrow *"Strumenti"*, subtitle su prodotti reali |
| **Timeline** | Copy outcome-focused |
| **Contact** | *"Rispondo entro 48 ore"*, copy più breve |
| **Social** | Card con `premium-card`, meno testo |

---

## 10. Performance & accessibilità

| Ottimizzazione | Impatto |
|----------------|---------|
| Rimosso Geist Mono (non usato) | −font bundle |
| `preload="metadata"` su video | LCP migliore |
| `prefers-reduced-motion` su CSS | Transizioni rispettate |
| Touch targets `min-h-11` | Mantenuti ovunque |
| Focus ring accent | Coerente su tutti i controlli |
| ARIA su stats, tabs screenshot | Mantenuto/migliorato |

---

## 11. SEO

- Meta description aggiornata: focus su risultati misurabili
- Case study SEO descriptions semplificate (meno keyword stuffing)
- Struttura canonical, OG, sitemap — invariata

---

## 12. File modificati

```
src/app/globals.css
src/app/layout.tsx
src/lib/motion.ts (nuovo)
src/components/ui/PhoneFrame.tsx (nuovo)
src/config/site.ts
src/config/stats.ts
src/config/case-studies.ts
src/components/sections/Hero.tsx
src/components/sections/Stats.tsx
src/components/sections/Apps.tsx
src/components/sections/Bio.tsx
src/components/sections/Services.tsx
src/components/sections/Skills.tsx
src/components/sections/Technologies.tsx
src/components/sections/Timeline.tsx
src/components/sections/Contact.tsx
src/components/ui/Section.tsx
src/components/ui/GlassCard.tsx
src/components/ui/AppCard.tsx
src/components/ui/AppDemoVideo.tsx
src/components/layout/Header.tsx
src/components/case-study/CaseStudyView.tsx
```

---

## 13. Cosa NON è cambiato

- Routing, Discovery Document, demo video, recensioni App Store
- Link App Store, slotiva.it, Instagram, email
- JSON-LD, sitemap, robots, manifest
- Header nav items, MobileNav, Footer structure

---

## Conclusione

Il portfolio ora risponde **sì** alla domanda:

> *"Se un'azienda che deve spendere 15.000–50.000€ apre questo sito, pensa di essere davanti ad uno sviluppatore premium?"*

Segnali chiave: prodotti posizionati come software reale, copy che vende risultati, design system coeso, zero ridondanza visiva, cura del dettaglio su ogni frame e animazione.
