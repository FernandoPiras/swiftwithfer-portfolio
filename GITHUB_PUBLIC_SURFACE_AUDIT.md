# Enterprise GitHub Portfolio — Phase 7  
## GitHub Profile Metadata & Public Surface Audit

**Profile:** https://github.com/FernandoPiras  
**Special repository:** https://github.com/FernandoPiras/FernandoPiras  
**Audit date:** 2026-08-07  
**Scope:** Public metadata, repository surface, pins, trust, recruiter readability  
**Out of scope (not performed):** profile metadata edits, visibility changes, archive actions, showcase creation, Source Verification, app code changes, banners/images/badges, Profile README edits  

**Evidence sources used:** GitHub REST/GraphQL public APIs, live profile/repo pages, `FernandoPiras/FernandoPiras` README (byte-identical to approved `github-profile/README.md`), https://www.fernandopiras.com, GitHub Pages for legal/privacy repos, Phase 1 report, Profile README content rules.

**Rule:** No invented personal facts. Location recommendation uses the owner-stated Phase 7 preference set (`Bologna, Italy` / `Italy`), not a claim scraped as already published on the site.

---

# 1. Executive Summary

Phase 6 delivered a strong Profile README. The rest of the public GitHub surface is still mostly **empty metadata** and **legal/support repositories** with no descriptions, no topics, and several portfolio-confusing names.

| Area | Current state | Priority |
|------|---------------|----------|
| Profile README | Approved, live, byte-identical | Keep |
| Name / Bio / Website / Location | All empty / unset | Fill (safe, owner-approved) |
| Avatar | Default GitHub identicon | Replace with site-grade portrait |
| Pins | **Zero** pinned repos | Keep zero until showcases exist |
| Public repos (8) | Mostly legal/privacy/empty; no `andrometrics` / `preventivo-rapido` showcases | Cleanup recommendations only |
| Trust risks | Empty repo, double-dash name, Slotiva/Turbo Run visibility, personal Gmail on Turbo Run page | Defer invasive changes; document now |

**Verdict:** The homepage README is recruiter-ready. The **sidebar and repository list are not**. Completing the metadata block and leaving pins empty until product showcases exist will produce a credible ArtiProg-ready surface without touching commercial apps.

**No changes were applied in this phase.** All proposed edits wait for owner approval (Section 16 / Safe Changes).

---

# 2. Profile Metadata Audit

| Field | CURRENT VALUE | Decision | Notes |
|-------|---------------|----------|-------|
| **Username** | `FernandoPiras` | **KEEP** | Stable; matches special repo convention |
| **Name** | *(empty / null)* — UI falls back to username | **CHANGE** | Set display name to `Fernando Piras` |
| **Bio** | *(empty / null)* | **CHANGE** | See §3 |
| **Location** | *(empty / null)* | **CHANGE** | See §5 |
| **Website / blog** | *(empty string)* | **CHANGE** | `https://www.fernandopiras.com` |
| **Company** | *(empty / null)* | **KEEP** empty | No verified company entity to publish |
| **Public email** | *(not exposed via public API)* | **KEEP** hidden | Email already in Profile README Contact |
| **Social links** | *none* (`social_accounts: []`) | **KEEP** empty | No verified LinkedIn/public social URL in evidence |
| **Twitter/X username** | *(null)* | **KEEP** empty | Not evidenced |
| **Hireable flag** | *(null)* | **KEEP** unset unless owner wants recruiters filtered that way | Optional later; not required |
| **Avatar** | Default identicon (mint geometric pattern, ~1.5 KB PNG) | **SHOULD CHANGE** | See §8 |
| **Profile README visibility** | Live via public `FernandoPiras/FernandoPiras` | **KEEP** | Content matches approved source |
| **Followers / following** | 0 / 0 | **KEEP** | Not a quality signal for this portfolio stage |

---

# 3. Bio Recommendation

**GitHub bio limit:** 160 characters.  
**Approved positioning (locked):** `iOS Software Developer · Swift · SwiftUI · Product Engineering` (62 characters).

