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
  role: "iOS & Software Developer",
  tagline: "App iOS native, web app e gestionali aziendali — dal codice al rilascio.",
  email: "fernando@fernandopiras.com",
  portfolioUrl: "https://fernandopiras.com",
  locale: "it_IT",
  hero: {
    valueProps: [
      "App iOS native pubblicate su App Store",
      "Web app, CRM e gestionali su misura",
      "Architetture scalabili con Firebase e cloud",
    ],
    credibility: [
      "App Store",
      "Firebase",
      "SwiftUI",
      "React",
      "React Native",
      "iOS",
      "Web",
      "AI",
      "Cloud",
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
      "Sviluppatore iOS e software indipendente. Realizzo prodotti digitali di livello enterprise: app native, web app e gestionali aziendali, dalla progettazione al rilascio.",
    full: "Unisco design raffinato, architetture solide e attenzione maniacale all'esperienza utente. Ogni progetto nasce da un'esigenza reale del business e cresce con iterazioni misurate, test rigorosi e standard di qualità da prodotto finito.",
    journey:
      "Il percorso parte da Swift e SwiftUI, passa per app pubblicate in salute, produttività e servizi, fino a piattaforme complete con Firebase, gestionali web, StoreKit, widget, Watch e integrazioni cloud.",
    philosophy:
      "Credo in software che rispetta il tempo dell'utente: interfacce chiare, animazioni fluide, performance misurabili e privacy by design. La qualità non è un extra — è il requisito minimo per ogni prodotto che rilascio.",
    focus: [
      "Qualità del codice",
      "UX & accessibilità",
      "Performance",
      "App Store readiness",
      "Web & gestionali",
      "Firebase & cloud",
    ],
    highlights: [
      {
        label: "App Store",
        value: "3 app pubblicate",
      },
      {
        label: "Stack",
        value: "iOS · Web · Cloud",
      },
      {
        label: "Brand",
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
      id: "web-development",
      title: "Sviluppo web",
      description:
        "Siti web e web app responsive con React, TypeScript e deploy su Vercel. Performance, SEO e UX curata su ogni dispositivo.",
    },
    {
      id: "business-software",
      title: "Gestionali aziendali",
      description:
        "Software su misura per attività e aziende: flussi operativi, pannelli admin, reportistica e strumenti di gestione quotidiana.",
    },
    {
      id: "crm",
      title: "CRM & automazioni",
      description:
        "CRM evoluti, automazioni di processo, marketing e fidelizzazione clienti integrati con app e backend cloud.",
    },
    {
      id: "consulting",
      title: "Consulenza tecnica",
      description:
        "Revisione codice, audit architetturale, performance tuning e roadmap tecnica per prodotti già avviati o in fase di scaling.",
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      description:
        "Interfacce chiare, accessibili e coerenti con le linee guida Apple. Prototipi, design system e microinterazioni curate.",
    },
    {
      id: "firebase-cloud",
      title: "Firebase & Backend",
      description:
        "Auth, Firestore, Cloud Functions, push notification, sync realtime e architetture cloud scalabili.",
    },
    {
      id: "end-to-end",
      title: "Sviluppo completo",
      description:
        "Dalla progettazione al rilascio: discovery, sviluppo, test, deploy, App Store e supporto post-lancio.",
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
      tagline: "Piattaforma prenotazioni + CRM professionale",
      description:
        "Ecosistema completo per saloni, barbieri e PT: app iOS nativa con prenotazioni, chat, pagamenti e abbonamenti; gestionale web CRM su slotiva.it con dashboard, analytics e KPI.",
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
      "Portfolio ufficiale di Fernando Piras (SwiftWithFer). Sviluppatore iOS, SwiftUI, web e gestionali aziendali in Italia. App native, CRM, Firebase e prodotti enterprise.",
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
    ogImage: "/opengraph-image",
  },
} as const;

export type SiteConfig = typeof siteConfig;
