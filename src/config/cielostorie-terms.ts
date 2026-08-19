import type {
  CieloStorieLegalDocument,
  CieloStorieLegalInline,
  CieloStorieLegalLocale,
} from "@/config/cielostorie-legal-types";
import {
  CIELOSTORIE_PRIVACY_EN_PATH,
  CIELOSTORIE_PRIVACY_PATH,
  CIELOSTORIE_SUPPORT_EN_PATH,
  CIELOSTORIE_SUPPORT_PATH,
  CIELOSTORIE_TERMS_EN_PATH,
  CIELOSTORIE_TERMS_PATH,
  CIELOSTORIE_TERMS_UPDATED_ISO,
} from "@/config/cielostorie-legal-paths";

export {
  CIELOSTORIE_TERMS_EN_PATH,
  CIELOSTORIE_TERMS_PATH,
  CIELOSTORIE_TERMS_UPDATED_ISO,
} from "@/config/cielostorie-legal-paths";

const privacyIT: CieloStorieLegalInline[] = [
  "Per il trattamento dei dati personali si applica l’",
  { href: CIELOSTORIE_PRIVACY_PATH, label: "Informativa sulla privacy" },
  ".",
];

const privacyEN: CieloStorieLegalInline[] = [
  "Personal data processing is governed by the ",
  { href: CIELOSTORIE_PRIVACY_EN_PATH, label: "Privacy Policy" },
  ".",
];

const supportIT: CieloStorieLegalInline[] = [
  "Per assistenza tecnica consulta la pagina ",
  { href: CIELOSTORIE_SUPPORT_PATH, label: "Supporto CieloStorie" },
  ".",
];

const supportEN: CieloStorieLegalInline[] = [
  "For technical assistance, see ",
  { href: CIELOSTORIE_SUPPORT_EN_PATH, label: "CieloStorie Support" },
  ".",
];

export function getCieloStorieTermsDocument(
  locale: CieloStorieLegalLocale,
  contactEmail: string,
): CieloStorieLegalDocument {
  return locale === "en"
    ? englishDocument(contactEmail)
    : italianDocument(contactEmail);
}

