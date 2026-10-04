import type {
  CieloStorieLegalDocument,
  CieloStorieLegalLocale,
} from "@/config/cielostorie-legal-types";
import {
  FAMILYPLUS_DELETE_DATA_EN_PATH,
  FAMILYPLUS_DELETE_DATA_PATH,
  FAMILYPLUS_DELETE_DATA_UPDATED_ISO,
  FAMILYPLUS_PRIVACY_EN_PATH,
  FAMILYPLUS_PRIVACY_PATH,
  FAMILYPLUS_SUPPORT_EN_PATH,
  FAMILYPLUS_SUPPORT_PATH,
  FAMILYPLUS_TERMS_EN_PATH,
  FAMILYPLUS_TERMS_PATH,
} from "@/config/familyplus-legal-paths";

export {
  FAMILYPLUS_DELETE_DATA_EN_PATH,
  FAMILYPLUS_DELETE_DATA_PATH,
  FAMILYPLUS_DELETE_DATA_UPDATED_ISO,
} from "@/config/familyplus-legal-paths";

export function getFamilyPlusDeleteDataDocument(
  locale: CieloStorieLegalLocale,
  contactEmail: string,
): CieloStorieLegalDocument {
  return locale === "en"
    ? englishDocument(contactEmail)
    : italianDocument(contactEmail);
}

