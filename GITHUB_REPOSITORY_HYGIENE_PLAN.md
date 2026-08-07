# Enterprise GitHub Portfolio — Phase 8  
## Public Repository Hygiene & Risk-Safe Cleanup Plan  
### Portfolio Scope Correction Gate

**Owner:** Fernando Piras  
**Profile:** https://github.com/FernandoPiras  
**Date:** 2026-08-07  
**Phase type:** AUDIT + DEPENDENCY CHECK + CLEANUP PLAN only  
**Live mutations in this phase:** **none**  
**PR:** #11 (Draft)

**Explicit non-actions:** no private/archive/rename/delete; no Pages URL changes; no App Store Connect edits; no showcase creation; no Source Verification; no app code changes.

---

# PERMANENT OWNER DECISION — PORTFOLIO PRODUCTS

**Only these products are approved for the public GitHub portfolio:**

1. **AndroMetrics**  
2. **PreventivoRapido PRO**

Any other product, prototype, future concept, or legal host for a non-portfolio product must remain **excluded** until the owner explicitly approves it in a future phase.

**“Not pinned” is not enough.** Public repositories still appear on the profile **Repositories** tab and compete for recruiter attention. Every public repo must answer:

> Is this necessary for AndroMetrics, PreventivoRapido PRO, the GitHub Profile README, or fernandopiras.com?

If **no** → target **PRIVATE_LATER** (or **ARCHIVE_AND_HIDE_LATER** when archive better matches GitHub constraints), after dependency clearance.

---

# 1. Executive Summary

### Binding public-product rule

Recruiters visiting `github.com/FernandoPiras` must understand only:

- **Fernando Piras** — iOS Software Developer  
- **Published portfolio products:** AndroMetrics, PreventivoRapido PRO  

**No** Slotiva, Turbo Run, other apps, prototypes, or future placeholders may compete as portfolio products.

### Current vs target

| Layer | Keep public (target) | Remove from public portfolio surface (target) |
|-------|----------------------|-----------------------------------------------|
| Profile / site infra | `FernandoPiras`, `swiftwithfer-portfolio` | — |
| Product infra | `andrometrics-legal`, `preventivorapido--legal` | — |
| Product showcases (future) | `andrometrics`, `preventivo-rapido` | — |
| Legacy Andro/Preventivo | — | `andrometrics-privacy`, `preventivorapido-support` |
| Out of portfolio | — | `Slotiva-Legal`, `turborun-privacy` |

### BLOCKING dependencies (must stay public until migrated)

| Host | Public evidence |
|------|-----------------|
| `andrometrics-legal` | AndroMetrics App Store privacy + support; site / `site.ts` |
| `preventivorapido--legal` | PreventivoRapido PRO App Store privacy + support + terms; site / `site.ts` |

### Temporary public only if dependency requires it

| Repo | Status |
|------|--------|
| `andrometrics-privacy` | **TEMPORARY_PUBLIC_DEPENDENCY** until Connect confirms unused → then **PRIVATE_LATER** / **ARCHIVE_AND_HIDE_LATER** |
| `preventivorapido-support` | Same |
| `Slotiva-Legal` | **OUT_OF_PORTFOLIO** + **TEMPORARY_PUBLIC_DEPENDENCY** until Connect cleared → **PRIVATE_LATER** |
| `turborun-privacy` | **OUT_OF_PORTFOLIO** + **TEMPORARY_PUBLIC_DEPENDENCY** until store/AdMob cleared → **PRIVATE_LATER** |

Email fix on Turbo Run is **not** the end state — only a possible interim if it must stay public briefly.

**This correction gate applies no live changes.**

**Evidence sources:** GitHub REST/Pages, App Store HTML (AndroMetrics / PreventivoRapido PRO), iTunes Search/Lookup, fernandopiras.com, `src/config/site.ts`, Profile README, Slotiva README, Turbo Run Pages HTML. App Store Connect console fields unread → **UNKNOWN_DEPENDENCY** where noted.

