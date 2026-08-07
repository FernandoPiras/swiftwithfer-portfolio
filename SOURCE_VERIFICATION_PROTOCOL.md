# Source Verification Protocol  
## Local Execution Preparation — Phase 9

**Owner:** Fernando Piras  
**Date:** 2026-08-07  
**Status:** PROTOCOL ONLY — **no local source accessed in this phase**  
**Portfolio products (permanent):** AndroMetrics · PreventivoRapido PRO  

### Purpose

Prepare a single, definitive Source Verification procedure that a future Cursor session on the Mac will run when **both** commercial Xcode projects are available.

This phase:

- does **not** open or analyze product source trees;  
- does **not** mark anything `SOURCE_VERIFIED`;  
- does **not** create showcases or product repositories;  
- does **not** modify apps, profile README, or live GitHub repos.

### Deliverables

```
SOURCE_VERIFICATION_PROTOCOL.md
source-verification/
├── ANDROMETRICS_VERIFICATION_TEMPLATE.md
├── PREVENTIVORAPIDO_VERIFICATION_TEMPLATE.md
└── SOURCE_VERIFICATION_MASTER_CHECKLIST.md
```

### Related artifacts (do not replace)

- `PRODUCT_SHOWCASE_DESIGN_SYSTEM.md` — public showcase rules  
- `showcase-template/` — README / claim templates  
- `GITHUB_REPOSITORY_HYGIENE_PLAN.md` — public surface strategy  
- Phase 2 evidence docs (if present on other branches) — public/App Store evidence only until this protocol is executed  

---

# 1. Absolute rules

1. **No invention.** If code was not read, status is not `SOURCE_VERIFIED`.  
2. **No cross-product inference.** Evidence in AndroMetrics never proves PreventivoRapido PRO (and vice versa). Every claim row must set `PRODUCT`.  
3. **Real use required.** Import / Package.resolved / unused file / comment ≠ verification.  
4. **Two outputs per technical area:** `INTERNAL_FINDING` (private) and `PUBLIC_SAFE_SUMMARY` (showcase-ready).  
5. **Secrets never copied.** Record `SECRET_PRESENT = YES/NO` + coarse location only.  
6. **Bundle IDs and sensitive IDs** default to `NOT_PUBLICABLE` unless owner explicitly allows.  
7. **One local session.** The handoff prompt must finish both products + checklist + both `SHOWCASE_INPUT_PACKAGE` blocks without a multi-prompt chain.  
8. **No code mutation** during verification.  

---

# 2. Classification vocabulary

### Evidence / item status

| Status | Meaning |
|--------|---------|
| `SOURCE_VERIFIED` | Confirmed by inspecting **this product’s** commercial source with real usage |
| `NOT_PRESENT` | Searched; not found in this product |
| `NOT_PUBLICABLE` | True in source but must not appear publicly |
| `NEEDS_OWNER_REVIEW` | Ambiguous, sensitive, or incomplete without owner input |
| `APP_STORE_VERIFIED` | From public App Store only (not a substitute for source) |
| `OWNER_VERIFIED` | Explicit owner confirmation (not automatic code proof) |
| `NOT_VERIFIED` | Not confirmed — do not publish |

### Feature classes

| Class | Showcase candidate? |
|-------|---------------------|
| `SHIPPED_FEATURE` | Yes, if publicable |
| `INTERNAL_ONLY` | No |
| `UNUSED` | No |
| `EXPERIMENTAL` | No |

### Data residency (when proven)

`LOCAL` · `APPLE_CLOUD` · `THIRD_PARTY_CLOUD` · `EXTERNAL_AI_SERVICE` · `UNKNOWN`

### Secret / asset classes

`SAFE` · `REDACT` · `DO_NOT_PUBLISH`  
`READY` · `NEEDS_CAPTURE` · `NEEDS_REDACTION` · `DO_NOT_USE`

### Claim destinations

`PROFILE` · `SHOWCASE` · `WEBSITE` · `DO_NOT_PUBLISH`

---

# 3. Products in scope

| Code | Official name | Template |
|------|---------------|----------|
| `ANDROMETRICS` | AndroMetrics | `source-verification/ANDROMETRICS_VERIFICATION_TEMPLATE.md` |
| `PREVENTIVORAPIDO_PRO` | PreventivoRapido PRO | `source-verification/PREVENTIVORAPIDO_VERIFICATION_TEMPLATE.md` |

**Out of scope:** Slotiva, Turbo Run, NeFine, Wild Animal Explorer, FOTIQ, and any non-approved product.

Public URLs already known from prior phases (for packaging only; **not** source proof):

| Product | App Store | Product page | Legal host |
|---------|-----------|--------------|------------|
| AndroMetrics | `https://apps.apple.com/it/app/andrometrics/id6758244167` (also fertility slug variants) | `https://www.fernandopiras.com/apps/andrometrics` | `https://fernandopiras.github.io/andrometrics-legal/` |
| PreventivoRapido PRO | `https://apps.apple.com/it/app/preventivorapido-pro/id6768065146` | `https://www.fernandopiras.com/apps/preventivorapido` | `https://fernandopiras.github.io/preventivorapido--legal/` |

