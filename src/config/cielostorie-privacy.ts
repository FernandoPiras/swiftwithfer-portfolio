import type {
  CieloStorieLegalDocument,
  CieloStorieLegalInline,
  CieloStorieLegalLocale,
  CieloStorieLegalSection,
} from "@/config/cielostorie-legal-types";
import {
  CIELOSTORIE_PRIVACY_EN_PATH,
  CIELOSTORIE_PRIVACY_PATH,
  CIELOSTORIE_PRIVACY_UPDATED_ISO,
} from "@/config/cielostorie-legal-paths";

export {
  CIELOSTORIE_PRIVACY_EN_LEGACY_PATH,
  CIELOSTORIE_PRIVACY_EN_PATH,
  CIELOSTORIE_PRIVACY_LEGACY_PATH,
  CIELOSTORIE_PRIVACY_PATH,
  CIELOSTORIE_PRIVACY_UPDATED_ISO,
} from "@/config/cielostorie-legal-paths";

export type PrivacyLocale = CieloStorieLegalLocale;
export type PrivacyInline = CieloStorieLegalInline;
export type PrivacySection = CieloStorieLegalSection;
export type PrivacyDocument = CieloStorieLegalDocument;

const GARANTE = "https://www.garanteprivacy.it";

export function getCieloStoriePrivacyDocument(
  locale: PrivacyLocale,
  contactEmail: string,
): PrivacyDocument {
  return locale === "en"
    ? englishDocument(contactEmail)
    : italianDocument(contactEmail);
}

