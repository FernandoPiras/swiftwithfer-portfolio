# Profile README — Content Rules

**Applies to:** `FernandoPiras/FernandoPiras` (GitHub profile homepage)  
**Source of truth for copy in this workspace:** `github-profile/README.md`  
**Related docs:** `GITHUB_PORTFOLIO_PHASE_1_REPORT.md`, `GITHUB_PROFILE_ARCHITECTURE.md` (Phase 3), `GITHUB_PORTFOLIO_PHASE_2_EVIDENCE.md` (evidence; Source Verification not complete)

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
| Natural English | Absolute or overly promotional wording |

Every sentence must earn its place. If removing a sentence does not reduce clarity, remove it.

---

## 5. Role policy (locked for this version)

Hero role line is locked to:

**iOS Software Developer · Swift · SwiftUI · Product Engineering**

It may be expanded only when new shipped products or verified sources demonstrate a broader scope.

Supporting hero sentence (locked pattern):

> I design and ship native iOS applications end to end — from product decisions to App Store release.

---

## 6. Structure (locked order)

1. **Hero** — name, role line, one supporting sentence, Website CTA only  
2. **About** — how you work (max two short paragraphs)  
3. **Featured Products** — AndroMetrics, then PreventivoRapido PRO  
4. **Technical Expertise** — owner identity + evidence-backed capabilities  
5. **Engineering Principles** — delivery principles (not tool worship)  
6. **Current Focus** — ongoing product/engineering work only  
7. **Contact** — App Store developer + email (+ LinkedIn only when real)  

Do not add sections (blog, timeline, services grid, trophy wall, stats embeds) without a written amendment to this file.

---

## 7. Maximum length

| Constraint | Limit |
|------------|-------|
| Total rendered length | Target **one to two scrolls** on a 13–14" laptop |
| Hero | ≤ 6 lines |
| About | Max two short paragraphs (≈ 40–90 words) |
| Each product blurb | 1–2 sentences + links |
| Technical Expertise | ≤ 15 bullets total across groups |
| Engineering Principles | 4–6 items |
| Current Focus | 2–4 bullets |
| Contact | One entry per channel; no repeated URLs |

If the page grows past two scrolls, cut Tech or Principles before cutting Products.

---

## 8. Layout & style

- Markdown first; avoid decorative HTML  
- One H1 (name) only  
- H2 for sections; H3 for product names  
- Prefer lists and short paragraphs over tables/cards  
- Separators (`---`) sparingly  
- No emoji rows, visitor counters, snakes, trophies, typing SVGs  
- Mode-safe: never force text colors that break light/dark mode  
- No profile-level app screenshot carousels (screenshots belong in showcase repos)  
- No banners required for v1; if added later, follow Phase 1/3 banner budget (name + one line)

---

## 9. Links

### Placement

| Surface | Allowed links |
|---------|----------------|
| **Hero** | Website only — `https://www.fernandopiras.com` |
| **Featured Products** | Product App Store links + product pages on fernandopiras.com |
| **Contact** | App Store developer page; professional email; LinkedIn **only** after a real verified public URL exists |

### Explicit exclusions

- Do **not** include a link to `https://github.com/FernandoPiras` inside the Profile README (the visitor is already on the profile).  
- Do **not** repeat the Website URL under Contact.  
- Do **not** invent LinkedIn or other social URLs.

### Priority (when present)

1. Website (Hero)  
2. Product App Store URLs (Featured Products)  
3. Product pages (Featured Products)  
4. App Store developer page (Contact)  
5. Professional email (Contact)  
6. LinkedIn (Contact; only when verified URL exists)  

Prefer consistent `www.fernandopiras.com`.

---

## 10. Placeholder policy

**No visible placeholders are permitted in the published Profile README.**

This includes:

- “LinkedIn URL to be added” / similar unfinished labels  
- “Coming soon”  
- TODO  
- Future products presented as active  
- Empty badge slots  
- Unverified links  

If LinkedIn is not ready, omit the line entirely.

---

## 11. Products policy

### Allowed on profile

- AndroMetrics  
- PreventivoRapido PRO  

### Not allowed

- other non-approved products, other non-approved products, or any incomplete concept  
- “Coming soon” pins or placeholders  
- Ratings, review counts, version numbers, download counts  
- Unverified user/revenue metrics  
- Full stack, Firebase, cloud vendor names, performance, scalability, automatic SDI submission (unless later verified for a specific product and approved for profile use)

### Adding a new product

A new product may appear in Featured Products only when **all** are true:

1. Published or otherwise publicly verifiable as a real product  
2. App Store (or equivalent) link works  
3. One factual sentence can be written without speculation  
4. Showcase quality matches the existing two products  
5. Phase 1 growth checklist is satisfied  
6. This rules file is updated with the new official name and links  

