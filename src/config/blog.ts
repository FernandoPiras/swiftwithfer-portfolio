/**
 * Content Hub — articoli evergreen collegati agli hub /servizi.
 * Solo claim supportati dal portfolio: AndroMetrics + PreventivoRapido PRO.
 */

export type BlogCategoryId =
  | "costi-e-tempi"
  | "scelte-tecniche"
  | "processo"
  | "product"
  | "app-store";

export type ProofAppId = "andrometrics" | "preventivorapido";

export interface BlogCategory {
  id: BlogCategoryId;
  label: string;
  description: string;
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogSection {
  id: string;
  heading: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
}

export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: readonly string[];
  excerpt: string;
  /** Takeaway in evidenza sotto l’introduzione */
  keyTakeaway: string;
  category: BlogCategoryId;
  tags: readonly string[];
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  relatedServiceSlugs: readonly string[];
  relatedArticleSlugs: readonly string[];
  proofApps: readonly ProofAppId[];
  faq: readonly BlogFaq[];
  sections: readonly BlogSection[];
}

export const blogCategories: readonly BlogCategory[] = [
  {
    id: "costi-e-tempi",
    label: "Costi e tempi",
    description: "Stime realistiche, ambiti e cosa influenza budget e calendar.",
  },
  {
    id: "scelte-tecniche",
    label: "Scelte tecniche",
    description: "Nativo, web, CRM e trade-off che contano davvero.",
  },
  {
    id: "processo",
    label: "Processo",
    description: "Come si progetta e si guida un prodotto prima e durante lo sviluppo.",
  },
  {
    id: "product",
    label: "Product",
    description: "Decisioni di prodotto, scope e rischi di fallimento.",
  },
  {
    id: "app-store",
    label: "App Store",
    description: "Pubblicazione, review e qualità di rilascio su Apple.",
  },
] as const;

export const blogHub = {
  metaTitle: "Approfondimenti su app, software e prodotto digitale",
  metaDescription:
    "Guide pratiche su costi, tempi, scelte tecniche e rilascio di app e software. Basate sull’esperienza di prodotti pubblicati su App Store.",
  title: "Approfondimenti",
  lead: "Contenuti evergreen su come nasce e costa un prodotto digitale — con stime oneste e ambiti espliciti.",
  supporting:
    "Ogni articolo collega servizi, progetti live e passi operativi. Servono a decidere con più chiarezza prima di investire.",
} as const;

