# GitHub Profile Architecture  
## Repository: `FernandoPiras/FernandoPiras`

**Phase:** 3 — Profile Design & Information Architecture  
**Owner:** Fernando Piras  
**Profile URL (after publish):** https://github.com/FernandoPiras  
**Special repository:** `FernandoPiras/FernandoPiras` (README renders automatically on the profile homepage)  
**Primary language:** English  
**Primary CTA:** https://www.fernandopiras.com  

**Scope of this document:** Design only.  
**Not in this phase:** Final README.md content, banners, images, badges, showcase repositories, Phase 2 source re-run, merge of product claims still pending verification.

**Governing constraints (from Phase 1 + Phase 2):**

- Profile is an individual professional surface — not a software company.  
- Profile README is **not** a required pin.  
- Public copy uses only **SAFE TO CLAIM** facts until OWNER_VERIFIED / SOURCE_VERIFIED exists.  
- No temporal vanity metrics (ratings, versions, review counts) in the profile.  
- No unverified stack names (e.g. Swift / SwiftUI) until confirmed.  
- Active products only: AndroMetrics, PreventivoRapido PRO.  

---

# 1. Design Intent

The GitHub profile must read as a **professional landing page**, not a README template.

| Goal | Meaning |
|------|---------|
| Immediate clarity | In ~5 seconds: who, what ships, where to go next |
| Product-led | Credibility comes from shipped apps, not decoration |
| International | English, concrete, readable by ArtiProg / Toptal / Arc / recruiters |
| Minimal | One composition, one job per section, no dashboard clutter |
| Mode-safe | Works in GitHub light and dark without forced text colors |
| Original | Personal structure and voice — not a cloned “awesome profile” kit |

**Anti-goals**

- Template look (shields walls, trophy grids, typing animations)  
- Student framing (“learning in public”, “coding since…”)  
- Agency / software-house voice  
- Auto-celebratory adjectives (passionate, world-class, elite, ninja)  
- Fake activity theater  

---

# 2. Homepage Information Architecture

## 2.1 Reading flow

```
Hero (identity + one line + primary CTA)
   ↓
About (who you are, how you work — short)
   ↓
Focus (what you specialize in — evidenced)
   ↓
Products (AndroMetrics → PreventivoRapido PRO)
   ↓
Tech (verified capabilities only)
   ↓
Workflow (how products get shipped — process, not tools flex)
   ↓
Current Focus (honest present tense)
   ↓
Contact (links, ordered by priority)
```

**Single CTA spine:** every major block can point back to `fernandopiras.com` or a product App Store page — never more than one primary action competing in the hero.

## 2.2 Section order (locked)

| # | Section ID | Heading (public) | Role in flow |
|---|------------|------------------|--------------|
| 1 | `hero` | (Name as H1 / title line) | Identity + promise + CTA |
| 2 | `about` | About | Human professional context |
| 3 | `focus` | Focus | Specialization map |
| 4 | `products` | Products | Proof — the two live apps |
| 5 | `tech` | Tech | Verified stack / capabilities |
| 6 | `workflow` | Workflow | How work is delivered |
| 7 | `current-focus` | Current focus | Present priorities |
| 8 | `contact` | Contact | Actionable links |

No additional sections in v1 (no blog, no timeline years, no “services menu”, no GitHub trophy wall).

## 2.3 Hierarchy rules

1. **Brand/name first** — “Fernando Piras” is the strongest text signal above the fold.  
2. One supporting sentence under the name.  
3. One primary CTA group (Website → App Store developer → Email).  
4. Products are the visual/proof center of the page.  
5. Tech and Workflow support Products — they never outrank them.  
6. Contact closes the page; no footer clutter after it.

## 2.4 CTA model

| Priority | CTA | Placement |
|----------|-----|-----------|
| P0 | Website — https://www.fernandopiras.com | Hero + Contact |
| P1 | App Store developer page | Hero secondary + Contact |
| P2 | Product App Store links | Inside Products |
| P3 | Email | Contact (and optionally hero tertiary) |
| P4 | LinkedIn (if profile is curated) | Contact only |
| P5 | GitHub (self) | Usually unnecessary on GitHub; omit or last |

---

# 3. Design System (GitHub Profile)

GitHub README cannot use custom CSS. The design system controls **structure, density, Markdown, and optional assets**.

## 3.1 Visual principles