function italianDocument(contactEmail: string): PrivacyDocument {
  return {
    kind: "privacy",
    locale: "it",
    htmlLang: "it",
    product: "CieloStorie",
    eyebrow: "CieloStorie",
    title: "Informativa sulla privacy",
    lead:
      "Questa informativa descrive come CieloStorie tratta le informazioni nel contesto dell’app iOS e iPadOS: cosa resta sul dispositivo, cosa non viene raccolto dal titolare e come funziona l’app nella versione attuale, gratuita e senza pubblicità.",
    updatedLabel: "Ultimo aggiornamento",
    updatedDisplay: "24 agosto 2026",
    updatedISO: CIELOSTORIE_PRIVACY_UPDATED_ISO,
    tocLabel: "Indice",
    languageLabel: "Lingua",
    languageCurrent: "Italiano",
    otherLanguageLabel: "English",
    otherLanguageHref: CIELOSTORIE_PRIVACY_EN_PATH,
    breadcrumbHome: "Home",
    breadcrumbLegal: "Legal",
    breadcrumbCurrent: "Privacy CieloStorie",
    metaTitle: "CieloStorie Privacy Policy",
    metaDescription:
      "Informativa sulla privacy di CieloStorie: app gratuita, dati locali sul dispositivo, nessuna raccolta dati tramite l’app, nessuna pubblicità e nessun SDK pubblicitario o di analytics di terze parti.",
    contactEmail,
    sections: [
      {
        id: "introduzione",
        heading: "Introduzione",
        paragraphs: [
          [
            "CieloStorie è un’app iOS e iPadOS di storie illustrate per bambini e famiglie. La versione attuale dell’app è gratuita: tutte le storie e le funzioni disponibili possono essere usate senza acquisti in-app, abbonamenti o paywall.",
          ],
          [
            "L’app è fornita da Fernando Piras. Questa pagina spiega, in modo verificabile rispetto al funzionamento attuale del prodotto, quali informazioni restano sul dispositivo, quali dati non vengono raccolti tramite l’app e come puoi esercitare i tui diritti.",
          ],
          [
            "L’informativa è scritta anche per un uso familiare. Non pretenderemo certificazioni o garanzie che il prodotto non dichiara. Se una pratica cambierà, aggiorneremo questa pagina.",
          ],
        ],
      },
      {
        id: "titolare",
        heading: "Titolare e contatti",
        paragraphs: [
          [
            "Titolare del trattamento per CieloStorie è Fernando Piras, sviluppatore dell’app, con sede operativa in Italia.",
          ],
          [
            "Per domande su questa informativa o sul trattamento dei dati puoi scrivere a ",
            { href: `mailto:${contactEmail}`, label: contactEmail },
            ".",
          ],
          [
            "Non è istituito un responsabile della protezione dei dati (DPO). Non pubblichiamo qui una partita IVA, una ragione sociale distinta o un indirizzo stradale: non sono dati resi disponibili come identità legale dell’app su questo sito.",
          ],
        ],
      },
      {
        id: "dati-non-raccolti",
        heading: "Dati non raccolti tramite l’app",
        paragraphs: [
          [
            "Nella versione attuale di CieloStorie, Fernando Piras non raccoglie dati personali tramite l’app. Non esiste un account CieloStorie, un backend CieloStorie per storie o profili, né un SDK pubblicitario o di analytics di terze parti integrato nel prodotto.",
          ],
          [
            "Questa descrizione è coerente con la dichiarazione App Store Connect “Data Not Collected” per l’app. Significa che il titolare non riceve, tramite l’app, informazioni identificative o di utilizzo inviate a server CieloStorie o a fornitori pubblicitari o di analytics scelti dal titolare.",
          ],
          [
            "Scaricare o aggiornare l’app tramite l’App Store può comportare trattamenti gestiti da Apple secondo le informative di Apple. Tali trattamenti non sono raccolti da CieloStorie né controllati da Fernando Piras come titolare dell’app.",
          ],
        ],
      },
      {
        id: "dati-locali",
        heading: "Dati locali sul dispositivo",
        paragraphs: [
          [
            "Per far funzionare l’app, CieloStorie memorizza informazioni solo sul dispositivo (SwiftData e impostazioni di sistema). Il catalogo, le illustrazioni e i paesaggi sonori sono inclusi nell’app; non vengono scaricati da un server CieloStorie.",
          ],
          [
            "Esempi di dati locali:",
          ],
        ],
        bullets: [
          [
            "profili creati nell’area genitori (nome scelto, età, interessi per i consigli di lettura, aspetto dell’avatar);",
          ],
          ["progressi di lettura, preferiti e sessioni di lettura per profilo;"],
          [
            "preferenze dell’app: lingua dei contenuti, modalità nanna, suono del Reader acceso o spento;",
          ],
          [
            "stato locale di onboarding e dati usati per funzioni come “Il Mio Cielo”.",
          ],
        ],
      },
      {
        id: "distinzione",
        heading: "Dati locali e dati raccolti",
        paragraphs: [
          [
            "I dati descritti sopra restano sul dispositivo e non vengono trasmessi a Fernando Piras tramite l’app, perché l’app non include un meccanismo di invio di tali dati al titolare.",
          ],
          [
            "Eliminare un profilo, cambiare preferenze o disinstallare l’app rimuove i dati locali corrispondenti. CieloStorie non offre un backup cloud proprio per recuperarli su un altro dispositivo.",
          ],
        ],
      },
      {
        id: "nessun-account",
        heading: "Nessun account",
        paragraphs: [
          [
            "CieloStorie non richiede la creazione di un account, un login, Sign in with Apple o un’email per leggere le storie. Non esiste un profilo cloud CieloStorie. Puoi usare l’app senza registrarti.",
          ],
        ],
      },
      {
        id: "pubblicita",
        heading: "Pubblicità e monetizzazione",
        paragraphs: [
          [
            "La versione attuale di CieloStorie non include pubblicità, SDK pubblicitari (inclusi Google AdMob o Google User Messaging Platform), banner, interstitial o flussi di consenso pubblicitario.",
          ],
          [
            "Non sono presenti acquisti in-app, abbonamenti, paywall o acquisti “Rimuovi pubblicità”. Tutte le storie e le funzioni attualmente disponibili nell’app sono gratuite.",
          ],
        ],
      },
      {
        id: "tracking",
        heading: "Tracking, ATT e identificatori pubblicitari",
        paragraphs: [
          [
            "CieloStorie non presenta il prompt di App Tracking Transparency (ATT) e non usa intenzionalmente l’identificativo pubblicitario Apple (IDFA). Il Privacy Manifest dell’app dichiara NSPrivacyTracking = false.",
          ],
          [
            "L’app non integra SDK pubblicitari o di analytics di terze parti. Fernando Piras non vende dati degli utenti e non condivide dati dell’app dei bambini con inserzionisti.",
          ],
        ],
      },
      {
        id: "analytics",
        heading: "Analytics e diagnostica",
        paragraphs: [
          [
            "CieloStorie non integra Firebase, Google Analytics, Crashlytics, Meta o altri SDK di analytics o diagnostica di terze parti. Non inviamo eventi di utilizzo a server del titolare tramite l’app.",
          ],
        ],
      },
      {
        id: "famiglie",
        heading: "Bambini e famiglie",
        paragraphs: [
          [
            "CieloStorie è pensata per un uso familiare: storie per bambini, profili locali e un’area genitori. L’area genitori è protetta da un parental gate (una semplice verifica aritmetica). Gestione profili e preferenze di lettura stanno in quell’area, non nel Reader.",
          ],
          [
            "Se un genitore inserisce un nome o un’età in un profilo, quelle informazioni restano sul dispositivo. CieloStorie non le invia a un server del titolare.",
          ],
          [
            "L’app è pubblicata nella categoria Kids di Apple. Questa informativa descrive le pratiche del prodotto; non costituisce da sola una dichiarazione di conformità a COPPA o a regimi equivalenti.",
          ],
        ],
      },
      {
        id: "audio",
        heading: "Audio",
        paragraphs: [
          [
            "I paesaggi sonori e i suoni di accompagnamento sono file inclusi nell’app. Non c’è streaming audio, non c’è narrazione registrata e l’app non usa il microfono: non registra la voce. Il suono del Reader si può disattivare dalle impostazioni. L’app usa solo le API di riproduzione audio del sistema.",
          ],
        ],
      },
      {
        id: "terze-parti",
        heading: "Servizi di terze parti",
        paragraphs: [
          [
            "Nel codice dell’app attuale non sono integrati SDK pubblicitari, SDK di analytics o SDK di pagamento. L’unico rapporto di terze parti rilevante per l’utente è, in generale, la distribuzione tramite Apple App Store, regolata dalle informative di Apple.",
          ],
        ],
      },
      {
        id: "conservazione",
        heading: "Conservazione",
        paragraphs: [
          [
            "I dati locali restano sul dispositivo finché l’app è installata o finché non li cancelli (ad esempio eliminando un profilo o disinstallando l’app). CieloStorie non definisce un archivio cloud proprio.",
          ],
        ],
      },
      {
        id: "diritti",
        heading: "I tuoi diritti",
        paragraphs: [
          [
            "Se si applica il Regolamento (UE) 2016/679, puoi contattare il titolare per domande relative a questa informativa. Puoi inoltre proporre reclamo al ",
            {
              href: GARANTE,
              label: "Garante per la protezione dei dati personali",
              external: true,
            },
            ".",
          ],
          [
            "Per i dati che stanno solo sul dispositivo, la via più diretta è usarli o cancellarli nell’app (profili, preferenze) oppure disinstallare CieloStorie.",
          ],
        ],
      },
      {
        id: "modifiche",
        heading: "Modifiche a questa informativa",
        paragraphs: [
          [
            "Possiamo aggiornare questa pagina se cambia il prodotto o se dobbiamo chiarire una pratica. La data di aggiornamento è indicata in cima. La versione pubblicata su fernandopiras.com/legal/cielostorie/privacy è quella di riferimento.",
          ],
        ],
      },
      {
        id: "contatti",
        heading: "Contatti",
        paragraphs: [
          [
            "Per questa informativa: ",
            { href: `mailto:${contactEmail}`, label: contactEmail },
            ". Titolare: Fernando Piras. Prodotto: CieloStorie (iOS e iPadOS).",
          ],
        ],
      },
    ],
  };
}

