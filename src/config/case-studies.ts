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
  /**
   * product → App Store–style product page (visuals first, editorial voice).
   * Default / omitted → engineering case-study narrative.
   */
  presentation?: "product" | "case-study";
  /** Optional Open Graph / Twitter image path (site-relative). */
  ogImage?: string;
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
    presentation: "product",
    ogImage: "/images/apps/familyplus/brand-poster.jpg",
    positioning:
      "La vita di famiglia merita un posto solo. Non un’altra app di produttività — uno spazio caldo dove Casa, Tavola, Memoria e La Famiglia vivono insieme.",
    problem:
      "Chat, note e liste sparse. L’impegno di oggi, la Spesa, la Tavola, un documento — tutto importante, niente di quieto. La famiglia finisce dispersa in troppi posti.",
    solution:
      "Family Plus è pensata per iPhone: local-first, condivisa via iCloud quando serve. Scrivi subito. Invita La Famiglia. Niente account custom. Niente abbonamenti. Solo la casa digitale della famiglia.",
    architecture:
      "Pensata per iPhone · SwiftData local-first · CloudKit CKShare per La Famiglia · Notification Schedule sul dispositivo · AdMob + UMP, senza ATT.",
    architectureFlow: [
      "Casa",
      "SwiftData locale",
      "La Famiglia",
      "CloudKit CKShare",
      "Centro di controllo",
      "Notification Schedule",
    ],
    ecosystem: [
      {
        title: "Il ritmo",
        summary:
          "Casa apre la giornata. Tavola, Calendario, Spesa e Attività la accompagnano — senza ricostruire tutto ogni volta.",
      },
      {
        title: "Ciò che resta",
        summary:
          "Memoria e La Famiglia: documenti e persone nello stesso spazio, con la calma di casa.",
      },
      {
        title: "Il controllo quieto",
        summary:
          "Io, Centro di controllo e La Storia. Preferenze sul dispositivo, Notification Schedule locale, privacy come prodotto.",
      },
    ],
    features: [
      "Casa — la giornata, a colpo d’occhio",
      "Tavola — la settimana a tavola",
      "Memoria — documenti di famiglia",
      "La Famiglia — persone e condivisione iCloud",
      "Spesa, Calendario, Attività — il ritmo quotidiano",
      "Io e Centro di controllo — preferenze e Notification Schedule",
      "La Storia — perché esiste Family Plus",
    ],
    featureGroups: [
      {
        title: "Un posto solo",
        description:
          "Non una checklist infinita. Un tono di casa: sapere cosa conta, senza rumore. Spesa, impegni e Tavola nello stesso respiro — meno app aperte, più tempo insieme.",
        items: [],
      },
      {
        title: "Persone prima degli strumenti",
        description:
          "La Famiglia e Io tengono le persone al centro. Centro di controllo resta discreto: lingua, privacy e Notification Schedule sul dispositivo — non un altro servizio da gestire.",
        items: [],
      },
      {
        title: "Privacy come prodotto",
        description:
          "I contenuti di famiglia restano tuoi. Local-first su SwiftData. CloudKit solo per condividere La Famiglia. Pubblicità separata, senza ATT. Legal chiaro: Privacy, Termini, Supporto, Eliminazione dati.",
        items: [],
      },
    ],
    productVisuals: [
      {
        title: "Casa",
        description:
          "Family Home: la giornata della famiglia, a colpo d’occhio.",
        layout: "hero",
        images: [
          {
            src: "/images/apps/familyplus/appstore/01-casa.jpg",
            alt: "Family Plus — Casa (Family Home) su iPhone",
            caption: "Casa",
            device: "canvas",
          },
        ],
      },
      {
        title: "Tavola",
        description:
          "Family Table: cosa mangiamo questa settimana — pianificato in pochi secondi, condiviso con chi serve.",
        layout: "hero",
        images: [
          {
            src: "/images/apps/familyplus/appstore/02-tavola.jpg",
            alt: "Family Plus — Tavola (Family Table) su iPhone",
            caption: "Tavola",
            device: "canvas",
          },
        ],
      },
      {
        title: "Memoria",
        description:
          "Family Memory: i documenti e le carte che contano — sempre con voi, nello stesso posto.",
        layout: "hero",
        images: [
          {
            src: "/images/apps/familyplus/appstore/03-memoria.jpg",
            alt: "Family Plus — Memoria (Family Memory) su iPhone",
            caption: "Memoria",
            device: "canvas",
          },
        ],
      },
      {
        title: "Io",
        description:
          "Me: il tuo posto in famiglia — nome, ritratto, la tua presenza nella casa digitale.",
        layout: "hero",
        images: [
          {
            src: "/images/apps/familyplus/appstore/04-me.jpg",
            alt: "Family Plus — Io (Me) su iPhone",
            caption: "Io",
            device: "canvas",
          },
        ],
      },
      {
        title: "Centro di controllo",
        description:
          "Control Center: preferenze quiete sul dispositivo — privacy, lingua, promemoria.",
        layout: "hero",
        images: [
          {
            src: "/images/apps/familyplus/appstore/05-control-center.jpg",
            alt: "Family Plus — Centro di controllo (Control Center) su iPhone",
            caption: "Centro di controllo",
            device: "canvas",
          },
        ],
      },
      {
        title: "Notifiche",
        description:
          "Cosa ricorda questo dispositivo — orari e categorie locali, non in CloudKit.",
        layout: "hero",
        images: [
          {
            src: "/images/apps/familyplus/appstore/06-notifiche.jpg",
            alt: "Family Plus — Notifiche su iPhone",
            caption: "Notifiche",
            device: "canvas",
          },
        ],
      },
      {
        title: "La Storia",
        description:
          "Story: il perché di Family Plus — caldo, essenziale, senza rumore.",
        layout: "hero",
        images: [
          {
            src: "/images/apps/familyplus/appstore/07-story.jpg",
            alt: "Family Plus — La Storia (Story) su iPhone",
            caption: "La Storia",
            device: "canvas",
          },
        ],
      },
    ],
    decisions: [
      {
        title: "Local-first con SwiftData",
        reason:
          "La rete non decide se la famiglia può organizzarsi. Scrivere funziona subito.",
      },
      {
        title: "CloudKit CKShare per La Famiglia",
        reason:
          "Condivisione Apple-native — senza account Family Plus, senza backend proprietario.",
      },
      {
        title: "Pensata per iPhone, portrait",
        reason:
          "Un’unica esperienza verticale, calda e coerente. Il listing resta Universal per continuità App Store.",
      },
      {
        title: "Centro di controllo e Notification Schedule",
        reason:
          "Preferenze quiete sul dispositivo: orari e anticipi locali, non in CloudKit.",
      },
      {
        title: "Gratis con AdMob + UMP",
        reason:
          "Niente abbonamenti. Consenso chiaro. Contenuti di famiglia separati dagli annunci.",
      },
      {
        title: "Privacy senza ATT",
        reason:
          "Niente tracking IDFA-oriented: focus su organizer e famiglia.",
      },
    ],
    productTimeline: [...PRODUCT_TIMELINE],
    qualitySignals: [
      "Live su App Store",
      "v1.1.2",
      "Pensata per iPhone",
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
      "Promemoria locali utili, con Notification Schedule sul dispositivo",
    ],
    results: [
      "v1.1.2 in produzione: glossario ufficiale, Design System V2, localizzazione certificata",
      "Galleria App Store ufficiale: hero Campaign + Tavola, Memoria, La Famiglia, Spesa, Calendario, Attività, Storia",
      "Legal pubblico allineato: Privacy, Termini, Supporto, Eliminazione dati",
      "Prodotto gratuito local-first — senza account custom né analytics SDK",
    ],
    trustSignals: [
      "App Store",
      "v1.1.2",
      "Local-first",
      "Pensata per iPhone",
      "CloudKit",
      "IT / EN",
      "Gratis",
    ],
    seoDescription:
      "Family Plus v1.1.2 su App Store: organizer famiglia pensato per iPhone. Casa, Tavola, Memoria, La Famiglia — local-first, CloudKit, gratis, privacy-first.",
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
