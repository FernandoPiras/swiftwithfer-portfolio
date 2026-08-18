import Image from "next/image";
import { siteConfig } from "@/config/site";
import { formatBlogDate, type BlogArticle } from "@/config/blog";
import { cn } from "@/lib/utils";

export function BlogByline({ article }: { article: BlogArticle }) {
  const published = formatBlogDate(article.publishedAt);
  const updated = formatBlogDate(article.updatedAt);
  const sameDay = article.publishedAt === article.updatedAt;

  return (
    <div className="mt-8 flex flex-wrap items-center gap-4 border-y border-glass-border/70 py-4">
      <Image
        src={siteConfig.photo.bio}
        alt={siteConfig.photo.alt}
        width={48}
        height={48}
        className="rounded-full object-cover"
      />
      <div className="min-w-0">
        <p className="text-sm font-medium text-foreground">
          <span className="text-muted">Autore · </span>
          {siteConfig.name}
        </p>
        <p className="text-xs leading-relaxed text-muted">
          {siteConfig.role}
          {" · "}
          Pubblicato {published}
          {!sameDay ? ` · Aggiornato ${updated}` : null}
          {" · "}
          {article.readingMinutes} min di lettura
        </p>
      </div>
    </div>
  );
}

export function BlogCover({
  article,
  priority = false,
}: {
  article: BlogArticle;
  priority?: boolean;
}) {
  const appId = article.proofApps[0];
  const app = siteConfig.apps.find((item) => item.id === appId);
  const src = app?.screenshots[0];
  const alt = app
    ? `Schermata di ${app.name} — riferimento al caso trattato`
    : `Copertina: ${article.title}`;

  if (src && app) {
    return (
      <figure className="mt-10 overflow-hidden rounded-2xl border border-glass-border/80 bg-glass/40">
        <div className="relative aspect-[16/10] w-full sm:aspect-[2/1]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 720px"
            className="object-cover object-top"
            priority={priority}
          />
        </div>
        <figcaption className="border-t border-glass-border/60 px-4 py-3 text-xs text-muted">
          Riferimento prodotto: {app.name} (case study sul portfolio)
        </figcaption>
      </figure>
    );
  }

  return (
    <div
      className="mt-10 flex aspect-[2/1] items-end rounded-2xl border border-glass-border/80 bg-gradient-to-br from-glass/90 via-background to-accent/10 p-6 sm:p-8"
      role="img"
      aria-label={alt}
    >
      <p className="max-w-md text-sm font-medium text-foreground text-balance">
        {article.title}
      </p>
    </div>
  );
}

export function BlogCallout({
  title,
  body,
  className,
}: {
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <aside
      className={cn(
        "my-10 rounded-2xl border border-accent/25 bg-accent/5 px-5 py-4 sm:px-6 sm:py-5",
        className,
      )}
    >
      <p className="text-eyebrow text-accent">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-foreground text-pretty">
        {body}
      </p>
    </aside>
  );
}

export function BlogMobileToc({
  sections,
  summaryLabel = "Indice dell’articolo",
}: {
  sections: readonly { id: string; heading: string }[];
  summaryLabel?: string;
}) {
  return (
    <details className="mt-8 rounded-2xl border border-glass-border/80 bg-glass/50 p-4 lg:hidden">
      <summary className="cursor-pointer text-sm font-medium text-foreground">
        {summaryLabel}
      </summary>
      <ol className="mt-3 space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-sm text-muted hover:text-foreground"
            >
              {section.heading}
            </a>
          </li>
        ))}
      </ol>
    </details>
  );
}
