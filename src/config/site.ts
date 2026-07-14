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
  tagline: "Trasformo idee in prodotti digitali che generano risultati — app, web e gestionali pronti per il mercato.",
  email: "fernando@fernandopiras.com",
  portfolioUrl: "https://fernandopiras.com",
  locale: "it_IT",
  hero: {
    valueProps: [
      "3 prodotti live su App Store con recensioni verificate",
      "Piattaforme complete: app native, CRM web e backend cloud",
      "Dalla prima idea al rilascio, con cura su ogni dettaglio",
    ],
    credibility: [
      "App Store",
      "SwiftUI",
      "React",
      "Firebase",
      "UI/UX",
      "Performance",
    ],
  },
  photo: {
    hero: "/images/profile/fernando.jpg",
    bio: "/images/profile/fernando-bio.png",
    alt: "Fernando Piras — iOS Developer",
  },
  bio: {
    short:
      "Progetto e rilascio software che funziona davvero: app iOS, web app e gestionali pensati per far crescere il business del cliente.",
    full: "Ogni prodotto nasce da un problema concreto. Lavoro con iterazioni misurate, attenzione al dettaglio e standard di qualità che un cliente enterprise si aspetta — senza compromessi su UX, performance o affidabilità.",
    journey:
      "Dal primo prototipo SwiftUI alle piattaforme complete oggi live: salute, produttività, servizi e CRM. Ogni release su App Store è il risultato di mesi di raffinamento.",
    philosophy:
      "Il software migliore è quello che l'utente non deve imparare. Interfacce chiare, tempi di risposta rapidi, dati protetti. La qualità non si negocia.",
    focus: [
      "Esperienza utente",
      "Affidabilità",
      "Performance",
      "App Store",
      "Web & CRM",
      "Privacy",
    ],
    highlights: [
      {
        label: "Esperienza",
        value: "3+ anni SwiftUI",
      },
      {
        label: "Risultati",
        value: "3 app su App Store",
      },
      {
        label: "Recensioni",
        value: "5.0 su AndroMetrics",
      },
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
      id: "ios-development",
      title: "App iOS native",
      description:
        "App su misura per iPhone e iPad, pubblicate su App Store. Design curato, performance native e integrazioni Apple.",
    },
    {
      id: "web-development",
      title: "Web app & siti",
      description:
        "Piattaforme web veloci e responsive. Ottimizzate per conversione, SEO e utilizzo quotidiano su ogni dispositivo.",
    },
    {
      id: "business-software",
      title: "Gestionali aziendali",
      description:
        "Software che semplifica le operazioni: pannelli admin, reportistica e flussi di lavoro su misura per il tuo team.",
    },
    {
      id: "crm",
      title: "CRM & automazioni",
      description:
        "Gestione clienti, marketing e fidelizzazione in un unico sistema. Meno lavoro manuale, più controllo sul business.",
    },
    {
      id: "consulting",
      title: "Consulenza tecnica",
      description:
        "Analisi del prodotto esistente, roadmap e interventi mirati per migliorare qualità, velocità e scalabilità.",
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      description:
        "Interfacce intuitive che convertono. Prototipi, design system e microinterazioni allineate alle linee guida Apple.",
    },
    {
      id: "firebase-cloud",
      title: "Backend & cloud",
      description:
        "Infrastruttura sicura e scalabile: autenticazione, database, notifiche e sincronizzazione in tempo reale.",
    },
    {
      id: "end-to-end",
      title: "Progetto completo",
      description:
        "Un unico partner dalla discovery al rilascio: progettazione, sviluppo, test, deploy e supporto post-lancio.",
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
    "UIKit",
    "React",
    "TypeScript",
    "Firebase",
    "Firestore",
    "Cloud Functions",
    "Xcode",
    "StoreKit",
    "Vercel",
    "Git",
    "REST API",
    "AI Tools (Cursor, ChatGPT)",
    "UI/UX",
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
    { name: "Figma", slug: "figma" },
    { name: "Git", slug: "git" },
    { name: "REST API", slug: "openapiinitiative" },
    { name: "AdMob", slug: "googleadmob" },
  ] satisfies Technology[],
  timeline: [
    {
      year: "2024",
      title: "Primi progetti SwiftUI",
      description:
        "Esplorazione di SwiftUI, architetture MVVM e pubblicazione dei primi prototipi funzionali.",
    },
    {
      year: "2025",
      title: "Brand SwiftWithFer",
      description:
        "Nascita del brand personale: contenuti su iOS, Swift e best practice per sviluppatori.",
    },
    {
      year: "2025",
      title: "PreventivoRapido PRO",
      description:
        "Prima app business live: preventivi professionali che risparmiano ore di lavoro agli artigiani.",
    },
    {
      year: "2026",
      title: "AndroMetrics & Slotiva",
      description:
        "Due piattaforme complete in salute e servizi — app, CRM web e backend integrati.",
    },
  ] satisfies TimelineEntry[],
  apps: [
    {
      id: "andrometrics",
      name: "AndroMetrics",
      tagline: "Monitoraggio fertilità maschile, ogni giorno",
      description:
        "App medica premium che traduce dati complessi in un punteggio chiaro 0–100. Grafici evolutivi, referti digitalizzati e widget — progettata per chi vuole capire i propri progressi senza sforzo.",
      outcomes: [
        "Score giornaliero immediato e comprensibile",
        "Valutazione 5.0 su App Store",
        "Dati sensibili protetti e sincronizzati",
      ],
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
      id: "slotiva",
      name: "Slotiva",
      tagline: "Prenotazioni e CRM per saloni e studi",
      description:
        "Piattaforma enterprise per chi gestisce appuntamenti ogni giorno: app iOS per clienti e titolari, gestionale web con analytics e KPI su slotiva.it. Meno no-show, agenda sempre aggiornata, business sotto controllo.",
      outcomes: [
        "Ecosistema app + CRM + backend integrato",
        "Gestionale web live su slotiva.it",
        "Prenotazioni e pagamenti in tempo reale",
      ],
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
      id: "preventivorapido",
      name: "PreventivoRapido PRO",
      tagline: "Preventivi professionali in pochi minuti",
      description:
        "Per artigiani e professionisti che vogliono chiudere più lavori: preventivi PDF curati, firma cliente integrata, rubrica organizzata e backup automatico. Meno tempo in ufficio, più tempo sul campo.",
      outcomes: [
        "Preventivi PDF pronti in minuti",
        "Firma digitale integrata nel documento",
        "Rubrica clienti sempre sincronizzata",
      ],
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
    title:
      "Fernando Piras — iOS & Software Developer | SwiftWithFer",
    description:
      "Portfolio di Fernando Piras (SwiftWithFer). Sviluppatore iOS e software in Italia. App native, gestionali web e CRM — prodotti reali con risultati misurabili.",
    keywords: [
      "Fernando Piras",
      "SwiftWithFer",
      "SwiftWithFer Portfolio",
      "Fernando Piras iOS Developer",
      "Fernando Piras SwiftUI",
      "iOS Developer",
      "SwiftUI Developer",
      "App Developer",
      "Web Developer",
      "Software Developer",
      "Sviluppatore iOS",
      "Sviluppatore iOS Italia",
      "Sviluppatore App iOS",
      "Sviluppo App iOS",
      "Sviluppo Siti Web",
      "Gestionali Aziendali",
      "Web Developer Italia",
      "Software Developer Italia",
      "Swift",
      "SwiftUI",
      "swiftwithfer",
      "App Store",
      "portfolio iOS",
      "consulenza SwiftUI",
      "AndroMetrics",
      "Slotiva",
      "PreventivoRapido",
    ],
    ogImage: "/og-image.png",
  },
} as const;

export type SiteConfig = typeof siteConfig;
