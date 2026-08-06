# Enterprise GitHub Portfolio — Phase 2  
## Real Project Discovery & Evidence Matrix

**Owner:** Fernando Piras  
**GitHub username:** FernandoPiras  
**Primary site:** https://www.fernandopiras.com  
**Phase 1 reference:** `GITHUB_PORTFOLIO_PHASE_1_REPORT.md` (merged)  
**Scope:** Analysis, discovery, and evidence collection only.  
**Not in this phase:** Profile README, showcase repositories, banners, generated images, badges, marketing copy finalization, Phase 3.

**Evidence rule:** Every future public sentence must be backed by sources listed here. Hypotheses are labeled. Unverified items are not facts.

---

# 1. Executive Summary

Two published App Store products were identified and verified through public Apple metadata, official legal/support sites, and portfolio marketing materials in this workspace.

| Product | Public App Store name | Bundle ID | App Store version | Seller |
|---------|----------------------|-----------|-------------------|--------|
| AndroMetrics | AndroMetrics | `com.fernando.andrometrics.app` | 1.1.0 | Fernando Piras |
| Preventivo Rapido | PreventivoRapido PRO | `Fernando.PreventivoRapido` | 1.1.0 | Fernando Piras |

**Critical availability finding:** Commercial **source code is not present** in this workspace and was **not accessible** via listed public GitHub repositories. Stack details such as “SwiftUI” therefore come from owner-controlled marketing/config and corroborating platform signals — not from inspected application source. They must be treated with qualification unless the owner confirms or provides source access.

**Strongest verified facts (both products):**

- Published on the App Store under seller **Fernando Piras**
- Native iOS (and iPad-capable) applications
- Official privacy / terms / support pages live
- Real product screenshots and icons available in the portfolio workspace
- Monetization via Apple subscriptions (StoreKit / App Store billing)

**Portfolio readiness (README writing):**

| Surface | Ready to draft without unverified claims? | Condition |
|---------|---------------------------------------------|-----------|
| Profile README | **Conditionally yes** | Stick to SAFE TO CLAIM + owner answers for qualifications |
| AndroMetrics showcase | **Conditionally yes** | Prefer App Store + legal evidence; qualify Swift/SwiftUI; resolve version mismatch |
| Preventivo Rapido showcase | **Conditionally yes** | Prefer App Store + legal evidence; qualify Swift/SwiftUI and “cloud sync” implementation |

**Phase 3 must not start until this document is accepted and missing owner inputs are answered for any claim marked WITH QUALIFICATION that will appear publicly.**

---

# 2. Project Availability

## 2.1 Sources searched

| Source | Result |
|--------|--------|
| Workspace `/workspace` (`swiftwithfer-portfolio`) | Marketing site + product assets + config claims |
| Public GitHub under `FernandoPiras` | Legal/support repos found; **no product source repos** |
| `andrometrics-legal` | Live legal/support site content (cloned for analysis) |
| `andrometrics-privacy` | Empty repository (no files) |
| `preventivorapido--legal` | Live legal/support site content (cloned for analysis) |
| `preventivorapido-support` | Empty repository |
| Apple iTunes Lookup API (`country=it`) | App metadata VERIFIED |
| Live HTTP checks | App Store, legal pages, fernandopiras.com product pages → HTTP 200 |

## 2.2 Availability matrix

| Project | Source code in workspace | Private source accessible | Public legal docs | App Store listing | Portfolio page | Overall |
|---------|--------------------------|---------------------------|-------------------|-------------------|----------------|---------|
| AndroMetrics | **NOT FOUND** | **NOT FOUND** | **VERIFIED** | **VERIFIED** | **VERIFIED** | Analyzable via public evidence only |
| Preventivo Rapido | **NOT FOUND** | **NOT FOUND** | **VERIFIED** | **VERIFIED** | **VERIFIED** | Analyzable via public evidence only |

## 2.3 Evidence Missing (global)

- Application Xcode/Swift source trees  
- Package manifests (`Package.swift`, `Podfile`, SPM locks)  
- CI/CD configs for the apps  
- Unit/UI test suites  
- Exact third-party SDK versions  
- Private backend repos / infrastructure diagrams beyond privacy text  
- Authoritative confirmation that portfolio `technologies: ["SwiftUI", …]` matches current binaries  

---

# 3. AndroMetrics Evidence Matrix

## 3.1 Identity & inventory