Maximum featured products on the profile: **keep the list short** (prefer ≤ 4).

---

## 12. Claim classification

| Claim type | Classification / rule |
|------------|------------------------|
| Swift, SwiftUI (hero / Languages & UI) | **Owner-maintained professional identity claims** — allowed on the profile; **not** `SOURCE_VERIFIED` until Phase 2 local source verification completes |
| Native iOS, Product Engineering | Owner-maintained professional identity claims for this version |
| Apple-managed subscriptions | Allowed from **App Store evidence** (`APP_STORE_VERIFIED`) |
| Product capabilities (HealthKit, Sign in with Apple, PDF workflows, widgets, on-device OCR, local-first handling, optional cloud sync, AndroMetrics AI-assisted features) | Must follow **Phase 2 evidence** (App Store / public documentation / later OWNER or SOURCE) |
| StoreKit, StoreKit 2, WidgetKit, Vision, PDFKit, and similar API-level implementation names | Require **OWNER_VERIFIED** or **SOURCE_VERIFIED** before public use on the profile — do not use in the Profile README until then |
| Temporal metrics (ratings, versions, dates, file size) | Never on profile |
| Absolute marketing claims (“secure”, “scalable”, “production-ready”, “enterprise”) | Never |

**Phase 2 status:** Source Verification is **not** complete. Do not state or imply that it is.

When Phase 2 Source Verification resumes and completes, update Technical Expertise with precise verified terms — without inflating scope.

---

## 13. Current Focus policy

Current Focus must describe **ongoing product or engineering work**, not temporary portfolio-building activity.

Allowed examples: product maintenance, quality, accessibility, release workflows, shipped-app iteration.  
Forbidden examples: “building my GitHub profile”, “improving portfolio README”, “setting up showcases” as the main focus line.

---

## 14. Badges & statistics

| Element | Policy |
|---------|--------|
| Decorative badges | **Do not use** |
| Visitor counters / snake / trophies / streak widgets | **Do not use** |
| Embedded GitHub stats cards | **Optional** — default **off** |
| Native contribution graph | **Use** (GitHub UI; not embedded) |
| Pinned repositories | **Use** — `andrometrics`, `preventivo-rapido` only (when showcases exist) |

---

## 15. What not to publish

- Secrets, tokens, internal endpoints  
- Customer PII, health data, real invoices  
- Unverified stack or “full stack” identity inflation  
- Future product roadmaps as if shipped  
- Self-assigned seniority / enterprise branding  
- Duplicate CTAs and repeated paragraphs  
- Visible placeholders  
- Self-referential portfolio-building copy  
- Link to the GitHub profile from inside the Profile README  
- Template profile chrome that signals “generated README”

---

## 16. Update cadence

| Trigger | Action |
|---------|--------|
| New shipped product | Add under Featured Products per §11 |
| Product renamed or URL changed | Update links the same day |
| Source verification completes | Refresh Technical Expertise wording per §12 |
| LinkedIn URL verified | Add under Contact (no placeholders meanwhile) |
| Broken link detected | Fix immediately |
| Quarterly review | Re-read against this rules file; cut drift |

One intentional visual refresh per year maximum. Do not churn layout for novelty.

---

## 17. Quality bar (before any publish)

- [ ] Reads as a landing page, not a template  
- [ ] Name is the strongest hero signal  
- [ ] Role line matches the locked role policy  
- [ ] Website CTA is obvious within 5 seconds  
- [ ] Only real products listed  
- [ ] No banned tone phrases  
- [ ] No duplicate / redundant links  
- [ ] No GitHub profile self-link  
- [ ] No visible placeholders  
- [ ] No unapproved API-level claims  
- [ ] No temporal metrics  
- [ ] No future products  
- [ ] No portfolio self-reference in Current Focus  
- [ ] Light and dark mode readable  
- [ ] Mobile readable without horizontal overflow  
- [ ] Fits roughly one–two scrolls on laptop  
- [ ] README and this rules file are consistent  
- [ ] Phase 2 is not declared complete  
- [ ] Product showcase repos are not implied as already published unless they exist  

**Minimum score to publish or update:** 99/100 on Phase 4 self-review dimensions.

---

## 18. Relationship to showcase repos

| Surface | Owns |
|---------|------|
| Profile README | Identity, product index, contact |
| `andrometrics` / `preventivo-rapido` showcases | Deep product narrative, screenshots, architecture (not started in this gate) |
| Website | Full case studies and visual presentation |

Do not paste full showcase README content into the profile.  
Do not start product showcase implementation from a profile-only correction gate.

---

## 19. Amendment process

Changes to section order, tone rules, role line, or claim policy require:

1. Update this file first  
2. Update `github-profile/README.md`  
3. Publish to `FernandoPiras/FernandoPiras`  
4. Record the reason in the commit message  

No silent structural drift.
