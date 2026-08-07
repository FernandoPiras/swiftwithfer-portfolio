# PreventivoRapido PRO — Source Verification Template

**PRODUCT = PREVENTIVORAPIDO_PRO**  
**Official name:** PreventivoRapido PRO  
**Status:** TEMPLATE — fill only during local Source Verification  
**Filled by:** _______________  
**Date:** _______________  
**Local project root:** _______________  
**Xcode project / workspace:** _______________  

**Rules:** No invention. No AndroMetrics evidence here. No secrets copied. Real usage required.

**Public URLs (reference only — not source proof):**  
App Store: `https://apps.apple.com/it/app/preventivorapido-pro/id6768065146`  
Product page: `https://www.fernandopiras.com/apps/preventivorapido`  
Legal: `https://fernandopiras.github.io/preventivorapido--legal/`

---

## 0. Access gate

| Check | Result |
|-------|--------|
| Project accessible | [ ] YES / [ ] NO |
| Opens in Xcode / builds (optional note) | _______________ |
| Commercial source (not a stub) | [ ] YES / [ ] NO |

If access = NO → stop this template; do not mark any row `SOURCE_VERIFIED`.

---

## 1. Project identity

| Element | Value (or NOT_PRESENT) | Status (`SOURCE_VERIFIED` / `NOT_PRESENT` / `NOT_PUBLICABLE` / `NEEDS_OWNER_REVIEW`) | Publicable? |
|---------|------------------------|----------------------------------------------------------------------------------------|-------------|
| Product name | | | |
| Bundle identifier | | | NO (default) |
| Platforms | | | |
| Deployment targets | | | |
| Xcode targets | | | |
| App extensions | | | |
| Widgets | | | |
| Entitlements (summary, no raw dump) | | | |
| Capabilities | | | |
| Localization | | | |
| URL schemes | | | |
| Associated domains | | | |

---

## 2. Architecture

### INTERNAL_FINDING

| Topic | Notes / evidence files |
|-------|------------------------|
| Directory structure (high level) | |
| Architecture pattern | |
| App entry point | |
| Navigation | |
| Dependency boundaries | |
| Services | |
| Repositories | |
| Persistence | |
| Models | |
| Networking | |
| State management | |
| Dependency injection | |
| Feature modules | |
| Shared components / design system | |
| Error handling | |

### PUBLIC_SAFE_SUMMARY

*(2–5 sentences max. No internal folder dump. No clonable blueprint.)*

```
[FILL]
```

---

## 3. Apple frameworks / APIs

For each row: only mark `SOURCE_VERIFIED` if **real product usage** is proven.

| Technology | Evidence (what code does) | Files | Purpose | SOURCE_VERIFIED? | Publicable? | Public wording |
|------------|---------------------------|-------|---------|------------------|-------------|----------------|
| SwiftUI | | | | | | |
| UIKit | | | | | | |
| SwiftData | | | | | | |
| Core Data | | | | | | |
| HealthKit | | | | | | |
| StoreKit / StoreKit 2 | | | | | | |
| WidgetKit | | | | | | |
| Vision | | | | | | |
| VisionKit | | | | | | |
| PDFKit | | | | | | |
| AuthenticationServices | | | | | | |
| LocalAuthentication | | | | | | |
| CloudKit | | | | | | |
| UserNotifications | | | | | | |
| BackgroundTasks | | | | | | |
| AppIntents | | | | | | |
| ActivityKit | | | | | | |
| CoreML | | | | | | |
| Foundation networking | | | | | | |
| Other: ________ | | | | | | |

---

## 4. Third-party dependencies

| Name | Version (if relevant) | Usage | Publicable? | Notes |
|------|----------------------|-------|-------------|-------|
| | | | | |

**Secrets in dependency config:** SECRET_PRESENT = YES / NO  
Coarse locations (if YES): _______________

---

## 5. Data & privacy

| Concern | Finding | Residency (`LOCAL` / `APPLE_CLOUD` / `THIRD_PARTY_CLOUD` / `EXTERNAL_AI_SERVICE` / `UNKNOWN` / `NOT_PRESENT`) | Evidence files |
|---------|---------|---------------------------------------------------------------------------------------------------------------|----------------|
| Primary data store | | | |
| Local storage | | | |
| Cloud storage | | | |
| Synchronization | | | |
| Encryption APIs | | | |
| Authentication | | | |
| Biometrics | | | |
| Keychain | | | |
| HealthKit permissions | | | |
| Photo / camera | | | |
| Tracking | | | |
| Analytics | | | |
| Advertising | | | |
| AI data flow | | | |

### INTERNAL DATA FLOW

```
[FILL — private]
```

### PUBLIC PRIVACY SUMMARY

```
[FILL — no absolute unverified claims]
```

---

## 6. Features

| Feature | Entry point | Implementation evidence | User-facing | Active | Class (`SHIPPED_FEATURE` / `INTERNAL_ONLY` / `UNUSED` / `EXPERIMENTAL`) | Publicable | Public description |
|---------|-------------|-------------------------|-------------|--------|------------------------------------------------------------------------|------------|--------------------|
| | | | | | | | |