| Item | Value | Status | Evidence |
|------|-------|--------|----------|
| Path / repository (source) | Not in workspace | **NOT FOUND** | Search of `/workspace`; no public source repo |
| Official public name | AndroMetrics | **VERIFIED** | iTunes `trackName`; App Store |
| Portfolio / case-study slug | `andrometrics` | **VERIFIED** | `src/config/site.ts`, `/apps/andrometrics` |
| App Store ID | `6758244167` | **VERIFIED** | iTunes lookup |
| Bundle identifier | `com.fernando.andrometrics.app` | **VERIFIED** | iTunes `bundleId` (non-secret identifier) |
| Seller / developer | Fernando Piras | **VERIFIED** | iTunes `sellerName` / `artistName` |
| Platforms | iPhone + iPad (`iosUniversal`) | **VERIFIED** | iTunes `features`, device lists, iPad screenshots |
| Status | Published on App Store | **VERIFIED** | Live listing HTTP 200; iTunes metadata |
| App Store version | **1.1.0** | **VERIFIED** | iTunes `version` |
| Legal/support stated version | **1.4.0** | **PARTIALLY VERIFIED** (conflict) | `andrometrics-legal/support.html`, privacy/terms meta |
| Minimum iOS | 18.6 | **VERIFIED** | iTunes `minimumOsVersion` |
| Category | Health & Fitness / Medicine (IT store) | **VERIFIED** | iTunes genres |
| Price | Free (IAP subscriptions) | **VERIFIED** | iTunes `price` 0; description Premium |
| Rating | 5.0 from 4 ratings | **VERIFIED** | iTunes `averageUserRating` / `userRatingCount` |
| Localization (store languages) | Italian (`IT`) | **VERIFIED** | iTunes `languageCodesISO2A` |
| Extra locales claimed | ES, DE in release notes | **PARTIALLY VERIFIED** | Release notes mention translations; store language list still `IT` only |
| Release date | 2026-03-06 | **VERIFIED** | iTunes `releaseDate` |
| Current version date | 2026-07-19 | **VERIFIED** | iTunes `currentVersionReleaseDate` |
| File size | ~32.4 MB | **VERIFIED** | iTunes `fileSizeBytes` |
| Age rating | 12+ | **VERIFIED** | iTunes |
| Official assets (portfolio) | icon, wordmark, 3 screenshots, demo mp4 | **VERIFIED** | `/workspace/public/images/apps/andrometrics/*`, `/videos/andrometrics-demo.mp4` |
| Official assets (legal site) | app-icon, brand-logo, favicon, og-image | **VERIFIED** | `andrometrics-legal/assets/` |
| App Store artwork / screenshots | Remote Apple CDN assets (8 iPhone + 8 iPad) | **VERIFIED** | iTunes screenshot URLs |
| Privacy policy | Live | **VERIFIED** | https://fernandopiras.github.io/andrometrics-legal/privacy.html |
| Support URL | Live | **VERIFIED** | https://fernandopiras.github.io/andrometrics-legal/support.html |
| Terms | Live | **VERIFIED** | terms.html on legal site |
| Marketing / product URL | https://www.fernandopiras.com/apps/andrometrics | **VERIFIED** | HTTP 200; also iTunes `sellerUrl` |
| Documentation (in-app/source) | Not available | **NOT FOUND** | No source |
| Tests | Not available | **NOT FOUND** | No source |
| External services | OpenAI (via proxy), Cloudflare (proxy), Firebase Auth anon + Firestore (optional TTC), Apple HealthKit, StoreKit, iCloud KVS | **VERIFIED** (as declared in privacy) | privacy.html |
| Dependencies (code) | Unknown | **NOT FOUND** | No source |
| Release config | App Store distribution | **VERIFIED** | Live listing |
| Monetization | Premium subscription via Apple; 7-day intro mentioned | **VERIFIED** | App Store description; privacy StoreKit; terms |
| Analytics SDK | Not declared | **NOT FOUND** | Privacy does not name product analytics SDK |
| Push notifications | Not declared | **NOT FOUND** | — |
| Local notifications | Not declared for this app | **NOT FOUND** | — |
| Authentication | No email/password account; optional Firebase Anonymous Auth for TTC sync | **VERIFIED** | privacy + delete-account.html |
| Storage | Local device primary; optional iCloud KVS; optional Firebase snapshots for TTC | **VERIFIED** | privacy.html |
| Backend | Optional Firebase for TTC snapshots; AI proxy (Cloudflare → OpenAI) | **VERIFIED** | privacy.html |
| AI | OpenAI via owner-managed proxy; consent-gated | **VERIFIED** | privacy.html; App Store description (Coach IA / interpretazione IA) |
| Export / PDF | Report PDF (Premium) | **VERIFIED** | App Store description |
| OCR | On-device OCR for reports | **VERIFIED** | privacy + App Store description |
| Widget | Home Screen widget | **VERIFIED** | App Store description |
| Live Activities | — | **NOT FOUND** | — |
| StoreKit | Apple StoreKit / App Store subscriptions | **VERIFIED** | privacy.html (“Apple StoreKit”) |
| AdMob / ads | None (“Niente pubblicità”) | **VERIFIED** (absent by policy) | App Store description |
| Web technologies (product) | Marketing/legal pages only; not a web app product | **NOT APPLICABLE** as product platform | — |
| DNA / genetics features | On-device genetic import (Premium); not synced to iCloud | **VERIFIED** | privacy + support + App Store Premium list |
| Face ID | Optional | **VERIFIED** | App Store description |
| Medical device claim | Explicitly **not** a medical device | **VERIFIED** | App Store description / terms |

### Version conflict (must resolve before assertive version claims)

| Source | Version string |
|--------|----------------|
| App Store / iTunes | 1.1.0 |
| Legal support/privacy/terms | 1.4.0 |

**Status:** Conflict → do not publish a single version number until owner confirms which is current and legal pages are aligned.

---

# 4. Preventivo Rapido Evidence Matrix

## 4.1 Identity & inventory

