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

export interface CaseStudyVisualImage {
  src: string;
  alt: string;
  caption?: string;
  /** iphone/ipad → device frame; canvas → full marketing/story slide (no double frame) */
  device?: "iphone" | "ipad" | "canvas";
}

/** Narrative product visuals placed near the matching case-study story. */
export interface CaseStudyVisualSection {
  title: string;
  description?: string;
  layout?: "hero" | "pair" | "row";
  images: CaseStudyVisualImage[];
}

export interface CaseStudyContent {
  slug: string;
  appId:
    | "andrometrics"
    | "gynometrics"
    | "preventivorapido"
    | "cielostorie"
    | "familyplus";
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
  /**
   * Optional curated product screenshots told as a visual story.
   * When present, these replace the flat end-of-page gallery dump.
   */
  productVisuals?: CaseStudyVisualSection[];
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
      "Trovare un'esperienza di lettura per bambini che sia davvero child-first è difficile: troppe app sono rumorose, account-centric o poco adatte a un uso sereno in famiglia, con privacy fragile e senza una chiara Area Genitori protetta.",
    solution:
      "CieloStorie offre storie illustrate in un mondo da esplorare insieme: catalogo offline, profili bambino locali, preferiti, progresso di lettura, Il Mio Cielo e suoni contestuali durante la lettura. Interfaccia child-first, IT/EN, parental gate — local-first e privacy-oriented, gratuita al 100% e senza pubblicità, senza account.",
    architecture:
      "SwiftUI local-first: catalogo e progresso sul dispositivo, profili locali, parental gate.",
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
      "Parental gate per l'Area Genitori",
      "100% gratuita, senza pubblicità",
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
        title: "Parental gate per l'Area Genitori",
        reason: "Verifica aritmetica per l'accesso all'Area Genitori, distinta dai Parental Controls e dall'Age Assurance del questionario Age Rating di Apple.",
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
      "Un'esperienza child-first chiara con Area Genitori protetta da parental gate",
      "Catalogo illustrato e Reader fluidi offline sul dispositivo",
      "Profili e progresso locali coerenti in famiglia",
      "Esperienza child-first serena senza pubblicità in un prodotto per bambini",
    ],
    results: [
      "App live su App Store (iOS e iPadOS)",
      "Flussi famiglia: profili locali, preferiti, progresso e Il Mio Cielo",
      "Documentazione legale pubblica su Privacy, Termini e Supporto",
      "Esperienza di lettura illustrata end-to-end, gratuita e senza pubblicità",
    ],
    trustSignals: [
      "App Store",
      "Local-first",
      "Privacy oriented",
      "Parental gate",
      "iPhone + iPad",
      "IT / EN",
    ],
    seoDescription:
      "Case study CieloStorie: app iOS e iPadOS gratuita su App Store per storie illustrate per bambini, catalogo offline, profili locali, Il Mio Cielo e privacy local-first.",
  },
  {
    slug: "familyplus",
    appId: "familyplus",
    positioning:
      "Tutta la famiglia, in un posto. Un organizer per iPhone — caldo, minimale, local-first — per sapere cosa conta oggi e restare sincronizzati via iCloud.",
    problem:
      "La vita di famiglia si spezza tra chat, note e liste diverse. Quello che serve oggi — la spesa, l’impegno, il pasto, la ricorrenza — non ha un posto quieto in cui vivere insieme.",
    solution:
      "Family Plus è pensata per la famiglia, non per il produttività-teatro. Casa raccoglie la giornata; Calendario, Spesa e Attività la coordinano; La Famiglia e Io tengono le persone; Centro di controllo e La Storia restano discreti. Local-first su iPhone, condivisione Apple via CloudKit — senza account custom, senza abbonamenti.",
    architecture:
      "iPhone only · SwiftData local-first · CloudKit CKShare per La Famiglia · notifiche locali con programma sul dispositivo · AdMob + UMP, senza ATT.",
    architectureFlow: [
      "La Famiglia",
      "iPhone",
      "SwiftData locale",
      "CloudKit CKShare",
      "Centro di controllo",
      "Promemoria locali",
    ],
    ecosystem: [
      {
        title: "Family Home",
        summary:
          "Casa: lo snapshot della giornata — priorità, impegni e Tavola — così la famiglia sa dove guardare per prima.",
      },
      {
        title: "Family Table · Family Memory",
        summary:
          "Tavola e Memoria restano nella stessa casa digitale: pasti della settimana e documenti che contano, insieme alla vita quotidiana.",
      },
      {
        title: "The Family · Me · Control Center",
        summary:
          "La Famiglia, Io, e un Centro di controllo quieto — lingua, privacy, programma notifiche, Story.",
      },
    ],
    features: [
      "Casa — la giornata in un respiro",
      "Calendario e Attività — ritmo condiviso",
      "Spesa — lista viva e Conoscenza per aggiungere senza frizione",
      "Tavola — la settimana a tavola",
      "Memoria — documenti e carte di famiglia",
      "Compleanni e ricorrenze — le date che contano",
      "La Famiglia — inviti e condivisione iCloud",
      "Io e Centro di controllo — presenza, privacy, programma notifiche",
      "La Storia — perché esiste Family Plus",
      "iPhone only, verticale, gratis",
    ],
    featureGroups: [
      {
        title: "Perché esiste Family Home",
        description:
          "Non un dashboard: Casa — un solo posto in cui la giornata della famiglia diventa leggibile.",
        items: [
          "Cosa non perdere, cosa arriva dopo, cosa c’è in programma",
          "Spesa e attività a portata di sguardo",
          "Il tono della casa, non della produttività",
        ],
      },
      {
        title: "Calendario, Spesa, Attività, Knowledge",
        description:
          "Coordinare senza ricostruire ogni volta — e aggiungere alla Spesa con Conoscenza (Knowledge).",
        items: [
          "Calendario e Attività nello stesso spazio famiglia",
          "Spesa che riparte da dove eri rimasto",
          "Conoscenza: prodotti e sinonimi per trovare subito cosa serve",
        ],
      },
      {
        title: "Tavola, Memoria, ricorrenze",
        description:
          "Quello che resta nel tempo — Tavola, Memoria (documenti), compleanni e ricorrenze — senza uscire dall’app.",
        items: [
          "Tavola: la settimana a tavola",
          "Memoria: documenti e allegati di famiglia, senza banner",
          "Compleanni e ricorrenze: le date che contano",
        ],
      },
      {
        title: "Persone e controllo quieto",
        description:
          "The Family per condividere; Me per esserci; Centro di controllo per le preferenze sul dispositivo.",
        items: [
          "La Famiglia — organizzatore, membri, inviti CKShare",
          "Io — nome, presenza, porta al Centro di controllo",
          "Notification Schedule — orari e anticipi locali, non in CloudKit",
          "La Storia — valori e versione, senza rumore",
        ],
      },
    ],
    productVisuals: [
      {
        title: "Story — dove inizia Family Plus",
        description:
          "Il tono del prodotto: famiglia prima di tutto, in un unico posto.",
        layout: "hero",
        images: [
          {
            src: "/images/apps/familyplus/story-hero.jpg",
            alt: "Family Plus — Story (La Storia) su iPhone",
            caption: "Story",
            device: "canvas",
          },
        ],
      },
      {
        title: "Family Home",
        description:
          "Casa: la giornata della famiglia, raccolta con calma — priorità, impegni, Tavola.",
        layout: "hero",
        images: [
          {
            src: "/images/apps/familyplus/family-home.jpg",
            alt: "Family Plus — Family Home (Casa) su iPhone",
            caption: "Family Home",
            device: "canvas",
          },
        ],
      },
      {
        title: "Una giornata, insieme",
        description:
          "Calendario, Attività, Spesa, Tavola e Memoria — nello stesso spazio.",
        layout: "pair",
        images: [
          {
            src: "/images/apps/familyplus/story-day.jpg",
            alt: "Family Plus — onboarding giornata insieme su iPhone",
            caption: "Il ritmo",
            device: "canvas",
          },
          {
            src: "/images/apps/familyplus/calendar.jpg",
            alt: "Family Plus — Calendario su iPhone",
            caption: "Calendario",
            device: "canvas",
          },
        ],
      },
      {
        title: "Spesa e Attività",
        description: "Liste vive e cose da fare — senza ripartire da zero ogni volta.",
        layout: "pair",
        images: [
          {
            src: "/images/apps/familyplus/shopping.jpg",
            alt: "Family Plus — Spesa su iPhone",
            caption: "Spesa",
            device: "canvas",
          },
          {
            src: "/images/apps/familyplus/activities.jpg",
            alt: "Family Plus — Attività su iPhone",
            caption: "Attività",
            device: "canvas",
          },
        ],
      },
      {
        title: "Family Table · Compleanni e ricorrenze",
        description: "Tavola e le date che contano — nella stessa casa.",
        layout: "pair",
        images: [
          {
            src: "/images/apps/familyplus/family-table.jpg",
            alt: "Family Plus — Family Table (Tavola) su iPhone",
            caption: "Family Table",
            device: "canvas",
          },
          {
            src: "/images/apps/familyplus/family-memory.jpg",
            alt: "Family Plus — Compleanni e ricorrenze su iPhone",
            caption: "Compleanni e ricorrenze",
            device: "canvas",
          },
        ],
      },
      {
        title: "The Family · Family Memory",
        description:
          "La Famiglia e Memoria — persone e documenti, insieme.",
        layout: "pair",
        images: [
          {
            src: "/images/apps/familyplus/the-family.jpg",
            alt: "Family Plus — The Family (La Famiglia) su iPhone",
            caption: "The Family",
            device: "canvas",
          },
          {
            src: "/images/apps/familyplus/documents.jpg",
            alt: "Family Plus — Family Memory (Memoria) su iPhone",
            caption: "Family Memory",
            device: "canvas",
          },
        ],
      },
      {
        title: "Privacy e condivisione",
        description:
          "Local-first, iCloud quando serve, pubblicità separata dai contenuti di famiglia.",
        layout: "pair",
        images: [
          {
            src: "/images/apps/familyplus/story-share.jpg",
            alt: "Family Plus — storia sulla condivisione famiglia su iPhone",
            caption: "Condivisione",
            device: "canvas",
          },
          {
            src: "/images/apps/familyplus/story-privacy.jpg",
            alt: "Family Plus — storia sulla privacy su iPhone",
            caption: "Privacy",
            device: "canvas",
          },
        ],
      },
    ],
    decisions: [
      {
        title: "Local-first con SwiftData",
        reason:
          "Scrivere in locale ha priorità: la rete non decide se la famiglia può organizzarsi.",
      },
      {
        title: "CloudKit CKShare per The Family",
        reason:
          "Collaborazione Apple-native — senza account Family Plus, senza backend proprietario.",
      },
      {
        title: "iPhone only, portrait",
        reason:
          "Un’unica esperienza verticale, coerente e semplice da mantenere — solo iPhone.",
      },
      {
        title: "Centro di controllo e Notification Schedule",
        reason:
          "Preferenze quiete sul dispositivo: programma promemoria locale, non sincronizzato in CloudKit.",
      },
      {
        title: "Gratis con AdMob + UMP",
        reason:
          "Niente abbonamenti; consenso pubblicitario chiaro; contenuti di famiglia separati dagli annunci.",
      },
      {
        title: "Privacy senza ATT né analytics SDK",
        reason:
          "Niente tracking IDFA-oriented né SDK analytics: focus su organizer e famiglia.",
      },
    ],
    productTimeline: [...PRODUCT_TIMELINE],
    qualitySignals: [
      "Live su App Store",
      "iPhone only",
      "Local-first",
      "CloudKit CKShare",
      "IT / EN",
      "Gratuita",
    ],
    capabilities: ["CloudKit", "Privacy", "Performance", "Accessibilità"],
    challenges: [
      "Collaborazione famiglia affidabile con CKShare senza backend proprietario",
      "Coerenza local-first quando iCloud non è disponibile",
      "Un tono famigliare su più superfici, senza dashboard rumorose",
      "Promemoria locali utili, con programma personalizzabile sul dispositivo",
    ],
    results: [
      "App per iPhone: Casa, Tavola, Memoria, La Famiglia, Io, Centro di controllo",
      "Condivisione La Famiglia end-to-end via CKShare",
      "Legal pubblico: Privacy, Termini, Supporto, Eliminazione dati",
      "Prodotto gratuito local-first — senza account custom né analytics SDK",
    ],
    trustSignals: [
      "App Store",
      "Local-first",
      "iPhone only",
      "CloudKit",
      "IT / EN",
      "Gratis",
    ],
    seoDescription:
      "Family Plus per iPhone: organizer famiglia local-first con Family Home (Casa), Spesa, Calendario, The Family (La Famiglia) e Centro di controllo. CloudKit CKShare, gratis, privacy-first.",
  },
  {
    slug: "gynometrics",
    appId: "gynometrics",
    positioning:
      "Un companion medicale premium che traduce ciclo, fertilità, gravidanza e postpartum in insight chiari, protetti e utilizzabili ogni giorno — sibling femminile di AndroMetrics.",
    problem:
      "Il percorso riproduttivo femminile frammenta dati tra ciclo, referti, gravidanza, postpartum e comunicazione di coppia. App generiche e fogli sparsi non costruiscono un quadro continuo, privacy-first e clinicamente leggibile.",
    solution:
      "GynoMetrics centralizza ciclo, log, score, AI Coach, OCR/PDF, gravidanza, postpartum e Partner Snapshot in un’unica esperienza iOS MedicalUI. Local-first, HealthKit in lettura, CoupleSpace via CloudKit e privacy by design — ecosystem medicale coerente, senza complessità da laboratorio.",
    architecture:
      "Local-first su dispositivo; CoupleSpace CloudKit per snapshot partner; OCR on-device; AI Coach via proxy con consenso; nessun Firebase di tracking quotidiano.",
    architectureFlow: [
      "Utente",
      "App iOS",
      "Tracking locale",
      "CloudKit CoupleSpace",
      "Score & Report",
      "PDF / OCR",
    ],
    features: [
      "Tracking ciclo e log quotidiano",
      "Score e insight riproduttivi leggibili",
      "AI Coach con consenso esplicito",
      "OCR Vision per digitalizzare i referti",
      "Report e export PDF",
      "Moduli gravidanza e postpartum",
      "Partner Snapshot / CoupleSpace (CloudKit)",
      "Privacy first: dati di tracking sul dispositivo",
      "Ecosystem medicale allineato ad AndroMetrics",
      "HealthKit in sola lettura (opzionale)",
    ],
    decisions: [
      {
        title: "SwiftUI + MedicalUI light",
        reason: "Chiarezza e fiducia in un contesto di salute sensibile, coerente con AndroMetrics.",
      },
      {
        title: "Local-first + CloudKit CoupleSpace",
        reason: "Continuità di coppia senza caricare il tracking grezzo su un backend generico.",
      },
      {
        title: "Vision per i referti",
        reason: "OCR on-device: da documento a dati strutturati, senza frizione.",
      },
      {
        title: "AI Coach via proxy API",
        reason: "Insight con consenso esplicito; lab images e dati partner privati esclusi di default.",
      },
      {
        title: "Privacy by design",
        reason: "Sicurezza e discrezione come requisito di prodotto, non add-on.",
      },
    ],
    productTimeline: [...PRODUCT_TIMELINE],
    qualitySignals: [
      "In development",
      "Privacy first",
      "Local-first",
      "Medical ecosystem",
      "CoupleSpace CloudKit",
    ],
    capabilities: ["Sicurezza", "Privacy", "HealthKit", "CloudKit", "Accessibilità"],
    challenges: [
      "Comunicare dati riproduttivi con linguaggio chiaro e non alarmista",
      "Restare local-first con condivisione partner affidabile",
      "Unificare ciclo, gravidanza e postpartum senza sovraccaricare l’UX",
      "Allineare OCR, AI Coach e report a standard medicali di chiarezza",
    ],
    results: [
      "Case study e documentazione legale pubblici sul sito ufficiale",
      "Architettura privacy-first allineata all’ecosystem AndroMetrics",
      "CoupleSpace CloudKit per Partner Snapshot senza Firebase di tracking",
      "Prodotto in development con roadmap ciclo → gravidanza → postpartum",
    ],
    trustSignals: [
      "In development",
      "Privacy first",
      "Local-first",
      "Medical disclaimer",
      "Nessun tracking ads",
    ],
    seoDescription:
      "Case study GynoMetrics: app iOS medicale per fertilità femminile, ciclo, gravidanza, postpartum, AI Coach, OCR, PDF e CoupleSpace privacy-first.",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs() {
  return caseStudies.map((study) => study.slug);
}