---

# 2. Repository Inventory

### Portfolio scope values

`CORE_PRODUCT` · `CORE_INFRASTRUCTURE` · `PERSONAL_INFRASTRUCTURE` · `LEGACY` · `OUT_OF_PORTFOLIO`

| Repository | Visibility now | Empty / broken? | Pages | Portfolio Scope | Classification | Target Public Visibility | Temporary Dependency? |
|------------|----------------|-----------------|-------|-----------------|----------------|--------------------------|------------------------|
| `FernandoPiras` | public | no | no | **PERSONAL_INFRASTRUCTURE** | ACTIVE_REQUIRED | **KEEP PUBLIC** | no |
| `swiftwithfer-portfolio` | public | no | no | **PERSONAL_INFRASTRUCTURE** | ACTIVE_REQUIRED (site source; **not a product**) | **KEEP PUBLIC** · **DO NOT PIN** | no |
| `andrometrics-legal` | public | no | live 200 | **CORE_INFRASTRUCTURE** | ACTIVE_REQUIRED | **KEEP PUBLIC** | no (permanent infra) |
| `preventivorapido--legal` | public | no | live 200 | **CORE_INFRASTRUCTURE** | ACTIVE_REQUIRED | **KEEP PUBLIC** · **do not rename now** | no (permanent infra) |
| `andrometrics` | **missing** | — | — | **CORE_PRODUCT** (future showcase) | not created | **KEEP PUBLIC** when created | — |
| `preventivo-rapido` | **missing** | — | — | **CORE_PRODUCT** (future showcase) | not created | **KEEP PUBLIC** when created | — |
| `andrometrics-privacy` | public | empty `main`; Pages **404** | broken | **LEGACY** | BROKEN + UNKNOWN Connect | **PRIVATE_LATER** / **ARCHIVE_AND_HIDE_LATER** | **TEMPORARY_PUBLIC_DEPENDENCY** until Connect cleared |
| `preventivorapido-support` | public | empty; no Pages | none | **LEGACY** | EMPTY + UNKNOWN Connect | **PRIVATE_LATER** / **ARCHIVE_AND_HIDE_LATER** | **TEMPORARY_PUBLIC_DEPENDENCY** until Connect cleared |
| `Slotiva-Legal` | public | no | live 200 | **OUT_OF_PORTFOLIO** | UNKNOWN Connect; not a portfolio product | **PRIVATE_LATER** (hide from public profile) | **TEMPORARY_PUBLIC_DEPENDENCY** until Connect cleared |
| `turborun-privacy` | public | no | live 200 | **OUT_OF_PORTFOLIO** | UNKNOWN store/AdMob; personal Gmail on page | **PRIVATE_LATER** | **TEMPORARY_PUBLIC_DEPENDENCY** until consoles cleared |

**Metadata notes (unchanged facts):** no custom domains on Pages (`cname: null`). Profile repo = README only. Portfolio About fields match Phase 7.

---

# 3. Dependency Map

| Source | Destination | Criticality | Notes |
|--------|-------------|-------------|-------|
| App Store AndroMetrics | `…/andrometrics-legal/privacy.html` | **BLOCKING** | Keep infra public |
| App Store AndroMetrics | `…/andrometrics-legal/support.html` | **BLOCKING** | Keep infra public |
| App Store PreventivoRapido PRO | `…/preventivorapido--legal/privacy.html` | **BLOCKING** | Keep infra public |
| App Store PreventivoRapido PRO | `…/preventivorapido--legal/support.html` | **BLOCKING** | Keep infra public |
| App Store PreventivoRapido PRO | `…/preventivorapido--legal/terms.html` | **BLOCKING** | Keep infra public |
| fernandopiras.com / `site.ts` | `…/andrometrics-legal/` | **IMPORTANT** | Product site link |
| fernandopiras.com / `site.ts` | `…/preventivorapido--legal/` | **IMPORTANT** | Product site link |
| Profile README | Slotiva / Turbo Run / legacy repos | **NONE** | Correctly omitted |
| Public App Store HTML | `andrometrics-privacy` | **NONE** found | Connect still **UNKNOWN** |
| Public App Store HTML | `preventivorapido-support` | **NONE** found | Connect still **UNKNOWN** |
| Slotiva-Legal README | Claims Connect privacy/support/terms | **UNKNOWN** | Not found as public App Store app; `slotiva.it` 404 |
| Turbo Run Pages | Possible store/AdMob privacy URL | **UNKNOWN** | Not found as Fernando Piras App Store app in Search |