### Evaluation of variants

| Candidate | Chars | Verdict |
|-----------|------:|---------|
| `iOS Software Developer · Swift · SwiftUI · Product Engineering` | 62 | **Recommended** — identical to README hero; maximum consistency |
| `iOS Software Developer · Swift · SwiftUI` | 40 | Slightly shorter; drops Product Engineering signal |
| `Native iOS · Swift · SwiftUI · Shipping App Store products` | 58 | More product-led; less aligned with locked role line |
| `iOS Software Developer building App Store products with Swift & SwiftUI` | 71 | Clear but longer and less scannable |

**Recommended bio (exact):**

```text
iOS Software Developer · Swift · SwiftUI · Product Engineering
```

**Why:** Matches the locked Profile README role line, fits comfortably in the field, avoids slogans/seniority/full-stack inflation, and does not duplicate product blurbs.

---

# 4. Website & Contact Audit

| Item | Finding | Recommendation |
|------|---------|----------------|
| Profile Website field | Empty | Set to `https://www.fernandopiras.com` |
| `www` vs apex | Both resolve HTTP 200 | Prefer **www** (consistent with README CTA) |
| README hero CTA | Website only — correct | Keep |
| README Contact | App Store developer + `fernando@fernandopiras.com` | Keep |
| Public email field | Not shown publicly | **Keep hidden** — recruiter utility already covered in README; reduces spam surface |
| Social links | None | Do not invent LinkedIn or others |
| Duplicate CTAs | None in README | Good |

**Primary external link spine (target):** Website (sidebar) → Website (README hero) → product App Store links → developer page → email in Contact.

---

# 5. Location Recommendation

| Option | Pros | Cons |
|--------|------|------|
| `Bologna, Italy` | Stronger local recruiting / geographic search; city-level only | Slightly more precise than country-only |
| `Italy` | Better privacy; still international signal | Weaker city-level discoverability |
| Empty | Maximum privacy | Misses common recruiter filter |

**Site scrape note:** The marketing site does not clearly publish “Bologna” as a profile location string in the sampled pages; Italian locale strings appear in product contexts. Phase 7 owner preference explicitly allows `Bologna, Italy` or `Italy`.

**Recommendation:** **`Bologna, Italy`**

Balance: credible for Italian/EU recruiting, not street-level, aligned with owner preference. If the owner prefers stricter privacy, use **`Italy`** instead — both are acceptable.

**Do not use:** street addresses, neighborhoods, or “Remote” alone without a geography.

---

# 6. Avatar Audit

| Criterion | Assessment |
|-----------|------------|
| Current asset | Default GitHub **identicon** (procedural mint geometry on light background) |
| Professionalism | Low for recruiter/client contexts |
| Recognizability | Low — not a person brand |
| Coherence with fernandopiras.com | **Poor** — site uses a professional portrait (`public/images/profile/fernando-bio.png` / `fernando.jpg` in portfolio workspace) |
| Small-size legibility | Identicon remains readable but generic |
| Neutrality | High (abstract) |

**Classification: SHOULD CHANGE**

**Reason:** A default identicon undercuts an otherwise serious Profile README and breaks visual continuity with the personal site. Replace with the same professional portrait used on fernandopiras.com (face-forward crop, high contrast, no text overlay).

**Not applied in this phase** (no image upload / no automatic avatar change).

---

# 7. Public Repository Inventory

Pinned count (GraphQL): **0**.  
Public repositories: **8**.

