export interface CaseStudyFeatureGroup {
  title: string;
  description?: string;
  items: string[];
}

export interface CaseStudyContent {
  slug: string;
  appId: "andrometrics" | "slotiva" | "preventivorapido";
  problem: string;
  solution: string;
  features: string[];
  featureGroups?: CaseStudyFeatureGroup[];
  challenges: string[];
  results: string[];
  seoDescription: string;
}

export const caseStudies: CaseStudyContent[] = [
  {
    slug: "slotiva",
    appId: "slotiva",
    problem:
      "Saloni e studi gestiscono prenotazioni su WhatsApp e fogli. Sovrapposizioni, no-show e zero visibilità su clienti, staff e fatturato.",
    solution:
      "Slotiva unifica operations e crescita: app iOS per clienti e titolari, gestionale web CRM su slotiva.it, backend Firebase in tempo reale. Un solo sistema per agenda, pagamenti, chat e analytics.",
    features: [],
    featureGroups: [
      {
        title: "App iOS — clienti e titolari",
        description: "Esperienza native per chi prenota e chi gestisce l'attività.",
        items: [
          "Prenotazioni e gestione appuntamenti",
          "Calendario e disponibilità",
          "Clienti, staff e ruoli",
          "Servizi, pacchetti e abbonamenti",
          "Pagamenti e notifiche push",
          "Chat e feedback",
          "Profilo cliente e storico",
          "Dashboard e statistiche",
          "Multi business",
          "Autenticazione e sync realtime",
          "Companion Apple Watch",
        ],
      },
      {
        title: "Gestionale web — CRM professionale",
        description: "Pannello responsive per controllare l'attività da desktop, tablet e mobile.",
        items: [
          "Dashboard completa con KPI",
          "Analytics, BI e insight",
          "Clienti, storico e fatturato",
          "CRM, marketing e fidelizzazione",
          "Gestione staff e servizi",
          "Disponibilità e config attività",
          "Pannello amministrativo",
          "Responsive desktop / tablet / mobile",
        ],
      },
      {
        title: "Backend & AI",
        description: "Infrastruttura cloud per affidabilità e automazioni.",
        items: [
          "Firebase Auth e Firestore",
          "Cloud Functions",
          "Sincronizzazione realtime",
          "Notifiche e automazioni",
          "AI assistita nei flussi operativi",
        ],
      },
    ],
    challenges: [
      "Prenotazioni simultanee senza conflitti",
      "UX distinte per clienti e titolari",
      "Sync affidabile app ↔ web ↔ cloud",
      "Scalabilità multi-business e multi-staff",
    ],
    results: [
      "App pubblicata su App Store",
      "CRM operativo su slotiva.it",
      "Ecosistema integrato pronto per saloni, barbieri e PT",
      "Operations e analytics nello stesso prodotto",
    ],
    seoDescription:
      "Case study Slotiva: piattaforma prenotazioni con app iOS, gestionale web CRM, Firebase e sync realtime.",
  },
  {
    slug: "andrometrics",
    appId: "andrometrics",
    problem:
      "Il benessere maschile richiede continuità e chiarezza. Fogli e app generiche non offrono un quadro clinico comprensibile nel tempo.",
    solution:
      "AndroMetrics traduce parametri e abitudini in uno score giornaliero 0–100, con grafici evolutivi e insight. Un'esperienza medicale premium, pensata per fiducia e uso quotidiano.",
    features: [
      "Score fertilità 0–100 ogni giorno",
      "Monitoraggio parametri e abitudini",
      "Grafici e trend nel tempo",
      "Digitalizzazione referti",
      "Widget iOS",
      "Export PDF",
      "Piano Premium",
    ],
    challenges: [
      "Comunicare dati di salute senza complessità",
      "Proteggere dati sensibili con sync sicura",
      "Digitalizzare referti con formati diversi",
      "Monetizzazione conforme alle linee guida Apple",
    ],
    results: [
      "Valutazione 5.0 su App Store",
      "Recensioni positive da utenti reali",
      "UX medicale chiara e affidabile",
      "Piano Premium integrato",
    ],
    seoDescription:
      "Case study AndroMetrics: app iOS medicale premium per monitoraggio fertilità maschile con score giornaliero.",
  },
  {
    slug: "preventivorapido",
    appId: "preventivorapido",
    problem:
      "Artigiani e professionisti perdono ore con preventivi manuali: documenti non uniformi, firme mancanti, nessun archivio clienti.",
    solution:
      "PreventivoRapido PRO digitalizza il flusso commerciale: preventivi PDF in minuti, firma cliente, rubrica e sync cloud — documenti che trasmettono professionalità.",
    features: [
      "Preventivi PDF professionali",
      "Rubrica clienti con storico",
      "Firma digitale nel PDF",
      "Gestione fatture",
      "Backup e sync cloud",
      "Piano Pro",
      "Accesso con Apple ID",
    ],
    challenges: [
      "PDF con layout professionale e consistente",
      "Firma cliente nel documento exportato",
      "Sync cloud affidabile per dati business",
      "Equilibrio tra funzioni base e piano Pro",
    ],
    results: [
      "App live su App Store",
      "Tempo di preventivazione drasticamente ridotto",
      "Documenti con firma digitale integrata",
      "Dati sincronizzati tra dispositivi",
    ],
    seoDescription:
      "Case study PreventivoRapido PRO: app iOS per preventivi PDF professionali con firma digitale e sync cloud.",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs() {
  return caseStudies.map((study) => study.slug);
}
