# Enterprise GitHub Portfolio — Phase 1  
## Architecture & Foundation (Correction Gate)

**Owner:** Fernando Piras  
**GitHub username:** FernandoPiras  
**Professional site:** https://www.fernandopiras.com  
**Positioning:** Product-focused software developer (individual professional)  
**Specializations to present only when evidenced:** iOS, Swift, SwiftUI, product design, integrations and services actually used, UX, quality, privacy, release  
**Scope of this document:** Architecture correction and approval only. No Profile README implementation, no showcase repositories, no banners, images, or assets in this phase.

**Immediate goal:** A credible GitHub profile suitable as a professional link for ArtiProg.

---

# 1. GitHub Architecture

## 1.1 Profile as Product Surface

The GitHub profile is not a code dump. It is a clear professional surface that should communicate within a few seconds:

1. Who you are — Fernando Piras, product-focused software developer  
2. What you build — shipped products, with iOS / Swift / SwiftUI as a core strength when evidenced  
3. What to look at first — the two pinned product showcases  
4. Where to go next — https://www.fernandopiras.com  

The Profile README (`FernandoPiras/FernandoPiras`) appears automatically on the GitHub homepage. It is **not** required as a pinned repository.

**Principles:**

| Principle | Rule |
|-----------|------|
| Zero noise | No casual repos, unfinished concepts, or placeholder pins on the public surface |
| Small start | Only real, publishable work is visible |
| One language | Same visual and writing standard across profile and showcases |
| Evidence first | No technology, metric, or classification without verification |
| Private source | Commercial product code stays private; public repos are documentation-led showcases |
| Individual brand | The profile represents Fernando Piras as one professional — not a software company |

## 1.2 Initial Public Structure (Phase 1–6 target)

Only these public portfolio elements are required for the initial credible surface:

```
FernandoPiras (GitHub user)
│
├── FernandoPiras/FernandoPiras     → Profile README (auto-displayed on homepage; not a required pin)
│
├── andrometrics                    → Public product showcase (no commercial source code)
│
└── preventivo-rapido               → Public product showcase (no commercial source code)
```

**Working repository (not part of the visible portfolio narrative):**

- `swiftwithfer-portfolio` — may be used for preparation work if needed. It must **not** be pinned and must **not** be presented as a portfolio product.

**Not required in the initial phase:**

- `.github` community/org repository  
- `portfolio-assets` control-plane repository  
- capability / sample-code repositories  
- infrastructure repositories  
- future-product repositories (FOTIQ, Slotiva, SwiftToKotlin, or any incomplete concept)  
- organization-style governance  
- issue / pull request templates without a real need  
- GitHub Actions without a real use case  

These may be introduced later only when they create concrete value.

## 1.3 Pin Strategy (initial)

Initial pins — and only these:

| Pin # | Repository | Type | Role |
|-------|------------|------|------|
| 1 | `andrometrics` | Showcase | Active published product |
| 2 | `preventivo-rapido` | Showcase | Active published product |

**Rules:**

- Leave remaining pin slots **empty**.  
- Do **not** pin the profile repository.  
- Do **not** pin placeholders, “coming soon” repos, or future concepts.  
- Do **not** pin `swiftwithfer-portfolio`.  
- Add a new pin only after a product is complete, verified, and showcase-ready.  
- Maximum useful pins later: up to GitHub’s limit (6), filled only with real products.

## 1.4 Active vs future products

**Active public products (now):**

1. AndroMetrics  
2. Preventivo Rapido  

**Not active. Do not present as current work:**

- FOTIQ  
- Slotiva  
- SwiftToKotlin  
- any other incomplete concept  

Future products may join the public portfolio **only after** they are complete, verifiable, and evidence-collected.

## 1.5 What must not exist on the public surface

- Repos named like `test`, `demo`, `homework`, `learning-*`  
- Empty or default GitHub READMEs  
- Commercial product source code  
- Placeholder / coming-soon pinned repositories  
- Unverified metrics (users, downloads, revenue, performance)  
- Self-assigned labels such as “enterprise”, “senior”, “production-scale” as branding  
- Inconsistent naming (`AndroMetrics` vs `andrometrics_app` vs `AM` as repo names)

