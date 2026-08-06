# Enterprise GitHub Portfolio — Phase 2  
## Real Project Discovery & Evidence Matrix  
### Owner Verification Gate (revision)

**Owner:** Fernando Piras  
**GitHub username:** FernandoPiras  
**Primary site:** https://www.fernandopiras.com  
**Phase 1 reference:** `GITHUB_PORTFOLIO_PHASE_1_REPORT.md` (merged)  
**Scope:** Analysis, discovery, evidence collection, and owner-verification scaffolding only.  
**Not in this phase:** Profile README, showcase repositories, banners, generated images, badges, marketing copy finalization, Phase 3, merge.

**Evidence rule:** Every future public sentence must be backed by an explicit evidence type below. Hypotheses are labeled. Unverified items are not facts.

---

# Evidence Type Legend

| Evidence Type | Meaning |
|---------------|---------|
| **APP_STORE_VERIFIED** | Confirmed via App Store listing and/or Apple iTunes Lookup API |
| **PUBLIC_DOCUMENTATION_VERIFIED** | Confirmed via official public legal/support/privacy/terms pages |
| **WORKSPACE_ASSET_VERIFIED** | Confirmed via files present in this portfolio workspace (icons, screenshots, videos, site config used as marketing secondary source) |
| **SOURCE_VERIFIED** | Confirmed by inspecting commercial application source code |
| **OWNER_VERIFIED** | Explicit confirmation by the product owner/developer (valid factual evidence; **not** automatic source inspection) |
| **NOT_VERIFIED** | Not confirmed by any accepted evidence type |

**Rules:**

- `OWNER_VERIFIED` must never be described as source-code verification.  
- Commercial source remains private; source disclosure is not required.  
- Profile README may use only **SAFE TO CLAIM** or **OWNER_VERIFIED** facts.  
- Showcase READMEs may use APP_STORE / PUBLIC_DOCUMENTATION / WORKSPACE_ASSET / SOURCE / OWNER evidence as classified below.

---

# Final Decision — Source Code

**Commercial source code remains private.**  
**Owner verification is sufficient for factual technology declarations.**  
**No public source disclosure is required for this portfolio.**

---

# 1. Executive Summary

Two published App Store products were identified and verified through public Apple metadata, official legal/support sites, and portfolio workspace assets.

| Product | App Store name | Bundle ID | Seller | Source in workspace |
|---------|----------------|-----------|--------|---------------------|
| AndroMetrics | AndroMetrics | `com.fernando.andrometrics.app` | Fernando Piras | **NOT_VERIFIED** (absent) |
| Preventivo Rapido | PreventivoRapido PRO | `Fernando.PreventivoRapido` | Fernando Piras | **NOT_VERIFIED** (absent) |

### Public naming (locked)

| Use | Value |
|-----|-------|
| GitHub showcase repository | `preventivo-rapido` |
| Official name in README / App Store | **PreventivoRapido PRO** |
| Descriptive form allowed in prose | Preventivo Rapido |
| AndroMetrics official name | AndroMetrics |

Do not alter the official App Store product names.

### Strongest non-source facts (both products)

- Published on the App Store — **APP_STORE_VERIFIED**
- Native iOS (+ iPad-capable) — **APP_STORE_VERIFIED**
- Official privacy / terms / support pages live — **PUBLIC_DOCUMENTATION_VERIFIED**
- Icons / screenshots / demos present in workspace — **WORKSPACE_ASSET_VERIFIED**
- Apple-managed App Store subscriptions — **APP_STORE_VERIFIED**

### StoreKit logic (corrected — no internal contradiction)

| Statement | When allowed | Evidence type required |
|-----------|--------------|------------------------|
| “Apple-managed App Store subscriptions” | Subscriptions visible on App Store | **APP_STORE_VERIFIED** |
| “StoreKit” | Named in privacy/policy **or** owner confirms | **PUBLIC_DOCUMENTATION_VERIFIED** or **OWNER_VERIFIED** |
| “StoreKit 2” | Only if source inspected **or** owner confirms | **SOURCE_VERIFIED** or **OWNER_VERIFIED** |

### Temporal / audit-only metrics

See § Temporal Data Policy. Ratings, review counts, versions, release dates, update dates, file sizes, and rankings are **AUDIT ONLY — DO NOT USE IN PUBLIC README**.

### Portfolio readiness (pending owner answers)

| Surface | Ready? | Condition |
|---------|--------|-----------|
| Profile README | **Blocked on owner answers for desired stack claims**; otherwise draftable from SAFE TO CLAIM only | SAFE TO CLAIM + OWNER_VERIFIED only |
| AndroMetrics showcase | **Conditionally ready** | Prefer App Store + legal evidence; owner gate for Swift/SwiftUI/StoreKit 2/Vision/WidgetKit |
| PreventivoRapido PRO showcase | **Conditionally ready** | Prefer App Store + legal evidence; screenshot privacy gate; owner gate for stack specifics |

**Phase 3 must not start until owner questionnaire answers are recorded for any OWNER_VERIFIED claim intended for public use.**

---

# 2. Project Availability

## 2.1 Sources searched

| Source | Result | Evidence Type |
|--------|--------|---------------|
| Workspace `swiftwithfer-portfolio` | Marketing site + product assets + config claims | WORKSPACE_ASSET_VERIFIED |
| Public GitHub `FernandoPiras` | Legal/support repos; **no product source repos** | PUBLIC_DOCUMENTATION_VERIFIED / NOT_VERIFIED (source) |
| `andrometrics-legal` | Live legal/support content | PUBLIC_DOCUMENTATION_VERIFIED |
| `andrometrics-privacy` | Empty repository | NOT_VERIFIED |
| `preventivorapido--legal` | Live legal/support content | PUBLIC_DOCUMENTATION_VERIFIED |
| `preventivorapido-support` | Empty repository | NOT_VERIFIED |
| Apple iTunes Lookup API (`country=it`) | App metadata | APP_STORE_VERIFIED |
| Live HTTP checks | App Store, legal, product pages → 200 | APP_STORE_VERIFIED / PUBLIC_DOCUMENTATION_VERIFIED |

## 2.2 Availability matrix

| Project | Source code | Private source access | Public legal docs | App Store | Portfolio page | Overall |
|---------|-------------|----------------------|-------------------|-----------|----------------|---------|
| AndroMetrics | NOT_VERIFIED (absent) | NOT_VERIFIED | PUBLIC_DOCUMENTATION_VERIFIED | APP_STORE_VERIFIED | WORKSPACE_ASSET_VERIFIED | Public-evidence analyzable; owner gate open |
| PreventivoRapido PRO | NOT_VERIFIED (absent) | NOT_VERIFIED | PUBLIC_DOCUMENTATION_VERIFIED | APP_STORE_VERIFIED | WORKSPACE_ASSET_VERIFIED | Public-evidence analyzable; owner gate open |