**Rule:** No private/archive while **BLOCKING** or uncleared **TEMPORARY_PUBLIC_DEPENDENCY** remains.

---

# 4. AndroMetrics Analysis

### `andrometrics-legal` — CORE_INFRASTRUCTURE

| Field | Value |
|-------|--------|
| Portfolio Scope | **CORE_INFRASTRUCTURE** |
| Target visibility | **KEEP PUBLIC** |
| Role | App Store + site legal/support host for AndroMetrics |
| Recommendation | **KEEP** |
| Pin / feature | Never as “product”; infra only |

### `andrometrics-privacy` — LEGACY

| Field | Value |
|-------|--------|
| Portfolio Scope | **LEGACY** |
| Live issue | Empty `main`; Pages HTTP **404** (content deleted 2026-01-24) |
| Public store/site refs | **None found** |
| Target visibility | **PRIVATE_LATER** / **ARCHIVE_AND_HIDE_LATER** |
| Temporary flag | **TEMPORARY_PUBLIC_DEPENDENCY** until Connect confirms no leftover URL |
| Redirect page | **Not recommended** unless a real technical need appears after Connect review |
| Delete | **DELETE_NOT_RECOMMENDED** |

---

# 5. PreventivoRapido Analysis

### `preventivorapido--legal` — CORE_INFRASTRUCTURE

| Field | Value |
|-------|--------|
| Portfolio Scope | **CORE_INFRASTRUCTURE** |
| Target visibility | **KEEP PUBLIC** |
| Rename now | **No** — App Store + site use the `--` Pages path; Pages does **not** keep old path on rename |
| Future rename | Only after new URLs live + Connect + site updated + verification |
| Recommendation | **KEEP**; ugly name accepted as infra cost for now |

### `preventivorapido-support` — LEGACY / EMPTY

| Field | Value |
|-------|--------|
| Portfolio Scope | **LEGACY** |
| Live issue | Completely empty; no Pages |
| Store support URL | Served from `--legal/support.html` (public HTML) |
| Target visibility | **PRIVATE_LATER** / **ARCHIVE_AND_HIDE_LATER** |
| Temporary flag | **TEMPORARY_PUBLIC_DEPENDENCY** until Connect confirms unused |

---

# 6. Turbo Run Analysis — OUT_OF_PORTFOLIO

| Field | Value |
|-------|--------|
| Portfolio Scope | **OUT_OF_PORTFOLIO** |
| Target visibility | **PRIVATE_LATER** (must leave public portfolio surface) |
| Temporary flag | **TEMPORARY_PUBLIC_DEPENDENCY** until store/AdMob/privacy URL clearance |
| Final goal | **Not visible** on public GitHub portfolio surface |
| Email swap to `fernando@fernandopiras.com` | Optional **interim only** if repo must stay public briefly — **not** the end state |
| Pin / feature / README mention | **Forbidden** |
| Public App Store listing (Search) | Not found under Fernando Piras as “Turbo Run” |

**Recommendation:** Verify consoles → then **PRIVATE_LATER**. Do not treat email polish as success.

---

# 7. Slotiva Analysis — OUT_OF_PORTFOLIO

