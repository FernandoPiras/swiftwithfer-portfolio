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
      "Questi termini regolano l’uso dell’app CieloStorie per iOS e iPadOS. Descrivono cosa offre l’app, come funziona nella versione attuale gratuita e senza pubblicità, e quali responsabilità restano tue o del genitore.",
    updatedLabel: "Ultimo aggiornamento",
    updatedDisplay: "25 agosto 2026",
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
      "Termini di utilizzo di CieloStorie: app gratuita, uso familiare, storie e funzioni senza acquisti in-app e proprietà intellettuale.",
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
        id: "gratuito",
        heading: "Versione gratuita",
        paragraphs: [
          [
            "La versione attuale di CieloStorie è fornita gratuitamente. Tutte le storie e le funzioni attualmente disponibili nell’app possono essere usate senza acquisti in-app, abbonamenti o paywall.",
          ],
          [
            "L’app non include pubblicità, SDK pubblicitari o monetizzazione tramite annunci. Non sono previsti acquisti in-app nella versione attuale.",
          ],
        ],
      },
      {
        id: "famiglie",
        heading: "Uso familiare e responsabilità genitoriale",
        paragraphs: [
          [
            "CieloStorie è pensata per un uso familiare con la supervisione di un adulto. L’Area Genitori è protetta da un parental gate: una verifica aritmetica per l’accesso all’Area Genitori e alle azioni riservate agli adulti. Gestione profili e preferenze di lettura sono disponibili solo in quell’area.",
          ],
          [
            "Il parental gate non è «Parental Controls» né Age Assurance / verifica dell’età secondo il questionario Age Rating di Apple: non verifica l’età e non fornisce controlli parentali di sistema.",
          ],
          [
            "Se un bambino usa l’app, il genitore o tutore è responsabile della supervisione e delle scelte sui profili locali e sulle preferenze dell’app.",
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
            "Non devi usare l’app per attività illecite, per aggirare il parental gate o per tentare accesso non autorizzato a sistemi di terze parti collegati all’app.",
          ],
        ],
      },
      {
        id: "disponibilita",
        heading: "Disponibilità, aggiornamenti e modifiche",
        paragraphs: [
          [
            "CieloStorie può essere aggiornata, modificata o interrotta in qualsiasi momento. Possiamo aggiungere o rimuovere storie, cambiare l’interfaccia o regolare le funzioni, rispettando quanto comunicato nell’app e nei documenti legali.",
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
            "Nella misura massima consentita dalla legge, Fernando Piras non è responsabile per danni indiretti, perdita di dati locali non salvati altrove, interruzioni di servizi di terze parti (inclusa Apple) o uso dell’app al di fuori di quanto descritto in questi Termini.",
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
      "These Terms govern use of the CieloStorie iOS and iPadOS app. They explain what the app provides, how the current free version with no advertising works, and which responsibilities remain with you or a parent.",
    updatedLabel: "Last updated",
    updatedDisplay: "25 August 2026",
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
      "CieloStorie Terms of Use: free app, family use, stories and features without in-app purchases, and intellectual property.",
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
        id: "free",
        heading: "Free version",
        paragraphs: [
          [
            "The current version of CieloStorie is provided free of charge. Every story and feature currently available in the app can be used without in-app purchases, subscriptions, or paywalls.",
          ],
          [
            "The app does not include advertising, advertising SDKs, or ad-based monetization. There are no in-app purchases in the current version.",
          ],
        ],
      },
      {
        id: "families",
        heading: "Family use and parental responsibility",
        paragraphs: [
          [
            "CieloStorie is intended for family use with adult supervision. The Parent Area is protected by a parental gate: an arithmetic check that gates access to the Parent Area and adult-only actions. Profile management and reading preferences are only available there.",
          ],
          [
            "The parental gate is not Apple Age Rating “Parental Controls” and is not Age Assurance / age verification: it does not verify age and does not provide system parental-controls features.",
          ],
          [
            "If a child uses the app, the parent or guardian is responsible for supervision and for choices about local profiles and app preferences.",
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
            "You must not use the app for unlawful activity, to bypass the parental gate, or to attempt unauthorized access to third-party systems connected to the app.",
          ],
        ],
      },
      {
        id: "availability",
        heading: "Availability, updates, and changes",
        paragraphs: [
          [
            "CieloStorie may be updated, changed, or discontinued at any time. We may add or remove stories, change the interface, or adjust features, consistent with in-app behaviour and legal documents.",
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
            "To the maximum extent permitted by law, Fernando Piras is not liable for indirect damages, loss of local data not backed up elsewhere, third-party service interruptions (including Apple), or use of the app outside what these Terms describe.",
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
