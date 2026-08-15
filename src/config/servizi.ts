/**
 * SEO Hub — contenuti unici per /servizi e landing locali.
 * Solo claim allineati al portfolio: AndroMetrics + PreventivoRapido PRO.
 */

export type ProofAppId = "andrometrics" | "preventivorapido";

export type ServizioCluster =
  | "hub"
  | "bologna-app"
  | "bologna-software"
  | "bologna-web"
  | "valsamoggia"
  | "regionale"
  | "specialistico";

export interface ServizioFaq {
  question: string;
  answer: string;
}

export interface ServizioProcessStep {
  title: string;
  body: string;
}

export interface ServizioPage {
  slug: string;
  cluster: ServizioCluster;
  /** H1 */
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: readonly string[];
  eyebrow: string;
  lead: string;
  supporting: string;
  problemsTitle: string;
  problems: readonly string[];
  solutionTitle: string;
  solutionBody: string;
  solutionBullets: readonly string[];
  processTitle: string;
  processSteps: readonly ServizioProcessStep[];
  technologies: readonly string[];
  proofTitle: string;
  proofApps: readonly ProofAppId[];
  proofNote: string;
  relatedSlugs: readonly string[];
  faq: readonly ServizioFaq[];
  ctaTitle: string;
  ctaBody: string;
  /** Schema.org Service name */
  serviceName: string;
  areaServed: string;
  hubCardBlurb: string;
}

export interface ServiziHubContent {
  metaTitle: string;
  metaDescription: string;
  keywords: readonly string[];
  title: string;
  lead: string;
  supporting: string;
  pillars: readonly {
    title: string;
    body: string;
    href: string;
  }[];
  faq: readonly ServizioFaq[];
}

export const serviziHub: ServiziHubContent = {
  metaTitle: "Servizi di sviluppo app, software e web",
  metaDescription:
    "Sviluppo app iOS, software personalizzato, CRM e siti web per aziende in Emilia-Romagna. Prodotti reali su App Store: AndroMetrics e PreventivoRapido PRO.",
  keywords: [
    "sviluppatore app Bologna",
    "sviluppo software Emilia-Romagna",
    "CRM personalizzato",
    "app iOS",
    "siti web aziendali",
    "Fernando Piras",
  ],
  title: "Servizi di prodotto digitale",
  lead: "Dal problema operativo al software in produzione — app iOS, gestionali, CRM e superfici web pensate per essere usate ogni giorno.",
  supporting:
    "Lavoro end-to-end: discovery, design, sviluppo, test e rilascio. Le pagine di questa sezione approfondiscono come posso aiutarti in base all’obiettivo e al territorio, con prova concreta nei prodotti già live.",
  pillars: [
    {
      title: "App native",
      body: "iPhone e iPad con Swift e SwiftUI, pubblicate su App Store quando il prodotto è pronto.",
      href: "/servizi/sviluppatore-app-ios-bologna",
    },
    {
      title: "Software e CRM",
      body: "Strumenti su misura per operazioni, clienti e documenti — non template generici.",
      href: "/servizi/crm-personalizzato-bologna",
    },
    {
      title: "Web e siti",
      body: "Siti e web app chiari, performanti e allineati al brand del prodotto.",
      href: "/servizi/realizzazione-siti-web-bologna",
    },
    {
      title: "Consulenza",
      body: "Audit, roadmap e interventi mirati su prodotti già in produzione.",
      href: "/servizi/consulenza-prodotto-digitale",
    },
  ],
  faq: [
    {
      question: "Con chi lavori tipicamente?",
      answer:
        "Con aziende, studi professionali e founder che hanno un problema concreto da risolvere con software — non con brief vaghi da “fare un’app perché sì”.",
    },
    {
      question: "Quali prodotti posso vedere online?",
      answer:
        "AndroMetrics e PreventivoRapido PRO sono pubblici su App Store e documentati in questo portfolio. Sono la prova del metodo end-to-end, non mockup.",
    },
    {
      question: "Lavori solo a Bologna?",
      answer:
        "Sono basato tra Bologna e Valsamoggia, ma i progetti digitali non richiedono presenza quotidiana. Collaboro con clienti in Emilia-Romagna e oltre.",
    },
    {
      question: "Come si inizia?",
      answer:
        "Con una conversazione sul problema, sugli utenti e sui vincoli. Se ha senso, passiamo a discovery e a un piano di rilascio realistico.",
    },
  ],
};

