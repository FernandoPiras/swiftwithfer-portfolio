export type StatItem =
  | {
      id: string;
      type: "counter";
      value: number;
      suffix?: string;
      prefix?: string;
      label: string;
      description?: string;
    }
  | {
      id: string;
      type: "label";
      headline: string;
      label: string;
      description?: string;
    };

export const statsConfig: StatItem[] = [
  {
    id: "published-apps",
    type: "counter",
    value: 3,
    suffix: "+",
    label: "App pubblicate",
    description: "Prodotti live su App Store",
  },
  {
    id: "swiftui",
    type: "counter",
    value: 100,
    suffix: "%",
    label: "SwiftUI",
    description: "Interfacce native Apple",
  },
  {
    id: "firebase",
    type: "label",
    headline: "Firebase",
    label: "Backend cloud",
    description: "Auth, database e funzioni serverless",
  },
  {
    id: "ai-assisted",
    type: "label",
    headline: "Sviluppo AI",
    label: "Assistito",
    description: "Workflow potenziato con Cursor e AI",
  },
];