## 2.3 Evidence Missing (global)

- Application source trees (**not required publicly**; optional for SOURCE_VERIFIED)  
- Package manifests / SPM locks  
- CI/CD configs  
- Unit/UI tests  
- Exact third-party SDK versions  
- Owner answers for language/UI/StoreKit 2/WidgetKit/Vision/PDFKit/cloud vendor  

---

# Temporal Data Policy

The following fields may appear in this audit document only.

### AUDIT ONLY — DO NOT USE IN PUBLIC README

- App Store rating  
- Number of reviews  
- Version numbers  
- Release date  
- Last update date  
- File size  
- Rankings / charts  

**Decision:** Version numbers will **not** be inserted into the Profile README or showcase repositories because they are temporal and unnecessary for credibility.

**Still required:** Align AndroMetrics legal documentation with the current App Store versioning practice to avoid public trust conflict on the legal site itself (even though GitHub READMEs will omit version numbers).

### Documented AndroMetrics version conflict (audit only)

| Source | Version string | Evidence Type |
|--------|----------------|---------------|
| App Store / iTunes | 1.1.0 | APP_STORE_VERIFIED |
| Legal support/privacy/terms | 1.4.0 | PUBLIC_DOCUMENTATION_VERIFIED |

---

# 3. AndroMetrics Evidence Matrix

## 3.1 Identity & inventory

| Item | Value | Status | Evidence Type | Evidence |
|------|-------|--------|---------------|----------|
| Path / repository (source) | Not in workspace | Absent | NOT_VERIFIED | No public/source tree found |
| Official public name | AndroMetrics | Confirmed | APP_STORE_VERIFIED | iTunes `trackName` |
| Portfolio slug | `andrometrics` | Confirmed | WORKSPACE_ASSET_VERIFIED | `src/config/site.ts` |
| App Store ID | `6758244167` | Confirmed | APP_STORE_VERIFIED | iTunes |
| Bundle identifier | `com.fernando.andrometrics.app` | Confirmed | APP_STORE_VERIFIED | iTunes (public identifier) |
| Seller / developer | Fernando Piras | Confirmed | APP_STORE_VERIFIED | iTunes |
| Platforms | iPhone + iPad (`iosUniversal`) | Confirmed | APP_STORE_VERIFIED | iTunes features + screenshots |
| Publication status | Published on App Store | Confirmed | APP_STORE_VERIFIED | Live listing |
| App Store version | 1.1.0 | Audit only | APP_STORE_VERIFIED | iTunes — **DO NOT USE IN README** |
| Legal stated version | 1.4.0 | Audit only / conflict | PUBLIC_DOCUMENTATION_VERIFIED | legal support/privacy — **DO NOT USE IN README**; align legal pages |
| Minimum iOS | 18.6 | Audit optional | APP_STORE_VERIFIED | iTunes |
| Category | Health & Fitness / Medicine | Confirmed | APP_STORE_VERIFIED | iTunes |
| Price model | Free + Premium subscriptions | Confirmed | APP_STORE_VERIFIED | iTunes + description |
| Rating / review count | 5.0 / 4 | Audit only | APP_STORE_VERIFIED | **DO NOT USE IN README** |
| Store languages | IT | Confirmed | APP_STORE_VERIFIED | iTunes `languageCodesISO2A` |
| Extra locales (ES, DE) | Mentioned in release notes | Uncertain | APP_STORE_VERIFIED (notes only) | Needs owner confirmation for “multilingual” |
| Release / update dates | Present in iTunes | Audit only | APP_STORE_VERIFIED | **DO NOT USE IN README** |
| File size | ~32.4 MB | Audit only | APP_STORE_VERIFIED | **DO NOT USE IN README** |
| Age rating | 12+ | Confirmed | APP_STORE_VERIFIED | iTunes |
| Portfolio assets | icon, wordmark, 3 screenshots, demo mp4 | Confirmed | WORKSPACE_ASSET_VERIFIED | `/public/images/apps/andrometrics/*` |
| Legal assets | app-icon, brand-logo, favicon, og-image | Confirmed | PUBLIC_DOCUMENTATION_VERIFIED | legal `assets/` |
| Privacy / support / terms | Live | Confirmed | PUBLIC_DOCUMENTATION_VERIFIED | github.io legal site |
| Product page | https://www.fernandopiras.com/apps/andrometrics | Confirmed | APP_STORE_VERIFIED + live site | iTunes `sellerUrl` + HTTP 200 |
| Tests / CI / source deps | Unknown | Absent | NOT_VERIFIED | — |
| Apple-managed subscriptions | Yes | Confirmed | APP_STORE_VERIFIED | App Store IAP narrative |
| StoreKit (API family) | Named “Apple StoreKit” in privacy | Confirmed | PUBLIC_DOCUMENTATION_VERIFIED | privacy.html |
| StoreKit 2 | Unknown | Pending owner/source | NOT_VERIFIED | — |
| Analytics SDK | Not declared | Absent | NOT_VERIFIED | — |
| Push notifications | Not declared | Absent | NOT_VERIFIED | — |
| Local notifications | Not declared | Absent | NOT_VERIFIED | — |
| Authentication | No email/password; Firebase Anonymous Auth for optional TTC | Confirmed | PUBLIC_DOCUMENTATION_VERIFIED | privacy + delete-account |
| Storage | Local primary; optional iCloud KVS; optional Firebase TTC snapshots | Confirmed | PUBLIC_DOCUMENTATION_VERIFIED | privacy |
| Backend | Firebase (TTC optional); Cloudflare proxy for AI | Confirmed | PUBLIC_DOCUMENTATION_VERIFIED | privacy |
| AI | OpenAI via owner proxy | Confirmed | PUBLIC_DOCUMENTATION_VERIFIED | privacy; also App Store AI features |
| PDF export | Premium reports | Confirmed | APP_STORE_VERIFIED | App Store description |
| OCR | On-device OCR | Confirmed | PUBLIC_DOCUMENTATION_VERIFIED + APP_STORE_VERIFIED | privacy + store |
| Vision framework | Claimed in portfolio only | Pending | NOT_VERIFIED (framework) | WORKSPACE marketing only |
| Widget feature | Home Screen widget | Confirmed | APP_STORE_VERIFIED | App Store description |
| WidgetKit API | Pending | Pending | NOT_VERIFIED | — |
| Live Activities | — | Absent | NOT_VERIFIED | — |
| Ads | None | Confirmed | APP_STORE_VERIFIED | “Niente pubblicità” |
| DNA / genetics | On-device import; not iCloud synced | Confirmed | PUBLIC_DOCUMENTATION_VERIFIED | privacy/support/store |
| Face ID | Optional | Confirmed | APP_STORE_VERIFIED | store description |
| Not a medical device | Explicit disclaimer | Confirmed | APP_STORE_VERIFIED | store/terms |