Expected domain areas to evaluate (delete if absent): quotes/PDF, signatures, clients, invoices/proforma, field workflows — only if `SHIPPED_FEATURE` with evidence.

---

## 7. Subscriptions & monetization

| Topic | Finding | Evidence | Publicable? |
|-------|---------|----------|-------------|
| StoreKit implementation | | | |
| Products / entitlements (no unnecessary IDs) | | | |
| Restore flow | | | |
| Subscription state handling | | | |
| Paywalls / premium gating | | | |
| Trials | | | |
| Ads | | | |

### PUBLIC MONETIZATION WORDING

```
[FILL or NOT_PRESENT]
```

---

## 8. AI verification

Complete even if unused.

| Question | Answer | Evidence |
|----------|--------|----------|
| AI used? | YES / NO / UNKNOWN | |
| Where | | |
| Inputs | | |
| Outputs | | |
| Uses network? | | |
| External provider? | | |
| Fallbacks | | |
| Data transmitted (classes, not payloads) | | |

**Do not paste prompts, system prompts, keys, or private endpoints.**

### PUBLIC_AI_DESCRIPTION (max 1–2 sentences)

```
[FILL or NOT_PRESENT]
```

---

## 9. Documents / OCR / PDF / camera

| Capability | Present? | Framework(s) actually used | Evidence files | Publicable wording |
|------------|----------|----------------------------|----------------|--------------------|
| PDF generation | | | | |
| PDF parsing | | | | |
| OCR | | | | |
| Camera scanning | | | | |
| Image processing | | | | |
| Document export / sharing | | | | |
| Customer signatures | | | | |

---

## 10. Quality engineering

### QUALITY_FINDINGS (internal)

| Area | Finding |
|------|---------|
| Unit tests | |
| UI tests | |
| Accessibility | |
| Localization | |
| Empty / loading / error states | |
| Logging / crash handling | |
| Offline behavior | |
| Concurrency | |
| Swift 6 readiness | |
| Warnings / TODO / FIXME / dead code | |

### PUBLIC_ENGINEERING_SUMMARY

```
[FILL — no invented scores]
```

---

## 11. Security & secret scan

| SECRET_PRESENT | YES / NO |
|----------------|----------|
| Coarse locations (if YES) | |
| Classes found (`SAFE` / `REDACT` / `DO_NOT_PUBLISH`) | |

**No secret values in this file.**

---

## 12. Screenshot / asset inventory

| Asset | Path / note | Class (`READY` / `NEEDS_CAPTURE` / `NEEDS_REDACTION` / `DO_NOT_USE`) |
|-------|-------------|---------------------------------------------------------------------|
| App icon | | |
| Launch assets | | |
| Screenshots | | |
| Demo / sample data | | |
| Marketing assets | | |

Do not copy assets into the portfolio during this pass.

---

## 13. VERIFIED PUBLIC CLAIM MATRIX

| Claim | PRODUCT | Evidence | Evidence type | Publicable | Qualification | Recommended public wording | Destination (`PROFILE` / `SHOWCASE` / `WEBSITE` / `DO_NOT_PUBLISH`) |
|-------|---------|----------|---------------|------------|---------------|----------------------------|---------------------------------------------------------------------|
| | PREVENTIVORAPIDO_PRO | | | | | | |

Evidence types: `SOURCE_VERIFIED` · `APP_STORE_VERIFIED` · `OWNER_VERIFIED` · `PUBLIC_DOCUMENTATION_VERIFIED` · `NOT_VERIFIED`

---

## 14. SHOWCASE_INPUT_PACKAGE — PREVENTIVORAPIDO_PRO

Fill **only** approved public-safe content. Leave blank or `NOT_VERIFIED` rather than inventing.

```yaml
product_code: PREVENTIVORAPIDO_PRO
official_product_name: PreventivoRapido PRO
factual_one_line_description: ""
platform: ""
availability: ""
verified_capabilities: []
verified_technologies: []
public_architecture_summary: ""
privacy_summary: ""
ai_summary: ""          # or NOT_PRESENT
document_ocr_summary: "" # or NOT_PRESENT
monetization_wording: ""
screenshot_requirements: []
app_store_url: "https://apps.apple.com/it/app/preventivorapido-pro/id6768065146"
product_page_url: "https://www.fernandopiras.com/apps/preventivorapido"
support_url: "https://fernandopiras.github.io/preventivorapido--legal/support.html"
privacy_url: "https://fernandopiras.github.io/preventivorapido--legal/privacy.html"
source_code_notice: "Commercial source is private. This repository is a documentation showcase only."
claims_explicitly_forbidden: []
secret_present: NO
verification_complete: NO
```

---

## 15. Sign-off

| Statement | Check |
|-----------|-------|
| No AndroMetrics evidence mixed in | [ ] |
| No secrets copied | [ ] |
| No premature public publication | [ ] |
| SHOWCASE_INPUT_PACKAGE ready for showcase phase | [ ] |

Verifier: _______________  Date: _______________
