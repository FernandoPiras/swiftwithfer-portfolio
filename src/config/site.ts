export type ProjectStatus = "published" | "beta" | "in-development";

export interface SocialLink {
  name: string;
  url: string;
  icon: "instagram" | "github" | "appstore" | "email";
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
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export const siteConfig = {
  name: "Fernando Piras",
  brand: "SwiftWithFer",
  role: "iOS Developer",
  tagline: "App native di qualità Apple — performance, UX e codice pulito.",
  email: "fernandopiras95@gmail.com",
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
    { name: "Swift", icon: "/images/tech/swift.svg" },
    { name: "SwiftUI", icon: "/images/tech/swiftui.svg" },
    { name: "UIKit", icon: "/images/tech/uikit.svg" },
    { name: "Xcode", icon: "/images/tech/xcode.svg" },
    { name: "Firebase", icon: "/images/tech/firebase.svg" },
    { name: "StoreKit", icon: "/images/tech/storekit.svg" },
    { name: "Git", icon: "/images/tech/git.svg" },
    { name: "GitHub", icon: "/images/tech/github.svg" },
    { name: "AdMob", icon: "/images/tech/admob.svg" },
    { name: "REST API", icon: "/images/tech/api.svg" },
    { name: "Cursor", icon: "/images/tech/cursor.svg" },
    { name: "Figma", icon: "/images/tech/figma.svg" },
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
    {
      year: "2026",
      title: "Skyora",
      description:
        "Meteo premium con WeatherKit, widget, Live Activity, Watch e monetizzazione AdMob + IAP.",
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
      githubUrl: "https://github.com/FernandoPiras/andrometrics-legal",
      websiteUrl: "https://fernandopiras.github.io/andrometrics-legal/",
      status: "published",
      featured: true,
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
      githubUrl: "https://github.com/FernandoPiras/preventivorapido--legal",
      websiteUrl:
        "https://fernandopiras.github.io/preventivorapido--legal/",
      status: "published",
      featured: true,
    },
    {
      id: "skyora",
      name: "Skyora",
      tagline: "Meteo elegante, preciso e personale",
      description:
        "App meteo premium con WeatherKit, radar, widget, Live Activity, Apple Watch, offline mode e monetizzazione IAP + AdMob.",
      icon: "/images/apps/skyora/icon.png",
      screenshots: ["/images/apps/skyora/screenshot-1.png"],
      technologies: [
        "SwiftUI",
        "WeatherKit",
        "WidgetKit",
        "StoreKit 2",
        "AdMob",
        "WatchKit",
      ],
      status: "beta",
      featured: false,
    },
  ] satisfies AppProject[],
  seo: {
    title: "Fernando Piras — iOS Developer | SwiftWithFer",
    description:
      "Portfolio di Fernando Piras, iOS Developer. App native SwiftUI pubblicate su App Store: AndroMetrics, Slotiva, PreventivoRapido PRO e Skyora.",
    keywords: [
      "iOS Developer",
      "Swift",
      "SwiftUI",
      "Fernando Piras",
      "SwiftWithFer",
      "App Store",
      "portfolio",
    ],
    ogImage: "/images/og-cover.jpg",
  },
} as const;

export type SiteConfig = typeof siteConfig;