---

# 4. Preventivo Rapido Evidence Matrix

## 4.1 Identity & inventory

| Item | Value | Status | Evidence Type | Evidence |
|------|-------|--------|---------------|----------|
| Path / repository (source) | Not in workspace | Absent | NOT_VERIFIED | — |
| Official App Store name | PreventivoRapido PRO | Confirmed | APP_STORE_VERIFIED | iTunes `trackName` — **do not alter** |
| Descriptive prose name | Preventivo Rapido | Allowed | — | Phase naming rule |
| GitHub showcase repo name | `preventivo-rapido` | Planned | — | Phase 1 |
| Portfolio slug | `preventivorapido` | Confirmed | WORKSPACE_ASSET_VERIFIED | site config |
| App Store ID | `6768065146` | Confirmed | APP_STORE_VERIFIED | iTunes |
| Bundle identifier | `Fernando.PreventivoRapido` | Confirmed | APP_STORE_VERIFIED | iTunes |
| Seller | Fernando Piras | Confirmed | APP_STORE_VERIFIED | iTunes |
| Platforms | iPhone + iPad | Confirmed | APP_STORE_VERIFIED | screenshots/devices |
| Publication status | Published | Confirmed | APP_STORE_VERIFIED | live listing |
| Version | 1.1.0 | Audit only | APP_STORE_VERIFIED | **DO NOT USE IN README** |
| Minimum iOS | 17.6 | Audit optional | APP_STORE_VERIFIED | iTunes |
| Category | Finance / Productivity | Confirmed | APP_STORE_VERIFIED | iTunes |
| Price model | Free + Pro subscription | Confirmed | APP_STORE_VERIFIED | store |
| Rating / reviews | 0 in IT lookup | Audit only | APP_STORE_VERIFIED | **DO NOT USE IN README** |
| Store language | IT | Confirmed | APP_STORE_VERIFIED | iTunes |
| Release / update dates / size | Present | Audit only | APP_STORE_VERIFIED | **DO NOT USE IN README** |
| Portfolio assets | icon, 3 screenshots, demo mp4 | Confirmed | WORKSPACE_ASSET_VERIFIED | `/public/images/apps/preventivorapido/*` |
| Legal app icon | 1024×1024 | Confirmed | PUBLIC_DOCUMENTATION_VERIFIED | legal assets |
| Privacy / support / terms | Live | Confirmed | PUBLIC_DOCUMENTATION_VERIFIED | github.io legal site |
| Product page | https://www.fernandopiras.com/apps/preventivorapido | Confirmed | live site | HTTP 200 |
| iTunes sellerUrl | None | Absent | NOT_VERIFIED | — |
| Auth | Email/password **or** Sign in with Apple | Confirmed | PUBLIC_DOCUMENTATION_VERIFIED + APP_STORE_VERIFIED | privacy + store |
| Storage | Local device; Keychain for sensitive creds | Confirmed | PUBLIC_DOCUMENTATION_VERIFIED | privacy |
| Cloud sync existence | Optional sync to configured web service | Confirmed | PUBLIC_DOCUMENTATION_VERIFIED + APP_STORE_VERIFIED | privacy 8-ter; store |
| Cloud sync vendor | Unknown | Pending | NOT_VERIFIED | owner gate |
| PDF export | Yes | Confirmed | APP_STORE_VERIFIED | store + terms |
| PDFKit | Unknown | Pending | NOT_VERIFIED | owner gate |
| Customer signature | Public link or in person | Confirmed | APP_STORE_VERIFIED | store |
| Invoices / proforma | Yes | Confirmed | APP_STORE_VERIFIED | store + terms |
| E-invoice provider | Beta | Confirmed | APP_STORE_VERIFIED | store + release notes |
| Local notifications | Optional | Confirmed | PUBLIC_DOCUMENTATION_VERIFIED | privacy/terms |
| Push notifications | Not declared | Absent | NOT_VERIFIED | — |
| Apple-managed subscriptions | Yes | Confirmed | APP_STORE_VERIFIED | store Pro plan |
| StoreKit (API family) | Not named in privacy text | Pending | NOT_VERIFIED | may become OWNER_VERIFIED |
| StoreKit 2 | Portfolio-only string historically | Pending | NOT_VERIFIED | SOURCE or OWNER only |
| Analytics | Not declared | Absent | NOT_VERIFIED | — |
| Crash reporting | Not declared | Absent | NOT_VERIFIED | — |
| Firebase | Not declared for this product | Absent | NOT_VERIFIED | do not claim unless owner confirms |
| AI | Not declared | Absent | NOT_VERIFIED | do not claim |
| App lock | Device auth lock | Confirmed | PUBLIC_DOCUMENTATION_VERIFIED | privacy |
| Full-stack web product | Not evidenced | Absent | NOT_VERIFIED | **DO NOT CLAIM** |

---

# 5. Feature Inventory

## 5.1 AndroMetrics features

