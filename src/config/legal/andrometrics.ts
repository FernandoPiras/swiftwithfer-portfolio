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

export const andrometricsDocuments: readonly LegalDocument[] = [
  {
    slug: "privacy",
    kind: "privacy",
    title: "Privacy Policy",
    hubLabel: "Privacy Policy",
    metaTitle: "Privacy Policy — AndroMetrics",
    metaDescription:
      "Informativa privacy di AndroMetrics: dati, iCloud, HealthKit, AI, farmaci, DNA on-device e diritti utente.",
    updatedISO: "2026-07-01",
    updatedDisplay: "1 luglio 2026 · v1.4.0",
    lead: "AndroMetrics salva i dati principali sul dispositivo. Le funzioni AI, DNA e sync cloud TTC sono opzionali e attivabili solo con il tuo consenso esplicito.",
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
            type: "bullets",
            items: [
              ["Dati inseriti manualmente nell'app (tracking giornaliero, stile di vita, dati profilo)."],
              ["Dati salute/fertilità elaborati localmente per punteggi e insight."],
              ["Testi estratti da immagini/referti caricati volontariamente (OCR on-device)."],
              ["Preferenze app (lingua, notifiche, impostazioni premium, integrazioni)."],
              ["Identificativo tecnico pseudonimo del dispositivo per limitare abusi sul servizio AI (non collegato alla tua identità)."],
              ["Farmaci prescritti registrati dall'utente (auto-dichiarazione, non verificata dall'app)."],
              ["Dati genetici opzionali importati da file raw DNA (elaborazione solo sul dispositivo)."],
              ["Snapshot modalità coppia TTC esportati/importati manualmente dall'utente."],
              ["Snapshot riassuntivi TTC su Firebase/Firestore se attivi la sync cloud opzionale."],
            ],
          },
        ],
      },
      {
        id: "finalita",
        heading: "3. Finalità",
        blocks: [
          {
            type: "bullets",
            items: [
              ["Fornire monitoraggio benessere/fertilità e grafici."],
              ["Generare insight e notifiche personalizzate."],
              ["Abilitare backup/ripristino e, se disponibile, sincronizzazione iCloud."],
              ["Fornire funzionalità AI su richiesta dell'utente."],
              ["Sincronizzare in tempo reale gli snapshot TTC con il partner, solo con consenso esplicito."],
            ],
          },
        ],
      },
      {
        id: "base-giuridica",
        heading: "4. Base giuridica per finalità",
        blocks: [
          {
            type: "bullets",
            items: [
              ["Esecuzione del servizio richiesto (art. 6.1.b GDPR): salvataggio locale, funzionalità app, backup/ripristino."],
              ["Consenso esplicito (art. 6.1.a e art. 9.2.a GDPR): dati relativi alla salute, insight avanzati, funzionalità AI, import DNA."],
              ["Obblighi legali (art. 6.1.c GDPR): adempimenti fiscali/amministrativi quando applicabili agli acquisti."],
              ["Legittimo interesse (art. 6.1.f GDPR): sicurezza, prevenzione abusi e miglioramenti tecnici non invasivi."],
            ],
          },
        ],
      },
      {
        id: "conservazione",
        heading: "5. Dove sono conservati i dati",
        blocks: [
          {
            type: "bullets",
            items: [
              ["I dati principali sono salvati localmente sul dispositivo."],
              ["Se iCloud è disponibile e attivo sull'account Apple, alcuni dati/preferenze possono essere sincronizzati tramite NSUbiquitousKeyValueStore (esclusi i dati genetici)."],
              ["Il backup esportato viene creato come file JSON nella posizione scelta dall'utente."],
              ["I dati genetici importati restano esclusivamente sul dispositivo e non sono sincronizzati su iCloud."],
              ["Con la sync cloud TTC attiva, gli snapshot riassuntivi sono conservati su Google Firebase/Firestore (progetto dedicato AndroMetrics)."],
            ],
          },
        ],
      },
      {
        id: "fornitori",
        heading: "6. Fornitori terzi e ruoli",
        blocks: [
          {
            type: "bullets",
            items: [
              [{ strong: "OpenAI" }, " (fornitore AI): i contenuti che invii per le funzioni AI passano da un proxy sicuro gestito da noi verso OpenAI; nell'app non è presente alcuna chiave API."],
              [{ strong: "Apple StoreKit" }, " (pagamenti): Apple gestisce transazione, rinnovi, fatturazione e metodi di pagamento."],
              [{ strong: "Apple HealthKit" }, ": accesso in sola lettura a dati autorizzati dall'utente (es. passi/sonno)."],
              [{ strong: "Apple iCloud KVS" }, ": sincronizzazione impostazioni/dati tra dispositivi se l'utente abilita iCloud."],
              [{ strong: "Cloudflare" }, " (infrastruttura proxy): instrada le richieste AI verso OpenAI; può processare indirizzo IP e identificativo dispositivo per sicurezza e rate limiting."],
              [{ strong: "Google Firebase" }, " (Auth anonimo + Firestore): solo per sync cloud TTC opzionale; tratta snapshot riassuntivi e identificativo tecnico anonimo."],
              ["Per dettagli su conservazione e garanzie dei fornitori, valgono anche le rispettive policy ufficiali."],
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
              "I dati inviati a fornitori terzi possono essere trattati fuori dallo Spazio Economico Europeo secondo le loro misure contrattuali e di sicurezza.",
            ],
          },
        ],
      },
      {
        id: "diritti",
        heading: "8. Diritti utente",
        blocks: [
          {
            type: "bullets",
            items: [
              ["Accesso, rettifica, cancellazione, limitazione, opposizione e portabilità, nei limiti applicabili."],
              ["Revoca del consenso in qualsiasi momento senza pregiudicare la liceità dei trattamenti precedenti."],
              ["Richieste via email a ", email, " con risposta entro 30 giorni, salvo proroghe motivate."],
              ["Diritto di reclamo all'autorità di controllo competente."],
            ],
          },
        ],
      },
      {
        id: "minori",
        heading: "9. Minori",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "L'app non è destinata a minori di 18 anni. Se veniamo a conoscenza di dati forniti da minori, procederemo alla cancellazione senza ingiustificato ritardo.",
            ],
          },
        ],
      },
      {
        id: "cancellazione",
        heading: "10. Conservazione e cancellazione",
        blocks: [
          {
            type: "bullets",
            items: [
              ["I dati restano sul dispositivo finché l'utente non li elimina, disinstalla l'app o ripristina il dispositivo."],
              ["I backup locali restano nei percorsi scelti dall'utente fino a cancellazione manuale."],
              ["I dati eventualmente inviati a fornitori terzi seguono anche i tempi di retention previsti dai rispettivi servizi."],
              ['La funzione "Elimina tutti i dati" nell\'app rimuove i dati locali e, se disponibile, anche le copie sincronizzate su iCloud.'],
              ["I dati genetici possono essere eliminati separatamente dalla funzione dedicata in Privacy e sicurezza."],
              ["Disconnettendo la sync cloud TTC si interrompe la trasmissione; lo snapshot partner locale resta finché non lo rimuovi."],
            ],
          },
        ],
      },
      {
        id: "contatti",
        heading: "11. Contatti",
        blocks: [
          {
            type: "paragraph",
            parts: ["Per richieste privacy: ", email],
          },
        ],
      },
      {
        id: "dati-genetici",
        heading: "12. Dati genetici (opzionale)",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Se importi un file raw DNA, l'elaborazione avviene interamente sul dispositivo.",
            ],
          },
          {
            type: "bullets",
            items: [
              ["Nessun upload automatico a server AndroMetrics o terze parti."],
              ["Nessuna sincronizzazione iCloud dei dati genetici."],
              ["Insight mostrati a solo scopo educativo, non diagnostico."],
              ["Puoi eliminare i dati genetici in qualsiasi momento dalle impostazioni privacy."],
            ],
          },
        ],
      },
      {
        id: "sync-ttc",
        heading: "13. Sync cloud coppia TTC (opzionale)",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Se attivi la sincronizzazione cloud nella modalità coppia TTC, con il tuo consenso esplicito.",
            ],
          },
          {
            type: "bullets",
            items: [
              ["Vengono trasmessi solo snapshot riassuntivi: nome visualizzato, score, trend 72 giorni, streak, giorno ciclo."],
              ["Autenticazione tramite Firebase Anonymous Auth (identificativo tecnico pseudonimo)."],
              ["Collegamento partner tramite codice invito a 6 caratteri che condividi volontariamente."],
              ["Mai caricati su Firebase: tracking completo, referti OCR, dati genetici, messaggi AI."],
              ["Disattivabile in qualsiasi momento; l'export/import JSON manuale resta disponibile."],
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "terms",
    kind: "terms",
    title: "Termini e Condizioni",
    hubLabel: "Termini e Condizioni",
    metaTitle: "Terms of Use — AndroMetrics",
    metaDescription:
      "Termini e condizioni d'uso dell'app AndroMetrics — monitoraggio benessere e fertilità maschile.",
    updatedISO: "2026-07-01",
    updatedDisplay: "1 luglio 2026 · v1.4.0",
    sections: [
      {
        id: "accettazione",
        heading: "1. Accettazione",
        blocks: [
          {
            type: "paragraph",
            parts: ["Usando AndroMetrics accetti i presenti Termini."],
          },
        ],
      },
      {
        id: "natura",
        heading: "2. Natura del servizio",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "AndroMetrics è uno strumento informativo di monitoraggio benessere/fertilità maschile.",
            ],
          },
          {
            type: "paragraph",
            parts: ["Non fornisce diagnosi, prescrizioni o trattamenti medici."],
          },
        ],
      },
      {
        id: "ai",
        heading: "3. AI e contenuti generati",
        blocks: [
          {
            type: "bullets",
            items: [
              ["Le funzioni AI possono produrre risultati incompleti o imprecisi."],
              ["Le risposte AI non sostituiscono il parere medico professionale."],
              ["L'utente resta responsabile delle decisioni prese."],
            ],
          },
        ],
      },
      {
        id: "account",
        heading: "4. Account, dati e sicurezza",
        blocks: [
          {
            type: "bullets",
            items: [
              ["L'utente è responsabile dell'accuratezza dei dati inseriti."],
              ["L'utente è responsabile della protezione del proprio dispositivo/account Apple."],
            ],
          },
        ],
      },
      {
        id: "abbonamenti",
        heading: "5. Abbonamenti e pagamenti",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Gli acquisti premium sono gestiti da Apple App Store (StoreKit).",
            ],
          },
          {
            type: "paragraph",
            parts: [
              "Rinnovo e cancellazione sono gestiti nelle impostazioni dell'Apple ID.",
            ],
          },
          {
            type: "bullets",
            items: [
              ["All'installazione hai 7 giorni di accesso Premium gratuito, senza pagamento anticipato."],
              ["Al termine del periodo gratuito, le funzioni Premium richiedono un abbonamento mensile o annuale tramite App Store."],
              ["Il periodo gratuito inizia al primo avvio e non richiede carta di credito; l'abbonamento parte solo dopo conferma acquisto Apple."],
            ],
          },
        ],
      },
      {
        id: "responsabilita",
        heading: "6. Limitazione di responsabilità",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Nella misura consentita dalla legge, lo sviluppatore non è responsabile per danni diretti/indiretti derivanti dall'uso dell'app o dei contenuti generati.",
            ],
          },
          {
            type: "paragraph",
            parts: [
              "L'utente resta responsabile della verifica delle informazioni prima di decisioni cliniche o economiche.",
            ],
          },
        ],
      },
      {
        id: "recesso",
        heading: "7. Recesso, cancellazione e rinnovi",
        blocks: [
          {
            type: "bullets",
            items: [
              ["Gli acquisti digitali seguono le regole Apple App Store e la normativa applicabile."],
              ["Rinnovi/cancellazioni abbonamento si gestiscono dall'Apple ID dell'utente."],
              ["Eventuali richieste di rimborso sono gestite tramite i canali Apple previsti."],
            ],
          },
        ],
      },
      {
        id: "ip",
        heading: "8. Proprietà intellettuale",
        blocks: [
          {
            type: "paragraph",
            parts: ["Codice, contenuti e design dell'app sono riservati al titolare."],
          },
        ],
      },
      {
        id: "modifiche",
        heading: "9. Sospensione servizio e modifiche",
        blocks: [
          {
            type: "bullets",
            items: [
              ["Le funzionalità possono cambiare, essere sospese o interrotte per motivi tecnici, di sicurezza o normativi."],
              ["I presenti Termini possono essere aggiornati; la versione aggiornata è pubblicata in-app e su questo sito."],
              ["L'uso continuato dell'app dopo aggiornamenti implica accettazione dei nuovi Termini."],
            ],
          },
        ],
      },
      {
        id: "legge",
        heading: "10. Legge applicabile, foro e lingua",
        blocks: [
          {
            type: "paragraph",
            parts: ["Legge applicabile: Italia."],
          },
          {
            type: "paragraph",
            parts: [
              "Per utenti consumatori resta fermo il foro previsto dalla normativa applicabile.",
            ],
          },
          {
            type: "paragraph",
            parts: [
              "In caso di divergenze tra traduzioni, prevale la versione italiana.",
            ],
          },
          {
            type: "paragraph",
            parts: ["Contatto: Fernando Piras – ", email, " · ", site],
          },
        ],
      },
      {
        id: "funzioni-speciali",
        heading: "11. Farmaci, dati genetici e modalità coppia",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Le funzionalità seguenti sono strumenti informativi e richiedono il tuo consenso o la tua iniziativa esplicita.",
            ],
          },
          {
            type: "bullets",
            items: [
              ["Il catalogo farmaci è un registro personale auto-dichiarato: non sostituisce prescrizioni, diagnosi o follow-up medico."],
              ["Gli insight genetici derivano da file DNA caricati volontariamente e hanno solo scopo educativo, non diagnostico."],
              ["La modalità coppia TTC consente export/import manuale di snapshot: decidi tu cosa condividere e con chi."],
              ["Non siamo responsabili di decisioni prese sulla base di questi strumenti senza consulto medico."],
              ["La sync cloud TTC opzionale usa Google Firebase ed è soggetta anche ai termini Google; sei responsabile della condivisione del codice invito."],
            ],
          },
          {
            type: "callout",
            variant: "disclaimer",
            parts: [
              "AndroMetrics non fornisce valutazioni professionali o indicazioni personalizzate. Per decisioni importanti, valuta il supporto di un professionista qualificato.",
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
    metaTitle: "Supporto — AndroMetrics",
    metaDescription:
      "Supporto ufficiale AndroMetrics: assistenza, abbonamenti, backup, privacy e cancellazione dati.",
    updatedDisplay: "App iOS · versione 1.4.0",
    sections: [
      {
        id: "intro",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Hai bisogno di aiuto con tracking, farmaci, modalità coppia TTC, import DNA, abbonamento Premium, backup, sincronizzazione iCloud o funzioni AI? Il nostro team di supporto è a disposizione.",
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
            title: "Ripristino acquisti Premium",
            parts: [
              "Dal paywall o da Impostazioni → usa «Ripristina acquisti» con lo stesso Apple ID usato per l'acquisto.",
            ],
          },
          {
            type: "faq",
            title: "Abbonamenti e trial gratuito",
            parts: [
              "7 giorni di Premium gratis al primo avvio, senza carta. Dal giorno 8 serve un abbonamento App Store (mensile o annuale). Rinnovi e disdetta nelle impostazioni Apple ID.",
            ],
          },
          {
            type: "faq",
            title: "Funzioni AI",
            parts: [
              "Opzionali e attivabili solo con consenso esplicito durante l'onboarding. Puoi usare l'app anche senza AI.",
            ],
          },
          {
            type: "faq",
            title: "Farmaci prescritti",
            parts: [
              "Impostazioni → Coppia e fertilità → Farmaci prescritti. È un registro personale: non sostituisce il parere del medico.",
            ],
          },
          {
            type: "faq",
            title: "Modalità coppia TTC",
            parts: [
              "Esporta uno snapshot JSON e condividilo con il partner; il partner può incollarlo nelle impostazioni TTC per vedere score, trend 72 gg e streak in dashboard.",
            ],
          },
          {
            type: "faq",
            title: "Import DNA (opzionale)",
            parts: [
              "Richiede consenso dedicato. I file raw (23andMe/Ancestry) restano solo sul dispositivo e non vanno su iCloud. Puoi eliminarli in Privacy e sicurezza.",
            ],
          },
          {
            type: "faq",
            title: "Backup e ripristino",
            parts: [
              "Export e import JSON disponibili nelle Impostazioni dell'app.",
            ],
          },
          {
            type: "faq",
            title: "Privacy e cancellazione dati",
            parts: [
              "Impostazioni → Privacy e sicurezza → Elimina tutti i dati (include anche copie iCloud, se attive). I dati genetici possono essere eliminati separatamente. Vedi anche ",
              {
                href: "/legal/andrometrics/delete-account",
                label: "Elimina account e dati",
              },
              ".",
            ],
          },
          {
            type: "faq",
            title: "Segnalazione bug",
            parts: [
              "Indica modello iPhone, versione iOS e i passaggi per riprodurre il problema.",
            ],
          },
        ],
      },
      {
        id: "documenti",
        heading: "Documenti legali",
        blocks: [
          {
            type: "bullets",
            items: [
              [
                {
                  href: "/legal/andrometrics/privacy",
                  label: "Privacy Policy →",
                },
              ],
              [
                {
                  href: "/legal/andrometrics/terms",
                  label: "Termini e Condizioni →",
                },
              ],
              [
                {
                  href: "/legal/andrometrics/delete-account",
                  label: "Elimina account e dati →",
                },
              ],
            ],
          },
          {
            type: "callout",
            variant: "disclaimer",
            parts: [
              "AndroMetrics è uno strumento informativo di monitoraggio benessere. Non fornisce diagnosi o trattamenti medici.",
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
    metaTitle: "Elimina account e dati — AndroMetrics",
    metaDescription:
      "Come eliminare account, dati e abbonamento AndroMetrics — guida ufficiale alla cancellazione.",
    updatedDisplay: "Guida alla cancellazione · AndroMetrics iOS",
    lead: "AndroMetrics non richiede un account email/password. I dati sono principalmente sul dispositivo. Puoi eliminarli in qualsiasi momento dall'app o contattando il supporto.",
    sections: [
      {
        id: "elimina-dati",
        heading: "Elimina tutti i dati dall'app",
        blocks: [
          {
            type: "ordered",
            items: [
              ["Apri ", { strong: "AndroMetrics" }, " sul tuo iPhone o iPad."],
              ["Vai in ", { strong: "Impostazioni" }, " → ", { strong: "Privacy e sicurezza" }, "."],
              ["Tocca ", { strong: "Elimina tutti i dati" }, " e conferma."],
              ["Questa azione rimuove tracking, referti, preferenze, dati AI locali e, se attivo, le copie su iCloud."],
            ],
          },
        ],
      },
      {
        id: "dati-genetici",
        heading: "Elimina solo i dati genetici",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Se hai importato un file DNA, puoi rimuoverlo separatamente da ",
              { strong: "Impostazioni → Privacy e sicurezza → Elimina dati genetici" },
              " senza cancellare il resto del tracking.",
            ],
          },
        ],
      },
      {
        id: "sync-ttc",
        heading: "Disconnetti la sync cloud TTC",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Se hai attivato la sincronizzazione coppia TTC su Firebase, disattivala dalle impostazioni TTC prima di eliminare i dati. In questo modo interrompi la trasmissione di nuovi snapshot.",
            ],
          },
        ],
      },
      {
        id: "disinstalla",
        heading: "Disinstalla l'app",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Eliminare l'app dal dispositivo rimuove i dati locali non sincronizzati altrove. I backup JSON esportati manualmente restano nei percorsi che hai scelto finché non li cancelli.",
            ],
          },
        ],
      },
      {
        id: "abbonamento",
        heading: "Gestisci l'abbonamento Premium",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Gli abbonamenti sono gestiti da Apple. Per disdire o modificare il rinnovo:",
            ],
          },
          {
            type: "bullets",
            items: [
              ["Apri ", { strong: "Impostazioni" }, " iOS → tocca il tuo nome → ", { strong: "Abbonamenti" }, "."],
              ["Seleziona ", { strong: "AndroMetrics" }, " e scegli ", { strong: "Annulla abbonamento" }, "."],
            ],
          },
          {
            type: "paragraph",
            parts: [
              "La cancellazione dell'abbonamento non elimina automaticamente i dati dell'app. Usa «Elimina tutti i dati» se vuoi rimuovere anche le informazioni salvate.",
            ],
          },
        ],
      },
      {
        id: "email",
        heading: "Richiesta di cancellazione via email",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Per richieste GDPR o assistenza alla cancellazione, scrivi a ",
              email,
              " · ",
              site,
              " indicando «Richiesta cancellazione dati» nell'oggetto. Risponderemo entro 30 giorni.",
            ],
          },
          {
            type: "paragraph",
            parts: [
              "Serve aiuto? ",
              { href: "/legal/andrometrics/support", label: "Vai al supporto" },
              " · ",
              { href: "/legal/andrometrics/privacy", label: "Leggi la Privacy Policy" },
            ],
          },
        ],
      },
    ],
  },
];
