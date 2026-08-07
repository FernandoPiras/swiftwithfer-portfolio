# Enterprise GitHub Portfolio — Phase 8  
## Public Repository Hygiene & Risk-Safe Cleanup Plan

**Owner:** Fernando Piras  
**Profile:** https://github.com/FernandoPiras  
**Date:** 2026-08-07  
**Phase type:** AUDIT + DEPENDENCY CHECK + CLEANUP PLAN only  
**Live mutations in this phase:** **none**  

**Explicit non-actions:** no private/archive/rename/delete; no Pages URL changes; no App Store Connect edits; no showcase creation; no Source Verification; no app code changes.

**Evidence sources:** GitHub REST (repo metadata, contents, Pages API), live HTTP probes of `*.github.io` hosts, App Store product HTML for AndroMetrics / PreventivoRapido PRO, iTunes Search/Lookup for developer apps, `fernandopiras.com` HTML, workspace `src/config/site.ts`, Profile README, Slotiva-Legal README, Turbo Run Pages HTML.

**Rule:** Unverified App Store Connect console fields that cannot be read from public surfaces are marked **UNKNOWN_DEPENDENCY**. No invented store links.

---

# 1. Executive Summary

The public GitHub account is dominated by **legal/privacy GitHub Pages hosts**, not product showcases. Two hosts are **App Store–blocking**:

| Host | App Store use (public HTML) |
|------|-----------------------------|
| `andrometrics-legal` | Privacy + Support for AndroMetrics |
| `preventivorapido--legal` | Privacy + Support + Terms for PreventivoRapido PRO |

Also referenced from **fernandopiras.com** / `site.ts` as product `websiteUrl` bases.

Highest recruiter-noise items with **no public App Store HTML dependency found**:

| Repository | Issue | Tentative class |
|------------|-------|-----------------|
| `andrometrics-privacy` | Pages **404**; empty `main`; superseded | **BROKEN** / likely hide later |
| `preventivorapido-support` | Empty repo; no Pages | **EMPTY** / likely hide later |
| `turborun-privacy` | Personal Gmail on live page; product not on public App Store listing for this developer | content fix later; visibility TBD |
| `Slotiva-Legal` | Live legal site; README claims Connect URLs; **not** in public App Store search for Slotiva under this developer; `slotiva.it` → 404 | keep public until Connect confirmed |

**This phase applies no changes.** Owner approval is required before any future mutation.

---

# 2. Repository Inventory

Classification key: `ACTIVE_REQUIRED` · `ACTIVE_OPTIONAL` · `LEGACY_BUT_REQUIRED` · `LEGACY_SAFE_TO_HIDE` · `BROKEN` · `EMPTY` · `UNKNOWN_DEPENDENCY`

