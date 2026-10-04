import type {
  CieloStorieLegalDocument,
  CieloStorieLegalInline,
  CieloStorieLegalLocale,
} from "@/config/cielostorie-legal-types";
import {
  FAMILYPLUS_PRIVACY_EN_PATH,
  FAMILYPLUS_PRIVACY_PATH,
  FAMILYPLUS_SUPPORT_EN_PATH,
  FAMILYPLUS_SUPPORT_PATH,
  FAMILYPLUS_TERMS_EN_PATH,
  FAMILYPLUS_TERMS_PATH,
  FAMILYPLUS_TERMS_UPDATED_ISO,
} from "@/config/familyplus-legal-paths";

export {
  FAMILYPLUS_TERMS_EN_PATH,
  FAMILYPLUS_TERMS_PATH,
  FAMILYPLUS_TERMS_UPDATED_ISO,
} from "@/config/familyplus-legal-paths";

export function getFamilyPlusTermsDocument(
  locale: CieloStorieLegalLocale,
  contactEmail: string,
): CieloStorieLegalDocument {
  return locale === "en"
    ? englishDocument(contactEmail)
    : italianDocument(contactEmail);
}

const privacyIT: CieloStorieLegalInline[] = [
  "Il trattamento dei dati personali è descritto nell’",
  { href: FAMILYPLUS_PRIVACY_PATH, label: "Informativa sulla privacy" },
  ".",
];

const privacyEN: CieloStorieLegalInline[] = [
  "Personal data processing is described in the ",
  { href: FAMILYPLUS_PRIVACY_EN_PATH, label: "Privacy Policy" },
  ".",
];

