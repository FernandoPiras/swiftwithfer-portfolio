# Source Verification — Master Checklist

**Purpose:** Complete AndroMetrics + PreventivoRapido PRO Source Verification in **one** local Cursor session on the Mac.  
**Protocol:** `SOURCE_VERIFICATION_PROTOCOL.md`  
**Templates:**  
- `ANDROMETRICS_VERIFICATION_TEMPLATE.md`  
- `PREVENTIVORAPIDO_VERIFICATION_TEMPLATE.md`  

**Session date:** _______________  
**Operator:** _______________  

**Hard rules:** no code edits · no invented `SOURCE_VERIFIED` · no cross-product inference · no secrets in public-safe packages · completed reports = LOCAL_PRIVATE_WORKING_ARTIFACTS (no commit / no push / no PR) · no showcase creation in this session.

---

## A. Access

- [ ] AndroMetrics project accessible  
- [ ] PreventivoRapido PRO project accessible  
- [ ] Ambiguous paths resolved (asked once if needed)  
- [ ] Both roots recorded in their templates  

---

## B. AndroMetrics (`PRODUCT = ANDROMETRICS`)

- [ ] Project identity verified  
- [ ] Architecture verified (`INTERNAL_FINDING` + `PUBLIC_SAFE_SUMMARY`)  
- [ ] Apple frameworks verified (real usage only)  
- [ ] Third-party dependencies verified  
- [ ] Features verified (SHIPPED / INTERNAL / UNUSED / EXPERIMENTAL)  
- [ ] Persistence verified  
- [ ] Privacy / data flow verified  
- [ ] Monetization verified  
- [ ] AI verified (or explicitly `NOT_PRESENT`)  
- [ ] Documents / OCR / PDF / camera verified (or `NOT_PRESENT`)  
- [ ] Tests / quality verified  
- [ ] Security scan completed (`SECRET_PRESENT` recorded without values)  
- [ ] Screenshot assets inventoried  
- [ ] Claim matrix completed  
- [ ] Public-safe summaries completed  
- [ ] `SHOWCASE_INPUT_PACKAGE` completed  
- [ ] Template sign-off checked  

---

## C. PreventivoRapido PRO (`PRODUCT = PREVENTIVORAPIDO_PRO`)

- [ ] Project identity verified  
- [ ] Architecture verified (`INTERNAL_FINDING` + `PUBLIC_SAFE_SUMMARY`)  
- [ ] Apple frameworks verified (real usage only)  
- [ ] Third-party dependencies verified  
- [ ] Features verified (SHIPPED / INTERNAL / UNUSED / EXPERIMENTAL)  
- [ ] Persistence verified  
- [ ] Privacy / data flow verified  
- [ ] Monetization verified  
- [ ] AI verified (or explicitly `NOT_PRESENT`)  
- [ ] Documents / OCR / PDF / camera / signatures verified (or `NOT_PRESENT`)  
- [ ] Tests / quality verified  
- [ ] Security scan completed (`SECRET_PRESENT` recorded without values)  
- [ ] Screenshot assets inventoried  
- [ ] Claim matrix completed  
- [ ] Public-safe summaries completed  
- [ ] `SHOWCASE_INPUT_PACKAGE` completed  
- [ ] Template sign-off checked  

---

## D. Cross-cutting gates

- [ ] No secrets copied into any Markdown  
- [ ] No cross-product inference  
- [ ] Bundle IDs / sensitive IDs treated as `NOT_PUBLICABLE` unless owner approved  
- [ ] Absolute privacy/security marketing claims avoided unless proven  
- [ ] Out-of-portfolio products not analyzed as portfolio showcases  
- [ ] No application source modified  
- [ ] No showcase GitHub repositories created  
- [ ] No Profile README changes  
- [ ] No live visibility/archive/rename of other repos  
- [ ] Completed verification reports remain local/private  
- [ ] No internal findings committed  
- [ ] No local source paths included in public-safe package  
- [ ] Secret scan status resolved (`NOT_VERIFIED` / `CLEAR` / `FINDINGS_PRESENT`)  
- [ ] No secret details included in SHOWCASE_INPUT_PACKAGE  
- [ ] Both SHOWCASE_INPUT_PACKAGE blocks contain public-safe data only  
- [ ] No commit  
- [ ] No push  
- [ ] No PR created by local verification run  

---

## E. Session result

| Item | Result |
|------|--------|
| AndroMetrics verification complete | YES / NO / BLOCKED: ________ |
| PreventivoRapido PRO verification complete | YES / NO / BLOCKED: ________ |
| Both SHOWCASE_INPUT_PACKAGE ready (public-safe only) | YES / NO |
| Reports remain LOCAL_PRIVATE_WORKING_ARTIFACTS | YES / NO |
| Source Verification status | COMPLETE / INCOMPLETE |
| Showcase phase | NOT STARTED |
| Commit / push / PR from this run | NONE |

**Blockers (if any):**

```
[FILL]
```

**Operator signature:** _______________  **Date:** _______________
