export interface CaseStudyFeatureGroup {
  title: string;
  description?: string;
  items: string[];
}

export interface CaseStudyEcosystemLayer {
  title: string;
  summary: string;
}

export interface CaseStudyContent {
  slug: string;
  appId: "andrometrics" | "slotiva" | "preventivorapido";
  /** One-line positioning for the case study hero */
  positioning: string;
  problem: string;
  solution: string;
  architecture: string;
  features: string[];
  featureGroups?: CaseStudyFeatureGroup[];
  /** High-level product map — used for Slotiva */
  ecosystem?: CaseStudyEcosystemLayer[];
  challenges: string[];
  results: string[];
  trustSignals: string[];
  seoDescription: string;
}

export const caseStudies: CaseStudyContent[] = [
  {
    slug: "slotiva",
    appId: "slotiva",
    positioning:
      "Un ecosistema completo per attività basate su appuntamenti: app iOS, gestionale web e backend cloud che lavorano come un unico prodotto.",
    problem:
      "Saloni, barbieri e studi professionali gestiscono ancora prenotazioni su WhatsApp, fogli e strumenti scollegati. Il risultato è prevedibile: sovrapposizioni, no-show, staff fuori sync, clienti senza storico e zero visione su fatturato e performance. Ogni strumento risolve un pezzo — nessuno governa l'attività per intero.",
    solution:
      "Slotiva è la piattaforma che unifica operations e crescita. I clienti prenotano e comunicano dall'app iOS; i titolari e lo staff gestiscono agenda, servizi e team; il gestionale web su slotiva.it offre CRM, dashboard e analytics. Tutto condivide lo stesso backend Firebase in tempo reale: una modifica su un dispositivo è subito ovunque.",
    architecture:
      "Tre superfici, una fonte di verità. L'app iOS (SwiftUI) e il gestionale web (React + TypeScript su Vercel) leggono e scrivono su Firestore. Cloud Functions orchestrano notifiche, regole di business e automazioni. Auth e ruoli proteggono multi-business e multi-staff. La sync realtime tiene allineati clienti, agenda, pagamenti e chat — con AI assistita nei flussi operativi dove genera valore concreto.",
    features: [],
    ecosystem: [
      {
        title: "App iOS",
        summary:
          "Esperienza native per clienti e titolari: prenotazioni, chat, pagamenti, profilo e companion Apple Watch.",
      },
      {
        title: "Gestionale web",
        summary:
          "CRM e operations su slotiva.it: dashboard, KPI, staff, servizi e pannello admin responsive.",
      },
      {
        title: "Backend cloud",
        summary:
          "Firebase, Firestore e Cloud Functions: auth, sync realtime, notifiche e automazioni scalabili.",
      },
    ],
    featureGroups: [
      {
        title: "App iOS — clienti e titolari",
        description:
          "Il prodotto in tasca: chi prenota e chi gestisce l'attività condividono la stessa fonte dati, con UX distinte.",
        items: [
          "Prenotazioni e gestione appuntamenti",
          "Calendario e disponibilità in tempo reale",
          "Clienti, storico e profilo",
          "Staff, ruoli e permessi",
          "Servizi, pacchetti e abbonamenti",
          "Pagamenti e notifiche push",
          "Chat e feedback",
          "Dashboard e statistiche operative",
          "Multi business",
          "Autenticazione sicura",
          "Sincronizzazione realtime",
          "Companion Apple Watch",
        ],
      },
      {
        title: "Gestionale web — CRM & operations",
        description:
          "Il centro di controllo dell'attività: da desktop, tablet o mobile, senza perdere contesto.",
        items: [
          "Dashboard completa con KPI",
          "Analytics, insight e business intelligence",
          "CRM clienti con storico e fatturato",
          "Marketing e fidelizzazione",
          "Gestione staff e servizi",
          "Disponibilità e configurazione attività",
          "Pannello amministrativo",
          "Responsive desktop, tablet e mobile",
        ],
      },
      {
        title: "Infrastruttura — Firebase, Vercel & AI",
        description:
          "L'architettura che rende l'ecosistema affidabile, aggiornabile e pronto a crescere.",
        items: [
          "Firebase Authentication",
          "Cloud Firestore",
          "Cloud Functions",
          "Sincronizzazione realtime",
          "Notifiche e automazioni",
          "React + TypeScript",
          "Deploy su Vercel",
          "AI assistita nei flussi operativi",
        ],
      },
    ],
    challenges: [
      "Prenotazioni concorrenti senza conflitti di slot",
      "Due esperienze distinte (cliente vs titolare) sulla stessa piattaforma",
      "Sync affidabile e a bassa latenza tra app, web e cloud",
      "Multi-business e multi-staff con ruoli chiari e dati isolati",
      "Notifiche e automazioni affidabili sotto carico reale",
    ],
    results: [
      "App pubblicata su App Store",
      "Gestionale CRM live su slotiva.it",
      "Ecosistema end-to-end: prenotazioni, pagamenti, chat e analytics nello stesso prodotto",
      "Architettura moderna pronta per saloni, barbieri e personal trainer",
      "Un unico partner dalla progettazione al rilascio",
    ],
    trustSignals: [
      "App Store",
      "slotiva.it live",
      "Sync realtime",
      "End-to-end",
      "Multi business",
    ],
    seoDescription:
      "Case study Slotiva: ecosistema prenotazioni con app iOS, gestionale web CRM, Firebase, React e sync realtime.",
  },
  {
    slug: "andrometrics",
    appId: "andrometrics",
    positioning:
      "Un'app medicale premium che traduce dati di fertilità e benessere maschile in insight chiari, protetti e utilizzabili ogni giorno.",
    problem:
      "Monitorare la fertilità maschile richiede continuità e chiarezza. Fogli, app generiche e referti sparsi non costruiscono un quadro clinico nel tempo: i dati restano frammentati, difficili da interpretare e poco utili per decisioni consapevoli.",
    solution:
      "AndroMetrics centralizza tracking, abitudini e referti in un'unica esperienza iOS. Ogni giorno calcola uno score 0–100, mostra grafici evolutivi e report comprensibili. Privacy by design, notifiche discrete e export PDF: qualità medicale senza complessità da laboratorio.",
    architecture:
      "App SwiftUI con sync cloud Firebase, digitalizzazione referti (Vision), widget iOS e abbonamenti StoreKit 2. Il flusso dati è pensato per continuità d'uso, chiarezza clinica e protezione delle informazioni di salute.",
    features: [
      "Tracking quotidiano di parametri e abitudini",
      "Score fertilità 0–100 immediato e leggibile",
      "Grafici, trend e statistiche nel tempo",
      "Report PDF esportabili",
      "Digitalizzazione referti",
      "Notifiche discrete per continuità d'uso",
      "Widget iOS sempre a portata",
      "Privacy by design e sync protetta",
      "Esperienza utente medicale, non tecnica",
      "Piano Premium con StoreKit 2",
    ],
    challenges: [
      "Comunicare dati sensibili con linguaggio chiaro e rassicurante",
      "Proteggere la privacy senza compromettere la sync cloud",
      "Trasformare referti eterogenei in dati strutturati",
      "Bilanciare profondità analitica e semplicità d'uso quotidiana",
    ],
    results: [
      "Valutazione 5.0 su App Store",
      "Recensioni verificate da utenti reali",
      "UX medicale riconosciuta per chiarezza e affidabilità",
      "Prodotto live con tracking, grafici, report e piano Premium",
    ],
    trustSignals: [
      "App Store 5.0",
      "Privacy first",
      "Report PDF",
      "Aggiornamenti continui",
    ],
    seoDescription:
      "Case study AndroMetrics: app iOS medicale per tracking fertilità maschile, grafici, report PDF e privacy by design.",
  },
  {
    slug: "preventivorapido",
    appId: "preventivorapido",
    positioning:
      "Uno strumento professionale che riduce il tempo tra richiesta del cliente e preventivo firmato — senza sacrificare qualità del documento.",
    problem:
      "Artigiani e professionisti perdono ore in preventivi manuali: layout non uniformi, firme mancanti, rubriche disordinate e nessun backup affidabile. Ogni ritardo è un lavoro che rischia di sfumare.",
    solution:
      "PreventivoRapido PRO digitalizza il flusso commerciale: preventivi PDF curati in pochi minuti, firma cliente integrata, rubrica sincronizzata e cloud backup. Rapidità e semplicità sul campo; affidabilità da studio professionale.",
    architecture:
      "App SwiftUI con generazione PDF, firma digitale nel documento, Sign in with Apple e sync cloud. Il piano Pro (StoreKit 2) sblocca produttività senza frizioni — pensato per chi lavora tra cantiere e cliente.",
    features: [
      "Preventivi PDF professionali in pochi minuti",
      "Flusso semplice: crea, invia, fai firmare",
      "Firma digitale integrata nel documento",
      "Rubrica clienti con storico",
      "Gestione fatture",
      "Backup e sync cloud tra dispositivi",
      "Accesso con Apple ID",
      "Piano Pro per chi lavora ogni giorno",
    ],
    challenges: [
      "PDF con layout professionale e consistente su ogni dispositivo",
      "Firma cliente affidabile e leggibile nel documento finale",
      "Sync cloud robusta per dati business critici",
      "Equilibrio chiaro tra funzioni base e piano Pro",
    ],
    results: [
      "App live su App Store",
      "Tempo di preventivazione drasticamente ridotto",
      "Documenti firmati che trasmettono professionalità",
      "Produttività misurabile per artigiani e freelance",
    ],
    trustSignals: [
      "App Store",
      "PDF professionali",
      "Firma digitale",
      "Sync cloud",
    ],
    seoDescription:
      "Case study PreventivoRapido PRO: app iOS per preventivi PDF rapidi, firma digitale e produttività professionale.",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs() {
  return caseStudies.map((study) => study.slug);
}