function italianDocument(contactEmail: string): CieloStorieLegalDocument {
  return {
    kind: "terms",
    locale: "it",
    htmlLang: "it",
    product: "Family Plus",
    eyebrow: "Family Plus",
    title: "Termini di utilizzo",
    lead:
      "Questi Termini regolano l’uso di Family Plus su iPhone (iOS): organizer famigliare local-first, condivisione via iCloud/CloudKit, promemoria e pubblicità tramite Google AdMob.",
    updatedLabel: "Ultimo aggiornamento",
    updatedDisplay: "4 ottobre 2026",
    updatedISO: FAMILYPLUS_TERMS_UPDATED_ISO,
    tocLabel: "Indice",
    languageLabel: "Lingua",
    languageCurrent: "Italiano",
    otherLanguageLabel: "English",
    otherLanguageHref: FAMILYPLUS_TERMS_EN_PATH,
    breadcrumbHome: "Home",
    breadcrumbLegal: "Legal",
    breadcrumbCurrent: "Termini Family Plus",
    metaTitle: "Family Plus — Terms of Use",
    metaDescription:
      "Termini di utilizzo di Family Plus: app gratuita con pubblicità, iCloud, spazi famiglia, contenuti utente e responsabilità.",
    contactEmail,
    summaryTitle: "In sintesi",
    summaryBody:
      "Family Plus è gratuita e monetizzata con pubblicità (niente abbonamenti Family Plus in questi Termini). Serve iCloud per la condivisione famiglia. I contenuti che inserisci restano sotto la tua responsabilità. La sync non è garantita come servizio continuo.",
    sections: [
      {
        id: "accettazione",
        heading: "1. Accettazione",
        paragraphs: [
          [
            "Scaricando, installando o usando Family Plus accetti questi Termini. Se non li accetti, non usare l’app.",
          ],
          privacyIT,
        ],
      },
      {
        id: "descrizione",
        heading: "2. Descrizione del servizio",
        paragraphs: [
          [
            "Family Plus è un organizer per famiglie su iPhone (iOS, orientamento verticale): Casa, Calendario, Spesa, Attività, Tavola, Memoria, Compleanni e ricorrenze, promemoria e La Famiglia condivisa.",
          ],
          [
            "Funzioni, layout e disponibilità possono evolvere. Non promettiamo che ogni funzione resti identica nel tempo.",
          ],
        ],
      },
      {
        id: "idoneita",
        heading: "3. Idoneità e uso appropriato",
        paragraphs: [
          [
            "Devi avere capacità legale di accettare questi Termini secondo la legge del tuo Paese, e rispettare le regole App Store applicabili. Se l’app è usata in un contesto familiare con minori, un adulto responsabile deve supervisionare l’uso del dispositivo e della condivisione.",
          ],
        ],
      },
      {
        id: "icloud",
        heading: "4. Requisiti iCloud",
        paragraphs: [
          [
            "Per creare o partecipare a uno spazio famiglia sincronizzato è tipicamente necessario un account iCloud funzionante e le relative autorizzazioni di sistema. Senza iCloud, molte funzioni locali possono restare disponibili sul singolo dispositivo, ma la condivisione e la sync tra dispositivi possono non funzionare.",
          ],
        ],
      },
      {
        id: "condivisione",
        heading: "5. Condivisione famiglia",
        paragraphs: [
          [
            "La condivisione usa meccanismi Apple (incluso CKShare). Inviti, accettazione, ruoli e revoche dipendono da Apple e dallo stato della share. Non controlliamo Messaggi, Mail o altri canali usati per consegnare l’invito.",
          ],
        ],
      },
      {
        id: "contenuti",
        heading: "6. Contenuti creati dagli utenti",
        paragraphs: [
          [
            "Restano tuoi (o dei rispettivi autori) i contenuti che inserisci. Concedi a Family Plus la licenza tecnica necessaria per salvarli, mostrarli e sincronizzarli sul tuo dispositivo e, se applicabile, tramite CloudKit verso i partecipanti autorizzati.",
          ],
        ],
      },
      {
        id: "responsabilita-condivisi",
        heading: "7. Responsabilità sui contenuti condivisi",
        paragraphs: [
          [
            "Sei responsabile di ciò che condividi con la famiglia e di verificare che i partecipanti siano appropriati. Non usare Family Plus per contenuti illegali, abusivi o che violino diritti di terzi.",
          ],
        ],
      },
      {
        id: "documenti",
        heading: "8. Documenti e allegati",
        paragraphs: [
          [
            "I documenti e gli allegati sono sotto la tua responsabilità. Conserva copie importanti anche fuori dall’app. Non garantiamo recupero illimitato dopo cancellazioni, leave dalla famiglia o problemi iCloud.",
          ],
        ],
      },
      {
        id: "promemoria",
        heading: "9. Notifiche e promemoria",
        paragraphs: [
          [
            "I promemoria dipendono dai permessi di sistema, dalle impostazioni in-app (incluso il programma dei promemoria sul dispositivo corrente) e dallo stato del dispositivo. Le preferenze del programma sono locali a questo iPhone e non vengono sincronizzate con CloudKit. Non sono un servizio di allarme medico o di emergenza.",
          ],
        ],
      },
      {
        id: "pubblicita",
        heading: "10. Pubblicità",
        paragraphs: [
          [
            "Nella versione attuale Family Plus mostra annunci tramite Google AdMob (banner e, in momenti idonei, interstitial a frequenza controllata). La pubblicità può cambiare nel tempo. Non sono previsti in questi Termini abbonamenti “Remove Ads” o piani premium Family Plus.",
          ],
          [
            "Le scelte di consenso pubblicitario, dove applicabili, sono gestite tramite Google UMP e, se richiesto, da una voce nelle impostazioni dell’app. Dettagli: ",
            { href: FAMILYPLUS_PRIVACY_PATH, label: "Informativa sulla privacy" },
            ".",
          ],
        ],
      },
      {
        id: "terze-parti",
        heading: "11. Servizi di terze parti",
        paragraphs: [
          [
            "L’app dipende da servizi Apple e Google. Interruzioni, limiti o modifiche di quei servizi possono influire su Family Plus senza che ciò costituisca inadempimento autonomo oltre a quanto previsto dalla legge.",
          ],
        ],
      },
      {
        id: "disponibilita",
        heading: "12. Disponibilità",
        paragraphs: [
          [
            "Cerchiamo di offrire un’esperienza stabile, ma non garantiamo assenza di errori, disponibilità continua o compatibilità con ogni dispositivo/versione di sistema futuri.",
          ],
        ],
      },
      {
        id: "sync",
        heading: "13. Nessuna garanzia di sincronizzazione ininterrotta",
        paragraphs: [
          [
            "La sync CloudKit è eventuale e dipende da rete, iCloud, quote, permessi e stato della share. Ritardi, conflitti o mancata consegna possono verificarsi. Non usare Family Plus come unico archivio di informazioni critiche senza backup.",
          ],
        ],
      },
      {
        id: "backup",
        heading: "14. Backup e informazioni importanti",
        paragraphs: [
          [
            "È tua responsabilità esportare o conservare altrove documenti e informazioni essenziali. La disinstallazione dell’app o la perdita dell’accesso iCloud possono comportare perdita di dati locali.",
          ],
        ],
      },
      {
        id: "uso-accettabile",
        heading: "15. Uso accettabile",
        paragraphs: [
          [
            "Non è consentito abusare dell’app, tentare accessi non autorizzati a spazi famiglia altrui, interferire con la stabilità del prodotto o usare Family Plus in violazione di legge.",
          ],
        ],
      },
      {
        id: "proprieta",
        heading: "16. Proprietà intellettuale",
        paragraphs: [
          [
            "Family Plus, marchi, design e codice restano di Fernando Piras o dei rispettivi titolari. Ti è concessa una licenza personale, non esclusiva e revocabile per usare l’app sul tuo dispositivo secondo questi Termini e le regole App Store.",
          ],
        ],
      },
      {
        id: "app-store",
        heading: "17. Rapporto con Apple / App Store",
        paragraphs: [
          [
            "La distribuzione avviene tramite Apple App Store. Apple non è parte di questi Termini tra te e Fernando Piras, salvo dove le regole Apple lo prevedano. Manutenzione e supporto dell’app sono responsabilità dello sviluppatore, nei limiti di questi Termini e della ",
            { href: FAMILYPLUS_SUPPORT_PATH, label: "pagina Supporto" },
            ".",
          ],
        ],
      },
      {
        id: "disclaimer",
        heading: "18. Esclusione di garanzie",
        paragraphs: [
          [
            "Nella misura massima consentita dalla legge, Family Plus è fornita “così com’è” e “come disponibile”, senza garanzie implicite di commerciabilità o idoneità a uno scopo particolare, oltre ai diritti inderogabili dei consumatori.",
          ],
        ],
      },
      {
        id: "responsabilita",
        heading: "19. Limitazione di responsabilità",
        paragraphs: [
          [
            "Nella misura massima consentita dalla legge, Fernando Piras non è responsabile per danni indiretti, perdita di dati non salvati altrove, interruzioni di iCloud/AdMob/rete, o uso improprio dell’app. Restano salvi i diritti che non possono essere esclusi per legge.",
          ],
        ],
      },
      {
        id: "modifiche-servizio",
        heading: "20. Modifiche al servizio",
        paragraphs: [
          [
            "Possiamo aggiornare, limitare o dismettere funzioni (incluse modalità pubblicitarie) per motivi tecnici, di sicurezza, di store o di prodotto.",
          ],
        ],
      },
      {
        id: "modifiche-termini",
        heading: "21. Modifiche ai Termini",
        paragraphs: [
          [
            "Possiamo aggiornare questi Termini. La data in cima indica la versione corrente. L’uso continuato dopo la pubblicazione può costituire accettazione, salvo diversa previsione inderogabile.",
          ],
        ],
      },
      {
        id: "cessazione",
        heading: "22. Cessazione",
        paragraphs: [
          [
            "Puoi smettere di usare l’app e disinstallarla in qualsiasi momento. Possiamo interrompere l’offerta dell’app o l’accesso a funzioni in caso di violazione dei Termini, obblighi di store o necessità tecniche.",
          ],
        ],
      },
      {
        id: "legge",
        heading: "23. Legge applicabile",
        paragraphs: [
          [
            "Salvo diversa previsione inderogabile per i consumatori, questi Termini sono regolati dalla legge italiana. Foro competente, ove ammesso, è quello del consumatore o, per utenti professionali, quello di Bologna, salvo norme imperative.",
          ],
        ],
      },
      {
        id: "contatti",
        heading: "24. Contatti",
        paragraphs: [
          [
            "Email: ",
            { href: `mailto:${contactEmail}`, label: contactEmail },
            ". ",
            { href: FAMILYPLUS_PRIVACY_PATH, label: "Privacy" },
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
    kind: "terms",
    locale: "en",
    htmlLang: "en",
    product: "Family Plus",
    eyebrow: "Family Plus",
    title: "Terms of Use",
    lead:
      "These Terms govern use of Family Plus on iPhone (iOS): a local-first family organizer, sharing via iCloud/CloudKit, reminders, and advertising through Google AdMob.",
    updatedLabel: "Last updated",
    updatedDisplay: "October 4, 2026",
    updatedISO: FAMILYPLUS_TERMS_UPDATED_ISO,
    tocLabel: "Contents",
    languageLabel: "Language",
    languageCurrent: "English",
    otherLanguageLabel: "Italiano",
    otherLanguageHref: FAMILYPLUS_TERMS_PATH,
    breadcrumbHome: "Home",
    breadcrumbLegal: "Legal",
    breadcrumbCurrent: "Family Plus Terms",
    metaTitle: "Family Plus — Terms of Use",
    metaDescription:
      "Family Plus Terms of Use: free app with advertising, iCloud, family spaces, user content, and responsibilities.",
    contactEmail,
    summaryTitle: "In short",
    summaryBody:
      "Family Plus is free and monetized with ads (no Family Plus subscriptions in these Terms). iCloud is required for family sharing. Content you enter remains your responsibility. Sync is not guaranteed as an uninterrupted service.",
    sections: [
      {
        id: "acceptance",
        heading: "1. Acceptance",
        paragraphs: [
          [
            "By downloading, installing, or using Family Plus you accept these Terms. If you do not accept them, do not use the app.",
          ],
          privacyEN,
        ],
      },
      {
        id: "description",
        heading: "2. Service description",
        paragraphs: [
          [
            "Family Plus is a family organizer for iPhone (iOS, portrait orientation): Family Home, Calendar, Shopping, Tasks, Family Table, Family Memory, Birthdays & occasions, reminders, and The Family shared space.",
          ],
          [
            "Features, layout, and availability may evolve. We do not promise that every feature will remain identical over time.",
          ],
        ],
      },
      {
        id: "eligibility",
        heading: "3. Eligibility and appropriate use",
        paragraphs: [
          [
            "You must be legally able to accept these Terms under your country’s law and comply with applicable App Store rules. If the app is used in a family context with children, a responsible adult must supervise device use and sharing.",
          ],
        ],
      },
      {
        id: "icloud",
        heading: "4. iCloud requirements",
        paragraphs: [
          [
            "Creating or joining a synced family space typically requires a working iCloud account and related system permissions. Without iCloud, many local features may still work on one device, but sharing and cross-device sync may not.",
          ],
        ],
      },
      {
        id: "sharing",
        heading: "5. Family sharing",
        paragraphs: [
          [
            "Sharing uses Apple mechanisms (including CKShare). Invites, acceptance, roles, and revocation depend on Apple and share state. We do not control Messages, Mail, or other channels used to deliver invites.",
          ],
        ],
      },
      {
        id: "content",
        heading: "6. User-created content",
        paragraphs: [
          [
            "Content you enter remains yours (or the respective authors’). You grant Family Plus the technical license needed to store, display, and sync it on your device and, where applicable, through CloudKit to authorized participants.",
          ],
        ],
      },
      {
        id: "shared-responsibility",
        heading: "7. Responsibility for shared content",
        paragraphs: [
          [
            "You are responsible for what you share with the family and for ensuring participants are appropriate. Do not use Family Plus for unlawful or abusive content or content that infringes others’ rights.",
          ],
        ],
      },
      {
        id: "documents",
        heading: "8. Documents and attachments",
        paragraphs: [
          [
            "Documents and attachments are your responsibility. Keep important copies outside the app. We do not guarantee unlimited recovery after deletions, leaving a family, or iCloud issues.",
          ],
        ],
      },
      {
        id: "reminders",
        heading: "9. Notifications and reminders",
        paragraphs: [
          [
            "Reminders depend on system permission, in-app settings (including the reminder schedule on the current device), and device state. Schedule preferences are local to this iPhone and are not synced with CloudKit. They are not a medical or emergency alert service.",
          ],
        ],
      },
      {
        id: "advertising",
        heading: "10. Advertising",
        paragraphs: [
          [
            "In the current version, Family Plus shows ads via Google AdMob (banners and, at eligible moments, frequency-capped interstitials). Advertising may change over time. These Terms do not provide Family Plus “Remove Ads” subscriptions or premium plans.",
          ],
          [
            "Advertising consent choices, where applicable, are handled through Google UMP and, when required, an in-app settings entry. Details: ",
            { href: FAMILYPLUS_PRIVACY_EN_PATH, label: "Privacy Policy" },
            ".",
          ],
        ],
      },
      {
        id: "third-parties",
        heading: "11. Third-party services",
        paragraphs: [
          [
            "The app depends on Apple and Google services. Outages, limits, or changes by those providers may affect Family Plus without creating liability beyond applicable law.",
          ],
        ],
      },
      {
        id: "availability",
        heading: "12. Availability",
        paragraphs: [
          [
            "We aim for a stable experience but do not guarantee error-free operation, continuous availability, or compatibility with every future device or OS version.",
          ],
        ],
      },
      {
        id: "sync",
        heading: "13. No guarantee of uninterrupted sync",
        paragraphs: [
          [
            "CloudKit sync is eventual and depends on network, iCloud, quotas, permissions, and share state. Delays, conflicts, or missed delivery can occur. Do not rely on Family Plus as the only store of critical information without backups.",
          ],
        ],
      },
      {
        id: "backups",
        heading: "14. Backups and important information",
        paragraphs: [
          [
            "You are responsible for exporting or storing essential documents elsewhere. Uninstalling the app or losing iCloud access may cause loss of local data.",
          ],
        ],
      },
      {
        id: "acceptable-use",
        heading: "15. Acceptable use",
        paragraphs: [
          [
            "You may not abuse the app, attempt unauthorized access to others’ family spaces, interfere with product stability, or use Family Plus unlawfully.",
          ],
        ],
      },
      {
        id: "ip",
        heading: "16. Intellectual property",
        paragraphs: [
          [
            "Family Plus, branding, design, and code remain Fernando Piras’s or their respective owners’. You receive a personal, non-exclusive, revocable license to use the app on your device under these Terms and App Store rules.",
          ],
        ],
      },
      {
        id: "app-store",
        heading: "17. Apple / App Store relationship",
        paragraphs: [
          [
            "Distribution is through the Apple App Store. Apple is not a party to these Terms between you and Fernando Piras except where Apple’s rules require otherwise. App maintenance and support are the developer’s responsibility within these Terms and the ",
            { href: FAMILYPLUS_SUPPORT_EN_PATH, label: "Support page" },
            ".",
          ],
        ],
      },
      {
        id: "disclaimer",
        heading: "18. Disclaimer",
        paragraphs: [
          [
            "To the maximum extent permitted by law, Family Plus is provided “as is” and “as available,” without implied warranties of merchantability or fitness for a particular purpose, beyond non-waivable consumer rights.",
          ],
        ],
      },
      {
        id: "liability",
        heading: "19. Limitation of liability",
        paragraphs: [
          [
            "To the maximum extent permitted by law, Fernando Piras is not liable for indirect damages, data loss not backed up elsewhere, iCloud/AdMob/network interruptions, or misuse of the app. Rights that cannot be excluded by law remain unaffected.",
          ],
        ],
      },
      {
        id: "service-changes",
        heading: "20. Changes to the service",
        paragraphs: [
          [
            "We may update, limit, or discontinue features (including advertising modes) for technical, security, store, or product reasons.",
          ],
        ],
      },
      {
        id: "terms-changes",
        heading: "21. Changes to these Terms",
        paragraphs: [
          [
            "We may update these Terms. The date at the top shows the current version. Continued use after publication may constitute acceptance, subject to mandatory rules.",
          ],
        ],
      },
      {
        id: "termination",
        heading: "22. Termination",
        paragraphs: [
          [
            "You may stop using and uninstall the app at any time. We may discontinue the app or features for Terms violations, store obligations, or technical necessity.",
          ],
        ],
      },
      {
        id: "law",
        heading: "23. Governing law",
        paragraphs: [
          [
            "Unless mandatory consumer rules require otherwise, these Terms are governed by Italian law. Competent courts, where permitted, are those of the consumer’s residence or, for business users, Bologna, subject to mandatory rules.",
          ],
        ],
      },
      {
        id: "contact",
        heading: "24. Contact",
        paragraphs: [
          [
            "Email: ",
            { href: `mailto:${contactEmail}`, label: contactEmail },
            ". ",
            { href: FAMILYPLUS_PRIVACY_EN_PATH, label: "Privacy" },
            " · ",
            { href: FAMILYPLUS_SUPPORT_EN_PATH, label: "Support" },
            ".",
          ],
        ],
      },
    ],
  };
}
