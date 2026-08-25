import type {
  CieloStorieLegalDocument,
  CieloStorieLegalLocale,
} from "@/config/cielostorie-legal-types";
import {
  CIELOSTORIE_PRIVACY_EN_PATH,
  CIELOSTORIE_PRIVACY_PATH,
  CIELOSTORIE_SUPPORT_EN_PATH,
  CIELOSTORIE_SUPPORT_PATH,
  CIELOSTORIE_SUPPORT_UPDATED_ISO,
  CIELOSTORIE_TERMS_EN_PATH,
  CIELOSTORIE_TERMS_PATH,
} from "@/config/cielostorie-legal-paths";

export {
  CIELOSTORIE_SUPPORT_EN_PATH,
  CIELOSTORIE_SUPPORT_PATH,
  CIELOSTORIE_SUPPORT_UPDATED_ISO,
} from "@/config/cielostorie-legal-paths";

export function getCieloStorieSupportDocument(
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
    product: "CieloStorie",
    eyebrow: "CieloStorie",
    title: "Supporto",
    lead:
      "Assistenza per CieloStorie su iPhone e iPad: lettura, profili, preferiti, audio e risoluzione dei problemi più comuni.",
    updatedLabel: "Ultimo aggiornamento",
    updatedDisplay: "25 agosto 2026",
    updatedISO: CIELOSTORIE_SUPPORT_UPDATED_ISO,
    tocLabel: "Indice",
    languageLabel: "Lingua",
    languageCurrent: "Italiano",
    otherLanguageLabel: "English",
    otherLanguageHref: CIELOSTORIE_SUPPORT_EN_PATH,
    breadcrumbHome: "Home",
    breadcrumbLegal: "Legal",
    breadcrumbCurrent: "Supporto CieloStorie",
    metaTitle: "Supporto — CieloStorie",
    metaDescription:
      "Supporto ufficiale CieloStorie: Reader, profili bambini, preferiti, audio e risoluzione problemi.",
    contactEmail,
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
          [
            "Oggetto consigliato: CieloStorie — richiesta assistenza",
          ],
          [
            "Tempo medio di risposta: entro 2 giorni lavorativi.",
          ],
        ],
      },
      {
        id: "intro",
        heading: "Informazioni utili da includere",
        bullets: [
          ["Modello iPhone/iPad e versione iOS/iPadOS."],
          [
            "Versione di CieloStorie (visibile in Area genitori → App → Versione).",
          ],
          ["Lingua del dispositivo o dell’app."],
          ["Descrizione del problema e passaggi per riprodurlo."],
          [
            "Screenshot se utili. Non inviare password Apple ID né dati sensibili non necessari.",
          ],
        ],
      },
      {
        id: "uso",
        heading: "Usare CieloStorie",
        paragraphs: [
          [
            "CieloStorie è gratuita: tutte le storie e le funzioni attualmente disponibili possono essere usate senza acquisti in-app o abbonamenti. Non serve un account. La lingua dell’interfaccia segue la lingua del dispositivo (italiano o inglese; altre lingue del sistema usano l’inglese).",
          ],
          [
            "Dalla Home puoi aprire la storia del giorno, continuare una lettura, esplorare per durata o aprire i classici. Il Reader si apre dal dettaglio storia con “Inizia a leggere”.",
          ],
        ],
      },
      {
        id: "reader",
        heading: "Reader",
        paragraphs: [
          [
            "Nel Reader scorri verticalmente se il testo è più lungo dell’area visibile. Usa i controlli in basso per pagina precedente, successiva o completamento.",
          ],
          [
            "Puoi chiudere il Reader in qualsiasi momento; il progresso viene salvato sul dispositivo. L’app non include pubblicità.",
          ],
        ],
      },
      {
        id: "profili",
        heading: "Profili bambini",
        paragraphs: [
          [
            "I profili si creano e gestiscono nell’Area Genitori, dietro un parental gate (verifica aritmetica per l’accesso all’Area Genitori). Ogni profilo ha nome, età, interessi e avatar. I dati restano sul dispositivo.",
          ],
          [
            "Il parental gate protegge l’accesso all’Area Genitori: non è un sistema di Parental Controls né di Age Assurance / verifica dell’età.",
          ],
          [
            "Puoi passare da un profilo all’altro dal selettore profilo in Home. Progressi e preferiti possono essere separati per profilo.",
          ],
        ],
      },
      {
        id: "progressi",
        heading: "Preferiti, progressi e Il Mio Cielo",
        paragraphs: [
          [
            "I preferiti si aggiungono dal dettaglio storia. I progressi di lettura e le storie completate alimentano “Continua a leggere” e “Il Mio Cielo”.",
          ],
          [
            "Eliminando un profilo o disinstallando l’app perdi i dati locali non salvati altrove. CieloStorie non offre un backup cloud proprio.",
          ],
        ],
      },
      {
        id: "audio",
        heading: "Audio nel Reader",
        paragraphs: [
          [
            "CieloStorie include paesaggi sonori locali. Non c’è narrazione registrata né streaming audio. Puoi disattivare il suono del Reader dall’area genitori (Esperienza → Suono Reader).",
          ],
          [
            "L’app non usa il microfono e non registra la voce.",
          ],
        ],
      },
      {
        id: "offline",
        heading: "Uso offline",
        paragraphs: [
          [
            "Storie, artwork e audio sono inclusi nell’app: la lettura funziona senza connessione. CieloStorie non richiede una connessione di rete per leggere.",
          ],
        ],
      },
      {
        id: "faq",
        heading: "Domande frequenti",
        bullets: [
          [
            "L’app è in inglese ma il dispositivo è italiano (o viceversa): verifica la lingua per app in Impostazioni iOS → CieloStorie → Lingua preferita.",
          ],
          [
            "Ho perso un profilo: i profili sono solo sul dispositivo. Se hai eliminato il profilo o disinstallato l’app, non possiamo recuperarlo da un server CieloStorie perché non esiste.",
          ],
          [
            "Non sento audio nel Reader: verifica che Suono Reader sia attivo nell’area genitori e che il dispositivo non sia in modalità silenziosa con volume troppo basso.",
          ],
          [
            "Voglio segnalare un contenuto: scrivi a ",
            { href: `mailto:${contactEmail}`, label: contactEmail },
            " con titolo storia e descrizione.",
          ],
        ],
      },
      {
        id: "legali",
        heading: "Documenti legali",
        paragraphs: [
          [
            { href: CIELOSTORIE_PRIVACY_PATH, label: "Informativa sulla privacy" },
            " · ",
            { href: CIELOSTORIE_TERMS_PATH, label: "Termini di utilizzo" },
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
    product: "CieloStorie",
    eyebrow: "CieloStorie",
    title: "Support",
    lead:
      "Help for CieloStorie on iPhone and iPad: reading, profiles, favourites, audio, and common troubleshooting.",
    updatedLabel: "Last updated",
    updatedDisplay: "25 August 2026",
    updatedISO: CIELOSTORIE_SUPPORT_UPDATED_ISO,
    tocLabel: "Contents",
    languageLabel: "Language",
    languageCurrent: "English",
    otherLanguageLabel: "Italiano",
    otherLanguageHref: CIELOSTORIE_SUPPORT_PATH,
    breadcrumbHome: "Home",
    breadcrumbLegal: "Legal",
    breadcrumbCurrent: "CieloStorie Support",
    metaTitle: "Support — CieloStorie",
    metaDescription:
      "Official CieloStorie support: Reader, child profiles, favourites, audio, and troubleshooting.",
    contactEmail,
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
          ["Suggested subject: CieloStorie — support request"],
          ["Typical response time: within 2 business days."],
        ],
      },
      {
        id: "intro",
        heading: "Helpful information to include",
        bullets: [
          ["iPhone/iPad model and iOS/iPadOS version."],
          [
            "CieloStorie version (Parent Area → App → Version).",
          ],
          ["Device or app language."],
          ["Problem description and steps to reproduce."],
          [
            "Screenshots if useful. Do not send Apple ID passwords or unnecessary sensitive data.",
          ],
        ],
      },
      {
        id: "using",
        heading: "Using CieloStorie",
        paragraphs: [
          [
            "CieloStorie is free: every story and feature currently available can be used without in-app purchases or subscriptions. No account is required. The interface language follows the device language (Italian or English; other system languages fall back to English).",
          ],
          [
            "From Home you can open the story of the day, continue reading, browse by duration, or open classics. The Reader opens from story detail with Start reading.",
          ],
        ],
      },
      {
        id: "reader",
        heading: "Reader",
        paragraphs: [
          [
            "In the Reader, scroll vertically if text is taller than the viewport. Use bottom controls for previous page, next page, or completion.",
          ],
          [
            "You can close the Reader at any time; progress is saved on the device. The app does not include advertising.",
          ],
        ],
      },
      {
        id: "profiles",
        heading: "Child profiles",
        paragraphs: [
          [
            "Profiles are created and managed in the Parent Area, behind a parental gate (an arithmetic check that gates access to the Parent Area). Each profile has a name, age, interests, and avatar. Data stays on the device.",
          ],
          [
            "The parental gate protects access to the Parent Area: it is not Parental Controls and not Age Assurance / age verification.",
          ],
          [
            "Switch profiles from the profile switcher on Home. Progress and favourites can be separate per profile.",
          ],
        ],
      },
      {
        id: "progress",
        heading: "Favourites, progress, and My Sky",
        paragraphs: [
          [
            "Add favourites from story detail. Reading progress and completed stories feed Continue reading and My Sky.",
          ],
          [
            "Deleting a profile or uninstalling the app removes local data not backed up elsewhere. CieloStorie does not offer its own cloud backup.",
          ],
        ],
      },
      {
        id: "audio",
        heading: "Reader audio",
        paragraphs: [
          [
            "CieloStorie includes local soundscapes. There is no recorded narration or audio streaming. You can turn Reader sound off in the Parent Area (Experience → Reader sound).",
          ],
          [
            "The app does not use the microphone and does not record voice.",
          ],
        ],
      },
      {
        id: "offline",
        heading: "Offline use",
        paragraphs: [
          [
            "Stories, artwork, and audio ship inside the app: reading works without a connection. CieloStorie does not require a network connection to read.",
          ],
        ],
      },
      {
        id: "faq",
        heading: "Frequently asked questions",
        bullets: [
          [
            "Wrong app language: check per-app language in iOS Settings → CieloStorie → Preferred Language.",
          ],
          [
            "Lost a profile: profiles are device-only. If you deleted the profile or uninstalled the app, we cannot recover it from a CieloStorie server because none exists.",
          ],
          [
            "No Reader audio: check that Reader sound is on in the Parent Area and that the device is not in Silent Mode with volume too low.",
          ],
          [
            "Content feedback: email ",
            { href: `mailto:${contactEmail}`, label: contactEmail },
            " with story title and description.",
          ],
        ],
      },
      {
        id: "legal",
        heading: "Legal documents",
        paragraphs: [
          [
            { href: CIELOSTORIE_PRIVACY_EN_PATH, label: "Privacy Policy" },
            " · ",
            { href: CIELOSTORIE_TERMS_EN_PATH, label: "Terms of Use" },
          ],
        ],
      },
    ],
  };
}