export const servizioPages: readonly ServizioPage[] = [
  {
    slug: "sviluppatore-app-bologna",
    cluster: "bologna-app",
    title: "Sviluppatore app a Bologna",
    metaTitle: "Sviluppatore app Bologna | App iOS e prodotti digitali",
    metaDescription:
      "Sviluppatore app a Bologna per prodotti iOS e flussi digitali end-to-end. Portfolio reale: AndroMetrics e PreventivoRapido PRO su App Store.",
    keywords: [
      "sviluppatore app Bologna",
      "creazione app Bologna",
      "sviluppo applicazioni mobile",
      "app iOS Bologna",
    ],
    eyebrow: "App · Bologna e area metropolitana",
    lead: "Un partner per progettare e rilasciare un’app che risolva un problema reale — non un prototipo da presentare e dimenticare.",
    supporting:
      "Se cerchi uno sviluppatore app a Bologna, ti interessa qualcuno che abbia già portato prodotti in produzione. Io lo faccio: discovery, UX, codice, test e pubblicazione.",
    problemsTitle: "Quando ha senso un’app",
    problems: [
      "Il processo oggi vive su fogli, chat e strumenti scollegati.",
      "I clienti o lo staff hanno bisogno di qualcosa di immediato sul telefono.",
      "Vuoi un prodotto proprio, non dipendere da un template limitato.",
      "Ti serve qualcuno che segua anche il rilascio e la qualità percepita.",
    ],
    solutionTitle: "Come lavoro sul prodotto",
    solutionBody:
      "Parto dal problema e dagli utenti. Poi definisco i flussi, l’architettura e un MVP rilasciabile. L’obiettivo non è “avere un’app”, ma avere uno strumento che regge l’uso quotidiano.",
    solutionBullets: [
      "Ambito chiaro e priorità di business",
      "Interfacce pensate per l’uso reale",
      "Stack coerente con privacy e manutenibilità",
      "Piano di test e rilascio (App Store o web)",
    ],
    processTitle: "Percorso tipico",
    processSteps: [
      {
        title: "Brief operativo",
        body: "Problema, utenti, vincoli legali e metriche di successo.",
      },
      {
        title: "Prototipo navigabile",
        body: "Flussi principali validati prima di investire nello sviluppo pieno.",
      },
      {
        title: "Build iterativa",
        body: "Incrementi misurabili, feedback rapido, qualità controllata.",
      },
      {
        title: "Go-live e follow-up",
        body: "Pubblicazione, monitoraggio e miglioramenti post-lancio.",
      },
    ],
    technologies: [
      "Swift",
      "SwiftUI",
      "StoreKit 2",
      "TypeScript",
      "React",
      "Firebase",
      "Vercel",
    ],
    proofTitle: "Prodotti già live",
    proofApps: ["andrometrics", "preventivorapido"],
    proofNote:
      "AndroMetrics (salute e benessere) e PreventivoRapido PRO (preventivi professionali) dimostrano due contesti diversi: privacy-first e produttività sul campo.",
    relatedSlugs: [
      "sviluppatore-app-ios-bologna",
      "sviluppatore-software-bologna",
      "pubblicazione-app-store",
      "sviluppatore-app-valsamoggia",
    ],
    faq: [
      {
        question: "Sviluppi solo app iOS?",
        answer:
          "Il cuore del mio lavoro è iOS nativo (Swift/SwiftUI). Per esigenze web e CRM affianco stack TypeScript/React, come nei gestionali e nelle superfici di prodotto.",
      },
      {
        question: "Quanto tempo serve per un MVP?",
        answer:
          "Dipende dall’ambito. Dopo la discovery propongo una stima basata sui flussi essenziali, non su un listino generico.",
      },
      {
        question: "Posso vedere esempi?",
        answer:
          "Sì: i case study di AndroMetrics e PreventivoRapido PRO su questo sito, più le schede pubbliche su App Store.",
      },
    ],
    ctaTitle: "Hai un’idea di app da rendere operativa?",
    ctaBody:
      "Raccontami il problema e gli utenti. Valutiamo insieme se un’app è la risposta giusta e quale percorso di rilascio ha senso.",
    serviceName: "Sviluppo applicazioni mobile",
    areaServed: "Bologna, Emilia-Romagna",
    hubCardBlurb:
      "Progettazione e rilascio di app con focus su iOS e prodotti end-to-end.",
  },
  {
    slug: "sviluppatore-app-ios-bologna",
    cluster: "bologna-app",
    title: "Sviluppatore app iOS a Bologna",
    metaTitle: "Sviluppatore app iOS Bologna | Swift e SwiftUI",
    metaDescription:
      "Sviluppatore app iOS a Bologna con Swift e SwiftUI. Prodotti pubblicati su App Store: AndroMetrics e PreventivoRapido PRO.",
    keywords: [
      "sviluppatore app iOS Bologna",
      "sviluppatore iOS Bologna",
      "SwiftUI Bologna",
      "app iPhone Bologna",
    ],
    eyebrow: "iOS nativo · Swift · SwiftUI",
    lead: "App per iPhone e iPad costruite in nativo, con attenzione a performance, accessibilità e regole App Store.",
    supporting:
      "Se ti serve uno sviluppatore iOS a Bologna che conosca il ciclo completo fino alla pubblicazione, qui trovi un metodo collaudato su prodotti reali — non solo snippet SwiftUI.",
    problemsTitle: "Perché scegliere il nativo",
    problems: [
      "Serve integrazione profonda con Apple (HealthKit, StoreKit, widget, Face ID).",
      "La qualità percepita deve stare al passo con le app di sistema.",
      "Vuoi controllo su privacy, offline e aggiornamenti.",
      "Il prodotto deve superare review App Store senza sorprese evitabili.",
    ],
    solutionTitle: "Cosa ottieni con un’app iOS nativa",
    solutionBody:
      "Un’architettura SwiftUI chiara, servizi dedicati (auth, sync, abbonamenti, documenti) e un rilascio gestito: certificati, privacy nutrition labels, test su device reali.",
    solutionBullets: [
      "UI nativa SwiftUI (con bridge UIKit dove serve)",
      "Abbonamenti StoreKit 2 quando il modello lo richiede",
      "Privacy e permessi espliciti",
      "Supporto post-rilascio e iterazioni",
    ],
    processTitle: "Dal brief allo store",
    processSteps: [
      {
        title: "Discovery iOS",
        body: "Capacità Apple necessarie, offline, sync e modello commerciale.",
      },
      {
        title: "Architettura",
        body: "Confini del dominio, persistenza, networking e sicurezza.",
      },
      {
        title: "Sviluppo e QA",
        body: "Build incrementali, test su iPhone/iPad, gestione edge case.",
      },
      {
        title: "App Store Connect",
        body: "Metadata, privacy, screenshot, review e monitoraggio post-lancio.",
      },
    ],
    technologies: [
      "Swift",
      "SwiftUI",
      "UIKit",
      "HealthKit",
      "StoreKit 2",
      "WidgetKit",
      "LocalAuthentication",
      "URLSession",
    ],
    proofTitle: "Case study iOS",
    proofApps: ["andrometrics", "preventivorapido"],
    proofNote:
      "AndroMetrics usa HealthKit, Vision OCR, WidgetKit e StoreKit 2. PreventivoRapido PRO mostra PDF, firma cliente e Sign in with Apple in un contesto business.",
    relatedSlugs: [
      "sviluppatore-app-bologna",
      "sviluppatore-swift-bologna",
      "pubblicazione-app-store",
      "sviluppatore-ios-emilia-romagna",
    ],
    faq: [
      {
        question: "Fai anche Android?",
        answer:
          "Il mio focus produttivo è iOS. Se il progetto richiede anche Android, lo valutiamo in fase di discovery con un piano realistico — senza promettere due piattaforme native allo stesso costo.",
      },
      {
        question: "Gestisci anche abbonamenti in-app?",
        answer:
          "Sì, con StoreKit 2, come nei prodotti già pubblicati. Il modello commerciale va definito prima dello sviluppo.",
      },
      {
        question: "L’app resterà manutenibile?",
        answer:
          "Progetto architetture leggibili e documentazione essenziale proprio per evitare prodotti “usa e getta”.",
      },
    ],
    ctaTitle: "Vuoi un’app iOS pubblicabile?",
    ctaBody:
      "Parliamo di obiettivi, device target e vincoli App Store. Ti propongo un percorso chiaro fino al rilascio.",
    serviceName: "Sviluppo applicazioni iOS",
    areaServed: "Bologna, Emilia-Romagna",
    hubCardBlurb:
      "App iPhone e iPad native con Swift/SwiftUI e rilascio App Store.",
  },
  {
    slug: "sviluppatore-software-bologna",
    cluster: "bologna-software",
    title: "Sviluppatore software a Bologna",
    metaTitle: "Sviluppatore software Bologna | Prodotti digitali end-to-end",
    metaDescription:
      "Sviluppatore software a Bologna per prodotti digitali end-to-end: app, gestionali e CRM. Evidenza: AndroMetrics e PreventivoRapido PRO.",
    keywords: [
      "sviluppatore software Bologna",
      "software house Bologna freelance",
      "sviluppo software Emilia-Romagna",
    ],
    eyebrow: "Software su misura · end-to-end",
    lead: "Software che riduce attrito operativo: meno passaggi manuali, più chiarezza per chi lavora e per chi compra.",
    supporting:
      "Come sviluppatore software a Bologna non vendo “giornate di codice”. Progetto prodotti: dal problema di business all’interfaccia, fino al deploy e agli aggiornamenti.",
    problemsTitle: "Segnali tipici",
    problems: [
      "Processi critici ancora su Excel e WhatsApp.",
      "Strumenti generici che non si adattano al modo in cui lavori.",
      "Troppi fornitori e nessun owner del prodotto.",
      "Debito tecnico che blocca ogni nuova richiesta.",
    ],
    solutionTitle: "Un unico filo dal brief al rilascio",
    solutionBody:
      "Allineo obiettivi di business, UX e stack tecnico. Preferisco rilasci frequenti e misurabili: ogni incremento deve ridurre un rischio o sbloccare un valore.",
    solutionBullets: [
      "Roadmap realistica e priorità esplicite",
      "Stack scelto per manutenibilità, non per moda",
      "Qualità percepibile anche da non tecnici",
      "Continuità dopo il go-live",
    ],
    processTitle: "Metodo di lavoro",
    processSteps: [
      {
        title: "Analisi",
        body: "Mappatura del problema, stakeholder e vincoli.",
      },
      {
        title: "Disegno della soluzione",
        body: "Flussi, dati e confini del sistema.",
      },
      {
        title: "Implementazione",
        body: "Sviluppo iterativo con checkpoint di accettazione.",
      },
      {
        title: "Produzione",
        body: "Deploy, formazione essenziale e piano di evoluzione.",
      },
    ],
    technologies: [
      "Swift",
      "SwiftUI",
      "TypeScript",
      "React",
      "PostgreSQL",
      "Firebase",
      "Vercel",
    ],
    proofTitle: "Software già in produzione",
    proofApps: ["andrometrics", "preventivorapido"],
    proofNote:
      "Due prodotti App Store diversi per dominio (salute vs. produttività professionale) ma coerenti nel metodo: ownership end-to-end e attenzione alla privacy.",
    relatedSlugs: [
      "software-personalizzato-bologna",
      "crm-personalizzato-bologna",
      "sviluppatore-app-bologna",
      "consulenza-prodotto-digitale",
    ],
    faq: [
      {
        question: "Lavori come software house o come freelance?",
        answer:
          "Come professionista indipendente con ownership completa del prodotto. Per team più ampi, coordino il perimetro che mi compete in modo trasparente.",
      },
      {
        question: "Prendi progetti già iniziati?",
        answer:
          "Sì, dopo un audit tecnico e di prodotto. A volte conviene rifattorizzare; a volte conviene ripartire da un nucleo pulito.",
      },
      {
        question: "Come misuri il successo?",
        answer:
          "Con criteri concordati: tempo risparmiato, conversioni, stabilità, feedback utenti — non solo “feature consegnate”.",
      },
    ],
    ctaTitle: "Serve software che lavori davvero?",
    ctaBody:
      "Descrivi il processo che vuoi migliorare. Ti dico se ha senso un prodotto custom e con quale ambito iniziale.",
    serviceName: "Sviluppo software personalizzato",
    areaServed: "Bologna, Emilia-Romagna",
    hubCardBlurb:
      "Progettazione e sviluppo di software su misura, dall’analisi al deploy.",
  },
  {
    slug: "software-personalizzato-bologna",
    cluster: "bologna-software",
    title: "Software personalizzato a Bologna",
    metaTitle: "Software personalizzato Bologna | Su misura per il tuo lavoro",
    metaDescription:
      "Software personalizzato a Bologna per processi aziendali e professionali. Esempi reali: PreventivoRapido PRO e AndroMetrics su App Store.",
    keywords: [
      "software personalizzato Bologna",
      "software su misura Bologna",
      "gestionale personalizzato",
    ],
    eyebrow: "Su misura · non template",
    lead: "Quando gli strumenti generici non bastano, serve software disegnato sul tuo modo di lavorare.",
    supporting:
      "Il software personalizzato ha senso se riduce errori, tempi o dipendenze. Ti aiuto a capire se conviene costruirlo — e a realizzarlo senza gonfiare lo scope.",
    problemsTitle: "Quando il “già pronto” non basta",
    problems: [
      "Il gestionale standard non mappa i tuoi documenti o ruoli.",
      "Perdi tempo a copiare dati tra sistemi.",
      "Hai regole di business che nessun SaaS configura bene.",
      "Vuoi un’esperienza mobile o web specifica per il tuo team.",
    ],
    solutionTitle: "Personalizzato, ma disciplinato",
    solutionBody:
      "Definiamo il nucleo indispensabile, poi evolviamo. Evito monolitici “tutto e subito”: meglio un prodotto stretto che funziona, poi moduli successivi.",
    solutionBullets: [
      "Dominio modellato sul tuo processo",
      "Interfacce per chi userà il sistema ogni giorno",
      "Integrazioni solo dove creano valore",
      "Documentazione essenziale per far vivere il prodotto",
    ],
    processTitle: "Come nasce un prodotto custom",
    processSteps: [
      {
        title: "Workshop operativo",
        body: "Osserviamo il lavoro reale, non solo il desiderio dichiarato.",
      },
      {
        title: "MVP mirato",
        body: "Il minimo che produce valore misurabile.",
      },
      {
        title: "Validazione",
        body: "Uso reale, feedback, aggiustamenti.",
      },
      {
        title: "Estensione",
        body: "Moduli successivi solo se giustificati dai dati d’uso.",
      },
    ],
    technologies: [
      "SwiftUI",
      "TypeScript",
      "React",
      "Next.js",
      "PostgreSQL",
      "Keychain / Security",
    ],
    proofTitle: "Esempi di software “su misura”",
    proofApps: ["preventivorapido", "andrometrics"],
    proofNote:
      "PreventivoRapido PRO è pensato per artigiani e freelance sul campo. AndroMetrics è un prodotto verticalissimo su fertilità e benessere — entrambi custom, non white-label.",
    relatedSlugs: [
      "sviluppatore-software-bologna",
      "crm-personalizzato-bologna",
      "software-gestionali-valsamoggia",
      "web-app-bologna",
    ],
    faq: [
      {
        question: "È sempre meglio del SaaS?",
        answer:
          "No. Se un SaaS copre il 90% del bisogno a costo sostenibile, spesso conviene. Il custom nasce quando il gap operativo è strutturale.",
      },
      {
        question: "Chi possiede il codice?",
        answer:
          "Si definisce in contratto. L’obiettivo è trasparenza: niente lock-in opachi.",
      },
      {
        question: "Posso partire piccolo?",
        answer:
          "È il modo preferito. Un nucleo solido batte un progetto ambizioso e incompleto.",
      },
    ],
    ctaTitle: "Valutiamo insieme se serve un custom",
    ctaBody:
      "Porta il processo che oggi ti costa tempo. Ti dico se ha senso costruirlo e quale MVP avrebbe impatto.",
    serviceName: "Software personalizzato",
    areaServed: "Bologna, Emilia-Romagna",
    hubCardBlurb:
      "Software disegnato sul processo reale, con MVP disciplinati.",
  },
  {
    slug: "crm-personalizzato-bologna",
    cluster: "bologna-software",
    title: "CRM personalizzato a Bologna",
    metaTitle: "CRM personalizzato Bologna | Clienti, pipeline e operazioni",
    metaDescription:
      "CRM e gestionali personalizzati a Bologna per pipeline, clienti e operazioni. Approccio prodotto basato su casi reali di software business.",
    keywords: [
      "CRM personalizzato Bologna",
      "gestionale clienti Bologna",
      "CRM su misura Emilia-Romagna",
    ],
    eyebrow: "CRM & operazioni",
    lead: "Un CRM serve se diventa il posto dove il team lavora — non un archivio che nessuno aggiorna.",
    supporting:
      "Progetto CRM e moduli gestionali su misura: anagrafiche, stati, documenti, reminder e integrazioni con app mobile quando servono davvero.",
    problemsTitle: "Problemi che un CRM deve risolvere",
    problems: [
      "Lead e clienti sparsi tra inbox e fogli.",
      "Nessuna visione chiara di stato e priorità.",
      "Documenti scollegati dalle pratiche.",
      "Lo staff mobile non ha un flusso semplice sul telefono.",
    ],
    solutionTitle: "CRM come prodotto operativo",
    solutionBody:
      "Modelliamo pipeline e ruoli sul tuo contesto. Preferisco interfacce sobrie e veloci: meno campi obbligatori, più azioni che chiudono il lavoro.",
    solutionBullets: [
      "Anagrafiche e stati coerenti",
      "Dashboard per decisioni rapide",
      "Automazioni leggere (reminder, notifiche)",
      "Possibile app companion iOS per chi è sul campo",
    ],
    processTitle: "Roadmap CRM",
    processSteps: [
      {
        title: "Mappa del lavoro",
        body: "Chi tocca i dati, con quale frequenza e con quali errori tipici.",
      },
      {
        title: "Modello dati",
        body: "Entità, relazioni e permessi senza complessità inutile.",
      },
      {
        title: "Interfaccia operativa",
        body: "Schermate pensate per l’uso quotidiano, non per la demo.",
      },
      {
        title: "Adozione",
        body: "Onboarding dello staff e metriche di utilizzo.",
      },
    ],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "PostgreSQL",
      "Firebase",
      "SwiftUI",
    ],
    proofTitle: "Correlati al mondo business",
    proofApps: ["preventivorapido"],
    proofNote:
      "PreventivoRapido PRO mostra come clienti, documenti e stati possano vivere in un prodotto mobile professionale. Per CRM web estesi, applico lo stesso rigore di dominio e UX.",
    relatedSlugs: [
      "software-personalizzato-bologna",
      "software-gestionali-valsamoggia",
      "web-app-bologna",
      "sviluppatore-software-bologna",
    ],
    faq: [
      {
        question: "Parti da zero o integri HubSpot/Salesforce?",
        answer:
          "Dipende. A volte conviene configurare uno strumento esistente; a volte il dominio è troppo specifico. Lo decidiamo sui fatti, non a priori.",
      },
      {
        question: "Il CRM può parlare con un’app iOS?",
        answer:
          "Sì. È uno degli scenari che gestisco meglio: mobile per il campo, web per l’ufficio.",
      },
      {
        question: "Quanto è complessa la migrazione dati?",
        answer:
          "La stimiamo in discovery. Spesso il valore sta nel pulire i dati mentre si importa, non solo nel “spostarli”.",
      },
    ],
    ctaTitle: "Vuoi un CRM che il team usi davvero?",
    ctaBody:
      "Raccontami pipeline e ruoli. Individuiamo il nucleo da costruire per primo.",
    serviceName: "CRM personalizzato",
    areaServed: "Bologna, Emilia-Romagna",
    hubCardBlurb:
      "CRM e moduli operativi su misura, anche con companion iOS.",
  },
  {
    slug: "realizzazione-siti-web-bologna",
    cluster: "bologna-web",
    title: "Realizzazione siti web a Bologna",
    metaTitle: "Realizzazione siti web Bologna | Siti professionali e veloci",
    metaDescription:
      "Realizzazione siti web a Bologna: siti professionali, chiari e performanti, allineati a prodotti digitali reali. Portfolio Fernando Piras.",
    keywords: [
      "realizzazione siti web Bologna",
      "creazione siti web Bologna",
      "web design Bologna",
    ],
    eyebrow: "Siti web · chiarezza e performance",
    lead: "Un sito che spiega cosa fai, genera fiducia e non diventa un progetto infinito.",
    supporting:
      "Progetto siti web professionali con struttura SEO sana, caricamento rapido e contenuti utili — lo stesso standard di qualità che applico ai prodotti App Store.",
    problemsTitle: "Cosa non funziona nei siti mediocri",
    problems: [
      "Messaggio confuso: il visitatore non capisce l’offerta in pochi secondi.",
      "Pagine lente o non usabili da telefono.",
      "Nessun percorso verso il contatto.",
      "Contenuti duplicati o keyword forzate.",
    ],
    solutionTitle: "Sito come strumento commerciale",
    solutionBody:
      "Definiamo obiettivi (contatti, prenotazioni, credibilità), architettura dell’informazione e un design sobrio. Poi implementiamo con stack moderno e attenzione a Core Web Vitals.",
    solutionBullets: [
      "Struttura chiara e mobile-first",
      "Metadata, sitemap e contenuti non duplicati",
      "Performance e accessibilità di base",
      "CTA verso conversazione o discovery",
    ],
    processTitle: "Fasi del progetto web",
    processSteps: [
      {
        title: "Posizionamento",
        body: "Pubblico, offerta, toni e prove di credibilità.",
      },
      {
        title: "Architettura",
        body: "Pagine, gerarchia e collegamenti interni.",
      },
      {
        title: "Design e build",
        body: "UI coerente, componenti riutilizzabili, ottimizzazione media.",
      },
      {
        title: "Go-live",
        body: "Deploy, verifica SEO tecnica e monitoraggio base.",
      },
    ],
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel"],
    proofTitle: "Standard di prodotto",
    proofApps: ["andrometrics", "preventivorapido"],
    proofNote:
      "Questo stesso sito e i case study di prodotto riflettono lo standard: chiarezza, prova reale, niente fumo. I prodotti live restano AndroMetrics e PreventivoRapido PRO.",
    relatedSlugs: [
      "web-app-bologna",
      "realizzazione-siti-web-valsamoggia",
      "sviluppatore-software-bologna",
      "consulenza-prodotto-digitale",
    ],
    faq: [
      {
        question: "Fai anche e-commerce?",
        answer:
          "Posso progettare vetrine e flussi di acquisizione. Per marketplace complessi valuto stack e partner in base allo scope.",
      },
      {
        question: "Il sito sarà modificabile da me?",
        answer:
          "Dipende dal modello scelto. Preferisco soluzioni manutenibili: se serve un CMS, lo integriamo con disciplina.",
      },
      {
        question: "Lavori sulla SEO?",
        answer:
          "Sì, sulla SEO tecnica e sulla struttura dei contenuti. Non prometto ranking miracolosi: costruisco basi solide.",
      },
    ],
    ctaTitle: "Serve un sito all’altezza del tuo lavoro?",
    ctaBody:
      "Scrivimi obiettivi e pubblico. Ti propongo struttura e priorità senza sprechi.",
    serviceName: "Realizzazione siti web",
    areaServed: "Bologna, Emilia-Romagna",
    hubCardBlurb:
      "Siti professionali, veloci e orientati alla conversione.",
  },
  {
    slug: "web-app-bologna",
    cluster: "bologna-web",
    title: "Web app a Bologna",
    metaTitle: "Web app Bologna | Applicazioni web su misura",
    metaDescription:
      "Progettazione e sviluppo di web app a Bologna: dashboard, portali e strumenti operativi con stack TypeScript/React.",
    keywords: [
      "web app Bologna",
      "sviluppo web app Emilia-Romagna",
      "applicazioni web su misura",
    ],
    eyebrow: "Web app · strumenti operativi",
    lead: "Quando un sito non basta e serve un’applicazione nel browser: stati, ruoli, dati e flussi di lavoro.",
    supporting:
      "Sviluppo web app con TypeScript e React/Next.js per team che lavorano da desktop — eventualmente collegate a un’app iOS per chi è in mobilità.",
    problemsTitle: "Casi d’uso tipici",
    problems: [
      "Dashboard interne con permessi diversi.",
      "Portali clienti per documenti o stati pratica.",
      "Back-office che deve parlare con un’app mobile.",
      "Flussi di firma, preventivo o ordine non coperti da SaaS.",
    ],
    solutionTitle: "Web app come prodotto",
    solutionBody:
      "Tratto la web app come un prodotto: onboarding, stati d’errore, performance e sicurezza. Niente demoni “solo frontend” scollegati dalla realtà dei dati.",
    solutionBullets: [
      "Modelli di dominio chiari",
      "Auth e permessi espliciti",
      "UI reattiva e accessibile",
      "Deploy e osservabilità di base",
    ],
    processTitle: "Ciclo di delivery",
    processSteps: [
      {
        title: "Casi d’uso",
        body: "Scenari critici e criteri di accettazione.",
      },
      {
        title: "API e dati",
        body: "Contratti stabili tra client e backend.",
      },
      {
        title: "UI incrementale",
        body: "Schermate prioritarie prima, rifiniture dopo.",
      },
      {
        title: "Rilascio",
        body: "Ambienti, rollback e checklist sicurezza.",
      },
    ],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "PostgreSQL",
      "Firebase",
      "Vercel",
    ],
    proofTitle: "Continuità con i prodotti mobile",
    proofApps: ["preventivorapido", "andrometrics"],
    proofNote:
      "Nei prodotti business e salute lavoro spesso con superfici multiple. PreventivoRapido PRO, ad esempio, contempla sync verso companion web quando l’utente lo configura.",
    relatedSlugs: [
      "realizzazione-siti-web-bologna",
      "crm-personalizzato-bologna",
      "software-personalizzato-bologna",
      "sviluppatore-app-ios-bologna",
    ],
    faq: [
      {
        question: "Web app o app nativa?",
        answer:
          "Se servono capacità Apple profonde o un’esperienza “da App Store”, punta al nativo. Se il lavoro è soprattutto da ufficio, la web app è spesso più efficiente.",
      },
      {
        question: "Usi solo Firebase?",
        answer:
          "No. Firebase è un’opzione; PostgreSQL e API custom lo sono altrettanto. Scelgo in base a requisiti e costo di ownership.",
      },
      {
        question: "Quanto è scalabile?",
        answer:
          "Progetto per il carico atteso e per crescere senza riscrivere tutto. La scalabilità prematura è un costo inutile.",
      },
    ],
    ctaTitle: "Hai bisogno di una web app operativa?",
    ctaBody:
      "Descrivi utenti e flussi. Ti indico stack e MVP senza over-engineering.",
    serviceName: "Sviluppo web application",
    areaServed: "Bologna, Emilia-Romagna",
    hubCardBlurb:
      "Applicazioni web su misura per operazioni e portali clienti.",
  },
  {
    slug: "sviluppatore-app-valsamoggia",
    cluster: "valsamoggia",
    title: "Sviluppatore app a Valsamoggia",
    metaTitle: "Sviluppatore app Valsamoggia | Prodotti iOS e digitali",
    metaDescription:
      "Sviluppatore app a Valsamoggia e area bolognese. App e prodotti digitali con prova su App Store: AndroMetrics e PreventivoRapido PRO.",
    keywords: [
      "sviluppatore app Valsamoggia",
      "app Valsamoggia",
      "sviluppo app Bazzano",
    ],
    eyebrow: "Valsamoggia · collina bolognese",
    lead: "Vicino alle imprese di Valsamoggia che vogliono digitalizzare processi senza perdere il controllo del prodotto.",
    supporting:
      "Lavoro tra Valsamoggia e Bologna: posso confrontarmi di persona quando serve, ma il valore resta nel software rilasciato — non nelle riunioni infinite.",
    problemsTitle: "Esigenze tipiche sul territorio",
    problems: [
      "Artigiani e PMI che vogliono un’app o un gestionale leggero.",
      "Servizi locali che devono essere trovati online e gestiti meglio.",
      "Team piccoli che non possono permettersi una software house pesante.",
      "Bisogno di un interlocutore unico fino al rilascio.",
    ],
    solutionTitle: "Prodotto digitale a portata di PMI",
    solutionBody:
      "Ambito realistico, MVP utile, stack manutenibile. Ti aiuto a evitare sia il “fai da te fragile” sia il progetto oversize.",
    solutionBullets: [
      "Confronto diretto sul problema",
      "Priorità da business, non da feature list",
      "Rilascio su App Store o web",
      "Supporto evolutivo",
    ],
    processTitle: "Collaborazione locale",
    processSteps: [
      {
        title: "Incontro di allineamento",
        body: "In presenza o in call: obiettivo e vincoli.",
      },
      {
        title: "Proposta di ambito",
        body: "Cosa entra nel primo rilascio e cosa resta fuori.",
      },
      {
        title: "Costruzione",
        body: "Aggiornamenti regolari e demo su device reali.",
      },
      {
        title: "Lancio",
        body: "Pubblicazione e istruzioni operative per il team.",
      },
    ],
    technologies: ["Swift", "SwiftUI", "TypeScript", "React", "StoreKit 2"],
    proofTitle: "Prova di delivery",
    proofApps: ["preventivorapido", "andrometrics"],
    proofNote:
      "PreventivoRapido PRO nasce proprio per professionisti sul campo. AndroMetrics mostra standard elevati di privacy e UX su un dominio sensibile.",
    relatedSlugs: [
      "sviluppatore-app-bologna",
      "software-gestionali-valsamoggia",
      "realizzazione-siti-web-valsamoggia",
      "sviluppatore-app-ios-bologna",
    ],
    faq: [
      {
        question: "Serve incontrarsi sempre di persona?",
        answer:
          "No. Utile all’inizio e nei momenti chiave; lo sviluppo procede in modo remoto strutturato.",
      },
      {
        question: "Lavori con attività di Bazzano, Savigno, Monteveglio…?",
        answer:
          "Sì, in tutta Valsamoggia e hinterland. Il territorio conta per la relazione; il prodotto resta digitale.",
      },
      {
        question: "Posso partire da un sito e poi fare l’app?",
        answer:
          "Spesso è il percorso più sano. Definiamo la sequenza in base al ROI.",
      },
    ],
    ctaTitle: "Sei in Valsamoggia e ti serve un’app?",
    ctaBody:
      "Scrivimi due righe sul problema. Valutiamo insieme il percorso più corto verso un rilascio utile.",
    serviceName: "Sviluppo applicazioni mobile",
    areaServed: "Valsamoggia, Bologna",
    hubCardBlurb:
      "App e prodotti digitali per imprese di Valsamoggia e dintorni.",
  },
  {
    slug: "realizzazione-siti-web-valsamoggia",
    cluster: "valsamoggia",
    title: "Realizzazione siti web a Valsamoggia",
    metaTitle: "Siti web Valsamoggia | Presenza online professionale",
    metaDescription:
      "Realizzazione siti web a Valsamoggia: siti chiari, veloci e orientati ai contatti per attività locali e PMI.",
    keywords: [
      "siti web Valsamoggia",
      "realizzazione siti web Valsamoggia",
      "sito internet Bazzano",
    ],
    eyebrow: "Presenza online · Valsamoggia",
    lead: "Un sito che rappresenta bene la tua attività locale e rende facile contattarti.",
    supporting:
      "Per ristoranti, studi, artigiani e servizi in Valsamoggia progetto siti sobri, leggibili da telefono e ottimizzati senza keyword stuffing.",
    problemsTitle: "Cosa chiedono i clienti locali",
    problems: [
      "Orari, contatti e servizi introvabili.",
      "Sito vecchio o non adattato al mobile.",
      "Nessuna prova di qualità (foto, percorsi, recensioni).",
      "Dipendenza da pagine social facilmente dimenticate.",
    ],
    solutionTitle: "Sito locale, standard professionale",
    solutionBody:
      "Poche pagine fatte bene: chi sei, cosa offri, dove sei, come contattarti. Se serve, aggiungiamo sezioni servizi o portfolio senza gonfiare.",
    solutionBullets: [
      "Mobile-first",
      "Contatti evidenti",
      "Mappe e indicazioni chiare",
      "Base SEO locale corretta",
    ],
    processTitle: "Dal brief al sito online",
    processSteps: [
      {
        title: "Raccolta contenuti",
        body: "Testi, foto, orari, servizi.",
      },
      {
        title: "Struttura",
        body: "Pagine e gerarchia essenziali.",
      },
      {
        title: "Realizzazione",
        body: "Design coerente e performance.",
      },
      {
        title: "Pubblicazione",
        body: "Dominio, HTTPS, verifica su telefono reale.",
      },
    ],
    technologies: ["Next.js", "TypeScript", "React", "Vercel"],
    proofTitle: "Qualità di riferimento",
    proofApps: ["andrometrics", "preventivorapido"],
    proofNote:
      "Lo stesso rigore di chiarezza e fiducia che uso nei prodotti App Store vale per i siti locali: niente template rumorosi.",
    relatedSlugs: [
      "realizzazione-siti-web-bologna",
      "sviluppatore-app-valsamoggia",
      "software-gestionali-valsamoggia",
      "web-app-bologna",
    ],
    faq: [
      {
        question: "Gestisci anche il dominio?",
        answer:
          "Posso accompanyarti su DNS e hosting. Preferisco che il dominio resti intestato a te.",
      },
      {
        question: "Serve Google Business Profile?",
        answer:
          "Spesso sì, ed è complementare al sito. Posso allineare NAP e link, senza sostituire la scheda Google.",
      },
      {
        question: "Aggiornamenti futuri?",
        answer:
          "Definiamo un modello leggero: piccole modifiche o interventi a progetto.",
      },
    ],
    ctaTitle: "Vuoi un sito all’altezza della tua attività?",
    ctaBody:
      "Inviami settore e obiettivo principale (chiamate, prenotazioni, credibilità). Ti propongo una struttura essenziale.",
    serviceName: "Realizzazione siti web",
    areaServed: "Valsamoggia, Bologna",
    hubCardBlurb:
      "Siti chiari e veloci per attività locali in Valsamoggia.",
  },
  {
    slug: "software-gestionali-valsamoggia",
    cluster: "valsamoggia",
    title: "Software gestionali a Valsamoggia",
    metaTitle: "Software gestionali Valsamoggia | Operazioni più semplici",
    metaDescription:
      "Software gestionali a Valsamoggia per PMI e professionisti: processi, documenti e clienti sotto controllo.",
    keywords: [
      "software gestionale Valsamoggia",
      "gestionale PMI Bologna",
      "software artigiani",
    ],
    eyebrow: "Gestionali · PMI e professionisti",
    lead: "Meno caos operativo, più controllo su clienti, documenti e stati di lavoro.",
    supporting:
      "Per realtà di Valsamoggia e hinterland bolognese progetto gestionali leggeri: ciò che serve ogni giorno, senza moduli inutili.",
    problemsTitle: "Dove si perde tempo oggi",
    problems: [
      "Preventivi e fatture sparsi in cartelle diverse.",
      "Clienti senza anagrafica unica.",
      "Stati lavoro solo “a memoria”.",
      "Difficoltà a passare informazioni tra campo e ufficio.",
    ],
    solutionTitle: "Gestionale snello",
    solutionBody:
      "Partiamo dai documenti e dagli stati che muovono il fatturato. Se serve mobilità, integriamo un’app iOS — come dimostrato da PreventivoRapido PRO.",
    solutionBullets: [
      "Anagrafiche e documenti collegati",
      "Flussi di stato semplici",
      "Export e backup",
      "Possibile estensione mobile",
    ],
    processTitle: "Approccio al gestionale",
    processSteps: [
      {
        title: "Osservazione",
        body: "Come lavorate davvero, non come dice il manuale.",
      },
      {
        title: "Perimetro",
        body: "Moduli del primo rilascio.",
      },
      {
        title: "Build",
        body: "Interfaccia operativa e dati puliti.",
      },
      {
        title: "Adozione",
        body: "Formazione breve e aggiustamenti.",
      },
    ],
    technologies: [
      "SwiftUI",
      "TypeScript",
      "React",
      "PostgreSQL",
      "PDF workflows",
    ],
    proofTitle: "Riferimento produttività",
    proofApps: ["preventivorapido"],
    proofNote:
      "PreventivoRapido PRO è un esempio concreto di gestionale mobile per preventivi, clienti e documenti professionali.",
    relatedSlugs: [
      "crm-personalizzato-bologna",
      "software-personalizzato-bologna",
      "sviluppatore-app-valsamoggia",
      "sviluppatore-software-bologna",
    ],
    faq: [
      {
        question: "Sostituisci il commercialista o lo SDI?",
        answer:
          "No. Posso semplificare preventivi, proforma e flussi interni; gli adempimenti fiscali restano nel perimetro corretto.",
      },
      {
        question: "È adatto a una ditta individuale?",
        answer:
          "Sì, se il dolore operativo è reale. Il gestionale deve ripagarsi in tempo risparmiato.",
      },
      {
        question: "Posso usarlo da iPhone?",
        answer:
          "Se è un requisito, lo progettiamo mobile-first o con app nativa dedicata.",
      },
    ],
    ctaTitle: "Vuoi mettere ordine ai processi?",
    ctaBody:
      "Raccontami cosa gestisci oggi a mano. Individuiamo il modulo che sblocca più valore.",
    serviceName: "Software gestionale",
    areaServed: "Valsamoggia, Bologna",
    hubCardBlurb:
      "Gestionali snelli per PMI e professionisti del territorio.",
  },
  {
    slug: "sviluppatore-ios-emilia-romagna",
    cluster: "regionale",
    title: "Sviluppatore iOS in Emilia-Romagna",
    metaTitle: "Sviluppatore iOS Emilia-Romagna | Swift e App Store",
    metaDescription:
      "Sviluppatore iOS in Emilia-Romagna: app native Swift/SwiftUI con prodotti live su App Store. Basato tra Bologna e Valsamoggia.",
    keywords: [
      "sviluppatore iOS Emilia-Romagna",
      "sviluppatore Swift Emilia-Romagna",
      "app iOS Modena Bologna",
    ],
    eyebrow: "Emilia-Romagna · iOS",
    lead: "Un referente iOS nella regione per prodotti Apple pubblicati e manutenuti con standard professionali.",
    supporting:
      "Collaboro con aziende in Emilia-Romagna che vogliono un’app iPhone/iPad fatta bene — con ownership chiara fino ad App Store Connect.",
    problemsTitle: "Perché cercare un profilo regionale",
    problems: [
      "Serve qualcuno raggiungibile nello stesso fuso e contesto di mercato.",
      "Vuoi evitare vendor lontani che non conoscono App Store Review.",
      "Il prodotto richiede continuità, non un “lancio e sparizione”.",
      "Preferisci parlare italiano di prodotto, non solo di ticket tecnici.",
    ],
    solutionTitle: "iOS end-to-end in regione",
    solutionBody:
      "Offro progettazione, sviluppo SwiftUI, integrazione framework Apple e rilascio. La distanza geografica non è un limite; la chiarezza di ambito sì.",
    solutionBullets: [
      "Focus iOS nativo",
      "Esperienza di review e metadata",
      "Privacy by design",
      "Iterazione post-lancio",
    ],
    processTitle: "Collaborazione regionale",
    processSteps: [
      {
        title: "Kickoff",
        body: "Obiettivi di prodotto e vincoli Apple.",
      },
      {
        title: "Design tecnico",
        body: "Architettura e piano di rilascio.",
      },
      {
        title: "Delivery",
        body: "Sprint mirati e build TestFlight.",
      },
      {
        title: "Store",
        body: "Submission, monitoraggio, aggiornamenti.",
      },
    ],
    technologies: [
      "Swift",
      "SwiftUI",
      "StoreKit 2",
      "HealthKit",
      "WidgetKit",
      "Vision",
    ],
    proofTitle: "Prodotti pubblici",
    proofApps: ["andrometrics", "preventivorapido"],
    proofNote:
      "Entrambi i prodotti sono consultabili su App Store sotto lo sviluppatore Fernando Piras — evidenza diretta, non brochure.",
    relatedSlugs: [
      "sviluppatore-app-ios-bologna",
      "sviluppatore-swift-bologna",
      "pubblicazione-app-store",
      "sviluppatore-app-bologna",
    ],
    faq: [
      {
        question: "Copri anche Parma, Modena, Reggio?",
        answer:
          "Sì, via remote strutturato. Incontri in presenza si organizzano quando aggiungono valore.",
      },
      {
        question: "Hai un team?",
        answer:
          "Lavoro come owner del prodotto. Per skill complementari coinvolgo collaboratori in modo esplicito.",
      },
      {
        question: "Che differenza c’è rispetto a una software house?",
        answer:
          "Meno overhead, più responsabilità diretta sul risultato. Ideale per prodotti focalizzati.",
      },
    ],
    ctaTitle: "Cerchi uno sviluppatore iOS in regione?",
    ctaBody:
      "Condividi l’idea e i vincoli. Ti rispondo con un parere onesto su fattibilità e percorso.",
    serviceName: "Sviluppo applicazioni iOS",
    areaServed: "Emilia-Romagna",
    hubCardBlurb:
      "Referente iOS in Emilia-Romagna per app native e App Store.",
  },
  {
    slug: "sviluppatore-swift-bologna",
    cluster: "specialistico",
    title: "Sviluppatore Swift a Bologna",
    metaTitle: "Sviluppatore Swift Bologna | SwiftUI e architetture iOS",
    metaDescription:
      "Sviluppatore Swift a Bologna specializzato in SwiftUI e architetture iOS. Prodotti live: AndroMetrics e PreventivoRapido PRO.",
    keywords: [
      "sviluppatore Swift Bologna",
      "programmatore SwiftUI",
      "consulenza Swift iOS",
    ],
    eyebrow: "Swift · SwiftUI · architettura",
    lead: "Codice Swift chiaro, UI SwiftUI e architetture che restano leggibili dopo il lancio.",
    supporting:
      "Se ti serve uno sviluppatore Swift a Bologna per un prodotto nuovo o per mettere ordine a un’app esistente, lavoro su qualità del codice e del prodotto insieme.",
    problemsTitle: "Quando serve un profilo Swift solido",
    problems: [
      "View SwiftUI cresciute senza struttura.",
      "Logica di business mescolata all’UI.",
      "Difficoltà ad aggiungere feature senza regressioni.",
      "Necessità di framework Apple usati correttamente.",
    ],
    solutionTitle: "Swift come mestiere",
    solutionBody:
      "Organizzo il codice intorno al dominio, con test dove contano e attenzione a performance e accessibilità. SwiftUI prima; UIKit solo dove porta valore.",
    solutionBullets: [
      "Architetture pragmatiche",
      "Uso corretto di concurrency e lifecycle",
      "Integrazione StoreKit, HealthKit, Vision, ecc.",
      "Code review e handover documentato",
    ],
    processTitle: "Intervento Swift",
    processSteps: [
      {
        title: "Audit",
        body: "Mappa del codice e dei rischi.",
      },
      {
        title: "Piano",
        body: "Cosa stabilizzare prima di accelerare.",
      },
      {
        title: "Implementazione",
        body: "Feature o refactor mirati.",
      },
      {
        title: "Verifica",
        body: "Test su device e criteri di accettazione.",
      },
    ],
    technologies: [
      "Swift",
      "SwiftUI",
      "UIKit",
      "StoreKit 2",
      "HealthKit",
      "Vision",
      "LocalAuthentication",
    ],
    proofTitle: "Swift in produzione",
    proofApps: ["andrometrics", "preventivorapido"],
    proofNote:
      "Entrambi i prodotti sono app SwiftUI complete, con servizi reali (PDF, HealthKit, auth, abbonamenti) — non playground.",
    relatedSlugs: [
      "sviluppatore-app-ios-bologna",
      "sviluppatore-ios-emilia-romagna",
      "pubblicazione-app-store",
      "consulenza-prodotto-digitale",
    ],
    faq: [
      {
        question: "Fai solo greenfield?",
        answer:
          "No. Intervento spesso su codebase esistenti per sbloccare evoluzione.",
      },
      {
        question: "Usi SwiftData / Core Data?",
        answer:
          "Scelgo la persistenza in base al dominio. Nei prodotti pubblici documentati uso modelli local-first coerenti con le scelte verificate — senza claim non supportati.",
      },
      {
        question: "Puoi formare il team interno?",
        answer:
          "Sì, con sessioni mirate su SwiftUI e architettura, se richiesto.",
      },
    ],
    ctaTitle: "Serve un intervento Swift serio?",
    ctaBody:
      "Condividi repo (privato) o obiettivi. Ti propongo un piano di intervento concreto.",
    serviceName: "Sviluppo Swift / iOS",
    areaServed: "Bologna, Emilia-Romagna",
    hubCardBlurb:
      "Specialista Swift/SwiftUI per prodotti iOS e refactor mirati.",
  },
  {
    slug: "pubblicazione-app-store",
    cluster: "specialistico",
    title: "Pubblicazione su App Store",
    metaTitle: "Pubblicazione App Store | Dal binario alla review",
    metaDescription:
      "Supporto alla pubblicazione su App Store: metadata, privacy, TestFlight e review. Esperienza reale con prodotti live.",
    keywords: [
      "pubblicazione App Store",
      "App Store Connect",
      "rilascio app iOS",
      "TestFlight",
    ],
    eyebrow: "App Store Connect · review",
    lead: "Portare un’app dallo sviluppo alla scheda pubblica richiede metodo: non solo un upload.",
    supporting:
      "Ti accompagno su metadata, privacy, screenshot, TestFlight e gestione review — con l’esperienza di chi ha già prodotti live sullo store.",
    problemsTitle: "Dove si inceppa il rilascio",
    problems: [
      "Privacy nutrition labels incomplete o inaccurate.",
      "Screenshot e copy che non superano la review.",
      "Rifiuti per linee guida poco chiare al team.",
      "Nessun piano di aggiornamento post-lancio.",
    ],
    solutionTitle: "Rilascio come disciplina",
    solutionBody:
      "Checklist concreta: account, certificati, build, metadata, URL legali, test su device, submission. Poi monitoraggio delle metriche essenziali.",
    solutionBullets: [
      "Allineamento alle App Store Review Guidelines",
      "URL privacy/support corretti",
      "Materiali marketing coerenti col prodotto",
      "Gestione dei feedback di review",
    ],
    processTitle: "Checklist di go-live",
    processSteps: [
      {
        title: "Readiness",
        body: "Build stabile, crash noti risolti, QA su device.",
      },
      {
        title: "Store assets",
        body: "Testi, screenshot, categorie, keyword ASO basiche.",
      },
      {
        title: "Submission",
        body: "Invio, comunicazione con App Review se serve.",
      },
      {
        title: "Post-launch",
        body: "Monitoraggio, hotfix, roadmap aggiornamenti.",
      },
    ],
    technologies: ["Xcode", "App Store Connect", "TestFlight", "StoreKit 2"],
    proofTitle: "Prodotti già pubblicati",
    proofApps: ["andrometrics", "preventivorapido"],
    proofNote:
      "Le schede App Store di AndroMetrics e PreventivoRapido PRO sono pubbliche: puoi verificarne metadata, categoria e presenza legale.",
    relatedSlugs: [
      "sviluppatore-app-ios-bologna",
      "sviluppatore-ios-emilia-romagna",
      "sviluppatore-swift-bologna",
      "consulenza-prodotto-digitale",
    ],
    faq: [
      {
        question: "Garantisci l’approvazione?",
        answer:
          "Nessuno può garantire al 100% la review Apple. Riduco i rischi con preparazione corretta e risposte chiare a App Review.",
      },
      {
        question: "Puoi pubblicare un’app sviluppata da altri?",
        answer:
          "Sì, dopo un audit di qualità e conformità. Se il codice non è release-ready, lo diciamo prima.",
      },
      {
        question: "Ti occupi anche di ASO avanzata?",
        answer:
          "Copro le basi solide (metadata, creatività, coerenza). Campagne ASO aggressive non sono il focus.",
      },
    ],
    ctaTitle: "Pronto per App Store — o quasi?",
    ctaBody:
      "Condividi lo stato del progetto. Ti dico cosa manca prima della submission.",
    serviceName: "Pubblicazione App Store",
    areaServed: "Italia",
    hubCardBlurb:
      "Dal binario alla scheda pubblica: review, metadata e go-live.",
  },
  {
    slug: "consulenza-prodotto-digitale",
    cluster: "specialistico",
    title: "Consulenza prodotto digitale",
    metaTitle: "Consulenza prodotto digitale | Audit, roadmap, scaling",
    metaDescription:
      "Consulenza su prodotto digitale: audit UX/tecnico, roadmap e scaling. Basata su esperienza di prodotti App Store reali.",
    keywords: [
      "consulenza prodotto digitale",
      "audit app iOS",
      "roadmap software",
      "product engineering",
    ],
    eyebrow: "Audit · roadmap · scaling",
    lead: "Quando il prodotto esiste già ma non cresce — o cresce in modo fragile — serve una lettura onesta.",
    supporting:
      "Offro consulenza di prodotto e tecnica: cosa tenere, cosa tagliare, dove investire. Nessuna slide decorativa senza decisioni.",
    problemsTitle: "Situazioni tipiche",
    problems: [
      "Feature accumulate senza priorità.",
      "UX confusa e supporto clienti in aumento.",
      "Debito tecnico che blocca ogni release.",
      "Dubbi su monetizzazione o privacy.",
    ],
    solutionTitle: "Consulenza orientata alle decisioni",
    solutionBody:
      "Analizzo prodotto, codice e metriche disponibili. Consegno una roadmap realistica e, se richiesto, eseguo gli interventi prioritari.",
    solutionBullets: [
      "Audit UX e tecnico",
      "Priorità a impatto/rischio",
      "Piano di rilascio sostenibile",
      "Opzione di execution successiva",
    ],
    processTitle: "Formato di lavoro",
    processSteps: [
      {
        title: "Intake",
        body: "Accessi, obiettivi, vincoli.",
      },
      {
        title: "Analisi",
        body: "Review prodotto e codebase.",
      },
      {
        title: "Report decisionale",
        body: "Raccomandazioni concrete, non generiche.",
      },
      {
        title: "Follow-through",
        body: "Opzionale: implementazione delle priorità.",
      },
    ],
    technologies: [
      "Swift",
      "SwiftUI",
      "TypeScript",
      "Product analytics (ove presenti)",
      "App Store Connect",
    ],
    proofTitle: "Esperienza da builder",
    proofApps: ["andrometrics", "preventivorapido"],
    proofNote:
      "La consulenza si fonda sul fatto di aver progettato, rilasciato e mantenuto prodotti propri — non solo di averli osservati da fuori.",
    relatedSlugs: [
      "sviluppatore-software-bologna",
      "pubblicazione-app-store",
      "sviluppatore-swift-bologna",
      "sviluppatore-app-ios-bologna",
    ],
    faq: [
      {
        question: "Quanto dura un audit?",
        answer:
          "Di solito da pochi giorni a un paio di settimane, in base a complessità e accessi.",
      },
      {
        question: "Lavori solo su iOS?",
        answer:
          "Il focus è iOS e prodotti adiacenti (web/CRM). Per stack lontani dal mio dominio lo dico subito.",
      },
      {
        question: "Puoi entrare in un team esistente?",
        answer:
          "Sì, come advisor o come contributor su un perimetro chiaro.",
      },
    ],
    ctaTitle: "Vuoi una lettura onesta del prodotto?",
    ctaBody:
      "Raccontami lo stato attuale e l’obiettivo. Ti propongo il formato di consulenza più utile.",
    serviceName: "Consulenza prodotto digitale",
    areaServed: "Italia",
    hubCardBlurb:
      "Audit, roadmap e scaling per prodotti digitali già in campo.",
  },
] as const;

export function getAllServizioSlugs(): string[] {
  return servizioPages.map((page) => page.slug);
}

export function getServizioBySlug(slug: string): ServizioPage | undefined {
  return servizioPages.find((page) => page.slug === slug);
}

export function getRelatedServizi(slugs: readonly string[]): ServizioPage[] {
  return slugs
    .map((slug) => getServizioBySlug(slug))
    .filter((page): page is ServizioPage => Boolean(page));
}

export function getServiziByCluster(cluster: ServizioCluster): ServizioPage[] {
  return servizioPages.filter((page) => page.cluster === cluster);
}