| Field | Value |
|-------|--------|
| Portfolio Scope | **OUT_OF_PORTFOLIO** |
| Target visibility | **PRIVATE_LATER** (or equivalent hide-from-profile outcome) |
| Temporary flag | **TEMPORARY_PUBLIC_DEPENDENCY** until App Store Connect dependency verified/cleared |
| Final goal | **Must not** remain on the public portfolio surface |
| Pin / feature / README / “active product” framing | **Forbidden** |
| Keep public for aesthetics/history | **No** |
| Public App Store “Slotiva” | Not found; `www.slotiva.it` → 404; README still claims Connect URLs |

**Recommendation:** Owner confirms Connect → then **PRIVATE_LATER**. Until then: temporary public dependency only, never portfolio product.

---

# 8. Portfolio Repo Analysis (`swiftwithfer-portfolio`)

| Field | Value |
|-------|--------|
| Portfolio Scope | **PERSONAL_INFRASTRUCTURE** |
| Target visibility | **KEEP PUBLIC** |
| Product? | **No** — source for fernandopiras.com |
| Pin | **DO NOT PIN** |
| Description / homepage | Phase 7 values — correct |
| Refactor / report declutter | Deferred; not required for scope correction |

---

# 9. Profile Repo Analysis (`FernandoPiras/FernandoPiras`)

| Field | Value |
|-------|--------|
| Portfolio Scope | **PERSONAL_INFRASTRUCTURE** |
| Target visibility | **KEEP PUBLIC** |
| Contents | Approved README only |
| Topics | none |
| Pin | **DO NOT PIN** |
| Metadata additions | None required |

---

# 10. Risk Matrix

| Repository | Problem | Recruiter impact | Technical impact | Dependencies | Portfolio Scope | Target Public Visibility | Temporary Dependency | Removal Prerequisite | Change risk | Recommendation | Order | Owner approval | Safe now / defer |
|------------|---------|------------------|------------------|--------------|-----------------|--------------------------|----------------------|----------------------|-------------|----------------|-------|----------------|------------------|
| `andrometrics-legal` | Infra, no description | Low | Store breaks if removed | BLOCKING | CORE_INFRASTRUCTURE | KEEP PUBLIC | no | — | High if hidden | KEEP | — | for optional description | Description optional later |
| `preventivorapido--legal` | `--` name | Medium cosmetic | Store breaks if renamed now | BLOCKING | CORE_INFRASTRUCTURE | KEEP PUBLIC | no | Migration plan before rename | **High** rename | KEEP; no rename now | — | for rename | Defer rename |
| `andrometrics-privacy` | 404 / empty | High noise | Low if unused | Connect UNKNOWN | LEGACY | PRIVATE_LATER / ARCHIVE_AND_HIDE_LATER | **YES** | Connect: no leftover URL | Medium | Hide after confirm | 2 | **Required** | Defer |
| `preventivorapido-support` | Empty public | High noise | Low if unused | Connect UNKNOWN | LEGACY | PRIVATE_LATER / ARCHIVE_AND_HIDE_LATER | **YES** | Connect: no leftover URL | Medium | Hide after confirm | 2 | **Required** | Defer |
| `Slotiva-Legal` | Non-portfolio product host | **High** (false product signal) | Compliance if Connect live | Connect UNKNOWN | OUT_OF_PORTFOLIO | PRIVATE_LATER | **YES** | Connect cleared or URLs migrated | High if early | Remove from public surface | 1 | **Required** | Defer |
| `turborun-privacy` | Non-portfolio + personal Gmail | **High** | Low if unused | Store/AdMob UNKNOWN | OUT_OF_PORTFOLIO | PRIVATE_LATER | **YES** | Consoles cleared | Medium | Remove from public surface | 1 | **Required** | Email interim optional only |
| `swiftwithfer-portfolio` | Not a product | Low if unpinned | Site source | Site deploy | PERSONAL_INFRASTRUCTURE | KEEP PUBLIC | no | — | — | KEEP; never pin | — | — | OK |
| `FernandoPiras` | — | — | Profile README | — | PERSONAL_INFRASTRUCTURE | KEEP PUBLIC | no | — | — | KEEP; never pin | — | — | OK |
| `andrometrics` / `preventivo-rapido` | Missing | Missing proof depth | — | Future evidence gates | CORE_PRODUCT | KEEP PUBLIC when created | — | Evidence/showcase gates | — | Create later | later | Yes | Deferred |