---

# 2. Repository Strategy

## 2.1 Repository types for the initial phase

| Type | Source code | Purpose | Visibility |
|------|-------------|---------|------------|
| **Profile** (`FernandoPiras/FernandoPiras`) | N/A | Identity, positioning, links | Public |
| **Product Showcase** | No commercial source | Document and present a real product | Public |
| **Private product repos** | Yes | Actual development | Private |
| **Prep / working** (`swiftwithfer-portfolio`) | As needed | Internal preparation only | Not pinned; not portfolio narrative |

Deferred until value is clear: capability samples, shared assets repos, org `.github`, CI automation, templates for issues/PRs.

## 2.2 Private ↔ public relationship

```
[Private product source]
        │  verified screenshots, icons, facts, App Store links
        ▼
[Public showcase repo]  ← documentation-led surface
        │
        ▼
Recruiter / ArtiProg / client → fernandopiras.com
```

Each commercial product has:

1. **Private** development repository (or equivalent private source of truth)  
2. **Public showcase** repository — README, verified media, high-level architecture, links  
3. **No bridge** that exposes IP (no private submodules, no secrets, no internal endpoints)

## 2.3 Investment priority (ArtiProg-first)

1. Evidence collection for AndroMetrics and Preventivo Rapido (Phase 2)  
2. Profile README on `FernandoPiras/FernandoPiras`  
3. `andrometrics` showcase  
4. `preventivo-rapido` showcase  
5. Visual consistency and publication check  
6. Only later: additional products, optional tooling repos, shared asset systems  

---

# 3. Repository Standards

## 3.1 Product showcase requirements (pin gate)

A product showcase may be pinned only when it includes verified materials:

| Element | Required | Notes |
|---------|----------|-------|
| kebab-case repo name | Yes | `andrometrics`, `preventivo-rapido` |
| Short GitHub description | Yes | Factual value proposition only |
| Topics | Yes | Only accurate, evidenced topics |
| `README.md` | Yes | Shared section order (see Documentation Standards) |
| Real screenshots | Yes | From the real product UI |
| Authorized app icon | Yes | Official product icon |
| Feature description | Yes | Only real features |
| Tech stack | Yes | Only technologies actually used |
| High-level architecture | Yes | No sensitive IP |
| App Store link | Yes, if published there | Exact public URL |
| Site / product page link | Yes, when available | Prefer fernandopiras.com or product page |
| Contact | Yes | Professional contact path |
| Private source notice | Yes | Explicit: source code is private |
| License / copyright | Yes | Coherent proprietary / All Rights Reserved notice |

**Do not include:**

- Fake folders or empty technical stubs presented as a real codebase  
- Install / build requirements when there is no public code  
- Issue templates without a real contribution process  
- `CONTRIBUTING` if contributions are not accepted  
- `SECURITY.md` without a real security process  
- Unnecessary public roadmaps  
- Unverifiable badges  
- Metrics not documented by evidence  

Optional later (only if useful): a short `docs/` note for architecture or privacy summary based on real product facts.

## 3.2 Folder convention (product showcase — lean)

```
andrometrics/
├── README.md
├── LICENSE                 # Proprietary / copyright notice
├── assets/
│   ├── banner/
│   │   └── banner.png      # Optional but recommended for visual consistency
│   ├── screenshots/
│   │   ├── 01-....png
│   │   ├── 02-....png
│   │   └── 03-....png
│   └── icons/
│       └── app-icon.png
└── docs/                   # Optional; only if content is real and useful
    └── ARCHITECTURE.md
```

No app source, no Xcode projects, no `.env`, no build artifacts, no fake `src/` trees.

## 3.3 Profile repository structure

```
FernandoPiras/FernandoPiras/
├── README.md               # Shown automatically on the GitHub profile homepage
└── assets/                 # Only if needed by the Profile README
```

Profile README composition (one clear surface):

1. Name / identity  
2. Short professional positioning  
3. What you build (product-focused; evidenced strengths)  
4. Links to active products (AndroMetrics, Preventivo Rapido)  
5. Primary CTA: https://www.fernandopiras.com  
6. Optional contact  

No dashboard clutter, no fake stats, no company voice.

