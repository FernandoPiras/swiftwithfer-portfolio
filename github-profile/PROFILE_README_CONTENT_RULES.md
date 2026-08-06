# Profile README — Content Rules

**Applies to:** `FernandoPiras/FernandoPiras` (GitHub profile homepage)  
**Source of truth for copy in this workspace:** `github-profile/README.md`  
**Related docs:** `GITHUB_PORTFOLIO_PHASE_1_REPORT.md`, `GITHUB_PROFILE_ARCHITECTURE.md` (Phase 3), Phase 2 evidence when available  

These rules are permanent. Any update to the profile README must pass this document.

---

## 1. Purpose

The profile README is a professional landing page for:

- recruiters and hiring managers  
- clients  
- platforms such as ArtiProg, Toptal, Arc.dev, Upwork  

It must communicate credibility, clarity, and shipped products within a few seconds.

It is **not** a blog, CV dump, badge gallery, or GitHub template showcase.

---

## 2. Publishing location

| Item | Rule |
|------|------|
| Canonical repo | `FernandoPiras/FernandoPiras` (public special repository) |
| File that renders on the profile | `README.md` at the root of that repo |
| This workspace folder | `github-profile/` holds the approved draft until the special repo is created/updated |
| Portfolio site repo | Do **not** replace `swiftwithfer-portfolio/README.md` with the profile README |

**Pin policy:** Do not pin `FernandoPiras/FernandoPiras`. Pin product showcase repos only (`andrometrics`, `preventivo-rapido`).

---

## 3. Language

- Public language: **English**
- Official product names stay as published: **AndroMetrics**, **PreventivoRapido PRO**
- Descriptive form “Preventivo Rapido” may appear once in prose if useful
- No Italian/English mixing inside the same section

---

## 4. Tone

| Required | Forbidden |
|----------|-----------|
| Clear, calm, concrete | “Passionate developer”, “love coding”, “coffee” |
| First person for profile voice | Agency / software-house voice |
| Evidence-led statements | “Senior”, “enterprise”, “world-class”, “ninja” |
| Short sentences | Slogan stacks and hype adjectives |
| Product names as proof | Fake humility / humblebrag |

Every sentence must earn its place. If removing a sentence does not reduce clarity, remove it.

---

## 5. Structure (locked order)

1. **Hero** — name, role line, one supporting sentence, primary CTA (Website)  
2. **About** — how you work (short)  
3. **Featured Products** — AndroMetrics, then PreventivoRapido PRO  
4. **Technical Expertise** — verified / approved specializations only  
5. **Engineering Principles** — delivery principles (not tool worship)  
6. **Current Focus** — present tense only  
7. **Contact** — actionable links  

Do not add sections (blog, timeline, services grid, trophy wall, stats embeds) without a written amendment to this file.

---

## 6. Maximum length

| Constraint | Limit |
|------------|-------|
| Total rendered length | Target **one to two scrolls** on a 13–14" laptop |
| Hero | ≤ 6 lines |
| About | 40–90 words |
| Each product blurb | 1–2 sentences + links |
| Technical Expertise | ≤ 15 bullets total across groups |
| Engineering Principles | 4–6 items |
| Current Focus | 2–4 bullets |
| Contact | One entry per channel; no repeated URLs |

If the page grows past two scrolls, cut Tech or Principles before cutting Products.

---

## 7. Layout & style

- Markdown first; avoid decorative HTML  
- One H1 (name) only  
- H2 for sections; H3 for product names  
- Prefer lists and short paragraphs over tables/cards  
- Separators (`---`) sparingly (hero block and before Contact at most)  
- No emoji rows, visitor counters, snakes, trophies, typing SVGs  
- Mode-safe: never force text colors that break light/dark mode  
- No profile-level app screenshot carousels (screenshots belong in showcase repos)  
- No banners required for v1; if added later, follow Phase 1/3 banner budget (name + one line)

---

## 8. Links

### Priority

1. Website — `https://www.fernandopiras.com`  
2. App Store developer page  
3. Product App Store URLs (inside Featured Products only)  
4. Product pages on fernandopiras.com (inside Featured Products only)  
5. GitHub — `https://github.com/FernandoPiras`  
6. LinkedIn — include only when a public URL exists  
7. Email — `fernando@fernandopiras.com`  

### Rules