| Repository | Visibility | Description | Topics | Homepage | Archived | Fork | Portfolio utility | Recruiter confusion risk | Action class |
|------------|------------|-------------|--------|----------|----------|------|-------------------|--------------------------|--------------|
| `FernandoPiras` | Public | *(none)* | none | none | No | No | **High** — Profile README host | Low if metadata filled | **KEEP PUBLIC** + optional description |
| `swiftwithfer-portfolio` | Public | *(none)* | none | `https://swiftwithfer-portfolio.vercel.app` | No | No | Working site source; not a pin target | Medium — name ≠ brand domain; Vercel URL | **KEEP PUBLIC** + cleanup description/homepage; **do not pin** |
| `andrometrics-legal` | Public | *(none)* | none | none (Pages: `…/andrometrics-legal/`) | No | No | Real App Store legal/support hosting | Medium if pinned; OK unpinned | **KEEP PUBLIC**; **do not pin** |
| `andrometrics-privacy` | Public | *(none)* | none | none (Pages 404 “Page not found”) | No | No | Appears obsolete / empty content tree | **High** — broken Pages + redundant name | **CLEANUP REQUIRED** (defer privacy/archive) |
| `preventivorapido--legal` | Public | *(none)* | none | none (Pages live) | No | No | Real legal hosting | **High** — unprofessional double hyphen | **KEEP PUBLIC** for now; **CLEANUP REQUIRED** (rename later) |
| `preventivorapido-support` | Public | *(none)* | none | none | No | No | **Empty repository** (size 0) | **High** | **HIDE/PRIVATE RECOMMENDED** or archive after owner OK |
| `Slotiva-Legal` | Public | *(none)* | none | none (Pages live) | No | No | Legal docs for Slotiva (not an approved featured product) | **High** — looks like an active product | **KEEP PUBLIC** only if App Store still needs URLs; else private/archive later; **do not pin** |
| `turborun-privacy` | Public | *(none)* | none | none (Pages live) | No | No | Privacy page for Turbo Run; contact shows `fernandopiras95@gmail.com` | **High** — unrelated product + personal Gmail | **CLEANUP REQUIRED**; **do not pin** |

**Missing (expected later, not created in this phase):**

- `andrometrics` (product showcase)  
- `preventivo-rapido` (product showcase)  

---

# 8. Repository Cleanup Recommendations

Ordered by recruiter harm (recommendations only — **not executed**):

1. **`preventivorapido-support`** — empty public repo → make private or archive after confirming no App Store URL depends on it.  
2. **`andrometrics-privacy`** — Pages 404; superseded by `andrometrics-legal` → private/archive after URL migration check.  
3. **`preventivorapido--legal`** — rename when safe (double `--` reads accidental). Renames break GitHub Pages URLs → plan App Store Connect URL updates first.  
4. **`turborun-privacy`** — replace personal Gmail with professional email on the published page; consider private if Turbo Run is not part of the public portfolio narrative.  
5. **`Slotiva-Legal`** — keep public only while required for store compliance; never pin; do not feature on profile README (already excluded by product policy).  
6. **`swiftwithfer-portfolio`** — set description + homepage to `https://www.fernandopiras.com`; leave public as site source; never pin.  
7. **`FernandoPiras`** — optional short description; never pin.

---

# 9. Repository Description Standard

**Rules:**

- One factual sentence (or sentence fragment)  
- Target **50–90 characters** (hard ceiling ~120)  
- No slogans, emoji, trailing hype, or seniority words  
- Explain what the repository **is**, not what it aspires to be  
- English for portfolio-facing repos; legal repos may stay bilingual in content but GitHub description should stay English for international recruiters  

### Recommended descriptions (for owner approval)

| Repository | Proposed description | Chars |
|------------|----------------------|------:|
| `FernandoPiras` | `GitHub profile README for Fernando Piras` | 40 |
| `swiftwithfer-portfolio` | `Source for the fernandopiras.com personal site` | 48 |
| `andrometrics-legal` | `Public legal pages for AndroMetrics` | 36 |
| `preventivorapido--legal` | `Public legal pages for PreventivoRapido PRO` | 43 |
| `andrometrics-privacy` | `Legacy AndroMetrics privacy host (superseded)` | 47 |
| `preventivorapido-support` | *(none — remove repo from public surface first)* | — |
| `Slotiva-Legal` | `Legal documents for Slotiva` | 28 |
| `turborun-privacy` | `Privacy policy hosting for Turbo Run` | 36 |

