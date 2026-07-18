export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

/** Shared product-building workflow shown on the homepage */
export const developmentProcess: ProcessStep[] = [
  {
    id: "analysis",
    title: "Analisi",
    description: "Problema, utenti e vincoli di business.",
  },
  {
    id: "ux-ui",
    title: "UX / UI",
    description: "Flussi chiari e interfacce pronte all'uso.",
  },
  {
    id: "architecture",
    title: "Architettura",
    description: "Stack, dati e confini del sistema.",
  },
  {
    id: "development",
    title: "Sviluppo",
    description: "Implementazione iterativa e misurabile.",
  },
  {
    id: "testing",
    title: "Testing",
    description: "Qualità, edge case e readiness al rilascio.",
  },
  {
    id: "deploy",
    title: "Deploy",
    description: "App Store, web e infrastruttura cloud.",
  },
  {
    id: "updates",
    title: "Aggiornamenti",
    description: "Evoluzione continua del prodotto live.",
  },
  {
    id: "support",
    title: "Supporto",
    description: "Monitoraggio, feedback e miglioramento.",
  },
];
