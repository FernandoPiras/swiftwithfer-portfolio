import type {
  CieloStorieLegalDocument,
  CieloStorieLegalLocale,
} from "@/config/cielostorie-legal-types";
import {
  FAMILYPLUS_PRIVACY_EN_PATH,
  FAMILYPLUS_PRIVACY_PATH,
  FAMILYPLUS_SUPPORT_EN_PATH,
  FAMILYPLUS_SUPPORT_PATH,
  FAMILYPLUS_SUPPORT_UPDATED_ISO,
  FAMILYPLUS_TERMS_EN_PATH,
  FAMILYPLUS_TERMS_PATH,
} from "@/config/familyplus-legal-paths";

export {
  FAMILYPLUS_SUPPORT_EN_PATH,
  FAMILYPLUS_SUPPORT_PATH,
  FAMILYPLUS_SUPPORT_UPDATED_ISO,
} from "@/config/familyplus-legal-paths";

export function getFamilyPlusSupportDocument(
  locale: CieloStorieLegalLocale,
  contactEmail: string,
): CieloStorieLegalDocument {
  return locale === "en"
    ? englishDocument(contactEmail)
    : italianDocument(contactEmail);
}

function italianDocument(contactEmail: string): CieloStorieLegalDocument {
  return {
    kind: "support",
    locale: "it",
    htmlLang: "it",
    product: "Family Plus",
    eyebrow: "Family Plus",
    title: "Supporto",
    lead:
      "Aiuto per Family Plus su iPhone e iPad: spazi famiglia, iCloud, sync, spesa, calendario, attività, pasti, documenti, ricorrenze, promemoria, lingua e scelte pubblicitarie.",
    updatedLabel: "Ultimo aggiornamento",
    updatedDisplay: "25 agosto 2026",
    updatedISO: FAMILYPLUS_SUPPORT_UPDATED_ISO,
    tocLabel: "Indice",
    languageLabel: "Lingua",
    languageCurrent: "Italiano",
    otherLanguageLabel: "English",
    otherLanguageHref: FAMILYPLUS_SUPPORT_EN_PATH,
    breadcrumbHome: "Home",
    breadcrumbLegal: "Legal",
    breadcrumbCurrent: "Supporto Family Plus",
    metaTitle: "Family Plus — Support",
    metaDescription:
      "Supporto ufficiale Family Plus: famiglia iCloud, sync, moduli organizer, promemoria, lingua e privacy pubblicitaria.",
    contactEmail,
    summaryTitle: "Prima di scrivere",
    summaryBody:
      "Indica versione dell’app, modello dispositivo, versione iOS/iPadOS e i passaggi per riprodurre il problema. Per privacy e annunci consulta anche l’Informativa sulla privacy.",
    sections: [
      {
        id: "contatti",
        heading: "Contatti",
        paragraphs: [
          [
            "Email: ",
            { href: `mailto:${contactEmail}`, label: contactEmail },
          ],
          [
            "Sito: ",
            {
              href: "https://fernandopiras.com",
              label: "fernandopiras.com",
              external: true,
            },
          ],
          ["Oggetto consigliato: Family Plus — richiesta assistenza"],
          ["Tempo medio di risposta: entro 2 giorni lavorativi."],
          [
            "Documenti: ",
            { href: FAMILYPLUS_PRIVACY_PATH, label: "Privacy" },
            " · ",
            { href: FAMILYPLUS_TERMS_PATH, label: "Termini" },
            ".",
          ],
        ],
      },
      {
        id: "inizio",
        heading: "Per iniziare",
        paragraphs: [
          [
            "Dopo l’onboarding (se mostrato), usa le schede Oggi, Calendario, Spesa, Attività e Altro. In Altro trovi Famiglia, Pasti, Compleanni e ricorrenze, Documenti, Promemoria e Lingua.",
          ],
          [
            "Per collaborare con altre persone crea o unisciti a uno spazio famiglia da Altro → Famiglia. Serve tipicamente iCloud.",
          ],
        ],
      },
      {
        id: "famiglia",
        heading: "Spazi famiglia e inviti",
        paragraphs: [
          [
            "L’organizzatore crea lo spazio e prepara la condivisione Apple (CKShare). L’invito passa dai canali Apple (ad esempio Messaggi o Mail). I partecipanti accettano con l’account iCloud corretto.",
          ],
          [
            "Ruoli e permessi di modifica dipendono dalla share. Se non puoi modificare, potresti essere in sola lettura o la share potrebbe essere limitata/revocata.",
          ],
        ],
      },
      {
        id: "icloud",
        heading: "iCloud e sincronizzazione",
        paragraphs: [
          [
            "Family Plus è local-first: le modifiche sul dispositivo vengono salvate subito; la sync CloudKit è eventuale e richiede rete e iCloud disponibili.",
          ],
          [
            "Se iCloud non è raggiungibile vedrai messaggi di stato nell’app. L’app resta utilizzabile in locale quanto possibile; la condivisione può restare in attesa.",
          ],
        ],
      },
      {
        id: "moduli",
        heading: "Spesa, calendario, attività, pasti, documenti, ricorrenze",
        paragraphs: [
          [
            "Spesa: liste e voci, modalità spesa a schermo intero, pulizia delle completate. Calendario e Attività: eventi/task con dettaglio e creazione. Pasti e ricorrenze: da Altro. Documenti: archivio famiglia con allegati; non è previsto un banner pubblicitario in Documenti.",
          ],
        ],
      },
      {
        id: "promemoria",
        heading: "Promemoria",
        paragraphs: [
          [
            "In Altro → Promemoria puoi attivare i promemoria e le categorie. Servono i permessi di notifica di sistema. I promemoria non sono annunci.",
          ],
        ],
      },
      {
        id: "lingua",
        heading: "Lingua",
        paragraphs: [
          [
            "In Altro → Lingua puoi scegliere Automatico, Italiano o English. La lingua dell’app non determina il consenso pubblicitario geografico (UMP).",
          ],
        ],
      },
      {
        id: "ads",
        heading: "Pubblicità e scelte privacy",
        paragraphs: [
          [
            "Family Plus è gratuita e mostra annunci Google AdMob (banner sulle schede operative principali e, a volte, interstitial a frequenza limitata). Onboarding, Family Hub, Documenti, Promemoria e Lingua non mostrano banner.",
          ],
          [
            "Se Google UMP richiede un ingresso alle privacy options, compare una voce in Impostazioni per riaprire il modulo Google. Se non è richiesto, la voce può non apparire. Dettagli: ",
            { href: FAMILYPLUS_PRIVACY_PATH, label: "Informativa sulla privacy" },
            ".",
          ],
        ],
      },
      {
        id: "faq-famiglia",
        heading: "FAQ — Perché non vedo la famiglia su un altro dispositivo?",
        paragraphs: [
          [
            "Verifica di essere sullo stesso spazio famiglia, con iCloud attivo sullo stesso Apple ID (o come partecipante accettato), rete disponibile e sync non in errore. Dopo un invito appena accettato può servire un breve tempo di sync.",
          ],
        ],
      },
      {
        id: "faq-invito",
        heading: "FAQ — Come invito un familiare?",
        paragraphs: [
          [
            "Da Altro apri Famiglia e usa il flusso di condivisione Apple dell’app (CKShare). Completa l’invito dal foglio di sistema e fai accettare l’invito sul dispositivo del partecipante.",
          ],
        ],
      },
      {
        id: "faq-modifica",
        heading: "FAQ — Perché non posso modificare?",
        paragraphs: [
          [
            "Potresti essere partecipante in sola lettura, la share potrebbe essere revocata, oppure iCloud/account non risultano disponibili. Controlla il ruolo in Famiglia e i messaggi di stato in alto.",
          ],
        ],
      },
      {
        id: "faq-leave",
        heading: "FAQ — Cosa succede se lascio la famiglia?",
        paragraphs: [
          [
            "Lasciare uno spazio condiviso rimuove l’accesso a quel contenuto condiviso sul tuo account secondo le regole della share. I dati sugli altri dispositivi dei partecipanti non vengono “cancellati da remoto” da te in automatico oltre a quanto previsto da Apple/CloudKit.",
          ],
        ],
      },
      {
        id: "faq-promemoria",
        heading: "FAQ — Perché non ricevo i promemoria?",
        paragraphs: [
          [
            "Controlla Impostazioni iOS → Notifiche → Family Plus, lo switch principale e le categorie in Altro → Promemoria, e che eventi/attività/ricorrenze abbiano orari coerenti. In Low Power o Focus iOS può ritardare le notifiche.",
          ],
        ],
      },
      {
        id: "faq-ads",
        heading: "FAQ — Perché vedo annunci?",
        paragraphs: [
          [
            "Family Plus è gratuita e usa AdMob. Gli annunci compaiono sulle schede consentite quando il consenso/SDK lo permettono. Non esistono in questa versione sblocchi a pagamento descritti come “Remove Ads”.",
          ],
        ],
      },
      {
        id: "faq-privacy-choices",
        heading: "FAQ — Come cambio le scelte pubblicitarie?",
        paragraphs: [
          [
            "Se presente, usa Altro → Impostazioni → Scelte privacy (o etichetta equivalente) per riaprire il modulo Google. Altrimenti usa Impostazioni iOS → Privacy e sicurezza e le opzioni Google disponibili. La voce in-app compare solo quando UMP la richiede.",
          ],
        ],
      },
      {
        id: "faq-account",
        heading: "FAQ — Serve un account Family Plus? Serve iCloud?",
        paragraphs: [
          [
            "Non c’è un account email/password Family Plus. Per la condivisione famiglia e la sync tra dispositivi serve tipicamente iCloud. Senza iCloud puoi comunque usare molte funzioni in locale sul singolo dispositivo.",
          ],
        ],
      },
      {
        id: "faq-documenti",
        heading: "FAQ — Come gestisco gli allegati dei documenti?",
        paragraphs: [
          [
            "Apri Documenti da Altro, aggiungi o apri un documento e gestisci gli allegati dal flusso dell’app. Conserva copie importanti anche fuori dall’app. Documenti non mostra banner pubblicitari.",
          ],
        ],
      },
    ],
  };
}