export const blogArticles: readonly BlogArticle[] = [
  {
    slug: "quanto-costa-sviluppare-un-app-2026",
    title: "Quanto costa sviluppare un’app nel 2026",
    metaTitle: "Quanto costa sviluppare un’app nel 2026 | Guida realistica",
    metaDescription:
      "Cosa determina il costo di un’app nel 2026: ambito, piattaforma, qualità e manutenzione. Con esempi da prodotti reali su App Store.",
    keywords: [
      "quanto costa sviluppare un app",
      "costo app iOS 2026",
      "budget sviluppo app",
    ],
    excerpt:
      "Il prezzo di un’app non è un listino: dipende da ambito, qualità, integrazioni Apple e cosa succede dopo il rilascio.",
    keyTakeaway:
      "Il costo serio nasce dall’ambito e dalla qualità di rilascio, non da un prezzo “a schermata”.",
    category: "costi-e-tempi",
    tags: ["app", "ios", "budget", "mvp"],
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-15",
    readingMinutes: 9,
    relatedServiceSlugs: [
      "sviluppatore-app-bologna",
      "sviluppatore-app-ios-bologna",
      "pubblicazione-app-store",
    ],
    relatedArticleSlugs: [
      "quanto-tempo-serve-per-sviluppare-un-gestionale",
      "app-nativa-o-web-app",
      "come-nasce-un-app-professionale",
    ],
    proofApps: ["andrometrics", "preventivorapido"],
    faq: [
      {
        question: "Esiste un costo medio affidabile?",
        answer:
          "No, se non specifichi piattaforma, numero di flussi critici, integrazioni e livello di qualità. Due app “semplici” possono differire di un ordine di grandezza.",
      },
      {
        question: "L’MVP costa meno?",
        answer:
          "Sì, se l’MVP è davvero minimo. Se include abbonamenti, OCR, sync e multi-ruolo, non è più un MVP.",
      },
    ],
    sections: [
      {
        id: "non-un-listino",
        heading: "Perché non esiste un prezzo fisso",
        paragraphs: [
          "Nel 2026 sviluppare un’app significa ancora definire un prodotto: utenti, flussi, vincoli di privacy, modello commerciale e qualità percepita. Un preventivo serio nasce da queste scelte, non da una tariffa “a schermata”.",
          "Chi pubblica già su App Store lo sa: il costo rilevante non è solo scrivere codice, ma arrivare a una build stabile, passare la review e mantenere il prodotto dopo il lancio.",
        ],
      },
      {
        id: "leve-di-costo",
        heading: "Le leve che muovono il budget",
        paragraphs: [
          "Queste variabili spiegano la maggior parte della forbice di prezzo:",
        ],
        bullets: [
          "Ambito: quanti flussi critici devono funzionare al day one",
          "Piattaforma: iOS nativo, web app, o entrambe",
          "Integrazioni: HealthKit, StoreKit, auth, PDF, sync, provider esterni",
          "Qualità: design, accessibilità, test su device, gestione errori",
          "Compliance: privacy labels, URL legali, dati sensibili",
          "Post-lancio: aggiornamenti OS, bugfix, piccole evoluzioni",
        ],
      },
      {
        id: "fasce-orientative",
        heading: "Fasce orientative (non listini)",
        paragraphs: [
          "Per un prodotto iOS focalizzato, un MVP serio può partire da un investimento contenuto se l’ambito è stretto e validato. Quando entrano abbonamenti, dati sensibili, OCR, sync o flussi business completi, il budget cresce perché cresce il rischio operativo.",
          "AndroMetrics e PreventivoRapido PRO mostrano due estremi utili: un prodotto salute privacy-first con framework Apple avanzati, e un prodotto business con documenti, firma cliente e produttività sul campo. Nessuno dei due è “un’app da weekend”.",
        ],
      },
      {
        id: "come-ridurre",
        heading: "Come ridurre il costo senza abbassare la qualità",
        paragraphs: [
          "Si riduce il costo togliendo ambito, non qualità. Meglio un nucleo che chiude un problema misurabile, poi moduli successivi. Evita di pagare due volte: prima per un prototipo incoerente, poi per riscrivere tutto.",
        ],
        bullets: [
          "Definisci un solo utente primario e un solo outcome",
          "Rimanda integrazioni non essenziali",
          "Investi in discovery prima dello sviluppo pieno",
          "Pianifica manutenzione: un’app abbandonata costa di più",
        ],
      },
      {
        id: "prossimo-passo",
        heading: "Come ottenere una stima utile",
        paragraphs: [
          "Con problema, utenti e vincoli si può ragionare su MVP, rischi e ordine di grandezza — non su un numero inventato per chiudere una call.",
        ],
      },
    ],
  },
  {
    slug: "quanto-costa-creare-software-personalizzato",
    title: "Quanto costa creare un software personalizzato",
    metaTitle: "Quanto costa un software personalizzato | Guida pratica",
    metaDescription:
      "Cosa fa salire (o scendere) il costo di un software su misura: dominio, integrazioni, adozione e ownership. Senza stime miracolose.",
    keywords: [
      "costo software personalizzato",
      "software su misura prezzo",
      "gestionale custom costo",
    ],
    excerpt:
      "Il software custom costa quanto il problema che risolve — e quanto è disciplinato lo scope.",
    keyTakeaway:
      "Il custom conviene quando il processo è un vantaggio o un collo di bottiglia — non per moda.",
    category: "costi-e-tempi",
    tags: ["software", "custom", "budget", "crm"],
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-15",
    readingMinutes: 8,
    relatedServiceSlugs: [
      "software-personalizzato-bologna",
      "sviluppatore-software-bologna",
      "crm-personalizzato-bologna",
    ],
    relatedArticleSlugs: [
      "crm-personalizzato-o-software-esistente",
      "quanto-costa-sviluppare-un-app-2026",
      "errori-che-fanno-fallire-progetto-software",
    ],
    proofApps: ["preventivorapido"],
    faq: [
      {
        question: "Custom è sempre più caro del SaaS?",
        answer:
          "All’inizio spesso sì. Nel tempo può costare meno se il SaaS ti obbliga a workaround continui o a posti di lavoro manuali.",
      },
    ],
    sections: [
      {
        id: "quando-custom",
        heading: "Quando ha senso il custom",
        paragraphs: [
          "Il software personalizzato conviene quando il processo è un vantaggio competitivo o un collo di bottiglia strutturale. Se un SaaS copre l’80–90% del bisogno a costo sostenibile, di solito conviene configurare, non costruire.",
          "PreventivoRapido PRO è un esempio di custom mobile: preventivi, clienti e documenti per un mestiere specifico. Non è un CRM generico rinominato.",
        ],
      },
      {
        id: "driver",
        heading: "Cosa guida il costo",
        paragraphs: ["I driver tipici:"],
        bullets: [
          "Complessità del dominio (regole, stati, eccezioni)",
          "Numero di ruoli e permessi",
          "Integrazioni (pagamenti, fatturazione, cloud, app mobile)",
          "Migrazione dati e qualità dell’anagrafica esistente",
          "Adozione: formazione, change management, support",
        ],
      },
      {
        id: "mvp-disciplinato",
        heading: "MVP disciplinato vs. monolite",
        paragraphs: [
          "Il modo più costoso di fare custom è volere “tutto subito”. Un nucleo che gestisce anagrafiche e un flusso documentale critico batte un gestionale incompleto con 40 schermate.",
          "Budgeta anche ownership: chi mantiene, chi decide le priorità, dove vive il codice.",
        ],
      },
      {
        id: "decisioni",
        heading: "Come decidere",
        paragraphs: [
          "Elenca i processi che oggi bruciano tempo o generano errori. Stima il valore recuperato. Solo allora ha senso parlare di investimento tecnico.",
        ],
      },
    ],
  },
  {
    slug: "app-nativa-o-web-app",
    title: "App nativa o web app: come scegliere",
    metaTitle: "App nativa o web app? Come scegliere senza ideologia",
    metaDescription:
      "Confronto pragmatico tra app iOS nativa e web app: capacità Apple, distribuzione, costi e casi d’uso reali.",
    keywords: [
      "app nativa o web app",
      "PWA vs app nativa",
      "quando fare app iOS",
    ],
    excerpt:
      "Non è una guerra di religioni: è una decisione di prodotto su utenti, capacità e distribuzione.",
    keyTakeaway:
      "Scegli per utenti, capacità di sistema e canale di distribuzione, non per preferenza tecnologica.",
    category: "scelte-tecniche",
    tags: ["ios", "web-app", "architettura"],
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-15",
    readingMinutes: 8,
    relatedServiceSlugs: [
      "sviluppatore-app-ios-bologna",
      "web-app-bologna",
      "sviluppatore-app-bologna",
    ],
    relatedArticleSlugs: [
      "quanto-costa-sviluppare-un-app-2026",
      "come-nasce-un-app-professionale",
      "come-pubblicare-app-su-app-store",
    ],
    proofApps: ["andrometrics", "preventivorapido"],
    faq: [
      {
        question: "Una PWA basta per essere “su App Store”?",
        answer:
          "No. App Store richiede un’app nativa (o wrapper con regole precise). Se ti serve la distribuzione Apple, pianifica nativo.",
      },
    ],
    sections: [
      {
        id: "criterio",
        heading: "Il criterio giusto",
        paragraphs: [
          "Scegli in base a: dove lavorano gli utenti, quali API del sistema servono, come vuoi distribuire e aggiornare, quale qualità percepita ti aspetti.",
        ],
      },
      {
        id: "nativa",
        heading: "Quando punta al nativo iOS",
        paragraphs: [
          "Scegli nativo se ti servono HealthKit, widget, Face ID, StoreKit, notifiche locali affidabili, UX “da iPhone” o presenza su App Store come canale commerciale.",
          "AndroMetrics esiste come app nativa perché privacy, HealthKit, Vision OCR e widget non sono dettagli cosmetici: sono il prodotto.",
        ],
        bullets: [
          "Integrazioni Apple profonde",
          "Uso offline / local-first",
          "Performance e gesture native",
          "Monetizzazione in-app",
        ],
      },
      {
        id: "web",
        heading: "Quando punta alla web app",
        paragraphs: [
          "La web app è spesso migliore per back-office, CRM, dashboard multi-ruolo e lavoro da desktop. Aggiornamenti immediati, un solo deploy, niente review store.",
          "In molti prodotti business ha senso: web per l’ufficio, app nativa per il campo — come nei flussi di preventivi e documenti.",
        ],
      },
      {
        id: "ibrido",
        heading: "L’opzione ibrida (senza pasticci)",
        paragraphs: [
          "Due superfici con un dominio condiviso funzionano se i confini sono chiari. Falliscono se duplichi regole di business in due posti senza owner.",
        ],
      },
    ],
  },
  {
    slug: "come-progettare-software-prima-di-scrivere-codice",
    title: "Come progettare un software prima di scrivere codice",
    metaTitle: "Progettare software prima del codice | Metodo pratico",
    metaDescription:
      "Un metodo concreto per progettare software: problema, utenti, flussi, rischi e MVP — prima di aprire l’IDE.",
    keywords: [
      "progettare software",
      "discovery prodotto",
      "prima di sviluppare un app",
    ],
    excerpt:
      "Il codice è costoso. La chiarezza sul problema costa meno e evita riscritture.",
    keyTakeaway:
      "Congela problema, utente primario e MVP prima di aprire l’IDE.",
    category: "processo",
    tags: ["discovery", "mvp", "processo"],
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-15",
    readingMinutes: 9,
    relatedServiceSlugs: [
      "consulenza-prodotto-digitale",
      "sviluppatore-software-bologna",
      "software-personalizzato-bologna",
    ],
    relatedArticleSlugs: [
      "errori-che-fanno-fallire-progetto-software",
      "come-nasce-un-app-professionale",
      "come-scegliere-sviluppatore-software",
    ],
    proofApps: ["andrometrics", "preventivorapido"],
    faq: [
      {
        question: "Quanto tempo dedica alla discovery?",
        answer:
          "Dipende dalla complessità. Anche pochi giorni di chiarezza su utenti e flussi evitano settimane di rifacimenti.",
      },
      {
        question: "Serve un documento formale?",
        answer:
          "Serve un accordo scritto su ambito e fuori-scope. Il formato può essere snello, purché sia deciso.",
      },
    ],
    sections: [
      {
        id: "problema",
        heading: "Parti dal problema osservabile",
        paragraphs: [
          "Descrivi cosa succede oggi, chi soffre, quanto costa l’errore o il ritardo. Se non riesci a dirlo in una pagina, non sei pronto a stimare lo sviluppo.",
        ],
      },
      {
        id: "utenti",
        heading: "Utenti e job-to-be-done",
        paragraphs: [
          "Un prodotto con troppi utenti primari diventa confuso. Scegline uno per l’MVP. PreventivoRapido PRO è chiaro: professionisti che devono chiudere un preventivo sul campo. AndroMetrics è chiaro: tracking e insight per un percorso di fertilità/benessere.",
        ],
      },
      {
        id: "flussi",
        heading: "Flussi prima delle schermate",
        paragraphs: [
          "Disegna i passi: trigger → azione → risultato → eccezione. Solo dopo arriva l’UI. Le schermate senza flussi sono decorazioni.",
        ],
        bullets: [
          "Stato iniziale e stato di successo",
          "Dati obbligatori e validazioni",
          "Cosa succede offline / senza rete",
          "Chi può fare cosa (permessi)",
        ],
      },
      {
        id: "rischi",
        heading: "Rischi e vincoli",
        paragraphs: [
          "Privacy, App Store, integrazioni, migrazione dati, adozione dello staff: elencali presto. Sono i posti dove i progetti muoiono in silenzio.",
        ],
      },
      {
        id: "mvp",
        heading: "Congela un MVP onesto",
        paragraphs: [
          "Scrivi cosa resta fuori. Se “fuori” è vuoto, non hai un MVP: hai un desiderio. Poi sì, apri Xcode o l’editor.",
        ],
      },
    ],
  },
  {
    slug: "come-pubblicare-app-su-app-store",
    title: "Come pubblicare un’app su App Store",
    metaTitle: "Come pubblicare un’app su App Store | Checklist pratica",
    metaDescription:
      "Dal binario alla scheda pubblica: TestFlight, metadata, privacy, review e post-lancio. Basato su prodotti già live.",
    keywords: [
      "pubblicare app App Store",
      "App Store Connect guida",
      "TestFlight submission",
    ],
    excerpt:
      "Pubblicare non è “caricare un IPA”: è qualità, metadata e conformità.",
    keyTakeaway:
      "La submission è qualità + metadata + privacy accurate — non solo un upload.",
    category: "app-store",
    tags: ["app-store", "ios", "release"],
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-15",
    readingMinutes: 10,
    relatedServiceSlugs: [
      "pubblicazione-app-store",
      "sviluppatore-app-ios-bologna",
      "sviluppatore-ios-emilia-romagna",
    ],
    relatedArticleSlugs: [
      "quanto-costa-sviluppare-un-app-2026",
      "come-nasce-un-app-professionale",
      "app-nativa-o-web-app",
    ],
    proofApps: ["andrometrics", "preventivorapido"],
    faq: [
      {
        question: "Apple può rifiutare anche un’app buona?",
        answer:
          "Sì. Metadata, privacy, login demo, contenuti incompleti o linee guida mal interpretate bastano. Si riduce il rischio con preparazione, non con ottimismo.",
      },
    ],
    sections: [
      {
        id: "prerequisiti",
        heading: "Prerequisiti",
        paragraphs: [
          "Account developer, bundle ID, certificati, URL privacy/support raggiungibili, build firmata, device di test. Senza questi, non sei in fase di pubblicazione: sei ancora in setup.",
        ],
      },
      {
        id: "qualita",
        heading: "Qualità della build",
        paragraphs: [
          "Crash noti risolti, stati di errore gestiti, login funzionante, niente placeholder. TestFlight serve a trovare problemi, non a nasconderli.",
        ],
      },
      {
        id: "metadata",
        heading: "Metadata e privacy",
        paragraphs: [
          "Titolo, sottotitolo, descrizione, screenshot e privacy nutrition labels devono descrivere il prodotto reale. AndroMetrics e PreventivoRapido PRO hanno schede pubbliche verificabili: categoria, legal URL, messaging coerente.",
        ],
        bullets: [
          "Privacy policy e support page live",
          "Screenshot che mostrano UI reale",
          "Dichiarazioni dati accurate",
          "Note per App Review se servono account demo",
        ],
      },
      {
        id: "review",
        heading: "Submission e review",
        paragraphs: [
          "Invii, attendi, rispondi con chiarezza se Apple chiede dettagli. Non litigare: documenta. Poi monitora crash e feedback nelle prime settimane.",
        ],
      },
      {
        id: "dopo",
        heading: "Dopo il “Ready for Sale”",
        paragraphs: [
          "Il lancio è l’inizio. Pianifica aggiornamenti OS, fix e piccole evoluzioni. Un prodotto live senza manutenzione decade in fretta.",
        ],
      },
    ],
  },
  {
    slug: "quanto-tempo-serve-per-sviluppare-un-gestionale",
    title: "Quanto tempo serve per sviluppare un gestionale",
    metaTitle: "Tempi per sviluppare un gestionale | Stime realistiche",
    metaDescription:
      "Quanto tempo serve per un gestionale: dal nucleo operativo al prodotto completo. Cosa allunga (e accorcia) il calendar.",
    keywords: [
      "tempi sviluppo gestionale",
      "quanto tempo software gestionale",
      "mvp gestionale",
    ],
    excerpt:
      "I tempi dipendono dal nucleo scelto, non dal desiderio di “avere il gestionale”.",
    keyTakeaway:
      "I tempi dipendono dal nucleo operativo scelto, non dal desiderio di “avere tutto”.",
    category: "costi-e-tempi",
    tags: ["gestionale", "tempi", "mvp"],
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-15",
    readingMinutes: 7,
    relatedServiceSlugs: [
      "software-gestionali-valsamoggia",
      "crm-personalizzato-bologna",
      "software-personalizzato-bologna",
    ],
    relatedArticleSlugs: [
      "quanto-costa-creare-software-personalizzato",
      "crm-personalizzato-o-software-esistente",
      "come-progettare-software-prima-di-scrivere-codice",
    ],
    proofApps: ["preventivorapido"],
    faq: [
      {
        question: "Posso avere un gestionale in un mese?",
        answer:
          "Solo se il nucleo è strettissimo e le decisioni sono rapide. Un gestionale “completo” non sta in un mese realistico.",
      },
      {
        question: "Cosa rallenta di più?",
        answer:
          "Dati sporchi, stakeholder non allineati e integrazioni mal specificate — più della tecnologia scelta.",
      },
    ],
    sections: [
      {
        id: "nucleo",
        heading: "Parti dal nucleo che muove soldi",
        paragraphs: [
          "Per molti professionisti il nucleo è: clienti + documenti + stati. PreventivoRapido PRO mostra quanto valore c’è già in quel perimetro, anche in forma mobile.",
        ],
      },
      {
        id: "timeline",
        heading: "Ordini di grandezza",
        paragraphs: [
          "Un nucleo ben definito può arrivare a un primo uso reale in settimane, non in anni — se discovery e decisioni sono rapide. Un gestionale “completo” con contabilità, magazzino, multi-sede e integrazioni fiscali è un programma di prodotto, non un progetto unico.",
        ],
        bullets: [
          "Discovery e disegno: giorni/settimane",
          "MVP operativo: settimane/pochi mesi",
          "Moduli successivi: roadmap continua",
        ],
      },
      {
        id: "ritardi",
        heading: "Cosa allunga i tempi",
        paragraphs: [
          "Dati sporchi, stakeholder che cambiano idea ogni sprint, integrazioni mal specificate, assenza di un owner. La tecnologia raramente è il collo di bottiglia principale.",
        ],
      },
    ],
  },
  {
    slug: "come-scegliere-sviluppatore-software",
    title: "Come scegliere uno sviluppatore software",
    metaTitle: "Come scegliere uno sviluppatore software | Criteri utili",
    metaDescription:
      "Criteri concreti per scegliere uno sviluppatore o un partner di prodotto: prova, metodo, comunicazione e ownership.",
    keywords: [
      "come scegliere sviluppatore software",
      "valutare software house",
      "freelance sviluppatore iOS",
    ],
    excerpt:
      "Non scegliere per slide. Scegli per prova di prodotto, chiarezza e responsabilità.",
    keyTakeaway:
      "Valuta prova pubblica, metodo e ownership — non solo presentazioni.",
    category: "product",
    tags: ["scelta-partner", "freelance", "processo"],
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-15",
    readingMinutes: 8,
    relatedServiceSlugs: [
      "sviluppatore-software-bologna",
      "consulenza-prodotto-digitale",
      "sviluppatore-app-ios-bologna",
    ],
    relatedArticleSlugs: [
      "errori-che-fanno-fallire-progetto-software",
      "come-progettare-software-prima-di-scrivere-codice",
      "quanto-costa-sviluppare-un-app-2026",
    ],
    proofApps: ["andrometrics", "preventivorapido"],
    faq: [
      {
        question: "Portfolio finto: come riconoscerlo?",
        answer:
          "Chiedi URL pubblici, App Store, ruoli reali. Se non c’è nulla di verificabile, resta un racconto.",
      },
    ],
    sections: [
      {
        id: "prova",
        heading: "Chiedi prova verificabile",
        paragraphs: [
          "Prodotti live, case study onesti, schede App Store. AndroMetrics e PreventivoRapido PRO sono pubblici: puoi giudicare da solo qualità e coerenza.",
        ],
      },
      {
        id: "metodo",
        heading: "Metodo e comunicazione",
        paragraphs: [
          "Vuoi qualcuno che spiega trade-off, scrive ambiti, dice di no alle feature inutili. Diffida di chi accetta tutto al primo meeting.",
        ],
        bullets: [
          "Come gestisce discovery",
          "Come stima e aggiorna le stime",
          "Come documenta decisioni",
          "Chi mantiene dopo il rilascio",
        ],
      },
      {
        id: "fit",
        heading: "Fit sul tuo problema",
        paragraphs: [
          "Uno specialista iOS non è intercambiabile con una web agency. Allinea skill e dominio. Meglio un partner stretto sul problema che un generalista vago.",
        ],
      },
    ],
  },
  {
    slug: "errori-che-fanno-fallire-progetto-software",
    title: "Errori che fanno fallire un progetto software",
    metaTitle: "Errori che fanno fallire un progetto software",
    metaDescription:
      "I fallimenti più comuni nei progetti software: scope, ownership, qualità e adozione — e come evitarli.",
    keywords: [
      "fallimento progetto software",
      "errori sviluppo app",
      "perché falliscono i gestionali",
    ],
    excerpt:
      "I progetti raramente falliscono per “il linguaggio sbagliato”. Falliscono per decisioni evitabili.",
    keyTakeaway:
      "I fallimenti tipici sono scope, owner assente, qualità rimandata e adozione ignorata.",
    category: "product",
    tags: ["rischi", "processo", "mvp"],
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-15",
    readingMinutes: 8,
    relatedServiceSlugs: [
      "consulenza-prodotto-digitale",
      "sviluppatore-software-bologna",
      "software-personalizzato-bologna",
    ],
    relatedArticleSlugs: [
      "come-progettare-software-prima-di-scrivere-codice",
      "come-scegliere-sviluppatore-software",
      "quanto-costa-creare-software-personalizzato",
    ],
    proofApps: ["andrometrics", "preventivorapido"],
    faq: [
      {
        question: "Come si recupera un progetto già in ritardo?",
        answer:
          "Si ricontrae lo scope, si nomina un owner e si congela un MVP onesto. Continuare ad aggiungere feature peggiora il ritardo.",
      },
      {
        question: "Il fallimento è sempre tecnico?",
        answer:
          "Raramente. Più spesso è di prodotto, comunicazione o adozione. Il codice diventa il sintomo.",
      },
    ],
    sections: [
      {
        id: "scope",
        heading: "Scope infinito",
        paragraphs: [
          "Se tutto è priorità, nulla lo è. Congela un MVP e difendilo. I prodotti live del portfolio hanno perimetri chiari: non tentano di essere “la piattaforma di tutto”.",
        ],
      },
      {
        id: "owner",
        heading: "Nessun owner",
        paragraphs: [
          "Senza una persona che decide, il progetto diventa una chat. Serve un product owner lato cliente e una responsabilità tecnica lato sviluppo.",
        ],
      },
      {
        id: "qualita",
        heading: "Qualità rimandata",
        paragraphs: [
          "“Sistemiamo dopo” diventa debito permanente. Privacy, errori, performance e UX vanno trattati come requisiti, non come polish finale.",
        ],
      },
      {
        id: "adozione",
        heading: "Ignorare l’adozione",
        paragraphs: [
          "Un gestionale che nessuno usa è un costo. Progetta onboarding, stati vuoti e formazione minima. Misura l’uso reale.",
        ],
      },
      {
        id: "vendor",
        heading: "Vendor opachi",
        paragraphs: [
          "Lock-in senza accesso al codice, senza documentazione, senza piano di exit: è un rischio di business. Chiariscilo in contratto.",
        ],
      },
    ],
  },
  {
    slug: "crm-personalizzato-o-software-esistente",
    title: "CRM personalizzato o software già esistente?",
    metaTitle: "CRM personalizzato o SaaS? Come decidere",
    metaDescription:
      "Quando conviene un CRM su misura e quando un software esistente. Criteri di costo, adozione e differenziazione.",
    keywords: [
      "CRM personalizzato o Salesforce",
      "CRM su misura vs SaaS",
      "quando fare CRM custom",
    ],
    excerpt:
      "Non è custom vs SaaS: è fit sul processo e costo totale di ownership.",
    keyTakeaway:
      "Confronta fit sul processo e costo totale di ownership, non solo il canone del SaaS.",
    category: "scelte-tecniche",
    tags: ["crm", "saas", "custom"],
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-15",
    readingMinutes: 8,
    relatedServiceSlugs: [
      "crm-personalizzato-bologna",
      "software-personalizzato-bologna",
      "software-gestionali-valsamoggia",
    ],
    relatedArticleSlugs: [
      "quanto-costa-creare-software-personalizzato",
      "quanto-tempo-serve-per-sviluppare-un-gestionale",
      "app-nativa-o-web-app",
    ],
    proofApps: ["preventivorapido"],
    faq: [
      {
        question: "Posso partire SaaS e poi custom?",
        answer:
          "Sì, ed è spesso saggio. Usa il SaaS per validare il processo; costruisci custom solo sui gap strutturali.",
      },
    ],
    sections: [
      {
        id: "saas",
        heading: "Quando il SaaS vince",
        paragraphs: [
          "Processi standard, team che accetta il modo di lavorare dello strumento, budget limitato, necessità di partire subito. Il SaaS eccelle in speed-to-value.",
        ],
      },
      {
        id: "custom",
        heading: "Quando il custom vince",
        paragraphs: [
          "Regole di dominio peculiari, integrazioni profonde con un’app mobile, documenti e stati che nessun CRM configura bene, o un vantaggio competitivo nel processo stesso.",
          "PreventivoRapido PRO non sostituisce un CRM enterprise: risolve un flusso professionale specifico con PDF, firma cliente e uso sul campo.",
        ],
      },
      {
        id: "ibrido",
        heading: "L’approccio ibrido",
        paragraphs: [
          "CRM esistente per pipeline generica + modulo custom per il pezzo che fa male. Evita di riscrivere il mondo per un’eccezione.",
        ],
      },
      {
        id: "tco",
        heading: "Guarda il costo totale",
        paragraphs: [
          "Licenze, implementazione, workaround manuali, formazione, integrazioni fragili: somma tutto. A volte il custom “caro” è più economico del caos operativo.",
        ],
      },
    ],
  },
  {
    slug: "come-nasce-un-app-professionale",
    title: "Come nasce un’app professionale",
    metaTitle: "Come nasce un’app professionale | Dal problema allo store",
    metaDescription:
      "Il percorso reale di un’app professionale: discovery, design, build, qualità e App Store — con riferimenti a prodotti live.",
    keywords: [
      "come nasce un app",
      "sviluppo app professionale",
      "ciclo di vita app iOS",
    ],
    excerpt:
      "Un’app professionale non nasce da un’idea su una slide: nasce da un problema, un metodo e un rilascio.",
    keyTakeaway:
      "Un’app professionale è un ciclo: problema → disegno → build → store → manutenzione.",
    category: "processo",
    tags: ["app", "ios", "processo", "app-store"],
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-15",
    readingMinutes: 9,
    relatedServiceSlugs: [
      "sviluppatore-app-ios-bologna",
      "sviluppatore-app-bologna",
      "pubblicazione-app-store",
    ],
    relatedArticleSlugs: [
      "come-progettare-software-prima-di-scrivere-codice",
      "come-pubblicare-app-su-app-store",
      "quanto-costa-sviluppare-un-app-2026",
    ],
    proofApps: ["andrometrics", "preventivorapido"],
    faq: [
      {
        question: "Serve subito App Store?",
        answer:
          "Se il canale Apple è parte dell’offerta, sì: pianificalo dall’inizio. Se stai ancora validando, un TestFlight chiuso può bastare.",
      },
      {
        question: "Quando consideri l’app “professionale”?",
        answer:
          "Quando regge l’uso reale: errori gestiti, privacy chiara, rilascio controllato e un piano di manutenzione.",
      },
    ],
    sections: [
      {
        id: "problema",
        heading: "1. Un problema meritevole",
        paragraphs: [
          "Se il problema non è frequente o doloroso, l’app non verrà aperta. AndroMetrics risponde a un bisogno di chiarezza su dati sensibili. PreventivoRapido PRO risponde alla velocità sul campo.",
        ],
      },
      {
        id: "disegno",
        heading: "2. Disegno del prodotto",
        paragraphs: [
          "Utenti, flussi, privacy, modello commerciale. Solo dopo: wire e UI. La bellezza senza flusso è inutile.",
        ],
      },
      {
        id: "build",
        heading: "3. Build iterativa",
        paragraphs: [
          "Incrementi rilasciabili, TestFlight, feedback. Architettura leggibile in Swift/SwiftUI quando il target è iOS.",
        ],
      },
      {
        id: "qualita",
        heading: "4. Qualità e store",
        paragraphs: [
          "Test su device, metadata, legal URL, submission. Poi ascolto post-lancio e aggiornamenti. Un’app professionale è un prodotto vivo.",
        ],
      },
      {
        id: "ownership",
        heading: "5. Ownership continua",
        paragraphs: [
          "Chi risponde ai crash? Chi decide la roadmap? Senza ownership, anche un buon lancio decade.",
        ],
      },
    ],
  },
] as const;