function italianDocument(contactEmail: string): CieloStorieLegalDocument {
  return {
    kind: "terms",
    locale: "it",
    htmlLang: "it",
    product: "CieloStorie",
    eyebrow: "CieloStorie",
    title: "Termini di utilizzo",
    lead:
      "Questi termini regolano l’uso dell’app CieloStorie per iOS e iPadOS. Descrivono cosa offre l’app, come funzionano storie gratuite, pubblicità e acquisto opzionale “Rimuovi pubblicità”, e quali responsabilità restano tue o del genitore.",
    updatedLabel: "Ultimo aggiornamento",
    updatedDisplay: "19 agosto 2026",
    updatedISO: CIELOSTORIE_TERMS_UPDATED_ISO,
    tocLabel: "Indice",
    languageLabel: "Lingua",
    languageCurrent: "Italiano",
    otherLanguageLabel: "English",
    otherLanguageHref: CIELOSTORIE_TERMS_EN_PATH,
    breadcrumbHome: "Home",
    breadcrumbLegal: "Legal",
    breadcrumbCurrent: "Termini CieloStorie",
    metaTitle: "Termini di utilizzo — CieloStorie",
    metaDescription:
      "Termini di utilizzo di CieloStorie: storie gratuite, uso familiare, pubblicità, acquisto una tantum Rimuovi pubblicità e proprietà intellettuale.",
    contactEmail,
    sections: [
      {
        id: "introduzione",
        heading: "Introduzione",
        paragraphs: [
          [
            "CieloStorie è un’app di storie illustrate per bambini e famiglie, fornita da Fernando Piras. Usando l’app accetti questi Termini di utilizzo nella versione pubblicata su fernandopiras.com.",
          ],
          [
            "Se non accetti i Termini, non usare l’app. Per domande puoi scrivere a ",
            { href: `mailto:${contactEmail}`, label: contactEmail },
            ".",
          ],
          privacyIT,
        ],
      },
      {
        id: "servizio",
        heading: "Descrizione del servizio",
        paragraphs: [
          [
            "CieloStorie offre storie da leggere nel Reader, profili locali per bambini, preferiti, progressi di lettura, raccomandazioni e la funzione “Il Mio Cielo” che visualizza le storie completate.",
          ],
          [
            "L’app non richiede un account online CieloStorie. Il catalogo, le illustrazioni e i paesaggi sonori sono inclusi nell’app; non c’è streaming di storie o audio da un server CieloStorie.",
          ],
        ],
      },
      {
        id: "famiglie",
        heading: "Uso familiare e responsabilità genitoriale",
        paragraphs: [
          [
            "CieloStorie è pensata per un uso familiare con la supervisione di un adulto. L’area genitori è protetta da un parental gate (verifica aritmetica). Acquisti, ripristino acquisti, opzioni privacy pubblicitarie e gestione profili sono disponibili solo in quell’area.",
          ],
          [
            "Se un bambino usa l’app, il genitore o tutore è responsabile della supervisione, delle scelte sui profili locali, del consenso pubblicitario dove applicabile e di eventuali acquisti in-app effettuati con l’Apple ID del dispositivo.",
          ],
        ],
      },
      {
        id: "storie-gratuite",
        heading: "Accesso alle storie",
        paragraphs: [
          [
            "Tutte le storie restano leggibili senza acquisto. CieloStorie non vende storie singole né abbonamenti per sbloccare contenuti narrativi.",
          ],
          [
            "Alcune storie possono essere adattamenti di opere di dominio pubblico o contenuti originali. I titoli e le illustrazioni di CieloStorie restano protetti come indicato nella sezione Proprietà intellettuale.",
          ],
        ],
      },
      {
        id: "pubblicita",
        heading: "Pubblicità",
        paragraphs: [
          [
            "La versione gratuita può mostrare annunci Google Mobile Ads (AdMob). Gli annunci possono comparire come banner in Home e in Esplora, e come interstitial solo dopo la chiusura del Reader, secondo regole di frequenza.",
          ],
          [
            "Non ci sono annunci nel Reader, tra le pagine del Reader, sulla schermata di completamento, in Il Mio Cielo, nell’area genitori né durante il parental gate.",
          ],
          [
            "La pubblicità è configurata come child-directed, con contenuto massimo “G” e richieste non personalizzate. Dove richiesto, Google User Messaging Platform (UMP) gestisce il consenso. Se il consenso non consente richieste pubblicitarie, l’app non carica annunci ma le storie restano leggibili.",
          ],
          privacyIT,
        ],
      },
      {
        id: "acquisti",
        heading: "Rimuovi pubblicità",
        paragraphs: [
          [
            "“Rimuovi pubblicità” è un acquisto in-app una tantum, non consumabile (product ID: com.cielostorie.app.remove_ads). Non è un abbonamento. Rimuove la pubblicità prevista dall’app; non sblocca storie aggiuntive.",
          ],
          [
            "Il prezzo è quello mostrato dall’App Store al momento dell’acquisto, nella valuta del tuo storefront Apple. CieloStorie non fissa un prezzo fisso in questi Termini.",
          ],
          [
            "Pagamento, fatturazione e ricevute sono gestiti da Apple tramite StoreKit. CieloStorie non riceve dati della carta. Il ripristino acquisti è disponibile nell’area genitori.",
          ],
        ],
      },
      {
        id: "rimborsi",
        heading: "Rimborsi e rapporto con Apple",
        paragraphs: [
          [
            "Eventuali rimborsi o contestazioni di pagamento seguono le regole dell’App Store e di Apple, non un sistema di rimborso gestito direttamente da CieloStorie.",
          ],
          [
            "Per problemi di fatturazione o ricevute contatta Apple (Impostazioni Apple ID, assistenza App Store) o usa i canali di ripristino acquisti dell’app.",
          ],
        ],
      },
      {
        id: "proprieta",
        heading: "Proprietà intellettuale",
        paragraphs: [
          [
            "Testi originali, illustrazioni, layout, interfaccia, suoni, marchio CieloStorie e gli altri elementi creativi dell’app sono di Fernando Piras o concessi in licenza per l’app. Non acquisisci diritti su di essi oltre all’uso personale consentito.",
          ],
          [
            "Alcune storie possono basarsi su opere di dominio pubblico. Gli adattamenti, le traduzioni, le illustrazioni e la presentazione in CieloStorie restano protetti nella misura prevista dalla legge.",
          ],
        ],
      },
      {
        id: "uso-consentito",
        heading: "Uso consentito e vietato",
        paragraphs: [
          [
            "Puoi usare CieloStorie per la lettura personale o familiare sul dispositivo. Non puoi copiare, ridistribuire, rivendere, decompilare o estrarre sistematicamente storie, artwork o audio dall’app, salvo quanto consentito dalla legge inderogabile.",
          ],
          [
            "Non devi usare l’app per attività illecite, per aggirare il parental gate, per interferire con annunci o acquisti in modi non previsti, né per tentare accesso non autorizzato a sistemi di terze parti collegati all’app.",
          ],
        ],
      },
      {
        id: "disponibilita",
        heading: "Disponibilità, aggiornamenti e modifiche",
        paragraphs: [
          [
            "CieloStorie può essere aggiornata, modificata o interrotta in qualsiasi momento. Possiamo aggiungere o rimuovere storie, cambiare l’interfaccia o regolare la frequenza pubblicitaria, rispettando quanto comunicato nell’app e nei documenti legali.",
          ],
          [
            "Non garantiamo che l’app sia sempre priva di errori, sempre compatibile con ogni dispositivo futuro o sempre disponibile in ogni Paese.",
          ],
        ],
      },
      {
        id: "garanzie",
        heading: "Esclusioni di garanzia",
        paragraphs: [
          [
            "Nella misura massima consentita dalla legge applicabile, CieloStorie è fornita “così com’è”. Non forniamo garanzie implicite di commerciabilità, idoneità a uno scopo particolare o assenza di errori, oltre ai diritti inderogabili previsti per i consumatori.",
          ],
        ],
      },
      {
        id: "responsabilita",
        heading: "Limitazione di responsabilità",
        paragraphs: [
          [
            "Nella misura massima consentita dalla legge, Fernando Piras non è responsabile per danni indiretti, perdita di dati locali non salvati altrove, interruzioni di servizi di terze parti (Apple, Google) o uso dell’app al di fuori di quanto descritto in questi Termini.",
          ],
          [
            "Nulla in questi Termini limita responsabilità che non possono essere escluse per legge, inclusi i diritti del consumatore ove applicabili.",
          ],
        ],
      },
      {
        id: "legge",
        heading: "Legge applicabile",
        paragraphs: [
          [
            "Salvo diversa previsione inderogabile per i consumatori, questi Termini sono regolati dalla legge italiana. Foro competente, ove ammesso, è quello del consumatore o, per utenti professionali, quello di Bologna, salvo norme imperative.",
          ],
        ],
      },
      {
        id: "modifiche",
        heading: "Modifiche ai Termini",
        paragraphs: [
          [
            "Possiamo aggiornare questi Termini se cambia il prodotto o se dobbiamo chiarire una pratica. La data in cima indica l’ultimo aggiornamento. La versione pubblicata su fernandopiras.com è quella di riferimento.",
          ],
        ],
      },
      {
        id: "contatti",
        heading: "Contatti",
        paragraphs: [
          [
            "Per questi Termini: ",
            { href: `mailto:${contactEmail}`, label: contactEmail },
            ". Fornitore: Fernando Piras. Prodotto: CieloStorie (iOS e iPadOS).",
          ],
          supportIT,
        ],
      },
    ],
  };
}

