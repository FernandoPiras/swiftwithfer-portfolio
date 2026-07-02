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
  appStoreRating?: AppStoreRating;
  reviews?: AppReview[];
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
  role: "iOS Developer",
  tagline: "App native di qualità Apple — performance, UX e codice pulito.",
  email: "fernandopiras95@gmail.com",
  portfolioUrl: "https://swiftwithfer-portfolio.vercel.app",
  locale: "it_IT",
  photo: {
    hero: "/images/profile/fernando.jpg",
    bio: "/images/profile/fernando-bio.png",
    alt: "Fernando Piras — iOS Developer",
  },
  bio: {
    short:
      "Sviluppatore iOS indipendente con passione per prodotti digitali curati nei dettagli, dalla prima riga di codice alla pubblicazione su App Store.",
    full: "Creo app iOS che uniscono design raffinato, architetture solide e attenzione maniacale all'esperienza utente. Ogni progetto nasce da un'esigenza reale e cresce con iterazioni misurate, test rigorosi e un occhio costante alle linee guida Apple.",
    journey:
      "Il mio percorso parte dalla curiosità per Swift e SwiftUI, passa per app pubblicate in salute, produttività e lifestyle, fino a prodotti completi con Firebase, StoreKit, widget, Watch e integrazioni cloud.",
    philosophy:
      "Credo in software che rispetta il tempo dell'utente: interfacce chiare, animazioni fluide, performance misurabili e privacy by design. La qualità non è un extra — è il requisito minimo.",
    focus: ["Qualità del codice", "UX & accessibilità", "Performance", "App Store readiness"],
    highlights: [
      {
        label: "App Store",
        value: "3 app pubblicate",
      },
      {
        label: "Brand",
        value: "SwiftWithFer",
      },
      {
        label: "Contenuti",
        value: "@swiftwithfer",
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
      title: "Sviluppo app iOS",
      description:
        "Progettazione e sviluppo end-to-end in SwiftUI: architetture MVVM, integrazioni native, test e pubblicazione su App Store.",
    },
    {
      id: "consulting",
      title: "Consulenza tecnica",
      description:
        "Revisione codice, audit architetturale, performance tuning e roadmap tecnica per prodotti già avviati o in fase di scaling.",
    },
    {
      id: "app-store",
      title: "App Store readiness",
      description:
        "StoreKit, abbonamenti, compliance Apple, metadata, screenshot e supporto fino all'approvazione e al lancio.",
    },
    {
      id: "firebase-cloud",
      title: "Backend & Firebase",
      description:
        "Auth, Firestore, Cloud Functions, push notification e sync cloud per app con utenti reali e dati sensibili.",
    },
  ],
  metrics: {
    publishedApps: 3,
    technologies: 12,
    appStoreDeveloperUrl:
      "https://apps.apple.com/it/developer/fernando-piras/id1865514513",
  },
  skills: [
    "Swift",
    "SwiftUI",
    "UIKit",
    "Firebase",
    "Cloud Functions",
    "Xcode",
    "StoreKit",
    "AdMob",
    "Git",
    "GitHub",
    "REST API",
    "AI Tools (Cursor, ChatGPT)",
    "UI/UX",
    "App Architecture",
  ],
  technologies: [
    { name: "Swift", slug: "swift" },
    { name: "SwiftUI", slug: "apple" },
    { name: "UIKit", slug: "apple" },
    { name: "Xcode", slug: "xcode" },
    { name: "Firebase", slug: "firebase" },
    { name: "StoreKit", slug: "appstore" },
    { name: "Git", slug: "git" },
    { name: "GitHub", slug: "github" },
    { name: "AdMob", slug: "googleadmob" },
    { name: "REST API", slug: "openapiinitiative" },
    { name: "Cursor", slug: "cursor" },
    { name: "Figma", slug: "figma" },
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
        "App per preventivi professionali con PDF, firma cliente, sync cloud e abbonamenti StoreKit.",
    },
    {
      year: "2026",
      title: "AndroMetrics & Slotiva",
      description:
        "Pubblicazione di app in salute e produttività con Firebase, widget, IAP e backend cloud.",
    },
  ] satisfies TimelineEntry[],
  apps: [
    {
      id: "andrometrics",
      name: "AndroMetrics",
      tagline: "Score fertilità 0–100 ogni giorno",
      description:
        "Monitoraggio del benessere maschile con analisi personalizzate, grafici avanzati, OCR referti, widget e abbonamenti Premium via StoreKit.",
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
      appStoreRating: { average: 5, count: 4 },
      reviews: [
        {
          author: "Shehan2002",
          rating: 5,
          title: "App fitness",
          body: "Ottima app fitness, semplice e funzionale.",
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
      tagline: "Agenda e prenotazioni smart",
      description:
        "Piattaforma per saloni, barbieri e PT: calendario, prenotazioni, chat, notifiche push e Slotiva Pro per titolari attività.",
      icon: "/images/apps/slotiva/icon.png",
      screenshots: [
        "/images/apps/slotiva/screenshot-1.png",
        "/images/apps/slotiva/screenshot-2.png",
        "/images/apps/slotiva/screenshot-3.png",
      ],
      technologies: [
        "SwiftUI",
        "Firebase",
        "StoreKit 2",
        "Apple Watch",
        "Push Notifications",
      ],
      appStoreUrl: "https://apps.apple.com/it/app/slotiva/id6779347919",
      websiteUrl: "https://www.slotiva.it",
      status: "published",
      featured: true,
    },
    {
      id: "preventivorapido",
      name: "PreventivoRapido PRO",
      tagline: "Preventivi professionali in pochi minuti",
      description:
        "Per artigiani e freelance: preventivi PDF, rubrica clienti, firma digitale, fatture, backup e sync cloud con abbonamento Pro.",
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
    },
  ] satisfies AppProject[],
  seo: {
    title: "Fernando Piras — iOS Developer | SwiftWithFer",
    description:
      "Portfolio ufficiale di Fernando Piras (@swiftwithfer). Sviluppatore iOS SwiftUI con 3 app su App Store: AndroMetrics, Slotiva e PreventivoRapido PRO. Consulenza e sviluppo app native.",
    keywords: [
      "iOS Developer",
      "Swift",
      "SwiftUI",
      "Fernando Piras",
      "SwiftWithFer",
      "swiftwithfer",
      "App Store",
      "portfolio iOS",
      "sviluppatore iOS Italia",
      "consulenza SwiftUI",
      "AndroMetrics",
      "Slotiva",
      "PreventivoRapido",
    ],
    ogImage: "/images/og-cover.jpg",
  },
} as const;

export type SiteConfig = typeof siteConfig;
