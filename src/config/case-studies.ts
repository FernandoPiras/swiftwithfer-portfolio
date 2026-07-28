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
      "AI-powered Business Brain per attività di servizi: ecosistema enterprise con marketplace consumer (app iOS + www.slotiva.it) e Business Portal (business.slotiva.it) — CRM, agenda, analytics e automazioni su un’unica piattaforma.",
    problem:
      "Le attività locali basate su appuntamenti gestiscono ancora prenotazioni, clienti e staff su WhatsApp, fogli e tool scollegati. Mancano priorità chiare, storico clienti, sync tra team e una visione unica su cosa fare oggi per far crescere il business.",
    solution:
      "Slotiva non è “solo un’app di booking”. I clienti scoprono e prenotano da app iOS e marketplace (www.slotiva.it); i titolari e lo staff operano dal Business Portal (business.slotiva.it) con Business Brain, Pulse, Score, CRM, agenda, richieste, team e crescita. Stessi dati Firebase in tempo reale. Qualità enterprise, superfici separate.",
    architecture:
      "Tre superfici, una fonte di verità: app iOS Consumer (SwiftUI), marketplace consumer e Business Portal (Next.js) condividono Auth, Firestore, Cloud Functions, Storage e FCM. Business Brain sul portale ordina priorità e opportunità sulla giornata reale.",
    architectureFlow: [
      "Cliente / Titolare",
      "App iOS",
      "Firebase",
      "Cloud Functions",
      "Firestore",
      "Business Portal",
    ],
    journeyFlow: [
      "Marketplace",
      "Prenotazione",
      "Realtime Sync",
      "Business Brain",
      "CRM & Agenda",
      "Notifiche",
    ],
    features: [],
    ecosystem: [
      {
        title: "App iOS (Consumer)",
        summary:
          "Esperienza App Store nativa per i clienti: Home, Explore, dettaglio attività, prenotazione, preferiti, appuntamenti, chat e profilo — allineata a www.slotiva.it.",
      },
      {
        title: "Marketplace consumer",
        summary:
          "www.slotiva.it: trova e prenota attività locali, profili pubblici e booking online senza frammentare i canali.",
      },
      {
        title: "Business Portal",
        summary:
          "business.slotiva.it: Business Brain, CRM, calendario, richieste, team, servizi e analytics — il centro di controllo dell’attività.",
      },
      {
        title: "Backend cloud",
        summary:
          "Firebase Auth, Firestore, Cloud Functions, Storage e FCM: sync realtime, sicurezza, automazioni e notifiche end-to-end.",
      },
    ],
    featureGroups: [
      {
        title: "Business Brain & crescita",
        description:
          "Non solo dati: priorità, richiami e azioni consigliate sulla giornata reale dell’attività.",
        items: [
          "Business Brain: giornata già in ordine",
          "Score, priorità e opportunità recuperabili",
          "Analytics e insight operativi",
          "Automazioni e richiami clienti",
          "Dashboard business unificata",
        ],
      },
      {
        title: "Operations & CRM",
        description:
          "Gestire clienti, staff e agenda come un unico sistema — non come tool separati.",
        items: [
          "CRM evoluto con Health Score e segmenti",
          "Calendario intelligente giorno / settimana",
          "Gestione staff, ruoli e disponibilità",
          "Gestione servizi e catalogo",
          "Richieste clienti e flusso operativo",
          "Sistema notifiche (push / FCM)",
        ],
      },
      {
        title: "Esperienza cliente & marketplace",
        description:
          "Prenotare e tornare deve essere semplice — su app e sul web, con gli stessi dati del business.",
        items: [
          "Prenotazioni online in tempo reale",
          "Marketplace e profili pubblici",
          "App iOS dedicata ai clienti",
          "Esperienza sincronizzata iOS ↔ Web",
        ],
      },
      {
        title: "Piattaforma & infrastruttura",
        description:
          "Architettura pensata per scalare: mobile, web e cloud sullo stesso modello dati.",
        items: [
          "Firebase Cloud Backend",
          "Realtime Sync (Firestore)",
          "Authentication e sicurezza",
          "Cloud Functions & Storage",
          "Business Portal responsive (Next.js)",
          "Deep Links e Push Notifications",
        ],
      },
    ],
    decisions: [
      {
        title: "Una piattaforma, tre superfici",
        reason:
          "App iOS, marketplace e Business Portal condividono lo stesso backend — zero silos tra cliente e titolare.",
      },
      {
        title: "Firebase per sync realtime",
        reason:
          "Agenda, CRM, richieste e stato business allineati su ogni dispositivo in tempo reale.",
      },
      {
        title: "Cloud Functions per la logica server",
        reason:
          "Notifiche, regole di business e automazioni restano fuori dal client, sicure e aggiornabili.",
      },
      {
        title: "SwiftUI per l’esperienza iOS",
        reason:
          "UX nativa fluida per clienti e titolari, con widget e deep link verso il prodotto.",
      },
      {
        title: "Next.js per il Business Portal",
        reason:
          "Portale web professionale, responsive e deployabile su Vercel, allineato al brand Slotiva Business.",
      },
      {
        title: "Business Brain come prodotto, non come report",
        reason:
          "Score e priorità devono guidare l’azione quotidiana — non restare metriche decorative.",
      },
    ],
    productTimeline: [...PRODUCT_TIMELINE],
    qualitySignals: [
      "In produzione",
      "App Store + Web",
      "Sync realtime",
      "Business Brain",
      "Prova 30 giorni",
    ],
    capabilities: [
      "Realtime",
      "Cloud",
      "Sicurezza",
      "Responsive",
      "Performance",
      "Scalabilità",
    ],
    challenges: [
      "Prenotazioni concorrenti senza conflitti di slot",
      "Esperienze distinte (cliente, titolare, staff) sulla stessa piattaforma",
      "Sync affidabile tra app iOS, marketplace e Business Portal",
      "Ruoli e isolamento dati per business multi-utente",
      "Business Brain utile fin dai primi dati, senza rumore",
    ],
    results: [
      "App iOS pubblicata su App Store",
      "Marketplace consumer live su www.slotiva.it",
      "Business Portal live su business.slotiva.it",
      "Business Brain + CRM + agenda + marketplace in un’unica piattaforma",
      "Prova gratuita 30 giorni per i titolari",
    ],
    trustSignals: [
      "App Store",
      "slotiva.it",
      "business.slotiva.it",
      "Sync realtime",
      "Business Brain",
    ],
    seoDescription:
      "Slotiva: Business Brain per saloni, barbieri e centri estetici. Gestionale con prenotazioni, CRM, marketplace e priorità operative. Richiedi una demo.",
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