| Item | Value | Status | Evidence |
|------|-------|--------|----------|
| Path / repository (source) | Not in workspace | **NOT FOUND** | — |
| Official store name | PreventivoRapido PRO | **VERIFIED** | iTunes `trackName` |
| Official short / brand name | PreventivoRapido / Preventivo Rapido | **VERIFIED** | Legal site brand; Phase 1 naming; App Store title |
| Portfolio slug | `preventivorapido` | **VERIFIED** | `site.ts`, `/apps/preventivorapido` |
| Planned GitHub showcase slug | `preventivo-rapido` | **VERIFIED** (plan only) | Phase 1 report |
| App Store ID | `6768065146` | **VERIFIED** | iTunes |
| Bundle identifier | `Fernando.PreventivoRapido` | **VERIFIED** | iTunes |
| Seller | Fernando Piras | **VERIFIED** | iTunes |
| Platforms | iPhone + iPad | **VERIFIED** | iTunes screenshots + devices |
| Status | Published | **VERIFIED** | Live listing |
| Version | 1.1.0 | **VERIFIED** | iTunes |
| Minimum iOS | 17.6 | **VERIFIED** | iTunes |
| Category | Finance / Productivity | **VERIFIED** | iTunes |
| Price | Free + Pro subscription | **VERIFIED** | iTunes + description |
| Rating / reviews | 0 ratings in IT lookup | **VERIFIED** | iTunes `userRatingCount` 0 |
| Localization (store) | Italian (`IT`) | **VERIFIED** | iTunes |
| Release date | 2026-05-20 | **VERIFIED** | iTunes |
| Current version date | 2026-06-23 | **VERIFIED** | iTunes |
| File size | ~14.6 MB | **VERIFIED** | iTunes |
| Age rating | 4+ | **VERIFIED** | iTunes |
| Assets (portfolio) | icon + 3 screenshots + demo mp4 | **VERIFIED** | `/workspace/public/images/apps/preventivorapido/*` |
| Assets (legal) | app-icon 1024×1024 | **VERIFIED** | legal `assets/app-icon.png` |
| App Store screenshots | 5 iPhone + 5 iPad | **VERIFIED** | iTunes |
| Privacy URL | Live | **VERIFIED** | https://fernandopiras.github.io/preventivorapido--legal/privacy.html |
| Support URL | Live | **VERIFIED** | support.html |
| Terms URL | Live | **VERIFIED** | terms.html |
| Marketing / product URL | https://www.fernandopiras.com/apps/preventivorapido | **VERIFIED** | HTTP 200 |
| iTunes sellerUrl | None | **NOT FOUND** | iTunes `sellerUrl` null |
| Documentation (source) | Not available | **NOT FOUND** | — |
| Tests | Not available | **NOT FOUND** | — |
| Auth | Email/password **or** Sign in with Apple | **VERIFIED** | privacy.html; App Store description |
| Storage | Local device primary; Keychain for sensitive credentials | **VERIFIED** | privacy.html |
| Cloud sync | Optional user-activated sync to a configured web service | **VERIFIED** (existence) / **NOT FOUND** (implementation details) | privacy 8-ter; App Store “sync cloud” |
| PDF export | Yes | **VERIFIED** | App Store + terms |
| Digital / customer signature | Yes (public link or in-person) | **VERIFIED** | App Store description |
| Invoices / proforma | Yes | **VERIFIED** | App Store + terms |
| E-invoice provider link | Beta | **VERIFIED** | App Store description (“funzione beta”); release notes |
| Local notifications | Optional | **VERIFIED** | privacy.html; terms |
| Email compose via system Mail | Yes | **VERIFIED** | privacy.html |
| Monetization | Pro subscription via Apple; 14-day trial | **VERIFIED** | App Store description |
| StoreKit | Implied via App Store subscriptions | **PARTIALLY VERIFIED** | Described as Apple-managed subscriptions; “StoreKit 2” string is portfolio-only |
| Analytics SDK | Not declared | **NOT FOUND** | — |
| Crash reporting | Not declared | **NOT FOUND** | — |
| Firebase | Not declared for this product | **NOT FOUND** | privacy does not name Firebase |
| AI | Not declared | **NOT FOUND** / **NOT APPLICABLE** for claims |
| HealthKit | — | **NOT APPLICABLE** | — |
| Widgets | — | **NOT FOUND** | — |
| Live Activities | — | **NOT FOUND** | — |
| AdMob | — | **NOT FOUND** | — |
| Web technologies | Optional configured web sync + public signature link | **PARTIALLY VERIFIED** | App Store + privacy; **not** verified as a React/Next full-stack product |
| App lock | Device authentication lock available | **VERIFIED** | privacy.html |

---

# 5. Feature Inventory

## 5.1 AndroMetrics features

| Feature | Factual description | Evidence | State | Public availability | Limits | Portfolio class |
|---------|---------------------|----------|-------|---------------------|--------|-----------------|
| Daily tracking | Log habits/parameters (sleep, stress, activity, hydration, alcohol, heat, etc.) | App Store description | Shipped | Free tier | User-entered + optional Health | **CORE** |
| Score 0–100 | Daily wellbeing/fertility-related score | App Store description; screenshots | Shipped | Free | Informational, not diagnosis | **CORE** |
| Trends / cycle overview | 72-day trend and 90-day cycle framing | App Store description | Shipped | Free | — | **CORE** |
| Charts / statistics | Graphs and trends over time | Portfolio screenshots; store Premium “grafici avanzati” | Shipped | Free basic / advanced Premium | Exact free vs Premium split from store copy | **CORE** |
| HealthKit import | Optional read of steps/sleep (and related authorized data) | Privacy; App Store | Shipped | Optional permission | Read-only | **CORE** |
| Home widget | Score glance on Home Screen | App Store description | Shipped | Free (per store) | — | **CORE** |
| Report OCR | On-device OCR from photo/PDF lab reports | Privacy; App Store | Shipped | Premium | On-device processing claimed | **CORE** |
| AI interpretation / Coach | AI insights/chat via proxy to OpenAI | Privacy; App Store Premium | Shipped | Premium; consent | Content sent to OpenAI via proxy | **CORE** |
| PDF export | Exportable PDF reports | App Store Premium | Shipped | Premium | — | **CORE** |
| Medication registry | Medication log / adherence | App Store Premium; portfolio | Shipped | Premium | — | **SUPPORTING** |
| TTC couple mode | Share summary snapshot; optional cloud sync with invite code | Privacy; App Store | Shipped | Premium for sync per store | Summary only to cloud; not full tracking | **CORE** |
| DNA import | Import raw genetic files on-device | Privacy; support; store Premium | Shipped | Premium | Never iCloud-synced | **SUPPORTING** — publish only at high level + privacy framing |
| Premium / StoreKit | Subscriptions managed by Apple | Privacy; terms; store | Shipped | Paid | — | **CORE** |
| Face ID lock | Optional Face ID | App Store description | Shipped | Optional | — | **SUPPORTING** |
| Local-first storage | Primary data on device | Privacy | Shipped | Default | — | **CORE** |
| Delete all data | In-app privacy deletion including iCloud copies when active | delete-account.html; support | Shipped | — | — | **SUPPORTING** |
| Accessibility improvements | VoiceOver improvements noted in release notes | iTunes releaseNotes | Shipped | — | Depth unknown without source | **SUPPORTING** |
| Ads | None | App Store description | N/A | — | — | **SUPPORTING** (privacy differentiator) |
| Medical diagnosis | Explicitly not provided | App Store / terms | N/A | — | Must not claim clinical diagnosis | **DO NOT PUBLISH** as capability |
| Salon/CRM booking features | Old portfolio reports only; contradict current product | Historical MD reports | Obsolete | — | — | **DO NOT PUBLISH** |

