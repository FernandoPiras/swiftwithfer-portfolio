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
      "Assistenza per CieloStorie su iPhone e iPad: lettura, profili, preferiti, pubblicità, acquisto Rimuovi pubblicità, consenso e risoluzione dei problemi più comuni.",
    updatedLabel: "Ultimo aggiornamento",
    updatedDisplay: "19 agosto 2026",
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
      "Supporto ufficiale CieloStorie: Reader, profili bambini, preferiti, annunci, Rimuovi pubblicità, ripristino acquisti e opzioni privacy.",
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
            "CieloStorie è gratuita: tutte le storie sono leggibili senza acquisto. Non serve un account. La lingua dell’interfaccia segue la lingua del dispositivo (italiano o inglese; altre lingue del sistema usano l’inglese).",
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
            "Non ci sono annunci nel Reader. Puoi chiudere il Reader in qualsiasi momento; il progresso viene salvato sul dispositivo.",
          ],
        ],
      },
      {
        id: "profili",
        heading: "Profili bambini",
        paragraphs: [
          [
            "I profili si creano e gestiscono nell’area genitori, dietro il parental gate. Ogni profilo ha nome, età, interessi e avatar. I dati restano sul dispositivo.",
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
        id: "annunci",
        heading: "Pubblicità",
        paragraphs: [
          [
            "Nella versione gratuita possono comparire banner in Home e in Esplora, e un interstitial solo dopo la chiusura del Reader, con limiti di frequenza.",
          ],
          [
            "Se non vedi annunci, può dipendere dal consenso UMP, da una connessione assente al momento del caricamento, o dall’acquisto Rimuovi pubblicità attivo.",
          ],
          [
            "Dettagli: ",
            { href: CIELOSTORIE_PRIVACY_PATH, label: "Informativa sulla privacy" },
            ".",
          ],
        ],
      },
      {
        id: "remove-ads",
        heading: "Rimuovi pubblicità",
        paragraphs: [
          [
            "Acquisto una tantum nell’area genitori. Il prezzo è quello mostrato dall’App Store al momento dell’acquisto. Dopo l’acquisto verificato, banner e interstitial previsti dall’app non vengono mostrati.",
          ],
          [
            "Se hai già acquistato su un altro dispositivo con lo stesso Apple ID, usa Ripristina acquisti nell’area genitori.",
          ],
          [
            "Per problemi di pagamento o rimborsi contatta Apple; CieloStorie non gestisce direttamente le ricevute.",
          ],
        ],
      },
      {
        id: "consenso",
        heading: "Opzioni privacy (consenso annunci)",
        paragraphs: [
          [
            "“Opzioni privacy” nell’area genitori riapre il modulo Google UMP quando disponibile. È distinto dalla Informativa sulla privacy del sito: serve a gestire le scelte pubblicitarie richieste da Google dove applicabile.",
          ],
          [
            "Se il consenso non consente annunci, l’app non li carica ma le storie restano leggibili.",
          ],
        ],
      },
      {
        id: "offline",
        heading: "Uso offline",
        paragraphs: [
          [
            "Storie, artwork e audio sono inclusi nell’app: la lettura funziona senza connessione. Annunci, consenso UMP e caricamento prodotto StoreKit richiedono rete quando necessari; in assenza di rete l’app non deve bloccarti dalla lettura.",
          ],
        ],
      },
      {
        id: "faq",
        heading: "Domande frequenti",
        bullets: [
          [
            "Non trovo il prezzo di Rimuovi pubblicità: serve connessione e prodotto disponibile nell’App Store del tuo Paese. Senza prezzo l’acquisto resta disabilitato; le storie restano leggibili.",
          ],
          [
            "L’app è in inglese ma il dispositivo è italiano (o viceversa): verifica la lingua per app in Impostazioni iOS → CieloStorie → Lingua preferita.",
          ],
          [
            "Ho perso un profilo: i profili sono solo sul dispositivo. Se hai eliminato il profilo o disinstallato l’app, non possiamo recuperarlo da un server CieloStorie perché non esiste.",
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
      "Help for CieloStorie on iPhone and iPad: reading, profiles, favourites, ads, Remove Ads purchase, consent, and common troubleshooting.",
    updatedLabel: "Last updated",
    updatedDisplay: "19 August 2026",
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
      "Official CieloStorie support: Reader, child profiles, favourites, ads, Remove Ads, restore purchases, and privacy options.",
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
            "CieloStorie is free: every story is readable without purchase. No account is required. The interface language follows the device language (Italian or English; other system languages fall back to English).",
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
            "There are no ads in the Reader. You can close the Reader at any time; progress is saved on the device.",
          ],
        ],
      },
      {
        id: "profiles",
        heading: "Child profiles",
        paragraphs: [
          [
            "Profiles are created and managed in the Parent Area, behind the parental gate. Each profile has a name, age, interests, and avatar. Data stays on the device.",
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
        id: "ads",
        heading: "Advertising",
        paragraphs: [
          [
            "In the free version, banners may appear on Home and Explore, and an interstitial only after closing the Reader, subject to frequency limits.",
          ],
          [
            "If you see no ads, UMP consent, missing network at load time, or an active Remove Ads purchase may be the reason.",
          ],
          [
            "Details: ",
            { href: CIELOSTORIE_PRIVACY_EN_PATH, label: "Privacy Policy" },
            ".",
          ],
        ],
      },
      {
        id: "remove-ads",
        heading: "Remove Ads",
        paragraphs: [
          [
            "One-time purchase in the Parent Area. The price is what the App Store shows at purchase time. After a verified purchase, planned banners and interstitials are not shown.",
          ],
          [
            "If you already purchased on another device with the same Apple ID, use Restore Purchases in the Parent Area.",
          ],
          [
            "For billing or refund issues contact Apple; CieloStorie does not handle receipts directly.",
          ],
        ],
      },
      {
        id: "consent",
        heading: "Privacy options (ad consent)",
        paragraphs: [
          [
            "Privacy options in the Parent Area reopens the Google UMP form when available. This is separate from the website Privacy Policy: it manages advertising choices required by Google where applicable.",
          ],
          [
            "If consent does not allow ads, the app does not load them but stories remain readable.",
          ],
        ],
      },
      {
        id: "offline",
        heading: "Offline use",
        paragraphs: [
          [
            "Stories, artwork, and audio ship inside the app: reading works without a connection. Ads, UMP consent, and StoreKit product loading need network when required; without network the app should not block reading.",
          ],
        ],
      },
      {
        id: "faq",
        heading: "Frequently asked questions",
        bullets: [
          [
            "Remove Ads price missing: network and App Store product availability in your country are required. Without a price the purchase stays disabled; stories remain readable.",
          ],
          [
            "Wrong app language: check per-app language in iOS Settings → CieloStorie → Preferred Language.",
          ],
          [
            "Lost a profile: profiles are device-only. If you deleted the profile or uninstalled the app, we cannot recover it from a CieloStorie server because none exists.",
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
