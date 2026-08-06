# Showcase Content Checklist

Use once per product before compiling `README_TEMPLATE.md` into a public README.

Product: _______________  
Repo slug: _______________  
Date: _______________  
Reviewer: _______________

## Identity

- [ ] Official product name confirmed (matches App Store where applicable)
- [ ] GitHub repository slug is kebab-case and agreed (`andrometrics`, `preventivo-rapido`, …)
- [ ] Factual one-line description written (no slogans)
- [ ] Target user identified in one plain sentence
- [ ] Core problem stated without hype

## Evidence-backed content

- [ ] Key capabilities list contains only verified features
- [ ] Workflow steps reflect the real product path
- [ ] Public architecture summary is high-level and IP-safe
- [ ] Verified technology list excludes `NOT_VERIFIED` items
- [ ] API-level names (StoreKit 2, WidgetKit, Vision, PDFKit, …) included only if OWNER_VERIFIED or SOURCE_VERIFIED
- [ ] Apple-managed subscriptions wording used when StoreKit API level is not verified
- [ ] Privacy summary is factual and matches public policy pages
- [ ] No temporal metrics (ratings, versions, dates, file size, rankings)
- [ ] No absolute marketing claims (enterprise, scalable, production-ready, senior, …)
- [ ] No future products or “coming soon”

## Links & availability

- [ ] `[AVAILABILITY_STATEMENT]` replaced with a verified factual statement (not left as a template token)
- [ ] Primary CTA matches the real distribution channel (App Store for Apple apps; live URL for web; other official channel when applicable)
- [ ] App Store URL verified live **only if** the product is App Store–distributed; otherwise the App Store link row was removed
- [ ] Product page URL verified live **or** removed if not applicable
- [ ] Privacy policy URL verified live (if referenced) — else line removed
- [ ] Support URL verified live (if referenced) — else line removed
- [ ] Contact email is the professional address
- [ ] No empty URLs
- [ ] No invented URLs
- [ ] No duplicate App Store / primary-CTA URL in the header block

## Assets

- [ ] Authorized app icon ready
- [ ] 3–6 screenshots selected and privacy-reviewed
- [ ] Banner optional; if used, passes content budget
- [ ] Diagrams optional; if used, contain no secrets
- [ ] Alt text written for every image
- [ ] Asset inventory completed (`ASSET_INVENTORY_TEMPLATE.md`)

## Legal / closed source

- [ ] Source-code notice present
- [ ] LICENSE reviewed from template (not published blindly)
- [ ] No commercial source included
- [ ] No secrets, tokens, or private endpoints
- [ ] No personal emails / customer PII / real health data in assets
- [ ] No improper medical claims (informational products must stay informational)

## Writing quality

- [ ] English throughout (official Italian product names unchanged)
- [ ] No slogan language
- [ ] No duplicated paragraphs
- [ ] Matches Profile README tone (calm, factual)
- [ ] Follows `PRODUCT_SHOWCASE_DESIGN_SYSTEM.md` section order

## Template-token gate

Template tokens = UPPERCASE compilation names in square brackets (and screenshot alt tokens), e.g. `[PRODUCT_NAME]`, `[FACTUAL_ONE_LINE_DESCRIPTION]`, `[AVAILABILITY_STATEMENT]`, `[APP_STORE_URL]`, `[PRODUCT_PAGE_URL]`, `[VERIFIED_FEATURE]`, `[VERIFIED_TECHNOLOGY]`, `[PUBLIC_ARCHITECTURE_SUMMARY]`, `SCREENSHOT_01_ALT`.

- [ ] No residual template tokens remain in the compiled README
- [ ] No placeholder URLs
- [ ] No placeholder alt text (no `SCREENSHOT_0N_ALT`, no brackets left in alt text)
- [ ] No empty required fields
- [ ] No example availability strings published accidentally
- [ ] Finished Markdown links `[label](https://…)` are real labels/URLs — not unresolved tokens
- [ ] Official token list section removed from the published README

## Gate

- [ ] Claim evidence matrix completed — zero `NOT_VERIFIED` claims in the public README
- [ ] Content checklist 100% for blocking items above

**Blocking failure = do not compile/publish.**
