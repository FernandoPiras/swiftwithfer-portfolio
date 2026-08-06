# Phase 6 — Manual publish (required)

**Status:** Cloud Agent cannot create `FernandoPiras/FernandoPiras` (GitHub API `403 Resource not accessible by integration`).

**Approved source:** `README.md` in this folder (byte-identical to `github-profile/README.md`).

## Single required owner operation

1. As **FernandoPiras**, create a **public** repository named **`FernandoPiras`** (no README / license / .gitignore init).  
   Description: `iOS Software Developer · Swift · SwiftUI · Product Engineering`
2. Push **only** this folder’s `README.md` to the root of that repo’s default branch (`main`) with commit:

```text
feat: publish GitHub profile README

Publishes the approved GitHub profile homepage for Fernando Piras.

Includes:
- factual iOS positioning;
- two shipped App Store products;
- evidence-aware technical expertise;
- primary website CTA;
- professional contact links.
```

Example after the empty repo exists:

```bash
mkdir -p /tmp/FernandoPiras && cd /tmp/FernandoPiras
git init -b main
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
git remote add origin https://github.com/FernandoPiras/FernandoPiras.git
git push -u origin main
```

## Do not

- Pin `FernandoPiras/FernandoPiras`
- Create or pin `andrometrics` / `preventivo-rapido` yet
- Add rules files, phase reports, badges, LICENSE, Actions, or assets
- Start Source Verification from this step
