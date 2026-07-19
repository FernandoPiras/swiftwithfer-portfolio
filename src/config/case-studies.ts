export interface CaseStudyFeatureGroup {
  title: string;
  description?: string;
  items: string[];
}

export interface CaseStudyEcosystemLayer {
  title: string;
  summary: string;
}

export interface TechnicalDecision {
  title: string;
  reason: string;
}

export interface CaseStudyContent {
  slug: string;
  appId: "andrometrics" | "slotiva" | "preventivorapido";
  /** One-line positioning for the case study hero */
  positioning: string;
  problem: string;
  solution: string;
  /** Short caption under the architecture flow */
  architecture: string;
  /** Visual system architecture (top → bottom / left → right) */
  architectureFlow: string[];
  /** Optional user/business journey flow */
  journeyFlow?: string[];
  features: string[];
  featureGroups?: CaseStudyFeatureGroup[];
  /** High-level product map — used for Slotiva */
  ecosystem?: CaseStudyEcosystemLayer[];
  /** 3–6 key technical / product decisions */
  decisions: TechnicalDecision[];
  /** Product lifecycle timeline */
  productTimeline: string[];
  /** Production-quality signals */
  qualitySignals: string[];
  /** Where apt: realtime, cloud, security, etc. */
  capabilities: string[];
  challenges: string[];
  results: string[];
  trustSignals: string[];
  seoDescription: string;
}

const PRODUCT_TIMELINE = [
  "Idea",
  "Progettazione",
  "Sviluppo",
  "Testing",
  "Produzione",
  "Aggiornamenti",
] as const;

