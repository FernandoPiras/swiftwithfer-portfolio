export interface CaseStudyFeatureGroup {
  title: string;
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
    slug: "andrometrics",
    appId: "andrometrics",
    problem:
      "Monitorare il benessere maschile richiede continuità e chiarezza. Fogli sparsi e app generiche non offrono trend comprensibili né un quadro unificato nel tempo.",
    solution:
      "AndroMetrics traduce dati complessi in un punteggio giornaliero 0–100. Grafici evolutivi, referti digitalizzati e widget iOS — tutto in un'interfaccia medica premium, pensata per l'uso quotidiano.",
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
      "Comunicare dati di salute con chiarezza, senza complessità",
      "Proteggere dati sensibili con sync cloud sicura",
      "Digitalizzare referti con formati diversi",
      "Monetizzazione conforme alle linee guida Apple",
    ],
    results: [
      "Valutazione 5.0 su App Store",
      "Recensioni positive da utenti reali",
      "UX medica curata e comprensibile",
      "Piano Premium integrato",
    ],
    seoDescription:
      "Case study AndroMetrics: app iOS per monitoraggio fertilità maschile con score giornaliero, grafici e widget.",
  },
  {
    slug: "slotiva",
    appId: "slotiva",
    problem:
      "Saloni e studi gestiscono prenotazioni su WhatsApp e fogli. Risultato: sovrapposizioni, no-show, zero visibilità su clienti e performance.",
    solution:
      "Slotiva unifica prenotazioni, pagamenti e CRM in un ecosistema: app iOS per clienti e titolari, gestionale web professionale su slotiva.it, backend sincronizzato in tempo reale.",
    features: [],
    featureGroups: [
      {
        title: "App iOS — per clienti e titolari",
        items: [
          "Prenotazioni",
          "Clienti",
          "Staff",
          "Calendario",
          "Servizi",
          "Disponibilità",
          "Notifiche push",
          "Autenticazione",
          "Ruoli utente",
          "Multi business",
          "Statistiche",
          "Dashboard",
          "Gestione appuntamenti",
          "Storico",
          "Pagamenti",
          "Pacchetti",
          "Abbonamenti",
          "Feedback",
          "Chat",
          "Profilo cliente",
          "Sincronizzazione realtime",
          "Companion Apple Watch",
        ],
      },
      {
        title: "Gestionale Web — CRM professionale",
        items: [
          "Dashboard completa",
          "Analytics",
          "KPI",
          "Clienti",
          "Storico",
          "Fatturato",
          "Business Intelligence",
          "Insight",
          "CRM evoluto",
          "Marketing",
          "Fidelizzazione",
          "Gestione staff",
          "Gestione servizi",
          "Disponibilità",
          "Configurazione attività",
          "Pannello amministrativo",
          "Responsive desktop, tablet e mobile",
        ],
      },
    ],
    challenges: [
      "Prenotazioni simultanee senza conflitti",
      "Esperienze distinte per clienti e titolari",
      "Sync app iOS ↔ gestionale web in tempo reale",
      "Notifiche affidabili per team multipli",
    ],
    results: [
      "App live su App Store",
      "CRM operativo su slotiva.it",
      "Piattaforma pronta per saloni, barbieri e PT",
      "Ecosistema integrato app + web + backend",
    ],
    seoDescription:
      "Case study Slotiva: piattaforma prenotazioni con app iOS e gestionale web CRM per saloni e studi.",
  },
  {
    slug: "preventivorapido",
    appId: "preventivorapido",
    problem:
      "Artigiani e professionisti perdono ore con preventivi manuali: documenti non uniformi, firme mancanti, nessun archivio clienti.",
    solution:
      "PreventivoRapido PRO digitalizza l'intero flusso: preventivi PDF in minuti, firma cliente integrata, rubrica organizzata e backup automatico.",
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
      "Tempo di preventivazione ridotto drasticamente",
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
