import type {
  CieloStorieLegalDocument,
  CieloStorieLegalInline,
  CieloStorieLegalLocale,
} from "@/config/cielostorie-legal-types";
import {
  FAMILYPLUS_PRIVACY_EN_PATH,
  FAMILYPLUS_PRIVACY_PATH,
  FAMILYPLUS_PRIVACY_UPDATED_ISO,
  FAMILYPLUS_SUPPORT_EN_PATH,
  FAMILYPLUS_SUPPORT_PATH,
  FAMILYPLUS_TERMS_EN_PATH,
  FAMILYPLUS_TERMS_PATH,
} from "@/config/familyplus-legal-paths";

export {
  FAMILYPLUS_PRIVACY_EN_PATH,
  FAMILYPLUS_PRIVACY_PATH,
  FAMILYPLUS_PRIVACY_UPDATED_ISO,
} from "@/config/familyplus-legal-paths";

const GOOGLE_PRIVACY = "https://policies.google.com/privacy";
const GOOGLE_ADS = "https://policies.google.com/technologies/ads";
const GOOGLE_UMP =
  "https://support.google.com/admob/answer/10113915";
const APPLE_PRIVACY = "https://www.apple.com/legal/privacy/";

export function getFamilyPlusPrivacyDocument(
  locale: CieloStorieLegalLocale,
  contactEmail: string,
): CieloStorieLegalDocument {
  return locale === "en"
    ? englishDocument(contactEmail)
    : italianDocument(contactEmail);
}

function link(
  href: string,
  label: string,
  external = true,
): CieloStorieLegalInline {
  return { href, label, external };
}

