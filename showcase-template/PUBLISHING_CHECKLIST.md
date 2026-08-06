# Showcase Publishing Checklist

Product: _______________  
Repo: _______________  
Date: _______________  

A repository is publishable only when **all blocking gates** pass.

## A. Evidence gate (blocking)

- [ ] Phase 2 Source Verification completed for this product **or** owner verification is recorded as sufficient for every intended claim
- [ ] Claim evidence matrix attached/filled
- [ ] No `NOT_VERIFIED` claim remains in the public README
- [ ] Phase 2 is not falsely described as complete if it is still suspended globally

## B. Placeholder & copy gate (blocking)

Template tokens = UPPERCASE compilation names in square brackets (and screenshot alt tokens), e.g. `[PRODUCT_NAME]`, `[AVAILABILITY_STATEMENT]`, `[APP_STORE_URL]`, `[PRODUCT_PAGE_URL]`, `[VERIFIED_FEATURE]`, `[VERIFIED_TECHNOLOGY]`, `[PUBLIC_ARCHITECTURE_SUMMARY]`, `SCREENSHOT_01_ALT`.

Do **not** treat normal finished Markdown links `[label](https://example.com)` as template tokens once labels/URLs are real.

- [ ] No residual template tokens remain (scan beyond the literal string `[PLACEHOLDER]`)
- [ ] No placeholder URLs
- [ ] No placeholder alt text / no square brackets left inside image alt text
- [ ] No empty required fields
- [ ] No example values left from the template comments
- [ ] No `TODO`
- [ ] No “coming soon”
- [ ] No visible unfinished labels
- [ ] Official product name correct
- [ ] Availability statement factual and verified
- [ ] Non-applicable distribution links removed (not blank)
- [ ] Primary CTA URL appears once in the header/CTA block
- [ ] No slogans / banned tone phrases
- [ ] No temporal metrics
- [ ] No improper medical claims
- [ ] No full-stack / enterprise / scalability hype

## C. Security & privacy gate (blocking)

- [ ] No secrets, API keys, tokens
- [ ] No private endpoints
- [ ] No personal emails in screenshots
- [ ] No customer PII
- [ ] No real health data of identifiable people
- [ ] Commercial source code absent from the repository
- [ ] No fake `src/` or installable project stubs

## D. Links & metadata gate (blocking)

- [ ] Primary distribution URL works (App Store for Apple apps; live product URL for web; other official channel when applicable)
- [ ] Product page URL works if included; otherwise omitted
- [ ] Privacy/support URLs work if referenced; otherwise omitted
- [ ] GitHub repository description filled (factual, ≤ ~80 chars recommended)
- [ ] GitHub topics accurate and evidence-based only
- [ ] LICENSE present and reviewed
- [ ] Source-code notice present

## E. Visual & UX gate (blocking)

- [ ] Images readable
- [ ] Alt text present
- [ ] Light mode checked on github.com
- [ ] Dark mode checked on github.com
- [ ] Mobile narrow layout checked
- [ ] Markdown renders without broken images/tables
- [ ] Follows design system section order

## F. Pin readiness (blocking for pin; optional for unpinned publish)

- [ ] Quality matches sibling showcases
- [ ] Profile README product blurb stays consistent
- [ ] Repository is eligible to pin per Phase 1 (no placeholders; real product)

## Decision

- [ ] **PUBLISH** — all blocking gates passed  
- [ ] **HOLD** — list failures: _______________

Published by: _______________  
Publish date: _______________
