"""
SwiftWithFer Discovery Document — Schema Definition
Source of truth for all document formats.
"""

META = {
    "title": "SwiftWithFer — Discovery Document",
    "subtitle": "Analisi requisiti per kick-off progetto",
    "version": "1.1.0",
    "author": "Fernando Piras — SwiftWithFer",
    "confidentiality": "Confidenziale — Uso interno e cliente",
    "website": "https://swiftwithfer-portfolio.vercel.app",
    "email": "fernandopiras95@gmail.com",
    "instructions": (
        "Compila tutti i campi obbligatori (*). "
        "Per lo sviluppo con AI: esporta il file JSON compilato e forniscilo a Cursor. "
        "Non sono necessarie ulteriori domande se ogni sezione e compilata."
    ),
}

SECTOR_OPTIONS = [
    "Hotel & Hospitality",
    "Ristorante & Food",
    "Centro Estetico & Beauty",
    "Palestra & Fitness",
    "Negozio Retail",
    "Concessionaria Auto",
    "Studio Medico & Sanità",
    "Azienda B2B",
    "E-commerce",
    "Servizi Professionali",
    "Immobiliare",
    "Educazione",
    "Eventi",
    "Altro",
]


def sector_slug(label: str) -> str:
    import re
    import unicodedata

    s = unicodedata.normalize("NFKD", label).encode("ascii", "ignore").decode("ascii")
    s = s.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return s.strip("-")


SECTORS = [{"id": sector_slug(label), "label": label} for label in SECTOR_OPTIONS]

# Field types: text, textarea, checkbox, checkbox_group, select, number, date, email, url, tel, currency, rating