function englishDocument(contactEmail: string): CieloStorieLegalDocument {
  return {
    kind: "support",
    locale: "en",
    htmlLang: "en",
    product: "Family Plus",
    eyebrow: "Family Plus",
    title: "Support",
    lead:
      "Help for Family Plus on iPhone and iPad: family spaces, iCloud, sync, shopping, calendar, tasks, meals, documents, occasions, reminders, language, and advertising privacy choices.",
    updatedLabel: "Last updated",
    updatedDisplay: "August 25, 2026",
    updatedISO: FAMILYPLUS_SUPPORT_UPDATED_ISO,
    tocLabel: "Contents",
    languageLabel: "Language",
    languageCurrent: "English",
    otherLanguageLabel: "Italiano",
    otherLanguageHref: FAMILYPLUS_SUPPORT_PATH,
    breadcrumbHome: "Home",
    breadcrumbLegal: "Legal",
    breadcrumbCurrent: "Family Plus Support",
    metaTitle: "Family Plus — Support",
    metaDescription:
      "Official Family Plus support: iCloud family spaces, sync, organizer modules, reminders, language, and advertising privacy.",
    contactEmail,
    summaryTitle: "Before you write",
    summaryBody:
      "Include app version, device model, iOS/iPadOS version, and steps to reproduce. For privacy and ads, also see the Privacy Policy.",
    sections: [
      {
        id: "contact",
        heading: "Contact",
        paragraphs: [
          [
            "Email: ",
            { href: `mailto:${contactEmail}`, label: contactEmail },
          ],
          [
            "Website: ",
            {
              href: "https://fernandopiras.com",
              label: "fernandopiras.com",
              external: true,
            },
          ],
          ["Suggested subject: Family Plus — support request"],
          ["Typical reply time: within 2 business days."],
          [
            "Documents: ",
            { href: FAMILYPLUS_PRIVACY_EN_PATH, label: "Privacy" },
            " · ",
            { href: FAMILYPLUS_TERMS_EN_PATH, label: "Terms" },
            ".",
          ],
        ],
      },
      {
        id: "getting-started",
        heading: "Getting started",
        paragraphs: [
          [
            "After onboarding (when shown), use Today, Calendar, Shopping, Tasks, and More. Under More you will find Family, Meals, Birthdays & occasions, Documents, Reminders, and Language.",
          ],
          [
            "To collaborate, create or join a family space from More → Family. iCloud is typically required.",
          ],
        ],
      },
      {
        id: "family",
        heading: "Family spaces and invites",
        paragraphs: [
          [
            "The organizer creates the space and starts Apple sharing (CKShare). The invite is delivered through Apple channels (for example Messages or Mail). Participants must accept with the correct iCloud account.",
          ],
          [
            "Roles and edit permissions depend on the share. If you cannot edit, you may be read-only or the share may be limited/revoked.",
          ],
        ],
      },
      {
        id: "icloud",
        heading: "iCloud and synchronization",
        paragraphs: [
          [
            "Family Plus is local-first: on-device changes save immediately; CloudKit sync is eventual and needs network plus available iCloud.",
          ],
          [
            "If iCloud is unavailable you will see status messages. The app remains usable locally where possible; sharing may wait.",
          ],
        ],
      },
      {
        id: "modules",
        heading: "Shopping, calendar, tasks, meals, documents, occasions",
        paragraphs: [
          [
            "Shopping: lists and items, full-screen shopping mode, clear completed. Calendar and Tasks: events/tasks with detail and create flows. Meals and occasions: under More. Documents: family archive with attachments; Documents does not show an ad banner.",
          ],
        ],
      },
      {
        id: "reminders",
        heading: "Reminders",
        paragraphs: [
          [
            "Under More → Reminders you can enable reminders and categories. System notification permission is required. Reminders are not ads.",
          ],
        ],
      },
      {
        id: "language",
        heading: "Language",
        paragraphs: [
          [
            "Under More → Language you can choose Automatic, Italian, or English. App language does not determine advertising consent geography (UMP).",
          ],
        ],
      },
      {
        id: "ads",
        heading: "Advertising and privacy choices",
        paragraphs: [
          [
            "Family Plus is free and shows Google AdMob ads (banners on main operational tabs and, sometimes, frequency-capped interstitials). Onboarding, Family Hub, Documents, Reminders, and Language do not show banners.",
          ],
          [
            "If Google UMP requires a privacy-options entry point, a Settings row appears to reopen Google’s form. If not required, the row may be hidden. Details: ",
            { href: FAMILYPLUS_PRIVACY_EN_PATH, label: "Privacy Policy" },
            ".",
          ],
        ],
      },
      {
        id: "faq-family",
        heading: "FAQ — Why isn’t my family on another device?",
        paragraphs: [
          [
            "Confirm you are in the same family space, with iCloud enabled for the same Apple ID (or as an accepted participant), network available, and no sync fault. After accepting an invite, sync can take a short time.",
          ],
        ],
      },
      {
        id: "faq-invite",
        heading: "FAQ — How do I invite someone?",
        paragraphs: [
          [
            "From More open Family and use the app’s Apple sharing flow (CKShare). Complete the system sheet invite and have the participant accept on their device.",
          ],
        ],
      },
      {
        id: "faq-edit",
        heading: "FAQ — Why can’t I edit a shared family?",
        paragraphs: [
          [
            "You may be a read-only participant, the share may be revoked, or iCloud/account may be unavailable. Check your role in Family and any status banners.",
          ],
        ],
      },
      {
        id: "faq-leave",
        heading: "FAQ — What happens if I leave a shared family?",
        paragraphs: [
          [
            "Leaving a shared space removes your access to that shared content under share rules. Data on other participants’ devices is not automatically wiped by you beyond Apple/CloudKit behavior.",
          ],
        ],
      },
      {
        id: "faq-reminders",
        heading: "FAQ — Why aren’t reminders appearing?",
        paragraphs: [
          [
            "Check iOS Settings → Notifications → Family Plus, the master switch and categories under More → Reminders, and that events/tasks/occasions have coherent times. Low Power Mode or Focus may delay notifications.",
          ],
        ],
      },
      {
        id: "faq-ads",
        heading: "FAQ — Why do I see advertisements?",
        paragraphs: [
          [
            "Family Plus is free and uses AdMob. Ads appear on allowed surfaces when consent/SDK allow. This version does not describe a paid “Remove Ads” unlock.",
          ],
        ],
      },
      {
        id: "faq-privacy-choices",
        heading: "FAQ — How do I change advertising privacy choices?",
        paragraphs: [
          [
            "If shown, use More → Settings → Privacy choices (or equivalent label) to reopen Google’s form. Otherwise use iOS Settings → Privacy & Security and available Google options. The in-app row appears only when UMP requires it.",
          ],
        ],
      },
      {
        id: "faq-account",
        heading: "FAQ — Do I need a Family Plus account? Do I need iCloud?",
        paragraphs: [
          [
            "There is no Family Plus email/password account. Family sharing and cross-device sync typically need iCloud. Without iCloud you can still use many features locally on one device.",
          ],
        ],
      },
      {
        id: "faq-documents",
        heading: "FAQ — How do I manage document attachments?",
        paragraphs: [
          [
            "Open Documents from More, add or open a document, and manage attachments in the app flow. Keep important copies outside the app. Documents does not show ad banners.",
          ],
        ],
      },
    ],
  };
}