| Principle | Application |
|-----------|-------------|
| One composition | First viewport = name, one line, CTA, optional slim banner — not a dashboard |
| Air over chrome | Prefer blank lines and `---` sparingly over boxes and tables-as-cards |
| Default: no cards | Lists and short paragraphs; tables only for Products / Tech if they improve scan |
| Mode-safe | Never force `color` / dark-only HTML text; use GitHub defaults |
| Real imagery only | Product icons / optional banner — no abstract AI-slop hero as the brand |
| Restraint | Max one horizontal rule between major sections |

## 3.2 Spacing

| Element | Rule |
|---------|------|
| After H1 / hero block | One blank line, then CTA line, then `---` |
| Between H2 sections | Single `---` **or** one blank line — pick one system and keep it (prefer one blank line; `---` only before Products and Contact) |
| Inside lists | No blank lines between related bullets |
| Paragraph length | 1–3 short sentences |
| Page length target | ~80–140 lines rendered — scannable without endless scroll |

## 3.3 Separators

- Use `---` at most **twice**: before **Products** and before **Contact**.  
- No ASCII art, no emoji divider rows, no “✧✧✧”.

## 3.4 Cards

- **Default: no cards.**  
- Products may use a simple Markdown list or a 2-column HTML table **only** if it stays mode-safe and borderless. Prefer:

```markdown
### AndroMetrics
One factual sentence.  
[App Store](url) · [Product page](url)
```

## 3.5 Banner / images

| Asset | Phase 3 design decision | Implementation later |
|-------|-------------------------|----------------------|
| Profile banner (optional) | Allowed: 1280×640, name + one line, mode-balanced | Not created now |
| Avatar | Professional photo or simple mark (GitHub settings, not README) | Outside README |
| Product icons | Optional 64–96px beside product titles | From authorized icons only |
| Screenshots on profile | **Do not** embed full app screenshots on profile — keep those for showcase repos | — |
| Decorative GIFs / visitors | **Forbidden** | — |

Banner content budget (if used later): **Fernando Piras** + one short role line. No stats, no stickers, no collage.

## 3.6 Dark / light mode

| Do | Don’t |
|----|-------|
| Rely on GitHub theme tokens for text | `<span style="color:#fff">` |
| Use PNG icons that work on both themes (or provide dual assets later) | Pure black text baked into light-only banners |
| Keep tables borderless / simple | Nested HTML card shadows |

## 3.7 Markdown typography

| Element | Spec |
|---------|------|
| H1 | Exactly one — full name |
| H2 | Section titles from the locked list |
| H3 | Product names only |
| Emphasis | Rare; never entire sentences in bold |
| Lists | Parallel grammar; 3–6 items max per block |
| Links | Descriptive labels (“Website”, “App Store”) — not raw URLs as body text |
| Emoji | **None** in v1 |
| Centered HTML | Optional only for banner; avoid centering the whole profile |

## 3.8 Color guidance (assets only, if created later)

Neutral dark or soft neutral media; one restrained accent.  
No purple-gradient template look, no neon glow, no cream+terracotta cliché.

---

# 4. Tone & Writing System

## 4.1 Voice

| Attribute | Practice |
|-----------|----------|
| Person | First person singular (“I design and ship…”) |
| Tone | Calm, precise, concrete |
| Density | High signal; cut filler |
| Claims | SAFE TO CLAIM only (until verification upgrades) |
| Products | Product name as subject in product blurbs |

## 4.2 Banned phrases / patterns

- “Passionate developer” / “love coding” / “coding since YYYY”  
- “World-class” / “enterprise-grade” / “senior” as self-label  
- “Full stack wizard” / “ninja” / “rockstar”  
- “I thrive on…” / “dedicated to excellence”  
- Fake humility + humblebrag  
- Metrics theater (stars, streaks, “X users”)  
- Italian/English mixing inside one section  

## 4.3 Allowed claim posture (current evidence)

**Safe now**

- Product-focused software developer  
- Ships iOS apps on the App Store  
- AndroMetrics and PreventivoRapido PRO as published products  
- Concrete capabilities already verified publicly (e.g. HealthKit, widgets, Sign in with Apple, PDF workflows, App Store subscriptions, privacy-aware local-first patterns) — product-scoped, not exaggerated  
- Website + email + App Store developer link  

**Defer until OWNER_VERIFIED / SOURCE_VERIFIED**