export const caseStudies: CaseStudyContent[] = [
  {
    slug: "slotiva",
    appId: "slotiva",
    positioning:
      "Un ecosistema completo per attività basate su appuntamenti: app iOS, gestionale web e backend cloud che lavorano come un unico prodotto.",
    problem:
      "Saloni, barbieri e studi professionali gestiscono ancora prenotazioni su WhatsApp, fogli e strumenti scollegati. Il risultato è prevedibile: sovrapposizioni, no-show, staff fuori sync, clienti senza storico e zero visione su fatturato e performance. Ogni strumento risolve un pezzo — nessuno governa l'attività per intero.",
    solution:
      "Slotiva unifica operations e crescita. I clienti prenotano da app, marketplace o pagina pubblica; i titolari gestiscono agenda, servizi, team e chat; il gestionale su slotiva.it offre CRM, Business Pulse e analytics. Tutto condivide Firebase in tempo reale: una modifica su un dispositivo è subito ovunque.",
    architecture:
      "Tre superfici, una fonte di verità — Firebase Hosting per il web, Cloud Functions e Firestore per sync e automazioni.",
    architectureFlow: [
      "Utente",
      "App iOS",
      "Firebase",
      "Cloud Functions",
      "Firestore",
      "Dashboard Web",
    ],
    journeyFlow: [
      "Cliente",
      "Prenotazione",
      "Realtime Sync",
      "Gestionale",
      "Notifiche",
      "Analytics",
    ],
    features: [],
    ecosystem: [
      {
        title: "App iOS",
        summary:
          "Esperienza native per clienti e titolari: prenotazioni, chat, CRM operativo, widget, profilo e companion Apple Watch.",
      },
      {
        title: "Gestionale web",
        summary:
          "CRM e operations su slotiva.it: Business Pulse, dashboard KPI, staff, servizi, marketplace e booking pubblico.",
      },
      {
        title: "Backend cloud",
        summary:
          "Firebase Auth, Firestore, Cloud Functions e FCM: sync realtime, notifiche e automazioni CRM leggere.",
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
          "Servizi e catalogo attività",
          "Chat business–cliente",
          "Notifiche push (FCM)",
          "Chiusura in sede e ricevuta digitale",
          "Dashboard e analytics operative",
          "Marketplace e discovery attività",
          "Autenticazione sicura",
          "Sincronizzazione realtime",
          "Widget iOS",
          "Companion Apple Watch",
          "Slotiva Pro con StoreKit 2",
        ],
      },
      {
        title: "Gestionale web — CRM & operations",
        description:
          "Il centro di controllo dell'attività: da desktop, tablet o mobile, senza perdere contesto.",
        items: [
          "Business Pulse: score, plan e next actions",
          "Dashboard completa con KPI",
          "Analytics e insight operativi",
          "CRM clienti con segmenti e recall",
          "Gestione staff e servizi",
          "Disponibilità e configurazione attività",
          "Pagine pubbliche di booking e profilo",
          "Marketplace web",
          "Responsive desktop, tablet e mobile",
        ],
      },
      {
        title: "Infrastruttura — Firebase & Hosting",
        description:
          "L'architettura che rende l'ecosistema affidabile, aggiornabile e pronto a crescere.",
        items: [
          "Firebase Authentication",
          "Cloud Firestore",
          "Cloud Functions",
          "Sincronizzazione realtime",
          "Push FCM e digest CRM",
          "React + TypeScript (export statico)",
          "Deploy su Firebase Hosting",
          "Insight operativi rule-based (Business Pulse)",
        ],
      },
    ],
    decisions: [
      {
        title: "Firebase per sync realtime",
        reason: "Agenda, chat e stato business allineati su ogni dispositivo.",
      },
      {
        title: "Cloud Functions per la logica server",
        reason: "Notifiche, regole di business e digest CRM fuori dal client.",
      },
      {
        title: "Firestore per scalabilità",
        reason: "Profili business e crescita senza redesign del data model.",
      },
      {
        title: "SwiftUI per UI nativa",
        reason: "Esperienza iOS fluida per clienti e titolari, con Watch e widget.",
      },
      {
        title: "React per il gestionale",
        reason: "Dashboard CRM professionale, responsive e aggiornabile.",
      },
      {
        title: "Firebase Hosting per il web",
        reason: "Export statico Next.js allineato allo stesso progetto Firebase.",
      },
    ],
    productTimeline: [...PRODUCT_TIMELINE],
    qualitySignals: [
      "In produzione",
      "Mantenuto e aggiornato",
      "Sync realtime",
      "Business Pulse",
      "Architettura cloud",
    ],
    capabilities: [
      "Realtime",
      "Cloud",
      "Sicurezza",
      "Responsive",
      "Performance",
      "Accessibilità",
    ],
    challenges: [
      "Prenotazioni concorrenti senza conflitti di slot",
      "Due esperienze distinte (cliente vs titolare) sulla stessa piattaforma",
      "Sync affidabile e a bassa latenza tra app, web e cloud",
      "Ruoli staff/titolare con dati isolati per business",
      "Notifiche e digest CRM affidabili sotto carico reale",
    ],
    results: [
      "App pubblicata su App Store",
      "Gestionale CRM live su slotiva.it (Firebase Hosting)",
      "Ecosistema end-to-end: prenotazioni, chat, CRM, Pulse e analytics nello stesso prodotto",
      "Architettura moderna per saloni, barbieri e studi basati su appuntamenti",
      "Un unico partner dalla progettazione al rilascio",
    ],
    trustSignals: [
      "App Store",
      "slotiva.it live",
      "Sync realtime",
      "End-to-end",
      "Business Pulse",
    ],
    seoDescription:
      "Case study Slotiva: ecosistema prenotazioni con app iOS, gestionale web CRM, Business Pulse, Firebase Hosting e sync realtime.",
  },
  {
    slug: "andrometrics",
    appId: "andrometrics",
    positioning:
      "Un'app medicale premium che traduce dati di fertilità e benessere maschile in insight chiari, protetti e utilizzabili ogni giorno.",
    problem:
      "Monitorare la fertilità maschile richiede continuità e chiarezza. Fogli, app generiche e referti sparsi non costruiscono un quadro clinico nel tempo: i dati restano frammentati, difficili da interpretare e poco utili per decisioni consapevoli.",
    solution:
      "AndroMetrics centralizza tracking, abitudini, farmaci e referti in un'unica esperienza iOS. Ogni giorno calcola uno score 0–100, mostra grafici evolutivi, AI Coach e report PDF. Local-first, HealthKit in lettura e privacy by design: qualità medicale senza complessità da laboratorio.",
    architecture:
      "Local-first su App Group, sync opzionale via iCloud KVS; Firebase solo per snapshot TTC di coppia. OCR on-device, AI Coach via proxy.",
    architectureFlow: [
      "Utente",
      "App iOS",
      "Tracking locale",
      "iCloud KVS",
      "Score & Grafici",
      "Report PDF",
    ],
    features: [
      "Tracking quotidiano di parametri e abitudini",
      "Score fertilità 0–100 immediato e leggibile",
      "Grafici, trend e statistiche nel tempo",
      "Import HealthKit (passi, sonno e metriche correlate)",
      "Registro farmaci e aderenza",
      "AI Coach con insight personalizzati",
      "Report PDF esportabili",
      "OCR Vision per digitalizzare i referti",
      "Modalità TTC di coppia (share locale + snapshot cloud opzionale)",
      "Widget iOS con score a portata",
      "Privacy by design: dati di tracking sul dispositivo",
      "Piano Premium con StoreKit 2",
    ],
    decisions: [
      {
        title: "SwiftUI per UI medicale",
        reason: "Chiarezza e fiducia in un contesto di salute sensibile.",
      },
      {
        title: "Local-first + iCloud KVS",
        reason: "Continuità tra dispositivi Apple senza caricare il tracking su un backend generico.",
      },
      {
        title: "Vision per i referti",
        reason: "OCR on-device: da documento cartaceo a dati strutturati, senza frizione.",
      },
      {
        title: "AI Coach via proxy API",
        reason: "Insight e chat premium con consenso esplicito, senza esporre il tracking grezzo.",
      },
      {
        title: "StoreKit 2 per Premium",
        reason: "Monetizzazione nativa, stabile e conforme alle policy Apple.",
      },
      {
        title: "Privacy by design",
        reason: "Sicurezza e discrezione come requisito di prodotto, non add-on.",
      },
    ],
    productTimeline: [...PRODUCT_TIMELINE],
    qualitySignals: [
      "Live su App Store",
      "Aggiornamenti continui",
      "Privacy first",
      "Local-first",
      "Prodotto in produzione",
    ],
    capabilities: ["Sicurezza", "Performance", "Accessibilità", "HealthKit"],
    challenges: [
      "Comunicare dati sensibili con linguaggio chiaro e rassicurante",
      "Restare local-first senza sacrificare continuità multi-dispositivo",
      "Trasformare referti eterogenei in dati strutturati con OCR",
      "Bilanciare profondità analitica, AI Coach e semplicità d'uso quotidiana",
    ],
    results: [
      "Valutazione 5.0 su App Store",
      "Recensioni verificate da utenti reali",
      "UX medicale riconosciuta per chiarezza e affidabilità",
      "Prodotto live con tracking, HealthKit, AI Coach, report e piano Premium",
    ],
    trustSignals: [
      "App Store 5.0",
      "Privacy first",
      "Local-first",
      "Report PDF",
      "Aggiornamenti continui",
    ],
    seoDescription:
      "Case study AndroMetrics: app iOS medicale per tracking fertilità maschile, score 0–100, HealthKit, AI Coach, report PDF e privacy local-first.",
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
      "Dal cantiere al documento firmato — un flusso corto, affidabile e sincronizzato sul cloud.",
    architectureFlow: [
      "Cliente",
      "App iOS",
      "Preventivo PDF",
      "Firma",
      "Sync Cloud",
      "Archivio",
    ],
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
    decisions: [
      {
        title: "SwiftUI per velocità sul campo",
        reason: "Interfaccia nativa, leggera e usabile tra un lavoro e l'altro.",
      },
      {
        title: "PDF come deliverable",
        reason: "Documento professionale che il cliente riconosce e conserva.",
      },
      {
        title: "Firma nel documento",
        reason: "Chiude il ciclo commerciale senza tool esterni.",
      },
      {
        title: "Sync cloud",
        reason: "Backup e continuità tra dispositivi per dati business critici.",
      },
      {
        title: "Sign in with Apple",
        reason: "Accesso sicuro e senza friction per professionisti.",
      },
    ],
    productTimeline: [...PRODUCT_TIMELINE],
    qualitySignals: [
      "Live su App Store",
      "Mantenuto",
      "Sync cloud",
      "Pronto per produzione",
    ],
    capabilities: ["Cloud", "Sicurezza", "Performance", "Responsive"],
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