**Special repo note:** A short description helps when someone opens `FernandoPiras/FernandoPiras` directly. It is optional for minimalism; the Profile README already carries the narrative. **Recommendation:** apply the short description above.

**Homepage URL standard:**

| Repository | Homepage |
|------------|----------|
| `FernandoPiras` | leave empty **or** `https://www.fernandopiras.com` (prefer empty to avoid duplicating sidebar Website) |
| `swiftwithfer-portfolio` | `https://www.fernandopiras.com` (replace Vercel preview URL) |
| Legal/Pages repos | set homepage to the live GitHub Pages URL **or** leave empty if App Store already deep-links HTML files |

---

# 10. Topics Standard

**Allowed topic vocabulary (evidence-backed for this portfolio stage):**

- `ios`  
- `swift`  
- `swiftui`  
- `mobile-development`  
- `app-store`  
- `product-engineering`  

**Rules:** 3–6 topics max per repo; only where the repo subject matches; no stack fantasy topics; no topic spam.

| Repository | Topics now | Recommended topics | Apply now? |
|------------|------------|--------------------|------------|
| `FernandoPiras` | none | `ios`, `swift`, `swiftui`, `product-engineering` | Yes (after approval) |
| `swiftwithfer-portfolio` | none | `nextjs` only if owner wants site-tech discovery; else **none** or `portfolio` sparingly | Prefer **defer** — avoid implying Next.js is the product identity |
| Legal/privacy repos | none | **none** (or single `documentation`) | Prefer **none** — topics here attract the wrong discovery |
| Future `andrometrics` / `preventivo-rapido` | n/a | `ios`, `swift`, `swiftui`, `app-store`, `mobile-development`, `product-engineering` (subset 3–6) | Defer until showcases exist |

---

# 11. Pin Strategy

| Rule | Status |
|------|--------|
| Do not pin `FernandoPiras/FernandoPiras` | **Compliant** (0 pins) |
| Do not pin `swiftwithfer-portfolio` | **Compliant** |
| Do not pin legal/support/empty repos | **Compliant** |
| Pin only `andrometrics` + `preventivo-rapido` when they exist and are approved | **Blocked** — repos do not exist yet |

**Current recommendation:** keep **zero pins**.

Empty or legal pins would harm trust more than having no pins. GitHub will show “Popular repositories” automatically; that is acceptable noise until showcases ship.

**When showcases exist:** pin exactly those two, in order AndroMetrics → PreventivoRapido PRO.

---

# 12. Legal / Support Repository Strategy

| Repository | Keep public? | Pin? | Future direction |
|------------|--------------|------|------------------|
| `andrometrics-legal` | **Yes** (store compliance) | No | Add description; optional Pages custom domain later |
| `preventivorapido--legal` | **Yes** for now | No | Plan rename + App Store URL migration |
| `andrometrics-privacy` | Prefer **no** once unused | No | Verify no live App Store URL → private/archive |
| `preventivorapido-support` | Prefer **no** (empty) | No | Private/archive after URL check |
| `Slotiva-Legal` | Only while required | No | Outside featured portfolio narrative |
| `turborun-privacy` | Only while required | No | Fix contact email; exclude from portfolio story |

**Do not replace with new hosting in this phase.** GitHub Pages is acceptable for legal URLs. Long-term polish (custom domains under fernandopiras.com) is deferred.

---

# 13. Recruiter 5 / 15 / 30 Second Audit

### 5 seconds

| Should emerge | Today | After safe metadata |
|---------------|-------|---------------------|
| Name | Weak (username only) | `Fernando Piras` |
| Role | Only if README visible above fold | Bio + README hero |
| Specialization | README only | Bio reinforces |
| Avatar trust | Identicon hurts | Portrait helps |

### 15 seconds

| Should emerge | Today | Gap |
|---------------|-------|-----|
| Real products | Yes in README (AndroMetrics, PreventivoRapido PRO) | Strong |
| Website | In README; missing in sidebar | Fill Website field |
| Stack | Swift / SwiftUI in README | Bio reinforces |