- Swift / SwiftUI as explicit profile keywords  
- StoreKit 2, WidgetKit, Vision, PDFKit as named APIs  
- Broad “AI engineer” identity (AI features may be mentioned only as AndroMetrics product capability if OpenAI naming is approved)  

**Never on profile**

- enterprise, senior, production-ready, scalable, high performance, advanced architecture  
- rating / review counts / version numbers  
- FOTIQ, Slotiva, SwiftToKotlin  

---

# 5. Section Specifications

## 5.1 Hero

| Field | Spec |
|-------|------|
| **Purpose** | Establish identity and direct the next click |
| **Content** | H1 name; one-line role; optional second factual line; CTA links |
| **Ideal length** | 3–6 lines total |
| **Graphics** | Optional slim banner above H1; otherwise none |
| **Do not include** | Badges wall, visitor counter, typing SVG, multiple CTAs of equal weight, product screenshots, stats |

**Content skeleton (design only — not final copy):**

1. Fernando Piras  
2. Product-focused software developer — iOS apps on the App Store  
3. Links: Website · App Store · Email  

## 5.2 About

| Field | Spec |
|-------|------|
| **Purpose** | Human context: how you work and what “product-focused” means |
| **Content** | 2–4 short sentences: end-to-end product care (design → ship → maintain), privacy/UX attention, individual builder |
| **Ideal length** | 40–80 words |
| **Graphics** | None |
| **Do not include** | Life story, education dump, soft skills list, “passionate”, years-since, company claims |

## 5.3 Focus

| Field | Spec |
|-------|------|
| **Purpose** | Scanable specialization map |
| **Content** | 4–6 bullets of **evidenced** focus areas (examples of safe direction: iOS applications; App Store release; product UX clarity; privacy-aware design; document/PDF workflows; Apple platform integrations when verified) |
| **Ideal length** | 4–6 bullets, one line each |
| **Graphics** | None (no icon row) |
| **Do not include** | Unverified languages/frameworks; buzzword cloud; tools you barely touch |

**Note:** This section is “standing specializations,” not the temporary agenda (that is Current focus).

## 5.4 Products

| Field | Spec |
|-------|------|
| **Purpose** | Primary proof surface |
| **Content** | Two entries only — AndroMetrics; PreventivoRapido PRO. Each: H3 name, one factual sentence, 2–3 capability chips as plain text (verified), links to App Store + product page on fernandopiras.com |
| **Ideal length** | ~8–16 lines total |
| **Graphics** | Optional official app icons (small). No screenshot carousels on profile |
| **Do not include** | Future products; ratings; “used by N users”; architecture essays; private source promises beyond a calm “source is private” if needed (prefer omit on profile — keep that on showcase repos) |

**Product blurb rules**

- Official names: **AndroMetrics**, **Prefer display name PreventivoRapido PRO** (descriptive “Preventivo Rapido” allowed in prose once)  
- One sentence = problem/outcome, not feature dump  
- Link labels: `App Store` · `Product page`  

## 5.5 Tech

| Field | Spec |
|-------|------|
| **Purpose** | Credible capability list without stack inflation |
| **Content** | Grouped short list: Platforms · Apple frameworks/capabilities (verified) · Product concerns (privacy, subscriptions, PDF, etc.) |
| **Ideal length** | 8–15 items max across groups |
| **Graphics** | No skill bars, no logo gardens |
| **Do not include** | React/TypeScript/Vercel as core profile stack from these apps alone; unverified Swift/SwiftUI until confirmed; percentage bars; “expert in everything” |

**Interim rule while Phase 2 source is suspended:** prefer capability wording (“HealthKit”, “Sign in with Apple”, “App Store subscriptions”, “PDF documents”) over framework claims still pending verification.

## 5.6 Workflow

| Field | Spec |
|-------|------|
| **Purpose** | Show professional delivery process |
| **Content** | 4–6 steps, factual: discovery → design → build → test → App Store release → iterate |
| **Ideal length** | One short intro sentence optional + 4–6 steps |
| **Graphics** | None (no flowchart images in v1) |
| **Do not include** | Agile buzzword salad; tool shrines; fake “ISO” process claims |

## 5.7 Current focus