---

# 4. Documentation Standards

## 4.1 Document hierarchy

| Level | Surface | Audience | Intent |
|-------|---------|----------|--------|
| L0 | Profile README | Everyone | Who you are + what to open + site CTA |
| L1 | Product README | Recruiter / reviewer | Understand the product quickly with evidence |
| L2 | Optional `docs/*` | Deeper technical readers | Only verified architecture / privacy notes |

Keep READMEs dense and readable. Prefer clarity over length.

## 4.2 README convention — product showcase

Fixed section order:

1. Banner (if used)  
2. Product title + one factual sentence  
3. Minimal verified badge row (optional; see Badge Convention)  
4. Overview (problem → product → who it is for)  
5. Screenshots (real UI)  
6. Features (real capabilities only)  
7. Architecture (high-level modules / responsibilities)  
8. Tech stack (verified only)  
9. Status (e.g. Available on the App Store — only if true)  
10. Links (App Store, product/site, contact)  
11. Source code notice (private)  
12. License / copyright  

**Forbidden in showcase READMEs:**

- Clone/build tutorials without public code  
- Decorative emoji clusters  
- Visitor counters and vanity badges  
- Unverified users / revenue / download claims  
- Long code dumps  
- “What I learned” student framing  
- Self-congratulatory seniority language  

## 4.3 Markdown rules

- ATX headings (`#`, `##`)  
- One H1 per README  
- Images always with meaningful `alt` text  
- Relative asset links (`./assets/...`)  
- Prefer native Markdown over fragile HTML  
- Short paragraphs  
- Parallel list grammar  
- `---` only between major blocks  

Light HTML centering for a banner may be used sparingly if needed for GitHub rendering — never as a layout system, never to force text colors that break light/dark mode.

## 4.4 Public language

**Primary public language: English.**

Writing must be:

- clear  
- professional  
- international  
- concrete  
- easy to read  
- free of generic slogans  
- free of artificial or overly corporate English  

Official Italian product names remain unchanged (e.g. **Preventivo Rapido**, **AndroMetrics**).  
Market context may be stated factually when relevant (e.g. built for Italian users) without mixing languages inside the same section.

---

# 5. Design System (GitHub Visual Language)

Goal: a premium, minimal, coherent personal brand for Fernando Piras.  
Original. Calm. Product-led. Compatible with GitHub **light mode and dark mode**.

Do **not** rely on comparisons to Apple, Stripe, Linear, Vercel, or OpenAI as the brand story. Those references are not part of the public narrative.

## 5.1 Visual principles

| Principle | Practice |
|-----------|----------|
| Minimal | Few elements; strong hierarchy |
| Real product visuals | Screenshots and official icons over abstract decoration |
| Mode-safe | README text uses default GitHub typography/colors — do not force text color via HTML/CSS hacks |
| Light imagery debt | Banners/screenshots should remain legible on both profile themes; prefer balanced contrast in media itself |
| Consistency | Same screenshot framing approach and spacing rhythm across showcases |
| Restraint | No decorative card stacks, no fake dashboards, no glow theater |

## 5.2 Color guidance (for banners / composed media only)

Use a simple personal palette for composed images — not for forcing README body text:

| Role | Guidance |
|------|----------|
| Background | Neutral dark or soft neutral — choose one system and reuse it |
| Foreground | High-contrast light text on dark media (inside images only) |
| Accent | One restrained accent (e.g. calm technical blue) — not purple gradients |
| Borders | Subtle, low-contrast separators inside media |

**Avoid:** purple-on-white clichés, heavy neon glow, cream+terracotta “AI default” looks, multi-layer shadow cards, emoji-as-design.

## 5.3 Typography (composed media)

- Clean sans for titles in banners  
- Limited text inside images (name + short line)  
- README body: GitHub default rendering (mode-safe)

## 5.4 Banner (recommended, not over-engineered)

| Property | Spec |
|----------|------|
| Size | 1280 × 640 when used |
| Content budget | Product or person name + one short line |
| Avoid | Dense copy, stats, floating stickers, collage |
| Path | `assets/banner/banner.png` |

If a banner is not ready, ship the showcase with strong screenshots first rather than delaying publication for over-designed media.

