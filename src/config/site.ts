export type ProjectStatus = "published" | "beta" | "in-development";

export interface SocialLink {
  name: string;
  url: string;
  icon: "instagram" | "appstore" | "email";
}

export interface AppReview {
  author: string;
  rating: number;
  title: string;
  body: string;
  date: string;
}

export interface AppStoreRating {
  average: number;
  count: number;
}

export interface AppProject {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  screenshots: string[];
  technologies: string[];
  appStoreUrl?: string;
  githubUrl?: string;
  websiteUrl?: string;
  status: ProjectStatus;
  featured?: boolean;
  outcomes?: string[];
  architecture?: string;
  appStoreRating?: AppStoreRating;
  reviews?: AppReview[];
  demoVideo?: {
    src: string;
    poster?: string;
    title: string;
  };
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface Technology {
  name: string;
  slug: string;
}

export const siteConfig = {
  name: "Fernando Piras",
  brand: "SwiftWithFer",
  logo: {
    full: "/images/brand/logo.png",
    alt: "SwiftWithFer — iOS Developer",
  },
  role: "Sviluppatore iOS & Software",
  tagline:
    "Progetto e rilascio app, gestionali e CRM che fanno crescere il business — non prototipi da museo.",
  email: "fernando@fernandopiras.com",
  portfolioUrl: "https://fernandopiras.com",
  locale: "it_IT",
  hero: {
    headline: "Software che genera risultati, non solo codice.",
    subhead:
      "App iOS, gestionali web e CRM end-to-end — dal problema del cliente al prodotto live su App Store e in produzione.",
  },
  photo: {
    hero: "/images/profile/fernando.jpg",
    bio: "/images/profile/fernando-bio.png",
    alt: "Fernando Piras — Sviluppatore iOS e Software",
  },
  bio: {
    short:
      "Aiuto aziende e professionisti a trasformare un'esigenza operativa in un prodotto digitale affidabile, usabile e pronto per il mercato.",
    full: "Lavoro end-to-end: discovery, design, sviluppo, test e rilascio. Ogni decisione serve a ridurre rischi, accelerare il time-to-value e mantenere uno standard di qualità percepibile anche da chi non legge il codice.",
    journey:
      "Dal primo prodotto SwiftUI a piattaforme complete (app + CRM + cloud). Oggi i prodotti live coprono salute, produttività e gestione servizi.",
    philosophy:
      "Il software migliore non si spiega: si usa. Chiarezza, velocità, privacy e cura del dettaglio non sono opzioni — sono il minimo.",
    focus: [
      "Risultati di business",
      "UX chiara",
      "Affidabilità",
      "App Store",
      "CRM & web",
      "Privacy",
    ],
    highlights: [
      { label: "Prodotti", value: "3 live su App Store" },
      { label: "Qualità", value: "5.0 AndroMetrics" },
      { label: "Delivery", value: "Idea → Rilascio" },
    ],
  },
  social: [
    {
      name: "Instagram",
      url: "https://www.instagram.com/swiftwithfer",
      icon: "instagram",
    },
    {
      name: "App Store",
      url: "https://apps.apple.com/it/developer/fernando-piras/id1865514513",
      icon: "appstore",
    },
  ] satisfies SocialLink[],
  services: [
    {
      id: "product-build",
      title: "Prodotto completo",
      description:
        "Dalla discovery al rilascio: un unico partner per progettare, sviluppare e pubblicare il tuo software senza passaggi di mano.",
    },
    {
      id: "ios-development",
      title: "App iOS native",
      description:
        "App su misura per iPhone e iPad, ottimizzate per performance, usabilità e pubblicazione su App Store.",
    },
    {
      id: "crm-platforms",
      title: "CRM & gestionali",
      description:
        "Piattaforme web per operazioni quotidiane: dashboard, analytics, staff, clienti e automazioni — anche integrate con app native.",
    },
    {
      id: "consulting",
      title: "Consulenza & scaling",
      description:
        "Audit del prodotto esistente, roadmap e interventi mirati per qualità, velocità e crescita sostenibile.",
    },
  ],
  metrics: {
    publishedApps: 3,
    technologies: 16,
    appStoreDeveloperUrl:
      "https://apps.apple.com/it/developer/fernando-piras/id1865514513",
  },
  skills: [
    "Swift",
    "SwiftUI",
    "React",
    "TypeScript",
    "Firebase",
    "Firestore",
    "Cloud Functions",
    "StoreKit",
    "Vercel",
    "UI/UX",
    "AI Tools",
    "App Architecture",
  ],
  technologies: [
    { name: "SwiftUI", slug: "apple" },
    { name: "Swift", slug: "swift" },
    { name: "Firebase", slug: "firebase" },
    { name: "Firestore", slug: "firebase" },
    { name: "Cloud Functions", slug: "firebase" },
    { name: "React", slug: "react" },
    { name: "TypeScript", slug: "typescript" },
    { name: "Vercel", slug: "vercel" },
    { name: "StoreKit", slug: "appstore" },
    { name: "Xcode", slug: "xcode" },
    { name: "AI / Cursor", slug: "cursor" },
    { name: "Analytics", slug: "googleanalytics" },
  ] satisfies Technology[],
  timeline: [
    {
      year: "2024",
      title: "Fondamenta SwiftUI",
      description: "Prime app native e metodo di lavoro end-to-end.",
    },
    {
      year: "2025",
      title: "PreventivoRapido PRO",
      description: "Primo prodotto business live: preventivi professionali in pochi minuti.",
    },
    {
      year: "2026",
      title: "Slotiva & AndroMetrics",
      description: "Piattaforme complete: CRM + app servizi e prodotto medicale premium.",
    },
  ] satisfies TimelineEntry[],
  apps: [
    {
      id: "slotiva",
      name: "Slotiva",
      tagline: "Prenotazioni, CRM e operations in un solo sistema",
      description:
        "La piattaforma per saloni, barbieri e studi: app iOS per clienti e titolari, gestionale web con dashboard e KPI, backend cloud in tempo reale. Meno no-show, agenda sempre aggiornata, business sotto controllo.",
      outcomes: [
        "App + CRM web + backend in un unico ecosistema",
        "Gestionale live su slotiva.it",
        "Prenotazioni, pagamenti e chat sincronizzati",
      ],
      architecture:
        "App iOS (SwiftUI) e gestionale web (React/TypeScript) condividono Firestore e Cloud Functions. Auth, ruoli, multi-business e sync realtime unificano clienti, staff e amministrazione su ogni dispositivo.",
      icon: "/images/apps/slotiva/icon.png",
      screenshots: [
        "/images/apps/slotiva/screenshot-1.png",
        "/images/apps/slotiva/screenshot-2.png",
        "/images/apps/slotiva/screenshot-3.png",
      ],
      technologies: [
        "SwiftUI",
        "Firebase",
        "Firestore",
        "Cloud Functions",
        "React",
        "TypeScript",
        "Vercel",
        "StoreKit 2",
        "Apple Watch",
        "Push Notifications",
        "AI",
      ],
      appStoreUrl: "https://apps.apple.com/it/app/slotiva/id6779347919",
      websiteUrl: "https://www.slotiva.it",
      status: "published",
      featured: true,
      demoVideo: {
        src: "/videos/slotiva-demo.mp4",
        poster: "/images/apps/slotiva/screenshot-1.png",
        title: "Slotiva in uso reale su iPhone",
      },
    },
    {
      id: "andrometrics",
      name: "AndroMetrics",
      tagline: "Monitoraggio fertilità maschile, chiaro ogni giorno",
      description:
        "Prodotto medicale premium: dati complessi tradotti in uno score 0–100, grafici evolutivi e insight comprensibili. Privacy by design, widget e piano Premium — progettata per fiducia e chiarezza clinica.",
      outcomes: [
        "Score giornaliero immediato e comprensibile",
        "Valutazione 5.0 su App Store",
        "Dati sensibili protetti e sincronizzati",
      ],
      architecture:
        "App SwiftUI con sync cloud Firebase, OCR referti (Vision), widget iOS e abbonamenti StoreKit 2. Flusso dati pensato per continuità d'uso e protezione delle informazioni di salute.",
      icon: "/images/apps/andrometrics/icon.png",
      screenshots: [
        "/images/apps/andrometrics/screenshot-1.png",
        "/images/apps/andrometrics/screenshot-2.png",
        "/images/apps/andrometrics/screenshot-3.png",
      ],
      technologies: [
        "SwiftUI",
        "HealthKit",
        "StoreKit 2",
        "Firebase",
        "WidgetKit",
        "Vision",
      ],
      appStoreUrl:
        "https://apps.apple.com/it/app/andrometrics-fertility/id6758244167",
      websiteUrl: "https://fernandopiras.github.io/andrometrics-legal/",
      status: "published",
      featured: true,
      demoVideo: {
        src: "/videos/andrometrics-demo.mp4",
        poster: "/images/apps/andrometrics/screenshot-1.png",
        title: "AndroMetrics in uso reale su iPhone",
      },
      appStoreRating: { average: 5, count: 4 },
      reviews: [
        {
          author: "Shehan2002",
          rating: 5,
          title: "Monitoraggio fertilità",
          body: "Ottima app, semplice e funzionale per tenere sotto controllo i dati.",
          date: "2026-04-15",
        },
        {
          author: "Torrmax",
          rating: 5,
          title: "App molto utile",
          body: "Funziona bene semplice e intuitiva utile da tenere sotto controllo gli andamenti",
          date: "2026-03-27",
        },
        {
          author: "Antonio Vacondio",
          rating: 5,
          title: "Molto chiara",
          body: "App intuitiva e ben progettata. I dati sono facili da capire e i grafici aiutano a vedere i progressi nel tempo.",
          date: "2026-03-08",
        },
      ],
    },
    {
      id: "preventivorapido",
      name: "PreventivoRapido PRO",
      tagline: "Preventivi professionali che chiudono lavori",
      description:
        "Strumento professionale per artigiani e freelance: preventivi PDF curati, firma cliente, rubrica e sync cloud. Meno tempo in ufficio, più tempo sul campo — con documenti che trasmettono affidabilità.",
      outcomes: [
        "Preventivi PDF pronti in minuti",
        "Firma digitale integrata nel documento",
        "Rubrica clienti sempre sincronizzata",
      ],
      architecture:
        "App SwiftUI con generazione PDF, firma digitale, Sign in with Apple e sync cloud. Monetizzazione StoreKit 2 sul piano Pro.",
      icon: "/images/apps/preventivorapido/icon.png",
      screenshots: [
        "/images/apps/preventivorapido/screenshot-1.png",
        "/images/apps/preventivorapido/screenshot-2.png",
        "/images/apps/preventivorapido/screenshot-3.png",
      ],
      technologies: [
        "SwiftUI",
        "StoreKit 2",
        "PDFKit",
        "Sign in with Apple",
        "Cloud Sync",
      ],
      appStoreUrl:
        "https://apps.apple.com/it/app/preventivorapido-pro/id6768065146",
      websiteUrl:
        "https://fernandopiras.github.io/preventivorapido--legal/",
      status: "published",
      featured: true,
      demoVideo: {
        src: "/videos/preventivorapido-demo.mp4",
        poster: "/images/apps/preventivorapido/screenshot-1.png",
        title: "PreventivoRapido PRO in uso reale su iPhone",
      },
    },
  ] satisfies AppProject[],
  seo: {
    title: "Fernando Piras — Sviluppatore iOS & Software | SwiftWithFer",
    description:
      "Portfolio di Fernando Piras (SwiftWithFer). App iOS, gestionali web e CRM in Italia — prodotti reali su App Store con risultati misurabili.",
    keywords: [
      "Fernando Piras",
      "SwiftWithFer",
      "Sviluppatore iOS",
      "Sviluppatore App iOS",
      "SwiftUI",
      "Gestionali Aziendali",
      "CRM",
      "Slotiva",
      "AndroMetrics",
      "PreventivoRapido",
      "App Store",
      "Software Developer Italia",
    ],
    ogImage: "/og-image.png",
  },
} as const;

export type SiteConfig = typeof siteConfig;
