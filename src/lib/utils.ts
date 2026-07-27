export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function getStatusLabel(status: "published" | "beta" | "in-development") {
  const labels = {
    published: "Pubblicata",
    beta: "TestFlight",
    "in-development": "In sviluppo",
  } as const;
  return labels[status];
}

export function getWebsiteLinkLabel(url: string): string {
  if (/legal|privacy|support/i.test(url) || url.includes("github.io")) {
    return "Privacy & legal";
  }

  if (/business\.slotiva\.it/i.test(url)) {
    return "Business Portal";
  }

  if (/slotiva\.it/i.test(url)) {
    return "Visita il sito";
  }

  return "Sito web";
}