| Repository | Visibility | Archived | Empty? | Default branch | Description | Topics | Homepage | Pages | Pages URL | Custom domain | Main files | README | Last meaningful push | Classification |
|------------|------------|----------|--------|----------------|-------------|--------|----------|-------|-----------|---------------|------------|--------|----------------------|----------------|
| `FernandoPiras` | public | no | no | `main` | none | none | none | no | — | — | `README.md` only | Profile README | 2026-08-07 | **ACTIVE_REQUIRED** |
| `swiftwithfer-portfolio` | public | no | no | `main` | `Source for the fernandopiras.com personal site` | none | `https://www.fernandopiras.com` | no | — | — | Next.js site + many audit MD reports + `public/` | yes | 2026-08-07 | **ACTIVE_REQUIRED** (site source; not a pin) |
| `andrometrics-legal` | public | no | no | `main` | none | none | none | **built** | `https://fernandopiras.github.io/andrometrics-legal/` | none | `index/privacy/support/terms/delete-account.html`, assets, css | no | 2026-07-18 | **ACTIVE_REQUIRED** |
| `andrometrics-privacy` | public | no | **yes** (contents `[]`; tree 404) | `main` | none | none | none | API says built; **HTTP 404** | `…/andrometrics-privacy/` | none | none on `main` (history: `index.html` deleted 2026-01-24) | no | 2026-01-24 | **BROKEN** (+ **UNKNOWN_DEPENDENCY** for Connect-only leftovers) |
| `preventivorapido--legal` | public | no | no | `main` | none | none | none | **built** | `https://fernandopiras.github.io/preventivorapido--legal/` | none | `index/privacy/support/terms.html`, assets, css | no | 2026-07-18 | **ACTIVE_REQUIRED** |
| `preventivorapido-support` | public | no | **yes** (size 0) | `main` | none | none | none | no | — | — | empty | no | 2026-05-16 (create only) | **EMPTY** (+ **UNKNOWN_DEPENDENCY** for Connect-only leftovers) |
| `Slotiva-Legal` | public | no | no | `main` | none | none | none | **built** | `https://fernandopiras.github.io/Slotiva-Legal/` | none | legal HTML + README + icon | yes (Connect URL table) | 2026-07-26 | **UNKNOWN_DEPENDENCY** / treat as **LEGACY_BUT_REQUIRED** until Connect cleared |
| `turborun-privacy` | public | no | no | `main` | none | none | none | **built** | `https://fernandopiras.github.io/turborun-privacy/` | none | `index.html` only | no | 2026-06-11 | **ACTIVE_OPTIONAL** or legacy host; **UNKNOWN_DEPENDENCY** for store/AdMob consoles |

**Redirects observed:** none special (standard Pages). No custom domains on any Pages site (`cname: null`).

---

# 3. Dependency Map

Criticality: `BLOCKING` · `IMPORTANT` · `LOW` · `NONE` · plus `UNKNOWN` when console-only.

| Source | Destination | Criticality | Evidence |
|--------|-------------|-------------|----------|
| App Store AndroMetrics (IT) | `…/andrometrics-legal/privacy.html` | **BLOCKING** | Product page HTML `privacyPolicyUrl` / privacy links |
| App Store AndroMetrics (IT) | `…/andrometrics-legal/support.html` | **BLOCKING** | Support URL actions on product page |
| App Store PreventivoRapido PRO (IT) | `…/preventivorapido--legal/privacy.html` | **BLOCKING** | Privacy policy on product page |
| App Store PreventivoRapido PRO (IT) | `…/preventivorapido--legal/support.html` | **BLOCKING** | Support URL |
| App Store PreventivoRapido PRO (IT) | `…/preventivorapido--legal/terms.html` | **BLOCKING** | Terms of Use on product page |
| `fernandopiras.com` + `src/config/site.ts` | `…/andrometrics-legal/` | **IMPORTANT** | Site HTML + `websiteUrl` |
| `fernandopiras.com` + `src/config/site.ts` | `…/preventivorapido--legal/` | **IMPORTANT** | Site HTML + `websiteUrl` |
| Profile README | legal github.io hosts | **NONE** | No github.io links in Profile README |
| Public App Store HTML | `andrometrics-privacy` | **NONE** found | No matches in AndroMetrics/Preventivo pages or site |
| Public App Store HTML | `preventivorapido-support` | **NONE** found | Support served from `--legal/support.html` |
| Slotiva-Legal README | claims App Store Connect privacy/support/terms | **UNKNOWN** | README asserts Connect use; Slotiva **not** found as public App Store app under this developer in Search; `www.slotiva.it` → **404** |
| Turbo Run Pages | personal Gmail contact | **LOW** (trust) | Live `index.html`; product **not** in iTunes Search as Fernando Piras app |
| Other public apps (NeFine, Wild Animal Explorer) | these github.io hosts | **NONE** found | Store HTML scrape found no `fernandopiras.github.io` links |

**Hard rule for future work:** do **not** rename, private, or archive any repo with **BLOCKING** dependencies until URLs are migrated and verified.

---

# 4. AndroMetrics Analysis