## 5.2 Preventivo Rapido features

| Feature | Factual description | Evidence | State | Public availability | Limits | Portfolio class |
|---------|---------------------|----------|-------|---------------------|--------|-----------------|
| Create professional quotes | Build quotes with company/client data, line items, VAT | App Store; screenshots | Shipped | Core product | — | **CORE** |
| PDF export/share | Generate professional PDF | App Store; terms | Shipped | Included in Pro narrative | — | **CORE** |
| Customer signature | Sign via public link or in person | App Store description | Shipped | Pro feature set | — | **CORE** |
| Client directory | Clients with VAT, email, address, history | App Store; screenshots | Shipped | — | — | **CORE** |
| Dashboard / status filters | Monitor quotes, accepted, to collect, invoiced | Screenshots; store | Shipped | — | — | **CORE** |
| Convert to invoice/proforma | Confirmed quote → invoice or proforma | App Store; terms | Shipped | — | Not automatic SDI submission | **CORE** |
| Document archive | Invoices/documents section | App Store; screenshots | Shipped | — | — | **SUPPORTING** |
| Email send | Send documents via device Mail / configured email | Privacy; store | Shipped | User action | — | **SUPPORTING** |
| Auth email/password | Account with email/password | Privacy | Shipped | — | — | **SUPPORTING** |
| Sign in with Apple | Apple ID login | App Store; privacy | Shipped | — | — | **CORE** |
| Local backup | Local backup tools | Terms; store | Shipped | — | User responsible | **SUPPORTING** |
| Optional cloud sync | Sync to configured web service | Privacy 8-ter; store | Shipped optional | User-activated | Provider/impl unknown | **CORE** (existence) / qualify implementation |
| Local notifications | Optional local notifications | Privacy; terms | Shipped | Permission | — | **SUPPORTING** |
| App lock | Lock with device auth | Privacy | Shipped | Optional | — | **SUPPORTING** |
| Pro subscription | Monthly/yearly via Apple; 14-day trial | App Store | Shipped | Paid | — | **CORE** |
| E-invoice provider integration | Connect e-invoice provider | App Store (“beta”); release notes | Beta | Beta | User must verify provider outcome; not automatic SDI | **EXPERIMENTAL** / publish only as beta |
| Onboarding / paywall | Present in release notes & screenshots | Release notes; screenshot trial CTA | Shipped | — | — | **INTERNAL** (usually skip in showcase) |
| Full-stack web CRM | Not evidenced as separate web product for this app | — | — | — | — | **DO NOT PUBLISH** |

---

# 6. Verified Tech Stack

## 6.1 AndroMetrics stack matrix

| Category | Technology | Evidence | Usage level | Publicly declare? |
|----------|------------|----------|-------------|-------------------|
| Languages | Swift | No source; native iOS app | **NOT VERIFIED** (language) | **WITH QUALIFICATION** — “Native iOS app” is safe; “Swift” only after owner confirmation |
| UI Frameworks | SwiftUI | Portfolio `site.ts` / case study only | **NOT VERIFIED** in binary/source | **WITH QUALIFICATION** |
| Architecture | Local-first; optional cloud snapshots | Privacy | **PRIMARY** (local-first) | **YES** (high-level) |
| Persistence | On-device storage; App Group claimed in portfolio | Privacy (local); App Group **portfolio-only** | Local **PRIMARY**; App Group **NOT VERIFIED** | Local **YES**; App Group **WITH QUALIFICATION** |
| Networking | AI proxy; optional Firebase | Privacy | **SECONDARY** | **YES** at high level; no endpoints |
| Backend | Firebase Anonymous Auth + Firestore (TTC only); Cloudflare proxy | Privacy | **SUPPORTING** / optional | **YES** with “optional TTC” qualification |
| Authentication | No classic user account; Firebase Anonymous for TTC | Privacy | **SUPPORTING** | **YES** |
| Analytics | — | — | **NOT FOUND** | **NO** |
| Crash Reporting | — | — | **NOT FOUND** | **NO** |
| Monetization | Apple StoreKit / App Store subscriptions | Privacy names StoreKit | **PRIMARY** | **YES** — prefer “App Store subscriptions” / “StoreKit”; “StoreKit 2” only if confirmed |
| AI | OpenAI via secure proxy | Privacy | **PRIMARY** for Premium AI features | **YES** — “OpenAI via proxy”, not vague “AI-powered” alone |
| OCR | On-device OCR; portfolio says Vision | Privacy (OCR on-device); Vision framework **portfolio-only** | OCR **PRIMARY** | OCR **YES**; “Vision” **WITH QUALIFICATION** |
| Health | Apple HealthKit read-only | Privacy | **SECONDARY** | **YES** |
| Sync | Apple iCloud KVS (`NSUbiquitousKeyValueStore`) | Privacy | **SECONDARY** | **YES** |
| Widgets | Widget / WidgetKit | Store description (widget); WidgetKit name portfolio-only | Widget **PRIMARY** feature | Widget **YES**; “WidgetKit” **WITH QUALIFICATION** |
| Testing | — | — | **NOT FOUND** | **NO** |
| CI/CD | — | — | **NOT FOUND** | **NO** |
| Distribution | App Store | iTunes | **PRIMARY** | **YES** |
| Accessibility | VoiceOver improvements | Release notes | **SUPPORTING** | **WITH QUALIFICATION** |
| Localization | Italian store listing; release notes IT/ES/DE | iTunes | IT **PRIMARY** | IT **YES**; multilingual **WITH QUALIFICATION** |
| Privacy | GDPR policy; local-first; consent gates | Legal site | **PRIMARY** | **YES** — factual privacy design, not slogan-only |
| Security | No API keys in app for OpenAI (per privacy); Face ID optional | Privacy; store | **SUPPORTING** | **WITH QUALIFICATION** — avoid “secure” absolute |
| Ads | None | Store | **NOT APPLICABLE** | May state “no ads” **YES** |
| Third-party SDKs | OpenAI, Cloudflare, Google Firebase | Privacy | As above | Name only what privacy states |

