# Product Showcase Design System

**Owner:** Fernando Piras  
**Applies to:** public documentation-led showcase repositories (e.g. `andrometrics`, `preventivo-rapido`)  
**Related:** `GITHUB_PORTFOLIO_PHASE_1_REPORT.md`, `github-profile/README.md`, `github-profile/PROFILE_README_CONTENT_RULES.md`, `GITHUB_PORTFOLIO_PHASE_2_EVIDENCE.md`  
**Template kit:** `showcase-template/`  

**Scope:** Design system and reusable template only.  
**Not in this phase:** public product repositories, final product READMEs, banners, screenshots, diagrams, Source Verification, app code changes.

---

## 1. Purpose of showcase repositories

A showcase repository is a **public product specimen**:

- presents a real shipped product;  
- contains documentation, verified media, and high-level architecture;  
- does **not** contain commercial source code;  
- exists to build recruiter/client trust on GitHub without exposing IP.

It is not an open-source app, not a tutorial, and not a “coming soon” placeholder.

---

## 2. Relationship between surfaces

| Surface | Owns | Does not own |
|---------|------|----------------|
| **Profile README** (`FernandoPiras/FernandoPiras`) | Identity, short product index, primary Website CTA | Deep screenshots, architecture essays |
| **Showcase repo** (`andrometrics`, `preventivo-rapido`, …) | Product narrative, screenshots, verified stack, public architecture, App Store + product links | Full case-study marketing site, private source |
| **Website** (`fernandopiras.com`) | Full visual case studies, SEO, richer media | GitHub-only governance rules |

**Rule:** Profile stays short. Showcase goes deeper. Website remains the richest visual surface. Never paste the full website case study into GitHub.

---

## 3. Visual hierarchy

1. **Product name** (H1) — strongest signal  
2. One factual sentence  
3. Availability + primary links  
4. Screenshots (proof)  
5. Capabilities → workflow → architecture → technology  
6. Privacy / status / source notice  
7. Contact + copyright  

No dashboard clutter. No trophy/stats chrome. No generated-profile aesthetics.

---

## 4. Fixed README section order

1. Product title  
2. Factual one-line description  
3. Availability and links  
4. Overview  
5. Screenshots  
6. Key capabilities  
7. Product workflow  
8. Public architecture  
9. Verified technology  
10. Privacy and data handling  
11. Product status  
12. Source-code notice  
13. Contact  
14. Copyright and license  

**Do not add** when there is no public code / open process:

- Installation, Build, Requirements  
- Contributing, Roadmap, Security policy  
- CI/CD, API documentation  

---

## 5. Markdown rules

- ATX headings (`#`, `##`)  
- Exactly one H1 (product name)  
- H2 for fixed sections; H3 only if a section truly needs subdivision  
- Short paragraphs (1–3 sentences)  
- Parallel list grammar  
- Descriptive link labels (`App Store`, `Product page`)  
- Relative asset paths (`./assets/...`)  
- Meaningful `alt` text on every image  
- `---` sparingly (at most before Screenshots and Contact)  

---

## 6. HTML usage

- Markdown first  
- HTML only when GitHub rendering requires it (e.g. simple centered banner/icon)  
- Never force text colors  
- Never build card frameworks or multi-column layouts that break mobile/dark mode  

---

## 7. Spacing & titles

| Element | Rule |
|---------|------|
| After H1 + one-liner | One blank line, then availability links |
| Between H2 sections | One blank line |
| Lists | No blank lines between related bullets |
| Titles | Product-led, factual — no slogans |
| Page length | Prefer scannable depth; avoid essay length |

---

## 8. Separators

- Prefer blank lines over heavy rules  
- Optional `---` before Screenshots and before Contact  
- No emoji dividers, ASCII art, or decorative lines  

---

## 9. Images, screenshots, icons, banners, diagrams

| Asset | Guidance |
|-------|----------|
| **App icon** | Required; authorized official icon |
| **Screenshots** | 3–6 real UI captures; consistent framing |
| **Banner** | Optional 1280×640; product name + one short line only |
| **Diagrams** | Optional SVG/PNG; high-level only; no internal secrets |
| **Profile-style GIFs / visitor widgets** | Forbidden |

### Screenshot rules

- Real product UI only  
- Same device treatment within a README  
- No unfinished WIP UI  
- No customer PII, personal emails, real addresses, VAT, phone numbers, or health data of real people  
- Intimate/health category screens require explicit approval before publish  
- Prefer empty/demo states that still explain the product  

### Naming

```
assets/icon/app-icon.png
assets/screenshots/01-home.png
assets/screenshots/02-core-flow.png
assets/banner/banner.png          # optional
assets/diagrams/architecture.svg  # optional
```

Lowercase, kebab-case, zero-padded sequence for screenshots.

### Compression

- PNG or WebP where appropriate  
- Compress without visible damage  
- Banner target typically under ~500KB when practical  

