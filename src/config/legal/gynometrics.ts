import type { LegalDocument, LegalInline } from "@/config/legal/types";

const email: LegalInline = {
  href: "mailto:fernando@fernandopiras.com",
  label: "fernando@fernandopiras.com",
};

const site: LegalInline = {
  href: "https://www.fernandopiras.com",
  label: "www.fernandopiras.com",
  external: true,
};

const siteUrl: LegalInline = {
  href: "https://www.fernandopiras.com",
  label: "https://www.fernandopiras.com",
  external: true,
};

const legalHub: LegalInline = {
  href: "https://www.fernandopiras.com/legal/gynometrics",
  label: "fernandopiras.com/legal/gynometrics",
  external: true,
};

const privacyHref: LegalInline = {
  href: "https://www.fernandopiras.com/legal/gynometrics/privacy",
  label: "Privacy Policy",
  external: true,
};

const termsHref: LegalInline = {
  href: "https://www.fernandopiras.com/legal/gynometrics/terms",
  label: "Terms of Use",
  external: true,
};

const medicalHref: LegalInline = {
  href: "https://www.fernandopiras.com/legal/gynometrics/medical-disclaimer",
  label: "Medical Disclaimer",
  external: true,
};

export const gynometricsDocuments: readonly LegalDocument[] = [
  {
    slug: "privacy",
    kind: "privacy",
    title: "Privacy Policy",
    hubLabel: "Privacy Policy",
    metaTitle: "Privacy Policy — GynoMetrics",
    metaDescription:
      "Informativa privacy di GynoMetrics: dati locali, ciclo, gravidanza, postpartum, AI Coach, OCR, CloudKit CoupleSpace, HealthKit e diritti utente.",
    updatedISO: "2026-09-04",
    updatedDisplay: "4 settembre 2026 · In development",
    lead: "GynoMetrics salva i dati principali sul dispositivo. AI Coach, sync iCloud, CoupleSpace (CloudKit) e HealthKit sono opzionali e attivabili solo con il tuo consenso o la tua iniziativa. L'app non usa tracciamento pubblicitario né profilazione commerciale.",
    sections: [
      {
        id: "titolare",
        heading: "1. Titolare del trattamento",
        blocks: [
          {
            type: "paragraph",
            parts: ["Titolare: Fernando Piras"],
          },
          {
            type: "paragraph",
            parts: ["Email: ", email, " · ", site],
          },
        ],
      },
      {
        id: "dati-trattati",
        heading: "2. Dati trattati",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "I dati elencati di seguito sono trattati principalmente in locale sul dispositivo, salvo dove indicato diversamente.",
            ],
          },
          {
            type: "subheading",
            text: "Profilo e tracking riproduttivo",
          },
          {
            type: "bullets",
            items: [
              ["Dati profilo (preferenze, lingua, impostazioni app)."],
              [
                "Tracking ciclo, sintomi, stile di vita, BBT/LH dove disponibili, note personali e score di benessere riproduttivo calcolati sull'app.",
              ],
              [
                "Contesti gravidanza e postpartum (timeline, checklist, sintomi) quando attivi sul dispositivo.",
              ],
            ],
          },
          {
            type: "subheading",
            text: "Referti, report e AI locale",
          },
          {
            type: "bullets",
            items: [
              [
                "Referti e immagini di laboratorio caricati volontariamente: testo estratto on-device (OCR) e allegati salvati localmente.",
              ],
              [
                "Report PDF e snapshot di report generati dall'utente e conservati sul dispositivo.",
              ],
              ["Cronologia chat AI Coach salvata localmente sul dispositivo."],
            ],
          },
          {
            type: "subheading",
            text: "Identificativi tecnici e sync opzionali",
          },
          {
            type: "bullets",
            items: [
              [
                "Identificativo pseudonimo nel Keychain del dispositivo per limitare abusi sul servizio AI (non collegato al tuo nome o account Apple).",
              ],
              [
                "Sync iCloud opzionale (dove disponibile): preferenze e dati selezionati se iCloud è attivo.",
              ],
              [
                "CoupleSpace / Partner Snapshot opzionale via CloudKit: solo snapshot di partner condivisi con consenso e flusso esplicito — non un backend Firebase di tracking.",
              ],
              [
                "Dati HealthKit in sola lettura, solo se autorizzi l'accesso; l'app non scrive su HealthKit.",
              ],
            ],
          },
          {
            type: "subheading",
            text: "Cosa non raccogliamo",
          },
          {
            type: "bullets",
            items: [
              ["Nessun account email/password obbligatorio."],
              ["Nessun tracciamento pubblicitario, IDFA o profilazione commerciale."],
              ["Nessun SDK analytics di terze parti per marketing."],
              [
                "Nessun upload automatico di lab images o dati partner privati al servizio AI.",
              ],
            ],
          },
        ],
      },
      {
        id: "finalita",
        heading: "3. Finalità e basi giuridiche",
        blocks: [
          {
            type: "bullets",
            items: [
              [
                "Erogazione del servizio di monitoraggio personale (ciclo, fertilità, gravidanza, postpartum) — esecuzione del contratto / legittimo interesse all'uso dell'app.",
              ],
              [
                "AI Coach opzionale — consenso esplicito; revocabile in qualsiasi momento dalle Impostazioni.",
              ],
              [
                "Sync iCloud / CoupleSpace CloudKit — iniziativa dell'utente e infrastruttura Apple.",
              ],
              [
                "HealthKit in lettura — autorizzazione iOS e finalità di arricchimento del tracking personale.",
              ],
              [
                "Supporto e sicurezza del servizio (limitazione abusi AI) — legittimo interesse.",
              ],
            ],
          },
        ],
      },
      {
        id: "conservazione",
        heading: "4. Conservazione",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "I dati locali restano sul dispositivo finché non li elimini o disinstalli l'app. Le copie su iCloud/CloudKit seguono le regole Apple del tuo account. I log tecnici del proxy AI, se presenti, sono limitati e non destinati a profilazione sanitaria.",
            ],
          },
        ],
      },
      {
        id: "trasferimenti",
        heading: "5. Trasferimenti e destinatari",
        blocks: [
          {
            type: "bullets",
            items: [
              [
                "Apple (iCloud / CloudKit / HealthKit / App Store) secondo i termini Apple, solo se usi quelle funzioni.",
              ],
              [
                "Proxy AI (es. Cloudflare) e modello linguistico (es. OpenAI) solo se attivi AI Coach con consenso: contesto non identificante, senza lab images né dati partner privati di default.",
              ],
              [
                "Nessuna vendita di dati a terzi. Nessun Firebase dedicato al tracking quotidiano di GynoMetrics.",
              ],
            ],
          },
        ],
      },
      {
        id: "diritti",
        heading: "6. Diritti dell'interessato",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Puoi accedere, rettificare ed eliminare i dati locali dall'app (export/import backup, eliminazione dati). Per richieste privacy: ",
              email,
              ". Documentazione legale: ",
              legalHub,
              ".",
            ],
          },
        ],
      },
      {
        id: "minori",
        heading: "7. Minori",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "GynoMetrics non è destinata a minori di 18 anni. Non raccogliamo consapevolmente dati di minori.",
            ],
          },
        ],
      },
      {
        id: "disclaimer-privacy",
        heading: "8. Natura informativa",
        blocks: [
          {
            type: "callout",
            variant: "disclaimer",
            parts: [
              "GynoMetrics fornisce informazioni a scopo educativo e di monitoraggio personale. Non sostituisce diagnosi, prescrizioni o trattamenti medici. Vedi anche il ",
              medicalHref,
              ".",
            ],
          },
        ],
      },
      {
        id: "aggiornamenti",
        heading: "9. Aggiornamenti",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Questa informativa può essere aggiornata. La data in cima alla pagina indica l'ultima revisione. Continua a usare l'app dopo aggiornamenti sostanziali implica la presa visione della versione pubblicata su ",
              privacyHref,
              ".",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "terms",
    kind: "terms",
    title: "Terms of Use",
    hubLabel: "Terms of Use",
    metaTitle: "Terms of Use — GynoMetrics",
    metaDescription:
      "Termini e condizioni d'uso dell'app GynoMetrics — monitoraggio benessere e fertilità femminile, gravidanza e postpartum.",
    updatedISO: "2026-09-04",
    updatedDisplay: "4 settembre 2026 · In development",
    lead: "Usando GynoMetrics accetti i presenti Termini. L'app è uno strumento informativo, non un dispositivo medico.",
    sections: [
      {
        id: "accettazione",
        heading: "1. Accettazione",
        blocks: [
          {
            type: "paragraph",
            parts: ["Usando GynoMetrics accetti i presenti Termini."],
          },
        ],
      },
      {
        id: "descrizione",
        heading: "2. Descrizione del servizio",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "GynoMetrics è uno strumento informativo di monitoraggio benessere/fertilità femminile: ciclo, log, report, OCR/PDF, AI Coach, gravidanza, postpartum e spazio partner opzionale.",
            ],
          },
          {
            type: "callout",
            variant: "disclaimer",
            parts: [
              "Non è un dispositivo medico. Non diagnostica, non prescrive, non promette esiti clinici. Per decisioni sanitarie consulta un professionista qualificato. Dettaglio: ",
              medicalHref,
              ".",
            ],
          },
        ],
      },
      {
        id: "licenza",
        heading: "3. Licenza d'uso",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Ti concediamo una licenza personale, non esclusiva e non trasferibile per usare l'app su dispositivi di tua proprietà o controllo, secondo le regole App Store. Vedi anche ",
              {
                href: "https://www.fernandopiras.com/legal/gynometrics/licenses",
                label: "Licenses",
                external: true,
              },
              ".",
            ],
          },
        ],
      },
      {
        id: "account",
        heading: "4. Account e dati",
        blocks: [
          {
            type: "bullets",
            items: [
              [
                "GynoMetrics non richiede account email/password. I dati sono principalmente sul dispositivo.",
              ],
              [
                "Sei responsabile della sicurezza del dispositivo, del backup e di chi ha accesso fisico all'app (incluso blocco biometrico se attivo).",
              ],
              [
                "La condivisione partner via CoupleSpace è volontaria: condividi solo ciò che intendi condividere.",
              ],
            ],
          },
        ],
      },
      {
        id: "abbonamenti",
        heading: "5. Abbonamenti e acquisti",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Funzionalità Premium, se disponibili, sono gestite tramite StoreKit / App Store. Rinnovi, prove e disdette seguono le regole Apple. Ripristina acquisti con lo stesso Apple ID.",
            ],
          },
        ],
      },
      {
        id: "uso-consentito",
        heading: "6. Uso consentito e vietato",
        blocks: [
          {
            type: "bullets",
            items: [
              ["Uso personale e lecito del monitoraggio riproduttivo."],
              [
                "Vietato reverse engineering non autorizzato, abuso del proxy AI, condivisione fraudolenta di snapshot partner, o uso dell'app per finalità illegali.",
              ],
            ],
          },
        ],
      },
      {
        id: "ip",
        heading: "7. Proprietà intellettuale",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Marchio, design, codice e contenuti di GynoMetrics appartengono a Fernando Piras / SwiftWithFer, salvo componenti open source elencati in Licenses. I tuoi dati di tracking restano tuoi.",
            ],
          },
        ],
      },
      {
        id: "limitazioni",
        heading: "8. Limitazioni di responsabilità",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Nella misura consentita dalla legge, non siamo responsabili di decisioni cliniche, esiti riproduttivi, perdite di dati da dispositivo/iCloud, o interruzioni di servizi terzi (Apple, AI provider).",
            ],
          },
          {
            type: "callout",
            variant: "disclaimer",
            parts: [
              "GynoMetrics non fornisce valutazioni professionali o indicazioni personalizzate. Per decisioni importanti, valuta il supporto di un professionista qualificato.",
            ],
          },
        ],
      },
      {
        id: "legge",
        heading: "9. Legge applicabile",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Salvo norme imperative diverse, si applica la legge italiana. Contatti: ",
              email,
              " · ",
              site,
              ".",
            ],
          },
        ],
      },
      {
        id: "aggiornamenti-terms",
        heading: "10. Aggiornamenti",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Possiamo aggiornare i Termini pubblicandoli su ",
              termsHref,
              ". L'uso continuato dopo la data di aggiornamento costituisce accettazione della versione corrente.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "support",
    kind: "support",
    title: "Supporto",
    hubLabel: "Supporto",
    metaTitle: "Supporto — GynoMetrics",
    metaDescription:
      "Supporto ufficiale GynoMetrics: assistenza su ciclo, partner, AI Coach, report, OCR, privacy e cancellazione dati.",
    updatedISO: "2026-09-04",
    updatedDisplay: "App iOS · In development",
    sections: [
      {
        id: "intro",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Hai bisogno di aiuto con ciclo, log, gravidanza, postpartum, CoupleSpace, abbonamento Premium, backup, iCloud o AI Coach? Il team di supporto è a disposizione.",
            ],
          },
          {
            type: "paragraph",
            parts: [{ strong: "fernando@fernandopiras.com" }],
          },
          {
            type: "paragraph",
            parts: [siteUrl],
          },
          {
            type: "paragraph",
            parts: [
              {
                href: "mailto:fernando@fernandopiras.com",
                label: "Scrivi al supporto",
              },
            ],
          },
        ],
      },
      {
        id: "faq",
        heading: "Argomenti frequenti",
        blocks: [
          {
            type: "faq",
            title: "Stato del prodotto",
            parts: [
              "GynoMetrics è in development: alcune aree (es. moduli differiti) possono mostrare contenuti “Coming later”. Le pagine legali su questo sito sono già definitive per URL e struttura.",
            ],
          },
          {
            type: "faq",
            title: "AI Coach",
            parts: [
              "Opzionale e attivabile solo con consenso esplicito. I messaggi passano tramite proxy verso un modello linguistico; la cronologia resta sul dispositivo. Lab images e dati partner privati non vengono inviati di default.",
            ],
          },
          {
            type: "faq",
            title: "Partner / CoupleSpace",
            parts: [
              "La condivisione partner usa CloudKit CoupleSpace e snapshot espliciti. Non è un sync Firebase di tracking grezzo. Puoi revocare o eliminare i dati locali in qualsiasi momento.",
            ],
          },
          {
            type: "faq",
            title: "OCR e PDF",
            parts: [
              "OCR e generazione PDF operano sul dispositivo per i documenti che carichi o esporti. Conserva copie importanti anche fuori dall'app.",
            ],
          },
          {
            type: "faq",
            title: "Privacy e cancellazione",
            parts: [
              "Vedi Privacy Policy ed Elimina account e dati. Dall'app: Impostazioni → elimina dati locali; revoca HealthKit e iCloud dalle Impostazioni iOS se necessario.",
            ],
          },
          {
            type: "faq",
            title: "Disclaimer medico",
            parts: [
              "GynoMetrics è informativa. Non diagnostica né tratta. Leggi il Medical Disclaimer prima di basare decisioni sanitarie sull'app.",
            ],
          },
        ],
      },
      {
        id: "documenti",
        heading: "Documenti correlati",
        blocks: [
          {
            type: "bullets",
            items: [
              [privacyHref],
              [termsHref],
              [medicalHref],
              [
                {
                  href: "https://www.fernandopiras.com/legal/gynometrics/licenses",
                  label: "Licenses",
                  external: true,
                },
              ],
              [
                {
                  href: "https://www.fernandopiras.com/legal/gynometrics/delete-account",
                  label: "Elimina account e dati",
                  external: true,
                },
              ],
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "licenses",
    kind: "licenses",
    title: "Licenses",
    hubLabel: "Licenses",
    metaTitle: "Licenses — GynoMetrics",
    metaDescription:
      "Licenze e riconoscimenti open source / di terze parti utilizzati da GynoMetrics.",
    updatedISO: "2026-09-04",
    updatedDisplay: "4 settembre 2026",
    lead: "GynoMetrics include software proprietario di Fernando Piras e, dove applicabile, componenti di sistema Apple e librerie di terze parti secondo le rispettive licenze.",
    sections: [
      {
        id: "proprietario",
        heading: "1. Software proprietario",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Il codice, il design MedicalUI, la documentazione di prodotto e il marchio GynoMetrics sono © Fernando Piras / SwiftWithFer. Tutti i diritti riservati, salvo diversa indicazione.",
            ],
          },
        ],
      },
      {
        id: "apple",
        heading: "2. Piattaforma Apple",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "L'app usa framework e servizi Apple (SwiftUI, HealthKit, CloudKit, Vision, StoreKit, WidgetKit, ecc.) soggetti ai termini Apple Developer e alle condizioni d'uso dell'utente finale Apple.",
            ],
          },
        ],
      },
      {
        id: "ai",
        heading: "3. Servizi AI (opzionali)",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Se attivi AI Coach, l'uso del proxy e del modello linguistico è soggetto anche ai termini del provider (es. OpenAI) e alle limitazioni descritte in Privacy Policy e Terms of Use.",
            ],
          },
        ],
      },
      {
        id: "opensource",
        heading: "4. Open source",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Eventuali dipendenze open source e i relativi testi di licenza saranno elencati qui o nell'app man mano che vengono introdotte in release. In assenza di elenco aggiuntivo, non risultano pacchetti open source di terze parti oltre agli SDK di sistema Apple.",
            ],
          },
        ],
      },
      {
        id: "contatti-licenze",
        heading: "5. Contatti",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Per richieste relative a licenze o riconoscimenti: ",
              email,
              ".",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "medical-disclaimer",
    kind: "medical-disclaimer",
    title: "Medical Disclaimer",
    hubLabel: "Medical Disclaimer",
    metaTitle: "Medical Disclaimer — GynoMetrics",
    metaDescription:
      "Disclaimer medico di GynoMetrics: strumento informativo, non dispositivo medico, non diagnostica né tratta.",
    updatedISO: "2026-09-04",
    updatedDisplay: "4 settembre 2026",
    lead: "Leggi attentamente questo disclaimer prima di usare GynoMetrics per decisioni relative alla salute riproduttiva.",
    sections: [
      {
        id: "natura",
        heading: "1. Natura del prodotto",
        blocks: [
          {
            type: "callout",
            variant: "disclaimer",
            parts: [
              "GynoMetrics è un'app di benessere e monitoraggio personale. Non è un dispositivo medico, non è certificata come software medicale e non fornisce diagnosi, prognosi, terapie o indicazioni cliniche personalizzate.",
            ],
          },
        ],
      },
      {
        id: "cosa-non-fa",
        heading: "2. Cosa l'app non fa",
        blocks: [
          {
            type: "bullets",
            items: [
              ["Non sostituisce visite, esami o consulti con medici specialisti."],
              [
                "Non interpreta referti al posto di un laboratorio o di un clinico.",
              ],
              [
                "Non garantisce gravidanza, esiti fertility, sicurezza postpartum o accuratezza assoluta di score/OCR/AI.",
              ],
              [
                "Non gestisce emergenze: in caso di sintomi gravi o red flag, contatta immediatamente un professionista o i servizi di emergenza.",
              ],
            ],
          },
        ],
      },
      {
        id: "ai-ocr",
        heading: "3. AI Coach, OCR e report",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "AI Coach, OCR, PDF e insight automatici sono strumenti informativi con margini di errore. Verifica sempre con fonti cliniche. Non basare terapie, interruzioni di farmaci o decisioni invasive solo sull'output dell'app.",
            ],
          },
        ],
      },
      {
        id: "partner",
        heading: "4. Dati partner",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Gli snapshot partner sono condivisioni volontarie tra utenti. Non costituiscono cartella clinica condivisa né parere medico di coppia.",
            ],
          },
        ],
      },
      {
        id: "accettazione-disclaimer",
        heading: "5. Accettazione",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Usando GynoMetrics dichiari di aver compreso questo disclaimer e i ",
              termsHref,
              ". Per domande: ",
              email,
              ".",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "delete-account",
    kind: "delete-account",
    title: "Elimina account e dati",
    hubLabel: "Elimina account e dati",
    metaTitle: "Elimina account e dati — GynoMetrics",
    metaDescription:
      "Guida per eliminare i dati GynoMetrics sul dispositivo, gestire iCloud/CloudKit e revocare autorizzazioni.",
    updatedISO: "2026-09-04",
    updatedDisplay: "Guida alla cancellazione · GynoMetrics iOS",
    lead: "GynoMetrics non richiede account email/password. I dati sono principalmente sul dispositivo. Puoi eliminarli in qualsiasi momento.",
    sections: [
      {
        id: "panoramica",
        heading: "1. Panoramica",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Usa Elimina tutti i dati locali (o equivalente) nelle Impostazioni dell'app. Poi, se necessario, rimuovi copie iCloud/CloudKit e revoca HealthKit.",
            ],
          },
        ],
      },
      {
        id: "passi-app",
        heading: "2. Eliminazione dall'app",
        blocks: [
          {
            type: "ordered",
            items: [
              ["Apri ", { strong: "GynoMetrics" }, " sul tuo iPhone o iPad."],
              ["Vai a ", { strong: "Impostazioni" }, " / area Legal & Privacy."],
              [
                "Usa ",
                { strong: "Elimina tutti i dati locali" },
                " (o azione equivalente) e conferma.",
              ],
              [
                "Opzionale: esporta un backup prima di eliminare, se vuoi conservare una copia.",
              ],
            ],
          },
        ],
      },
      {
        id: "icloud",
        heading: "3. iCloud e CoupleSpace",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Se hai attivato sync iCloud o CoupleSpace CloudKit, alcune copie possono restare nel tuo account Apple. Gestiscile da Impostazioni iOS → [il tuo nome] → iCloud, o lasciando/revocando lo spazio condiviso. Lo sviluppatore non può cancellare remotamente il contenuto del tuo iCloud.",
            ],
          },
        ],
      },
      {
        id: "healthkit",
        heading: "4. HealthKit",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Revoca l'accesso: Impostazioni iOS → Salute → Accesso dati e dispositivi → GynoMetrics.",
            ],
          },
        ],
      },
      {
        id: "disinstallazione",
        heading: "5. Disinstallazione",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Disinstallare l'app rimuove i dati locali residui sul dispositivo. Non annulla automaticamente abbonamenti App Store: gestiscili dall'Apple ID.",
            ],
          },
        ],
      },
      {
        id: "contatto-delete",
        heading: "6. Contatto",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Per assistenza sulla cancellazione: ",
              email,
              " · Hub legale: ",
              legalHub,
              ".",
            ],
          },
        ],
      },
    ],
  },
];
