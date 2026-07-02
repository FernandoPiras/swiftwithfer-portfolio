# SwiftWithFer — Portfolio iOS Developer

Portfolio personale premium di **Fernando Piras**, iOS Developer.  
Costruito con Next.js 15, TypeScript, Tailwind CSS e Framer Motion.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **next-themes** (dark/light automatico)
- Nessun backend

## Avvio locale

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Build di produzione

```bash
npm run build
npm run start
```

## Configurazione

Tutti i contenuti sono centralizzati in un unico file:

```
src/config/site.ts
```

Per aggiungere una nuova app, modifica l'array `apps`:

```ts
{
  id: "nuova-app",
  name: "Nome App",
  tagline: "Sottotitolo breve",
  description: "Descrizione...",
  icon: "/images/apps/nuova-app/icon.png",
  screenshots: ["/images/apps/nuova-app/screenshot-1.png"],
  technologies: ["SwiftUI", "Firebase"],
  appStoreUrl: "https://apps.apple.com/...",
  githubUrl: "https://github.com/...",      // opzionale
  websiteUrl: "https://...",                // opzionale
  status: "published",                      // published | beta | in-development
}
```

Aggiungi le immagini in `public/images/apps/nuova-app/`.

## Pubblicazione — GitHub + Vercel

Il flusso consigliato: codice su **GitHub**, deploy automatico su **Vercel**.

### 1. Crea il repository su GitHub

```bash
cd swiftwithfer-portfolio
git add .
git commit -m "Portfolio SwiftWithFer"
git branch -M main
git remote add origin https://github.com/FernandoPiras/swiftwithfer-portfolio.git
git push -u origin main
```

> Sostituisci l'URL con il tuo repository se il nome è diverso.

### 2. Collega Vercel a GitHub

1. Vai su [vercel.com](https://vercel.com) e accedi con **GitHub**
2. **Add New Project** → seleziona il repository `swiftwithfer-portfolio`
3. Vercel rileva automaticamente **Next.js** — non serve configurazione extra
4. Clicca **Deploy**

Al primo deploy ottieni un URL tipo:

```
https://swiftwithfer-portfolio.vercel.app
```

### 3. Variabile d'ambiente (consigliata)

In Vercel → **Project** → **Settings** → **Environment Variables**:

| Nome | Valore |
|------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://swiftwithfer-portfolio.vercel.app` |

Usa l'URL reale assegnato da Vercel. Serve per sitemap, Open Graph e metadata SEO.

Poi **Redeploy** il progetto.

### 4. Deploy automatici

Ogni `git push` su `main` attiva un nuovo deploy su Vercel in automatico.  
Per aggiornare il sito: modifica il codice, commit e push.

```bash
git add .
git commit -m "Aggiorna portfolio"
git push
```

### Dominio personalizzato (opzionale)

Quando avrai un dominio:

1. Vercel → **Settings** → **Domains** → aggiungi il dominio
2. Aggiorna `NEXT_PUBLIC_SITE_URL` con l'URL finale

## SEO incluso

- `sitemap.xml` — generato da `src/app/sitemap.ts`
- `robots.txt` — generato da `src/app/robots.ts`
- `manifest.webmanifest`
- Open Graph e Twitter Cards (`opengraph-image.tsx`, `twitter-image.tsx`)
- JSON-LD Schema.org (Person)
- Favicon e Apple Touch Icon

## Accessibilità

- Contrasti WCAG AA
- Navigazione da tastiera
- Skip link al contenuto
- Etichette ARIA su sezioni interattive
- `prefers-reduced-motion` rispettato

## Performance

- Lazy loading immagini (`next/image`)
- Formati AVIF/WebP
- Code splitting automatico (App Router)
- Zero backend

## Struttura

```
src/
├── app/              # Layout, page, SEO routes
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Hero, Bio, Apps, ...
│   └── ui/           # AppCard, GlassCard, Section
├── config/
│   └── site.ts       # ⭐ Tutti i dati del sito
└── lib/
    ├── site-url.ts   # URL dinamico (Vercel / env)
    └── utils.ts
public/
└── images/           # Foto, icone app, screenshot, tech logos
```

## Licenza

© Fernando Piras — SwiftWithFer
