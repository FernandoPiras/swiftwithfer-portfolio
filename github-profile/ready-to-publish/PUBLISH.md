# Phase 6 — Publish (blocked on write access)

**Repo exists:** https://github.com/FernandoPiras/FernandoPiras (public, default branch `main`)  
**Current content:** GitHub default “Hi there” template — **not** the approved profile  
**Blocker:** Cursor Agent / `cursor[bot]` has **no push permission** on this repo (GitHub App is limited to `swiftwithfer-portfolio`).

**Approved file to publish (root only):** `README.md` in this folder  
(byte-identical to `github-profile/README.md`)

## Finish now — pick one

### A) Grant Cursor write access (then ask the agent to push)

1. GitHub → **Settings → Applications → Installed GitHub Apps → Cursor → Configure**
2. Add repository **`FernandoPiras/FernandoPiras`** with **Write**
3. Tell the agent to continue — it will push this `README.md` and set the description

### B) Publish yourself (~30 seconds)

1. Open: https://github.com/FernandoPiras/FernandoPiras/edit/main/README.md  
2. Replace **all** content with this folder’s `README.md`  
3. Commit title: `feat: publish GitHub profile README`  
4. Repo **Description**: `iOS Software Developer · Swift · SwiftUI · Product Engineering`

Or from a machine logged in as FernandoPiras:

```bash
git clone https://github.com/FernandoPiras/FernandoPiras.git
cd FernandoPiras
cp /path/to/swiftwithfer-portfolio/github-profile/ready-to-publish/README.md ./README.md
git add README.md
git commit -m "$(cat <<'EOF'
feat: publish GitHub profile README

Publishes the approved GitHub profile homepage for Fernando Piras.

Includes:
- factual iOS positioning;
- two shipped App Store products;
- evidence-aware technical expertise;
- primary website CTA;
- professional contact links.
EOF
)"
git push origin main
gh repo edit FernandoPiras/FernandoPiras --description "iOS Software Developer · Swift · SwiftUI · Product Engineering"
```

## Do not

- Pin `FernandoPiras/FernandoPiras`
- Create or pin `andrometrics` / `preventivo-rapido` yet
- Add extra files (rules, badges, LICENSE, Actions)
- Start Source Verification from this step