---

# 11. Safe Cleanup Candidates

*(Future apply gate only — **not** executed now.)*

| ID | Action | Fits final goal? | Notes |
|----|--------|------------------|-------|
| S1 | Turbo Run email → professional | **Interim only** | Allowed if still TEMPORARY_PUBLIC; does **not** replace PRIVATE_LATER |
| S2 | Neutral descriptions on **CORE_INFRASTRUCTURE** hosts | Optional | Does not change visibility |
| S3 | Redirect on `andrometrics-privacy` | **Avoid** unless technical need | Prefer hide after Connect clear |

**Not safe now:** private/archive/rename/delete of any TEMPORARY_PUBLIC_DEPENDENCY or BLOCKING infra; Pages URL changes; Connect edits from this agent.

---

# 12. Deferred Cleanup (visibility / structure)

**Priority A — OUT_OF_PORTFOLIO off public surface**

1. `Slotiva-Legal` → PRIVATE_LATER after Connect check  
2. `turborun-privacy` → PRIVATE_LATER after store/AdMob check (email interim optional)

**Priority B — LEGACY Andro/Preventivo off public surface**

3. `andrometrics-privacy` → PRIVATE_LATER / ARCHIVE_AND_HIDE_LATER after Connect check  
4. `preventivorapido-support` → PRIVATE_LATER / ARCHIVE_AND_HIDE_LATER after Connect check  

**Priority C — later product surface**

5. Create/approve showcases `andrometrics`, `preventivo-rapido`  
6. Optional rename migration for `preventivorapido--legal`  
7. Source Verification (separate phase)  

---

# 13. Required Owner Decisions

Record answers before any hide gate:

1. **Connect — AndroMetrics:** any URL to `andrometrics-privacy`?  
2. **Connect — PreventivoRapido PRO:** any URL to `preventivorapido-support`?  
3. **Connect — Slotiva:** still using `Slotiva-Legal` Pages URLs? App status (live / review / abandoned)?  
4. **Turbo Run:** any store or AdMob/privacy console still requiring `turborun-privacy` Pages URL?  
5. Confirm permanence of: **only AndroMetrics + PreventivoRapido PRO** as portfolio products.  
6. Approve future apply order: hide OUT_OF_PORTFOLIO first, then LEGACY, after checks?

---

# 14. Recommended Execution Order

1. **Dependency verification** — owner answers §13.  
2. **Non-breaking interim** — only if needed (e.g. Turbo email while still temporary public).  
3. **Remove OUT_OF_PORTFOLIO from public surface** — Slotiva, Turbo Run → PRIVATE_LATER (or archive-and-hide if chosen).  
4. **Remove LEGACY** — `andrometrics-privacy`, `preventivorapido-support` after Connect clear.  
5. **URL migration planning** — only if Preventivo rename/custom domain desired.  
6. **Rename** — only after dual-URL period + Connect/site updates.  
7. **Store URL updates** — Connect + site lockstep when migrating.  
8. **Post-change verification** — App Store HTML + site + profile Repositories tab.  
9. **Showcase creation** — `andrometrics`, `preventivo-rapido` when evidence gates pass.  
10. **Final profile audit** — recruiter view shows only the two products + infra.

---

# 15. Final Readiness Score

| Dimension | Score | Notes |
|-----------|------:|-------|
| Portfolio scope clarity | 99 | Two products only; OUT_OF_PORTFOLIO explicit |
| Dependency safety | 96 | BLOCKING infra protected; Connect UNKNOWN flagged |
| Recruiter-view alignment | 97 | Target surface defined |
| Actionability | 94 | Hide order clear; awaits owner Connect answers |
| Non-destruction this phase | 100 | No live mutations |
| **Correction-gate readiness** | **97** | Plan corrected; apply still blocked on §13 |

