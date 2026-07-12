<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

- Single service: a static Next.js 15 (App Router) portfolio frontend, no backend/database. Node 22 is used.
- Standard commands live in `package.json` scripts and `README.md`: `npm run dev` (port 3000), `npm run build`, `npm run lint`. Dependencies are refreshed automatically by the startup update script (`npm install`).
- No environment variables are required to run locally. `NEXT_PUBLIC_SITE_URL` is optional and only affects absolute SEO/sitemap/Open Graph URLs; without it, URLs fall back to `localhost`.
- All site content is centralized in `src/config/*` (e.g. `site.ts`, `case-studies.ts`), not fetched at runtime.
- Theme (dark/light) follows the OS `prefers-color-scheme` via `next-themes`; there is intentionally no in-app theme toggle button.
