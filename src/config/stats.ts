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
    label: "Prodotti live",
    description: "App Store e piattaforme web",
  },
  {
    id: "stack",
    type: "label",
    headline: "Full Stack",
    label: "iOS · Web · Cloud",
    description: "SwiftUI, React, Firebase e Vercel",
  },
  {
    id: "firebase",
    type: "label",
    headline: "Enterprise",
    label: "Backend cloud",
    description: "Auth, Firestore, Functions e sync realtime",
  },
  {
    id: "delivery",
    type: "label",
    headline: "End-to-End",
    label: "Design → Rilascio",
    description: "Discovery, sviluppo, test e deploy",
  },
];
