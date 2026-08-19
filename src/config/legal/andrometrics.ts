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
  href: "https://www.fernandopiras.com/legal/andrometrics",
  label: "fernandopiras.com/legal/andrometrics",
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
      "Informativa privacy di AndroMetrics: dati locali, iCloud, HealthKit, AI Coach, sync TTC Firebase, Keychain e diritti utente.",
    updatedISO: "2026-08-19",
    updatedDisplay: "19 agosto 2026 · v1.5.0",
    lead: "AndroMetrics salva i dati principali sul dispositivo. Le funzioni AI Coach, import DNA, sync iCloud e sync cloud TTC sono opzionali e attivabili solo con il tuo consenso esplicito. L'app non usa tracciamento pubblicitario né profilazione commerciale.",
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
            text: "Profilo e tracking giornaliero",
          },
          {
            type: "bullets",
            items: [
              ["Dati profilo (nome visualizzato, preferenze, impostazioni app)."],
              [
                "Tracking giornaliero: libido, erezioni, eiaculazione, attività sessuale, stress, sonno, attività fisica, idratazione, alimentazione, alcol, fumo, esposizione al calore, farmaci auto-dichiarati.",
              ],
            ],
          },
          {
            type: "subheading",
            text: "Referti, genetica e AI locale",
          },
          {
            type: "bullets",
            items: [
              [
                "Referti laboratorio (spermiogramma, ormoni): testi e punteggi estratti da immagini o PDF caricati volontariamente tramite OCR on-device.",
              ],
              [
                "Profilo genetico opzionale: elaborato interamente sul dispositivo da file raw DNA importati dall'utente.",
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
                "Identificativo pseudonimo ",
                { strong: "proxy_device_id" },
                " nel Keychain del dispositivo: usato per limitare abusi sul servizio AI (non collegato al tuo nome o account Apple).",
              ],
              [
                "Sync iCloud opzionale (NSUbiquitousKeyValueStore): profilo, tracking e preferenze, se iCloud è attivo; esclusi dati genetici.",
              ],
              [
                "Sync cloud TTC opzionale (Firebase/Firestore): solo snapshot riassuntivi descritti nella sezione 13.",
              ],
              [
                "Dati HealthKit in sola lettura, solo se autorizzi l'accesso (es. passi, sonno); l'app non scrive su HealthKit.",
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
              ["Nessun tracciamento pubblicitario, pixel o profilazione commerciale."],
              ["Nessun dato di pagamento: gli abbonamenti Premium passano da Apple StoreKit."],
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
              ["Fornire monitoraggio benessere/fertilità, grafici e insight informativi (non diagnostici)."],
              ["Elaborare referti OCR e, se attivato, insight genetici solo on-device."],
              ["Abilitare backup/ripristino JSON e, se disponibile, sincronizzazione iCloud."],
              ["Fornire AI Coach su richiesta dell'utente, previo consenso esplicito."],
              [
                "Sincronizzare in tempo reale snapshot riassuntivi TTC con il partner, solo con consenso esplicito alla sync cloud.",
              ],
              ["Prevenire abusi del servizio AI tramite identificativo tecnico pseudonimo."],
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
              [
                "Consenso esplicito (art. 6.1.a e art. 9.2.a GDPR): dati relativi alla salute e alla sessualità, insight avanzati, AI Coach, import DNA, sync cloud TTC.",
              ],
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
              ["I dati principali (profilo, tracking, referti OCR, chat AI, genetica) sono salvati localmente sul dispositivo."],
              [
                "Keychain iOS: ",
                { strong: "proxy_device_id" },
                ", identificativo pseudonimo persistente per rate limiting AI; non viene sincronizzato su iCloud né inviato a Firebase.",
              ],
              [
                "Se iCloud è disponibile e attivo sull'account Apple, profilo, tracking e preferenze possono essere sincronizzati tramite NSUbiquitousKeyValueStore. I dati genetici non sono inclusi.",
              ],
              ["Il backup esportato viene creato come file JSON nella posizione scelta dall'utente."],
              ["I dati genetici importati restano esclusivamente sul dispositivo e non sono sincronizzati su iCloud."],
              [
                "Con la sync cloud TTC attiva, gli snapshot riassuntivi sono conservati su Google Firebase/Firestore (progetto dedicato AndroMetrics).",
              ],
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
              [
                { strong: "OpenAI" },
                " (fornitore AI): quando usi AI Coach con consenso, i contenuti che invii (prompt di sistema, messaggio utente, locale) passano tramite un Cloudflare Worker gestito da noi verso OpenAI. Nell'app non è presente alcuna chiave API OpenAI.",
              ],
              [
                { strong: "Cloudflare" },
                " (proxy AI): instrada le richieste AI verso OpenAI; può processare indirizzo IP e header ",
                { strong: "X-Device-ID" },
                " (derivato da proxy_device_id) per sicurezza e rate limiting.",
              ],
              [
                { strong: "Apple StoreKit" },
                " (pagamenti): Apple gestisce transazione, rinnovi e metodi di pagamento. Fernando Piras non riceve dati di carta di credito.",
              ],
              [
                { strong: "Apple HealthKit" },
                ": accesso in sola lettura a dati autorizzati dall'utente. Revocare l'autorizzazione HealthKit non avviene automaticamente con «Elimina tutti i dati».",
              ],
              [
                { strong: "Apple iCloud KVS" },
                ": sincronizzazione impostazioni/dati tra dispositivi se l'utente abilita iCloud.",
              ],
              [
                { strong: "Google Firebase" },
                " (Auth anonimo + Firestore): solo per sync cloud TTC opzionale. Tratta identificativo tecnico anonimo (uid Firebase), documento coppia con memberA/memberB e snapshot riassuntivi nella sottocollezione snapshots (ownerName, score, cycleScore72, streak, cycleDay, exportedAt). Mai caricati: tracking completo, referti OCR, genetica, messaggi AI.",
              ],
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
              "I dati inviati a fornitori terzi (OpenAI, Cloudflare, Google Firebase) possono essere trattati fuori dallo Spazio Economico Europeo secondo le loro misure contrattuali e di sicurezza.",
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
            type: "paragraph",
            parts: [
              "I dati restano sul dispositivo finché non li elimini, disinstalli l'app o ripristini il dispositivo. Le azioni disponibili in app hanno effetti distinti:",
            ],
          },
          {
            type: "subheading",
            text: "Disconnetti sync cloud TTC (logout cloud)",
          },
          {
            type: "bullets",
            items: [
              ["Interrompe la sincronizzazione cloud e rimuove localmente il coupleId."],
              ["Conserva linkedSnapshot e lastCoupleIdForDeletion per consentire una futura purge remota con «Elimina tutti i dati»."],
              ["Non elimina proxy_device_id dal Keychain."],
              ["Non esegue alcuna cancellazione remota su Firebase."],
              ["Lo snapshot partner già importato localmente resta finché non lo rimuovi manualmente."],
            ],
          },
          {
            type: "subheading",
            text: "Elimina tutti i dati",
          },
          {
            type: "bullets",
            items: [
              ["Tenta la purge remota del tuo snapshot Firestore e la rimozione del tuo campo di membership nel documento coppia."],
              ["Elimina tutti i dati locali (tracking, referti, genetica, chat AI, preferenze)."],
              ["Cancella le copie su iCloud KVS, se attive."],
              ["Elimina proxy_device_id dal Keychain; al prossimo uso AI viene generato un nuovo identificativo."],
              [
                "Se la purge remota fallisce (es. assenza di rete), l'app mostra un ",
                { strong: "alert di errore" },
                " e ",
                { strong: "non" },
                " conferma un falso successo. Puoi riprovare quando la connessione è disponibile.",
              ],
              [
                "Sicurezza partner: vengono rimossi solo il tuo snapshot e il tuo campo di membership; lo snapshot del partner resta intatto.",
              ],
            ],
          },
          {
            type: "subheading",
            text: "Altri casi",
          },
          {
            type: "bullets",
            items: [
              ["I backup JSON esportati manualmente restano nei percorsi scelti dall'utente fino a cancellazione manuale."],
              ["I dati genetici possono essere eliminati separatamente dalla funzione dedicata in Privacy e sicurezza."],
              ["I dati eventualmente inviati a fornitori terzi seguono anche i tempi di retention previsti dai rispettivi servizi."],
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
              [
                "Autenticazione tramite Firebase Anonymous Auth: uid tecnico pseudonimo, non collegato al tuo nome o email.",
              ],
              ["Collegamento partner tramite codice invito a 6 caratteri che condividi volontariamente."],
              [
                "Documento coppia Firestore con campi memberA/memberB; sottocollezione snapshots con soli campi riassuntivi: ownerName, score, cycleScore72, streak, cycleDay, exportedAt.",
              ],
              [
                "Mai caricati su Firebase: tracking completo, referti OCR, dati genetici, messaggi AI Coach, cronologia chat.",
              ],
              [
                "Elimina tutti i dati: rimuove il tuo snapshot e il tuo campo di membership; lo snapshot del partner non viene toccato.",
              ],
              ["Disconnetti sync cloud: interrompe la sync senza purge remota (vedi sezione 15)."],
              ["Disattivabile in qualsiasi momento; l'export/import JSON manuale resta disponibile."],
            ],
          },
        ],
      },
      {
        id: "ai-coach",
        heading: "14. AI Coach (opzionale)",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "AI Coach è attivabile solo con consenso esplicito. Puoi usare l'app anche senza AI.",
            ],
          },
          {
            type: "ordered",
            items: [
              ["L'utente scrive un messaggio nella chat AI Coach."],
              [
                "L'app invia al Cloudflare Worker: prompt di sistema, messaggio utente, locale dispositivo e header ",
                { strong: "X-Device-ID" },
                " (identificativo pseudonimo derivato da proxy_device_id nel Keychain).",
              ],
              ["Il Worker inoltra la richiesta a OpenAI; nell'app non è presente alcuna chiave API OpenAI."],
              ["La risposta AI viene mostrata in app e salvata localmente nella cronologia chat."],
            ],
          },
          {
            type: "bullets",
            items: [
              ["Le risposte AI sono a scopo informativo/educativo e non sostituiscono parere medico."],
              ["proxy_device_id serve solo a limitare abusi; non identifica la tua persona."],
              ["Elimina tutti i dati cancella chat locale e proxy_device_id; al prossimo uso AI ne viene generato uno nuovo."],
            ],
          },
        ],
      },
      {
        id: "logout-vs-delete",
        heading: "15. Disconnetti sync cloud vs Elimina tutti i dati",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Le due azioni hanno effetti diversi. Usa la tabella riassuntiva seguente come riferimento:",
            ],
          },
          {
            type: "bullets",
            items: [
              [
                { strong: "Sync cloud TTC" },
                " · Disconnetti: interrompe · Elimina tutti i dati: tenta purge remota del tuo snapshot",
              ],
              [
                { strong: "Dati locali (tracking, referti, genetica, chat AI)" },
                " · Disconnetti: conservati · Elimina tutti i dati: eliminati",
              ],
              [
                { strong: "iCloud KVS" },
                " · Disconnetti: invariato · Elimina tutti i dati: cancellato",
              ],
              [
                { strong: "proxy_device_id (Keychain)" },
                " · Disconnetti: conservato · Elimina tutti i dati: eliminato (nuovo ID al prossimo uso AI)",
              ],
              [
                { strong: "linkedSnapshot / lastCoupleIdForDeletion" },
                " · Disconnetti: conservati per futura purge · Elimina tutti i dati: usati per purge, poi rimossi",
              ],
              [
                { strong: "Snapshot partner su Firebase" },
                " · Disconnetti: invariato · Elimina tutti i dati: invariato (solo il tuo snapshot viene rimosso)",
              ],
              [
                { strong: "Errore rete su purge remota" },
                " · Disconnetti: n/a · Elimina tutti i dati: alert errore, nessun falso successo",
              ],
            ],
          },
        ],
      },
      {
        id: "dati-fuori-app",
        heading: "16. Dati fuori dal controllo dell'app",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Alcune copie dei tuoi dati possono restare al di fuori del controllo diretto di AndroMetrics:",
            ],
          },
          {
            type: "bullets",
            items: [
              ["PDF o report esportati e salvati manualmente fuori dall'app."],
              ["Backup JSON creati tramite export e conservati nei percorsi scelti da te."],
              ["Contenuti condivisi tramite share sheet (Messaggi, Mail, AirDrop, ecc.)."],
              [
                "Autorizzazioni HealthKit: «Elimina tutti i dati» non revoca l'accesso HealthKit; puoi revocarlo dalle Impostazioni iOS.",
              ],
              [
                "Conservazione da parte di terze parti (OpenAI, Cloudflare, Google, Apple) secondo le rispettive policy e tempi di retention.",
              ],
            ],
          },
          {
            type: "callout",
            variant: "disclaimer",
            parts: [
              "AndroMetrics fornisce informazioni a scopo educativo e di monitoraggio personale. Non sostituisce diagnosi, prescrizioni o trattamenti medici.",
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
    updatedISO: "2026-08-19",
    updatedDisplay: "19 agosto 2026 · v1.5.0",
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
            parts: [
              "Non fornisce diagnosi, prescrizioni o trattamenti medici. I punteggi, insight, referti OCR e risposte AI hanno scopo educativo e non sostituiscono il parere di un professionista sanitario.",
            ],
          },
        ],
      },
      {
        id: "ai",
        heading: "3. AI Coach e contenuti generati",
        blocks: [
          {
            type: "bullets",
            items: [
              ["AI Coach è opzionale e richiede consenso esplicito."],
              ["Le funzioni AI possono produrre risultati incompleti o imprecisi."],
              ["Le risposte AI non sostituiscono il parere medico professionale."],
              ["I messaggi inviati passano tramite proxy Cloudflare verso OpenAI, come descritto nella Privacy Policy."],
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
              ["AndroMetrics non richiede account email/password. I dati sono principalmente sul dispositivo."],
              ["L'utente è responsabile dell'accuratezza dei dati inseriti."],
              ["L'utente è responsabile della protezione del proprio dispositivo/account Apple."],
              [
                "Per eliminare dati locali e cloud TTC: Impostazioni → Privacy e sicurezza → Elimina tutti i dati. Guida completa in ",
                { href: "/legal/andrometrics/delete-account", label: "Elimina account e dati" },
                ".",
              ],
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
              "Gli acquisti premium sono gestiti da Apple App Store (StoreKit). Fernando Piras non riceve dati di carta di credito.",
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
              [
                "Al termine del periodo gratuito, le funzioni Premium richiedono un abbonamento mensile (",
                { strong: "com.andrometrics.premium.monthly" },
                ") o annuale (",
                { strong: "com.andrometrics.premium.annual" },
                ") tramite App Store.",
              ],
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
              [
                "I presenti Termini possono essere aggiornati; la versione aggiornata è pubblicata in-app e su ",
                legalHub,
                ".",
              ],
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
              [
                "La modalità coppia TTC consente export/import manuale di snapshot JSON e, opzionalmente, sync cloud Firebase con soli dati riassuntivi.",
              ],
              ["Non siamo responsabili di decisioni prese sulla base di questi strumenti senza consulto medico."],
              [
                "La sync cloud TTC opzionale usa Google Firebase ed è soggetta anche ai termini Google; sei responsabile della condivisione del codice invito.",
              ],
              [
                "Elimina tutti i dati rimuove il tuo snapshot cloud e membership; lo snapshot del partner resta intatto.",
              ],
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
    updatedDisplay: "App iOS · versione 1.5.0",
    sections: [
      {
        id: "intro",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Hai bisogno di aiuto con tracking, farmaci, modalità coppia TTC, import DNA, abbonamento Premium, backup, sincronizzazione iCloud o AI Coach? Il nostro team di supporto è a disposizione.",
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
              "7 giorni di Premium gratis al primo avvio, senza carta. Dal giorno 8 serve un abbonamento App Store mensile (com.andrometrics.premium.monthly) o annuale (com.andrometrics.premium.annual). Rinnovi e disdetta nelle impostazioni Apple ID.",
            ],
          },
          {
            type: "faq",
            title: "AI Coach",
            parts: [
              "Opzionale e attivabile solo con consenso esplicito. I messaggi passano tramite proxy Cloudflare verso OpenAI; la cronologia resta sul dispositivo. Puoi usare l'app anche senza AI.",
            ],
          },
          {
            type: "faq",
            title: "Farmaci prescritti",
            parts: [
              "Impostazioni → Coppia e fertilità → Farmaci prescritti. È un registro personale auto-dichiarato: non sostituisce il parere del medico.",
            ],
          },
          {
            type: "faq",
            title: "Modalità coppia TTC",
            parts: [
              "Puoi esportare uno snapshot JSON e condividarlo manualmente, oppure attivare la sync cloud opzionale su Firebase per aggiornamenti in tempo reale (solo dati riassuntivi: score, trend 72 gg, streak, giorno ciclo).",
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
              "Impostazioni → Privacy e sicurezza → Elimina tutti i dati (include purge cloud TTC, wipe locale e iCloud KVS). Disconnetti sync cloud interrompe solo la sync, senza eliminare dati. Vedi ",
              {
                href: "/legal/andrometrics/delete-account",
                label: "Elimina account e dati",
              },
              ".",
            ],
          },
          {
            type: "faq",
            title: "Cancellazione dati cloud TTC non riuscita",
            parts: [
              "Se «Elimina tutti i dati» mostra un errore durante la cancellazione cloud, i dati locali potrebbero essere già stati rimossi ma lo snapshot remoto no. Verifica la connessione internet e riprova l'operazione. Se l'errore persiste, contatta ",
              email,
              " indicando versione app, modello dispositivo e versione iOS.",
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
      "Guida completa per disconnettere la sync cloud TTC, eliminare tutti i dati AndroMetrics e gestire abbonamenti e copie esterne.",
    updatedDisplay: "Guida alla cancellazione · AndroMetrics iOS · v1.5.0",
    lead: "AndroMetrics non richiede account email/password. I dati sono principalmente sul dispositivo. Puoi disconnettere la sync cloud TTC o eliminare tutti i dati in qualsiasi momento dall'app.",
    sections: [
      {
        id: "panoramica",
        heading: "Panoramica: due azioni distinte",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "Prima di procedere, distingui tra ",
              { strong: "Disconnetti sync cloud TTC" },
              " e ",
              { strong: "Elimina tutti i dati" },
              ". Hanno effetti molto diversi.",
            ],
          },
          {
            type: "bullets",
            items: [
              [
                { strong: "Disconnetti sync cloud" },
                ": interrompe la sincronizzazione Firebase, rimuove il coupleId locale, conserva linkedSnapshot e lastCoupleIdForDeletion per una futura purge. Non elimina dati locali, non tocca proxy_device_id nel Keychain, non cancella nulla su Firebase.",
              ],
              [
                { strong: "Elimina tutti i dati" },
                ": tenta purge remota del tuo snapshot Firestore e rimozione del tuo campo membership; elimina tutti i dati locali; cancella iCloud KVS; elimina proxy_device_id dal Keychain (ne viene generato uno nuovo al prossimo uso AI).",
              ],
            ],
          },
        ],
      },
      {
        id: "disconnetti-sync",
        heading: "Disconnetti sync cloud TTC",
        blocks: [
          {
            type: "ordered",
            items: [
              ["Apri ", { strong: "AndroMetrics" }, " sul tuo iPhone o iPad."],
              ["Vai in ", { strong: "Impostazioni" }, " → ", { strong: "Coppia e fertilità" }, " → ", { strong: "Modalità coppia TTC" }, "."],
              ["Tocca ", { strong: "Disconnetti sync cloud" }, " e conferma."],
            ],
          },
          {
            type: "paragraph",
            parts: [
              "Dopo la disconnessione: la sync si ferma, il coupleId locale viene rimosso, ma i tuoi dati di tracking restano sul dispositivo. Lo snapshot partner già importato localmente resta finché non lo rimuovi. Per eliminare anche i dati cloud, usa «Elimina tutti i dati».",
            ],
          },
        ],
      },
      {
        id: "elimina-dati",
        heading: "Elimina tutti i dati",
        blocks: [
          {
            type: "ordered",
            items: [
              ["Apri ", { strong: "AndroMetrics" }, " sul tuo iPhone o iPad."],
              ["Vai in ", { strong: "Impostazioni" }, " → ", { strong: "Privacy e sicurezza" }, "."],
              ["Tocca ", { strong: "Elimina tutti i dati" }, " e conferma."],
            ],
          },
          {
            type: "subheading",
            text: "Cosa viene eliminato",
          },
          {
            type: "bullets",
            items: [
              ["Tutti i dati locali: profilo, tracking giornaliero, referti OCR, genetica, chat AI, preferenze."],
              ["Copie su iCloud KVS, se attive."],
              ["proxy_device_id nel Keychain (nuovo identificativo al prossimo uso AI Coach)."],
              ["Il tuo snapshot riassuntivo su Firebase/Firestore e il tuo campo di membership nel documento coppia."],
            ],
          },
          {
            type: "subheading",
            text: "Sicurezza partner",
          },
          {
            type: "paragraph",
            parts: [
              "Elimina tutti i dati rimuove solo il tuo snapshot cloud e il tuo campo di membership. Lo snapshot del partner su Firebase resta intatto.",
            ],
          },
          {
            type: "subheading",
            text: "Se la cancellazione cloud fallisce",
          },
          {
            type: "bullets",
            items: [
              ["L'app mostra un alert di errore e non conferma un falso successo."],
              ["I dati locali possono essere già stati eliminati anche se la purge remota non è riuscita."],
              ["Verifica la connessione internet e riprova «Elimina tutti i dati»."],
              [
                "Se l'errore persiste, contatta ",
                email,
                " con versione app, modello dispositivo e versione iOS.",
              ],
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
        id: "dati-fuori-app",
        heading: "Dati fuori dal controllo dell'app",
        blocks: [
          {
            type: "paragraph",
            parts: [
              "«Elimina tutti i dati» non rimuove copie che hai creato o condiviso al di fuori dell'app:",
            ],
          },
          {
            type: "bullets",
            items: [
              ["PDF o report esportati e salvati manualmente."],
              ["Backup JSON creati tramite export e conservati nei percorsi scelti da te."],
              ["Contenuti condivisi tramite share sheet (Messaggi, Mail, AirDrop, ecc.)."],
              [
                "Autorizzazioni HealthKit: revocabili dalle Impostazioni iOS → Salute → Accesso dati e dispositivi → AndroMetrics.",
              ],
              ["Dati eventualmente conservati da fornitori terzi (OpenAI, Cloudflare, Google, Apple) secondo le rispettive policy."],
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
              "Eliminare l'app dal dispositivo rimuove i dati locali non sincronizzati altrove. Non esegue purge remota su Firebase né cancella proxy_device_id dal Keychain in modo affidabile. Per una cancellazione completa, usa «Elimina tutti i dati» prima di disinstallare.",
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
              "Gli abbonamenti (com.andrometrics.premium.monthly / com.andrometrics.premium.annual) sono gestiti da Apple. Fernando Piras non riceve dati di pagamento. Per disdire o modificare il rinnovo:",
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
