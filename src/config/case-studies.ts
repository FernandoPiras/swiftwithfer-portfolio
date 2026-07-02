export interface CaseStudyContent {
  slug: string;
  appId: "andrometrics" | "slotiva" | "preventivorapido";
  problem: string;
  solution: string;
  features: string[];
  challenges: string[];
  result: string;
  seoDescription: string;
}

export const caseStudies: CaseStudyContent[] = [
  {
    slug: "andrometrics",
    appId: "andrometrics",
    problem:
      "Monitorare il benessere e la fertilità maschile richiede strumenti chiari, continui e facili da interpretare. Registrare parametri su fogli sparsi o app generiche non offre analisi personalizzate né trend comprensibili nel tempo.",
    solution:
      "AndroMetrics centralizza parametri, abitudini e referti in un'unica app SwiftUI. Calcola uno score giornaliero 0–100, mostra grafici evolutivi e insight personalizzati per seguire i progressi con chiarezza.",
    features: [
      "Score fertilità 0–100 ogni giorno",
      "Monitoraggio parametri e abitudini quotidiane",
      "Grafici e trend nel tempo",
      "OCR referti",
      "Widget iOS",
      "Abbonamenti Premium con StoreKit 2",
    ],
    challenges: [
      "Interfaccia chiara per dati di salute, senza risultare complessa",
      "Gestione dati sensibili con sync cloud e privacy",
      "Integrazione OCR su referti con formati diversi",
      "Abbonamenti Premium conformi alle linee guida Apple",
    ],
    result:
      "App pubblicata su App Store con valutazione 5.0 e recensioni positive. Prodotto completo con UX curata, analisi personalizzate e monetizzazione StoreKit.",
    seoDescription:
      "Case study AndroMetrics: app iOS SwiftUI per monitoraggio fertilità maschile con Firebase, StoreKit 2, widget e OCR referti.",
  },
  {
    slug: "slotiva",
    appId: "slotiva",
    problem:
      "Saloni, barbieri e personal trainer spesso gestiscono prenotazioni su WhatsApp, fogli o strumenti non integrati. Il risultato sono sovrapposizioni, no-show e poca visibilità sull'agenda.",
    solution:
      "Slotiva unifica calendario, prenotazioni, chat e notifiche push in un'app mobile-first. I titolari attività usano Slotiva Pro per gestire l'attività da un'unica piattaforma, con companion Apple Watch.",
    features: [
      "Calendario e agenda",
      "Prenotazioni smart",
      "Chat integrata",
      "Notifiche push",
      "Slotiva Pro con StoreKit 2",
      "Companion Apple Watch",
      "Sito web slotiva.it",
    ],
    challenges: [
      "Prenotazioni multi-utente in tempo reale senza conflitti",
      "UX distinte per clienti e titolari attività",
      "Notifiche push affidabili su iOS",
      "Backend Firebase scalabile per attività con team e slot multipli",
    ],
    result:
      "App pubblicata su App Store e sito web slotiva.it. Piattaforma pronta per saloni, barbieri e PT con flusso prenotazioni integrato.",
    seoDescription:
      "Case study Slotiva: app iOS SwiftUI per prenotazioni saloni e PT con Firebase, push notification, Apple Watch e StoreKit 2.",
  },
  {
    slug: "preventivorapido",
    appId: "preventivorapido",
    problem:
      "Artigiani e freelance perdono tempo con preventivi manuali: documenti non uniformi, firme mancanti e nessun archivio centralizzato dei clienti.",
    solution:
      "PreventivoRapido PRO digitalizza il flusso: preventivi PDF in pochi minuti, rubrica clienti, firma digitale, fatture, backup e sync cloud con abbonamento Pro.",
    features: [
      "Preventivi PDF professionali",
      "Rubrica clienti",
      "Firma digitale nel PDF",
      "Gestione fatture",
      "Backup e sync cloud",
      "Abbonamento Pro con StoreKit 2",
      "Sign in with Apple",
    ],
    challenges: [
      "PDF professionali con layout consistenti",
      "Firma cliente integrata nel documento exportato",
      "Sync cloud affidabile per dati business",
      "Bilanciamento funzionalità free e Pro con StoreKit 2",
    ],
    result:
      "App pubblicata su App Store per artigiani e freelance. Flusso preventivi semplificato con documenti PDF, firma e sync cloud.",
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