SECTIONS = [
    {
        "id": "client_info",
        "number": 1,
        "title": "Informazioni Cliente",
        "description": "Dati anagrafici, contatti, contesto aziendale e obiettivi strategici del progetto.",
        "subsections": [
            {
                "title": "Dati Aziendali",
                "fields": [
                    {"id": "company_name", "label": "Nome azienda / Brand commerciale", "type": "text", "required": True},
                    {"id": "legal_name", "label": "Ragione sociale", "type": "text", "required": True},
                    {"id": "vat_number", "label": "Partita IVA / Codice fiscale", "type": "text"},
                    {"id": "sector", "label": "Settore di attività", "type": "select", "options": SECTOR_OPTIONS},
                    {"id": "sector_other", "label": "Settore (specificare se Altro)", "type": "text"},
                    {"id": "employees", "label": "Numero dipendenti", "type": "select", "options": [
                        "1 (freelance)", "2-5", "6-20", "21-50", "51-200", "200+"
                    ]},
                    {"id": "locations", "label": "Sedi operative (indirizzi e ruolo di ciascuna)", "type": "textarea"},
                    {"id": "address", "label": "Sede legale / principale", "type": "textarea"},
                    {"id": "business_hours", "label": "Orari di apertura / operatività", "type": "textarea"},
                ],
            },
            {
                "title": "Referente Progetto",
                "fields": [
                    {"id": "contact_name", "label": "Nome e cognome referente", "type": "text", "required": True},
                    {"id": "contact_role", "label": "Ruolo in azienda", "type": "text"},
                    {"id": "contact_phone", "label": "Telefono", "type": "tel", "required": True},
                    {"id": "contact_email", "label": "Email", "type": "email", "required": True},
                    {"id": "contact_secondary", "label": "Referente secondario (nome, ruolo, contatti)", "type": "textarea"},
                    {"id": "decision_maker", "label": "Decision maker finale (se diverso dal referente)", "type": "text"},
                ],
            },
            {
                "title": "Presenza Online Attuale",
                "fields": [
                    {"id": "website", "label": "Sito web attuale", "type": "url"},
                    {"id": "social_instagram", "label": "Instagram", "type": "url"},
                    {"id": "social_facebook", "label": "Facebook", "type": "url"},
                    {"id": "social_linkedin", "label": "LinkedIn", "type": "url"},
                    {"id": "social_tiktok", "label": "TikTok", "type": "url"},
                    {"id": "social_youtube", "label": "YouTube", "type": "url"},
                    {"id": "social_other", "label": "Altri canali social", "type": "textarea"},
                ],
            },
            {
                "title": "Obiettivi e Vincoli",
                "fields": [
                    {"id": "project_objectives", "label": "Obiettivi principali del progetto (cosa deve ottenere l'azienda)", "type": "textarea", "required": True},
                    {"id": "problems_to_solve", "label": "Problemi attuali da risolvere (pain points)", "type": "textarea", "required": True},
                    {"id": "success_metrics", "label": "Metriche di successo (KPI misurabili)", "type": "textarea"},
                    {"id": "budget_range", "label": "Budget indicativo", "type": "select", "options": [
                        "< €5.000", "€5.000 – €15.000", "€15.000 – €30.000",
                        "€30.000 – €60.000", "€60.000 – €100.000", "> €100.000", "Da definire"
                    ]},
                    {"id": "budget_notes", "label": "Note sul budget (fasi, vincoli, modalità pagamento)", "type": "textarea"},
                    {"id": "timeline", "label": "Tempistiche desiderate", "type": "select", "options": [
                        "Urgente (< 1 mese)", "1-2 mesi", "3-4 mesi", "5-6 mesi", "6+ mesi", "Flessibile"
                    ]},
                    {"id": "deadline", "label": "Data limite / evento di lancio", "type": "date"},
                    {"id": "priorities", "label": "Priorità (ordinare: Must-have, Should-have, Nice-to-have)", "type": "textarea", "required": True},
                    {"id": "constraints", "label": "Vincoli noti (tecnici, legali, organizzativi)", "type": "textarea"},
                ],
            },
        ],
    },
    {
        "id": "branding",
        "number": 2,
        "title": "Branding",
        "description": "Identità visiva, tono comunicativo, posizionamento e materiali esistenti.",
        "subsections": [
            {
                "title": "Identità Visiva",
                "fields": [
                    {"id": "logo_status", "label": "Stato logo", "type": "select", "options": [
                        "Logo esistente (file vettoriale)", "Logo esistente (solo raster)",
                        "Da creare", "Da rifare / rebrand"
                    ]},
                    {"id": "logo_files", "label": "File logo disponibili (formati, percorsi, link)", "type": "textarea"},
                    {"id": "brand_colors", "label": "Colori brand (hex, RGB, Pantone)", "type": "textarea"},
                    {"id": "brand_fonts", "label": "Font aziendali (nomi, licenze, file)", "type": "textarea"},
                    {"id": "brand_guidelines", "label": "Brand Guidelines esistenti (link o descrizione)", "type": "textarea"},
                    {"id": "design_references", "label": "Siti/app di riferimento per lo stile desiderato", "type": "textarea"},
                ],
            },
            {
                "title": "Materiali Esistenti",
                "fields": [
                    {"id": "has_photos", "label": "Foto professionali disponibili", "type": "checkbox"},
                    {"id": "photos_notes", "label": "Dettaglio foto (tipologia, quantità, qualità)", "type": "textarea"},
                    {"id": "has_videos", "label": "Video disponibili", "type": "checkbox"},
                    {"id": "videos_notes", "label": "Dettaglio video", "type": "textarea"},
                    {"id": "has_brochures", "label": "Brochure / depliant", "type": "checkbox"},
                    {"id": "has_catalogs", "label": "Cataloghi prodotti/servizi", "type": "checkbox"},
                    {"id": "graphic_materials", "label": "Altri materiali grafici (link, descrizione)", "type": "textarea"},
                ],
            },
            {
                "title": "Posizionamento",
                "fields": [
                    {"id": "tone_of_voice", "label": "Tone of Voice (formale, friendly, premium, tecnico, ecc.)", "type": "textarea"},
                    {"id": "usp", "label": "USP — Unique Selling Proposition", "type": "textarea"},
                    {"id": "brand_values", "label": "Valori aziendali", "type": "textarea"},
                    {"id": "target_audience", "label": "Target / Buyer Personas (età, professione, esigenze, comportamenti)", "type": "textarea", "required": True},
                    {"id": "competitors", "label": "Competitor principali (nomi, siti, punti di forza/debolezza)", "type": "textarea"},
                    {"id": "differentiation", "label": "Elemento differenziante rispetto ai competitor", "type": "textarea"},
                ],
            },
        ],
    },
    {
        "id": "business_analysis",
        "number": 3,
        "title": "Analisi Business",
        "description": "Processi operativi, flussi cliente, offerta commerciale e workflow interni.",
        "subsections": [
            {
                "title": "Descrizione Attività",
                "fields": [
                    {"id": "business_description", "label": "Descrizione completa dell'attività", "type": "textarea", "required": True},
                    {"id": "business_model", "label": "Modello di business (B2B, B2C, B2B2C, marketplace, SaaS, ecc.)", "type": "text"},
                    {"id": "revenue_streams", "label": "Flussi di ricavo principali", "type": "textarea"},
                    {"id": "seasonality", "label": "Stagionalità / picchi di attività", "type": "textarea"},
                ],
            },
            {
                "title": "Offerta",
                "fields": [
                    {"id": "services", "label": "Servizi offerti (elenco dettagliato con descrizione e prezzo)", "type": "textarea"},
                    {"id": "products", "label": "Prodotti (elenco, varianti, SKU, prezzi)", "type": "textarea"},
                    {"id": "subscriptions", "label": "Abbonamenti / piani ricorrenti", "type": "textarea"},
                    {"id": "packages", "label": "Pacchetti / bundle", "type": "textarea"},
                ],
            },
            {
                "title": "Flusso Cliente",
                "fields": [
                    {"id": "customer_journey", "label": "Customer journey (dalla scoperta al post-vendita)", "type": "textarea", "required": True},
                    {"id": "acquisition_channels", "label": "Canali di acquisizione clienti", "type": "textarea"},
                    {"id": "quotation_process", "label": "Processo preventivi (come vengono creati, approvati, inviati)", "type": "textarea"},
                    {"id": "order_process", "label": "Processo ordini (online, telefono, in sede)", "type": "textarea"},
                    {"id": "appointment_process", "label": "Processo appuntamenti / prenotazioni", "type": "textarea"},
                ],
            },
            {
                "title": "Operatività Interna",
                "fields": [
                    {"id": "internal_workflow", "label": "Workflow interno (passaggi operativi quotidiani)", "type": "textarea"},
                    {"id": "team_roles", "label": "Ruoli del team e responsabilità", "type": "textarea"},
                    {"id": "payment_methods_internal", "label": "Metodi di pagamento accettati", "type": "checkbox_group", "options": [
                        "Contanti", "Carta POS", "Bonifico", "PayPal", "Stripe", "Satispay", "Buoni pasto", "Finanziamento", "Altro"
                    ]},
                    {"id": "invoicing_process", "label": "Processo fatturazione (software, SDI, note)", "type": "textarea"},
                    {"id": "inventory_management", "label": "Gestione magazzino / scorte", "type": "textarea"},
                    {"id": "crm_usage", "label": "Uso CRM attuale (come gestite i contatti)", "type": "textarea"},
                    {"id": "loyalty_program", "label": "Programma fedeltà esistente", "type": "textarea"},
                    {"id": "reviews_management", "label": "Gestione recensioni (Google, TripAdvisor, ecc.)", "type": "textarea"},
                    {"id": "marketing_activities", "label": "Attività marketing attuali (campagne, newsletter, ads)", "type": "textarea"},
                ],
            },
        ],
    },
    {
        "id": "digital_presence",
        "number": 4,
        "title": "Presenza Digitale",
        "description": "Infrastruttura web attuale, SEO, analytics, compliance e canali digitali.",
        "subsections": [
            {
                "title": "Sito Web Attuale",
                "fields": [
                    {"id": "current_site_url", "label": "URL sito attuale", "type": "url"},
                    {"id": "site_platform", "label": "Piattaforma / CMS attuale", "type": "text"},
                    {"id": "hosting_provider", "label": "Provider hosting", "type": "text"},
                    {"id": "domain_registrar", "label": "Registrar dominio", "type": "text"},
                    {"id": "site_satisfaction", "label": "Soddisfazione sito attuale (1-10)", "type": "number"},
                    {"id": "site_issues", "label": "Problemi del sito attuale", "type": "textarea"},
                ],
            },
            {
                "title": "SEO & Analytics",
                "fields": [
                    {"id": "seo_status", "label": "Stato SEO (audit esistente, posizionamento, keyword)", "type": "textarea"},
                    {"id": "google_analytics", "label": "Google Analytics (versione, accesso)", "type": "text"},
                    {"id": "google_search_console", "label": "Google Search Console", "type": "checkbox"},
                    {"id": "tracking_pixels", "label": "Pixel di tracciamento (Meta, Google Ads, TikTok, ecc.)", "type": "textarea"},
                    {"id": "newsletter_tool", "label": "Tool newsletter (Mailchimp, Brevo, ecc.)", "type": "text"},
                    {"id": "newsletter_subscribers", "label": "Numero iscritti newsletter", "type": "number"},
                ],
            },
            {
                "title": "Canali Digitali",
                "fields": [
                    {"id": "google_business", "label": "Google Business Profile (stato, recensioni)", "type": "textarea"},
                    {"id": "marketplaces", "label": "Marketplace (Amazon, eBay, Etsy, Booking.com, ecc.)", "type": "textarea"},
                    {"id": "ecommerce_platform", "label": "Piattaforma e-commerce attuale", "type": "text"},
                    {"id": "customer_area", "label": "Area clienti esistente (funzionalità)", "type": "textarea"},
                    {"id": "blog", "label": "Blog (frequenza pubblicazione, argomenti)", "type": "textarea"},
                ],
            },
            {
                "title": "Compliance",
                "fields": [
                    {"id": "privacy_policy", "label": "Privacy Policy esistente (link)", "type": "url"},
                    {"id": "cookie_policy", "label": "Cookie Policy esistente (link)", "type": "url"},
                    {"id": "cookie_banner", "label": "Cookie banner attuale", "type": "select", "options": [
                        "Assente", "Base", "Con gestione consenso granulare", "Iubenda / Cookiebot / altro tool"
                    ]},
                    {"id": "gdpr_compliance", "label": "Stato conformità GDPR", "type": "textarea"},
                    {"id": "accessibility_current", "label": "Accessibilità sito attuale (WCAG)", "type": "textarea"},
                ],
            },
        ],
    },
    {
        "id": "existing_software",
        "number": 5,
        "title": "Software Esistenti",
        "description": "Sistemi in uso, integrazioni attuali, API e flussi dati.",
        "subsections": [
            {
                "title": "Gestionali & ERP",
                "fields": [
                    {"id": "management_software", "label": "Gestionale principale (nome, versione, fornitore)", "type": "textarea"},
                    {"id": "crm_software", "label": "CRM (nome, versione, utenti attivi)", "type": "textarea"},
                    {"id": "erp_software", "label": "ERP", "type": "textarea"},
                    {"id": "pms_software", "label": "PMS (Property Management — hotel)", "type": "textarea"},
                    {"id": "pos_software", "label": "POS / Cassa", "type": "textarea"},
                    {"id": "booking_software", "label": "Sistema prenotazioni / booking", "type": "textarea"},
                ],
            },
            {
                "title": "Strumenti Operativi",
                "fields": [
                    {"id": "calendar_tool", "label": "Calendario condiviso (Google, Outlook, altro)", "type": "text"},
                    {"id": "payment_gateway_existing", "label": "Gateway pagamenti attuale", "type": "textarea"},
                    {"id": "accounting_software", "label": "Software contabilità / fatturazione", "type": "text"},
                    {"id": "communication_tools", "label": "Strumenti comunicazione interna (Slack, Teams, WhatsApp Business)", "type": "textarea"},
                ],
            },
            {
                "title": "Dati & Integrazioni",
                "fields": [
                    {"id": "existing_apis", "label": "API disponibili (documentazione, accesso)", "type": "textarea"},
                    {"id": "webhooks", "label": "Webhook configurati", "type": "textarea"},
                    {"id": "data_exports", "label": "Esportazioni dati disponibili (formati, frequenza)", "type": "textarea"},
                    {"id": "data_imports", "label": "Importazioni dati necessarie (fonti, volumi)", "type": "textarea"},
                    {"id": "sync_requirements", "label": "Sincronizzazioni richieste tra sistemi", "type": "textarea"},
                    {"id": "database_existing", "label": "Database esistenti (tipo, hosting, dimensione)", "type": "textarea"},
                    {"id": "migration_needs", "label": "Migrazione dati da sistemi legacy", "type": "textarea"},
                ],
            },
        ],
    },
    {
        "id": "desired_features",
        "number": 6,
        "title": "Funzionalità Desiderate",
        "description": "Piattaforme, moduli e feature richieste per il nuovo progetto.",
        "subsections": [
            {
                "title": "Piattaforme",
                "fields": [
                    {"id": "platform_website", "label": "Sito Web", "type": "checkbox"},
                    {"id": "platform_webapp", "label": "Web App (PWA)", "type": "checkbox"},
                    {"id": "platform_ios", "label": "App iOS (nativa)", "type": "checkbox"},
                    {"id": "platform_android", "label": "App Android (nativa)", "type": "checkbox"},
                    {"id": "platform_admin", "label": "Dashboard Admin", "type": "checkbox"},
                    {"id": "platform_staff", "label": "Area Staff / Operativa", "type": "checkbox"},
                    {"id": "platform_customer", "label": "Area Cliente", "type": "checkbox"},
                    {"id": "platform_notes", "label": "Note sulle piattaforme", "type": "textarea"},
                ],
            },
            {
                "title": "Autenticazione & Ruoli",
                "fields": [
                    {"id": "auth_login", "label": "Sistema login richiesto", "type": "checkbox"},
                    {"id": "auth_methods", "label": "Metodi autenticazione", "type": "checkbox_group", "options": [
                        "Email/Password", "Magic Link", "Social Login (Google)", "Social Login (Apple)",
                        "Social Login (Facebook)", "SSO Enterprise", "OTP SMS", "Biometria"
                    ]},
                    {"id": "user_roles", "label": "Ruoli utente previsti (descrizione e permessi)", "type": "textarea", "required": True},
                    {"id": "permissions_model", "label": "Modello permessi (RBAC, ABAC, custom)", "type": "textarea"},
                ],
            },
            {
                "title": "Moduli Funzionali",
                "fields": [
                    {"id": "feat_notifications", "label": "Notifiche (push, email, in-app)", "type": "checkbox"},
                    {"id": "feat_chat", "label": "Chat / Messaggistica", "type": "checkbox"},
                    {"id": "feat_calendar", "label": "Calendario / Agenda", "type": "checkbox"},
                    {"id": "feat_documents", "label": "Gestione documenti", "type": "checkbox"},
                    {"id": "feat_upload", "label": "Upload file", "type": "checkbox"},
                    {"id": "feat_download", "label": "Download / Export file", "type": "checkbox"},
                    {"id": "feat_qrcode", "label": "QR Code (generazione/lettura)", "type": "checkbox"},
                    {"id": "feat_barcode", "label": "Barcode / Scanner", "type": "checkbox"},
                    {"id": "feat_nfc", "label": "NFC", "type": "checkbox"},
                    {"id": "feat_maps", "label": "Mappe interattive", "type": "checkbox"},
                    {"id": "feat_gps", "label": "GPS / Geolocalizzazione", "type": "checkbox"},
                    {"id": "feat_ai", "label": "Funzionalità AI", "type": "checkbox"},
                    {"id": "feat_search", "label": "Ricerca avanzata", "type": "checkbox"},
                    {"id": "feat_filters", "label": "Filtri e ordinamento", "type": "checkbox"},
                    {"id": "feat_reports", "label": "Report personalizzati", "type": "checkbox"},
                    {"id": "feat_statistics", "label": "Statistiche / Analytics interne", "type": "checkbox"},
                    {"id": "feat_dashboard", "label": "Dashboard KPI", "type": "checkbox"},
                    {"id": "feat_backup", "label": "Backup automatici", "type": "checkbox"},
                    {"id": "feat_export", "label": "Export dati (CSV, Excel, PDF)", "type": "checkbox"},
                    {"id": "feat_import", "label": "Import dati bulk", "type": "checkbox"},
                    {"id": "feat_offline", "label": "Modalità offline", "type": "checkbox"},
                    {"id": "feat_dark_mode", "label": "Dark Mode", "type": "checkbox"},
                    {"id": "feat_multilang", "label": "Multi lingua", "type": "checkbox"},
                    {"id": "feat_accessibility", "label": "Accessibilità WCAG 2.1 AA", "type": "checkbox"},
                    {"id": "features_detail", "label": "Dettaglio funzionalità custom (descrizione approfondita per ciascuna)", "type": "textarea", "required": True},
                ],
            },
        ],
    },
    {
        "id": "automations",
        "number": 7,
        "title": "Automazioni",
        "description": "Workflow automatici, comunicazioni programmate e pipeline operative.",
        "subsections": [
            {
                "title": "Canali Comunicazione",
                "fields": [
                    {"id": "auto_email", "label": "Email automatiche", "type": "checkbox"},
                    {"id": "auto_sms", "label": "SMS", "type": "checkbox"},
                    {"id": "auto_whatsapp", "label": "WhatsApp Business API", "type": "checkbox"},
                    {"id": "auto_push", "label": "Push notification", "type": "checkbox"},
                    {"id": "communication_triggers", "label": "Trigger comunicazioni (eventi che attivano invii)", "type": "textarea"},
                ],
            },
            {
                "title": "Workflow",
                "fields": [
                    {"id": "auto_reminders", "label": "Reminder automatici (appuntamenti, scadenze)", "type": "textarea"},
                    {"id": "auto_followup", "label": "Follow-up post-vendita / post-servizio", "type": "textarea"},
                    {"id": "auto_marketing", "label": "Automazioni marketing (drip campaign, segmentazione)", "type": "textarea"},
                    {"id": "auto_crm", "label": "Automazioni CRM (lead scoring, assegnazione)", "type": "textarea"},
                    {"id": "auto_ai", "label": "Automazioni AI (classificazione, suggerimenti, chatbot)", "type": "textarea"},
                    {"id": "auto_pipeline", "label": "Pipeline vendite automatizzata", "type": "textarea"},
                    {"id": "auto_workflows", "label": "Workflow operativi interni (approvazioni, notifiche team)", "type": "textarea"},
                    {"id": "auto_tickets", "label": "Sistema ticket / supporto", "type": "textarea"},
                ],
            },
        ],
    },
    {
        "id": "payments",
        "number": 8,
        "title": "Pagamenti",
        "description": "Gateway, metodi di pagamento, fatturazione e modelli di pricing.",
        "subsections": [
            {
                "title": "Gateway & Metodi",
                "fields": [
                    {"id": "pay_stripe", "label": "Stripe", "type": "checkbox"},
                    {"id": "pay_paypal", "label": "PayPal", "type": "checkbox"},
                    {"id": "pay_apple", "label": "Apple Pay", "type": "checkbox"},
                    {"id": "pay_google", "label": "Google Pay", "type": "checkbox"},
                    {"id": "pay_bank_transfer", "label": "Bonifico bancario", "type": "checkbox"},
                    {"id": "pay_pos", "label": "POS fisico", "type": "checkbox"},
                    {"id": "pay_satispay", "label": "Satispay", "type": "checkbox"},
                    {"id": "pay_other", "label": "Altri metodi", "type": "textarea"},
                ],
            },
            {
                "title": "Modelli di Pagamento",
                "fields": [
                    {"id": "pay_invoicing", "label": "Fatturazione elettronica integrata", "type": "checkbox"},
                    {"id": "pay_subscriptions", "label": "Abbonamenti ricorrenti", "type": "checkbox"},
                    {"id": "pay_installments", "label": "Pagamento rateale", "type": "checkbox"},
                    {"id": "pay_coupons", "label": "Coupon / codici sconto", "type": "checkbox"},
                    {"id": "pay_giftcards", "label": "Gift Card", "type": "checkbox"},
                    {"id": "pay_deposits", "label": "Acconti / caparre", "type": "checkbox"},
                    {"id": "payment_flows", "label": "Flussi di pagamento dettagliati (quando, quanto, rimborsi)", "type": "textarea", "required": True},
                    {"id": "refund_policy", "label": "Policy rimborsi e cancellazioni", "type": "textarea"},
                ],
            },
        ],
    },
    {
        "id": "integrations",
        "number": 9,
        "title": "Integrazioni",
        "description": "Servizi cloud, API terze parti e protocolli di comunicazione.",
        "subsections": [
            {
                "title": "Cloud & Backend",
                "fields": [
                    {"id": "int_firebase", "label": "Firebase", "type": "checkbox"},
                    {"id": "int_supabase", "label": "Supabase", "type": "checkbox"},
                    {"id": "int_aws", "label": "AWS", "type": "checkbox"},
                    {"id": "int_google_cloud", "label": "Google Cloud", "type": "checkbox"},
                    {"id": "int_azure", "label": "Microsoft Azure", "type": "checkbox"},
                    {"id": "int_vercel", "label": "Vercel", "type": "checkbox"},
                ],
            },
            {
                "title": "Servizi Terze Parti",
                "fields": [
                    {"id": "int_apple", "label": "Apple (Sign In, Push, StoreKit)", "type": "checkbox"},
                    {"id": "int_google", "label": "Google (Maps, Auth, Workspace)", "type": "checkbox"},
                    {"id": "int_meta", "label": "Meta (Login, Pixel, WhatsApp)", "type": "checkbox"},
                    {"id": "int_openai", "label": "OpenAI", "type": "checkbox"},
                    {"id": "int_claude", "label": "Claude / Anthropic", "type": "checkbox"},
                    {"id": "int_maps", "label": "Google Maps / Mapbox", "type": "checkbox"},
                    {"id": "int_weather", "label": "API Meteo", "type": "checkbox"},
                    {"id": "int_twilio", "label": "Twilio (SMS, Voice)", "type": "checkbox"},
                    {"id": "int_sendgrid", "label": "SendGrid / Resend (Email)", "type": "checkbox"},
                    {"id": "int_cloudinary", "label": "Cloudinary (Media)", "type": "checkbox"},
                    {"id": "int_storage", "label": "Cloud Storage (S3, GCS)", "type": "checkbox"},
                    {"id": "int_analytics", "label": "Analytics (GA4, Mixpanel, Amplitude)", "type": "checkbox"},
                ],
            },
            {
                "title": "Protocolli & API",
                "fields": [
                    {"id": "int_webhook", "label": "Webhook in entrata/uscita", "type": "checkbox"},
                    {"id": "int_rest", "label": "REST API", "type": "checkbox"},
                    {"id": "int_graphql", "label": "GraphQL", "type": "checkbox"},
                    {"id": "int_soap", "label": "SOAP", "type": "checkbox"},
                    {"id": "integrations_detail", "label": "Dettaglio integrazioni (endpoint, credenziali, documentazione)", "type": "textarea"},
                ],
            },
        ],
    },
    {
        "id": "security",
        "number": 10,
        "title": "Sicurezza",
        "description": "Requisiti di sicurezza, privacy, conformità normativa e gestione accessi.",
        "subsections": [
            {
                "title": "Conformità",
                "fields": [
                    {"id": "sec_gdpr", "label": "Conformità GDPR richiesta", "type": "checkbox"},
                    {"id": "sec_https", "label": "HTTPS obbligatorio", "type": "checkbox"},
                    {"id": "sec_privacy", "label": "Privacy by Design", "type": "checkbox"},
                    {"id": "sec_cookie_consent", "label": "Gestione consenso cookie granulare", "type": "checkbox"},
                    {"id": "sec_data_retention", "label": "Policy retention dati", "type": "textarea"},
                    {"id": "sec_compliance_other", "label": "Altre normative (PCI-DSS, HIPAA, settore-specifiche)", "type": "textarea"},
                ],
            },
            {
                "title": "Accesso & Autenticazione",
                "fields": [
                    {"id": "sec_2fa", "label": "Autenticazione a due fattori (2FA)", "type": "checkbox"},
                    {"id": "sec_biometric", "label": "Biometria (Face ID, Touch ID)", "type": "checkbox"},
                    {"id": "sec_roles", "label": "Controllo accessi basato su ruoli", "type": "checkbox"},
                    {"id": "sec_permissions", "label": "Permessi granulari per risorsa", "type": "checkbox"},
                    {"id": "sec_session", "label": "Gestione sessioni (timeout, revoca)", "type": "textarea"},
                ],
            },
            {
                "title": "Infrastruttura Sicura",
                "fields": [
                    {"id": "sec_backup", "label": "Backup automatici e disaster recovery", "type": "checkbox"},
                    {"id": "sec_audit_log", "label": "Audit log (chi ha fatto cosa e quando)", "type": "checkbox"},
                    {"id": "sec_encryption", "label": "Crittografia dati (at-rest, in-transit)", "type": "textarea"},
                    {"id": "sec_penetration", "label": "Penetration test richiesto", "type": "checkbox"},
                    {"id": "sec_security_notes", "label": "Note aggiuntive sicurezza", "type": "textarea"},
                ],
            },
        ],
    },
    {
        "id": "ui_ux",
        "number": 11,
        "title": "UI / UX",
        "description": "Design system, esperienza utente, responsive e riferimenti visivi.",
        "subsections": [
            {
                "title": "Stile & Design",
                "fields": [
                    {"id": "ux_style", "label": "Stile desiderato", "type": "select", "options": [
                        "Minimal & Clean", "Premium & Luxury", "Corporate & Professional",
                        "Playful & Colorful", "Dark & Tech", "Warm & Friendly", "Da definire con moodboard"
                    ]},
                    {"id": "ux_colors", "label": "Palette colori UI (primario, secondario, accent, neutri)", "type": "textarea"},
                    {"id": "ux_animations", "label": "Animazioni (nessuna, sottili, elaborate)", "type": "select", "options": [
                        "Nessuna", "Sottili (micro-interactions)", "Moderate", "Elaborate"
                    ]},
                    {"id": "ux_transitions", "label": "Transizioni tra schermate", "type": "textarea"},
                    {"id": "ux_design_system", "label": "Design System esistente o da creare", "type": "textarea"},
                    {"id": "ux_icons", "label": "Stile icone (outline, filled, custom)", "type": "text"},
                    {"id": "ux_wireframes", "label": "Wireframe / mockup esistenti (link)", "type": "textarea"},
                    {"id": "ux_references", "label": "App/siti di riferimento per UX", "type": "textarea"},
                ],
            },
            {
                "title": "Dispositivi & Responsive",
                "fields": [
                    {"id": "ux_responsive", "label": "Design responsive (mobile-first)", "type": "checkbox"},
                    {"id": "ux_mobile", "label": "Mobile (smartphone)", "type": "checkbox"},
                    {"id": "ux_tablet", "label": "Tablet", "type": "checkbox"},
                    {"id": "ux_desktop", "label": "Desktop", "type": "checkbox"},
                    {"id": "ux_watch", "label": "Apple Watch / Wearable", "type": "checkbox"},
                    {"id": "ux_tv", "label": "TV / Large screen", "type": "checkbox"},
                    {"id": "ux_breakpoints", "label": "Breakpoint specifici o requisiti layout", "type": "textarea"},
                    {"id": "ux_user_flows", "label": "User flow principali (descrivi i percorsi utente chiave)", "type": "textarea", "required": True},
                ],
            },
        ],
    },
    {
        "id": "database",
        "number": 12,
        "title": "Database",
        "description": "Modello dati, entità, relazioni e requisiti di persistenza.",
        "subsections": [
            {
                "title": "Modello Dati",
                "fields": [
                    {"id": "db_entities", "label": "Entità principali (es. Utente, Prodotto, Ordine, Appuntamento)", "type": "textarea", "required": True},
                    {"id": "db_relations", "label": "Relazioni tra entità", "type": "textarea"},
                    {"id": "db_fields", "label": "Campi chiave per entità principali", "type": "textarea"},
                    {"id": "db_estimated_volume", "label": "Volume dati stimato (record, crescita annua)", "type": "textarea"},
                ],
            },
            {
                "title": "Requisiti Dati",
                "fields": [
                    {"id": "db_permissions", "label": "Permessi accesso dati per ruolo", "type": "textarea"},
                    {"id": "db_history", "label": "Storico modifiche (chi, cosa, quando)", "type": "checkbox"},
                    {"id": "db_versioning", "label": "Versioning documenti/contenuti", "type": "checkbox"},
                    {"id": "db_audit", "label": "Audit trail completo", "type": "checkbox"},
                    {"id": "db_soft_delete", "label": "Soft delete (eliminazione logica)", "type": "checkbox"},
                    {"id": "db_notes", "label": "Note aggiuntive sul database", "type": "textarea"},
                ],
            },
        ],
    },
    {
        "id": "architecture",
        "number": 13,
        "title": "Architettura",
        "description": "Stack tecnologico, infrastruttura cloud e pattern architetturali.",
        "subsections": [
            {
                "title": "Stack Tecnologico",
                "fields": [
                    {"id": "arch_frontend", "label": "Frontend (framework, linguaggio)", "type": "text"},
                    {"id": "arch_backend", "label": "Backend (framework, linguaggio)", "type": "text"},
                    {"id": "arch_database", "label": "Database (tipo, hosting)", "type": "text"},
                    {"id": "arch_mobile", "label": "Mobile (Swift, Kotlin, React Native, Flutter)", "type": "text"},
                    {"id": "arch_preferences", "label": "Preferenze tecnologiche del cliente", "type": "textarea"},
                    {"id": "arch_constraints", "label": "Vincoli tecnologici", "type": "textarea"},
                ],
            },
            {
                "title": "Infrastruttura",
                "fields": [
                    {"id": "arch_cloud", "label": "Provider cloud", "type": "select", "options": [
                        "Vercel", "AWS", "Google Cloud", "Azure", "Firebase", "Supabase", "Self-hosted", "Da definire"
                    ]},
                    {"id": "arch_api", "label": "Tipo API (REST, GraphQL, tRPC)", "type": "text"},
                    {"id": "arch_storage", "label": "Storage file/media", "type": "text"},
                    {"id": "arch_auth", "label": "Sistema autenticazione", "type": "text"},
                    {"id": "arch_caching", "label": "Caching (Redis, CDN, in-memory)", "type": "text"},
                    {"id": "arch_cdn", "label": "CDN", "type": "text"},
                    {"id": "arch_push", "label": "Push notifications (APNs, FCM)", "type": "text"},
                    {"id": "arch_diagram", "label": "Diagramma architettura (descrizione o link)", "type": "textarea"},
                ],
            },
        ],
    },
    {
        "id": "roadmap",
        "number": 14,
        "title": "Roadmap",
        "description": "Fasi di progetto, milestone, tempistiche e criteri di accettazione.",
        "subsections": [
            {
                "title": "Fasi Progetto",
                "fields": [
                    {"id": "phase_analysis", "label": "Fase 1 — Analisi & Discovery", "type": "textarea"},
                    {"id": "phase_ux", "label": "Fase 2 — UX (wireframe, user flow)", "type": "textarea"},
                    {"id": "phase_ui", "label": "Fase 3 — UI Design (mockup, design system)", "type": "textarea"},
                    {"id": "phase_backend", "label": "Fase 4 — Backend & API", "type": "textarea"},
                    {"id": "phase_frontend", "label": "Fase 5 — Frontend & Mobile", "type": "textarea"},
                    {"id": "phase_testing", "label": "Fase 6 — Testing & QA", "type": "textarea"},
                    {"id": "phase_beta", "label": "Fase 7 — Beta / UAT", "type": "textarea"},
                    {"id": "phase_production", "label": "Fase 8 — Produzione & Deploy", "type": "textarea"},
                    {"id": "phase_support", "label": "Fase 9 — Supporto post-lancio", "type": "textarea"},
                ],
            },
            {
                "title": "Milestone & Deliverable",
                "fields": [
                    {"id": "milestones", "label": "Milestone chiave con date target", "type": "textarea", "required": True},
                    {"id": "deliverables", "label": "Deliverable per fase", "type": "textarea"},
                    {"id": "acceptance_criteria", "label": "Criteri di accettazione", "type": "textarea"},
                ],
            },
        ],
    },
    {
        "id": "delivery_checklist",
        "number": 15,
        "title": "Checklist Consegna",
        "description": "Elementi da consegnare al go-live e post-progetto.",
        "subsections": [
            {
                "title": "Consegna Tecnica",
                "fields": [
                    {"id": "del_source_code", "label": "Codice sorgente", "type": "checkbox"},
                    {"id": "del_repository", "label": "Repository Git (accesso trasferito)", "type": "checkbox"},
                    {"id": "del_documentation", "label": "Documentazione tecnica", "type": "checkbox"},
                    {"id": "del_manual", "label": "Manuale utente / admin", "type": "checkbox"},
                    {"id": "del_credentials", "label": "Credenziali e accessi", "type": "checkbox"},
                ],
            },
            {
                "title": "Infrastruttura & Deploy",
                "fields": [
                    {"id": "del_domain", "label": "Dominio configurato", "type": "checkbox"},
                    {"id": "del_hosting", "label": "Hosting attivo", "type": "checkbox"},
                    {"id": "del_dns", "label": "DNS configurato", "type": "checkbox"},
                    {"id": "del_ssl", "label": "Certificato SSL", "type": "checkbox"},
                    {"id": "del_app_store", "label": "Pubblicazione App Store", "type": "checkbox"},
                    {"id": "del_play_store", "label": "Pubblicazione Play Store", "type": "checkbox"},
                    {"id": "del_firebase", "label": "Firebase / servizi cloud configurati", "type": "checkbox"},
                    {"id": "del_backup", "label": "Sistema backup attivo", "type": "checkbox"},
                    {"id": "del_analytics", "label": "Analytics configurato", "type": "checkbox"},
                    {"id": "del_monitoring", "label": "Monitoring & alerting", "type": "checkbox"},
                    {"id": "delivery_notes", "label": "Note consegna", "type": "textarea"},
                ],
            },
        ],
    },
    {
        "id": "notes",
        "number": 16,
        "title": "Note",
        "description": "Spazio libero per osservazioni, decisioni e informazioni aggiuntive.",
        "subsections": [
            {
                "title": "Note Generali",
                "fields": [
                    {"id": "general_notes", "label": "Note e osservazioni", "type": "textarea"},
                    {"id": "meeting_notes", "label": "Note dalle riunioni di kick-off", "type": "textarea"},
                    {"id": "open_questions", "label": "Domande aperte da risolvere", "type": "textarea"},
                    {"id": "decisions_log", "label": "Registro decisioni prese", "type": "textarea"},
                ],
            },
        ],
    },
    {
        "id": "cursor_prompt",
        "number": 17,
        "title": "Prompt Finale Cursor",
        "description": "Generato automaticamente dal JSON compilato con generate_cursor_prompt.py — contiene tutti i campi per sviluppo autonomo.",
        "subsections": [
            {
                "title": "Prompt di Sviluppo",
                "fields": [
                    {
                        "id": "cursor_prompt_output",
                        "label": "Prompt completo per Cursor AI",
                        "type": "textarea",
                        "generated": True,
                        "template": """# PROGETTO: {{company_name}}

## RIEPILOGO
- **Cliente:** {{company_name}} ({{legal_name}})
- **Settore:** {{sector}} — {{sector_other}}
- **Referente:** {{contact_name}} ({{contact_email}})
- **Obiettivi:** {{project_objectives}}
- **Problemi da risolvere:** {{problems_to_solve}}
- **Budget:** {{budget_range}} — {{budget_notes}}
- **Tempistiche:** {{timeline}} — Deadline: {{deadline}}
- **Priorità:** {{priorities}}

## STACK TECNOLOGICO
- **Frontend:** {{arch_frontend}}
- **Backend:** {{arch_backend}}
- **Database:** {{arch_database}}
- **Mobile:** {{arch_mobile}}
- **Cloud:** {{arch_cloud}}
- **API:** {{arch_api}}
- **Auth:** {{arch_auth}}

## ARCHITETTURA
{{arch_diagram}}

## DATABASE
**Entità:** {{db_entities}}
**Relazioni:** {{db_relations}}
**Campi chiave:** {{db_fields}}
**Volume:** {{db_estimated_volume}}

## UI / UX
- **Stile:** {{ux_style}}
- **Colori:** {{ux_colors}} | Brand: {{brand_colors}}
- **Animazioni:** {{ux_animations}}
- **Design System:** {{ux_design_system}}
- **User Flows:** {{ux_user_flows}}
- **Dispositivi:** Mobile, Tablet, Desktop

## FUNZIONALITÀ
{{features_detail}}

## FLUSSI BUSINESS
- **Customer Journey:** {{customer_journey}}
- **Preventivi:** {{quotation_process}}
- **Ordini:** {{order_process}}
- **Appuntamenti:** {{appointment_process}}
- **Pagamenti:** {{payment_flows}}

## API & INTEGRAZIONI
{{integrations_detail}}
**API esistenti:** {{existing_apis}}
**Webhook:** {{webhooks}}
**Sincronizzazioni:** {{sync_requirements}}

## AUTOMAZIONI
- **Comunicazioni:** Email, SMS, WhatsApp, Push
- **Reminder:** {{auto_reminders}}
- **Follow-up:** {{auto_followup}}
- **Marketing:** {{auto_marketing}}
- **Pipeline:** {{auto_pipeline}}
- **Workflow:** {{auto_workflows}}

## SICUREZZA
- GDPR: {{sec_gdpr}} | HTTPS: {{sec_https}} | 2FA: {{sec_2fa}}
- **Crittografia:** {{sec_encryption}}
- **Retention:** {{sec_data_retention}}
- **Audit log:** {{sec_audit_log}}

## BRANDING
- **Tone of Voice:** {{tone_of_voice}}
- **USP:** {{usp}}
- **Target:** {{target_audience}}
- **Font:** {{brand_fonts}}

## ROADMAP
{{milestones}}
**Deliverable:** {{deliverables}}
**Criteri accettazione:** {{acceptance_criteria}}

## VINCOLI
{{constraints}} | {{arch_constraints}}

## DELIVERABLE
Repository, documentazione, deploy su {{arch_cloud}}, store submission se applicabile.

---
*Generato da SwiftWithFer Discovery Document v1.0 — Compilare tutti i campi sopra per un prompt completo.*""",
                    },
                ],
            },
        ],
    },
]


def get_schema():
    return {"meta": META, "sections": SECTIONS, "sectors": SECTORS}


def iter_fields():
    for section in SECTIONS:
        for subsection in section["subsections"]:
            for field in subsection["fields"]:
                yield section, subsection, field