function italianDocument(contactEmail: string): CieloStorieLegalDocument {
  return {
    kind: "privacy",
    locale: "it",
    htmlLang: "it",
    product: "Family Plus",
    eyebrow: "Family Plus",
    title: "Informativa sulla privacy",
    lead:
      "Questa informativa descrive come Family Plus tratta le informazioni nell’app iOS e iPadOS: contenuti di famiglia gestiti in locale e via iCloud/CloudKit, preferenze sul dispositivo, notifiche, e l’uso di Google AdMob e Google User Messaging Platform (UMP) per la pubblicità.",
    updatedLabel: "Ultimo aggiornamento",
    updatedDisplay: "25 agosto 2026",
    updatedISO: FAMILYPLUS_PRIVACY_UPDATED_ISO,
    tocLabel: "Indice",
    languageLabel: "Lingua",
    languageCurrent: "Italiano",
    otherLanguageLabel: "English",
    otherLanguageHref: FAMILYPLUS_PRIVACY_EN_PATH,
    breadcrumbHome: "Home",
    breadcrumbLegal: "Legal",
    breadcrumbCurrent: "Privacy Family Plus",
    metaTitle: "Family Plus — Privacy Policy",
    metaDescription:
      "Informativa privacy di Family Plus: dati locali, iCloud/CloudKit, condivisione famiglia, Google AdMob, UMP e scelte pubblicitarie.",
    contactEmail,
    summaryTitle: "In sintesi",
    summaryBody:
      "Family Plus è local-first: i contenuti di famiglia restano sul dispositivo e possono sincronizzarsi tramite iCloud/CloudKit di Apple. L’app integra Google AdMob e UMP per la pubblicità. I contenuti di famiglia non vengono inviati a Google per creare annunci. Non c’è un account Family Plus con password: l’identità di condivisione passa da Apple/iCloud.",
    sections: [
      {
        id: "introduzione",
        heading: "1. Introduzione",
        paragraphs: [
          [
            "Family Plus è un’app iOS e iPadOS per organizzare la vita di famiglia: calendario ed eventi, liste della spesa, attività, pasti, documenti, compleanni e ricorrenze, promemoria e spazi famiglia condivisi.",
          ],
          [
            "Questa pagina spiega pratiche verificabili rispetto al prodotto attuale. Distingue tra (A) contenuti e preferenze legati alle funzioni di organizzazione famigliare e (B) informazioni che tecnologie pubblicitarie di terze parti, in particolare Google Mobile Ads / AdMob e UMP, possono trattare.",
          ],
          [
            "Non dichiariamo “zero dati” né certificazioni GDPR/CCPA. Se il prodotto cambierà, aggiorneremo questa informativa.",
          ],
        ],
      },
      {
        id: "titolare",
        heading: "2. Titolare e contatti",
        paragraphs: [
          [
            "Titolare del trattamento per Family Plus è Fernando Piras, sviluppatore dell’app, con sede operativa in Italia.",
          ],
          [
            "Email: ",
            { href: `mailto:${contactEmail}`, label: contactEmail },
            ".",
          ],
          [
            "Sito: ",
            link("https://fernandopiras.com", "fernandopiras.com"),
            ". Hub legale: ",
            link("https://fernandopiras.com/legal", "fernandopiras.com/legal"),
            ".",
          ],
          [
            "Non è istituito un DPO. Non pubblichiamo qui partita IVA, ragione sociale distinta o indirizzo stradale: non sono dati resi disponibili come identità legale dell’app su questo sito.",
          ],
        ],
      },
      {
        id: "ambito",
        heading: "3. Ambito",
        paragraphs: [
          [
            "Questa informativa riguarda l’app Family Plus per iOS e iPadOS e le pagine legali/supporto pubblicate su fernandopiras.com relative a Family Plus.",
          ],
          [
            "Non regola i trattamenti autonomi di Apple (iCloud, CloudKit, App Store, notifiche di sistema) né quelli autonomi di Google (AdMob, UMP e infrastrutture pubblicitarie). Per quei trattamenti valgono le rispettive informative.",
          ],
        ],
      },
      {
        id: "contenuti-utente",
        heading: "4. Informazioni che fornisci a Family Plus",
        paragraphs: [
          [
            "Puoi creare e gestire, a seconda dell’uso, contenuti come: nome dello spazio famiglia, eventi di calendario, liste e voci della spesa, attività, pasti, documenti e allegati, compleanni e ricorrenze, note e altri testi inseriti volontariamente.",
          ],
          [
            "Questi contenuti sono generati da te (e dai partecipanti invitati allo spazio famiglia). Family Plus non richiede un account con email/password gestito dall’app.",
          ],
        ],
      },
      {
        id: "locale",
        heading: "5. Memorizzazione locale",
        paragraphs: [
          [
            "Family Plus è progettata local-first: i dati di organizzazione vengono salvati sul dispositivo principalmente con SwiftData. Scrivere in locale ha priorità; la sincronizzazione cloud, quando attiva, è eventuale.",
          ],
          [
            "Alcune preferenze (ad esempio lingua dell’app, stato di onboarding, contatori tecnici legati alla frequenza degli annunci a schermo intero) restano sul dispositivo e non sono sincronizzate come contenuti di famiglia via CloudKit.",
          ],
        ],
      },
      {
        id: "icloud",
        heading: "6. iCloud e CloudKit",
        paragraphs: [
          [
            "Quando usi le funzioni di condivisione/sincronizzazione famiglia, Family Plus si appoggia all’infrastruttura iCloud/CloudKit di Apple. L’accesso dipende dall’account iCloud e dalle impostazioni del dispositivo.",
          ],
          [
            "Apple tratta i dati secondo la propria informativa: ",
            link(APPLE_PRIVACY, "apple.com/legal/privacy"),
            ". Non affermiamo cifratura end-to-end oltre a quanto garantito dai servizi Apple effettivamente utilizzati.",
          ],
        ],
      },
      {
        id: "ckshare",
        heading: "7. Condivisione famiglia (CKShare)",
        paragraphs: [
          [
            "Puoi creare uno spazio famiglia e invitare partecipanti tramite i meccanismi di condivisione di Apple (CKShare). Ruoli e permessi (es. organizzatore/partecipante, capacità di modifica) dipendono dalla configurazione della share e dallo stato della condivisione.",
          ],
          [
            "Se lasci uno spazio condiviso, revochi un invito o iCloud non è disponibile, l’accesso ai contenuti condivisi può cambiare o interrompersi. I dettagli operativi sono descritti anche nella pagina di ",
            { href: FAMILYPLUS_SUPPORT_PATH, label: "Supporto Family Plus" },
            ".",
          ],
        ],
      },
      {
        id: "documenti",
        heading: "8. Documenti e allegati",
        paragraphs: [
          [
            "Puoi archiviare documenti di famiglia e relativi allegati. Gli allegati possono essere conservati in locale e, dove previsto dal prodotto, sincronizzati tramite CloudKit.",
          ],
          [
            "Resta tua responsabilità non caricare contenuti illegali e non condividere documenti sensibili con partecipanti non appropriati. I contenuti dei documenti non vengono usati da Family Plus per profilazione pubblicitaria.",
          ],
        ],
      },
      {
        id: "notifiche",
        heading: "9. Notifiche e promemoria",
        paragraphs: [
          [
            "Family Plus può usare le API di notifica di Apple per promemoria legati a eventi, attività e ricorrenze, secondo le preferenze che imposti nell’app e i permessi di sistema.",
          ],
          [
            "Le notifiche di promemoria non sono notifiche pubblicitarie. Puoi gestire autorizzazione e categorie dalle Impostazioni iOS/iPadOS e dalle impostazioni Promemoria di Family Plus.",
          ],
        ],
      },
      {
        id: "pubblicita",
        heading: "10. Pubblicità",
        paragraphs: [
          [
            "Family Plus è gratuita e, nella versione attuale, usa pubblicità come modello di monetizzazione. Non ci sono abbonamenti o acquisti in-app Family Plus descritti in questa informativa.",
          ],
          [
            "Formati attualmente esposti nell’esperienza utente: banner adattivi (Today, Calendario, Spesa, Attività) e interstitial a frequenza controllata in momenti idonei (ad esempio dopo un’azione di completamento nella Spesa). Non sono previsti App Open Ads. Un’infrastruttura tecnica per rewarded ads può esistere in app, ma non è offerta all’utente come premio o sblocco nella versione attuale.",
          ],
          [
            "Nessun banner su onboarding, Family Hub, Documenti, Promemoria, impostazioni lingua e area Altro, secondo la policy di placement del prodotto.",
          ],
        ],
      },
      {
        id: "admob",
        heading: "11. Google AdMob / Google Mobile Ads",
        paragraphs: [
          [
            "L’app integra Google Mobile Ads SDK (Google AdMob) per richiedere e mostrare annunci. Google può trattare informazioni sul dispositivo e sull’interazione con gli annunci secondo le proprie regole e la configurazione del messaggio di consenso.",
          ],
          [
            "Family Plus non controlla i sistemi interni di Google. Per dettagli sul trattamento da parte di Google consulta ",
            link(GOOGLE_PRIVACY, "policies.google.com/privacy"),
            " e ",
            link(GOOGLE_ADS, "policies.google.com/technologies/ads"),
            ".",
          ],
          [
            "I contenuti testuali di famiglia (nomi liste, attività, documenti, note, ecc.) non vengono inviati a AdMob come payload pubblicitario. La pubblicità è infrastruttura di presentazione sul dispositivo, separata dai modelli di dominio/CloudKit.",
          ],
        ],
      },
      {
        id: "ump",
        heading: "12. Google User Messaging Platform (UMP) e consenso",
        paragraphs: [
          [
            "Dove richiesto, Family Plus usa Google User Messaging Platform per aggiornare lo stato di consenso e presentare i moduli privacy/consenso di Google. L’applicabilità geografica è determinata dall’infrastruttura UMP/Google, non dalla lingua dell’app o del dispositivo.",
          ],
          [
            "Informazioni su UMP: ",
            link(GOOGLE_UMP, "support.google.com/admob (UMP)"),
            ". Se la richiesta UMP fallisce, l’app continua a funzionare: la pubblicità può non essere disponibile finché non è lecito/consentito richiederla.",
          ],
        ],
      },
      {
        id: "personalizzata",
        heading: "13. Pubblicità personalizzata e non personalizzata",
        paragraphs: [
          [
            "A seconda del consenso e delle regole applicabili, Google può servire annunci personalizzati dove consentito, oppure annunci non personalizzati/limitati. Family Plus non implementa una richiesta App Tracking Transparency (ATT) nella configurazione attuale: non chiediamo il permesso di tracciamento Apple per l’IDFA.",
          ],
          [
            "L’assenza di ATT non equivale a “nessuna pubblicità”: gli annunci possono comunque essere mostrati nei limiti tecnici e giuridici previsti da Google e dal consenso UMP.",
          ],
        ],
      },
      {
        id: "info-ads",
        heading: "14. Informazioni tipicamente collegate alla pubblicità",
        paragraphs: [
          [
            "Le tecnologie pubblicitarie di Google possono trattare, a titolo esemplificativo e non esaustivo, identificativi tecnici del dispositivo, informazioni grossolane su ambiente/app, segnali di diagnostica e sicurezza, misurazione delle prestazioni degli annunci, prevenzione frodi e controllo frequenza. I dettagli esatti dipendono da Google e dal contesto di consenso.",
          ],
          [
            "Family Plus può conservare in locale contatori/timestamp minimi per applicare limiti di frequenza agli interstitial. Non profiliamo i contenuti di famiglia per pubblicità.",
          ],
        ],
      },
      {
        id: "scelte",
        heading: "15. Scelte privacy e modifica del consenso",
        paragraphs: [
          [
            "Dove UMP indica che è richiesto un punto di ingresso alle privacy options, Family Plus può mostrare in Altro → Impostazioni una voce per riaprire il modulo privacy di Google. Se UMP non richiede tale ingresso, la voce può non essere visibile.",
          ],
          [
            "Puoi anche gestire limiti pubblicitari e tracking dalle Impostazioni iOS/iPadOS (Privacy e sicurezza) e, ove disponibile, dalle scelte Google. Per assistenza vedi ",
            { href: FAMILYPLUS_SUPPORT_PATH, label: "Supporto" },
            ".",
          ],
        ],
      },
      {
        id: "terze-parti",
        heading: "16. Servizi di terze parti",
        paragraphs: [
          [
            "Apple: App Store, iCloud/CloudKit, notifiche di sistema, framework di piattaforma. Google: Mobile Ads / AdMob e UMP. Non usiamo Firebase Analytics per Family Plus nella configurazione attuale descritta in questa informativa.",
          ],
        ],
      },
      {
        id: "conservazione",
        heading: "17. Conservazione",
        paragraphs: [
          [
            "I contenuti di famiglia restano sul dispositivo e, se sincronizzati, nell’infrastruttura iCloud/CloudKit associata agli account coinvolti, finché li mantieni o finché la share/iCloud lo consente.",
          ],
          [
            "I contatori locali legati alla frequenza annunci restano sul dispositivo. I log di diagnostica pubblicitaria in build di sviluppo non sono destinati alle build di produzione rumorose.",
          ],
        ],
      },
      {
        id: "cancellazione",
        heading: "18. Eliminazione dei dati locali e disinstallazione",
        paragraphs: [
          [
            "Disinstallare Family Plus rimuove i dati locali dell’app dal dispositivo. Contenuti già sincronizzati in iCloud/CloudKit o presenti su altri dispositivi dei partecipanti possono restare secondo le regole Apple e lo stato della share.",
          ],
          [
            "Per rimuovere dati da uno spazio condiviso potrebbe essere necessario agire come organizzatore, lasciare la famiglia o usare i controlli iCloud del dispositivo. Non esiste un “account Family Plus” centralizzato da eliminare presso di noi.",
          ],
        ],
      },
      {
        id: "condivisione-dati",
        heading: "19. Considerazioni sui dati in famiglia condivisa",
        paragraphs: [
          [
            "I partecipanti autorizzati possono vedere e, se permesso, modificare contenuti dello spazio condiviso. Prima di condividere, valuta cosa è appropriato rendere visibile agli altri membri.",
          ],
        ],
      },
      {
        id: "sicurezza",
        heading: "20. Sicurezza",
        paragraphs: [
          [
            "Adottiamo misure ragionevoli a livello di prodotto (architettura local-first, separazione dei confini pubblicitari dai contenuti di famiglia, uso di framework Apple). Nessun sistema è immune da rischi. Proteggi il dispositivo e l’account iCloud.",
          ],
        ],
      },
      {
        id: "minori",
        heading: "21. Contesto familiare e minori",
        paragraphs: [
          [
            "Family Plus è un organizer per famiglie in senso generale: non è presentata come app rivolta esclusivamente ai bambini. I genitori/tutori restano responsabili dell’uso del dispositivo, della condivisione e dei contenuti inseriti.",
          ],
        ],
      },
      {
        id: "internazionale",
        heading: "22. Trattamenti internazionali",
        paragraphs: [
          [
            "Apple e Google possono trattare informazioni su infrastrutture situate in diversi Paesi. L’uso di iCloud e AdMob implica il ricorso a tali infrastrutture secondo le condizioni dei rispettivi fornitori.",
          ],
        ],
      },
      {
        id: "diritti",
        heading: "23. Diritti dell’interessato",
        paragraphs: [
          [
            "Nei limiti della normativa applicabile puoi chiedere accesso, rettifica, cancellazione, limitazione o opposizione riguardo ai trattamenti di cui Fernando Piras è titolare, scrivendo a ",
            { href: `mailto:${contactEmail}`, label: contactEmail },
            ".",
          ],
          [
            "Per dati trattati autonomamente da Apple o Google, rivolgiti ai rispettivi canali. Puoi anche contattare l’autorità di controllo competente (in Italia, Garante per la protezione dei dati personali).",
          ],
        ],
      },
      {
        id: "modifiche",
        heading: "24. Modifiche",
        paragraphs: [
          [
            "Possiamo aggiornare questa pagina se cambia il prodotto o se dobbiamo chiarire una pratica. La data di aggiornamento è in cima. La versione di riferimento è pubblicata su ",
            link(
              `https://fernandopiras.com${FAMILYPLUS_PRIVACY_PATH}`,
              "fernandopiras.com/familyplus/privacy",
            ),
            ".",
          ],
        ],
      },
      {
        id: "contatti",
        heading: "25. Contatti e documenti correlati",
        paragraphs: [
          [
            "Privacy: ",
            { href: `mailto:${contactEmail}`, label: contactEmail },
            ". ",
            { href: FAMILYPLUS_TERMS_PATH, label: "Termini di utilizzo" },
            " · ",
            { href: FAMILYPLUS_SUPPORT_PATH, label: "Supporto" },
            ".",
          ],
        ],
      },
    ],
  };
}