---

# 4. What the future local run must extract

Execute **all** sections below for **each** product, filling that product’s template. Never leave a section blank — use `NOT_PRESENT` / `NOT_VERIFIED` / `NEEDS_OWNER_REVIEW`.

## 4.1 Project identity

Extract: product name, bundle identifier, platforms, deployment targets, Xcode targets, extensions, widgets, entitlements, capabilities, localization, URL schemes, associated domains.

Classify each row: `SOURCE_VERIFIED` · `NOT_PRESENT` · `NOT_PUBLICABLE` · `NEEDS_OWNER_REVIEW`.

## 4.2 Architecture

Inspect: directory layout, architecture pattern, entry point, navigation, dependency boundaries, services, repositories, persistence, models, networking, state management, DI, feature modules, shared UI, design system, error handling.

Produce:

- `INTERNAL_FINDING` — detailed, private  
- `PUBLIC_SAFE_SUMMARY` — high-level, non-clonable  

Do **not** dump full internal trees into public packages.

## 4.3 Apple frameworks / APIs

Candidates to **search** (verify real use; do not assume):  
SwiftUI, UIKit, SwiftData, Core Data, HealthKit, StoreKit / StoreKit 2, WidgetKit, Vision, VisionKit, PDFKit, AuthenticationServices, LocalAuthentication, CloudKit, UserNotifications, BackgroundTasks, AppIntents, ActivityKit, CoreML, Foundation networking, others found in project.

For each used technology record: Evidence · Files · Purpose · `SOURCE_VERIFIED` · Publicable · Public wording.

## 4.4 Third-party dependencies

SPM / `Package.resolved` / CocoaPods / analytics / crash / ads / AI / backend / payments.

Record name, relevant version, usage, product, publicable yes/no.  
**Never** copy API keys, project IDs, private endpoints, tokens, secrets.

## 4.5 Data & privacy

Prove where data lives and how it moves: local storage, cloud, sync, encryption APIs, auth, biometrics, Keychain, HealthKit permissions, camera/photos, tracking, analytics, ads, AI flows.

Produce `INTERNAL DATA FLOW` and `PUBLIC PRIVACY SUMMARY`.  
Ban absolute marketing claims (“completely private”, “100% secure”, “anonymous”) unless code proves them.

## 4.6 Features

For each capability: entry point, implementation evidence, user-facing, active, publicable, public description.  
Classify `SHIPPED_FEATURE` / `INTERNAL_ONLY` / `UNUSED` / `EXPERIMENTAL`.  
Exclude dead code, disabled flags, unreachable screens, TODOs, experiments.

## 4.7 Subscriptions & monetization

StoreKit implementation, products, entitlements, restore, subscription state, ads, paywalls, trials, premium gating.  

Do **not** publish: unnecessary product IDs, revenue, conversion, stale hardcoded prices, internal commercial data.  
Public monetization wording only (e.g. Apple-managed subscriptions when evidenced).

## 4.8 AI (especially AndroMetrics)

If present: where used, inputs/outputs, network, external provider, fallbacks, transmitted data classes.  

Do **not** publish prompts, system prompts, keys, private endpoints, sensitive commercial logic.  
`PUBLIC_AI_DESCRIPTION` ≤ 1–2 sentences.

For PreventivoRapido PRO: complete the AI section with `NOT_PRESENT` if none — do not skip.

## 4.9 Documents / OCR / PDF / camera

Verify real PDF generation/parsing, OCR, camera scanning, image processing, export, sharing — and the **actual** frameworks.  
Do not assume Vision/PDFKit from marketing perception alone.

## 4.10 Quality engineering

Tests, UI tests, accessibility, localization, empty/loading/error states, logging, crash handling, offline, concurrency, Swift 6 readiness, warnings, TODO/FIXME, dead code.  

`QUALITY_FINDINGS` (internal) + `PUBLIC_ENGINEERING_SUMMARY` (safe). No invented scores.

## 4.11 Security & secret scan

Scan for keys, tokens, secrets, sensitive plists, env files, credentials, private URLs, personal emails, debug logs, sample PII.  

Class `SAFE` / `REDACT` / `DO_NOT_PUBLISH`.  
Report only `SECRET_PRESENT = YES/NO` + coarse location.

## 4.12 Screenshot / asset discovery

Icons, launch assets, screenshots, demo data, simulator captures, marketing assets.  
Class `READY` / `NEEDS_CAPTURE` / `NEEDS_REDACTION` / `DO_NOT_USE`.  
Do **not** copy assets into the portfolio in the verification pass.

## 4.13 Verified public claim matrix