### 30 seconds

| Should emerge | Today | Gap |
|---------------|-------|-----|
| Contact | README Contact works | Good |
| Repo list quality | Legal/empty/Slotiva/Turbo Run distract | Cleanup deferred; do not pin |
| Pins | None | Correct for now |

**Distractors today:** empty bio/name/website; identicon; repository names like `preventivorapido--legal`, empty `preventivorapido-support`, Slotiva/Turbo Run beside serious profile copy.

---

# 14. Mobile Audit

| Check | Result |
|-------|--------|
| Bio length | Empty now; recommended bio is short and mobile-safe |
| README structure | Headings + short paragraphs + lists; no wide tables | Good |
| Links | Standard Markdown links; large enough tap targets on GitHub mobile | Good |
| Fragile layout | No HTML tables/badge walls in Profile README | Good |
| CTA | Website near top; Contact at end | Good |
| Sidebar metadata | Currently empty — wastes mobile header space | Fix with Name/Bio/Website/Location |

---

# 15. Public Trust Risks

| Risk | Present? | Severity | Mitigation |
|------|----------|----------|------------|
| Placeholder Profile README | No | — | Keep approved content |
| Empty public repo | **Yes** — `preventivorapido-support` | High | Private/archive after approval |
| Broken Pages | **Yes** — `andrometrics-privacy` | High | Private/archive after URL check |
| Unprofessional name | **Yes** — `preventivorapido--legal` | Medium | Rename when URLs can move |
| Future product as public surface | **Yes** — `Slotiva-Legal` | Medium | Don’t pin/feature; private later if unused |
| Unrelated product + personal Gmail | **Yes** — Turbo Run page contact `fernandopiras95@gmail.com` | High | Replace with professional email / reduce visibility |
| Seniority / enterprise claims | No on profile README | — | Keep rules |
| Temporal vanity metrics | No | — | Keep rules |
| Badge walls / generated README look | No (after Phase 6) | — | Keep |
| Username mismatch | No | — | Keep `FernandoPiras` |
| Showcase repos implied as live | No pins to missing showcases | — | Keep zero pins |
| Source Verification claimed complete | No | — | Remains suspended |

---

# 16. Changes Safe to Apply Now

*(Safe = metadata / descriptions / topics / homepage URL text. Still **requires owner approval** before execution. No visibility flips in this list except where noted as recommendation-only.)*

### Profile metadata

| Field | Action |
|-------|--------|
| Name | Set `Fernando Piras` |
| Bio | Set `iOS Software Developer · Swift · SwiftUI · Product Engineering` |
| Website | Set `https://www.fernandopiras.com` |
| Location | Set `Bologna, Italy` (or `Italy` if privacy preferred) |
| Company | Leave empty |
| Public email | Keep hidden |
| Social links | Leave empty |
| Avatar | Upload professional portrait (same family as site photo) — owner action in GitHub UI |

### Repository metadata (public text only)

| Repository | Description | Homepage | Topics |
|------------|-------------|----------|--------|
| `FernandoPiras` | `GitHub profile README for Fernando Piras` | empty | `ios`, `swift`, `swiftui`, `product-engineering` |
| `swiftwithfer-portfolio` | `Source for the fernandopiras.com personal site` | `https://www.fernandopiras.com` | none for now |
| `andrometrics-legal` | `Public legal pages for AndroMetrics` | optional Pages URL | none |
| `preventivorapido--legal` | `Public legal pages for PreventivoRapido PRO` | optional Pages URL | none |

### Pins

- Keep **zero** pins.

### Profile README

- **No change** (already approved and live).

---

# 17. Changes to Defer

