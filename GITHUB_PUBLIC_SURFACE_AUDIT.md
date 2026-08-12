# Enterprise GitHub Portfolio — Phase 7  
## GitHub Profile Metadata & Public Surface Audit

**Profile:** https://github.com/FernandoPiras  
**Special repository:** https://github.com/FernandoPiras/FernandoPiras  
**Audit date:** 2026-08-07  
**Approval / correction gates:** 2026-08-07 (PR #10)  
**Authoritative state:** **CURRENT VERIFIED STATE** / **FINAL VERIFIED STATE** (end of document)  
**PR #10:** Draft · Open · base `main` · mergeable (no conflicts) · functional diff = this file only  

**Scope:** Public metadata, repository surface, pins, trust, recruiter readability  
**Out of scope:** visibility/archive/rename, showcase creation, Source Verification, app changes, Profile README edits, avatar auto-upload, Phase 8  

**Status vocabulary:** `APPLIED_AND_VERIFIED` · `MANUAL_ACTION_REQUIRED` · `ALREADY_CORRECT` · `DEFERRED`  

Statuses describe **live public values vs approved targets**. Cursor GitHub App profile/About writes return **403** and are never narrated as agent applies.

**Evidence:** GitHub public REST/GraphQL APIs, profile/repo pages, approved Profile README, fernandopiras.com, legal Pages hosts, Phase 1 / profile content rules.

---

# INITIAL AUDIT STATE

*(Historical snapshot at Phase 7 audit start. Not authoritative for live decisions.)*

| Field / asset | Value at audit start |
|---------------|----------------------|
| Name | empty (`null`) |
| Bio | empty (`null`) |
| Website / blog | empty |
| Location | empty (`null`) |
| Company | empty (`null`) |
| Public email | hidden (`null`) |
| Social links | none |
| Avatar | Default GitHub identicon |
| Pins | 0 |
| `FernandoPiras` description / topics | none / `[]` |
| `swiftwithfer-portfolio` description | empty (`null`) |
| `swiftwithfer-portfolio` homepage | `https://swiftwithfer-portfolio.vercel.app` |
| Profile README | Approved content already live |
| Public repo set | 8 repos (legal/privacy/empty/site/profile); no product showcases |

---

# CURRENT VERIFIED STATE

**Live re-verify:** 2026-08-07 (public API). **This section is authoritative** for all tables below unless a row is explicitly labeled historical.

| Element | Approved target | Live value | Status |
|---------|-----------------|------------|--------|
| Name | `Fernando Piras` | `Fernando Piras` (len 14; no trailing space) | **APPLIED_AND_VERIFIED** |
| Bio | `iOS Software Developer · Swift · SwiftUI · Product Engineering` | exact match | **APPLIED_AND_VERIFIED** |
| Website | `https://www.fernandopiras.com` | `https://www.fernandopiras.com/` (equivalent) | **APPLIED_AND_VERIFIED** |
| Location | `Bologna, Italy` | exact match | **APPLIED_AND_VERIFIED** |
| Company | empty | `null` | **ALREADY_CORRECT** |
| Public email | hidden | `null` | **ALREADY_CORRECT** |
| Social links | empty | `[]` | **ALREADY_CORRECT** |
| Avatar | unchanged this pass | default identicon | **DEFERRED** |
| Pins | 0 | 0 | **ALREADY_CORRECT** |
| `FernandoPiras` README | unchanged | approved content live | **ALREADY_CORRECT** |
| `FernandoPiras` topics | do not add | `[]` | **ALREADY_CORRECT** |
| `FernandoPiras` description | unchanged | `null` | **ALREADY_CORRECT** |
| `FernandoPiras` pin | do not pin | not pinned | **ALREADY_CORRECT** |
| `swiftwithfer-portfolio` description | `Source for the fernandopiras.com personal site` | exact match | **APPLIED_AND_VERIFIED** |
| `swiftwithfer-portfolio` homepage | `https://www.fernandopiras.com` | exact match | **APPLIED_AND_VERIFIED** |
| `swiftwithfer-portfolio` pin | do not pin | not pinned | **ALREADY_CORRECT** |

**MANUAL_ACTION_REQUIRED:** none at this re-verify.

---

# 1. Executive Summary

| Area | CURRENT VERIFIED STATE | Action |
|------|------------------------|--------|
| Profile README | Live, approved | Keep |
| Name / Bio / Website / Location | All match targets | Keep |
| Company / email / socials | Empty / hidden / empty | Keep |
| Avatar | Identicon | **DEFERRED** |
| Pins | 0 | Keep until showcases exist |
| `swiftwithfer-portfolio` About | Description + homepage match targets | Keep |
| Legal/privacy/empty repos | Still public; can confuse recruiters | **DEFERRED** cleanup |
| Product showcases | Not created | **DEFERRED** |

**Verdict:** Approved safe metadata targets are live. Remaining portfolio noise (legal/empty/other non-approved products/other non-approved products, identicon, missing showcases) is deferred. No Phase 8 started. PR #10 stays Draft.

---

# 2. Profile Metadata Audit

| Field | CURRENT VERIFIED STATE | Status | Notes |
|-------|------------------------|--------|-------|
| Username | `FernandoPiras` | **ALREADY_CORRECT** | Stable |
| Name | `Fernando Piras` | **APPLIED_AND_VERIFIED** | Exact; no trailing space |
| Bio | `iOS Software Developer · Swift · SwiftUI · Product Engineering` | **APPLIED_AND_VERIFIED** | Locked positioning |
| Location | `Bologna, Italy` | **APPLIED_AND_VERIFIED** | Owner-approved preference |
| Website / blog | `https://www.fernandopiras.com/` | **APPLIED_AND_VERIFIED** | Prefer www |
| Company | empty | **ALREADY_CORRECT** | No company entity to invent |
| Public email | hidden | **ALREADY_CORRECT** | Contact via README |
| Social links | none | **ALREADY_CORRECT** | No verified LinkedIn URL |
| Twitter/X | none | **ALREADY_CORRECT** | — |
| Hireable | unset | **ALREADY_CORRECT** | Optional later |
| Avatar | Default identicon | **DEFERRED** | Future portrait |
| Profile README | Live via `FernandoPiras/FernandoPiras` | **ALREADY_CORRECT** | Unchanged this pass |
| Followers / following | 0 / 0 | **ALREADY_CORRECT** | Not a quality gate |

---

# 3. Bio Recommendation

**GitHub bio limit:** 160 characters.  
**Locked / live bio:**

```text
iOS Software Developer · Swift · SwiftUI · Product Engineering
```

Status: **APPLIED_AND_VERIFIED** (matches README hero; 62 characters).

---

# 4. Website & Contact Audit

| Item | CURRENT VERIFIED STATE | Status |
|------|------------------------|--------|
| Profile Website | `https://www.fernandopiras.com/` | **APPLIED_AND_VERIFIED** |
| README hero CTA | Website only | **ALREADY_CORRECT** |
| README Contact | App Store developer + `fernando@fernandopiras.com` | **ALREADY_CORRECT** |
| Public email field | Hidden | **ALREADY_CORRECT** |
| Social links | None | **ALREADY_CORRECT** |
| Duplicate CTAs | None in README | **ALREADY_CORRECT** |

---

# 5. Location Recommendation

**Live / approved:** `Bologna, Italy` — **APPLIED_AND_VERIFIED**.

Rationale (unchanged): city-level recruiting signal without street-level precision. Alternative `Italy` was acceptable; owner chose Bologna.

---

# 6. Avatar Audit

| Criterion | CURRENT VERIFIED STATE |
|-----------|------------------------|
| Asset | Default GitHub identicon |
| Professionalism | Low vs recruiter bar |
| Coherence with fernandopiras.com | Poor (site has professional portrait) |
| Classification | **DEFERRED** (future improvement; no auto-upload this pass) |

---

# 7. Public Repository Inventory

Pinned count: **0**. Public repositories: **8**.

| Repository | Visibility | Description (live) | Topics | Homepage (live) | Action class |
|------------|------------|--------------------|--------|-----------------|--------------|
| `FernandoPiras` | Public | *(none — intentional)* | none | none | **KEEP PUBLIC**; do not pin; do not add topics this pass |
| `swiftwithfer-portfolio` | Public | `Source for the fernandopiras.com personal site` | none | `https://www.fernandopiras.com` | **KEEP PUBLIC**; do not pin |
| `andrometrics-legal` | Public | *(none)* | none | Pages live | **KEEP PUBLIC**; do not pin; metadata **DEFERRED** |
| `legacy-andrometrics-privacy` | Public | *(none)* | none | Pages 404 | **DEFERRED** cleanup |
| `preventivorapido--legal` | Public | *(none)* | none | Pages live | **KEEP PUBLIC** for now; rename **DEFERRED** |
| `legacy-preventivorapido-support` | Public | *(none)* | none | empty repo | **DEFERRED** private/archive |
| `legacy-out-of-portfolio-legal` | Public | *(none)* | none | Pages live | **DEFERRED** portfolio cleanup; do not pin |
| `legacy-out-of-portfolio-privacy` | Public | *(none)* | none | Pages live; personal Gmail on page | **DEFERRED** cleanup; do not pin |

**Missing (deferred):** `andrometrics`, `preventivo-rapido` showcases.

---

# 8. Repository Cleanup Recommendations

Recommendations only — **not executed** this pass:

1. `legacy-preventivorapido-support` — empty → private/archive after URL check  
2. `legacy-andrometrics-privacy` — broken Pages → private/archive after URL check  
3. `preventivorapido--legal` — plan rename + App Store URL migration  
4. `legacy-out-of-portfolio-privacy` — replace personal Gmail; reduce portfolio visibility if unused  
5. `legacy-out-of-portfolio-legal` — keep only while store-required; never pin/feature  
6. `swiftwithfer-portfolio` — About already matches targets (**APPLIED_AND_VERIFIED**)  
7. `FernandoPiras` — description optional; left unchanged (**ALREADY_CORRECT**)

---

# 9. Repository Description Standard

**Rules:** one factual line; ~50–90 characters; no slogans/emoji; English for portfolio-facing About fields.

| Repository | Live description | Status |
|------------|------------------|--------|
| `FernandoPiras` | *(none)* | **ALREADY_CORRECT** (no change this pass) |
| `swiftwithfer-portfolio` | `Source for the fernandopiras.com personal site` | **APPLIED_AND_VERIFIED** |
| Legal / privacy / empty | mostly empty | **DEFERRED** |

Homepage live for portfolio: `https://www.fernandopiras.com` — **APPLIED_AND_VERIFIED**.

---

# 10. Topics Standard

Allowed vocabulary when used later: `ios`, `swift`, `swiftui`, `mobile-development`, `app-store`, `product-engineering` (3–6 max).

| Repository | Topics now | Decision this pass |
|------------|------------|--------------------|
| `FernandoPiras` | none | **Do not add** — **ALREADY_CORRECT** |
| `swiftwithfer-portfolio` | none | Leave none |
| Legal/privacy | none | Leave none |
| Future showcases | n/a | **DEFERRED** |

---

# 11. Pin Strategy

| Rule | CURRENT VERIFIED STATE |
|------|------------------------|
| Do not pin profile repo | Compliant |
| Do not pin portfolio site repo | Compliant |
| Do not pin legal/empty repos | Compliant |
| Pin only future showcases | Blocked — repos do not exist |

**Pins = 0** — **ALREADY_CORRECT**. Prefer zero pins over weak pins.

---

# 12. Legal / Support Repository Strategy

| Repository | Keep public? | Pin? | Status |
|------------|--------------|------|--------|
| `andrometrics-legal` | Yes (compliance) | No | Keep; metadata **DEFERRED** |
| `preventivorapido--legal` | Yes for now | No | Rename **DEFERRED** |
| `legacy-andrometrics-privacy` | Prefer no once unused | No | **DEFERRED** |
| `legacy-preventivorapido-support` | Prefer no (empty) | No | **DEFERRED** |
| `legacy-out-of-portfolio-legal` | Only if required | No | **DEFERRED** |
| `legacy-out-of-portfolio-privacy` | Only if required | No | **DEFERRED** |

---

# 13. Recruiter 5 / 15 / 30 Second Audit

| Window | CURRENT VERIFIED STATE |
|--------|------------------------|
| 5s | Name + bio + website sidebar present; README reinforces role; identicon still weak |
| 15s | AndroMetrics + PreventivoRapido PRO clear in README; website CTA works |
| 30s | Contact OK; repo list still noisy (legal/empty/other non-approved products/other non-approved products); pins correctly empty |

**Distractors remaining:** identicon; legal/empty/unrelated repos in the public list.

---

# 14. Mobile Audit

| Check | CURRENT VERIFIED STATE |
|-------|------------------------|
| Bio length | Short; live | Good |
| README | Lists/paragraphs; no fragile tables | Good |
| Sidebar metadata | Name/Bio/Website/Location filled | Good |
| CTA | Website + Contact | Good |
| Avatar | Identicon | **DEFERRED** |

---

# 15. Public Trust Risks

| Risk | Present? | Status |
|------|----------|--------|
| Placeholder Profile README | No | OK |
| Empty public repo (`legacy-preventivorapido-support`) | Yes | **DEFERRED** |
| Broken Pages (`legacy-andrometrics-privacy`) | Yes | **DEFERRED** |
| Double-hyphen name | Yes | **DEFERRED** |
| other non-approved products on public surface | Yes | **DEFERRED** |
| Personal Gmail on other non-approved products page | Yes | **DEFERRED** |
| Weak pins / missing-showcase pins | No | OK |
| Source Verification claimed complete | No | OK |

---

# 16. Approved Safe Targets (locked)

### Profile

| Field | Target |
|-------|--------|
| Name | `Fernando Piras` |
| Bio | `iOS Software Developer · Swift · SwiftUI · Product Engineering` |
| Website | `https://www.fernandopiras.com` |
| Location | `Bologna, Italy` |
| Company | empty |
| Public email | hidden |
| Social links | empty |
| Avatar | unchanged this pass |

### Repositories

| Repository | Description | Homepage | Topics | Pin |
|------------|-------------|----------|--------|-----|
| `FernandoPiras` | unchanged | unchanged | do not add | do not pin |
| `swiftwithfer-portfolio` | `Source for the fernandopiras.com personal site` | `https://www.fernandopiras.com` | unchanged | do not pin |

### Pins

Keep **zero**.

---

# 17. Changes to Defer

- Avatar replacement  
- Showcase repos + pins  
- Legal/privacy empty-repo cleanup  
- other non-approved products cleanup  
- Renames / visibility / archives  
- Source Verification  
- Profile README edits  
- App / commercial source changes  

---

# 18. Target Public Profile Shape

```
https://github.com/FernandoPiras
├── Avatar ........ (deferred portrait)
├── Name .......... Fernando Piras          ← live
├── Bio ........... iOS · Swift · SwiftUI · Product Engineering  ← live
├── Location ...... Bologna, Italy          ← live
├── Website ....... https://www.fernandopiras.com  ← live
├── Company ....... (empty)
├── Public email .. hidden
├── Socials ....... (empty)
├── README ........ approved (unchanged)
├── Pins .......... (none until showcases)
└── Portfolio About  description + homepage live
```

---

# 19. Quality Score

| Dimension | CURRENT VERIFIED STATE | After deferred cleanups + showcases |
|-----------|------------------------:|------------------------------------:|
| Professionalism | 90 | 97 |
| Recruiter Readiness | 92 | 98 |
| ArtiProg Readiness | 93 | 98 |
| Clarity | 94 | 98 |
| Discoverability | 78 | 95 |
| Privacy | 90 | 95 |
| Consistency | 94 | 98 |
| Mobile Readability | 95 | 98 |
| Public Trust | 82 | 96 |
| Maintainability | 93 | 97 |
| **Overall** | **90** | **97** |

Remaining lift is mostly deferred trust cleanup + showcase pins — not invented here.

---

# Security note

During this Phase 7 gate, personal access tokens were pasted into the agent chat. Revoke any such tokens at https://github.com/settings/personal-access-tokens. Do not paste secrets into chat. This document stores **no** token values.

---

# FINAL VERIFIED STATE

**Live re-verify:** 2026-08-07 · public GitHub API  
**PR #10:** open · draft · base `main` · mergeable · no conflicts · only `GITHUB_PUBLIC_SURFACE_AUDIT.md`  
**Merge:** not executed  

## APPLIED_AND_VERIFIED

- Bio  
- Website  
- Location  
- Name (`Fernando Piras`, no trailing space)  
- `swiftwithfer-portfolio` description  
- `swiftwithfer-portfolio` homepage  

## MANUAL_ACTION_REQUIRED

- *(none at this re-verify)*  

## ALREADY_CORRECT

- Company empty  
- Public email hidden  
- Socials empty  
- Pins 0  
- `FernandoPiras/FernandoPiras` README unchanged  
- no topics on profile repo  
- profile repo not pinned  

## DEFERRED

- Avatar  
- legal/privacy cleanup  
- other non-approved products/other non-approved products cleanup  
- showcase repositories  
- Source Verification  
- visibility changes  
- archives  
- renames  

**Non-actions in force:** no Phase 8, no merge of PR #10 in this gate, no showcase creation, no Source Verification, no visibility/archive/rename, no Profile README edit, no app changes.
