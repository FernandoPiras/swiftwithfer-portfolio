import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { ServiziBreadcrumb } from "@/components/servizi/ServiziBreadcrumb";
import {
  formatBlogDate,
  type BlogArticle,
  type BlogCategory,
} from "@/config/blog";

export function BlogArchiveView({
  title,
  description,
  breadcrumbLabel,
  articles,
}: {
  title: string;
  description: string;
  breadcrumbLabel: string;
  articles: readonly BlogArticle[];
  category?: BlogCategory;
}) {
  return (
    <article className="pb-24 pt-[calc(var(--header-offset)+1.5rem)] sm:pb-32 sm:pt-[calc(var(--header-offset)+2.5rem)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ServiziBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Approfondimenti", href: "/blog" },
            { label: breadcrumbLabel },
          ]}
        />
        <header className="max-w-3xl">
          <p className="text-eyebrow mb-4 text-accent">Archivio</p>
          <h1 className="text-display text-foreground text-balance">{title}</h1>
          <p className="text-lead mt-6 text-pretty">{description}</p>
        </header>
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {articles.map((article) => (
            <li key={article.slug}>
              <GlassCard as="article" className="h-full p-6">
                <h2 className="text-lg font-medium text-foreground">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="hover:text-accent"
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm text-muted">{article.excerpt}</p>
                <p className="mt-4 text-xs text-muted">
                  {formatBlogDate(article.updatedAt)} · {article.readingMinutes}{" "}
                  min
                </p>
              </GlassCard>
            </li>
          ))}
        </ul>
        {!articles.length ? (
          <p className="mt-8 text-sm text-muted">Nessun articolo in questo archivio.</p>
        ) : null}
      </div>
    </article>
  );
}