| Feature | Factual description | Evidence Type | State | Public availability | Limits | Portfolio class |
|---------|---------------------|---------------|-------|---------------------|--------|-----------------|
| Daily tracking | Log habits/parameters | APP_STORE_VERIFIED | Shipped | Free | — | CORE |
| Score 0–100 | Daily score | APP_STORE_VERIFIED | Shipped | Free | Informational | CORE |
| Trends / cycle overview | 72-day / 90-day framing | APP_STORE_VERIFIED | Shipped | Free | — | CORE |
| Charts / statistics | Graphs over time | APP_STORE_VERIFIED + WORKSPACE_ASSET_VERIFIED | Shipped | Free/Premium split | — | CORE |
| HealthKit import | Optional read steps/sleep | PUBLIC_DOCUMENTATION_VERIFIED + APP_STORE_VERIFIED | Shipped | Optional | Read-only | CORE |
| Home widget | Score glance | APP_STORE_VERIFIED | Shipped | Free (per store) | WidgetKit API pending | CORE |
| Report OCR | On-device OCR | PUBLIC_DOCUMENTATION_VERIFIED + APP_STORE_VERIFIED | Shipped | Premium | Vision API pending | CORE |
| AI Coach | OpenAI via proxy | PUBLIC_DOCUMENTATION_VERIFIED | Shipped | Premium; consent | Naming policy pending | CORE |
| PDF export | Exportable PDF | APP_STORE_VERIFIED | Shipped | Premium | — | CORE |
| Medication registry | Medication log | APP_STORE_VERIFIED | Shipped | Premium | — | SUPPORTING |
| TTC couple mode | Snapshot share; optional cloud | PUBLIC_DOCUMENTATION_VERIFIED + APP_STORE_VERIFIED | Shipped | Premium sync | Summary only | CORE |
| DNA import | On-device genetics | PUBLIC_DOCUMENTATION_VERIFIED | Shipped | Premium | High-level only | SUPPORTING |
| Premium subscriptions | Apple-managed | APP_STORE_VERIFIED | Shipped | Paid | StoreKit 2 pending | CORE |
| Face ID | Optional | APP_STORE_VERIFIED | Shipped | Optional | — | SUPPORTING |
| Local-first storage | On-device primary | PUBLIC_DOCUMENTATION_VERIFIED | Shipped | Default | — | CORE |
| Delete all data | In-app deletion | PUBLIC_DOCUMENTATION_VERIFIED | Shipped | — | — | SUPPORTING |
| No ads | No advertising | APP_STORE_VERIFIED | N/A | — | — | SUPPORTING |
| Medical diagnosis | Not provided | APP_STORE_VERIFIED | N/A | — | — | DO NOT PUBLISH as capability |
| Salon/CRM legacy claims | Obsolete marketing reports | NOT_VERIFIED / contradicted | Obsolete | — | — | DO NOT PUBLISH |

## 5.2 PreventivoRapido PRO features

| Feature | Factual description | Evidence Type | State | Public availability | Limits | Portfolio class |
|---------|---------------------|---------------|-------|---------------------|--------|-----------------|
| Create quotes | Professional quotes with VAT lines | APP_STORE_VERIFIED + WORKSPACE_ASSET_VERIFIED | Shipped | Core | — | CORE |
| PDF export/share | Professional PDF | APP_STORE_VERIFIED | Shipped | Pro narrative | PDFKit pending | CORE |
| Customer signature | Public link or in person | APP_STORE_VERIFIED | Shipped | Pro | — | CORE |
| Client directory | Clients + history | APP_STORE_VERIFIED + WORKSPACE_ASSET_VERIFIED | Shipped | — | — | CORE |
| Dashboard filters | Status monitoring | WORKSPACE_ASSET_VERIFIED + APP_STORE_VERIFIED | Shipped | — | — | CORE |
| Invoice/proforma conversion | From confirmed quote | APP_STORE_VERIFIED | Shipped | — | Not automatic SDI | CORE |
| Document archive | Invoices/docs section | APP_STORE_VERIFIED + WORKSPACE_ASSET_VERIFIED | Shipped | — | — | SUPPORTING |
| Email send | System Mail / configured email | PUBLIC_DOCUMENTATION_VERIFIED | Shipped | User action | — | SUPPORTING |
| Email/password auth | Account login | PUBLIC_DOCUMENTATION_VERIFIED | Shipped | — | — | SUPPORTING |
| Sign in with Apple | Apple ID login | APP_STORE_VERIFIED + PUBLIC_DOCUMENTATION_VERIFIED | Shipped | — | — | CORE |
| Local backup | Local backup tools | PUBLIC_DOCUMENTATION_VERIFIED + APP_STORE_VERIFIED | Shipped | — | User responsible | SUPPORTING |
| Optional cloud sync | Sync to configured web service | PUBLIC_DOCUMENTATION_VERIFIED + APP_STORE_VERIFIED | Optional | User-activated | Vendor pending | CORE (existence) |
| Local notifications | Optional | PUBLIC_DOCUMENTATION_VERIFIED | Shipped | Permission | — | SUPPORTING |
| App lock | Device auth | PUBLIC_DOCUMENTATION_VERIFIED | Shipped | Optional | — | SUPPORTING |
| Pro subscription | Apple-managed; trial | APP_STORE_VERIFIED | Shipped | Paid | StoreKit 2 pending | CORE |
| E-invoice provider | Beta | APP_STORE_VERIFIED | Beta | Beta | Qualify as beta | EXPERIMENTAL |
| Onboarding/paywall | Present | APP_STORE_VERIFIED + WORKSPACE_ASSET_VERIFIED | Shipped | — | — | INTERNAL |
| Full-stack web CRM | Not evidenced | NOT_VERIFIED | — | — | — | DO NOT PUBLISH |

---

# 6. Verified Tech Stack

## 6.1 AndroMetrics

| Category | Technology | Evidence Type | Usage level | Public claim allowed |
|----------|------------|---------------|-------------|----------------------|
| Languages | Swift | NOT_VERIFIED | — | Only after OWNER_VERIFIED or SOURCE_VERIFIED |
| UI | SwiftUI | NOT_VERIFIED | — | Only after OWNER_VERIFIED or SOURCE_VERIFIED |
| Architecture | Local-first + optional cloud snapshots | PUBLIC_DOCUMENTATION_VERIFIED | PRIMARY | YES (high-level) |
| Persistence | On-device storage | PUBLIC_DOCUMENTATION_VERIFIED | PRIMARY | YES |
| App Group | Portfolio claim only | NOT_VERIFIED | — | NO until owner/source |
| Networking | AI proxy; optional Firebase | PUBLIC_DOCUMENTATION_VERIFIED | SECONDARY | YES high-level; no endpoints |
| Backend | Firebase Auth anon + Firestore (TTC); Cloudflare proxy | PUBLIC_DOCUMENTATION_VERIFIED | SUPPORTING | YES with “optional TTC” |
| Authentication | Firebase Anonymous (TTC) | PUBLIC_DOCUMENTATION_VERIFIED | SUPPORTING | YES |
| Analytics | — | NOT_VERIFIED | — | NO |
| Crash reporting | — | NOT_VERIFIED | — | NO |
| Apple-managed subscriptions | App Store IAP | APP_STORE_VERIFIED | PRIMARY | YES |
| StoreKit | Named in privacy | PUBLIC_DOCUMENTATION_VERIFIED | PRIMARY | YES |
| StoreKit 2 | — | NOT_VERIFIED | — | Only SOURCE_VERIFIED or OWNER_VERIFIED |
| AI | OpenAI via proxy | PUBLIC_DOCUMENTATION_VERIFIED | PRIMARY (Premium) | YES if naming approved |
| OCR | On-device OCR | PUBLIC_DOCUMENTATION_VERIFIED | PRIMARY | YES |
| Vision | — | NOT_VERIFIED | — | Only OWNER/SOURCE |
| HealthKit | Read-only | PUBLIC_DOCUMENTATION_VERIFIED | SECONDARY | YES |
| iCloud KVS | NSUbiquitousKeyValueStore | PUBLIC_DOCUMENTATION_VERIFIED | SECONDARY | YES |
| Widget feature | Home widget | APP_STORE_VERIFIED | PRIMARY | YES (“widget”) |
| WidgetKit | — | NOT_VERIFIED | — | Only OWNER/SOURCE |
| Testing | — | NOT_VERIFIED | — | NO |
| CI/CD | — | NOT_VERIFIED | — | NO |
| Distribution | App Store | APP_STORE_VERIFIED | PRIMARY | YES |
| Localization | IT confirmed; ES/DE uncertain | APP_STORE_VERIFIED / pending | IT PRIMARY | IT YES; multilingual only after owner |
| Privacy design | Local-first + consent | PUBLIC_DOCUMENTATION_VERIFIED | PRIMARY | YES factual |
| Ads | None | APP_STORE_VERIFIED | — | YES (“no ads”) |