### `andrometrics-legal` (KEEP)

- Full legal site (privacy, support, terms, delete-account).  
- Contact email on pages: `fernando@fernandopiras.com` (professional).  
- **In use** by App Store + marketing site.  
- **Recommendation:** **KEEP** public. Optional later: neutral GitHub description (non-blocking).

### `andrometrics-privacy` (PRIVATE_LATER / ARCHIVE_LATER after Connect check)

- Created earlier than `andrometrics-legal`.  
- History shows `index.html` added then **deleted** (2026-01-24).  
- `main` has **no files**; Pages reports “built” but HTTP **404**.  
- No public App Store or site references found.  
- 404 is from **empty content**, not a misconfigured alternate domain.

| Question | Answer |
|----------|--------|
| Which repo is in use? | **`andrometrics-legal`** |
| Current policy URL? | `…/andrometrics-legal/privacy.html` |
| Is privacy repo obsolete? | **Likely yes** on public surfaces |
| Pages 404 cause? | Empty `main` after deleting `index.html` |

**Recommendation:** **PRIVATE_LATER** or **ARCHIVE_LATER** only after owner confirms App Store Connect has **no** leftover URL to `andrometrics-privacy`.  
**FIX** (optional, non-URL-change): publish a one-page redirect/notice to `andrometrics-legal` **at the same Pages path** — only if owner wants 404 gone without hiding the repo yet.  
**DELETE_NOT_RECOMMENDED.**

---

# 5. PreventivoRapido Analysis

### `preventivorapido--legal` (KEEP; rename only with migration)

- Double hyphen is unprofessional for recruiters but is the **live path** in App Store + site.  
- Pages URL = `https://fernandopiras.github.io/preventivorapido--legal/…`

**Rename mechanics (plan only — not executed):**

| Mechanism | Behavior |
|-----------|----------|
| GitHub **repository** rename | `github.com/.../old` typically redirects to new name |
| GitHub **Pages** path | Follows **new** repo name; **old** `github.io/.../preventivorapido--legal/` does **not** keep serving / does **not** reliably 301 to the new path |
| App Store | Stores absolute URLs → **breaks** unless Connect updated first or in lockstep |

**Safe future sequence (if rename desired):**

1. Owner confirms all Connect + in-app + marketing URLs.  
2. Stand up content at a **new** repo/Pages path (or custom domain) **without** deleting old.  
3. Update App Store Connect privacy/support/terms + `site.ts` / site.  
4. Verify App Store + site HTTP 200 on **new** URLs.  
5. Keep old Pages live as temporary mirror/redirect page if needed.  
6. Only then rename/private/archive old repo.  
7. Re-audit profile.

**Recommendation now:** **KEEP** public; **do not rename**.

### `preventivorapido-support` (PRIVATE_LATER)

- Completely **empty**; no Pages.  
- Support URL in store points to `--legal/support.html`, not this repo.  
- No public references found.

**Recommendation:** **PRIVATE_LATER** / **ARCHIVE_LATER** after Connect confirmation. **DELETE_NOT_RECOMMENDED.**

---

# 6. Turbo Run Analysis

| Check | Finding |
|-------|---------|
| Repo | `turborun-privacy` — single `index.html` privacy page |
| Pages | HTTP 200 |
| Contact on page | `fernandopiras95@gmail.com` (**personal / obsolete vs professional brand**) |
| Public App Store app under Fernando Piras | **Not found** in iTunes Search as “Turbo Run” |
| Ad/monetization mentions | Page mentions Google AdMob / IAP via Apple |

**Recommendation:**

- **Content-only future fix (safe candidate):** replace contact email with `fernando@fernandopiras.com` — **same URL**, no Pages path change.  
- Visibility private/archive: only after owner confirms no store/AdMob/console dependency (**UNKNOWN_DEPENDENCY**).  
- Do **not** feature or pin.

**No modifications in this phase.**

---

# 7. Slotiva Analysis

