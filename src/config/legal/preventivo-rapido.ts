import type { LegalDocument, LegalInline } from "@/config/legal/types";

const email: LegalInline = {
  href: "mailto:fernando@fernandopiras.com",
  label: "fernando@fernandopiras.com",
};

const siteUrl: LegalInline = {
  href: "https://www.fernandopiras.com",
  label: "https://www.fernandopiras.com",
  external: true,
};

export const preventivoRapidoDocuments: readonly LegalDocument[] = [
  {
    slug: "privacy",
    kind: "privacy",
    title: "Privacy Policy",
    hubLabel: "Privacy Policy",
    metaTitle: "Privacy Policy — PreventivoRapido",
    metaDescription:
      "Privacy Policy di PreventivoRapido: dati, documenti, abbonamenti e diritti GDPR.",
    updatedISO: "2026-05-10",
    updatedDisplay: "10 maggio 2026 (versione 2026.05)",
    sections: [
      {
        id: "titolare",
        heading: "1. Titolare del trattamento",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Il titolare del trattamento è il professionista/azienda che utilizza l'app per gestire preventivi, clienti e documenti. Inserire nei dati aziendali: denominazione completa, sede legale, contatto email privacy.",
            ],
          },
          {
            type: "paragraph",
            parts: [
              "I recapiti del titolare sono indicati nella sezione Profilo dell'app.",
            ],
          },
        ],
      },
      {
        id: "dpo",
        heading: "1-bis. Responsabile della protezione dati (DPO), se nominato",
        blocks: [
          {
            type: "paragraph",
            parts: ["Se applicabile, indicare nominativo e contatti del DPO."],
          },
        ],
      },
      {
        id: "dati",
        heading: "2. Dati trattati",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "L'app tratta: dati anagrafici e di contatto del professionista e dei clienti, dati dei documenti (preventivi, fatture/proforma), note/promemoria, dati tecnici minimi di funzionamento e dati di autenticazione account (email/password o identificativo Apple).",
            ],
          },
        ],
      },
      {
        id: "finalita",
        heading: "3. Finalità",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "I dati sono trattati per creare, archiviare e condividere preventivi e documenti fiscali, semplificare i flussi operativi del professionista e adempiere agli obblighi normativi applicabili.",
            ],
          },
        ],
      },
      {
        id: "base-giuridica",
        heading: "4. Base giuridica (art. 6 GDPR)",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Le basi giuridiche possono includere: esecuzione di misure precontrattuali/contrattuali, adempimento di obblighi legali, legittimo interesse del titolare. Eventuale consenso è richiesto ove necessario.",
            ],
          },
        ],
      },
      {
        id: "conservazione",
        heading: "5. Conservazione dati",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "I dati sono conservati localmente sul dispositivo. L'utente può esportarli o eliminarli tramite le funzioni in-app. I dati restano disponibili finché non vengono eliminati dall'utente o per il tempo richiesto dagli obblighi di legge fiscali e civilistici.",
            ],
          },
        ],
      },
      {
        id: "destinatari",
        heading: "6. Destinatari e categorie di destinatari",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "I dati possono essere comunicati a fornitori tecnici, provider email, provider di fatturazione elettronica e consulenti autorizzati, nei limiti delle finalità indicate e con adeguate garanzie contrattuali (art. 28 GDPR). L'invio avviene solo su azione dell'utente.",
            ],
          },
        ],
      },
      {
        id: "trasferimenti",
        heading: "7. Trasferimenti extra UE",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Se presenti trasferimenti verso Paesi terzi, questi avvengono nel rispetto degli artt. 44 e seguenti GDPR (decisioni di adeguatezza o garanzie adeguate).",
            ],
          },
        ],
      },
      {
        id: "sicurezza",
        heading: "8. Sicurezza (art. 32 GDPR)",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Le credenziali sensibili dei provider sono salvate in Keychain. È disponibile il blocco app con autenticazione dispositivo. I dati operativi sono salvati localmente sul dispositivo dell'utente.",
            ],
          },
        ],
      },
      {
        id: "permessi",
        heading: "8-bis. Servizi e permessi sistema",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "L'app può utilizzare notifiche locali (se autorizzate), composizione email tramite app Mail del dispositivo e accesso Apple per autenticazione.",
            ],
          },
        ],
      },
      {
        id: "cloud",
        heading: "8-ter. Sincronizzazione cloud opzionale",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Se attivata dall'utente, l'app può inviare preventivi a un servizio web configurato. Le credenziali di accesso cloud sono salvate in Keychain. La sincronizzazione avviene solo su azione dell'utente o alla creazione/aggiornamento del preventivo.",
            ],
          },
        ],
      },
      {
        id: "pro",
        heading: "8-quater. Abbonamento Pro",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Gli abbonamenti sono gestiti da Apple tramite App Store. Apple tratta i dati di pagamento secondo la propria informativa. L'app non conserva dati di carta di credito.",
            ],
          },
        ],
      },
      {
        id: "diritti",
        heading: "9. Diritti degli interessati (artt. 15-22 GDPR)",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Gli interessati possono esercitare i diritti di accesso, rettifica, cancellazione, limitazione, opposizione, portabilità e revoca del consenso (se applicabile), rivolgendosi al titolare.",
            ],
          },
        ],
      },
      {
        id: "reclamo",
        heading: "10. Reclamo all'autorità di controllo",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Resta fermo il diritto di proporre reclamo all'autorità di controllo competente (in Italia: Garante per la protezione dei dati personali).",
            ],
          },
        ],
      },
      {
        id: "automatizzate",
        heading: "11. Decisioni automatizzate",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "L'app non adotta processi decisionali automatizzati con effetti giuridici significativi ai sensi dell'art. 22 GDPR.",
            ],
          },
        ],
      },
      {
        id: "minori",
        heading: "12. Minori",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Il servizio non è rivolto a minori di 18 anni. L'utente titolare è responsabile del corretto trattamento dei dati eventualmente riferiti a minori.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "terms",
    kind: "terms",
    title: "Termini di Utilizzo",
    hubLabel: "Termini di Utilizzo",
    metaTitle: "Terms of Use — PreventivoRapido",
    metaDescription:
      "Termini di utilizzo di PreventivoRapido: servizio, abbonamenti e responsabilità.",
    updatedISO: "2026-05-10",
    updatedDisplay: "10 maggio 2026 (versione 2026.05)",
    sections: [
      {
        id: "oggetto",
        heading: "1. Oggetto del servizio",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "PreventivoRapido consente gestione operativa di preventivi/clienti, conversione in fatture/proforma, esportazione PDF, invio documenti via email e funzionalità di supporto (onboarding, notifiche locali, registro attività, backup locale).",
            ],
          },
        ],
      },
      {
        id: "responsabilita",
        heading: "2. Responsabilità dell'utente",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "L'utente è responsabile della correttezza dei dati inseriti, dell'uso conforme alle norme fiscali e della verifica finale dei documenti emessi.",
            ],
          },
        ],
      },
      {
        id: "limiti",
        heading: "3. Limiti funzionali",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "La generazione PDF non equivale automaticamente all'invio ufficiale SDI di fattura elettronica. L'invio verso provider esterni dipende dalla configurazione API dell'utente e dalle capacità del gestionale scelto: l'utente deve verificare sempre l'esito sul portale del provider.",
            ],
          },
        ],
      },
      {
        id: "pro",
        heading: "3-bis. Abbonamento Pro",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "L'uso continuativo dell'app può richiedere un abbonamento Pro gestito da Apple. Rinnovo, prova gratuita e cancellazione sono regolati dai termini App Store e dalle impostazioni Apple ID dell'utente.",
            ],
          },
        ],
      },
      {
        id: "conformita",
        heading: "4. Conformità normativa",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "L'utente resta responsabile del rispetto delle norme fiscali, contabili, privacy e di conservazione documentale applicabili nel proprio Paese/settore.",
            ],
          },
        ],
      },
      {
        id: "continuita",
        heading: "5. Continuità del servizio",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "L'app può essere aggiornata, migliorata o modificata nel tempo. Alcune funzioni possono dipendere da servizi terzi o configurazioni esterne.",
            ],
          },
        ],
      },
      {
        id: "backup",
        heading: "6. Backup e conservazione",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "L'utente è responsabile del backup periodico dei dati e della loro conservazione secondo gli obblighi di legge applicabili.",
            ],
          },
        ],
      },
      {
        id: "garanzie",
        heading: "7. Esclusione di garanzie",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "L'app è fornita come strumento operativo. Non sostituisce consulenza fiscale, legale o contabile professionale.",
            ],
          },
        ],
      },
      {
        id: "limitazione",
        heading: "8. Limitazione di responsabilità",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Nei limiti consentiti dalla legge, il fornitore dell'app non risponde per danni indiretti o conseguenti derivanti da uso improprio, configurazioni errate o dati inesatti immessi dall'utente.",
            ],
          },
        ],
      },
      {
        id: "accettazione",
        heading: "9. Accettazione",
        blocks: [
          {
            type: "paragraph",
            parts: ["L'utilizzo dell'app implica accettazione dei presenti termini."],
          },
        ],
      },
      {
        id: "legge",
        heading: "10. Legge applicabile",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "I presenti termini sono regolati dalla normativa UE e dalla normativa nazionale applicabile al titolare del trattamento.",
            ],
          },
        ],
      },
      {
        id: "contatti",
        heading: "11. Contatti legali",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "I contatti legali e operativi sono quelli del professionista/azienda che utilizza l'app, indicati nella sezione Profilo.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "support",
    kind: "support",
    title: "Supporto PreventivoRapido",
    hubLabel: "Supporto",
    metaTitle: "Supporto — PreventivoRapido",
    metaDescription:
      "Supporto ufficiale PreventivoRapido — assistenza tecnica e abbonamenti.",
    updatedDisplay: "Supporto attivo",
    sections: [
      {
        id: "intro",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Assistenza per problemi tecnici, abbonamenti, ripristino acquisti e segnalazioni. Ti rispondiamo via email in modo rapido e chiaro.",
            ],
          },
        ],
      },
      {
        id: "contatti",
        heading: "Contatti supporto",
        blocks: [
          {
            type: "paragraph",
            parts: ["Email: ", email],
          },
          {
            type: "paragraph",
            parts: ["Sito: ", siteUrl],
          },
          {
            type: "paragraph",
            parts: ["Oggetto consigliato: PreventivoRapido - richiesta assistenza"],
          },
          {
            type: "paragraph",
            parts: ["Tempi medi di risposta: entro 2 giorni lavorativi"],
          },
        ],
      },
      {
        id: "info",
        heading: "Informazioni utili da includere",
        blocks: [
          {
            type: "subheading",
            text: "Dati dispositivo",
          },
          {
            type: "paragraph",
            parts: ["Modello iPhone/iPad e versione iOS/iPadOS."],
          },
          {
            type: "subheading",
            text: "Versione app",
          },
          {
            type: "paragraph",
            parts: ["Numero versione di PreventivoRapido installata."],
          },
          {
            type: "subheading",
            text: "Descrizione problema",
          },
          {
            type: "paragraph",
            parts: [
              "Cosa succede e passaggi per riprodurre il comportamento.",
            ],
          },
          {
            type: "subheading",
            text: "Allegati utili",
          },
          {
            type: "paragraph",
            parts: ["Screenshot o video brevi che mostrano il problema."],
          },
        ],
      },
      {
        id: "abbonamenti",
        heading: "Abbonamenti",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Gli abbonamenti sono gestiti da Apple. Per modificare o annullare un piano, usa la gestione abbonamenti del tuo Apple ID.",
            ],
          },
          {
            type: "paragraph",
            parts: [
              {
                href: "/legal/preventivo-rapido/privacy",
                label: "Privacy Policy",
              },
              " · ",
              {
                href: "/legal/preventivo-rapido/terms",
                label: "Termini di utilizzo",
              },
            ],
          },
        ],
      },
    ],
  },
];
