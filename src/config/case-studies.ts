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
  device?: "iphone" | "ipad";
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
      "Tutta la famiglia, in un posto: un organizer per iPhone gratuito per coordinare il quotidiano — calendario, spesa, attività e informazioni familiari — con collaborazione via iCloud.",
    problem:
      "Coordinare una famiglia su più dispositivi spezza le informazioni: liste della spesa, eventi, compiti, pasti e documenti finiscono in chat, note e fogli diversi. Le app cloud-first chiedono account, sync opachi e spesso analytics; quelle solo locali non scalano quando serve collaborare.",
    solution:
      "Family Plus unisce Today, Calendario, Spesa, Attività e Altro (Famiglia, Me, Centro di controllo, Pasti, Ricorrenze, Documenti) in un'unica app SwiftUI per iPhone. Local-first con SwiftData; collaborazione famiglia tramite CloudKit CKShare sul container iCloud.app.familyplus.FamilyPlus. Gratuita con AdMob (banner e interstitial) e consenso UMP — senza ATT, senza Sign in with Apple, senza backend custom e senza SDK di analytics.",
    architecture:
      "SwiftData local-first; sync e condivisione famiglia via CloudKit CKShare (iCloud.app.familyplus.FamilyPlus); notifiche collaborative e silent push CloudKit.",
    architectureFlow: [
      "Famiglia",
      "App iPhone (iOS)",
      "SwiftData locale",
      "CloudKit CKShare",
      "Moduli organizer",
      "Notifiche collaborative",
    ],
    features: [
      "Schede Today, Calendario, Spesa, Attività e Altro",
      "Famiglia, Me, Centro di controllo, Pasti, Ricorrenze e Documenti in Altro",
      "Local-first con SwiftData sul dispositivo",
      "Spazi famiglia con CloudKit CKShare (iCloud.app.familyplus.FamilyPlus)",
      "Esperienza iPhone in orientamento verticale",
      "Storico delle uscite spesa",
      "Notifiche locali con programma personalizzabile sul dispositivo",
      "Interfaccia in italiano e inglese",
      "Gratuita con AdMob (banner e interstitial) e consenso UMP",
      "Nessun ATT, nessun Sign in with Apple, nessun backend custom",
    ],
    featureGroups: [
      {
        title: "Organizza la famiglia",
        description: "Oggi, calendario e attività in un unico ritmo quotidiano.",
        items: [
          "Today con priorità, eventi e pasti del giorno",
          "Calendario famiglia condiviso",
          "Attività con scadenze e priorità",
        ],
      },
      {
        title: "Spesa che riparte da dove eri rimasto",
        description: "Liste vive e storico delle uscite, senza ricostruire ogni volta.",
        items: [
          "Lista spesa con progresso chiaro",
          "Riutilizzo dell’ultima spesa",
          "Storico delle uscite completate",
        ],
      },
      {
        title: "Vita quotidiana in Altro",
        description: "Pasti, ricorrenze e documenti restano nella stessa app.",
        items: [
          "Pianificazione pasti della settimana",
          "Compleanni e ricorrenze",
          "Documenti di famiglia a portata di mano",
        ],
      },
    ],
    productVisuals: [
      {
        title: "Tutta la famiglia, in un posto",
        description:
          "Today raccoglie priorità, impegni e pasti del giorno — lo snapshot quotidiano della famiglia.",
        layout: "hero",
        images: [
          {
            src: "/images/apps/familyplus/today.webp",
            alt: "Family Plus — Today su iPhone con priorità, eventi e pasti del giorno",
            caption: "Today",
            device: "iphone",
          },
        ],
      },
      {
        title: "Organizza la famiglia",
        description: "Calendario e attività condividono lo stesso spazio famiglia.",
        layout: "pair",
        images: [
          {
            src: "/images/apps/familyplus/calendar.webp",
            alt: "Family Plus — Calendario famiglia su iPhone",
            caption: "Calendario",
            device: "iphone",
          },
          {
            src: "/images/apps/familyplus/tasks.webp",
            alt: "Family Plus — Attività e cose da fare su iPhone",
            caption: "Attività",
            device: "iphone",
          },
        ],
      },
      {
        title: "La spesa, senza ripartire da zero",
        description: "Lista attiva, riutilizzo e storico delle uscite.",
        layout: "pair",
        images: [
          {
            src: "/images/apps/familyplus/shopping.webp",
            alt: "Family Plus — Lista spesa settimanale su iPhone",
            caption: "Spesa",
            device: "iphone",
          },
          {
            src: "/images/apps/familyplus/shopping-history.webp",
            alt: "Family Plus — Storico spese completate su iPhone",
            caption: "Storico spese",
            device: "iphone",
          },
        ],
      },
      {
        title: "Vita quotidiana",
        description: "Pasti e ricorrenze restano nel perimetro famiglia.",
        layout: "pair",
        images: [
          {
            src: "/images/apps/familyplus/meals.webp",
            alt: "Family Plus — Pianificazione pasti su iPhone",
            caption: "Pasti",
            device: "iphone",
          },
          {
            src: "/images/apps/familyplus/occasions.webp",
            alt: "Family Plus — Compleanni e ricorrenze su iPhone",
            caption: "Ricorrenze",
            device: "iphone",
          },
        ],
      },
      {
        title: "Documenti di famiglia",
        description:
          "Archivio famiglia con allegati, nello stesso spazio delle altre attività quotidiane.",
        layout: "hero",
        images: [
          {
            src: "/images/apps/familyplus/documents.webp",
            alt: "Family Plus — Documenti di famiglia su iPhone",
            caption: "Documenti",
            device: "iphone",
          },
        ],
      },
    ],
    decisions: [
      {
        title: "Local-first con SwiftData",
        reason: "Le modifiche restano subito sul dispositivo; la rete non è un prerequisito per usare l'app.",
      },
      {
        title: "CloudKit CKShare per la famiglia",
        reason: "Collaborazione Apple-native sul container iCloud.app.familyplus.FamilyPlus, senza account o API proprietarie.",
      },
      {
        title: "Nessun backend custom",
        reason: "Meno superficie operativa e di privacy: sync e share restano nel perimetro iCloud/CloudKit.",
      },
      {
        title: "iPhone only, portrait",
        reason: "Focus su un’unica esperienza iPhone verticale, coerente e semplice da mantenere.",
      },
      {
        title: "Monetizzazione AdMob + UMP",
        reason: "Prodotto gratuito con banner e interstitial a frequenza limitata; consenso pubblicitario gestito con UMP (rewarded non esposto all'utente).",
      },
      {
        title: "Privacy senza ATT né analytics SDK",
        reason: "Niente tracking IDFA-oriented né SDK analytics di terze parti: focus su organizer e condivisione famiglia.",
      },
    ],
    productTimeline: [...PRODUCT_TIMELINE],
    qualitySignals: [
      "Live su App Store",
      "iPhone",
      "Local-first",
      "CloudKit CKShare",
      "IT / EN",
      "Gratuita",
    ],
    capabilities: ["CloudKit", "Privacy", "Performance", "Accessibilità"],
    challenges: [
      "Collaborazione famiglia affidabile con CKShare senza backend proprietario",
      "Coerenza local-first quando iCloud o la rete non sono disponibili",
      "Organizer multi-modulo (spesa, calendario, attività, pasti, documenti) con UX chiara",
      "Notifiche locali e collaborative coerenti tra partecipanti",
    ],
    results: [
      "App live su App Store per iPhone",
      "Flusso famiglia end-to-end: spazio, invito CKShare, sync e moduli condivisi",
      "Documentazione legale pubblica (Privacy, Termini, Supporto, Eliminazione dati)",
      "Prodotto gratuito local-first, senza account custom né analytics SDK",
    ],
    trustSignals: [
      "App Store",
      "Local-first",
      "CloudKit CKShare",
      "Nessun backend custom",
      "IT / EN",
      "iPhone",
    ],
    seoDescription:
      "Case study Family Plus: organizer famiglia per iPhone live su App Store, local-first con SwiftData e CloudKit CKShare, spesa, calendario, attività e privacy senza backend custom.",
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