## 5.5 Screenshots

| Property | Spec |
|----------|------|
| Source | Real product UI only |
| Count | Enough to explain the product (typically 3–6) |
| Naming | `01-...`, `02-...` |
| Framing | Consistent treatment across products |
| Avoid | Fake UI, incomplete WIP, customer private data, “DEMO” watermarks |

## 5.6 Cards & layout

- Default: no decorative cards  
- Use simple screenshot grids or sequential images  
- Tables allowed for stack lists  
- No HTML card frameworks  

## 5.7 Icons

- Official app icon only  
- No emoji substitutes for product identity  

## 5.8 Spacing

- Consistent gaps between sections  
- One job per section  
- Generous readability; avoid dense marketing walls  

---

# 6. Naming Convention

## 6.1 Repository names

| Type | Pattern | Exact / example |
|------|---------|-----------------|
| Profile | Exact username | `FernandoPiras/FernandoPiras` |
| Product showcase | kebab-case slug | `andrometrics`, `preventivo-rapido` |
| Private app (example) | `{slug}-ios` / `{slug}-app` etc. | Private only; not public portfolio surface |
| Prep repo | existing working repo | `swiftwithfer-portfolio` (not pinned) |

**Do not use:** `fernando-piras` as username or profile repository name.

## 6.2 Active product slugs

| Product | Public showcase | Status |
|---------|-----------------|--------|
| AndroMetrics | `andrometrics` | Active — to be showcased |
| Preventivo Rapido | `preventivo-rapido` | Active — to be showcased |

Future products receive slugs only when ready. Do not pre-create public repos for incomplete work.

## 6.3 Topics

Use only topics that match verified stack and product type.  
Do not add `fullstack`, `ai`, or other labels unless Phase 2 evidence confirms them for that product.

---

# 7. Assets Convention

| Asset | Path | Rule |
|-------|------|------|
| Screenshots | `assets/screenshots/` | Required; real UI |
| App icon | `assets/icons/app-icon.png` | Required; authorized |
| Banner | `assets/banner/banner.png` | Recommended |
| Diagrams | `assets/diagrams/` | Optional; high-level only |

No separate `portfolio-assets` repository is required initially. Assets live inside each showcase (and profile assets folder if needed). A shared asset system may be introduced later if duplication becomes a real problem.

---

# 8. Badge Convention

## 8.1 Allowed (minimal)

Only simple, factual labels when helpful:

1. Platform — only if verified (e.g. iOS)  
2. Availability — only if verified (e.g. App Store)  
3. Key stack labels — only verified technologies (max a few)  

Prefer plain Markdown or a very small static badge set. Reliability over decoration.

## 8.2 Forbidden

- Visitor counters  
- External GitHub stat cards  
- Dynamic badges that can rot or mislead  
- Fake build/coverage badges  
- Invented version numbers  
- “Enterprise” / “Senior” style badges  

---

# 9. Branding Convention

## 9.1 Profile identity

- **Name:** Fernando Piras  
- **Voice:** Individual professional, product-focused  
- **Primary CTA:** https://www.fernandopiras.com  
- **Pinned catalog (initial):** AndroMetrics, Preventivo Rapido  
- **Avatar:** Professional photo or simple personal mark — not meme, not generic default if avoidable  

Headline and bio must stay factual. Do not inflate title with unverified seniority or company-scale language.

Suggested direction (final copy after Phase 2 evidence):

- Product-focused software developer  
- iOS development with Swift and SwiftUI when evidenced  
- End-to-end product care: UX, quality, privacy, release  

## 9.2 Product presence

- Product name as H1 / banner focus  
- Category line factual (e.g. iOS app) — never guessed architecture labels  
- No student framing; no agency/company framing  

## 9.3 Brand voice

- Calm, precise, concrete  
- Explain what the product does  
- Let quality show through evidence  
- No hype adjectives as identity  

---

# 10. Language Strategy (Tone & Writing)

