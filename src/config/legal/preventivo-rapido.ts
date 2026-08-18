import type { LegalDocument, LegalInline } from "@/config/legal/types";

const email: LegalInline = {
  href: "mailto:fernando@fernandopiras.com",
  label: "fernando@fernandopiras.com",
};

const site: LegalInline = {
  href: "https://fernandopiras.com",
  label: "fernandopiras.com",
  external: true,
};

const siteUrl: LegalInline = {
  href: "https://fernandopiras.com",
  label: "https://fernandopiras.com",
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
      "Come PreventivoRapido tratta i dati: storage locale, account sul dispositivo, integrazioni opzionali e ruoli GDPR.",
    updatedISO: "2026-08-18",
    updatedDisplay: "18 agosto 2026 (sostituisce la versione del 10 maggio 2026)",
    lead: "PreventivoRapido è un'app iOS per preventivi, clienti e documenti. I dati operativi restano sul dispositivo, salvo azioni che avvii tu: email, condivisione, backup, sync verso un server che configuri, o invio a un provider di fatturazione elettronica.",
    sections: [
      {
        id: "ambito",
        heading: "1. Chi fornisce l'app e di cosa parla questa informativa",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "PreventivoRapido è sviluppata e distribuita da Fernando Piras, Italia. Contatto: ",
              email,
              " · ",
              site,
              ".",
            ],
          },
          {
            type: "paragraph",
            parts: [
              "Questa informativa descrive il trattamento collegato all'app iOS PreventivoRapido e alle pagine legali su fernandopiras.com. Non descrive un servizio cloud gestito da Fernando: l'app non invia i tuoi preventivi, clienti o documenti a un backend di Fernando Piras.",
            ],
          },
          {
            type: "paragraph",
            parts: [
              "Non è stato nominato un responsabile della protezione dei dati (DPO).",
            ],
          },
        ],
      },
      {
        id: "ruoli",
        heading: "2. Due ruoli distinti",
        blocks: [
          {
            type: "subheading",
            text: "Fernando Piras (sviluppatore)",
          },
          {
            type: "paragraph",
            parts: [
              "Tratta i dati necessari a fornire l'app, il sito, il supporto e il rapporto con Apple App Store. Non riceve in automatico l'anagrafica dei tuoi clienti, i preventivi, le fatture, le firme o i backup.",
            ],
          },
          {
            type: "subheading",
            text: "Tu (utilizzatore professionale)",
          },
          {
            type: "paragraph",
            parts: [
              "Sei titolare del trattamento dei dati che inserisci sui tuoi clienti e sui documenti che emetti. Decidi cosa registrare, cosa esportare, cosa inviare e a chi. I tuoi clienti esercitano i diritti previsti dal GDPR nei tuoi confronti, non verso lo sviluppatore, per i dati che restano sotto il tuo controllo.",
            ],
          },
          {
            type: "callout",
            variant: "info",
            parts: [
              "Se attivi sync cloud o e-fattura, i destinatari sono il server o il provider che configuri tu. Quella copia non arriva a Fernando, salvo che tu la inoltri volontariamente (per esempio in una richiesta di supporto).",
            ],
          },
        ],
      },
      {
        id: "dati-utilizzatore",
        heading: "3. Dati dell'utilizzatore dell'app",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Puoi creare un account locale con nome, email e password, oppure accedere con Accedi con Apple. L'account vive sul dispositivo: non c'è registrazione su un server di Fernando.",
            ],
          },
          {
            type: "bullets",
            items: [
              [
                "Account locale: nome, email, hash della password (non la password in chiaro). L'hash è salvato insieme agli altri dati operativi nel storage locale dell'app.",
              ],
              [
                "Accedi con Apple: identificativo Apple e, se Apple lo fornisce, nome ed email (anche relay privato). Restano sul dispositivo.",
              ],
              [
                "Profilo attività (Impostazioni): ragione sociale o nome, indirizzo, P.IVA, codice fiscale, telefono, email, IBAN, testi predefiniti di preventivo e email.",
              ],
              [
                "Preferenze: validità preventivo, IVA predefinita, promemoria, stato di onboarding, accettazione di Privacy e Termini, eventuale blocco app.",
              ],
              [
                "Stato abbonamento Pro: verificato in locale tramite StoreKit. I pagamenti sono gestiti da Apple; l'app non conserva numeri di carta.",
              ],
              [
                "Registro attività locale (audit): azioni tecniche come login, export backup, acquisto o eliminazione, con data. Resta sul dispositivo.",
              ],
            ],
          },
        ],
      },
      {
        id: "dati-clienti",
        heading: "4. Dati dei tuoi clienti e dei documenti",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Li inserisci tu. Lo sviluppatore non li raccoglie. Nel modello attuale dell'app possono comparire:",
            ],
          },
          {
            type: "bullets",
            items: [
              [
                "Cliente: nome o ragione sociale, email, indirizzo, P.IVA, codice fiscale, flag azienda/persona fisica. Non esiste un campo telefono o logo del cliente.",
              ],
              [
                "Preventivo: titolo, descrizione, voci (descrizione, quantità, prezzo, IVA), sconto, note, validità, stato, stato pagamento, email mittente, dati professionali inseriti nel documento.",
              ],
              [
                "Firma: nome di chi firma, esito accettazione/rifiuto, data e, se confermata, un'immagine della firma disegnata nell'app. Non si usa la fotocamera né la libreria foto.",
              ],
              [
                "Fattura o proforma derivata dal preventivo: numero, data, totale, eventuale esito di invio a un provider e-fattura.",
              ],
              [
                "Promemoria pagamento: data e nota, usati per notifiche locali sul dispositivo.",
              ],
            ],
          },
        ],
      },
      {
        id: "storage",
        heading: "5. Dove vengono conservati i dati",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Di default tutto resta sul dispositivo. Non si usa SwiftData, Core Data, iCloud o CloudKit per i dati di lavoro.",
            ],
          },
          {
            type: "bullets",
            items: [
              [
                "Storage locale dell'app (UserDefaults): account, clienti, preventivi, fatture, preferenze, sessione, audit, cache dello stato abbonamento.",
              ],
              [
                "Keychain: credenziali dei provider di e-fattura e, se la configuri, la password del sync cloud. Non usiamo Keychain per i dati dei clienti.",
              ],
              [
                "File che crei tu: PDF generati per condivisione o email; backup JSON esportato nel percorso che scegli. Restano dove li salvi.",
              ],
            ],
          },
          {
            type: "paragraph",
            parts: [
              "Non c'è analytics, crash reporting, pubblicità, attribution o SDK di tracciamento nell'app.",
            ],
          },
        ],
      },
      {
        id: "uscita",
        heading: "6. Quando i dati possono lasciare il dispositivo",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Solo se lo fai tu, o se usi un servizio di sistema o un'integrazione che hai configurato.",
            ],
          },
          {
            type: "subheading",
            text: "Azioni sul dispositivo",
          },
          {
            type: "bullets",
            items: [
              [
                "Condivisione o stampa del PDF tramite il foglio di condivisione iOS: il destinatario lo scegli tu.",
              ],
              [
                "Invio email con l'app Mail del dispositivo: mittente, destinatario e allegato restano nel tuo account di posta. Fernando non spedisce email al posto tuo.",
              ],
              [
                "Export/import backup JSON: il file è sotto il tuo controllo.",
              ],
            ],
          },
          {
            type: "subheading",
            text: "Apple",
          },
          {
            type: "bullets",
            items: [
              [
                "App Store / StoreKit: acquisto, rinnovo, ripristino e gestione dell'abbonamento Pro. Apple tratta i dati di pagamento secondo la propria informativa.",
              ],
              [
                "Accedi con Apple: Apple tratta l'identità secondo la propria informativa. L'app conserva in locale l'identificativo necessario per riconoscerti al successivo accesso.",
              ],
              [
                "Face ID / codice dispositivo: usati solo in locale per lo sblocco opzionale dell'app. Non inviamo dati biometrici.",
              ],
            ],
          },
          {
            type: "subheading",
            text: "Sync cloud opzionale",
          },
          {
            type: "paragraph",
            parts: [
              "È disattivata di default. Se la attivi, indichi tu l'URL di un server (il progetto include un backend web opzionale da installare in autonomia). L'app invia preventivo, anagrafica cliente, voci, note e dati professionali a quell'indirizzo, con email e password che salvi in Keychain. Fernando non ospita e non riceve quella copia.",
            ],
          },
          {
            type: "subheading",
            text: "Fatturazione elettronica opzionale",
          },
          {
            type: "paragraph",
            parts: [
              "Se scegli un provider e configuri credenziali e endpoint, l'app può inviare i dati di fattura e cliente a quel servizio, su tua azione. Per Fatture in Cloud l'endpoint è l'API ufficiale del provider; per gli altri usi l'URL che inserisci tu. Alcune integrazioni sono sperimentali: l'esito va sempre verificato sul portale del provider. La generazione del PDF non è un invio allo SDI.",
            ],
          },
          {
            type: "subheading",
            text: "Supporto",
          },
          {
            type: "paragraph",
            parts: [
              "Se scrivi a ",
              email,
              ", riceviamo quanto includi nel messaggio. L'invio dall'app può aggiungere versione dell'app, modello del dispositivo e versione di iOS, per aiutarti. Usiamo questi dati solo per rispondere.",
            ],
          },
        ],
      },
      {
        id: "permessi",
        heading: "7. Permessi di sistema",
        blocks: [
          {
            type: "bullets",
            items: [
              [
                "Face ID / autenticazione dispositivo: sblocco opzionale dell'app.",
              ],
              [
                "Notifiche locali: promemoria di follow-up e pagamento, se le autorizzi. Non sono push da un server.",
              ],
              ["Accedi con Apple: accesso all'account locale."],
            ],
          },
          {
            type: "paragraph",
            parts: [
              "L'app non richiede fotocamera, libreria foto, Contatti, Calendario, posizione o microfono.",
            ],
          },
        ],
      },
      {
        id: "finalita-base",
        heading: "8. Finalità e basi giuridiche",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Per i trattamenti di Fernando Piras, in quanto sviluppatore:",
            ],
          },
          {
            type: "bullets",
            items: [
              [
                "Esecuzione del contratto di licenza dell'app (art. 6.1.b GDPR): fornire PreventivoRapido, sbloccare le funzioni Pro tramite StoreKit, mostrare queste informative.",
              ],
              [
                "Legittimo interesse (art. 6.1.f GDPR): sicurezza dell'app, risposta al supporto, miglioramento del prodotto senza profilazione.",
              ],
              [
                "Obblighi di legge (art. 6.1.c GDPR): adempimenti collegati alla distribuzione su App Store.",
              ],
            ],
          },
          {
            type: "paragraph",
            parts: [
              "Per i dati dei tuoi clienti e dei documenti, la base giuridica è quella che ti riguarda come titolare (contratto con il cliente, obblighi fiscali, legittimo interesse della tua attività). PreventivoRapido è lo strumento; non sostituisce la tua informativa verso i clienti.",
            ],
          },
        ],
      },
      {
        id: "conservazione",
        heading: "9. Conservazione e cancellazione",
        blocks: [
          {
            type: "bullets",
            items: [
              [
                "I dati restano sul dispositivo finché non li elimini, non disinstalli l'app o non usi «Elimina definitivamente» sull'account in Impostazioni.",
              ],
              [
                "L'eliminazione account rimuove utente, clienti, preventivi e fatture locali associati. I backup JSON e i PDF già esportati restano dove li hai salvati. Le credenziali in Keychain di quell'account possono restare sul dispositivo fino alla disinstallazione. L'abbonamento App Store si gestisce dall'Apple ID, non si cancella disinstallando l'app.",
              ],
              [
                "Puoi esportare un backup JSON o un export dei dati dell'account corrente (senza password) dalle Impostazioni.",
              ],
              [
                "Se usi sync cloud o e-fattura, le copie sul server o sul provider seguono i tempi di conservazione di quei servizi. Disattiva o cancella lì se non ti servono più.",
              ],
              [
                "Le email di supporto le conserviamo il tempo necessario a gestire la richiesta.",
              ],
            ],
          },
        ],
      },
      {
        id: "sicurezza",
        heading: "10. Sicurezza",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Credenziali dei provider in Keychain; password dell'account locale memorizzata come hash; blocco app opzionale con Face ID o codice dispositivo. Il dispositivo e i backup che esporti restano sotto la tua responsabilità. Non promettiamo un livello di sicurezza che l'architettura locale non può garantire da sola (per esempio contro chi ha accesso fisico sbloccato al telefono).",
            ],
          },
        ],
      },
      {
        id: "trasferimenti",
        heading: "11. Destinatari e trasferimenti",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Fernando non comunica i tuoi dati di lavoro a terze parti, perché non li riceve.",
            ],
          },
          {
            type: "paragraph",
            parts: [
              "Apple può trattare dati (pagamenti, Accedi con Apple) anche fuori dallo SEE, secondo l'informativa Apple e i meccanismi di trasferimento che Apple adotta. I provider di e-fattura o il server cloud che configuri tu trattano i dati secondo i loro termini, nel luogo in cui sono ospitati.",
            ],
          },
        ],
      },
      {
        id: "diritti",
        heading: "12. Diritti",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Puoi chiedere accesso, rettifica, cancellazione, limitazione, opposizione e portabilità, nei limiti del GDPR.",
            ],
          },
          {
            type: "bullets",
            items: [
              [
                "Dati solo sul dispositivo: usi le funzioni dell'app (modifica, export, eliminazione account) oppure disinstalli PreventivoRapido.",
              ],
              [
                "Dati ricevuti da Fernando (supporto, sito): scrivi a ",
                email,
                ".",
              ],
              [
                "Dati dei tuoi clienti: rispondi tu, come titolare di quel trattamento.",
              ],
              [
                "Pagamenti App Store o identità Apple: usa i canali Apple.",
              ],
            ],
          },
          {
            type: "paragraph",
            parts: [
              "Puoi presentare reclamo al Garante per la protezione dei dati personali.",
            ],
          },
        ],
      },
      {
        id: "minori-auto",
        heading: "13. Minori e decisioni automatizzate",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "L'app è pensata per uso professionale e non è destinata a minori di 18 anni.",
            ],
          },
          {
            type: "paragraph",
            parts: [
              "PreventivoRapido non adotta decisioni automatizzate con effetti giuridici o analoghi sulla persona, ai sensi dell'art. 22 GDPR. I calcoli di totale, IVA e sconto sono operazioni sul documento che inserisci tu.",
            ],
          },
        ],
      },
      {
        id: "modifiche",
        heading: "14. Modifiche",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Se cambia il prodotto o dobbiamo chiarire una pratica, aggiorniamo questa pagina. La data in cima è quella della versione pubblicata su ",
              {
                href: "/legal/preventivo-rapido/privacy",
                label: "fernandopiras.com/legal/preventivo-rapido/privacy",
              },
              ". Questa revisione del 18 agosto 2026 sostituisce il testo del 10 maggio 2026.",
            ],
          },
        ],
      },
      {
        id: "contatti",
        heading: "15. Contatti",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Per questa informativa e per l'app: Fernando Piras — ",
              email,
              " · ",
              site,
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
    title: "Termini di Utilizzo",
    hubLabel: "Termini di Utilizzo",
    metaTitle: "Terms of Use — PreventivoRapido",
    metaDescription:
      "Termini di PreventivoRapido: uso professionale, documenti, abbonamento Pro e limiti di responsabilità.",
    updatedISO: "2026-08-18",
    updatedDisplay: "18 agosto 2026 (sostituisce la versione del 10 maggio 2026)",
    lead: "Usando PreventivoRapido accetti questi Termini. Regolano il rapporto tra te e Fernando Piras, sviluppatore dell'app, non il rapporto tra te e i tuoi clienti.",
    sections: [
      {
        id: "oggetto",
        heading: "1. Oggetto",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "PreventivoRapido è un'app iOS per creare e gestire preventivi, anagrafiche cliente, firme in-app, fatture/proforma, PDF, invio tramite Mail o condivisione iOS, backup JSON, notifiche locali e, se li configuri, sync verso un server tuo e invio a un provider di fatturazione elettronica.",
            ],
          },
          {
            type: "paragraph",
            parts: [
              "È uno strumento operativo. Non è un commercialista, un intermediario SDI né un archivio fiscale certificato.",
            ],
          },
        ],
      },
      {
        id: "licenza",
        heading: "2. Licenza e uso professionale",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Ricevi una licenza personale, non esclusiva e revocabile per usare l'app sul tuo dispositivo, secondo questi Termini e le regole App Store.",
            ],
          },
          {
            type: "paragraph",
            parts: [
              "L'app è destinata a professionisti e imprese. Sei responsabile della correttezza dei dati, della verifica dei documenti prima dell'invio e del rispetto di norme fiscali, civilistiche e privacy che ti riguardano.",
            ],
          },
        ],
      },
      {
        id: "account",
        heading: "3. Account",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "L'account è locale sul dispositivo (email e password, oppure Accedi con Apple). Non esiste un account PreventivoRapido su un server di Fernando. Proteggi il dispositivo; con il blocco app attivo, Face ID o il codice di sistema proteggono l'apertura dell'app, non sostituiscono un backup.",
            ],
          },
        ],
      },
      {
        id: "documenti",
        heading: "4. Documenti, PDF e firme",
        blocks: [
          {
            type: "bullets",
            items: [
              [
                "I totali, l'IVA e gli sconti dipendono dai valori che inserisci. Controlla sempre il documento prima di inviarlo.",
              ],
              [
                "Il PDF generato dall'app non equivale all'invio di una fattura elettronica allo SDI.",
              ],
              [
                "La firma raccolta nell'app è un'accettazione del preventivo nel flusso dell'applicazione; non certifichiamo valore legale ulteriore rispetto a quanto risulta dal documento e dal contesto in cui lo usi.",
              ],
              [
                "Condivisione, stampa ed email passano dai servizi del dispositivo che scegli tu.",
              ],
            ],
          },
        ],
      },
      {
        id: "integrazioni",
        heading: "5. Integrazioni opzionali",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Sync cloud e e-fattura sono disattivate finché non le configuri. URL, credenziali e provider li scegli tu. Alcune integrazioni provider sono sperimentali: l'app può inviare i dati, ma l'esito ufficiale è quello del portale del provider. Non siamo parte del contratto tra te e quel provider, né amministriamo il server che indichi per il cloud.",
            ],
          },
        ],
      },
      {
        id: "pro",
        heading: "6. Abbonamento Pro",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "L'uso continuativo delle funzioni a pagamento può richiedere l'abbonamento Pro mensile o annuale tramite App Store (",
              { strong: "it.preventivorapido.pro.monthly" },
              " / ",
              { strong: "it.preventivorapido.pro.yearly" },
              "). Prezzo, rinnovo, prova e disdetta sono quelli mostrati da Apple al momento dell'acquisto e nelle impostazioni dell'Apple ID. I rimborsi seguono le regole Apple. L'app non conserva dati di carta di credito.",
            ],
          },
        ],
      },
      {
        id: "backup",
        heading: "7. Backup e disponibilità",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "I dati di lavoro stanno sul dispositivo. Sei responsabile di export JSON periodici e della conservazione dei documenti secondo gli obblighi che ti riguardano. L'app può essere aggiornata, corretta o modificata. Funzioni che dipendono da Apple, Mail, rete o provider terzi possono non essere disponibili se quei servizi non lo sono.",
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
            parts: [
              "L'app, il codice, il nome e il design appartengono a Fernando Piras. I contenuti che inserisci (anagrafiche, testi, documenti) restano tuoi. L'app non gestisce un logo come file immagine. Non concedi a Fernando una licenza su quei contenuti, perché non li riceve in automatico.",
            ],
          },
        ],
      },
      {
        id: "garanzie",
        heading: "9. Esclusione di garanzie",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "L'app è fornita «così com'è». Non garantiamo che i documenti siano fiscalmente corretti, che un provider accetti l'invio o che un backup sia integro se il file viene alterato o perso. Non sostituisce consulenza fiscale, legale o contabile.",
            ],
          },
        ],
      },
      {
        id: "responsabilita",
        heading: "10. Limitazione di responsabilità",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Nei limiti consentiti dalla legge, Fernando Piras non risponde di danni indiretti, perdita di dati, errori nei documenti, configurazioni errate di cloud o e-fattura, o uso dell'app in violazione di norme. Resta ferma la responsabilità che non può essere esclusa verso i consumatori, se la normativa applicabile lo prevede.",
            ],
          },
        ],
      },
      {
        id: "cessazione",
        heading: "11. Cessazione",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Puoi smettere di usare l'app in qualsiasi momento, disinstallarla o eliminare l'account locale dalle Impostazioni. Possiamo interrompere o modificare il prodotto per motivi tecnici, di sicurezza o di store. La disinstallazione non cancella l'abbonamento App Store: va disdetto dall'Apple ID.",
            ],
          },
        ],
      },
      {
        id: "legge",
        heading: "12. Legge applicabile",
        blocks: [
          {
            type: "paragraph",
            parts: ["Legge applicabile: Italia."],
          },
          {
            type: "paragraph",
            parts: [
              "Per utenti consumatori resta fermo il foro e la tutela previsti dalla normativa applicabile.",
            ],
          },
          {
            type: "paragraph",
            parts: ["Questi Termini sono in italiano."],
          },
        ],
      },
      {
        id: "contatti",
        heading: "13. Contatti",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Per questi Termini e per l'app: Fernando Piras — ",
              email,
              " · ",
              site,
              ".",
            ],
          },
          {
            type: "paragraph",
            parts: [
              "Le richieste dei tuoi clienti sui loro dati vanno gestite da te. Il profilo attività in-app non è il contatto legale di Fernando.",
            ],
          },
        ],
      },
      {
        id: "modifiche",
        heading: "14. Modifiche ai Termini",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "La versione aggiornata è pubblicata su ",
              {
                href: "/legal/preventivo-rapido/terms",
                label: "fernandopiras.com/legal/preventivo-rapido/terms",
              },
              ". Questa revisione del 18 agosto 2026 sostituisce il testo del 10 maggio 2026. L'uso continuato dell'app dopo la pubblicazione indica accettazione dei Termini aggiornati.",
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
      "Supporto ufficiale PreventivoRapido: assistenza tecnica, abbonamenti App Store, backup e privacy.",
    updatedDisplay: "Supporto attivo",
    sections: [
      {
        id: "intro",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Assistenza per l'app iOS: preventivi, PDF, account locale, backup, abbonamento Pro, ripristino acquisti e integrazioni opzionali. Rispondiamo via email.",
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
            parts: [
              "Oggetto consigliato: PreventivoRapido - richiesta assistenza",
            ],
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
            parts: [
              "Numero versione di PreventivoRapido. Se scrivi dal pulsante di supporto in-app, versione e dispositivo sono già nel messaggio.",
            ],
          },
          {
            type: "subheading",
            text: "Descrizione problema",
          },
          {
            type: "paragraph",
            parts: [
              "Cosa succede e i passaggi per riprodurre il comportamento.",
            ],
          },
          {
            type: "subheading",
            text: "Allegati utili",
          },
          {
            type: "paragraph",
            parts: [
              "Screenshot o video brevi. Non inviare password, API key o backup completi se non te lo chiediamo.",
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
            title: "Abbonamento Pro e ripristino",
            parts: [
              "Acquisto e rinnovo sono gestiti da Apple. In Impostazioni iOS: il tuo nome → Abbonamenti. In app usa il ripristino acquisti con lo stesso Apple ID.",
            ],
          },
          {
            type: "faq",
            title: "I dati sono sul mio iPhone?",
            parts: [
              "Sì, di default. Non c'è un cloud PreventivoRapido gestito da Fernando. Un server cloud o un provider e-fattura ricevono dati solo se li configuri tu.",
            ],
          },
          {
            type: "faq",
            title: "Backup",
            parts: [
              "Impostazioni → Backup locale: export e import JSON. Conserva il file in un posto sicuro.",
            ],
          },
          {
            type: "faq",
            title: "Eliminare account e dati",
            parts: [
              "Impostazioni → elimina l'account corrente. Restano i file che hai già esportato e l'abbonamento App Store, da disdire dall'Apple ID.",
            ],
          },
        ],
      },
      {
        id: "documenti",
        heading: "Documenti",
        blocks: [
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
