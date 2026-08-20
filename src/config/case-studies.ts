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
  appId: "andrometrics" | "preventivorapido" | "cielostorie";
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
  /** High-level product map */
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
      "Firma cliente integrata nel documento",
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
      "Firma cliente",
      "Sync cloud",
    ],
    seoDescription:
      "Case study PreventivoRapido PRO: app iOS per preventivi PDF rapidi, firma cliente e produttività professionale.",
  },
  {
    slug: "cielostorie",
    appId: "cielostorie",
    positioning:
      "Un'app iOS e iPadOS che rende la lettura illustrata per bambini semplice, magica e sicura — pensata per tutta la famiglia.",
    problem:
      "Trovare un'esperienza di lettura per bambini che sia davvero child-first è difficile: troppe app sono rumorose, account-centric o poco adatte a un uso sereno in famiglia, con privacy e controllo genitoriale fragili.",
    solution:
      "CieloStorie offre storie illustrate in un mondo da esplorare insieme: catalogo offline, profili bambino locali, preferiti, progresso di lettura, Il Mio Cielo e suoni contestuali durante la lettura. Interfaccia child-first, IT/EN, parental gate e acquisto in-app Rimuovi pubblicità — local-first e privacy-oriented, senza account.",
    architecture:
      "SwiftUI local-first: catalogo e progresso sul dispositivo, profili locali, parental gate, StoreKit per Rimuovi pubblicità.",
    architectureFlow: [
      "Famiglia",
      "App iOS / iPadOS",
      "Catalogo locale",
      "Profili bambino",
      "Reader + suoni",
      "Il Mio Cielo",
    ],
    features: [
      "Esperienza child-first su iPhone e iPad",
      "Storie illustrate da esplorare e leggere",
      "Catalogo offline sul dispositivo",
      "Profili bambino locali",
      "Preferiti e progresso di lettura",
      "Il Mio Cielo",
      "Suoni contestuali durante la lettura",
      "Interfaccia in italiano e inglese",
      "Parental gate per l'area genitori",
      "Rimuovi pubblicità con acquisto in-app",
      "Approccio privacy-oriented e local-first",
    ],
    decisions: [
      {
        title: "Child-first su iPhone e iPad",
        reason: "Un'interfaccia pensata per i bambini, con layout e gerarchia chiari su ogni dispositivo.",
      },
      {
        title: "Catalogo e dati locali",
        reason: "Lettura e progresso restano sul dispositivo, senza account o sync cloud.",
      },
      {
        title: "Profili bambino locali",
        reason: "Ogni bambino ha il proprio spazio in famiglia, senza login.",
      },
      {
        title: "Suoni contestuali in lettura",
        reason: "Atmosfera immersiva legata alla storia, senza TTS o narratore vocale.",
      },
      {
        title: "Parental gate + Rimuovi pubblicità",
        reason: "Controllo genitoriale e monetizzazione chiara, conforme a un prodotto familiare.",
      },
      {
        title: "Privacy by design",
        reason: "Local-first come requisito di prodotto per un'app usata dai bambini.",
      },
    ],
    productTimeline: [...PRODUCT_TIMELINE],
    qualitySignals: [
      "iPhone e iPad",
      "Child-first",
      "Local-first",
      "Privacy oriented",
      "IT / EN",
    ],
    capabilities: ["Accessibilità", "Performance", "Privacy", "iPadOS"],
    challenges: [
      "Un'esperienza child-first chiara senza sacrificare il controllo genitoriale",
      "Catalogo illustrato e Reader fluidi offline sul dispositivo",
      "Profili e progresso locali coerenti in famiglia",
      "Monetizzazione pubblicitaria e Remove Ads rispettosa del contesto familiare",
    ],
    results: [
      "Prodotto iOS e iPadOS con esperienza di lettura illustrata end-to-end",
      "Flussi famiglia: profili locali, preferiti, progresso e Il Mio Cielo",
      "Documentazione legale pubblica su Privacy, Termini e Supporto",
      "Architettura local-first pronta per la pubblicazione su App Store",
    ],
    trustSignals: [
      "Local-first",
      "Privacy oriented",
      "Parental gate",
      "iPhone + iPad",
      "IT / EN",
    ],
    seoDescription:
      "Case study CieloStorie: app iOS e iPadOS per storie illustrate per bambini, catalogo offline, profili locali, Il Mio Cielo e privacy local-first.",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs() {
  return caseStudies.map((study) => study.slug);
}