---

# FINAL TARGET PUBLIC SURFACE

```
FernandoPiras/
├── FernandoPiras
├── swiftwithfer-portfolio
├── andrometrics
├── andrometrics-legal
├── preventivo-rapido
└── preventivorapido--legal
```

**Roles (authoritative):**

| Path | Scope |
|------|--------|
| `FernandoPiras` | PERSONAL_INFRASTRUCTURE — Profile README — DO NOT PIN |
| `swiftwithfer-portfolio` | PERSONAL_INFRASTRUCTURE — site source — DO NOT PIN · not a product |
| `andrometrics` | CORE_PRODUCT showcase (future) |
| `andrometrics-legal` | CORE_INFRASTRUCTURE |
| `preventivo-rapido` | CORE_PRODUCT showcase (future) |
| `preventivorapido--legal` | CORE_INFRASTRUCTURE |

**Not part of final public surface:**

- `andrometrics-privacy` — LEGACY  
- `preventivorapido-support` — LEGACY  
- `Slotiva-Legal` — OUT_OF_PORTFOLIO  
- `turborun-privacy` — OUT_OF_PORTFOLIO  

**Removal happens only after dependency clearance** (App Store Connect / store / AdMob as applicable). Until then each of the four may remain only as **TEMPORARY_PUBLIC_DEPENDENCY**.

**No** Slotiva. **No** Turbo Run. **No** obsolete privacy/support leftovers on the final public portfolio surface. **No** other portfolio products.

### Recruiter view target

| Signal | Required |
|--------|----------|
| Name / role | Fernando Piras · iOS Software Developer |
| Products | AndroMetrics, PreventivoRapido PRO only |
| Other product brands in Repositories | **None** (after removal gates) |
| Temporary exceptions | Documented only as **TEMPORARY_PUBLIC_DEPENDENCY** with a removal prerequisite |

---

## Strategy classification summary

| Strategy bucket | Repositories |
|-----------------|--------------|
| **PRODUCT SHOWCASE** (`CORE_PRODUCT`) | `andrometrics`, `preventivo-rapido` (future) — AndroMetrics, PreventivoRapido PRO only |
| **PRODUCT INFRASTRUCTURE** (`CORE_INFRASTRUCTURE`) | `andrometrics-legal`, `preventivorapido--legal` |
| **PERSONAL PORTFOLIO INFRASTRUCTURE** | `FernandoPiras`, `swiftwithfer-portfolio` |
| **LEGACY TO REMOVE FROM PUBLIC SURFACE** | `andrometrics-privacy`, `preventivorapido-support` |
| **OUT OF PORTFOLIO TO REMOVE FROM PUBLIC SURFACE** | `Slotiva-Legal`, `turborun-privacy` |

---

## Non-actions confirmation

- No private  
- No archive  
- No rename  
- No delete  
- No Pages changes  
- No App Store Connect changes  
- No showcase creation  
- No Source Verification  
- Document + PR #11 Draft only  

---

# FINAL PHASE 8 STATUS

**PLAN:** APPROVED  

**PORTFOLIO PRODUCTS:**  
- AndroMetrics  
- PreventivoRapido PRO  

**LIVE CHANGES:** NONE  

**CURRENT TEMPORARY PUBLIC DEPENDENCIES:**  
- `andrometrics-privacy`  
- `preventivorapido-support`  
- `Slotiva-Legal`  
- `turborun-privacy`  

**FINAL REMOVAL TARGET:**  
All four above leave the public repository surface after dependency clearance.  

**MERGE READINESS:** READY — `mergeable = true`, changed files = 1 (`GITHUB_REPOSITORY_HYGIENE_PLAN.md`), base `main`, PR remains Draft until merge gate.  
