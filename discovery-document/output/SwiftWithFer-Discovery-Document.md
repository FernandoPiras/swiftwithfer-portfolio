# SwiftWithFer — Discovery Document
*Analisi requisiti per kick-off progetto*

> **Come compilare:** compila ogni campo sotto. I campi con * sono obbligatori. Per lo sviluppo con AI, usa il file JSON e genera il prompt con `python3 discovery-document/scripts/generate_cursor_prompt.py`.

---
| Versione | 1.1.0 || Autore | Fernando Piras — SwiftWithFer || Data | _____________ || Cliente | _____________ || Progetto | _____________ || Confidenzialità | Confidenziale — Uso interno e cliente |

---
## Indice
1. [Informazioni Cliente](#client_info)
2. [Branding](#branding)
3. [Analisi Business](#business_analysis)
4. [Presenza Digitale](#digital_presence)
5. [Software Esistenti](#existing_software)
6. [Funzionalità Desiderate](#desired_features)
7. [Automazioni](#automations)
8. [Pagamenti](#payments)
9. [Integrazioni](#integrations)
10. [Sicurezza](#security)
11. [UI / UX](#ui_ux)
12. [Database](#database)
13. [Architettura](#architecture)
14. [Roadmap](#roadmap)
15. [Checklist Consegna](#delivery_checklist)
16. [Note](#notes)
17. [Prompt Finale Cursor](#cursor_prompt)

---

## 1. Informazioni Cliente {#client_info}
*Dati anagrafici, contatti, contesto aziendale e obiettivi strategici del progetto.*

### Dati Aziendali
**Nome azienda / Brand commerciale** *(obbligatorio)*

`company_name`: 

**Ragione sociale** *(obbligatorio)*

`legal_name`: 

**Partita IVA / Codice fiscale**

`vat_number`: 

**Settore di attività**

> Opzioni: Hotel & Hospitality · Ristorante & Food · Centro Estetico & Beauty · Palestra & Fitness · Negozio Retail · Concessionaria Auto · Studio Medico & Sanità · Azienda B2B · E-commerce · Servizi Professionali · Immobiliare · Educazione · Eventi · Altro

`sector`: 

**Settore (specificare se Altro)**

`sector_other`: 

**Numero dipendenti**

> Opzioni: 1 (freelance) · 2-5 · 6-20 · 21-50 · 51-200 · 200+

`employees`: 

**Sedi operative (indirizzi e ruolo di ciascuna)**

```
locations:




```

**Sede legale / principale**

```
address:




```

**Orari di apertura / operatività**

```
business_hours:




```


### Referente Progetto
**Nome e cognome referente** *(obbligatorio)*

`contact_name`: 

**Ruolo in azienda**

`contact_role`: 

**Telefono** *(obbligatorio)*

`contact_phone`: 

**Email** *(obbligatorio)*

`contact_email`: 

**Referente secondario (nome, ruolo, contatti)**

```
contact_secondary:




```

**Decision maker finale (se diverso dal referente)**

`decision_maker`: 


### Presenza Online Attuale
**Sito web attuale**

`website`: 

**Instagram**

`social_instagram`: 

**Facebook**

`social_facebook`: 

**LinkedIn**

`social_linkedin`: 

**TikTok**

`social_tiktok`: 

**YouTube**

`social_youtube`: 

**Altri canali social**

```
social_other:




```


### Obiettivi e Vincoli
**Obiettivi principali del progetto (cosa deve ottenere l'azienda)** *(obbligatorio)*

```
project_objectives:




```

**Problemi attuali da risolvere (pain points)** *(obbligatorio)*

```
problems_to_solve:




```

**Metriche di successo (KPI misurabili)**

```
success_metrics:




```

**Budget indicativo**

> Opzioni: < €5.000 · €5.000 – €15.000 · €15.000 – €30.000 · €30.000 – €60.000 · €60.000 – €100.000 · > €100.000 · Da definire

`budget_range`: 

**Note sul budget (fasi, vincoli, modalità pagamento)**

```
budget_notes:




```

**Tempistiche desiderate**

> Opzioni: Urgente (< 1 mese) · 1-2 mesi · 3-4 mesi · 5-6 mesi · 6+ mesi · Flessibile

`timeline`: 

**Data limite / evento di lancio**

`deadline`: 

**Priorità (ordinare: Must-have, Should-have, Nice-to-have)** *(obbligatorio)*

```
priorities:




```

**Vincoli noti (tecnici, legali, organizzativi)**

```
constraints:




```


## 2. Branding {#branding}
*Identità visiva, tono comunicativo, posizionamento e materiali esistenti.*

### Identità Visiva
**Stato logo**

> Opzioni: Logo esistente (file vettoriale) · Logo esistente (solo raster) · Da creare · Da rifare / rebrand

`logo_status`: 

**File logo disponibili (formati, percorsi, link)**

```
logo_files:




```

**Colori brand (hex, RGB, Pantone)**

```
brand_colors:




```

**Font aziendali (nomi, licenze, file)**

```
brand_fonts:




```

**Brand Guidelines esistenti (link o descrizione)**

```
brand_guidelines:




```

**Siti/app di riferimento per lo stile desiderato**

```
design_references:




```


### Materiali Esistenti
- [ ] **Foto professionali disponibili**
**Dettaglio foto (tipologia, quantità, qualità)**

```
photos_notes:




```

- [ ] **Video disponibili**
**Dettaglio video**

```
videos_notes:




```

- [ ] **Brochure / depliant**
- [ ] **Cataloghi prodotti/servizi**
**Altri materiali grafici (link, descrizione)**

```
graphic_materials:




```


### Posizionamento
**Tone of Voice (formale, friendly, premium, tecnico, ecc.)**

```
tone_of_voice:




```

**USP — Unique Selling Proposition**

```
usp:




```

**Valori aziendali**

```
brand_values:




```

**Target / Buyer Personas (età, professione, esigenze, comportamenti)** *(obbligatorio)*

```
target_audience:




```

**Competitor principali (nomi, siti, punti di forza/debolezza)**

```
competitors:




```

**Elemento differenziante rispetto ai competitor**

```
differentiation:




```


## 3. Analisi Business {#business_analysis}
*Processi operativi, flussi cliente, offerta commerciale e workflow interni.*

### Descrizione Attività
**Descrizione completa dell'attività** *(obbligatorio)*

```
business_description:




```

**Modello di business (B2B, B2C, B2B2C, marketplace, SaaS, ecc.)**

`business_model`: 

**Flussi di ricavo principali**

```
revenue_streams:




```

**Stagionalità / picchi di attività**

```
seasonality:




```


### Offerta
**Servizi offerti (elenco dettagliato con descrizione e prezzo)**

```
services:




```

**Prodotti (elenco, varianti, SKU, prezzi)**

```
products:




```

**Abbonamenti / piani ricorrenti**

```
subscriptions:




```

**Pacchetti / bundle**

```
packages:




```


### Flusso Cliente
**Customer journey (dalla scoperta al post-vendita)** *(obbligatorio)*

```
customer_journey:




```

**Canali di acquisizione clienti**

```
acquisition_channels:




```

**Processo preventivi (come vengono creati, approvati, inviati)**

```
quotation_process:




```

**Processo ordini (online, telefono, in sede)**

```
order_process:




```

**Processo appuntamenti / prenotazioni**

```
appointment_process:




```


### Operatività Interna
**Workflow interno (passaggi operativi quotidiani)**

```
internal_workflow:




```

**Ruoli del team e responsabilità**

```
team_roles:




```

**Metodi di pagamento accettati**

- [ ] Contanti

- [ ] Carta POS

- [ ] Bonifico

- [ ] PayPal

- [ ] Stripe

- [ ] Satispay

- [ ] Buoni pasto

- [ ] Finanziamento

- [ ] Altro

**Processo fatturazione (software, SDI, note)**

```
invoicing_process:




```

**Gestione magazzino / scorte**

```
inventory_management:




```

**Uso CRM attuale (come gestite i contatti)**

```
crm_usage:




```

**Programma fedeltà esistente**

```
loyalty_program:




```

**Gestione recensioni (Google, TripAdvisor, ecc.)**

```
reviews_management:




```

**Attività marketing attuali (campagne, newsletter, ads)**

```
marketing_activities:




```


## 4. Presenza Digitale {#digital_presence}
*Infrastruttura web attuale, SEO, analytics, compliance e canali digitali.*

### Sito Web Attuale
**URL sito attuale**

`current_site_url`: 

**Piattaforma / CMS attuale**

`site_platform`: 

**Provider hosting**

`hosting_provider`: 

**Registrar dominio**

`domain_registrar`: 

**Soddisfazione sito attuale (1-10)**

`site_satisfaction`: 

**Problemi del sito attuale**

```
site_issues:




```


### SEO & Analytics
**Stato SEO (audit esistente, posizionamento, keyword)**

```
seo_status:




```

**Google Analytics (versione, accesso)**

`google_analytics`: 

- [ ] **Google Search Console**
**Pixel di tracciamento (Meta, Google Ads, TikTok, ecc.)**

```
tracking_pixels:




```

**Tool newsletter (Mailchimp, Brevo, ecc.)**

`newsletter_tool`: 

**Numero iscritti newsletter**

`newsletter_subscribers`: 


### Canali Digitali
**Google Business Profile (stato, recensioni)**

```
google_business:




```

**Marketplace (Amazon, eBay, Etsy, Booking.com, ecc.)**

```
marketplaces:




```

**Piattaforma e-commerce attuale**

`ecommerce_platform`: 

**Area clienti esistente (funzionalità)**

```
customer_area:




```

**Blog (frequenza pubblicazione, argomenti)**

```
blog:




```


### Compliance
**Privacy Policy esistente (link)**

`privacy_policy`: 

**Cookie Policy esistente (link)**

`cookie_policy`: 

**Cookie banner attuale**

> Opzioni: Assente · Base · Con gestione consenso granulare · Iubenda / Cookiebot / altro tool

`cookie_banner`: 

**Stato conformità GDPR**

```
gdpr_compliance:




```

**Accessibilità sito attuale (WCAG)**

```
accessibility_current:




```


## 5. Software Esistenti {#existing_software}
*Sistemi in uso, integrazioni attuali, API e flussi dati.*

### Gestionali & ERP
**Gestionale principale (nome, versione, fornitore)**

```
management_software:




```

**CRM (nome, versione, utenti attivi)**

```
crm_software:




```

**ERP**

```
erp_software:




```

**PMS (Property Management — hotel)**

```
pms_software:




```

**POS / Cassa**

```
pos_software:




```

**Sistema prenotazioni / booking**

```
booking_software:




```


### Strumenti Operativi
**Calendario condiviso (Google, Outlook, altro)**

`calendar_tool`: 

**Gateway pagamenti attuale**

```
payment_gateway_existing:




```

**Software contabilità / fatturazione**

`accounting_software`: 

**Strumenti comunicazione interna (Slack, Teams, WhatsApp Business)**

```
communication_tools:




```


### Dati & Integrazioni
**API disponibili (documentazione, accesso)**

```
existing_apis:




```

**Webhook configurati**

```
webhooks:




```

**Esportazioni dati disponibili (formati, frequenza)**

```
data_exports:




```

**Importazioni dati necessarie (fonti, volumi)**

```
data_imports:




```

**Sincronizzazioni richieste tra sistemi**

```
sync_requirements:




```

**Database esistenti (tipo, hosting, dimensione)**

```
database_existing:




```

**Migrazione dati da sistemi legacy**

```
migration_needs:




```


## 6. Funzionalità Desiderate {#desired_features}
*Piattaforme, moduli e feature richieste per il nuovo progetto.*

### Piattaforme
- [ ] **Sito Web**
- [ ] **Web App (PWA)**
- [ ] **App iOS (nativa)**
- [ ] **App Android (nativa)**
- [ ] **Dashboard Admin**
- [ ] **Area Staff / Operativa**
- [ ] **Area Cliente**
**Note sulle piattaforme**

```
platform_notes:




```


### Autenticazione & Ruoli
- [ ] **Sistema login richiesto**
**Metodi autenticazione**

- [ ] Email/Password

- [ ] Magic Link

- [ ] Social Login (Google)

- [ ] Social Login (Apple)

- [ ] Social Login (Facebook)

- [ ] SSO Enterprise

- [ ] OTP SMS

- [ ] Biometria

**Ruoli utente previsti (descrizione e permessi)** *(obbligatorio)*

```
user_roles:




```

**Modello permessi (RBAC, ABAC, custom)**

```
permissions_model:




```


### Moduli Funzionali
- [ ] **Notifiche (push, email, in-app)**
- [ ] **Chat / Messaggistica**
- [ ] **Calendario / Agenda**
- [ ] **Gestione documenti**
- [ ] **Upload file**
- [ ] **Download / Export file**
- [ ] **QR Code (generazione/lettura)**
- [ ] **Barcode / Scanner**
- [ ] **NFC**
- [ ] **Mappe interattive**
- [ ] **GPS / Geolocalizzazione**
- [ ] **Funzionalità AI**
- [ ] **Ricerca avanzata**
- [ ] **Filtri e ordinamento**
- [ ] **Report personalizzati**
- [ ] **Statistiche / Analytics interne**
- [ ] **Dashboard KPI**
- [ ] **Backup automatici**
- [ ] **Export dati (CSV, Excel, PDF)**
- [ ] **Import dati bulk**
- [ ] **Modalità offline**
- [ ] **Dark Mode**
- [ ] **Multi lingua**
- [ ] **Accessibilità WCAG 2.1 AA**
**Dettaglio funzionalità custom (descrizione approfondita per ciascuna)** *(obbligatorio)*

```
features_detail:




```


## 7. Automazioni {#automations}
*Workflow automatici, comunicazioni programmate e pipeline operative.*

### Canali Comunicazione
- [ ] **Email automatiche**
- [ ] **SMS**
- [ ] **WhatsApp Business API**
- [ ] **Push notification**
**Trigger comunicazioni (eventi che attivano invii)**

```
communication_triggers:




```


### Workflow
**Reminder automatici (appuntamenti, scadenze)**

```
auto_reminders:




```

**Follow-up post-vendita / post-servizio**

```
auto_followup:




```

**Automazioni marketing (drip campaign, segmentazione)**

```
auto_marketing:




```

**Automazioni CRM (lead scoring, assegnazione)**

```
auto_crm:




```

**Automazioni AI (classificazione, suggerimenti, chatbot)**

```
auto_ai:




```

**Pipeline vendite automatizzata**

```
auto_pipeline:




```

**Workflow operativi interni (approvazioni, notifiche team)**

```
auto_workflows:




```

**Sistema ticket / supporto**

```
auto_tickets:




```


## 8. Pagamenti {#payments}
*Gateway, metodi di pagamento, fatturazione e modelli di pricing.*

### Gateway & Metodi
- [ ] **Stripe**
- [ ] **PayPal**
- [ ] **Apple Pay**
- [ ] **Google Pay**
- [ ] **Bonifico bancario**
- [ ] **POS fisico**
- [ ] **Satispay**
**Altri metodi**

```
pay_other:




```


### Modelli di Pagamento
- [ ] **Fatturazione elettronica integrata**
- [ ] **Abbonamenti ricorrenti**
- [ ] **Pagamento rateale**
- [ ] **Coupon / codici sconto**
- [ ] **Gift Card**
- [ ] **Acconti / caparre**
**Flussi di pagamento dettagliati (quando, quanto, rimborsi)** *(obbligatorio)*

```
payment_flows:




```

**Policy rimborsi e cancellazioni**

```
refund_policy:




```


## 9. Integrazioni {#integrations}
*Servizi cloud, API terze parti e protocolli di comunicazione.*

### Cloud & Backend
- [ ] **Firebase**
- [ ] **Supabase**
- [ ] **AWS**
- [ ] **Google Cloud**
- [ ] **Microsoft Azure**
- [ ] **Vercel**

### Servizi Terze Parti
- [ ] **Apple (Sign In, Push, StoreKit)**
- [ ] **Google (Maps, Auth, Workspace)**
- [ ] **Meta (Login, Pixel, WhatsApp)**
- [ ] **OpenAI**
- [ ] **Claude / Anthropic**
- [ ] **Google Maps / Mapbox**
- [ ] **API Meteo**
- [ ] **Twilio (SMS, Voice)**
- [ ] **SendGrid / Resend (Email)**
- [ ] **Cloudinary (Media)**
- [ ] **Cloud Storage (S3, GCS)**
- [ ] **Analytics (GA4, Mixpanel, Amplitude)**

### Protocolli & API
- [ ] **Webhook in entrata/uscita**
- [ ] **REST API**
- [ ] **GraphQL**
- [ ] **SOAP**
**Dettaglio integrazioni (endpoint, credenziali, documentazione)**

```
integrations_detail:




```


## 10. Sicurezza {#security}
*Requisiti di sicurezza, privacy, conformità normativa e gestione accessi.*

### Conformità
- [ ] **Conformità GDPR richiesta**
- [ ] **HTTPS obbligatorio**
- [ ] **Privacy by Design**
- [ ] **Gestione consenso cookie granulare**
**Policy retention dati**

```
sec_data_retention:




```

**Altre normative (PCI-DSS, HIPAA, settore-specifiche)**

```
sec_compliance_other:




```


### Accesso & Autenticazione
- [ ] **Autenticazione a due fattori (2FA)**
- [ ] **Biometria (Face ID, Touch ID)**
- [ ] **Controllo accessi basato su ruoli**
- [ ] **Permessi granulari per risorsa**
**Gestione sessioni (timeout, revoca)**

```
sec_session:




```


### Infrastruttura Sicura
- [ ] **Backup automatici e disaster recovery**
- [ ] **Audit log (chi ha fatto cosa e quando)**
**Crittografia dati (at-rest, in-transit)**

```
sec_encryption:




```

- [ ] **Penetration test richiesto**
**Note aggiuntive sicurezza**

```
sec_security_notes:




```


## 11. UI / UX {#ui_ux}
*Design system, esperienza utente, responsive e riferimenti visivi.*

### Stile & Design
**Stile desiderato**

> Opzioni: Minimal & Clean · Premium & Luxury · Corporate & Professional · Playful & Colorful · Dark & Tech · Warm & Friendly · Da definire con moodboard

`ux_style`: 

**Palette colori UI (primario, secondario, accent, neutri)**

```
ux_colors:




```

**Animazioni (nessuna, sottili, elaborate)**

> Opzioni: Nessuna · Sottili (micro-interactions) · Moderate · Elaborate

`ux_animations`: 

**Transizioni tra schermate**

```
ux_transitions:




```

**Design System esistente o da creare**

```
ux_design_system:




```

**Stile icone (outline, filled, custom)**

`ux_icons`: 

**Wireframe / mockup esistenti (link)**

```
ux_wireframes:




```

**App/siti di riferimento per UX**

```
ux_references:




```


### Dispositivi & Responsive
- [ ] **Design responsive (mobile-first)**
- [ ] **Mobile (smartphone)**
- [ ] **Tablet**
- [ ] **Desktop**
- [ ] **Apple Watch / Wearable**
- [ ] **TV / Large screen**
**Breakpoint specifici o requisiti layout**

```
ux_breakpoints:




```

**User flow principali (descrivi i percorsi utente chiave)** *(obbligatorio)*

```
ux_user_flows:




```


## 12. Database {#database}
*Modello dati, entità, relazioni e requisiti di persistenza.*

### Modello Dati
**Entità principali (es. Utente, Prodotto, Ordine, Appuntamento)** *(obbligatorio)*

```
db_entities:




```

**Relazioni tra entità**

```
db_relations:




```

**Campi chiave per entità principali**

```
db_fields:




```

**Volume dati stimato (record, crescita annua)**

```
db_estimated_volume:




```


### Requisiti Dati
**Permessi accesso dati per ruolo**

```
db_permissions:




```

- [ ] **Storico modifiche (chi, cosa, quando)**
- [ ] **Versioning documenti/contenuti**
- [ ] **Audit trail completo**
- [ ] **Soft delete (eliminazione logica)**
**Note aggiuntive sul database**

```
db_notes:




```


## 13. Architettura {#architecture}
*Stack tecnologico, infrastruttura cloud e pattern architetturali.*

### Stack Tecnologico
**Frontend (framework, linguaggio)**

`arch_frontend`: 

**Backend (framework, linguaggio)**

`arch_backend`: 

**Database (tipo, hosting)**

`arch_database`: 

**Mobile (Swift, Kotlin, React Native, Flutter)**

`arch_mobile`: 

**Preferenze tecnologiche del cliente**

```
arch_preferences:




```

**Vincoli tecnologici**

```
arch_constraints:




```


### Infrastruttura
**Provider cloud**

> Opzioni: Vercel · AWS · Google Cloud · Azure · Firebase · Supabase · Self-hosted · Da definire

`arch_cloud`: 

**Tipo API (REST, GraphQL, tRPC)**

`arch_api`: 

**Storage file/media**

`arch_storage`: 

**Sistema autenticazione**

`arch_auth`: 

**Caching (Redis, CDN, in-memory)**

`arch_caching`: 

**CDN**

`arch_cdn`: 

**Push notifications (APNs, FCM)**

`arch_push`: 

**Diagramma architettura (descrizione o link)**

```
arch_diagram:




```


## 14. Roadmap {#roadmap}
*Fasi di progetto, milestone, tempistiche e criteri di accettazione.*

### Fasi Progetto
**Fase 1 — Analisi & Discovery**

```
phase_analysis:




```

**Fase 2 — UX (wireframe, user flow)**

```
phase_ux:




```

**Fase 3 — UI Design (mockup, design system)**

```
phase_ui:




```

**Fase 4 — Backend & API**

```
phase_backend:




```

**Fase 5 — Frontend & Mobile**

```
phase_frontend:




```

**Fase 6 — Testing & QA**

```
phase_testing:




```

**Fase 7 — Beta / UAT**

```
phase_beta:




```

**Fase 8 — Produzione & Deploy**

```
phase_production:




```

**Fase 9 — Supporto post-lancio**

```
phase_support:




```


### Milestone & Deliverable
**Milestone chiave con date target** *(obbligatorio)*

```
milestones:




```

**Deliverable per fase**

```
deliverables:




```

**Criteri di accettazione**

```
acceptance_criteria:




```


## 15. Checklist Consegna {#delivery_checklist}
*Elementi da consegnare al go-live e post-progetto.*

### Consegna Tecnica
- [ ] **Codice sorgente**
- [ ] **Repository Git (accesso trasferito)**
- [ ] **Documentazione tecnica**
- [ ] **Manuale utente / admin**
- [ ] **Credenziali e accessi**

### Infrastruttura & Deploy
- [ ] **Dominio configurato**
- [ ] **Hosting attivo**
- [ ] **DNS configurato**
- [ ] **Certificato SSL**
- [ ] **Pubblicazione App Store**
- [ ] **Pubblicazione Play Store**
- [ ] **Firebase / servizi cloud configurati**
- [ ] **Sistema backup attivo**
- [ ] **Analytics configurato**
- [ ] **Monitoring & alerting**
**Note consegna**

```
delivery_notes:




```


## 16. Note {#notes}
*Spazio libero per osservazioni, decisioni e informazioni aggiuntive.*

### Note Generali
**Note e osservazioni**

```
general_notes:




```

**Note dalle riunioni di kick-off**

```
meeting_notes:




```

**Domande aperte da risolvere**

```
open_questions:




```

**Registro decisioni prese**

```
decisions_log:




```


## 17. Prompt Finale Cursor {#cursor_prompt}
*Generato automaticamente dal JSON compilato con generate_cursor_prompt.py — contiene tutti i campi per sviluppo autonomo.*

### Prompt di Sviluppo
**Prompt completo per Cursor AI**

```
cursor_prompt_output:




```


---
*© 2026 SwiftWithFer — https://fernandopiras.com*