export function getAllBlogSlugs(): string[] {
  return blogArticles.map((article) => article.slug);
}

export function getBlogArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((article) => article.slug === slug);
}

export function getBlogCategory(id: BlogCategoryId): BlogCategory | undefined {
  return blogCategories.find((category) => category.id === id);
}

export function getArticlesByCategory(category: BlogCategoryId): BlogArticle[] {
  return blogArticles.filter((article) => article.category === category);
}

export function getArticlesByTag(tag: string): BlogArticle[] {
  const normalized = tag.toLowerCase();
  return blogArticles.filter((article) =>
    article.tags.some((item) => item.toLowerCase() === normalized),
  );
}

export function getRelatedArticles(slugs: readonly string[]): BlogArticle[] {
  return slugs
    .map((slug) => getBlogArticleBySlug(slug))
    .filter((article): article is BlogArticle => Boolean(article));
}

export function getArticlesForService(serviceSlug: string): BlogArticle[] {
  return blogArticles.filter((article) =>
    article.relatedServiceSlugs.includes(serviceSlug),
  );
}

export function getAllBlogTags(): string[] {
  return [...new Set(blogArticles.flatMap((article) => [...article.tags]))].sort(
    (a, b) => a.localeCompare(b, "it"),
  );
}

export function formatBlogDate(isoDate: string): string {
  const date = new Date(`${isoDate}T12:00:00`);
  return new Intl.DateTimeFormat("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
