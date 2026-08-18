export const CIELOSTORIE_PRIVACY_PATH = "/legal/cielostorie/privacy";
export const CIELOSTORIE_PRIVACY_EN_PATH = "/legal/cielostorie/privacy/en";
export const CIELOSTORIE_PRIVACY_LEGACY_PATH = "/cielostorie/privacy";
export const CIELOSTORIE_PRIVACY_EN_LEGACY_PATH = "/cielostorie/privacy/en";
export const CIELOSTORIE_PRIVACY_UPDATED_ISO = "2026-08-18";

export type PrivacyLocale = "it" | "en";

export type PrivacyInline =
  | string
  | { href: string; label: string; external?: boolean };

export interface PrivacySection {
  id: string;
  heading: string;
  paragraphs: PrivacyInline[][];
  bullets?: PrivacyInline[][];
}

export interface PrivacyDocument {
  locale: PrivacyLocale;
  htmlLang: string;
  product: string;
  eyebrow: string;
  title: string;
  lead: string;
  updatedLabel: string;
  updatedDisplay: string;
  tocLabel: string;
  languageLabel: string;
  languageCurrent: string;
  otherLanguageLabel: string;
  otherLanguageHref: string;
  breadcrumbHome: string;
  breadcrumbLegal: string;
  breadcrumbCurrent: string;
  metaTitle: string;
  metaDescription: string;
  contactEmail: string;
  sections: PrivacySection[];
}