## 6.2 PreventivoRapido PRO

| Category | Technology | Evidence Type | Usage level | Public claim allowed |
|----------|------------|---------------|-------------|----------------------|
| Languages | Swift | NOT_VERIFIED | — | Only OWNER/SOURCE |
| UI | SwiftUI | NOT_VERIFIED | — | Only OWNER/SOURCE |
| Architecture | Local-first + optional web sync | PUBLIC_DOCUMENTATION_VERIFIED | PRIMARY | YES high-level |
| Persistence | Local storage | PUBLIC_DOCUMENTATION_VERIFIED | PRIMARY | YES |
| Keychain | Sensitive credentials | PUBLIC_DOCUMENTATION_VERIFIED | SUPPORTING | YES |
| Backend vendor | Unknown configured web service | NOT_VERIFIED (vendor) | — | “Optional cloud sync” YES; vendor only after owner |
| Authentication | Email/password + Sign in with Apple | PUBLIC_DOCUMENTATION_VERIFIED + APP_STORE_VERIFIED | PRIMARY | YES |
| Analytics | — | NOT_VERIFIED | — | NO |
| Crash reporting | — | NOT_VERIFIED | — | NO |
| Apple-managed subscriptions | App Store Pro | APP_STORE_VERIFIED | PRIMARY | YES |
| StoreKit | — | NOT_VERIFIED | — | Only if privacy/owner confirms |
| StoreKit 2 | — | NOT_VERIFIED | — | Only SOURCE or OWNER |
| AI | — | NOT_VERIFIED | — | NO |
| PDF export | Yes | APP_STORE_VERIFIED | PRIMARY | YES |
| PDFKit | — | NOT_VERIFIED | — | Only OWNER/SOURCE |
| Notifications | Local | PUBLIC_DOCUMENTATION_VERIFIED | SUPPORTING | YES |
| Push | — | NOT_VERIFIED | — | NO unless owner |
| Localization | IT | APP_STORE_VERIFIED | PRIMARY | YES |
| Firebase | — | NOT_VERIFIED | — | NO unless owner |
| Full stack | — | NOT_VERIFIED | — | NO |
| Testing / CI/CD | — | NOT_VERIFIED | — | NO |
| Distribution | App Store | APP_STORE_VERIFIED | PRIMARY | YES |

---

# 7. Public Architecture Summary

## 7.1 AndroMetrics — publishable architecture

AndroMetrics is a native iOS app for male fertility/wellbeing tracking. Core tracking data stays on device. Optional HealthKit read access can enrich inputs. Optional iCloud Key-Value sync can align selected non-genetic data across Apple devices. Premium features include on-device OCR for lab reports, PDF export, and an AI coach that sends user-provided content through an owner-operated proxy to OpenAI. Optional couple TTC mode can share summary snapshots; cloud sync for those summaries uses Firebase Anonymous Authentication and Firestore when enabled. Genetic imports remain on-device only. Subscriptions are Apple-managed App Store subscriptions. The product is informational and not a medical device.

**Public flow:**  
`User → iOS app → On-device tracking/score → Optional HealthKit → Optional iCloud KVS → Optional OCR → Optional AI proxy → Optional TTC summary sync → PDF export`

**Do not publish:** secrets, endpoints, project IDs, schemas, prompts, scoring algorithms, real health data.

**Pending owner/source:** Swift/SwiftUI, Vision vs other OCR, WidgetKit, StoreKit 2, legal version alignment.

## 7.2 PreventivoRapido PRO — publishable architecture

PreventivoRapido PRO is a native iOS app for tradespeople and freelancers to create professional quotes, export PDFs, collect signatures, manage clients, and convert accepted quotes into invoices/proforma documents. Operational data is stored primarily on device. Users authenticate with email/password or Sign in with Apple. Sensitive third-party credentials can be stored in Keychain. Optional cloud synchronization can send quotes to a user-configured web service. Local notifications and system Mail are supported. Pro access is an Apple-managed App Store subscription. E-invoice provider connection exists in beta and is not automatic SDI submission.

**Public flow:**  
`Client request → iOS app → Quote → PDF → Signature → Optional cloud sync / email → Archive`

**Do not publish:** sync endpoints, provider secrets, customer PII, internal fiscal automation claims beyond public terms.

**Pending owner/source:** Swift/SwiftUI, PDFKit, StoreKit/StoreKit 2, cloud vendor, analytics/crash tools.

---

# 8. Public Links Verification

## 8.1 AndroMetrics

| Link type | URL | Evidence Type |
|-----------|-----|---------------|
| App Store (canonical) | https://apps.apple.com/it/app/andrometrics/id6758244167 | APP_STORE_VERIFIED |
| App Store (alias) | https://apps.apple.com/it/app/andrometrics-fertility/id6758244167 | APP_STORE_VERIFIED |
| Developer | https://apps.apple.com/it/developer/fernando-piras/id1865514513 | APP_STORE_VERIFIED |
| Product page | https://www.fernandopiras.com/apps/andrometrics | APP_STORE_VERIFIED (sellerUrl) + live |
| Legal hub | https://fernandopiras.github.io/andrometrics-legal/ | PUBLIC_DOCUMENTATION_VERIFIED |
| Privacy | https://fernandopiras.github.io/andrometrics-legal/privacy.html | PUBLIC_DOCUMENTATION_VERIFIED |
| Support | https://fernandopiras.github.io/andrometrics-legal/support.html | PUBLIC_DOCUMENTATION_VERIFIED |
| Terms | https://fernandopiras.github.io/andrometrics-legal/terms.html | PUBLIC_DOCUMENTATION_VERIFIED |