function englishDocument(contactEmail: string): CieloStorieLegalDocument {
  return {
    kind: "terms",
    locale: "en",
    htmlLang: "en",
    product: "CieloStorie",
    eyebrow: "CieloStorie",
    title: "Terms of Use",
    lead:
      "These Terms govern use of the CieloStorie iOS and iPadOS app. They explain what the app provides, how free stories, advertising, and the optional Remove Ads one-time purchase work, and which responsibilities remain with you or a parent.",
    updatedLabel: "Last updated",
    updatedDisplay: "19 August 2026",
    updatedISO: CIELOSTORIE_TERMS_UPDATED_ISO,
    tocLabel: "Contents",
    languageLabel: "Language",
    languageCurrent: "English",
    otherLanguageLabel: "Italiano",
    otherLanguageHref: CIELOSTORIE_TERMS_PATH,
    breadcrumbHome: "Home",
    breadcrumbLegal: "Legal",
    breadcrumbCurrent: "CieloStorie Terms",
    metaTitle: "Terms of Use — CieloStorie",
    metaDescription:
      "CieloStorie Terms of Use: free stories, family use, advertising, one-time Remove Ads purchase, and intellectual property.",
    contactEmail,
    sections: [
      {
        id: "introduction",
        heading: "Introduction",
        paragraphs: [
          [
            "CieloStorie is an illustrated-story app for children and families, provided by Fernando Piras. By using the app you accept these Terms of Use as published on fernandopiras.com.",
          ],
          [
            "If you do not accept the Terms, do not use the app. Questions: ",
            { href: `mailto:${contactEmail}`, label: contactEmail },
            ".",
          ],
          privacyEN,
        ],
      },
      {
        id: "service",
        heading: "Service description",
        paragraphs: [
          [
            "CieloStorie offers stories in the Reader, local child profiles, favourites, reading progress, recommendations, and “My Sky” showing completed stories.",
          ],
          [
            "The app does not require a CieloStorie online account. The catalogue, artwork, and soundscapes ship inside the app; there is no CieloStorie server streaming of stories or audio.",
          ],
        ],
      },
      {
        id: "families",
        heading: "Family use and parental responsibility",
        paragraphs: [
          [
            "CieloStorie is intended for family use with adult supervision. The Parent Area is protected by a parental gate (arithmetic check). Purchases, restore, advertising privacy options, and profile management are only available there.",
          ],
          [
            "If a child uses the app, the parent or guardian is responsible for supervision, local profile choices, advertising consent where applicable, and any in-app purchases made with the device Apple ID.",
          ],
        ],
      },
      {
        id: "free-stories",
        heading: "Access to stories",
        paragraphs: [
          [
            "Every story remains readable without purchase. CieloStorie does not sell individual stories or subscriptions to unlock narrative content.",
          ],
          [
            "Some stories may adapt public-domain works or be original content. CieloStorie titles and artwork remain protected as described under Intellectual property.",
          ],
        ],
      },
      {
        id: "advertising",
        heading: "Advertising",
        paragraphs: [
          [
            "The free version may show Google Mobile Ads (AdMob). Ads may appear as banners on Home and Explore, and as interstitials only after closing the Reader, subject to frequency rules.",
          ],
          [
            "There are no ads in the Reader, between Reader pages, on the completion screen, in My Sky, in the Parent Area, or during the parental gate.",
          ],
          [
            "Advertising is configured as child-directed, G-rated maximum content, and non-personalized requests. Where required, Google User Messaging Platform (UMP) handles consent. If consent does not allow ad requests, the app does not load ads but stories remain readable.",
          ],
          privacyEN,
        ],
      },
      {
        id: "purchases",
        heading: "Remove Ads",
        paragraphs: [
          [
            "Remove Ads is a one-time, non-consumable in-app purchase (product ID: com.cielostorie.app.remove_ads). It is not a subscription. It removes advertising surfaces in the app; it does not unlock additional stories.",
          ],
          [
            "The price is the price Apple shows at purchase time in your Apple storefront currency. CieloStorie does not fix a single price in these Terms.",
          ],
          [
            "Payment, billing, and receipts are handled by Apple through StoreKit. CieloStorie does not receive card details. Restore Purchases is available in the Parent Area.",
          ],
        ],
      },
      {
        id: "refunds",
        heading: "Refunds and Apple",
        paragraphs: [
          [
            "Refunds or billing disputes follow App Store and Apple rules, not a refund system operated directly by CieloStorie.",
          ],
          [
            "For billing or receipt issues contact Apple (Apple ID settings, App Store support) or use the app’s restore purchase flows.",
          ],
        ],
      },
      {
        id: "intellectual-property",
        heading: "Intellectual property",
        paragraphs: [
          [
            "Original text, illustrations, layout, interface, sounds, the CieloStorie brand, and other creative elements are owned by Fernando Piras or licensed for the app. You do not acquire rights beyond permitted personal use.",
          ],
          [
            "Some stories may be based on public-domain works. Adaptations, translations, illustrations, and presentation in CieloStorie remain protected to the extent allowed by law.",
          ],
        ],
      },
      {
        id: "permitted-use",
        heading: "Permitted and prohibited use",
        paragraphs: [
          [
            "You may use CieloStorie for personal or family reading on your device. You may not copy, redistribute, resell, decompile, or systematically extract stories, artwork, or audio from the app except as mandatory law allows.",
          ],
          [
            "You must not use the app for unlawful activity, to bypass the parental gate, to interfere with ads or purchases in unintended ways, or to attempt unauthorized access to third-party systems connected to the app.",
          ],
        ],
      },
      {
        id: "availability",
        heading: "Availability, updates, and changes",
        paragraphs: [
          [
            "CieloStorie may be updated, changed, or discontinued at any time. We may add or remove stories, change the interface, or adjust ad frequency, consistent with in-app behaviour and legal documents.",
          ],
          [
            "We do not guarantee the app will always be error-free, compatible with every future device, or available in every country.",
          ],
        ],
      },
      {
        id: "warranties",
        heading: "Disclaimer of warranties",
        paragraphs: [
          [
            "To the maximum extent permitted by applicable law, CieloStorie is provided “as is”. We disclaim implied warranties of merchantability, fitness for a particular purpose, or error-free operation, except for non-waivable consumer rights.",
          ],
        ],
      },
      {
        id: "liability",
        heading: "Limitation of liability",
        paragraphs: [
          [
            "To the maximum extent permitted by law, Fernando Piras is not liable for indirect damages, loss of local data not backed up elsewhere, third-party service interruptions (Apple, Google), or use of the app outside what these Terms describe.",
          ],
          [
            "Nothing in these Terms limits liability that cannot be excluded by law, including applicable consumer rights.",
          ],
        ],
      },
      {
        id: "governing-law",
        heading: "Governing law",
        paragraphs: [
          [
            "Unless mandatory consumer rules require otherwise, these Terms are governed by Italian law. Competent courts, where permitted, are those of the consumer’s residence or, for business users, Bologna, subject to mandatory rules.",
          ],
        ],
      },
      {
        id: "changes",
        heading: "Changes to these Terms",
        paragraphs: [
          [
            "We may update these Terms if the product changes or we need to clarify a practice. The date at the top shows the last update. The version published on fernandopiras.com is the reference version.",
          ],
        ],
      },
      {
        id: "contact",
        heading: "Contact",
        paragraphs: [
          [
            "For these Terms: ",
            { href: `mailto:${contactEmail}`, label: contactEmail },
            ". Provider: Fernando Piras. Product: CieloStorie (iOS and iPadOS).",
          ],
          supportEN,
        ],
      },
    ],
  };
}