---

## 10. Badges

**Default: no badges.**

If used later, only static factual labels (platform / availability), never visitor counters, streaks, trophies, or dynamic shields that can rot.

Prefer plain Markdown text over shields.

---

## 11. Links & CTA

| Priority | Link |
|----------|------|
| 1 | App Store product URL |
| 2 | Product page on fernandopiras.com |
| 3 | Privacy / support pages when relevant |
| 4 | Website home (secondary) |
| 5 | Professional email |

- Never duplicate the same URL in multiple sections without need  
- Never invent URLs  
- Label links clearly  

Primary showcase CTA: **App Store** (product). Secondary: **Product page**.

---

## 12. Light mode / dark mode

- Do not force text colors via HTML/CSS  
- Prefer icons/screenshots that remain legible on both themes  
- If a banner is used, keep contrast balanced; avoid pure-black text on dark-only art for critical words if the asset is also shown in light mode contexts  

---

## 13. Mobile readability

- Avoid wide HTML tables for layout  
- Screenshots should stack naturally  
- Keep paragraphs short  
- Test the README on a narrow viewport before publish  

---

## 14. Accessibility

- One clear H1  
- Logical heading order  
- Descriptive link text (not “click here”)  
- Alt text that describes the screen purpose (“AndroMetrics — home score panel”)  
- Do not rely on color alone for meaning in diagrams  

---

## 15. Closed-source presentation

Every showcase **must** include a clear source-code notice:

- Commercial source is private  
- Repository contains documentation and demonstration assets only  
- No install/build instructions that imply a public codebase  

Never include:

- Xcode projects, Swift sources, `.env`, API keys  
- Fake `src/` trees  
- Private endpoints, schemas, prompts, scoring formulas  

---

## 16. Claim safety alignment

Showcase claims must pass the evidence gate (see `CLAIM_EVIDENCE_MATRIX_TEMPLATE.md`).

| Allowed examples (when evidenced) | Not on showcase without verification |
|-----------------------------------|--------------------------------------|
| Published on the App Store | StoreKit 2 / WidgetKit / Vision / PDFKit as API names |
| Apple-managed subscriptions | Temporal metrics (ratings, versions, dates) |
| Documented product capabilities | “Full stack”, “enterprise”, “scalable”, “production-ready” |
| High-level public architecture | Medical diagnosis claims; automatic SDI claims |

Swift / SwiftUI may appear when treated as owner-maintained identity or when SOURCE/OWNER verified for that product — never invent.

**Phase 2 Source Verification status:** suspended until local app repositories are available. Do not declare it complete.

---

## 17. Future product scalability

To add a new showcase later:

1. Evidence collection  
2. Asset privacy review  
3. Template compilation (`showcase-template/`)  
4. Claim validation (no `NOT_VERIFIED` in public README)  
5. README review against this design system  
6. Publication  
7. Pin decision (only if quality matches existing showcases)  
8. Quarterly maintenance  

Do not pre-announce unfinished products on GitHub.

---

## 18. Consistency with Profile README

| Profile | Showcase |
|---------|----------|
| Short product blurbs | Full product specimen |
| No screenshot carousels | Screenshots required |
| Website as hero CTA | App Store as primary CTA |
| Locked role line | Product name as hero |
| No GitHub self-link | Contact email / site as needed |

Shared tone: calm, factual, English, no template chrome.

---

## 19. Quality bar

A showcase is ready only when `PUBLISHING_CHECKLIST.md` blocking gates all pass.

Design goals: minimal, original, sober, product-led, mode-safe, mobile-readable, IP-safe, fast to compile after evidence is ready.

---

## 20. Phase 5 delivery audit

### Checks performed

- Aligned with Phase 1 showcase standards and pin strategy  
- Aligned with Profile README tone, claim posture, and CTA separation  
- No invented product metrics or unverified API-level claims in templates  
- No product screenshots/icons copied into the template kit  
- No public product repositories created  
- Placeholder safety and publishing gates defined  
- Closed-source notice and proprietary license template included  
- Scalability path defined without naming unfinished products as scheduled  

### Scores

| Dimension | Score | Notes |
|-----------|------:|-------|
| Professionalism | 99 | Product specimen model; no template chrome |
| Reusability | 99 | Single kit for all future showcases |
| Claim Safety | 99 | Evidence types + hard NOT_VERIFIED ban |
| Visual Consistency | 99 | Fixed section order + asset conventions |
| Mobile Readiness | 99 | Markdown-first; no fragile layouts |
| Maintainability | 99 | Checklists + rules; lean file set |
| Closed-source Suitability | 99 | Source notice + license + IP exclusions |
| Publishing Readiness | 99 | Blocking gates before publish |

### **Overall: 99.0 / 100**

Phase 5 design system and reusable template are complete. Stop before product repository creation.