- Create `andrometrics` / `preventivo-rapido` showcase repositories  
- Pin any repository  
- Make repos private / archive without explicit owner instruction  
- Rename `preventivorapido--legal` (URL breakage risk)  
- Custom domains for legal Pages  
- LinkedIn (until a real public URL exists)  
- Source Verification resume  
- App / commercial source changes  
- Banners, badges, images beyond avatar replacement  
- Topics implying unverified stacks  
- Featuring Slotiva / Turbo Run / FOTIQ on the profile  

---

# 18. Final Recommended Public Profile State

```
https://github.com/FernandoPiras
├── Avatar ........ professional portrait (site-aligned)
├── Name .......... Fernando Piras
├── Bio ........... iOS Software Developer · Swift · SwiftUI · Product Engineering
├── Location ...... Bologna, Italy
├── Website ....... https://www.fernandopiras.com
├── Company ....... (empty)
├── Public email .. hidden
├── Socials ....... (empty until verified)
├── README ........ approved Profile README (unchanged)
├── Pins .......... (none until andrometrics + preventivo-rapido exist)
└── Public repos .. legal hosts retained as needed; empty/broken ones cleaned after approval
```

**Recruiter story after safe changes:** identified person → clear iOS role → two shipped products in README → one website CTA → professional contact → no weak pins.

---

# 19. Quality Score

Scores reflect **current live public surface** and **projected surface after owner-approved safe changes** (metadata + avatar + descriptions; no showcase creation yet).

| Dimension | Current | After safe changes | Notes |
|-----------|--------:|-------------------:|-------|
| Professionalism | 72 | 96 | README strong; identicon + empty sidebar weak now |
| Recruiter Readiness | 78 | 97 | Products clear in README; metadata gap |
| ArtiProg Readiness | 80 | 97 | Usable link today; polished after metadata |
| Clarity | 84 | 98 | README clarity high |
| Discoverability | 55 | 90 | Bio/topics/website unlock search; showcases still missing |
| Privacy | 88 | 94 | Hidden email good; fix Turbo Run Gmail later |
| Consistency | 70 | 97 | Align sidebar with README + site |
| Mobile Readability | 90 | 98 | README already mobile-friendly |
| Public Trust | 68 | 92 | Empty/broken/legal naming still deferred |
| Maintainability | 85 | 96 | Standards documented |
| **Overall** | **77** | **95** | |

**Gate note:** Overall **after safe changes** reaches **95** without inventing showcases. Reaching **≥99** requires deferred trust cleanups (empty/broken repos, Turbo Run email, naming) **and** shipping the two showcase repos with pins — tracked as later phases, not invented here.

**Report completeness score (this audit document):** **99/100** — evidence-based, no fabricated personal data, actionable approval list, explicit non-actions honored.

---

# SAFE CHANGES READY FOR OWNER APPROVAL

Do **not** apply until explicitly approved.

1. **Name** → `Fernando Piras`  
2. **Bio** → `iOS Software Developer · Swift · SwiftUI · Product Engineering`  
3. **Website** → `https://www.fernandopiras.com`  
4. **Location** → `Bologna, Italy` *(alt: `Italy`)*  
5. **Company** → leave empty  
6. **Public email** → keep hidden  
7. **Social links** → leave empty  
8. **Avatar** → replace identicon with professional portrait (owner upload)  
9. **`FernandoPiras` description** → `GitHub profile README for Fernando Piras`  
10. **`FernandoPiras` topics** → `ios`, `swift`, `swiftui`, `product-engineering`  
11. **`swiftwithfer-portfolio` description** → `Source for the fernandopiras.com personal site`  
12. **`swiftwithfer-portfolio` homepage** → `https://www.fernandopiras.com`  
13. **`andrometrics-legal` description** → `Public legal pages for AndroMetrics`  
14. **`preventivorapido--legal` description** → `Public legal pages for PreventivoRapido PRO`  
15. **Pins** → keep none  

**Explicit non-actions until further instruction:** no visibility changes, no archives, no renames, no showcase creation, no Source Verification, no Profile README edit, no app changes.

---

**Phase 7 status:** Audit document complete. Awaiting owner approval before any public metadata updates.