function italianDocument(contactEmail: string): CieloStorieLegalDocument {
  return {
    kind: "delete-data",
    locale: "it",
    htmlLang: "it",
    product: "Family Plus",
    eyebrow: "Family Plus",
    title: "Eliminazione dati",
    lead:
      "Family Plus non ha un account email/password gestito dallo sviluppatore. Questa pagina spiega cosa puoi rimuovere sul dispositivo, cosa resta in iCloud/CloudKit e come lasciare uno spazio famiglia.",
    updatedLabel: "Ultimo aggiornamento",
    updatedDisplay: "4 ottobre 2026",
    updatedISO: FAMILYPLUS_DELETE_DATA_UPDATED_ISO,
    tocLabel: "Indice",
    languageLabel: "Lingua",
    languageCurrent: "Italiano",
    otherLanguageLabel: "English",
    otherLanguageHref: FAMILYPLUS_DELETE_DATA_EN_PATH,
    breadcrumbHome: "Home",
    breadcrumbLegal: "Legal",
    breadcrumbCurrent: "Eliminazione dati Family Plus",
    metaTitle: "Family Plus — Eliminazione dati",
    metaDescription:
      "Come rimuovere i dati di Family Plus: dati locali, lasciare uno spazio famiglia, limiti di iCloud/CloudKit e disinstallazione.",
    contactEmail,
    summaryTitle: "In sintesi",
    summaryBody:
      "Non esiste «Elimina account Family Plus» perché non c’è un account Family Plus con password. Puoi eliminare dati locali disinstallando l’app, e un partecipante può lasciare lo spazio famiglia (pulizia locale dopo esito positivo). I contenuti già sincronizzati in iCloud restano sotto il controllo di Apple e degli altri partecipanti.",
    sections: [
      {
        id: "nessun-account",
        heading: "1. Nessun account Family Plus convenzionale",
        paragraphs: [
          [
            "Family Plus non richiede email/password, Sign in with Apple né un backend gestito da Fernando Piras per l’identità. La collaborazione famigliare passa dall’account iCloud del dispositivo e dalla condivisione CloudKit (CKShare).",
          ],
          [
            "Per questo non offriamo un pulsante «Elimina account» lato sviluppatore: non esiste un profilo Family Plus sul nostro server da cancellare.",
          ],
        ],
      },
      {
        id: "cosa-e-locale",
        heading: "2. Cosa resta sul dispositivo",
        paragraphs: [
          [
            "Sul dispositivo Family Plus conserva in locale (SwiftData e file di allegato, più preferenze) contenuti come liste della spesa, attività, eventi, pasti, ricorrenze, documenti, membri e cronologia uscite spesa, oltre a preferenze (lingua, onboarding, limiti di frequenza annunci, e programma dei promemoria su questo dispositivo).",
          ],
          [
            "Disinstallare Family Plus rimuove i dati dell’app da quel dispositivo. Non cancella automaticamente i contenuti già presenti nello spazio famiglia iCloud di altre persone.",
          ],
        ],
        bullets: [
          ["Disinstallazione = wipe locale su quel dispositivo."],
          [
            "ICloud/CloudKit condiviso può restare attivo per organizzatore e altri partecipanti.",
          ],
        ],
      },
      {
        id: "icloud",
        heading: "3. iCloud e CloudKit",
        paragraphs: [
          [
            "Quando usi uno spazio famiglia, i contenuti possono sincronizzarsi nel container iCloud iCloud.app.familyplus.FamilyPlus gestito da Apple. Lo sviluppatore non opera un pannello per cancellare i record CloudKit degli utenti.",
          ],
          [
            "La rimozione definitiva dei dati cloud dipende dalle regole Apple (spazio famiglia, partecipanti, eventuale gestione share) e da ciò che resta sugli altri dispositivi.",
          ],
        ],
      },
      {
        id: "lasciare",
        heading: "4. Lasciare uno spazio famiglia (partecipante)",
        paragraphs: [
          [
            "Se sei un partecipante (non l’organizzatore), in Altro → Famiglia puoi lasciare lo spazio famiglia. L’app tenta di rimuoverti dalla share CloudKit; se l’operazione riesce, elimina i dati di quella famiglia da questo dispositivo.",
          ],
          [
            "Se l’uscita CloudKit fallisce, i dati locali restano per evitare di perdere contenuti senza aver completato l’uscita.",
          ],
          [
            "Lasciare lo spazio non elimina lo spazio dell’organizzatore né i dati sugli altri dispositivi.",
          ],
        ],
      },
      {
        id: "organizzatore",
        heading: "5. Organizzatore dello spazio",
        paragraphs: [
          [
            "L’organizzatore gestisce gli inviti tramite l’interfaccia di condivisione di sistema Apple. Nell’app attuale non c’è un’azione «elimina tutta la famiglia» che distrugga lo spazio per tutti i partecipanti.",
          ],
          [
            "Per revocare accessi o chiudere la collaborazione usa i controlli di condivisione iCloud/CKShare di sistema e, se necessario, rimuovi l’app dai dispositivi coinvolti.",
          ],
        ],
      },
      {
        id: "documenti",
        heading: "6. Documenti e allegati",
        paragraphs: [
          [
            "Gli allegati possono essere salvati in locale e, dove previsto, sincronizzati come asset CloudKit. Eliminare un documento nell’app rimuove i relativi dati locali e richiede la sync per aggiornare gli altri dispositivi. Lasciare lo spazio o disinstallare elimina gli allegati locali di quel dispositivo.",
          ],
        ],
      },
      {
        id: "notifiche",
        heading: "7. Notifiche",
        paragraphs: [
          [
            "I promemoria (incluse le preferenze del programma) e le notifiche di attività collaborativa sono gestiti sul dispositivo. Disinstallare l’app o revocare i permessi di notifica interrompe queste notifiche locali. Le preferenze del programma non sono in CloudKit. Le sottoscrizioni silent per la sync dipendono da iCloud/Apple.",
          ],
        ],
      },
      {
        id: "pubblicita",
        heading: "8. Pubblicità e scelte privacy",
        paragraphs: [
          [
            "Google AdMob e UMP possono conservare stato di consenso e identificatori tecnici secondo le regole Google. Disinstallare l’app rimuove lo stato locale; non equivale a cancellare tutti i trattamenti Google su altri servizi. Dove UMP lo richiede, in Altro → Centro di controllo → La tua privacy puoi riaprire le privacy options di Google. Vedi anche ",
            { href: FAMILYPLUS_PRIVACY_PATH, label: "Informativa sulla privacy" },
            ".",
          ],
        ],
      },
      {
        id: "passi",
        heading: "9. Passi consigliati",
        bullets: [
          [
            "Partecipante: Altro → Famiglia → lascia lo spazio (se disponibile), poi eventualmente disinstalla.",
          ],
          [
            "Organizzatore: gestisci o revoca la share con i controlli Apple; rimuovi l’app dai dispositivi non più usati.",
          ],
          [
            "Tutti: Impostazioni iOS → Family Plus (o Notifiche) per revocare permessi; gestisci limiti pubblicitari in Privacy e sicurezza.",
          ],
        ],
      },
      {
        id: "contatti",
        heading: "10. Contatti",
        paragraphs: [
          [
            "Domande su questa guida: ",
            { href: `mailto:${contactEmail}`, label: contactEmail },
            ". Indica versione app, dispositivo e se sei organizzatore o partecipante. Non possiamo cancellare da remoto i dati iCloud di terzi.",
          ],
          [
            "Altri documenti: ",
            { href: FAMILYPLUS_PRIVACY_PATH, label: "Privacy" },
            " · ",
            { href: FAMILYPLUS_TERMS_PATH, label: "Termini" },
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
    kind: "delete-data",
    locale: "en",
    htmlLang: "en",
    product: "Family Plus",
    eyebrow: "Family Plus",
    title: "Data deletion",
    lead:
      "Family Plus has no developer-hosted email/password account. This page explains what you can remove on device, what may remain in iCloud/CloudKit, and how leaving a family space works.",
    updatedLabel: "Last updated",
    updatedDisplay: "October 4, 2026",
    updatedISO: FAMILYPLUS_DELETE_DATA_UPDATED_ISO,
    tocLabel: "Contents",
    languageLabel: "Language",
    languageCurrent: "English",
    otherLanguageLabel: "Italiano",
    otherLanguageHref: FAMILYPLUS_DELETE_DATA_PATH,
    breadcrumbHome: "Home",
    breadcrumbLegal: "Legal",
    breadcrumbCurrent: "Family Plus data deletion",
    metaTitle: "Family Plus — Data deletion",
    metaDescription:
      "How to remove Family Plus data: local storage, leaving a family space, iCloud/CloudKit limits, and uninstall.",
    contactEmail,
    summaryTitle: "At a glance",
    summaryBody:
      "There is no “Delete Family Plus account” action because there is no Family Plus password account. Uninstall clears local app data. A participant can leave the family space (local purge after a successful CloudKit leave). Synced iCloud content remains under Apple’s and other participants’ control.",
    sections: [
      {
        id: "no-account",
        heading: "1. No conventional Family Plus account",
        paragraphs: [
          [
            "Family Plus does not use email/password, Sign in with Apple, or a developer-hosted identity backend. Family collaboration uses the device iCloud account and CloudKit sharing (CKShare).",
          ],
          [
            "We therefore do not offer a developer-side “Delete account” button: there is no Family Plus profile on our servers to erase.",
          ],
        ],
      },
      {
        id: "local",
        heading: "2. What stays on the device",
        paragraphs: [
          [
            "On device, Family Plus stores family content locally (SwiftData and attachment files, plus preferences): shopping lists, tasks, events, meals, occasions, documents, members, shopping-trip history, and preferences such as language, onboarding, ad frequency limits, and the reminder schedule on this device.",
          ],
          [
            "Uninstalling Family Plus removes the app’s data from that device. It does not automatically erase content already present in other people’s shared iCloud family space.",
          ],
        ],
        bullets: [
          ["Uninstall = local wipe on that device."],
          [
            "Shared iCloud/CloudKit data may remain for the organizer and other participants.",
          ],
        ],
      },
      {
        id: "icloud",
        heading: "3. iCloud and CloudKit",
        paragraphs: [
          [
            "When you use a family space, content may sync in Apple’s iCloud container for Family Plus. The developer does not operate a console to delete users’ CloudKit records.",
          ],
          [
            "Permanent cloud deletion depends on Apple’s rules (family space, participants, share management) and what remains on other devices.",
          ],
        ],
      },
      {
        id: "leave",
        heading: "4. Leaving a family space (participant)",
        paragraphs: [
          [
            "If you are a participant (not the organizer), More → Family lets you leave the family space. The app attempts to remove you from the CloudKit share; if that succeeds, it deletes that family’s data from this device.",
          ],
          [
            "If the CloudKit leave fails, local data is preserved so you do not lose content without completing the leave.",
          ],
          [
            "Leaving does not delete the organizer’s space or data on other devices.",
          ],
        ],
      },
      {
        id: "organizer",
        heading: "5. Family space organizer",
        paragraphs: [
          [
            "The organizer manages invites through Apple’s system sharing UI. The current app does not include a “delete entire family” action that destroys the space for every participant.",
          ],
          [
            "To revoke access or end collaboration, use iCloud/CKShare system controls and, if needed, remove the app from devices that should no longer keep a local copy.",
          ],
        ],
      },
      {
        id: "documents",
        heading: "6. Documents and attachments",
        paragraphs: [
          [
            "Attachments may be stored locally and, where supported, synced as CloudKit assets. Deleting a document in-app removes local data and relies on sync to update other devices. Leaving the space or uninstalling removes local attachments on that device.",
          ],
        ],
      },
      {
        id: "notifications",
        heading: "7. Notifications",
        paragraphs: [
          [
            "Reminders (including schedule preferences) and collaborative activity alerts are handled on device. Uninstalling or revoking notification permission stops those local notifications. Schedule preferences are not in CloudKit. Silent subscriptions used for sync depend on iCloud/Apple.",
          ],
        ],
      },
      {
        id: "ads",
        heading: "8. Advertising and privacy choices",
        paragraphs: [
          [
            "Google AdMob and UMP may keep consent state and technical identifiers under Google’s rules. Uninstalling clears local state; it is not a full erasure of Google processing elsewhere. Where UMP requires it, More → Control Center → Your privacy may offer Google’s privacy options. See also the ",
            { href: FAMILYPLUS_PRIVACY_EN_PATH, label: "Privacy Policy" },
            ".",
          ],
        ],
      },
      {
        id: "steps",
        heading: "9. Suggested steps",
        bullets: [
          [
            "Participant: More → Family → leave the space (when available), then uninstall if desired.",
          ],
          [
            "Organizer: manage or revoke the share with Apple controls; remove the app from unused devices.",
          ],
          [
            "Everyone: iOS Settings → Family Plus (or Notifications) to revoke permissions; manage ad/tracking limits under Privacy & Security.",
          ],
        ],
      },
      {
        id: "contact",
        heading: "10. Contact",
        paragraphs: [
          [
            "Questions about this guide: ",
            { href: `mailto:${contactEmail}`, label: contactEmail },
            ". Include app version, device, and whether you are organizer or participant. We cannot remotely delete third parties’ iCloud data.",
          ],
          [
            "Other documents: ",
            { href: FAMILYPLUS_PRIVACY_EN_PATH, label: "Privacy" },
            " · ",
            { href: FAMILYPLUS_TERMS_EN_PATH, label: "Terms" },
            " · ",
            { href: FAMILYPLUS_SUPPORT_EN_PATH, label: "Support" },
            ".",
          ],
        ],
      },
    ],
  };
}