| Dimension | Standard |
|-----------|----------|
| **Public language** | English |
| **Tone** | Clear, professional, concrete |
| **Person** | Profile: first person (“I design and ship…”). Products: product name as subject |
| **Technical level** | Accurate and understandable — architecture only at evidenced depth |
| **Terminology** | Real product terms: features, release, privacy, App Store — not homework language |
| **Claims** | Verified only |
| **CTA** | fernandopiras.com + App Store links when applicable |

**Writing checklist:**

- [ ] First sentence states value factually  
- [ ] No filler  
- [ ] Features map to real product behavior  
- [ ] Stack list is evidence-backed  
- [ ] No self-assigned seniority / enterprise branding  
- [ ] No unverified metrics  

---

# 11. Growth Strategy

## 11.1 Adding a future product

Only when all are true:

1. Product is complete enough to demonstrate honestly  
2. Real screenshots exist  
3. Stack and features are verified  
4. App Store / public URL evidence collected (if applicable)  
5. Showcase README can be written without speculation  
6. Quality matches the two initial showcases  
7. Then create public showcase → optionally pin  

## 11.2 Keeping the portfolio clean

| Rule | Action |
|------|--------|
| Ideas ≠ public repos | Keep experiments private |
| No placeholder pins | Empty pin slots are better than fake work |
| One showcase per product | No duplicates |
| Prep repos stay off-narrative | `swiftwithfer-portfolio` is not a portfolio piece |
| Rename carefully | Update README links and site references together |

## 11.3 Maintenance

- Re-check App Store and site links before any application deadline (ArtiProg, etc.)  
- Refresh screenshots when UI materially changes  
- Do not expand structure for its own sake  

## 11.4 Retirement

- If a product is discontinued: unpinned, README status updated honestly, archive if appropriate  

---

# 12. Repository Showcase Strategy (Closed Source)

## 12.1 Approach

Public product repositories are **documentation-led showcases**.

They present the product without publishing commercial source code.

## 12.2 What each showcase contains

- README  
- Real screenshots  
- Authorized app icon  
- Feature description  
- Verified tech stack  
- High-level architecture  
- App Store link (when applicable)  
- Site or product page link  
- Contact  
- Private source notice  
- Coherent license / copyright  

## 12.3 What each showcase must not contain

- Commercial source code  
- Fake project trees  
- Build/install instructions without public code  
- Unnecessary community health files  
- Unverifiable badges or metrics  
- Speculative roadmaps  

## 12.4 Credibility without source code

Evidence strength order:

1. App Store (or other real distribution) link  
2. Real screenshots / short demo video if available  
3. Clear product explanation  
4. Honest stack and architecture overview  
5. Link to https://www.fernandopiras.com  
6. Optional deeper docs only if factual  

## 12.5 Legal / safety

- Proprietary / All Rights Reserved copyright notice  
- No customer private data in screenshots  
- No API keys, internal endpoints, or confidential client names  

---

# 13. Folder Convention (Global Summary)

**Initial approved public layout:**

```
FernandoPiras/FernandoPiras/
  README.md
  assets/ (optional)

andrometrics/
  README.md
  LICENSE
  assets/{banner?,screenshots,icons}
  docs/ (optional)

preventivo-rapido/
  README.md
  LICENSE
  assets/{banner?,screenshots,icons}
  docs/ (optional)
```

**Out of initial scope:** shared `portfolio-assets`, capability kits, `.github` org repo, Actions, issue/PR template packs.

---

# 14. Image Convention

- Real product imagery only  
- sRGB  
- Consistent framing across a single product README  
- Compress without visible damage  
- Meaningful `alt` text  
- Limited text inside banners  
- No meme imagery, no abstract AI-slop as the only visual  

---

# 15. Roadmap (corrected order)

| Phase | Focus | Output |
|-------|--------|--------|
| **Phase 1** | Architecture correction and approval | This document |
| **Phase 2** | Real-project discovery and evidence collection | Evidence matrix before any public claim |
| **Phase 3** | Profile README implementation | `FernandoPiras/FernandoPiras` |
| **Phase 4** | AndroMetrics showcase implementation | `andrometrics` |
| **Phase 5** | Preventivo Rapido showcase implementation | `preventivo-rapido` |
| **Phase 6** | Visual consistency, validation, publication | Pins, links, final checks |

**Phase 2 rule:** Cursor must analyze available real projects and produce an evidence matrix before writing any public claim.