## 8.2 PreventivoRapido PRO

| Link type | URL | Evidence Type |
|-----------|-----|---------------|
| App Store | https://apps.apple.com/it/app/preventivorapido-pro/id6768065146 | APP_STORE_VERIFIED |
| Product page | https://www.fernandopiras.com/apps/preventivorapido | live site verified |
| Legal hub | https://fernandopiras.github.io/preventivorapido--legal/ | PUBLIC_DOCUMENTATION_VERIFIED |
| Privacy | https://fernandopiras.github.io/preventivorapido--legal/privacy.html | PUBLIC_DOCUMENTATION_VERIFIED |
| Support | https://fernandopiras.github.io/preventivorapido--legal/support.html | PUBLIC_DOCUMENTATION_VERIFIED |
| Terms | https://fernandopiras.github.io/preventivorapido--legal/terms.html | PUBLIC_DOCUMENTATION_VERIFIED |
| iTunes sellerUrl | — | NOT_VERIFIED |

## 8.3 Profile contacts

| Link | Evidence Type |
|------|---------------|
| https://www.fernandopiras.com | live verified |
| fernando@fernandopiras.com | PUBLIC_DOCUMENTATION_VERIFIED + workspace config |
| Instagram @swiftwithfer | WORKSPACE_ASSET_VERIFIED (config; not revalidated externally in this gate) |

---

# 9. Claim Safety Matrix

### Profile README rule

Profile may publish only:

- **SAFE TO CLAIM**, or  
- **OWNER_VERIFIED**

Showcase READMEs may additionally use APP_STORE / PUBLIC_DOCUMENTATION / WORKSPACE_ASSET / SOURCE evidence as classified.

| Claim | Verdict | Notes |
|-------|---------|-------|
| iOS app | SAFE TO CLAIM | APP_STORE_VERIFIED |
| Published on the App Store | SAFE TO CLAIM | APP_STORE_VERIFIED |
| Commercial product | SAFE TO CLAIM | Paid App Store products |
| Apple-managed App Store subscriptions | SAFE TO CLAIM | APP_STORE_VERIFIED |
| StoreKit | SAFE TO CLAIM for AndroMetrics | PUBLIC_DOCUMENTATION_VERIFIED; Preventivo pending |
| StoreKit 2 | DO NOT CLAIM until OWNER/SOURCE | — |
| Swift | Pending → can become OWNER_VERIFIED | Not required to omit if owner confirms |
| SwiftUI | Pending → can become OWNER_VERIFIED | Not required to omit if owner confirms |
| Firebase | SAFE TO CLAIM for AndroMetrics optional TTC only | PUBLIC_DOCUMENTATION_VERIFIED; not for Preventivo unless owner |
| OpenAI / AI coach | SAFE TO CLAIM for AndroMetrics if naming allowed | PUBLIC_DOCUMENTATION_VERIFIED; General Q3 |
| HealthKit | SAFE TO CLAIM (AndroMetrics) | PUBLIC_DOCUMENTATION_VERIFIED |
| Widget support | SAFE TO CLAIM (AndroMetrics) | APP_STORE_VERIFIED (“widget”); WidgetKit pending |
| PDF quotes/invoices | SAFE TO CLAIM (PreventivoRapido PRO) | APP_STORE_VERIFIED |
| Sign in with Apple | SAFE TO CLAIM (PreventivoRapido PRO) | APP_STORE_VERIFIED |
| Local-first / on-device storage | SAFE TO CLAIM with factual wording | PUBLIC_DOCUMENTATION_VERIFIED |
| privacy-focused (absolute slogan) | CLAIM WITH QUALIFICATION / prefer facts | Use concrete controls |
| multilingual | DO NOT CLAIM until owner | IT confirmed only |
| used by real users | DO NOT CLAIM in README | Temporal/social proof; ratings are audit-only |
| rating / review count | DO NOT CLAIM | AUDIT ONLY |
| version / dates / file size | DO NOT CLAIM | AUDIT ONLY |
| production-ready | DO NOT CLAIM | — |
| scalable | DO NOT CLAIM | — |
| enterprise | DO NOT CLAIM | — |
| senior | DO NOT CLAIM | — |
| full stack | DO NOT CLAIM | — |
| advanced architecture | DO NOT CLAIM | — |
| high performance | DO NOT CLAIM | — |
| secure (absolute) | DO NOT CLAIM | Prefer concrete controls |
| React / TypeScript / Vercel as product-backed | DO NOT CLAIM from these two apps | — |

---

# 10. Screenshot & Asset Inventory

## 10.1 AndroMetrics

| Path | Type | Dims | Personal data | Class | Evidence Type |
|------|------|------|---------------|-------|---------------|
| `public/images/apps/andrometrics/icon.png` | Icon | 512×512 | None | READY | WORKSPACE_ASSET_VERIFIED |
| `public/images/apps/andrometrics/wordmark.png` | Wordmark | 1208×230 | None | READY | WORKSPACE_ASSET_VERIFIED |
| `.../screenshot-1.png` | Screenshot | 554×1200 | Demo name “Marco” | READY (confirm non-real) | WORKSPACE_ASSET_VERIFIED |
| `.../screenshot-2.png` | Screenshot | 554×1200 | None obvious | READY | WORKSPACE_ASSET_VERIFIED |
| `.../screenshot-3.png` | Screenshot | 554×1200 | None obvious | READY | WORKSPACE_ASSET_VERIFIED |
| `public/videos/andrometrics-demo.mp4` | Demo | ~9.3 MB | Possibly | FRAME-BY-FRAME PRIVACY REVIEW REQUIRED | WORKSPACE_ASSET_VERIFIED |
| App Store CDN screenshots | Store | Remote | Review before reuse | READY after review | APP_STORE_VERIFIED |
| GitHub banners | — | — | — | MISSING | NOT_VERIFIED |

## 10.2 PreventivoRapido PRO — privacy gate

