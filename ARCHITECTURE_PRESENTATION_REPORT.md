# Architecture Presentation Report

## Obiettivo
Trasformare il portfolio da raccolta di prodotti a dimostrazione di capacità di progettare software complesso — senza toccare branding, design system, palette, tipografia, animazioni, SEO o responsive.

## Cosa è cambiato

### Homepage — «Come sviluppo un prodotto»
- Nuova sezione `#process` con workflow a 8 step: Analisi → UX/UI → Architettura → Sviluppo → Testing → Deploy → Aggiornamenti → Supporto
- Card con icone SVG premium, numerazione e motion esistente
- Link nav **Metodo** in header e mobile nav

### Case study — presentazione architetturale
Per ogni progetto:
- **Architecture flow** visuale (es. Utente → App iOS → Firebase → …)
- **Journey flow** (Slotiva): Cliente → Prenotazione → Realtime Sync → …
- **3–6 decisioni tecniche** leggibili (titolo + motivo breve)
- **Timeline prodotto**: Idea → … → Produzione → Aggiornamenti
- **Quality signals** + **capabilities** (realtime, cloud, sicurezza, responsive, …)

### Componenti
- `FlowSteps` — diagramma verticale (mobile) / orizzontale (desktop)
- Config: `src/config/process.ts`, estensione `case-studies.ts`

## Invariato
Branding, palette, tipografia, motion tokens, SEO metadata/JSON-LD, breakpoint responsive.

## Review (CTO / PM / CEO / Architect)
| Lente | Verdetto |
|-------|----------|
| CTO | Flow e decisioni mostrano ownership di stack e trade-off |
| PM | Processo e timeline comunicano delivery end-to-end |
| CEO | Segnali “in produzione / mantenuto / scalabile” aumentano fiducia |
| Architect | Diagrammi al posto di paragrafi — leggibile in pochi secondi |

**Affiderei un progetto enterprise?** Sì a livello di presentazione: il portfolio ora comunica progettazione di sistemi, non solo shipping di app.

## Verifica
- `npm run lint` — OK
- `npm run build` — OK (13 route statiche)
- Accessibilità: `aria-label` sui flow, structure semantica (`ol`/`section`)
- Performance: nessun asset nuovo; solo markup/config