| Check | Finding |
|-------|---------|
| Pages | Live legal pack (privacy/terms/support/home) HTTP 200 |
| Contact | `fernando@fernandopiras.com` |
| README | Explicit App Store Connect URL mapping |
| Public App Store listing named Slotiva | **Not found** in Search for this developer |
| `www.slotiva.it` | **404** |
| Featured on GitHub profile README | No (correct) |

**Recruiter risk:** Medium — looks like another product brand in the repo list.  
**Compliance risk if Connect still points here:** High if privatized early.

**Recommendation:** Keep **public** until owner confirms Connect status → then either keep as silent compliance host (**LEGACY_BUT_REQUIRED**) or **PRIVATE_LATER**. Never pin/feature. **No auto-hide.**

---

# 8. Portfolio Repo Analysis (`swiftwithfer-portfolio`)

| Field | Live value | Status |
|-------|------------|--------|
| Visibility | public | OK for site source |
| Description | `Source for the fernandopiras.com personal site` | Matches Phase 7 |
| Homepage | `https://www.fernandopiras.com` | Matches Phase 7 |
| Pages | none | OK |
| Pin | not pinned | Correct |

**Surface notes (defer, do not refactor now):**

- Many root `*_REPORT.md` / audit markdown files are internal process artifacts visible publicly (recruiter noise, low technical risk).  
- `public/videos` ~11MB demos — acceptable for a marketing site; not a hygiene blocker.  
- Repo size reported large by GitHub (`~270k` KB units) — likely git history/assets; cleanup is **out of scope** for Phase 8.  
- Contains `github-profile/`, `showcase-template/`, Phase docs — fine as working repo; **must not be pinned**.

**Recommendation:** Keep public; no site refactor in this phase.

---

# 9. Profile Repo Analysis (`FernandoPiras/FernandoPiras`)

| Check | Result |
|-------|--------|
| README | Approved Profile README only |
| Extra files | **None** |
| Topics | **None** |
| Description | none (intentional) |
| Pin | **Not pinned** |
| Pages | none |

**Recommendation:** Keep minimal. No metadata additions required for hygiene.

---

# 10. Risk Matrix

| Repository | Problem | Recruiter impact | Technical impact | Dependencies | Change risk | Recommendation | Order | Owner approval | Safe now / defer |
|------------|---------|------------------|------------------|--------------|-------------|----------------|-------|----------------|------------------|
| `andrometrics-legal` | No GitHub description | Low | None | **BLOCKING** store + site | Low for description-only | KEEP; optional description | 2 | Yes for edits | Description = safe candidate; else defer |
| `andrometrics-privacy` | Empty + Pages 404 | High (broken) | Low if unused | NONE public; Connect **UNKNOWN** | Medium if private early | PRIVATE/ARCHIVE later after Connect check; optional redirect FIX | 3 | **Required** | Defer private; redirect content optional |
| `preventivorapido--legal` | `--` name | Medium | **Breaks store** if renamed naively | **BLOCKING** | **High** for rename | KEEP; migrate-then-rename later | 4 | **Required** | Defer rename |
| `preventivorapido-support` | Empty public repo | High | None found | NONE public; Connect **UNKNOWN** | Medium | PRIVATE/ARCHIVE later | 3 | **Required** | Defer |
| `Slotiva-Legal` | Non-portfolio brand in list | Medium | Compliance if Connect live | Connect **UNKNOWN** | High if private early | KEEP until confirmed | 5 | **Required** | Defer |
| `turborun-privacy` | Personal Gmail | Medium (trust) | Low | Console **UNKNOWN** | Low for email-only | Email content fix later | 2 | Yes | **Safe candidate** (content) |
| `swiftwithfer-portfolio` | Many internal MD reports | Low–Medium | None | Site deploy | Low | Keep; optional later doc hygiene | 6 | Yes | Defer |
| `FernandoPiras` | — | — | — | Profile README | — | KEEP | — | — | Already correct |