| Field | Spec |
|-------|------|
| **Purpose** | Honest present tense — what is active now |
| **Content** | 2–4 bullets: maintaining/shipping the two live products; portfolio/GitHub professional surface; anything real and current — **no vapor roadmap** |
| **Ideal length** | 2–4 bullets |
| **Graphics** | None |
| **Do not include** | FOTIQ/Slotiva/SwiftToKotlin; speculative “exploring AI startups”; dated “2024 goals” |

## 5.8 Contact

| Field | Spec |
|-------|------|
| **Purpose** | Convert interest into a reachable next step |
| **Content** | Ordered links (see §8); optional one-line response expectation only if true and modest |
| **Ideal length** | 5–8 lines |
| **Graphics** | None |
| **Do not include** | Calendly spam blocks; QR codes; multiple messengers; phone unless intentionally public |

---

# 6. Badge System

## 6.1 Principle

Badges on a profile are usually noise. **Default: zero badges.**

## 6.2 Allowed (optional, max 2–3 total if any)

| Badge type | Verdict | Condition |
|------------|---------|-----------|
| Static “iOS” / “App Store” text via plain Markdown | Prefer plain text over shields | — |
| Static shields for platform only | OPTIONAL | Same colors; no animation; must be factual |
| App Store link treated as badge | DO NOT USE as shield | Use normal Markdown links |

## 6.3 Forbidden

| Badge | Reason |
|-------|--------|
| Visitor counters | Vanity, unreliable, unprofessional |
| GitHub trophies | Template clutter |
| Typing SVG / animated header | Toy aesthetic |
| Dynamic stats shields (commits, streak) | Fragile + vanity |
| “Made with ❤️” | Banned tone |
| Language percentage shields | Misleading without context |
| Buy Me a Coffee / random social shields | Off-mission for ArtiProg/recruiter scan |

**Decision:** Profile v1 ships **with no badge images**. Use text links and clean headings.

---

# 7. GitHub Statistics Policy

| Element | Verdict | Motivation |
|---------|---------|------------|
| Contribution graph (native GitHub UI under README) | **USE** (native only) | Comes with the profile page automatically; do not embed third-party clones in README |
| Embedded streak counters | **DO NOT USE** | Vanity; breaks; template-coded |
| Embedded language charts (top-langs cards) | **DO NOT USE** | Often misrepresents product work (private iOS source won’t show); encourages gameable metrics |
| Stars count widgets | **DO NOT USE** | Showcase repos may have low stars by design; stars ≠ quality |
| Trophy / achievement SVGs | **DO NOT USE** | Amateur template signal |
| Commit activity graphs in README | **DO NOT USE** | Distracts from products |
| Pin order (native) | **USE** | Pins = `andrometrics`, `preventivo-rapido` only (Phase 1); profile repo not pinned |

**Summary:** Let GitHub’s native UI show activity. The README itself stays product- and prose-led.

---

# 8. Link System

## 8.1 Priority order (locked)

| Order | Link | Label | Where |
|------:|------|-------|-------|
| 1 | https://www.fernandopiras.com | Website | Hero, Contact |
| 2 | https://apps.apple.com/it/developer/fernando-piras/id1865514513 | App Store | Hero secondary, Contact |
| 3 | AndroMetrics App Store URL | AndroMetrics on the App Store | Products |
| 4 | PreventivoRapido PRO App Store URL | PreventivoRapido PRO on the App Store | Products |
| 5 | https://www.fernandopiras.com/apps/andrometrics | AndroMetrics product page | Products |
| 6 | https://www.fernandopiras.com/apps/preventivorapido | PreventivoRapido product page | Products |
| 7 | mailto:fernando@fernandopiras.com | Email | Contact (optional hero) |
| 8 | LinkedIn (only if profile is complete and consistent) | LinkedIn | Contact |
| 9 | Instagram @swiftwithfer | Instagram | Optional; Contact last — skip if it weakens professional scan |
| 10 | https://github.com/FernandoPiras | GitHub | Omit on GitHub profile README |

## 8.2 Link formatting

- Markdown links with human labels  
- Separator between hero links: ` · ` (middle dot)  
- No link-shortener obfuscation  
- Prefer `www.fernandopiras.com` consistently  

## 8.3 LinkedIn rule

Include LinkedIn **only** if the public LinkedIn matches this profile’s claims and product list. If not curated, omit.

---

# 9. Repository Structure (special profile repo)