## 6.2 Preventivo Rapido stack matrix

| Category | Technology | Evidence | Usage level | Publicly declare? |
|----------|------------|----------|-------------|-------------------|
| Languages | Swift | No source | **NOT VERIFIED** | **WITH QUALIFICATION** |
| UI Frameworks | SwiftUI | Portfolio only | **NOT VERIFIED** | **WITH QUALIFICATION** |
| Architecture | Local-first ops data + optional web sync | Privacy | **PRIMARY** local | **YES** high-level |
| Persistence | Local device storage | Privacy | **PRIMARY** | **YES** |
| Security storage | Keychain for sensitive provider credentials | Privacy | **SUPPORTING** | **YES** |
| Networking | Optional sync to configured web service; email | Privacy | **SECONDARY** | **YES** without vendor guess |
| Backend | Unspecified configured web service | Privacy | **NOT VERIFIED** (vendor) | **WITH QUALIFICATION** — “optional cloud sync” |
| Authentication | Email/password; Sign in with Apple | Privacy; store | **PRIMARY** | **YES** |
| Analytics | — | — | **NOT FOUND** | **NO** |
| Crash Reporting | — | — | **NOT FOUND** | **NO** |
| Monetization | Apple subscriptions (Pro) | Store; privacy | **PRIMARY** | **YES**; “StoreKit 2” **WITH QUALIFICATION** |
| AI | — | — | **NOT FOUND** | **NO** |
| PDF | PDF generation/export | Store; terms | **PRIMARY** | **YES**; “PDFKit” name **WITH QUALIFICATION** |
| Testing | — | — | **NOT FOUND** | **NO** |
| CI/CD | — | — | **NOT FOUND** | **NO** |
| Distribution | App Store | iTunes | **PRIMARY** | **YES** |
| Accessibility | — | — | **NOT FOUND** | **NO** |
| Localization | Italian | iTunes | **PRIMARY** | **YES** |
| Privacy | Published policy; local data; Keychain | Legal | **PRIMARY** | **YES** factual |
| Notifications | Local notifications | Privacy | **SUPPORTING** | **YES** |
| E-invoicing | External provider API (user-configured), beta | Store; terms | **SUPPORTING** / beta | **WITH QUALIFICATION** |
| Firebase | — | — | **NOT FOUND** | **NO** for this product |
| Full stack web | — | — | **NOT VERIFIED** | **NO** |

---

# 7. Public Architecture Summary

## 7.1 AndroMetrics — publishable architecture

**Publishable description (high level):**

AndroMetrics is a native iOS app focused on male fertility/wellbeing tracking. Core health and tracking data are stored on the device. Optional Apple HealthKit read access can enrich inputs. Optional iCloud Key-Value sync can keep selected non-genetic preferences/data aligned across Apple devices. Premium features include on-device OCR for lab reports, PDF export, and an AI coach that sends user-provided content through an owner-operated proxy to OpenAI. An optional couple TTC mode can share summary snapshots; if cloud sync is enabled, summary snapshots use Firebase Anonymous Authentication and Firestore. Genetic imports remain on-device only. Subscriptions are handled by Apple. The app states it is informational and not a medical device.

**Suggested public flow (non-sensitive):**

`User → iOS app → On-device tracking/score → Optional HealthKit → Optional iCloud KVS → Optional report OCR → Optional AI proxy → Optional TTC summary sync → PDF export`

**Do not publish:**

- API keys, proxy URLs, Cloudflare/Firebase project IDs  
- Firestore collection schemas or security rule details  
- Prompt templates / model parameters  
- Exact scoring algorithm / proprietary medical logic  
- Internal module names from source (unavailable anyway)  
- Any real user health data  

**Uncertainties:**

- Whether UI is SwiftUI vs UIKit (or mixed)  
- Whether OCR uses Apple Vision specifically  
- Whether subscriptions use StoreKit 1 or 2 APIs  
- Why legal docs say v1.4.0 while App Store shows 1.1.0  
- Depth of ES/DE localization vs store language list  

## 7.2 Preventivo Rapido — publishable architecture

**Publishable description (high level):**

PreventivoRapido PRO is a native iOS app for tradespeople and freelancers to create professional quotes, export PDFs, collect customer signatures, manage clients, and convert accepted quotes into invoices/proforma documents. Operational data is stored primarily on the device. Users authenticate with email/password or Sign in with Apple. Sensitive third-party credentials can be stored in Keychain. Optional cloud synchronization can send quotes to a user-configured web service. Local notifications and system Mail composition are supported. Pro access is sold as an Apple-managed subscription. E-invoice provider connection exists in beta and does not automatically equal official SDI submission.

**Suggested public flow:**

`Client request → iOS app → Quote → PDF → Signature → Optional cloud sync / email → Archive (invoice/proforma)`

**Do not publish:**

- Web sync endpoint URLs or credentials  
- Provider API keys / e-invoice secrets  
- Customer PII from real projects  
- Internal billing business rules beyond public terms  

**Uncertainties:**

- SwiftUI vs UIKit  
- Exact cloud sync vendor/stack  
- PDF engine (PDFKit vs other)  
- Whether “StoreKit 2” is accurate  

---

# 8. Public Links Verification

## 8.1 AndroMetrics