function englishDocument(contactEmail: string): PrivacyDocument {
  return {
    kind: "privacy",
    locale: "en",
    htmlLang: "en",
    product: "CieloStorie",
    eyebrow: "CieloStorie",
    title: "Privacy Policy",
    lead:
      "This policy describes how CieloStorie handles information in the iOS and iPadOS app: what stays on the device, what the controller does not collect through the app, and how the current version works as a free app with no advertising.",
    updatedLabel: "Last updated",
    updatedDisplay: "24 August 2026",
    updatedISO: CIELOSTORIE_PRIVACY_UPDATED_ISO,
    tocLabel: "Contents",
    languageLabel: "Language",
    languageCurrent: "English",
    otherLanguageLabel: "Italiano",
    otherLanguageHref: CIELOSTORIE_PRIVACY_PATH,
    breadcrumbHome: "Home",
    breadcrumbLegal: "Legal",
    breadcrumbCurrent: "CieloStorie Privacy",
    metaTitle: "CieloStorie Privacy Policy",
    metaDescription:
      "Privacy policy for CieloStorie: free app, on-device local data, no data collected through the app, no advertising, and no third-party advertising or analytics SDKs.",
    contactEmail,
    sections: [
      {
        id: "introduction",
        heading: "Introduction",
        paragraphs: [
          [
            "CieloStorie is an iOS and iPadOS illustrated-story app for children and families. The current version of the app is free: every available story and feature can be used without in-app purchases, subscriptions, or paywalls.",
          ],
          [
            "The app is provided by Fernando Piras. This page explains, in terms that match how the product actually works, what information stays on the device, what data is not collected through the app, and how you can exercise your rights.",
          ],
          [
            "The policy is written with family use in mind. It does not claim certifications or guarantees the product does not make. If a practice changes, we will update this page.",
          ],
        ],
      },
      {
        id: "controller",
        heading: "Controller and contact",
        paragraphs: [
          [
            "The controller for CieloStorie is Fernando Piras, the app’s developer, based in Italy.",
          ],
          [
            "For questions about this policy or about data processing, email ",
            { href: `mailto:${contactEmail}`, label: contactEmail },
            ".",
          ],
          [
            "There is no appointed data protection officer (DPO). This page does not list a VAT number, a separate company name, or a street address, because those are not published as the app’s legal identity on this site.",
          ],
        ],
      },
      {
        id: "no-collection",
        heading: "Data not collected through the app",
        paragraphs: [
          [
            "In the current version of CieloStorie, Fernando Piras does not collect personal data through the app. There is no CieloStorie account, no CieloStorie backend for stories or profiles, and no third-party advertising or analytics SDK integrated in the product.",
          ],
          [
            "This description is consistent with the App Store Connect declaration “Data Not Collected” for the app. It means the controller does not receive, through the app, identifying or usage information sent to CieloStorie servers or to advertising or analytics providers chosen by the controller.",
          ],
          [
            "Downloading or updating the app through the App Store may involve processing by Apple under Apple’s policies. That processing is not collected by CieloStorie and is not controlled by Fernando Piras as the app controller.",
          ],
        ],
      },
      {
        id: "on-device",
        heading: "On-device local data",
        paragraphs: [
          [
            "To run the app, CieloStorie stores information only on the device (SwiftData and system settings). The catalogue, artwork, and soundscapes ship inside the app; they are not downloaded from a CieloStorie server.",
          ],
          [
            "Examples of local data:",
          ],
        ],
        bullets: [
          [
            "profiles created in the Parent Area (chosen name, age, reading interests, avatar appearance);",
          ],
          ["reading progress, favourites, and reading sessions per profile;"],
          [
            "app preferences: content language, bedtime mode, Reader sound on or off;",
          ],
          [
            "local onboarding state and data used for features such as My Sky.",
          ],
        ],
      },
      {
        id: "distinction",
        heading: "Local data vs collected data",
        paragraphs: [
          [
            "The data described above stays on the device and is not transmitted to Fernando Piras through the app, because the app does not include a mechanism to send that data to the controller.",
          ],
          [
            "Deleting a profile, changing preferences, or uninstalling the app removes the corresponding local data. CieloStorie does not offer its own cloud backup to restore it on another device.",
          ],
        ],
      },
      {
        id: "no-account",
        heading: "No account",
        paragraphs: [
          [
            "CieloStorie does not require an account, a login, Sign in with Apple, or an email address to read stories. There is no CieloStorie cloud profile. You can use the app without registering.",
          ],
        ],
      },
      {
        id: "advertising",
        heading: "Advertising and monetization",
        paragraphs: [
          [
            "The current version of CieloStorie does not include advertising, advertising SDKs (including Google AdMob or Google User Messaging Platform), banners, interstitials, or advertising consent flows.",
          ],
          [
            "There are no in-app purchases, subscriptions, paywalls, or Remove Ads purchases. Every story and feature currently available in the app is free.",
          ],
        ],
      },
      {
        id: "tracking",
        heading: "Tracking, ATT, and advertising identifiers",
        paragraphs: [
          [
            "CieloStorie does not present Apple’s App Tracking Transparency (ATT) prompt and does not intentionally use Apple’s advertising identifier (IDFA). The app’s Privacy Manifest declares NSPrivacyTracking = false.",
          ],
          [
            "The app does not integrate third-party advertising or analytics SDKs. Fernando Piras does not sell user data and does not share children’s app data with advertisers.",
          ],
        ],
      },
      {
        id: "analytics",
        heading: "Analytics and diagnostics",
        paragraphs: [
          [
            "CieloStorie does not integrate Firebase, Google Analytics, Crashlytics, Meta, or other third-party analytics or diagnostics SDKs. We do not send usage events to the controller’s servers through the app.",
          ],
        ],
      },
      {
        id: "families",
        heading: "Children and families",
        paragraphs: [
          [
            "CieloStorie is designed for family use: children’s stories, local profiles, and a Parent Area. The Parent Area is protected by a parental gate (a simple arithmetic check). Profile management and reading preferences live there, not in the Reader.",
          ],
          [
            "If a parent enters a name or age on a profile, that information stays on the device. CieloStorie does not send it to a controller server.",
          ],
          [
            "The app is published in Apple’s Kids Category. This policy describes product practices; it is not by itself a claim of COPPA or equivalent compliance.",
          ],
        ],
      },
      {
        id: "audio",
        heading: "Audio",
        paragraphs: [
          [
            "Soundscapes and cue sounds are files bundled in the app. There is no audio streaming, no recorded narration, and the app does not use the microphone: it does not record voice. Reader sound can be turned off in settings. The app uses only the system playback audio APIs.",
          ],
        ],
      },
      {
        id: "third-parties",
        heading: "Third-party services",
        paragraphs: [
          [
            "The current app code does not integrate advertising SDKs, analytics SDKs, or payment SDKs. The only third-party relationship generally relevant to users is distribution through the Apple App Store, governed by Apple’s policies.",
          ],
        ],
      },
      {
        id: "retention",
        heading: "Retention",
        paragraphs: [
          [
            "Local data remains on the device while the app is installed, or until you delete it (for example by removing a profile or uninstalling the app). CieloStorie does not operate its own cloud archive.",
          ],
        ],
      },
      {
        id: "rights",
        heading: "Your rights",
        paragraphs: [
          [
            "Where Regulation (EU) 2016/679 applies, you may contact the controller with questions about this policy. You may also lodge a complaint with the ",
            {
              href: GARANTE,
              label: "Italian Data Protection Authority (Garante)",
              external: true,
            },
            ".",
          ],
          [
            "For information that exists only on the device, the most direct path is to edit or delete it in the app (profiles, preferences) or to uninstall CieloStorie.",
          ],
        ],
      },
      {
        id: "changes",
        heading: "Changes to this policy",
        paragraphs: [
          [
            "We may update this page if the product changes or if we need to clarify a practice. The update date is shown at the top. The version published at fernandopiras.com/legal/cielostorie/privacy is the reference version.",
          ],
        ],
      },
      {
        id: "contact",
        heading: "Contact",
        paragraphs: [
          [
            "For this policy: ",
            { href: `mailto:${contactEmail}`, label: contactEmail },
            ". Controller: Fernando Piras. Product: CieloStorie (iOS and iPadOS).",
          ],
        ],
      },
    ],
  };
}
