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
    label: "Prodotti rilasciati",
    description: "Live su App Store e web",
  },
  {
    id: "rating",
    type: "label",
    headline: "5.0",
    label: "Valutazione media",
    description: "Recensioni verificate su App Store",
  },
  {
    id: "delivery",
    type: "label",
    headline: "End-to-End",
    label: "Idea → Rilascio",
    description: "Un partner, un processo",
  },
  {
    id: "experience",
    type: "label",
    headline: "3+ anni",
    label: "SwiftUI in produzione",
    description: "Prodotti reali, non demo",
  },
];