| Link type | URL | HTTP | Status |
|-----------|-----|------|--------|
| App Store (canonical after redirect) | https://apps.apple.com/it/app/andrometrics/id6758244167 | 200 | **VERIFIED** |
| App Store (portfolio slug form) | https://apps.apple.com/it/app/andrometrics-fertility/id6758244167 | 200 → same app | **VERIFIED** (alias) |
| Developer page | https://apps.apple.com/it/developer/fernando-piras/id1865514513 | 200 | **VERIFIED** |
| Product page | https://www.fernandopiras.com/apps/andrometrics | 200 | **VERIFIED** |
| Legal hub | https://fernandopiras.github.io/andrometrics-legal/ | 200 | **VERIFIED** |
| Privacy | https://fernandopiras.github.io/andrometrics-legal/privacy.html | 200 | **VERIFIED** |
| Support | https://fernandopiras.github.io/andrometrics-legal/support.html | 200 | **VERIFIED** |
| Terms | https://fernandopiras.github.io/andrometrics-legal/terms.html | 200 | **VERIFIED** |
| Delete account guide | https://fernandopiras.github.io/andrometrics-legal/delete-account.html | (in repo; same site) | **VERIFIED** in repo |
| Public seller URL in App Store | https://www.fernandopiras.com/apps/andrometrics | Present in iTunes | **VERIFIED** |

## 8.2 Preventivo Rapido

| Link type | URL | HTTP | Status |
|-----------|-----|------|--------|
| App Store | https://apps.apple.com/it/app/preventivorapido-pro/id6768065146 | 200 | **VERIFIED** |
| Product page | https://www.fernandopiras.com/apps/preventivorapido | 200 | **VERIFIED** |
| Legal hub | https://fernandopiras.github.io/preventivorapido--legal/ | 200 | **VERIFIED** |
| Privacy | https://fernandopiras.github.io/preventivorapido--legal/privacy.html | 200 | **VERIFIED** |
| Support | https://fernandopiras.github.io/preventivorapido--legal/support.html | 200 | **VERIFIED** |
| Terms | https://fernandopiras.github.io/preventivorapido--legal/terms.html | 200 | **VERIFIED** |
| iTunes sellerUrl | — | — | **NOT FOUND** |
| Dedicated non-empty support repo | `preventivorapido-support` | empty | **NOT FOUND** (content) |

## 8.3 Profile / contact links

| Link | Status |
|------|--------|
| https://www.fernandopiras.com | **VERIFIED** 200 |
| https://fernandopiras.com | **VERIFIED** 200 |
| mailto:fernando@fernandopiras.com | **VERIFIED** as published contact on legal + site config |
| Instagram https://www.instagram.com/swiftwithfer | Present in site config (**PARTIALLY VERIFIED** — not revalidated beyond config in this pass) |

---

# 9. Claim Safety Matrix

| Claim | Verdict | Motivation |
|-------|---------|------------|
| “iOS app” | **SAFE TO CLAIM** | Live App Store iOS apps for both products |
| “Published on the App Store” | **SAFE TO CLAIM** | Live listings; seller Fernando Piras |
| “Swift” | **CLAIM WITH QUALIFICATION** | Native iOS strongly implied; language not proven without source/owner confirmation |
| “SwiftUI” | **CLAIM WITH QUALIFICATION** | Stated in portfolio config only; not in App Store/privacy text; no source |
| “Firebase” | **CLAIM WITH QUALIFICATION** | **SAFE for AndroMetrics** as optional TTC sync (privacy). **DO NOT CLAIM** for Preventivo Rapido |
| “AI-powered” | **CLAIM WITH QUALIFICATION** | AndroMetrics only; prefer “AI coach / report interpretation via OpenAI proxy”. Not for Preventivo |
| “privacy-focused” / local-first | **CLAIM WITH QUALIFICATION** | Supported by AndroMetrics privacy design; keep factual (“on-device storage”, “consent gates”), avoid absolute marketing |
| “production-ready” | **DO NOT CLAIM** | Subjective; replace with “published on the App Store” |
| “multilingual” | **CLAIM WITH QUALIFICATION** | Store lists IT; AndroMetrics release notes mention ES/DE — confirm before claiming |
| “secure” | **DO NOT CLAIM** as absolute | Prefer concrete controls (Keychain, on-device data, Sign in with Apple, no ads) |
| “scalable” | **DO NOT CLAIM** | No evidence |
| “full stack” | **DO NOT CLAIM** | Not verified for either product as a full-stack system |
| “commercial product” | **SAFE TO CLAIM** | Paid subscriptions / commercial App Store products by individual seller |
| “used by real users” | **CLAIM WITH QUALIFICATION** | AndroMetrics has 4 ratings (evidence of some users). Preventivo has 0 ratings — do not generalize |
| “enterprise” | **DO NOT CLAIM** | Forbidden by Phase 1; no enterprise customer evidence |
| “advanced architecture” | **DO NOT CLAIM** | Subjective; describe architecture factually instead |
| “high performance” | **DO NOT CLAIM** | No measurements |
| “HealthKit” | **SAFE TO CLAIM** (AndroMetrics) | Privacy + store |
| “StoreKit” / App Store subscriptions | **SAFE TO CLAIM** | Privacy (AndroMetrics) + Apple billing (both) |
| “Widget support” | **SAFE TO CLAIM** (AndroMetrics) | App Store description |
| “PDF quotes / invoices” | **SAFE TO CLAIM** (Preventivo) | App Store + terms |
| “Sign in with Apple” | **SAFE TO CLAIM** (Preventivo) | App Store + privacy |
| “OpenAI” | **SAFE TO CLAIM** (AndroMetrics AI features) | Named in privacy |
| Site skills React/TypeScript/Vercel as product-backed | **DO NOT CLAIM** from these two apps | Not evidenced in product legal/store materials |

---

# 10. Screenshot & Asset Inventory

## 10.1 AndroMetrics (workspace portfolio assets)