const GOOGLE_PRIVACY = "https://policies.google.com/privacy";
const GOOGLE_ADS_PRIVACY = "https://policies.google.com/technologies/ads";
const APPLE_PRIVACY = "https://www.apple.com/legal/privacy/";
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
    locale: "it",
    htmlLang: "it",
    product: "CieloStorie",
    eyebrow: "CieloStorie",
    title: "Informativa sulla privacy",
    lead:
      "Questa informativa descrive come CieloStorie tratta i dati nel contesto dell’app iOS e iPadOS: cosa resta sul dispositivo, come funziona la pubblicità, come interviene Apple per gli acquisti e quali servizi di terze parti sono presenti nel prodotto.",
    updatedLabel: "Ultimo aggiornamento",
    updatedDisplay: "18 agosto 2026",
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
      "Informativa sulla privacy di CieloStorie, inclusi dati locali, pubblicità, consenso, acquisti e servizi di terze parti.",
    contactEmail,
    sections: [
      {
        id: "introduzione",
        heading: "Introduzione",
        paragraphs: [
          [
            "CieloStorie è un’app iOS e iPadOS di storie illustrate per bambini e famiglie. L’app è gratuita: tutte le storie sono leggibili senza acquisto. La versione gratuita può mostrare annunci. È disponibile un acquisto una tantum opzionale per rimuovere la pubblicità.",
          ],
          [
            "L’app è fornita da Fernando Piras. Questa pagina spiega, in modo verificabile rispetto al funzionamento attuale del prodotto, quali informazioni restano sul dispositivo, quali trattamenti possono avvenire tramite servizi di terze parti e come puoi esercitare i tuoi diritti.",
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
            "Non è istituito un responsabile della protezione dei dati (DPO). Non pubblichiamo qui una partita IVA, una ragione sociale distinta o un indirizzo stradale: non sono dati resi disponibili come identità legale dell’app su questo sito. Per i trattamenti effettuati da Google o da Apple, i rispettivi titolari o responsabili sono indicati nelle loro informative.",
          ],
        ],
      },
      {
        id: "dati-trattati",
        heading: "Dati trattati direttamente da CieloStorie",
        paragraphs: [
          [
            "CieloStorie non ha un account online e non gestisce un backend proprio per le storie, l’audio o i profili. Il catalogo, le illustrazioni e i paesaggi sonori sono inclusi nell’app. Non scarichiamo storie o audio da un server CieloStorie.",
          ],
          [
            "Le uniche informazioni che l’app memorizza in modo diretto sono dati di funzionamento sul dispositivo (preferenze, profili locali, progressi, stato dell’acquisto “Rimuovi pubblicità” e contatori tecnici per la frequenza degli annunci). Questi dati restano sul dispositivo e non vengono inviati a un server CieloStorie, perché tale server non esiste nel prodotto attuale.",
          ],
          [
            "Questo non significa che “nessun dato viene trattato da nessuno”. I servizi pubblicitari di Google e l’infrastruttura App Store di Apple possono trattare dati secondo le proprie informative quando quegli SDK o sistemi sono in uso. La distinzione è tra ciò che CieloStorie memorizza e controlla localmente e ciò che un fornitore terzo può trattare in autonomia.",
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
        id: "dati-locali",
        heading: "Preferenze e dati sul dispositivo",
        paragraphs: [
          [
            "Per far funzionare l’app, CieloStorie salva localmente (SwiftData e impostazioni di sistema) informazioni come:",
          ],
        ],
        bullets: [
          [
            "profili creati nell’area genitori (nome scelto, età, interessi per i consigli di lettura, aspetto dell’avatar);",
          ],
          ["progressi di lettura, preferiti e sessioni di lettura per profilo;"],
          [
            "preferenze: lingua dei contenuti, modalità nanna, suono del Reader acceso o spento, eventuale disattivazione globale della pubblicità;",
          ],
          [
            "stato locale dell’acquisto “Rimuovi pubblicità”, in aggiunta alle ricevute verificate tramite App Store;",
          ],
          [
            "completamento della prima configurazione (onboarding) e contatori tecnici usati per limitare la frequenza degli annunci interstitial.",
          ],
        ],
      },
      {
        id: "pubblicita",
        heading: "Pubblicità",
        paragraphs: [
          [
            "Nella versione gratuita CieloStorie può mostrare annunci. Gli annunci finanziano l’accesso gratuito a tutte le storie. L’app usa Google Mobile Ads (Google AdMob) per richiedere e mostrare gli annunci.",
          ],
          [
            "Gli annunci non vengono mostrati durante la lettura delle pagine nel Reader, né sulla pagina di completamento della storia, né come pubblicità con premio. Possono comparire banner in Home e in Esplora. Un annuncio interstitial può comparire solo dopo essere usciti dal Reader, con limiti di frequenza (non al primo avvio, non dopo la prima storia chiusa, e con un intervallo minimo tra un interstitial e il successivo).",
          ],
          [
            "Quando l’app richiede un annuncio, configura la richiesta in modo restrittivo: trattamento rivolto ai bambini (child-directed), classificazione massima dei contenuti pubblicitari “G”, personalizzazione da parte dell’editore disabilitata, e parametro di annunci non personalizzati (npa=1). CieloStorie non usa i profili, i progressi o gli interessi di lettura per personalizzare gli annunci: le API pubblicitarie dell’app non ricevono quei dati.",
          ],
          [
            "Queste impostazioni descrivono il comportamento dell’app. Non equivalgono a dire che Google “non raccoglie alcun dato”. Google Mobile Ads è un SDK di terze parti: può trattare dati tecnici e pubblicitari secondo la ",
            {
              href: GOOGLE_PRIVACY,
              label: "Privacy Policy di Google",
              external: true,
            },
            " e le ",
            {
              href: GOOGLE_ADS_PRIVACY,
              label: "informazioni di Google sulla pubblicità",
              external: true,
            },
            ". Il manifesto privacy dell’SDK Google dichiara, tra le altre cose, dati pubblicitari, interazione con il prodotto e, in forma non precisa a livello di indirizzo, dati di localizzazione approssimativa. Quel trattamento è di Google, non un invio deliberato da CieloStorie di nomi o storie lette.",
          ],
        ],
      },
      {
        id: "ump",
        heading: "Consenso — Google User Messaging Platform",
        paragraphs: [
          [
            "CieloStorie usa Google User Messaging Platform (UMP), il sistema di messaggi per il consenso di Google, non uno strumento proprietario. Dove le norme applicabili lo richiedono, UMP può mostrare un messaggio di privacy e registrare le scelte dell’utente.",
          ],
          [
            "Se il consenso non è ancora risolto, se l’utente non consente le richieste pubblicitarie, o se UMP non è in grado di completare l’aggiornamento, CieloStorie non richiede annunci. La lettura delle storie resta disponibile.",
          ],
          [
            "Quando UMP indica che sono richieste le opzioni privacy, l’app mostra un comando “Opzioni privacy” nell’area genitori (dietro il parental gate). Da lì è possibile riaprire il modulo di opzioni messo a disposizione da Google, se disponibile.",
          ],
        ],
      },
      {
        id: "att",
        heading: "ATT, tracking e IDFA",
        paragraphs: [
          [
            "CieloStorie non presenta il prompt di App Tracking Transparency (ATT). L’app non usa intenzionalmente l’identificativo pubblicitario Apple (IDFA) per personalizzare gli annunci. Il Privacy Manifest dell’app dichiara NSPrivacyTracking = false e non elenca domini di tracking.",
          ],
          [
            "Questo non significa che l’app “non tratti alcun dato” o che gli SDK pubblicitari siano assenti. Tracking (nel senso Apple di ATT), pubblicità e trattamento dati da parte di un fornitore sono concetti distinti. La pubblicità di CieloStorie è configurata come non personalizzata e child-directed; Google può comunque trattare dati secondo la propria informativa.",
          ],
          [
            "L’SDK Google Mobile Ads include identificatori SKAdNetwork di Apple. SKAdNetwork è il sistema di misurazione delle conversioni di Apple, distinto dall’IDFA. La sua presenza non equivale a un prompt ATT né a una dichiarazione di tracking nel Privacy Manifest dell’app.",
          ],
        ],
      },
      {
        id: "famiglie",
        heading: "Bambini e famiglie",
        paragraphs: [
          [
            "CieloStorie è pensata per un uso familiare: storie per bambini, profili locali e un’area genitori. L’area genitori è protetta da un parental gate (una semplice verifica aritmetica). Acquisti, ripristino acquisti, opzioni privacy e gestione dei profili stanno in quell’area, non nel Reader.",
          ],
          [
            "Le misure pubblicitarie descritte sopra (child-directed, contenuti G, annunci non personalizzati, assenza di annunci nel Reader) sono scelte di prodotto. Non costituiscono una dichiarazione di conformità a una categoria App Store “Kids”, al COPPA o a regimi equivalenti. La classificazione dello store e le risposte al questionario di età sono decisioni di pubblicazione distinte da questa informativa.",
          ],
          [
            "Se un genitore inserisce un nome o un’età in un profilo, quelle informazioni restano sul dispositivo. CieloStorie non le invia a un proprio server e non le passa alle API pubblicitarie dell’app.",
          ],
        ],
      },
      {
        id: "acquisti",
        heading: "Acquisti — Rimuovi pubblicità",
        paragraphs: [
          [
            "“Rimuovi pubblicità” è un acquisto in-app una tantum, di tipo non consumabile. Non è un abbonamento e non sblocca storie: tutte le storie restano gratuite. L’identificativo di prodotto usato dall’app è com.cielostorie.app.remove_ads.",
          ],
          [
            "Il pagamento è gestito da Apple tramite StoreKit e l’App Store. CieloStorie non riceve i dati della carta o del metodo di pagamento. L’app verifica le transazioni Apple (StoreKit 2, Transaction.currentEntitlements) e usa l’esito verificato, insieme a una cache locale, per decidere se mostrare annunci. Il prezzo è quello indicato da Apple al momento dell’acquisto, non un importo fissato in questa pagina.",
          ],
          [
            "Il ripristino degli acquisti è disponibile nell’area genitori. Apple può trattare dati di transazione secondo la ",
            {
              href: APPLE_PRIVACY,
              label: "Privacy Policy di Apple",
              external: true,
            },
            ".",
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
            "Nel prodotto attuale sono presenti solo questi servizi di terze parti rilevanti per la privacy. Non usiamo Firebase, Analytics di Google, Crashlytics, Meta o SDK analoghi.",
          ],
        ],
        bullets: [
          [
            "Google Mobile Ads — mostra gli annunci nella versione gratuita. Informativa: ",
            {
              href: GOOGLE_PRIVACY,
              label: "policies.google.com/privacy",
              external: true,
            },
            " · ",
            {
              href: GOOGLE_ADS_PRIVACY,
              label: "pubblicità Google",
              external: true,
            },
            ".",
          ],
          [
            "Google User Messaging Platform — mostra e registra il messaggio di consenso dove richiesto. Fa parte dei servizi Google; si applica la stessa ",
            {
              href: GOOGLE_PRIVACY,
              label: "Privacy Policy di Google",
              external: true,
            },
            ".",
          ],
          [
            "Apple App Store / StoreKit — gestisce l’acquisto una tantum, il ripristino e le ricevute. Informativa: ",
            {
              href: APPLE_PRIVACY,
              label: "apple.com/legal/privacy",
              external: true,
            },
            ".",
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
          [
            "I periodi di conservazione di Google e Apple dipendono dalle loro informative. Non indichiamo qui durate che non controlliamo.",
          ],
        ],
      },
      {
        id: "trasferimenti",
        heading: "Trasferimenti internazionali",
        paragraphs: [
          [
            "CieloStorie non opera un backend proprio e quindi non trasferisce in proprio i dati dei profili verso server CieloStorie. Google e Apple sono organizzazioni internazionali: quando i rispettivi servizi sono usati, i dati che essi trattano possono essere trattati anche fuori dallo Spazio economico europeo, secondo le garanzie e le informative di quei fornitori. Non descriviamo qui clausole contrattuali specifiche che non sono parte del codice dell’app.",
          ],
        ],
      },
      {
        id: "diritti",
        heading: "I tuoi diritti",
        paragraphs: [
          [
            "Se si applica il Regolamento (UE) 2016/679, puoi chiedere accesso, rettifica, cancellazione, limitazione, opposizione e, dove il trattamento si basa sul consenso, la revoca del consenso. Puoi inoltre proporre reclamo al ",
            {
              href: GARANTE,
              label: "Garante per la protezione dei dati personali",
              external: true,
            },
            ".",
          ],
          [
            "Per i dati che stanno solo sul dispositivo, la via più diretta è usarli o cancellarli nell’app (profili, preferenze) oppure disinstallare CieloStorie. Per gli annunci e il consenso UMP, usa le opzioni privacy nell’area genitori quando disponibili, e i controlli offerti da Google. Per acquisti e ricevute, usa i canali Apple (impostazioni dell’Apple ID, assistenza App Store).",
          ],
          [
            "Alcune richieste riguardano trattamenti che solo Google o Apple possono soddisfare, perché CieloStorie non riceve quei dati.",
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
    locale: "en",
    htmlLang: "en",
    product: "CieloStorie",
    eyebrow: "CieloStorie",
    title: "Privacy Policy",
    lead:
      "This policy describes how CieloStorie handles information in the iOS and iPadOS app: what stays on the device, how advertising works, how Apple handles purchases, and which third-party services are actually in the product.",
    updatedLabel: "Last updated",
    updatedDisplay: "18 August 2026",
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
      "Privacy policy for CieloStorie, covering on-device data, advertising, consent, purchases, and third-party services.",
    contactEmail,
    sections: [
      {
        id: "introduction",
        heading: "Introduction",
        paragraphs: [
          [
            "CieloStorie is an iOS and iPadOS illustrated-story app for children and families. The app is free: every story can be read without a purchase. The free version may show ads. An optional one-time purchase removes advertising.",
          ],
          [
            "The app is provided by Fernando Piras. This page explains, in terms that match how the product actually works, what information stays on the device, what third-party services may process, and how you can exercise your rights.",
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
            "There is no appointed data protection officer (DPO). This page does not list a VAT number, a separate company name, or a street address, because those are not published as the app’s legal identity on this site. Processing carried out by Google or Apple is described in their own policies.",
          ],
        ],
      },
      {
        id: "data-we-process",
        heading: "Information CieloStorie processes directly",
        paragraphs: [
          [
            "CieloStorie has no online account and no backend of its own for stories, audio, or profiles. The catalogue, artwork, and soundscapes ship inside the app. We do not download stories or audio from a CieloStorie server.",
          ],
          [
            "The only information the app stores directly is on-device operational data (preferences, local profiles, reading progress, Remove Ads status, and technical counters used to limit interstitial frequency). That information stays on the device and is not sent to a CieloStorie server, because no such server exists in the current product.",
          ],
          [
            "This is not a claim that “no one processes any data.” Google’s advertising services and Apple’s App Store infrastructure may process information under their own policies when those SDKs or systems are in use. The distinction is between what CieloStorie stores locally and what a third party may process on its own.",
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
        id: "on-device",
        heading: "On-device preferences and state",
        paragraphs: [
          [
            "To run the app, CieloStorie stores locally (SwiftData and system settings) information such as:",
          ],
        ],
        bullets: [
          [
            "profiles created in the Parent Area (chosen name, age, reading interests, avatar appearance);",
          ],
          ["reading progress, favourites, and reading sessions per profile;"],
          [
            "preferences: content language, bedtime mode, Reader sound on or off, and an optional global ads-off setting;",
          ],
          [
            "local Remove Ads entitlement state, in addition to App Store–verified transactions;",
          ],
          [
            "first-run onboarding completion, and technical counters used to limit interstitial frequency.",
          ],
        ],
      },
      {
        id: "advertising",
        heading: "Advertising",
        paragraphs: [
          [
            "In the free version, CieloStorie may show ads. Ads fund free access to every story. The app uses Google Mobile Ads (Google AdMob) to request and display ads.",
          ],
          [
            "Ads are not shown while reading story pages in the Reader, on the story-completion screen, or as rewarded ads. Banners may appear on Home and Explore. An interstitial may appear only after leaving the Reader, subject to frequency limits (not on first launch, not after the first closed story, and with a minimum interval between interstitials).",
          ],
          [
            "When the app requests an ad, it configures the request restrictively: child-directed treatment, maximum ad content rating “G”, publisher personalization disabled, and non-personalized ads (npa=1). CieloStorie does not use profiles, reading progress, or interests to personalize ads: the app’s advertising APIs do not receive that data.",
          ],
          [
            "Those settings describe the app’s behaviour. They are not a claim that Google “collects no data.” Google Mobile Ads is a third-party SDK: it may process technical and advertising data under ",
            {
              href: GOOGLE_PRIVACY,
              label: "Google’s Privacy Policy",
              external: true,
            },
            " and ",
            {
              href: GOOGLE_ADS_PRIVACY,
              label: "Google’s advertising information",
              external: true,
            },
            ". The Google SDK privacy manifest declares, among other things, advertising data, product interaction, and coarse location. That processing is Google’s, not a deliberate upload by CieloStorie of children’s names or stories read.",
          ],
        ],
      },
      {
        id: "ump",
        heading: "Consent — Google User Messaging Platform",
        paragraphs: [
          [
            "CieloStorie uses Google User Messaging Platform (UMP), Google’s consent-messaging system, not a CieloStorie-built tool. Where applicable rules require it, UMP may show a privacy message and record the user’s choices.",
          ],
          [
            "If consent is unresolved, if the user does not allow ad requests, or if UMP cannot complete its update, CieloStorie does not request ads. Stories remain readable.",
          ],
          [
            "When UMP indicates that privacy options are required, the app shows a “Privacy options” control in the Parent Area (behind the parental gate). That control reopens Google’s privacy options form when it is available.",
          ],
        ],
      },
      {
        id: "att",
        heading: "ATT, tracking, and IDFA",
        paragraphs: [
          [
            "CieloStorie does not present Apple’s App Tracking Transparency (ATT) prompt. The app does not intentionally use Apple’s advertising identifier (IDFA) to personalize ads. The app’s Privacy Manifest declares NSPrivacyTracking = false and lists no tracking domains.",
          ],
          [
            "This is not a claim that the app “processes no data” or that advertising SDKs are absent. Tracking (in Apple’s ATT sense), advertising, and a vendor’s data processing are different things. CieloStorie’s ads are configured as non-personalized and child-directed; Google may still process data under its own policy.",
          ],
          [
            "The Google Mobile Ads SDK includes Apple SKAdNetwork identifiers. SKAdNetwork is Apple’s conversion-measurement system, distinct from IDFA. Its presence is not an ATT prompt and is not a tracking declaration in the app’s Privacy Manifest.",
          ],
        ],
      },
      {
        id: "families",
        heading: "Children and families",
        paragraphs: [
          [
            "CieloStorie is designed for family use: children’s stories, local profiles, and a Parent Area. The Parent Area is protected by a parental gate (a simple arithmetic check). Purchases, restore, privacy options, and profile management live there, not in the Reader.",
          ],
          [
            "The advertising measures described above (child-directed treatment, G-rated ads, non-personalized requests, no ads in the Reader) are product choices. They are not a claim of App Store Kids Category compliance, COPPA compliance, or any similar certification. Store category and age-rating answers are publication decisions separate from this policy.",
          ],
          [
            "If a parent enters a name or age on a profile, that information stays on the device. CieloStorie does not send it to a CieloStorie server and does not pass it into the app’s advertising APIs.",
          ],
        ],
      },
      {
        id: "purchases",
        heading: "Purchases — Remove Ads",
        paragraphs: [
          [
            "Remove Ads is a one-time, non-consumable in-app purchase. It is not a subscription and it does not unlock stories: every story stays free. The product identifier used by the app is com.cielostorie.app.remove_ads.",
          ],
          [
            "Payment is handled by Apple through StoreKit and the App Store. CieloStorie does not receive card or payment-method details. The app verifies Apple transactions (StoreKit 2, Transaction.currentEntitlements) and uses the verified result, plus a local cache, to decide whether to show ads. The price is the price Apple shows at purchase time, not an amount fixed on this page.",
          ],
          [
            "Restore Purchases is available in the Parent Area. Apple may process transaction data under ",
            {
              href: APPLE_PRIVACY,
              label: "Apple’s Privacy Policy",
              external: true,
            },
            ".",
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
            "In the current product, only these third-party services are relevant to privacy. We do not use Firebase, Google Analytics, Crashlytics, Meta, or similar SDKs.",
          ],
        ],
        bullets: [
          [
            "Google Mobile Ads — serves ads in the free version. Policy: ",
            {
              href: GOOGLE_PRIVACY,
              label: "policies.google.com/privacy",
              external: true,
            },
            " · ",
            {
              href: GOOGLE_ADS_PRIVACY,
              label: "Google advertising",
              external: true,
            },
            ".",
          ],
          [
            "Google User Messaging Platform — presents and records the consent message where required. It is a Google service; ",
            {
              href: GOOGLE_PRIVACY,
              label: "Google’s Privacy Policy",
              external: true,
            },
            " applies.",
          ],
          [
            "Apple App Store / StoreKit — handles the one-time purchase, restore, and receipts. Policy: ",
            {
              href: APPLE_PRIVACY,
              label: "apple.com/legal/privacy",
              external: true,
            },
            ".",
          ],
        ],
      },
      {
        id: "retention",
        heading: "Retention",
        paragraphs: [
          [
            "On-device data remains on the device while the app is installed, or until you delete it (for example by removing a profile or uninstalling the app). CieloStorie does not operate its own cloud archive.",
          ],
          [
            "Google’s and Apple’s retention periods are set by their policies. We do not state retention periods we do not control.",
          ],
        ],
      },
      {
        id: "transfers",
        heading: "International transfers",
        paragraphs: [
          [
            "CieloStorie does not run its own backend and therefore does not itself transfer profile data to CieloStorie servers. Google and Apple are international organisations: when their services are used, information they process may be processed outside the European Economic Area, under those providers’ safeguards and policies. We do not describe specific contractual clauses that are not part of the app’s code.",
          ],
        ],
      },
      {
        id: "rights",
        heading: "Your rights",
        paragraphs: [
          [
            "Where Regulation (EU) 2016/679 applies, you may request access, rectification, erasure, restriction, objection, and, where processing is based on consent, withdrawal of consent. You may also lodge a complaint with the ",
            {
              href: GARANTE,
              label: "Italian Data Protection Authority (Garante)",
              external: true,
            },
            ".",
          ],
          [
            "For information that exists only on the device, the most direct path is to edit or delete it in the app (profiles, preferences) or to uninstall CieloStorie. For ads and UMP consent, use Privacy options in the Parent Area when available, and Google’s own controls. For purchases and receipts, use Apple’s channels (Apple ID settings, App Store support).",
          ],
          [
            "Some requests concern processing that only Google or Apple can fulfil, because CieloStorie does not receive that data.",
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
