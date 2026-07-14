export interface CaseStudyFeatureGroup {
  title: string;
  items: string[];
}

export interface CaseStudyContent {
  slug: string;
  appId: "andrometrics" | "slotiva" | "preventivorapido";
  problem: string;
  solution: string;
  features: string[];
  featureGroups?: CaseStudyFeatureGroup[];
  challenges: string[];
  results: string[];
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
      "OCR referti con Vision",
      "Widget iOS",
      "Export PDF",
      "Abbonamenti Premium con StoreKit 2",
    ],
    challenges: [
      "Interfaccia chiara per dati di salute, senza risultare complessa",
      "Gestione dati sensibili con sync cloud e privacy by design",
      "Integrazione OCR su referti con formati diversi",
      "Abbonamenti Premium conformi alle linee guida Apple",
    ],
    results: [
      "App pubblicata su App Store con valutazione 5.0",
      "Recensioni positive da utenti reali",
      "UX curata con analisi personalizzate e grafici evolutivi",
      "Monetizzazione StoreKit 2 integrata",
    ],
    seoDescription:
      "Case study AndroMetrics: app iOS SwiftUI per monitoraggio fertilità maschile con Firebase, StoreKit 2, widget e OCR referti.",
  },
  {
    slug: "slotiva",
    appId: "slotiva",
    problem:
      "Saloni, barbieri e personal trainer spesso gestiscono prenotazioni su WhatsApp, fogli o strumenti non integrati. Il risultato sono sovrapposizioni, no-show, poca visibilità sull'agenda e zero controllo su clienti, staff e performance dell'attività.",
    solution:
      "Slotiva è una piattaforma completa: app iOS nativa per clienti e titolari, gestionale web professionale su slotiva.it e backend Firebase in tempo reale. Calendario, prenotazioni, chat, pagamenti, analytics e CRM in un unico ecosistema.",
    features: [],
    featureGroups: [
      {
        title: "App iOS",
        items: [
          "Prenotazioni",
          "Clienti",
          "Staff",
          "Calendario",
          "Servizi",
          "Disponibilità",
          "Notifiche push",
          "Autenticazione",
          "Ruoli utente",
          "Multi business",
          "Statistiche",
          "Dashboard",
          "Gestione appuntamenti",
          "Storico",
          "Pagamenti",
          "Pacchetti",
          "Abbonamenti",
          "Feedback",
          "Chat",
          "Profilo cliente",
          "Sincronizzazione realtime",
          "Companion Apple Watch",
        ],
      },
      {
        title: "Gestionale Web",
        items: [
          "Dashboard completa",
          "Analytics",
          "KPI",
          "Clienti",
          "Storico",
          "Fatturato",
          "Business Intelligence",
          "Insight",
          "CRM evoluto",
          "Marketing",
          "Fidelizzazione",
          "Gestione staff",
          "Gestione servizi",
          "Disponibilità",
          "Configurazione attività",
          "Pannello amministrativo",
          "Responsive desktop, tablet e mobile",
        ],
      },
    ],
    challenges: [
      "Prenotazioni multi-utente in tempo reale senza conflitti",
      "UX distinte per clienti finali e titolari attività",
      "Sincronizzazione app iOS ↔ gestionale web ↔ Firebase",
      "Notifiche push affidabili e backend scalabile per team multipli",
    ],
    results: [
      "App pubblicata su App Store",
      "Gestionale web live su slotiva.it",
      "Piattaforma pronta per saloni, barbieri e personal trainer",
      "Ecosistema integrato app + CRM + backend cloud",
    ],
    seoDescription:
      "Case study Slotiva: app iOS SwiftUI e gestionale web CRM per prenotazioni con Firebase, React, TypeScript, Vercel e StoreKit 2.",
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
      "Rubrica clienti con storico",
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
    results: [
      "App pubblicata su App Store",
      "Flusso preventivi semplificato per artigiani e freelance",
      "Documenti PDF con firma digitale integrata",
      "Sync cloud tra dispositivi",
    ],
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
