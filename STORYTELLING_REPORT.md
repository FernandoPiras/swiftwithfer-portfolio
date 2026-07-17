# Storytelling Upgrade Report

**Data:** 17 luglio 2026  
**Scope:** Esperienza, narrativa e percezione del valore — senza cambiare design system, palette o branding.

---

## Obiettivo

Trasformare il portfolio da vetrina di progetti a prodotto che racconta **perché** ogni software esiste e quale valore genera.

---

## Case study — struttura narrativa

Ogni pagina `/apps/[slug]` segue capitoli numerati:

1. Il problema  
2. La soluzione  
3. Funzionalità principali (eventualmente raggruppate)  
4. Architettura  
5. Tecnologie  
6. Sfide affrontate  
7. Il risultato  

Aggiunte:
- `positioning` (hero del case study)
- `trustSignals` (credibilità immediata)
- `ecosystem` (solo Slotiva)
- Reveal animati leggeri (`prefers-reduced-motion` rispettato)

---

## Slotiva — protagonista

- Mappa ecosistema: **App iOS · Gestionale web · Backend cloud**
- Tre gruppi funzionalità completi (iOS / CRM web / Firebase–Vercel–AI)
- Narrativa su complessità: multi-business, sync realtime, ruoli, pagamenti, chat, analytics
- Trust: App Store · slotiva.it live · Sync realtime · End-to-end · Multi business

## AndroMetrics — medicale

- Focus: tracking, score, grafici, report PDF, notifiche, privacy, UX
- Trust: App Store 5.0 · Privacy first · Report PDF

## PreventivoRapido — strumento professionale

- Focus: rapidità, semplicità, affidabilità, produttività
- Trust: App Store · PDF · Firma digitale · Sync cloud

---

## Homepage

- Sezione progetti: titolo *“Prodotti con una storia”*
- Copy card allineato al posizionamento di ogni prodotto

## Visual

- Screenshot in `PhoneFrame` uniforme + caption “Schermata N”
- Nessuna modifica agli asset immagine (stesso padding/ratio via frame condiviso)

## Microinterazioni

- Reveal on scroll nei case study (opacity + 16px Y)
- Nessuna animazione eccessiva; reduced-motion OK

---

## Verifiche

| Check | Esito |
|-------|-------|
| Build | ✅ |
| Lint | ✅ |
| Design system / branding | ✅ invariati |
| SEO case study descriptions | ✅ aggiornate |
| Funzionalità / link | ✅ conservati |

---

## File toccati

```
src/config/case-studies.ts
src/config/site.ts (copy app)
src/components/case-study/CaseStudyView.tsx
src/components/sections/Apps.tsx
STORYTELLING_REPORT.md
```