function englishDocument(contactEmail: string): CieloStorieLegalDocument {
  return {
    kind: "privacy",
    locale: "en",
    htmlLang: "en",
    product: "Family Plus",
    eyebrow: "Family Plus",
    title: "Privacy Policy",
    lead:
      "This policy describes how Family Plus handles information in the iOS and iPadOS app: family content managed locally and via iCloud/CloudKit, on-device preferences, notifications, and Google AdMob plus Google User Messaging Platform (UMP) for advertising.",
    updatedLabel: "Last updated",
    updatedDisplay: "August 25, 2026",
    updatedISO: FAMILYPLUS_PRIVACY_UPDATED_ISO,
    tocLabel: "Contents",
    languageLabel: "Language",
    languageCurrent: "English",
    otherLanguageLabel: "Italiano",
    otherLanguageHref: FAMILYPLUS_PRIVACY_PATH,
    breadcrumbHome: "Home",
    breadcrumbLegal: "Legal",
    breadcrumbCurrent: "Family Plus Privacy",
    metaTitle: "Family Plus — Privacy Policy",
    metaDescription:
      "Family Plus Privacy Policy: local data, iCloud/CloudKit, family sharing, Google AdMob, UMP, and advertising choices.",
    contactEmail,
    summaryTitle: "In short",
    summaryBody:
      "Family Plus is local-first: family content stays on device and may sync through Apple iCloud/CloudKit. The app integrates Google AdMob and UMP for ads. Family content is not sent to Google as ad creative payload. There is no Family Plus password account—sharing identity goes through Apple/iCloud.",
    sections: [
      {
        id: "introduction",
        heading: "1. Introduction",
        paragraphs: [
          [
            "Family Plus is an iOS and iPadOS app for organizing family life: calendar and events, shopping lists, tasks, meals, documents, birthdays and occasions, reminders, and shared family spaces.",
          ],
          [
            "This page describes practices that match the current product. It separates (A) content and preferences tied to family-organizer features from (B) information that third-party advertising technologies—especially Google Mobile Ads / AdMob and UMP—may process.",
          ],
          [
            "We do not claim “zero data” or GDPR/CCPA certification. If the product changes, we will update this policy.",
          ],
        ],
      },
      {
        id: "controller",
        heading: "2. Controller and contact",
        paragraphs: [
          [
            "The controller for Family Plus is Fernando Piras, the app developer, operating from Italy.",
          ],
          [
            "Email: ",
            { href: `mailto:${contactEmail}`, label: contactEmail },
            ".",
          ],
          [
            "Website: ",
            link("https://fernandopiras.com", "fernandopiras.com"),
            ". Legal hub: ",
            link("https://fernandopiras.com/legal", "fernandopiras.com/legal"),
            ".",
          ],
          [
            "No DPO is appointed. We do not publish a VAT number, separate company name, or street address here—those details are not provided as the app’s legal identity on this site.",
          ],
        ],
      },
      {
        id: "scope",
        heading: "3. Scope",
        paragraphs: [
          [
            "This policy covers the Family Plus iOS/iPadOS app and Family Plus legal/support pages on fernandopiras.com.",
          ],
          [
            "It does not govern Apple’s own processing (iCloud, CloudKit, App Store, system notifications) or Google’s own processing (AdMob, UMP, advertising infrastructure). Those providers apply their own policies.",
          ],
        ],
      },
      {
        id: "user-content",
        heading: "4. Information you provide in Family Plus",
        paragraphs: [
          [
            "Depending on use, you may create content such as: family space name, calendar events, shopping lists and items, tasks, meals, documents and attachments, birthdays and occasions, notes, and other text you enter.",
          ],
          [
            "This content is created by you (and invited family participants). Family Plus does not require an app-operated email/password account.",
          ],
        ],
      },
      {
        id: "local-storage",
        heading: "5. Local storage",
        paragraphs: [
          [
            "Family Plus is local-first: organizer data is stored on device primarily with SwiftData. Local writes succeed first; cloud sync, when enabled, is eventual.",
          ],
          [
            "Some preferences (for example app language, onboarding completion, and minimal counters for interstitial frequency) remain device-local and are not synced as family content through CloudKit.",
          ],
        ],
      },
      {
        id: "icloud",
        heading: "6. iCloud and CloudKit",
        paragraphs: [
          [
            "When you use family sharing/sync features, Family Plus relies on Apple’s iCloud/CloudKit infrastructure. Access depends on the iCloud account and device settings.",
          ],
          [
            "Apple processes data under its own policy: ",
            link(APPLE_PRIVACY, "apple.com/legal/privacy"),
            ". We do not claim end-to-end encryption beyond what the Apple services actually used provide.",
          ],
        ],
      },
      {
        id: "ckshare",
        heading: "7. Family sharing (CKShare)",
        paragraphs: [
          [
            "You can create a family space and invite participants through Apple sharing (CKShare). Roles and permissions (for example organizer/participant and edit rights) depend on the share configuration and lifecycle.",
          ],
          [
            "If you leave a shared space, revoke an invite, or iCloud is unavailable, access to shared content may change or stop. See also ",
            { href: FAMILYPLUS_SUPPORT_EN_PATH, label: "Family Plus Support" },
            ".",
          ],
        ],
      },
      {
        id: "documents",
        heading: "8. Documents and attachments",
        paragraphs: [
          [
            "You may store family documents and attachments. Attachments may be kept locally and, where the product supports it, synchronized through CloudKit.",
          ],
          [
            "You remain responsible for not uploading unlawful content and for sharing sensitive documents only with appropriate participants. Document contents are not used by Family Plus for ad profiling.",
          ],
        ],
      },
      {
        id: "notifications",
        heading: "9. Notifications and reminders",
        paragraphs: [
          [
            "Family Plus may use Apple notification APIs for reminders related to events, tasks, and occasions, according to in-app preferences and system permission.",
          ],
          [
            "Reminder notifications are not advertising notifications. You can manage authorization and categories in iOS/iPadOS Settings and in Family Plus Reminder settings.",
          ],
        ],
      },
      {
        id: "advertising",
        heading: "10. Advertising",
        paragraphs: [
          [
            "Family Plus is free and, in the current version, uses advertising as its monetization model. This policy does not describe Family Plus subscriptions or in-app purchases.",
          ],
          [
            "Formats currently shown in the product: adaptive banners (Today, Calendar, Shopping, Tasks) and frequency-capped interstitials at eligible moments (for example after a Shopping completion action). There are no App Open ads. Rewarded-ad infrastructure may exist technically, but it is not offered to users as a reward or unlock in the current version.",
          ],
          [
            "No banners on onboarding, Family Hub, Documents, Reminders, language settings, or More, per product placement policy.",
          ],
        ],
      },
      {
        id: "admob",
        heading: "11. Google AdMob / Google Mobile Ads",
        paragraphs: [
          [
            "The app integrates the Google Mobile Ads SDK (Google AdMob) to request and display ads. Google may process device and ad-interaction information under its rules and the consent message configuration.",
          ],
          [
            "Family Plus does not control Google’s internal systems. For Google’s processing, see ",
            link(GOOGLE_PRIVACY, "policies.google.com/privacy"),
            " and ",
            link(GOOGLE_ADS, "policies.google.com/technologies/ads"),
            ".",
          ],
          [
            "Family content text (list names, tasks, documents, notes, and similar) is not sent to AdMob as advertising payload. Ads are on-device presentation infrastructure, separate from domain/CloudKit models.",
          ],
        ],
      },
      {
        id: "ump",
        heading: "12. Google User Messaging Platform (UMP) and consent",
        paragraphs: [
          [
            "Where required, Family Plus uses Google User Messaging Platform to update consent status and present Google’s privacy/consent forms. Geographic applicability is determined by UMP/Google infrastructure—not by the app or device language.",
          ],
          [
            "UMP information: ",
            link(GOOGLE_UMP, "support.google.com/admob (UMP)"),
            ". If a UMP request fails, the app keeps working; ads may stay unavailable until requesting them is allowed.",
          ],
        ],
      },
      {
        id: "personalized",
        heading: "13. Personalized and non-personalized ads",
        paragraphs: [
          [
            "Depending on consent and applicable rules, Google may serve personalized ads where permitted, or non-personalized/limited ads. Family Plus does not implement an App Tracking Transparency (ATT) prompt in the current configuration: we do not request Apple’s tracking permission for IDFA.",
          ],
          [
            "Lack of ATT does not mean “no ads”: ads may still appear within Google’s and UMP consent constraints.",
          ],
        ],
      },
      {
        id: "ad-info",
        heading: "14. Advertising-related information",
        paragraphs: [
          [
            "Google advertising technologies may process, without limitation, technical device identifiers, coarse app/environment signals, diagnostics and security signals, ad performance measurement, fraud prevention, and frequency control. Exact details depend on Google and the consent context.",
          ],
          [
            "Family Plus may store minimal local counters/timestamps to enforce interstitial frequency caps. We do not profile family content for advertising.",
          ],
        ],
      },
      {
        id: "choices",
        heading: "15. Privacy choices and changing consent",
        paragraphs: [
          [
            "When UMP reports that a privacy-options entry point is required, Family Plus may show a Settings row under More to reopen Google’s privacy form. If UMP does not require that entry point, the row may not appear.",
          ],
          [
            "You can also manage advertising and tracking limits in iOS/iPadOS Settings (Privacy & Security) and, where available, through Google choices. See ",
            { href: FAMILYPLUS_SUPPORT_EN_PATH, label: "Support" },
            " for help.",
          ],
        ],
      },
      {
        id: "third-parties",
        heading: "16. Third-party services",
        paragraphs: [
          [
            "Apple: App Store, iCloud/CloudKit, system notifications, platform frameworks. Google: Mobile Ads / AdMob and UMP. We do not use Firebase Analytics for Family Plus in the configuration described here.",
          ],
        ],
      },
      {
        id: "retention",
        heading: "17. Retention",
        paragraphs: [
          [
            "Family content remains on device and, if synced, in iCloud/CloudKit associated with the relevant accounts for as long as you keep it or the share/iCloud state allows.",
          ],
          [
            "Local ad-frequency counters remain on device. Noisy advertising diagnostics are for development builds, not production logging.",
          ],
        ],
      },
      {
        id: "deletion",
        heading: "18. Deleting local data and uninstalling",
        paragraphs: [
          [
            "Uninstalling Family Plus removes the app’s local data from that device. Content already synced in iCloud/CloudKit or present on other participants’ devices may remain under Apple’s rules and share state.",
          ],
          [
            "Removing shared-space data may require organizer actions, leaving the family, or iCloud controls. There is no centralized Family Plus account to delete with us.",
          ],
        ],
      },
      {
        id: "shared-data",
        heading: "19. Shared-family data considerations",
        paragraphs: [
          [
            "Authorized participants may view and, if permitted, edit shared-space content. Before sharing, consider what is appropriate for other members to see.",
          ],
        ],
      },
      {
        id: "security",
        heading: "20. Security",
        paragraphs: [
          [
            "We apply reasonable product measures (local-first design, separation of advertising boundaries from family content, Apple frameworks). No system is risk-free. Protect the device and iCloud account.",
          ],
        ],
      },
      {
        id: "children",
        heading: "21. Family context and children",
        paragraphs: [
          [
            "Family Plus is a general family organizer; it is not presented as an app directed only at children. Parents/guardians remain responsible for device use, sharing, and entered content.",
          ],
        ],
      },
      {
        id: "international",
        heading: "22. International processing",
        paragraphs: [
          [
            "Apple and Google may process information on infrastructure in multiple countries. Using iCloud and AdMob involves those infrastructures under each provider’s terms.",
          ],
        ],
      },
      {
        id: "rights",
        heading: "23. Your rights",
        paragraphs: [
          [
            "Where applicable law allows, you may request access, rectification, erasure, restriction, or objection regarding processing for which Fernando Piras is controller by emailing ",
            { href: `mailto:${contactEmail}`, label: contactEmail },
            ".",
          ],
          [
            "For data processed independently by Apple or Google, use their channels. You may also contact your supervisory authority (in Italy, the Garante).",
          ],
        ],
      },
      {
        id: "changes",
        heading: "24. Changes",
        paragraphs: [
          [
            "We may update this page if the product changes or we need to clarify a practice. The update date is at the top. The reference version is published at ",
            link(
              `https://fernandopiras.com${FAMILYPLUS_PRIVACY_PATH}`,
              "fernandopiras.com/familyplus/privacy",
            ),
            ".",
          ],
        ],
      },
      {
        id: "contact",
        heading: "25. Contact and related documents",
        paragraphs: [
          [
            "Privacy: ",
            { href: `mailto:${contactEmail}`, label: contactEmail },
            ". ",
            { href: FAMILYPLUS_TERMS_EN_PATH, label: "Terms of Use" },
            " · ",
            { href: FAMILYPLUS_SUPPORT_EN_PATH, label: "Support" },
            ".",
          ],
        ],
      },
    ],
  };
}