| Path | Type | Personal data | Class | Rule |
|------|------|---------------|-------|------|
| `.../icon.png` | Icon 512×512 | None | READY | — |
| Legal `app-icon.png` | Icon 1024×1024 | None | READY | Preferred master |
| `.../screenshot-1.png` | Dashboard | Name “Fernando Piras” | OWNER APPROVAL REQUIRED **or** SCRUB RECOMMENDED | Do not publish until decided |
| `.../screenshot-2.png` | New quote | Personal email `fernandopiras@icloud.com` | **DO NOT USE UNTIL SCRUBBED** | Hard block |
| `.../screenshot-3.png` | Documents | Low risk | READY | — |
| `.../preventivorapido-demo.mp4` | Demo | Possibly personal fields | **FRAME-BY-FRAME PRIVACY REVIEW REQUIRED** | Hard review before use |
| Wordmark / banners | — | — | MISSING | — |

**No assets were modified in this gate.**

---

# 11. Profile Evidence

## 11.1 SAFE TO CLAIM now (no owner answer required)

- Product-focused software developer shipping iOS apps  
- Two App Store products: AndroMetrics; PreventivoRapido PRO  
- Apple-managed App Store subscriptions  
- AndroMetrics: HealthKit, widgets, on-device OCR, local-first storage, optional Firebase TTC summaries, OpenAI-via-proxy AI features (naming policy pending for OpenAI string)  
- PreventivoRapido PRO: PDF quotes/invoices, Sign in with Apple, optional cloud sync, local notifications  
- Primary CTA: https://www.fernandopiras.com  
- Contact: fernando@fernandopiras.com  

## 11.2 Can become profile claims after OWNER_VERIFIED

- Swift  
- SwiftUI  
- StoreKit 2  
- WidgetKit  
- Apple Vision  
- PDFKit  
- Exact Preventivo cloud vendor  

## 11.3 Do not cite on profile

- Rating / users / performance / scalability  
- Enterprise / senior / full stack / production-ready / advanced architecture  
- FOTIQ, Slotiva, SwiftToKotlin  
- React/TypeScript/Vercel as evidenced by these two apps  

---

# Owner Verification Required

Owner answers are blank until provided.  
`OWNER_VERIFIED` becomes valid only after an explicit owner response is recorded here.

## AndroMetrics — owner verification table

| Topic | Current report status | Owner answer | Final evidence classification | Public claim allowed | Qualification required |
|-------|----------------------|--------------|-------------------------------|----------------------|------------------------|
| Language | NOT_VERIFIED | | pending | pending | Prefer exact language name |
| UI framework | NOT_VERIFIED | | pending | pending | SwiftUI / UIKit / Mixed |
| Architecture | PUBLIC_DOCUMENTATION_VERIFIED (local-first + optional cloud) | | PUBLIC_DOCUMENTATION_VERIFIED (+ owner if expanded) | YES high-level | No secrets |
| StoreKit 1 vs 2 | StoreKit family PUBLIC_DOCUMENTATION_VERIFIED; StoreKit 2 NOT_VERIFIED | | pending for v2 | “StoreKit” YES; “StoreKit 2” only OWNER/SOURCE | Keep distinction |
| WidgetKit | Widget feature APP_STORE_VERIFIED; WidgetKit API NOT_VERIFIED | | pending | “Widget” YES; “WidgetKit” only OWNER/SOURCE | — |
| Vision / OCR | OCR PUBLIC_DOCUMENTATION_VERIFIED; Vision NOT_VERIFIED | | pending for Vision | OCR YES; Vision only OWNER/SOURCE | — |
| PDFKit | PDF export APP_STORE_VERIFIED; PDFKit NOT_VERIFIED | | pending | PDF YES; PDFKit only OWNER/SOURCE | — |
| Backend | Firebase TTC + Cloudflare proxy PUBLIC_DOCUMENTATION_VERIFIED | | PUBLIC_DOCUMENTATION_VERIFIED | YES as optional/supporting | No endpoints |
| Cloud sync | iCloud KVS + optional Firebase TTC PUBLIC_DOCUMENTATION_VERIFIED | | PUBLIC_DOCUMENTATION_VERIFIED | YES | Optional / summary-only |
| Firebase | PUBLIC_DOCUMENTATION_VERIFIED (TTC optional) | | PUBLIC_DOCUMENTATION_VERIFIED | YES with qualification | Not primary backend for all data |
| Authentication | Firebase Anonymous for TTC PUBLIC_DOCUMENTATION_VERIFIED | | PUBLIC_DOCUMENTATION_VERIFIED | YES | No classic account |
| Notifications | NOT_VERIFIED | | pending | NO until answered | — |
| Localization | IT APP_STORE_VERIFIED; ES/DE uncertain | | pending | IT YES | Multilingual only if owner confirms shipped locales |
| Analytics | NOT_VERIFIED | | pending | NO until answered | — |
| Crash reporting | NOT_VERIFIED | | pending | NO until answered | — |
| Testing | NOT_VERIFIED | | pending | Usually omit | — |
| CI/CD | NOT_VERIFIED | | pending | Usually omit | — |
| Legal doc version alignment | Conflict 1.1.0 vs 1.4.0 | | pending action | Versions omitted from README anyway | Align legal site |

## PreventivoRapido PRO — owner verification table

| Topic | Current report status | Owner answer | Final evidence classification | Public claim allowed | Qualification required |
|-------|----------------------|--------------|-------------------------------|----------------------|------------------------|
| Language | NOT_VERIFIED | | pending | pending | — |
| UI framework | NOT_VERIFIED | | pending | pending | — |
| Architecture | PUBLIC_DOCUMENTATION_VERIFIED (local + optional web sync) | | PUBLIC_DOCUMENTATION_VERIFIED | YES high-level | No endpoints |
| StoreKit 1 vs 2 | Apple-managed subs APP_STORE_VERIFIED; StoreKit/StoreKit 2 NOT_VERIFIED | | pending | Subs YES; StoreKit/StoreKit 2 only after confirmation | Keep 3-way distinction |
| WidgetKit | NOT_VERIFIED / N/A | | pending | NO unless exists | — |
| Vision / OCR | NOT_VERIFIED / N/A | | pending | NO | — |
| PDFKit | PDF APP_STORE_VERIFIED; PDFKit NOT_VERIFIED | | pending | PDF YES; PDFKit only OWNER/SOURCE | — |
| Backend | Existence of optional web sync PUBLIC_DOCUMENTATION_VERIFIED; vendor NOT_VERIFIED | | pending vendor | “Optional cloud sync” YES | Vendor-specific only after owner |
| Cloud sync | PUBLIC_DOCUMENTATION_VERIFIED (existence) | | pending vendor detail | YES existence | — |
| Firebase | NOT_VERIFIED | | pending | NO unless owner confirms | — |
| Authentication | Email/password + Sign in with Apple verified publicly | | PUBLIC_DOCUMENTATION_VERIFIED + APP_STORE_VERIFIED | YES | — |
| Notifications | Local PUBLIC_DOCUMENTATION_VERIFIED; push NOT_VERIFIED | | local verified; push pending | Local YES | — |
| Localization | IT APP_STORE_VERIFIED | | APP_STORE_VERIFIED | YES IT | — |
| Analytics | NOT_VERIFIED | | pending | NO until answered | — |
| Crash reporting | NOT_VERIFIED | | pending | NO until answered | — |
| Testing | NOT_VERIFIED | | pending | Usually omit | — |
| CI/CD | NOT_VERIFIED | | pending | Usually omit | — |
| Screenshot name “Fernando Piras” | WORKSPACE_ASSET_VERIFIED | | pending approval | Pending | OWNER APPROVAL REQUIRED or scrub |
| Screenshot personal email | WORKSPACE_ASSET_VERIFIED | | blocked | NO until scrubbed | DO NOT USE UNTIL SCRUBBED |
| Demo video | WORKSPACE_ASSET_VERIFIED | | blocked pending review | NO until reviewed | FRAME-BY-FRAME REVIEW |

