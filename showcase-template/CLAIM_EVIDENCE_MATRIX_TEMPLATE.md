# Claim Evidence Matrix Template

**TEMPLATE — fill one matrix per product before publishing a showcase README.**  
**Rule: No `NOT_VERIFIED` claim may enter the public README.**

Product: _______________  
Date: _______________  
Reviewer: _______________

## Evidence types

| Type | Meaning |
|------|---------|
| `APP_STORE_VERIFIED` | Confirmed via App Store listing / iTunes metadata |
| `PUBLIC_DOCUMENTATION_VERIFIED` | Confirmed via official privacy/terms/support pages |
| `WORKSPACE_ASSET_VERIFIED` | Confirmed via approved screenshots/icons/videos in hand |
| `OWNER_VERIFIED` | Explicit owner confirmation (not automatic source inspection) |
| `SOURCE_VERIFIED` | Confirmed by inspecting commercial application source |
| `NOT_VERIFIED` | Not confirmed — **do not publish** |

## Claim matrix

| Claim | Product | Evidence (short) | Evidence type | File or URL reference | Publishable (YES/NO) | Qualification needed | Destination (Profile / Showcase / Website / Do not publish) |
|-------|---------|------------------|---------------|------------------------|----------------------|----------------------|---------------------------------------------------------------|
| Example: Published on the App Store | [PRODUCT] | Live App Store page | APP_STORE_VERIFIED | https://apps.apple.com/... | YES | None | Showcase |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |

## Suggested claim rows to evaluate (delete if N/A)

Add a row for each intended statement, including:

- Platform (iOS / iPhone / iPad)  
- App Store availability  
- Each key capability bullet  
- Apple-managed subscriptions  
- HealthKit / Sign in with Apple / widgets / OCR / PDF workflows / local-first / cloud sync / AI-assisted features (as applicable)  
- Swift / SwiftUI (identity vs product-implementation claim)  
- Any API-level name (StoreKit 2, WidgetKit, Vision, PDFKit, …)  
- Privacy statements  
- Architecture summary sentences  

## API-level name policy

| Statement | Minimum evidence to publish on showcase |
|-----------|------------------------------------------|
| Apple-managed subscriptions | `APP_STORE_VERIFIED` |
| StoreKit (family) | `PUBLIC_DOCUMENTATION_VERIFIED` or `OWNER_VERIFIED` / `SOURCE_VERIFIED` |
| StoreKit 2 / WidgetKit / Vision / PDFKit | `OWNER_VERIFIED` or `SOURCE_VERIFIED` only |

## Gate

- [ ] Every public README sentence maps to a YES row above  
- [ ] Zero `NOT_VERIFIED` rows marked Publishable = YES  
- [ ] Destination tags prevent Profile/Showcase scope creep  

**If the gate fails, do not publish.**