After source pass, fill claim matrix (see templates) with: Claim · Evidence · Evidence type · Publicable · Qualification · Recommended public wording · Destination · **PRODUCT**.

## 4.14 SHOWCASE_INPUT_PACKAGE

End each product template with a package containing **only** approved public-safe fields (see templates). This becomes the **sole technical input** for future showcase repo creation.

---

# 5. Session workflow (future Mac agent)

1. Confirm both project roots (ask only if ambiguous).  
2. Lock `PRODUCT` context while filling each template.  
3. Complete AndroMetrics template end-to-end.  
4. Complete PreventivoRapido PRO template end-to-end.  
5. Complete master checklist.  
6. Re-scan both trees for secrets before finishing.  
7. Stop — no showcase creation, no git pushes of commercial source, no README publication.

---

# 6. Exit criteria

Source Verification is complete only when:

- [ ] Both templates fully filled (no empty required sections)  
- [ ] Master checklist all checked or explicitly blocked with reason  
- [ ] Both `SHOWCASE_INPUT_PACKAGE` blocks complete  
- [ ] Zero secrets copied into reports  
- [ ] Zero cross-product inferences  
- [ ] Nothing marked `SOURCE_VERIFIED` without file-level evidence  

---

# 7. Explicit non-goals of this phase (Phase 9 prep)

| Action | Status |
|--------|--------|
| Read local Xcode projects | **Not done** (no access assumed) |
| Mark claims `SOURCE_VERIFIED` | **Forbidden** until local run |
| Create `andrometrics` / `preventivo-rapido` repos | **Not started** |
| Change Profile README | **Not started** |
| Live cleanup of OUT_OF_PORTFOLIO repos | **Not started** |

---

# LOCAL EXECUTION HANDOFF

Copy the following prompt into Cursor **on the Mac** when both commercial projects are available. Run **once**.

```text
You are executing the Enterprise GitHub Portfolio — LOCAL SOURCE VERIFICATION
for Fernando Piras. Follow SOURCE_VERIFICATION_PROTOCOL.md in the
swiftwithfer-portfolio workspace exactly.

PORTFOLIO PRODUCTS ONLY (permanent):
1) AndroMetrics  → PRODUCT = ANDROMETRICS
2) PreventivoRapido PRO → PRODUCT = PREVENTIVORAPIDO_PRO

HARD RULES:
- Do NOT modify application source code.
- Do NOT invent findings. If not seen in code, do not mark SOURCE_VERIFIED.
- Do NOT infer a technology in one product because it exists in the other.
- Do NOT copy secrets, API keys, tokens, prompts, private endpoints, or PII into reports.
- For secrets: record only SECRET_PRESENT=YES/NO and a coarse location.
- Bundle IDs and sensitive identifiers default to NOT_PUBLICABLE.
- Produce INTERNAL_FINDING and PUBLIC_SAFE_SUMMARY where the protocol requires both.
- Real usage required (not mere import / Package.resolved / dead file / comment).

STEPS (single session):
1. Locate both local Xcode projects/workspaces. If multiple ambiguous folders exist,
   ask once for confirmation of the two roots; otherwise proceed.
2. Open and fill completely:
   source-verification/ANDROMETRICS_VERIFICATION_TEMPLATE.md
3. Open and fill completely:
   source-verification/PREVENTIVORAPIDO_VERIFICATION_TEMPLATE.md
4. Complete every checkbox in:
   source-verification/SOURCE_VERIFICATION_MASTER_CHECKLIST.md
5. For EACH product complete all protocol sections:
   identity, architecture, Apple frameworks, third-party deps, data/privacy,
   features, monetization, AI, documents/OCR, quality, security scan,
   screenshot inventory, claim matrix, SHOWCASE_INPUT_PACKAGE.
6. Re-run a secret scan on both trees before finishing.
7. Commit verification Markdown into swiftwithfer-portfolio only if the owner wants
   reports stored there — never commit commercial app source into that repo.

OUTPUT REQUIRED BEFORE STOPPING:
- Both templates fully filled
- Master checklist completed
- SHOWCASE_INPUT_PACKAGE for AndroMetrics
- SHOWCASE_INPUT_PACKAGE for PreventivoRapido PRO
- Explicit statement: no showcase repos created; no live app changes; no secrets copied

STOP after verification reports are complete. Do not create GitHub showcase
repositories, do not publish READMEs, do not change visibility of other repos.
```

---

# Quality self-check (Phase 9 prep)

| Criterion | Result |
|-----------|--------|
| Protocol complete for one-pass local run | Yes |
| Invented source claims | None |
| Premature `SOURCE_VERIFIED` | None |
| Secrets in files | None |
| Product separation | Enforced |
| Showcase creation | Not started |
| Source trees analyzed this phase | **None** |

**Readiness for local execution:** READY (pending Mac access to both projects).  
**Quality target:** ≥ 99/100 for protocol completeness without overengineering.