- **Never duplicate** the same URL in multiple sections  
- Hero carries the primary Website CTA **only** (do not repeat Website under Contact)  
- Contact carries App Store developer, GitHub, LinkedIn, Email  
- Product sections carry product-specific App Store + product page links only  
- LinkedIn stays a placeholder until a real URL is provided — do not invent one  
- Prefer consistent `www.fernandopiras.com`

---

## 9. Products policy

### Allowed on profile

- AndroMetrics  
- PreventivoRapido PRO  

### Not allowed

- FOTIQ, Slotiva, SwiftToKotlin, or any incomplete concept  
- “Coming soon” pins or placeholders  
- Ratings, review counts, version numbers, download counts  
- Unverified user/revenue metrics  

### Adding a new product

A new product may appear in Featured Products only when **all** are true:

1. Published or otherwise publicly verifiable as a real product  
2. App Store (or equivalent) link works  
3. One factual sentence can be written without speculation  
4. Showcase quality matches the existing two products  
5. Phase 1 growth checklist is satisfied  
6. This rules file is updated with the new official name and links  

Maximum featured products on the profile: **keep the list short** (prefer ≤ 4). Older products may move off the profile to pins/showcases only.

---

## 10. Technical claims policy

| Claim type | Rule |
|------------|------|
| Specializations stated by owner for identity (Swift, SwiftUI, native iOS, product engineering) | Allowed on profile when explicitly maintained here |
| Product capabilities | Must be backed by App Store, public legal docs, OWNER_VERIFIED, or SOURCE_VERIFIED |
| API-level names (StoreKit 2, WidgetKit, Vision, PDFKit, etc.) | Only after SOURCE_VERIFIED or OWNER_VERIFIED |
| Temporal metrics | Never on profile |
| Absolute marketing claims (“secure”, “scalable”, “production-ready”) | Never |

When Phase 2 Source Verification resumes, update Technical Expertise to replace cautious footnotes with precise verified terms — without inflating scope.

---

## 11. Badges & statistics

| Element | Policy |
|---------|--------|
| Decorative badges | **Do not use** |
| Visitor counters / snake / trophies / streak widgets | **Do not use** |
| Embedded GitHub stats cards | **Optional** — default **off** for a cleaner professional page |
| Native contribution graph | **Use** (GitHub UI; not embedded) |
| Pinned repositories | **Use** — `andrometrics`, `preventivo-rapido` only (when showcases exist) |

---

## 12. What not to publish

- Secrets, tokens, internal endpoints  
- Customer PII, health data, real invoices  
- Unverified stack or “full stack” identity inflation  
- Future product roadmaps as if shipped  
- Self-assigned seniority / enterprise branding  
- Duplicate CTAs and repeated paragraphs  
- Template profile chrome that signals “generated README”

---

## 13. Update cadence

| Trigger | Action |
|---------|--------|
| New shipped product | Add under Featured Products per §9 |
| Product renamed or URL changed | Update links the same day |
| Source verification completes | Refresh Technical Expertise wording |
| LinkedIn URL available | Replace placeholder once |
| Broken link detected | Fix immediately |
| Quarterly review | Re-read against this rules file; cut drift |

One intentional visual refresh per year maximum. Do not churn layout for novelty.

---

## 14. Quality bar (before any publish)

- [ ] Reads as a landing page, not a template  
- [ ] Name is the strongest hero signal  
- [ ] Website CTA is obvious within 5 seconds  
- [ ] Only real products listed  
- [ ] No banned tone phrases  
- [ ] No duplicate links  
- [ ] Light and dark mode readable  
- [ ] Mobile readable without horizontal overflow  
- [ ] Fits roughly one–two scrolls on laptop  
- [ ] Consistent with Phase 1 architecture and claim safety  

**Minimum score to publish or update:** 99/100 on the self-review dimensions in Phase 4 (readability, impact, clarity, recruiter friendliness, mobile, accessibility, markdown quality, no duplication, CTA quality, phase coherence).

---

## 15. Relationship to showcase repos

| Surface | Owns |
|---------|------|
| Profile README | Identity, product index, contact |
| `andrometrics` / `preventivo-rapido` showcases | Deep product narrative, screenshots, architecture |
| Website | Full case studies and visual presentation |

Do not paste full showcase README content into the profile.

---

## 16. Amendment process

Changes to section order, tone rules, or claim policy require:

1. Update this file first  
2. Update `github-profile/README.md`  
3. Publish to `FernandoPiras/FernandoPiras`  
4. Record the reason in the commit message  

No silent structural drift.