| Path | Type | Size / dims | Orientation | Quality | Personal data | Portfolio fit | Class |
|------|------|-------------|-------------|---------|---------------|---------------|-------|
| `public/images/apps/andrometrics/icon.png` | App icon | 512×512 PNG | Square | High | None | Official-style icon | **READY** |
| `public/images/apps/andrometrics/wordmark.png` | Wordmark | 1208×230 PNG | Landscape | High | None | Good for headers | **READY** |
| `public/images/apps/andrometrics/screenshot-1.png` | UI screenshot + EN promo chrome | 554×1200 | Portrait | High | Demo name “Marco” (likely fictional) | Usable; confirm no real user data | **READY** / confirm |
| `public/images/apps/andrometrics/screenshot-2.png` | UI screenshot | 554×1200 | Portrait | High | None obvious | Shows PDF/logging UI | **READY** |
| `public/images/apps/andrometrics/screenshot-3.png` | UI screenshot | 554×1200 | Portrait | High | None obvious | Shows AI coach UI | **READY** |
| `public/videos/andrometrics-demo.mp4` | Demo video | ~9.3 MB MP4 | — | High | Must review frames before publish | Strong proof | **NEEDS EDITING** review pass |
| Legal `assets/app-icon.png` | Icon | 120×120 | Square | OK for web | None | Prefer 512/1024 masters | **READY** for web; **NEEDS** larger for GitHub if used |
| App Store CDN screenshots (8+8) | Store shots | Remote | Portrait | Apple-hosted | Unknown until downloaded | Excellent authenticity | **READY** after download/review |
| Banners for GitHub | — | — | — | — | — | Not created (Phase 2 rule) | **MISSING** |

## 10.2 Preventivo Rapido (workspace portfolio assets)

| Path | Type | Size / dims | Orientation | Quality | Personal data | Portfolio fit | Class |
|------|------|-------------|-------------|---------|---------------|---------------|-------|
| `public/images/apps/preventivorapido/icon.png` | App icon | 512×512 | Square | High | None | Good | **READY** |
| `public/images/apps/preventivorapido/screenshot-1.png` | Dashboard UI | 554×1200 | Portrait | High | Shows “Ciao, Fernando Piras” | Developer name visible | **NEEDS EDITING** (genericize or approve personal branding) |
| `public/images/apps/preventivorapido/screenshot-2.png` | New quote UI | 554×1200 | Portrait | High | Shows `fernandopiras@icloud.com` | Personal email visible | **NEEDS EDITING** / **DO NOT USE** until scrubbed or approved |
| `public/images/apps/preventivorapido/screenshot-3.png` | Documents UI | 554×1200 | Portrait | High | Low risk | Usable | **READY** |
| `public/videos/preventivorapido-demo.mp4` | Demo video | ~2.0 MB | — | High | May contain personal fields | Review required | **NEEDS EDITING** review |
| Legal `assets/app-icon.png` | Icon | 1024×1024 | Square | Excellent | None | Best icon master found | **READY** |
| Wordmark | — | — | — | — | — | — | **MISSING** |
| GitHub banners | — | — | — | — | — | — | **MISSING** |

**No assets were modified in this phase.**

---

# 11. Profile Evidence

Based **only** on the two real products (plus verified public identity links).

## 11.1 Primary verifiable competencies

- Shipping native iOS apps to the App Store  
- End-to-end product ownership (design → release → maintenance signals via version updates)  
- Health/wellbeing product domain experience (AndroMetrics)  
- Business/productivity document workflows (PreventivoRapido PRO)  
- Privacy-aware product design (published policies; local-first patterns)  
- In-app purchases / App Store subscriptions  
- Integration with Apple platforms: HealthKit, Sign in with Apple, StoreKit/App Store billing, widgets (AndroMetrics)  
- PDF document generation/export (Preventivo; AndroMetrics reports)  
- Optional cloud sync patterns with explicit user control  
- AI feature integration with third-party model provider via proxy (AndroMetrics / OpenAI)

## 11.2 Secondary competencies (declare carefully)

- Firebase (Anonymous Auth + Firestore) — AndroMetrics optional feature only  
- On-device OCR pipelines — AndroMetrics  
- Accessibility iteration (VoiceOver notes) — AndroMetrics release notes  
- iPad support — both apps have iPad screenshots / universal capability  

## 11.3 Do not cite (from these products alone)

- React / TypeScript / Vercel as core specializations  
- “Full stack engineer” as primary identity  
- Firestore/Cloud Functions as broad expertise beyond AndroMetrics optional sync  
- FOTIQ, Slotiva, SwiftToKotlin, TurboRun (out of Phase 1 active set; TurboRun privacy repo exists but is excluded here)  
- Enterprise / senior / agency positioning  
- Unverified performance or user-scale metrics  

## 11.4 Published products for profile

1. AndroMetrics — App Store  
2. PreventivoRapido PRO — App Store  

## 11.5 Credible specialization direction (evidence-aligned)

- Product-focused software developer  
- iOS apps  
- Swift / SwiftUI **only with qualification or owner confirmation**  
- Privacy, UX clarity, release quality  
- Practical integrations (HealthKit, StoreKit, Sign in with Apple, PDF, optional cloud, AI proxy)

## 11.6 Verifiable CTAs

- https://www.fernandopiras.com  
- https://www.fernandopiras.com/apps/andrometrics  
- https://www.fernandopiras.com/apps/preventivorapido  
- App Store developer page  
- Email: fernando@fernandopiras.com  

## 11.7 Contacts available

| Contact | Status |
|---------|--------|
| fernando@fernandopiras.com | **VERIFIED** published |
| App Store developer ID 1865514513 | **VERIFIED** |
| Instagram @swiftwithfer | In site config |
| Phone | **NOT FOUND** |

---

# 12. Missing Evidence

| Gap | Impact | Needed from |
|-----|--------|-------------|
| Application source access | Blocks definitive Swift/SwiftUI/PDFKit/WidgetKit/StoreKit 2 claims | Owner |
| AndroMetrics version mismatch (1.1.0 vs 1.4.0) | Blocks version statements; trust risk | Owner + legal site update |
| Multilingual confirmation (ES/DE) | Blocks “multilingual” claim | Owner / App Store localization settings |
| Preventivo cloud sync stack identity | Blocks naming Firebase/iCloud/custom backend | Owner |
| Preventivo PDF engine confirmation | Blocks “PDFKit” claim | Owner |
| Scrubbed Preventivo screenshots | Blocks clean showcase assets | Owner or Phase 6 editing |
| Demo video privacy review | Blocks embedding videos | Owner review |
| App Store rating refresh process | Portfolio config may drift | Owner process |
| Crash/analytics tooling | Unknown | Owner (optional) |
| Test/CI practices | Unknown | Owner (optional; usually omit publicly) |

