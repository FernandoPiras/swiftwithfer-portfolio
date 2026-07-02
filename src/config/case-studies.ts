export interface CaseStudyContent {
  slug: string;
  appId: "andrometrics" | "slotiva" | "preventivorapido";
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  challenges: string[];
  result: string;
  seoDescription: string;
}

export const caseStudies: CaseStudyContent[] = [
  {
    slug: "andrometrics",
    appId: "andrometrics",
    problem:
      "Monitorare il benessere e la fertilità maschile richiede strumenti chiari, continui e facili da interpretare. Molti utenti registrano dati su fogli sparsi o app generiche che non offrono analisi personalizzate né trend nel tempo.",
    solution:
      "AndroMetrics centralizza parametri, abitudini e referti in un'unica esperienza SwiftUI. L'app calcola uno score giornaliero 0–100, visualizza grafici evolutivi e offre insight personalizzati per comprendere i progressi con chiarezza.",
    features: [
      "Score fertilità 0–100 aggiornato ogni giorno",
      "Monitoraggio parametri e abitudini quotidiane",
      "Grafici e trend nel tempo",
      "OCR referti con Vision framework",
      "Widget iOS per accesso rapido",
      "Abbonamenti Premium con StoreKit 2",
      "Export PDF per report avanzati",
    ],
    technologies: [
      "SwiftUI",
      "HealthKit",
      "StoreKit 2",
      "Firebase",
      "WidgetKit",
      "Vision",
      "PDFKit",
    ],
    challenges: [
      "Progettare un'interfaccia medica chiara senza risultare intimidatoria",
      "Gestire dati sensibili con privacy by design e sync cloud sicuro",
      "Integrare OCR affidabile su referti con formati diversi",
      "Implementare abbonamenti Premium conformi alle linee guida Apple",
    ],
    result:
      "App pubblicata su App Store con valutazione 5.0, recensioni positive e un prodotto completo che unisce UX premium, analisi personalizzate e monetizzazione StoreKit.",
    seoDescription:
      "Case study AndroMetrics: app iOS SwiftUI per monitoraggio fertilità maschile con Firebase, StoreKit 2, widget e OCR referti.",
  },
  {
    slug: "slotiva",
    appId: "slotiva",
    problem:
      "Saloni, barbieri e personal trainer gestiscono prenotazioni su WhatsApp, fogli Excel e strumenti non integrati. Il risultato: sovrapposizioni, no-show e zero visibilità sull'agenda.",
    solution:
      "Slotiva offre una piattaforma mobile-first con calendario condiviso, prenotazioni in tempo reale, chat integrata e notifiche push. I titolari attivano Slotiva Pro per gestire team, slot e clienti da un'unica app.",
    features: [
      "Calendario e agenda condivisa",
      "Prenotazioni smart con conferma immediata",
      "Chat integrata tra cliente e professionista",
      "Notifiche push per promemoria e aggiornamenti",
      "Slotiva Pro con StoreKit 2 per titolari",
      "Companion Apple Watch per consultare l'agenda",
      "Sito web slotiva.it per presenza online",
    ],
    technologies: [
      "SwiftUI",
      "Firebase",
      "Firestore",
      "Cloud Functions",
      "StoreKit 2",
      "Push Notifications",
      "Apple Watch",
    ],
    challenges: [
      "Sincronizzare prenotazioni multi-utente in tempo reale senza conflitti",
      "Progettare UX distinte per clienti finali e titolari attività",
      "Gestire notifiche push affidabili su iOS con Firebase Cloud Messaging",
      "Scalare il backend per attività con team e slot multipli",
    ],
    result:
      "Piattaforma live su App Store e web, adottata da professionisti del settore beauty e fitness con un flusso prenotazioni fluido e backend cloud scalabile.",
    seoDescription:
      "Case study Slotiva: app iOS SwiftUI per prenotazioni saloni e PT con Firebase, push notification, Apple Watch e StoreKit 2.",
  },
  {
    slug: "preventivorapido",
    appId: "preventivorapido",
    problem:
      "Artigiani e freelance perdono tempo a creare preventivi manualmente: documenti non uniformi, firme mancanti, clienti da rincorrere e nessun archivio centralizzato.",
    solution:
      "PreventivoRapido PRO digitalizza l'intero flusso: creazione preventivi professionali in pochi minuti, PDF con firma cliente, rubrica contatti, fatture e sync cloud con abbonamento Pro.",
    features: [
      "Preventivi PDF professionali in pochi tap",
      "Rubrica clienti con storico documenti",
      "Firma digitale integrata nel PDF",
      "Gestione fatture e documenti collegati",
      "Backup e sync cloud tra dispositivi",
      "Abbonamento Pro con StoreKit 2",
      "Sign in with Apple per accesso sicuro",
    ],
    technologies: [
      "SwiftUI",
      "StoreKit 2",
      "PDFKit",
      "Sign in with Apple",
      "Cloud Sync",
      "Firebase",
    ],
    challenges: [
      "Generare PDF di qualità professionale con layout consistenti",
      "Integrare firma cliente direttamente nel documento exportato",
      "Progettare sync cloud affidabile per dati business critici",
      "Bilanciare funzionalità free e Pro per conversione abbonamenti",
    ],
    result:
      "App pubblicata su App Store che riduce drasticamente il tempo di creazione preventivi, con un'esperienza curata per professionisti che lavorano sul campo.",
    seoDescription:
      "Case study PreventivoRapido PRO: app iOS SwiftUI per preventivi PDF, firma digitale, sync cloud e abbonamenti StoreKit 2.",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs() {
  return caseStudies.map((study) => study.slug);
}
