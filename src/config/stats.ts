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
    label: "Prodotti live",
    description: "App Store e piattaforme web",
  },
  {
    id: "rating",
    type: "label",
    headline: "5.0",
    label: "Valutazione",
    description: "AndroMetrics su App Store",
  },
  {
    id: "delivery",
    type: "label",
    headline: "End-to-end",
    label: "Idea → Rilascio",
    description: "Un partner, un processo",
  },
  {
    id: "focus",
    type: "label",
    headline: "iOS · Web",
    label: "CRM & Cloud",
    description: "Prodotti pronti al mercato",
  },
];