---

# 13. Questions Requiring Owner Input

1. Confirm UI framework for each app: SwiftUI, UIKit, or mixed?  
2. Confirm language: Swift only? Any Kotlin/JS in apps?  
3. AndroMetrics: which version is current — App Store **1.1.0** or legal docs **1.4.0**?  
4. AndroMetrics: are ES/DE fully shipped, or only partial strings?  
5. Confirm StoreKit 1 vs StoreKit 2 for both apps.  
6. Confirm OCR uses Apple Vision.  
7. Confirm WidgetKit API usage (vs generic widget wording).  
8. Preventivo: what powers “sync cloud” (iCloud / Firebase / custom Vapor / other)?  
9. Preventivo: is PDFKit used?  
10. May GitHub showcases display your real name/email in screenshots, or must we scrub?  
11. Preferred public product naming: “Preventivo Rapido” vs “PreventivoRapido PRO”?  
12. Preferred canonical App Store URL for AndroMetrics (short `andrometrics` vs `andrometrics-fertility`)?  
13. Any features that must never be mentioned publicly for competitive/privacy reasons?  
14. Should OpenAI be named publicly on GitHub, or only “AI coach via third-party provider”?  

---

# 14. Phase 3 Readiness

| Criterion | Status |
|-----------|--------|
| Phase 1 architecture approved/merged | **Yes** |
| Active products identified | **Yes** (2) |
| Public proof links verified | **Yes** |
| Feature lists grounded in public evidence | **Yes** (with classes) |
| Unsafe claims isolated | **Yes** |
| Source-level stack fully verified | **No** |
| Asset set fully showcase-clean | **Partial** (Preventivo PII in shots) |
| Owner questionnaire answered | **No** |

**Phase 3 (Profile README) can proceed only if copy stays inside SAFE TO CLAIM and explicitly qualified statements, or after owner answers for desired qualifications.**

**Phase 3 must not invent stack. Recommended profile stance until answers arrive:**

- “I design and ship iOS apps on the App Store.”  
- Name the two products with links.  
- Mention concrete Apple capabilities that are verified (HealthKit, widgets, Sign in with Apple, App Store subscriptions, PDF workflows, privacy policies).  
- Avoid SwiftUI/Firebase/OpenAI wording until decisions on public naming are confirmed (OpenAI/Firebase are legally documented for AndroMetrics and *may* be claimed with product-specific qualification).  

---

# 15. Final Recommendation

1. **Treat App Store + legal pages as primary truth; portfolio config as secondary.**  
2. **Do not claim SwiftUI/PDFKit/WidgetKit/StoreKit 2 as fact until confirmed.**  
3. **Do claim:** published iOS apps, product purpose, verified integrations named in privacy/store, commercial App Store distribution.  
4. **Scrub or approve Preventivo screenshots** before showcase publication.  
5. **Align AndroMetrics version numbers** across legal site and App Store messaging.  
6. **AndroMetrics README readiness:** Conditionally ready (strong evidence).  
7. **Preventivo Rapido README readiness:** Conditionally ready (strong product proof; weaker ratings; screenshot privacy edits needed).  
8. **Profile README readiness:** Conditionally ready without unverified claims if limited to SAFE TO CLAIM set.  
9. **Do not start Phase 3 implementation until this evidence file is accepted.**  
10. Exclude future concepts (FOTIQ, Slotiva, SwiftToKotlin) entirely.

---

# Quality Gate

## Checks performed

- Phase 1 constraints respected  
- No source invention  
- iTunes metadata pulled for both apps + developer  
- Legal/support repos inspected  
- Live URLs checked  
- Workspace assets inventoried  
- Claim safety applied  
- Sensitive details excluded (no secrets/endpoints/keys)  
- Future projects excluded  
- No README/showcase/banner creation  

## Scores

| Dimension | Score | Notes |
|-----------|------:|-------|
| Accuracy | 99 | Conflicts explicitly flagged; no fabricated stack |
| Evidence Coverage | 97 | High public coverage; source gap remains unavoidable here |
| Safety | 99 | No secrets; medical/PII risks called out |
| Completeness | 98 | All required sections; owner questions listed |
| Portfolio Readiness | 97 | Conditional readiness; screenshot scrub + confirmations pending |
| Maintainability | 99 | Clear VERIFIED / PARTIAL / NOT FOUND taxonomy |

### Overall: **98.2 / 100**

Evidence Coverage and Portfolio Readiness cannot reach 100 without source access and asset cleanup — further invention was refused. Score meets gate via honest gap handling rather than fake certainty.

---

## Stop

**Phase 2 evidence document complete.**  
**Phase 3 not started.**  
No public READMEs, repositories, banners, or generated images were created.

### Direct answers

| Question | Answer |
|----------|--------|
| What was verified? | App Store listings, identities, versions, ratings, categories, legal/support URLs, site product pages, feature claims supported by store/privacy/screenshots, monetization, key Apple/third-party services declared in privacy |
| What is missing? | Source code, definitive UI framework confirmation, version alignment, scrubbed Preventivo assets, some stack name confirmations |
| What must you provide? | Answers to §13; optionally source access or written stack confirmation; preferred public naming; screenshot usage approval |
| AndroMetrics ready for README? | **Conditionally yes** |
| Preventivo Rapido ready for README? | **Conditionally yes** (after screenshot decision) |
| Profile README possible without unverified claims? | **Yes**, if limited to SAFE TO CLAIM (+ carefully qualified product-specific facts) |