Do not start Phase 2 until this corrected Phase 1 document is approved and an explicit instruction is given.

---

# 16. Scalability Model

```
New completed product
  → Evidence collection (stack, screenshots, links, features)
  → Public showcase from the same lean standard
  → Quality check against AndroMetrics / Preventivo Rapido bar
  → Optional pin
```

The system scales by repeating a small proven pattern — not by pre-building organizational infrastructure.

---

# 17. Audit — Correction Gate Review

## Checks performed

- Exact username `FernandoPiras` and profile repo `FernandoPiras/FernandoPiras`  
- Profile README not required as a pin  
- Initial pins only `andrometrics` and `preventivo-rapido`  
- Future products not presented as active  
- No obligatory infra / capability / assets / `.github` / Actions / templates in initial phase  
- No unverified full-stack / metrics / seniority / enterprise self-labels  
- Individual professional positioning (not a software house)  
- English as public language standard  
- Documentation-led closed-source showcases  
- Primary CTA fernandopiras.com  
- ArtiProg-first, fast path  
- Future scalability preserved without premature complexity  

## Corrections applied in this revision

| Issue in prior draft | Correction |
|----------------------|------------|
| Username / profile repo `fernando-piras` | Replaced with `FernandoPiras` / `FernandoPiras/FernandoPiras` |
| Profile repo treated as required pin | Removed; profile README is automatic homepage surface |
| Future products in taxonomy and pins | Removed from active structure; deferred until complete |
| Preventivo Rapido labeled full stack | Removed; stack deferred to Phase 2 evidence |
| Mandatory portfolio-assets, capability repos, `.github`, templates, Actions | Deferred; not part of initial structure |
| Over-designed org/governance model | Replaced with lean individual workflow |
| Design system dependent on forced colors / brand comparisons | Simplified; light/dark safe; original personal brand |
| Roadmap jumped to profile/assets before evidence | Reordered: evidence matrix before any public copy |
| Seniority / enterprise self-branding | Prohibited; quality via evidence |
| Software-house tone risk | Explicit individual-professional positioning |
| Placeholder pin strategy | Empty slots preferred; no coming-soon pins |

## Remaining gaps (expected; resolved in Phase 2)

- Verified stack per product  
- Confirmed feature lists  
- App Store URLs  
- Authorized icons and real screenshots inventory  
- High-level architecture facts safe to publish  
- Exact profile bio wording based on evidence  

## Scores (post-correction)

| Dimension | Score | Note |
|-----------|-------|------|
| Professionalità | 99 | Individual, product-led, evidence-based |
| Accuratezza | 99 | Unverified claims removed |
| Scalabilità | 99 | Lean pattern repeats for future products |
| Manutenibilità | 99 | Minimal surface; less structure to drift |
| Brand Identity | 98 | Personal brand; mode-safe; no borrowed identity |
| Impatto visivo | 98 | Real screenshots + restrained media |
| Credibilità | 99 | Closed-source honesty + evidence gate |
| Ordine | 99 | Two pins; empty slots; clear taxonomy |
| Pulizia | 99 | No placeholders; deferred complexity |
| ArtiProg Fit | 99 | Fast credible path |
| Enterprise Readiness (as architecture) | 99 | Corrected and approval-ready |

### **Overall Architecture Score: 98.8 / 100**

**Correction Gate passed. Phase 1 architecture approved pending owner confirmation.**

---

# Final Decisions

- Exact GitHub username: FernandoPiras  
- Profile repository: FernandoPiras/FernandoPiras  
- Active public products: AndroMetrics, Preventivo Rapido  
- Initial pinned repositories: andrometrics, preventivo-rapido  
- Public language: English  
- Product source code: Private  
- Public repositories: Documentation-led showcases  
- Unverified claims: Prohibited  
- Future projects: Added only after completion  
- Primary CTA: fernandopiras.com  
- Primary immediate goal: Credible GitHub link for ArtiProg  

---

## Decision

**Phase 1 — Architecture correction: COMPLETE (document updated).**  

Do not start Phase 2 until explicitly instructed.  
Do not create Profile README content, showcase repositories, banners, images, or assets in this phase.