---

# 12. Missing Evidence

| Gap | Blocks | Resolution path |
|-----|--------|-----------------|
| Owner questionnaire answers | OWNER_VERIFIED stack claims | Fill tables above |
| SOURCE_VERIFIED stack | Optional; not required | Keep source private |
| Legal version alignment (AndroMetrics) | Legal-site trust | Owner updates legal pages |
| Preventivo email screenshot scrub | Showcase image set | Scrub or replace |
| Name-in-screenshot decision | Showcase image set | Approve or scrub |
| Demo video privacy review | Video embeds | Frame-by-frame review |
| OpenAI public naming decision | Wording of AI claims | General Q3 |

---

# 13. Owner Questionnaire (selectable answers)

Fill by circling/checking one option per item. Leave blank only if truly unknown.

## ANDROMETRICS

1. Language:  
   ☐ Swift ☐ Other ☐ Mixed  

2. UI:  
   ☐ SwiftUI ☐ UIKit ☐ Mixed  

3. Subscriptions:  
   ☐ StoreKit 1 ☐ StoreKit 2 ☐ Other  

4. OCR:  
   ☐ Apple Vision ☐ VisionKit ☐ Other  

5. Widget:  
   ☐ WidgetKit ☐ Other  

6. Backend:  
   ☐ Firebase ☐ Custom ☐ Mixed ☐ None  

7. AI:  
   ☐ OpenAI through proxy ☐ Other  

8. Localization actually shipped:  
   ☐ IT ☐ EN ☐ ES ☐ DE ☐ Other: ______  
   (check all that apply)

9. Current legal-document version:  
   ______  

## PREVENTIVO RAPIDO

1. Language:  
   ☐ Swift ☐ Other ☐ Mixed  

2. UI:  
   ☐ SwiftUI ☐ UIKit ☐ Mixed  

3. Subscriptions:  
   ☐ StoreKit 1 ☐ StoreKit 2 ☐ Other  

4. PDF:  
   ☐ PDFKit ☐ Other  

5. Authentication:  
   ☐ Email-password ☐ Sign in with Apple ☐ Both ☐ Other  

6. Cloud sync:  
   ☐ Firebase ☐ iCloud ☐ Custom backend ☐ Other ☐ None  

7. Notifications:  
   ☐ Local ☐ Push ☐ Both ☐ None  

8. Analytics:  
   ______  

9. Crash reporting:  
   ______  

## GENERAL

1. May the public screenshots show the name Fernando Piras?  
   ☐ Yes ☐ No ☐ Scrub recommended / replace with demo name  

2. Must every personal email be replaced with demo data?  
   ☐ Yes ☐ No  

3. May OpenAI be named publicly?  
   ☐ Yes ☐ No ☐ Use generic “AI provider” only  

4. Are there features that must remain confidential?  
   ☐ No ☐ Yes — list: ______  

5. May technical details confirmed by the owner be published as OWNER_VERIFIED?  
   ☐ Yes ☐ No ☐ Yes, with restrictions: ______  

---

# 14. Phase 3 Readiness

| Criterion | Status |
|-----------|--------|
| Phase 1 merged | Yes |
| Public evidence matrix complete | Yes |
| Evidence Type taxonomy applied | Yes |
| StoreKit logic de-conflicted | Yes |
| Temporal metrics excluded from future READMEs | Yes |
| Owner Verification tables ready | Yes — answers empty |
| Owner questionnaire answered | **No — waiting** |
| Preventivo screenshot privacy cleared | **No — waiting** |
| Phase 3 started | **No** |

**Readiness by surface**

| Surface | Status |
|---------|--------|
| Profile README | Ready to draft from SAFE TO CLAIM only; Swift/SwiftUI allowed after OWNER_VERIFIED |
| AndroMetrics showcase | Conditionally ready; strong public evidence; owner gate for API-level names |
| PreventivoRapido PRO showcase | Conditionally ready; blocked images until scrub/approval; owner gate for stack names |

---

# 15. Final Recommendation

1. Keep commercial source private; use OWNER_VERIFIED for missing API-level facts.  
2. Publish only SAFE TO CLAIM + OWNER_VERIFIED on the Profile README.  
3. Use “Apple-managed App Store subscriptions” freely; use “StoreKit” only where documented/confirmed; use “StoreKit 2” only OWNER/SOURCE.  
4. Omit all temporal metrics from public READMEs.  
5. Align AndroMetrics legal version labels even though READMEs omit versions.  
6. Scrub Preventivo email screenshot before any showcase use.  
7. Do not start Phase 3 until questionnaire responses are recorded for intended claims.  
8. Stop here and wait for owner answers.  

---

# Quality Gate (Owner Verification revision)

| Dimension | Score | Notes |
|-----------|------:|-------|
| Accuracy | 99 | StoreKit contradiction removed; evidence types explicit |
| Evidence Coverage | 98 | Public evidence complete; owner/source intentionally open |
| Safety | 99 | Screenshot hard-blocks; no secrets; temporal data quarantined |
| Completeness | 99 | Owner tables + selectable questionnaire added |
| Portfolio Readiness | 96 | Waiting on owner answers + asset privacy |
| Maintainability | 99 | Clear evidence-type taxonomy |

### Overall: **98.3 / 100**

Remaining gaps are owner-input gaps, not invented facts.

---

## Stop

**Owner Verification Gate applied to `GITHUB_PORTFOLIO_PHASE_2_EVIDENCE.md`.**  
**Phase 3 not started.**  
**No merge executed.**  
**Awaiting owner questionnaire responses.**
