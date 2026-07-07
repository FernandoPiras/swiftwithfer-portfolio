export interface DiscoverySector {
  id: string;
  label: string;
  description: string;
}

export const discoverySectors = [
  {
    id: "hotel-hospitality",
    label: "Hotel & Hospitality",
    description: "PMS, booking, check-in digitale, concierge e fidelizzazione ospiti.",
  },
  {
    id: "ristorante-food",
    label: "Ristorante & Food",
    description: "Menu digitali, prenotazioni tavoli, ordini, delivery e loyalty.",
  },
  {
    id: "centro-estetico-beauty",
    label: "Centro Estetico & Beauty",
    description: "Agenda trattamenti, schede cliente, promozioni e reminder.",
  },
  {
    id: "palestra-fitness",
    label: "Palestra & Fitness",
    description: "Abbonamenti, classi, prenotazioni, progressi e area membri.",
  },
  {
    id: "negozio-retail",
    label: "Negozio Retail",
    description: "Catalogo, magazzino, POS, e-commerce e programma fedeltà.",
  },
  {
    id: "concessionaria-auto",
    label: "Concessionaria Auto",
    description: "Showroom digitale, lead, preventivi, test drive e post-vendita.",
  },
  {
    id: "studio-medico-sanita",
    label: "Studio Medico & Sanità",
    description: "Prenotazioni visite, cartelle, referti e comunicazioni pazienti.",
  },
  {
    id: "azienda-b2b",
    label: "Azienda B2B",
    description: "Portali clienti, CRM, ordini, fatturazione e dashboard operative.",
  },
  {
    id: "e-commerce",
    label: "E-commerce",
    description: "Shop online, pagamenti, logistica, marketing automation e analytics.",
  },
  {
    id: "servizi-professionali",
    label: "Servizi Professionali",
    description: "Preventivi, contratti, gestione clienti e fatturazione.",
  },
  {
    id: "immobiliare",
    label: "Immobiliare",
    description: "Annunci, CRM lead, visite, documenti e pipeline vendite.",
  },
  {
    id: "educazione",
    label: "Educazione",
    description: "Iscrizioni, calendario corsi, area studenti e pagamenti.",
  },
  {
    id: "eventi",
    label: "Eventi",
    description: "Biglietteria, registrazioni, agenda e comunicazioni partecipanti.",
  },
  {
    id: "altro",
    label: "Altro",
    description: "Progetto custom: il Discovery Document copre ogni tipologia di attività.",
  },
] satisfies DiscoverySector[];

export type DiscoveryDocumentFormat = "fillable-pdf" | "docx" | "pdf" | "json";

export function getDiscoveryDocumentPath(
  sectorId: string,
  format: DiscoveryDocumentFormat,
): string {
  const files: Record<DiscoveryDocumentFormat, string> = {
    "fillable-pdf": "SwiftWithFer-Discovery-Fillable.pdf",
    docx: "SwiftWithFer-Discovery.docx",
    pdf: "SwiftWithFer-Discovery.pdf",
    json: "SwiftWithFer-Discovery.json",
  };

  return `/documents/discovery/${sectorId}/${files[format]}`;
}

export function buildDiscoveryMailto(
  email: string,
  sectorLabel: string,
): string {
  const subject = encodeURIComponent(
    `Discovery Document — ${sectorLabel} — SwiftWithFer`,
  );
  const body = encodeURIComponent(
    `Ciao Fernando,

Ho compilato il Discovery Document per il settore: ${sectorLabel}.

Allego il file compilato (PDF, Word o JSON) a questa email.

—
Nome azienda:
Referente:
Telefono:

Resto in attesa di un tuo riscontro.

Grazie.`,
  );

  return `mailto:${email}?subject=${subject}&body=${body}`;
}

export function buildDirectMailto(email: string): string {
  const subject = encodeURIComponent("Richiesta consulenza — SwiftWithFer");
  const body = encodeURIComponent(
    `Ciao Fernando,

Vorrei parlare di un progetto software.

—
Nome azienda:
Settore:
Breve descrizione:

Grazie.`,
  );

  return `mailto:${email}?subject=${subject}&body=${body}`;
}
