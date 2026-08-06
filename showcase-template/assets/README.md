# Showcase assets

This folder documents the **recommended asset layout** for a product showcase repository.

Do not commit unreviewed product screenshots here inside `showcase-template/`.  
Real assets belong only in a product showcase repository after privacy review.

## Recommended structure

```
assets/
├── icon/
│   └── app-icon.png
├── screenshots/
│   ├── 01-home.png
│   ├── 02-core-flow.png
│   └── 03-detail.png
├── banner/
│   └── banner.png          # optional
└── diagrams/
    └── architecture.svg    # optional
```

Keep the tree lean. Do not add decorative folders that are not used.

## Formats

| Type | Preferred formats |
|------|-------------------|
| Icon | PNG |
| Screenshots | PNG or WebP |
| Banner | PNG |
| Diagrams | SVG preferred; PNG acceptable |

## Naming

- Lowercase kebab-case  
- Screenshots zero-padded: `01-…`, `02-…`  
- Descriptive slugs (`home`, `dashboard`, `quote-editor`)  
- No spaces or personal names in filenames  

## Recommended sizes

| Asset | Guidance |
|-------|----------|
| App icon | ≥ 512×512 (1024×1024 ideal if available) |
| Screenshots | Consistent device frame/size within one README |
| Banner | 1280×640 if used |
| Diagrams | Readable at mobile widths |

## Compression

Compress for GitHub without visible artifacts. Prefer smaller files when quality remains clear.

## Alt text

Every image referenced from the README needs meaningful alt text describing the screen’s purpose, not “screenshot1”.

## Privacy review (mandatory)

Do **not** use images that contain:

- personal emails  
- customer identity data  
- real addresses / phone numbers / VAT IDs  
- identifiable health data  
- secrets or internal URLs  

Owner-name visibility or sensitive category UI requires explicit approval.

Asset statuses are tracked in `../ASSET_INVENTORY_TEMPLATE.md`:

`READY` · `NEEDS_EDITING` · `NEEDS_SCRUBBING` · `DO_NOT_USE` · `MISSING`