---

# 11. Safe Cleanup Candidates

*(Candidates for a **future** approval gate — **not applied** now.)*

| ID | Action | Why safe | Prerequisite |
|----|--------|----------|--------------|
| S1 | Turbo Run: replace `fernandopiras95@gmail.com` → `fernando@fernandopiras.com` on existing `index.html` | Same Pages URL; contact-only | Owner approval |
| S2 | Add neutral GitHub **descriptions** (no URL/visibility change) for legal hosts | Metadata only | Owner approval |
| S3 | Optional: add minimal redirect/notice page on `andrometrics-privacy` **at same path** pointing to `andrometrics-legal` | Fixes 404 without changing URL | Owner approval; still leave repo public |

**Not safe now (blocked or unverified):**

- Rename `preventivorapido--legal`  
- Private/archive/delete any repo with **UNKNOWN** Connect dependency  
- Changing Pages source path / custom domain cutover  
- Any App Store Connect URL edit from this agent (no console access)

---

# 12. Deferred Cleanup

- Private/archive `andrometrics-privacy`  
- Private/archive `preventivorapido-support`  
- Rename `preventivorapido--legal` + full URL migration  
- Slotiva visibility decision  
- Turbo Run visibility decision (after email fix)  
- Portfolio root audit-report declutter  
- Showcase creation / pins  
- Source Verification  
- Custom domains under fernandopiras.com for legal pages  

---

# 13. Required Owner Decisions

Answer yes/no (or provide URLs) before any hide/rename:

1. **App Store Connect — AndroMetrics:** any URL still pointing to `andrometrics-privacy`?  
2. **App Store Connect — PreventivoRapido PRO:** any URL still pointing to `preventivorapido-support` (vs `--legal/support.html`)?  
3. **Slotiva:** is Connect still using `fernandopiras.github.io/Slotiva-Legal/*`? Is the app shipping / in review / abandoned?  
4. **Turbo Run:** is the Pages URL required by any store or ad console? Approve email replacement to `fernando@fernandopiras.com`?  
5. Approve **S1/S2/S3** safe candidates for a future apply gate?  
6. Is a future rename of `preventivorapido--legal` worth the migration cost?

---

# 14. Recommended Execution Order

1. **Dependency verification** — owner answers §13 (Connect + Turbo/Slotiva).  
2. **Non-breaking content fixes** — S1 email; optional S2 descriptions; optional S3 privacy redirect.  
3. **URL migration planning** — only if rename/custom domain desired for Preventivo.  
4. **Rename** — only after new URLs live (if ever).  
5. **Store/support URL updates** — App Store Connect + `site.ts` / site in lockstep.  
6. **Post-change verification** — HTTP 200 on store-linked URLs; re-scrape App Store HTML.  
7. **Private/archive legacy** — `andrometrics-privacy`, `preventivorapido-support`, maybe others.  
8. **Final profile audit** — pins still zero until showcases; recruiter surface re-check.

---

# 15. Final Readiness Score

| Dimension | Score | Notes |
|-----------|------:|-------|
| Evidence quality | 94 | Public store/site/Pages verified; Connect console unread → UNKNOWN flags |
| Dependency safety | 96 | BLOCKING hosts correctly ring-fenced |
| Recruiter-noise clarity | 90 | Empty/broken/legacy hosts identified |
| Actionability | 93 | Clear safe candidates vs deferred |
| Non-destruction | 100 | No live mutations in this phase |
| Secret hygiene | 100 | No secrets in report |
| **Plan readiness** | **95** | Ready for owner decisions; **not** ready to mutate without §13 |

**Phase 8 status:** Plan complete. Awaiting approval. No cleanup applied.

---

## Non-actions confirmation

- No repository made private/archived/renamed/deleted  
- No Pages or App Store Connect changes  
- No showcase creation  
- No Source Verification  
- No application code changes  
- No Phase 9 started  