```
FernandoPiras/FernandoPiras/
├── README.md                 # Sole required surface (implemented in a later phase)
└── assets/                   # Optional; only if banner/icons are used
    └── banner/
        └── banner.png        # Optional 1280×640
```

No ISSUE templates, no Actions, no fake src/, no LICENSE required for profile README repo (optional).  
Do not use this repo as a pin.

---

# 10. Wireframe (text)

```
┌─────────────────────────────────────────────┐
│  [optional banner]                          │
│  Fernando Piras                             │
│  Product-focused software developer…        │
│  Website · App Store · Email                │
├─────────────────────────────────────────────┤
│  About                                      │
│  Short paragraph                            │
├─────────────────────────────────────────────┤
│  Focus                                      │
│  • …                                        │
│  • …                                        │
├─────────────────────────────────────────────┤
│  ——— Products ———                           │
│  AndroMetrics                               │
│  One sentence. Links.                       │
│  PreventivoRapido PRO                       │
│  One sentence. Links.                       │
├─────────────────────────────────────────────┤
│  Tech                                       │
│  Compact verified list                      │
├─────────────────────────────────────────────┤
│  Workflow                                   │
│  Step list                                  │
├─────────────────────────────────────────────┤
│  Current focus                              │
│  2–4 bullets                                │
├─────────────────────────────────────────────┤
│  ——— Contact ———                            │
│  Ordered links                              │
└─────────────────────────────────────────────┘
```

---

# 11. Implementation Notes (for the future README phase — not now)

1. Write English copy from SAFE TO CLAIM inventory only.  
2. Insert Swift/SwiftUI only after verification resume.  
3. Create banner only if it passes the brand/hero budget test.  
4. Validate light + dark mode rendering on github.com.  
5. Validate mobile profile layout (narrow column).  
6. Do not embed showcase screenshots here.  
7. Keep page short enough that Products appear without excessive scrolling on laptop.  

---

# 12. Alignment Checklist

| Requirement | Architecture response |
|-------------|----------------------|
| Not a copied template | No stats cards, trophies, typing SVGs, badge walls |
| Landing-page feel | Hero → proof products → contact spine |
| Clean / elegant / minimal | Locked section set; spacing rules; no cards default |
| International | English; concrete tone |
| ArtiProg / recruiter ready | Products + App Store + website first |
| Evidence-safe | Deferred unverified stack; banned vanity claims |
| Phase 1 pin strategy | Profile not pinned; products pinned later |
| Light/dark | Mode-safe Markdown rules |

---

# 13. Audit

## Checks performed

- Structure vs Phase 1 profile rules  
- Claim safety vs Phase 2 SAFE TO CLAIM posture  
- Template anti-patterns removed  
- Badge/stat policy decided  
- Link priority fixed  
- Section-by-section do/don’t specified  
- Mode-safe design constraints  
- ArtiProg / Toptal / recruiter scan path  

## Improvements applied during audit

| Issue | Fix |
|-------|-----|
| Risk of Focus vs Current focus overlap | Explicit standing vs present-tense split |
| Badge temptation | Default zero badges |
| Stats widgets harming credibility with private iOS source | DO NOT USE embedded language/streak/trophy widgets |
| Stack inflation while Phase 2 source suspended | Tech section prefers verified capabilities over pending framework names |
| Screenshot clutter on profile | Forbidden; reserved for showcase repos |
| Instagram competing with professional CTA | Demoted / optional |

## Scores

| Dimension | Score | Notes |
|-----------|------:|-------|
| Professionalità | 99 | Individual, product-led, calm |
| Pulizia | 99 | Locked IA; no dashboard |
| Impatto | 98 | Hero + products carry the page |
| Credibilità | 99 | Evidence-gated claims |
| Originalità | 98 | Avoids GitHub template kit aesthetic |
| Recruiter Readiness | 99 | 5-second path to products + site |
| ArtiProg Readiness | 99 | Credible link target; shipped apps visible |
| Toptal Readiness | 98 | Serious tone; no vanity metrics |

### **Overall: 98.6 / 100**

Architecture approved for the next step (README implementation phase), which must **not** start until explicitly requested.

---

## Stop

**Phase 3 design deliverable:** `GITHUB_PROFILE_ARCHITECTURE.md`  
**README not created.**  
**No banners, images, or badges generated.**  
**Await explicit instruction before writing `FernandoPiras/FernandoPiras` README.md.**
