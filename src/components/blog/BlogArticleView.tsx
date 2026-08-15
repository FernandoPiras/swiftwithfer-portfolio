import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/layout/Header";
import { GlassCard } from "@/components/ui/GlassCard";
import { ServiziBreadcrumb } from "@/components/servizi/ServiziBreadcrumb";
import { ServiziFaq } from "@/components/servizi/ServiziFaq";
import {
  BlogByline,
  BlogCallout,
  BlogCover,
  BlogMobileToc,
} from "@/components/blog/BlogArticleChrome";
import {
  getBlogCategory,
  getRelatedArticles,
  type BlogArticle,
} from "@/config/blog";
import { getServizioBySlug } from "@/config/servizi";
import { siteConfig } from "@/config/site";
import { buildDirectMailto } from "@/config/discovery";

export function BlogArticleView({ article }: { article: BlogArticle }) {
  const category = getBlogCategory(article.category);
  const relatedArticles = getRelatedArticles(article.relatedArticleSlugs).slice(
    0,
    4,
  );
  const relatedServices = article.relatedServiceSlugs
    .map((slug) => getServizioBySlug(slug))
    .filter((page): page is NonNullable<typeof page> => Boolean(page))
    .slice(0, 4);
  const proofApps = siteConfig.apps.filter((app) =>
    article.proofApps.includes(app.id as "andrometrics" | "preventivorapido"),
  );
  const mailto = buildDirectMailto(siteConfig.email);

  return (
    <article className="pb-24 pt-[calc(var(--header-offset)+1.5rem)] sm:pb-32 sm:pt-[calc(var(--header-offset)+2.5rem)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ServiziBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Approfondimenti", href: "/blog" },
            { label: article.title },
          ]}
        />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_15.5rem] lg:gap-14">
          <div className="min-w-0">
            <header className="max-w-3xl">
              {category ? (
                <p className="text-eyebrow mb-4 text-accent">
                  <Link
                    href={`/blog/categoria/${category.id}`}
                    className="hover:underline"
                  >
                    {category.label}
                  </Link>
                </p>
              ) : null}
              <h1 className="text-display text-foreground text-balance">
                {article.title}
              </h1>
              <p className="text-lead mt-6 text-pretty">{article.excerpt}</p>
              <BlogByline article={article} />
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tag">
                {article.tags.map((tag) => (
                  <li key={tag}>
                    <Link
                      href={`/blog/tag/${encodeURIComponent(tag)}`}
                      className="rounded-full border border-glass-border/80 bg-glass/50 px-3 py-1 text-xs text-muted hover:text-foreground"
                    >
                      #{tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </header>

            <BlogCover article={article} priority />
            <BlogMobileToc sections={article.sections} />
            <BlogCallout title="In sintesi" body={article.keyTakeaway} />

            <div className="mt-4 space-y-14">
              {article.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  aria-labelledby={`heading-${section.id}`}
                  className="scroll-mt-[calc(var(--header-offset)+1rem)]"
                >
                  <h2
                    id={`heading-${section.id}`}
                    className="text-section-title text-foreground"
                  >
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 64)}
                        className="max-w-3xl text-base leading-[1.75] text-muted text-pretty"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.bullets?.length ? (
                    <ul className="mt-5 max-w-3xl space-y-2">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="rounded-xl border border-glass-border/70 bg-glass/40 px-4 py-3 text-sm leading-relaxed text-foreground"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            {proofApps.length ? (
              <section className="mt-16" aria-labelledby="proof-heading">
                <h2
                  id="proof-heading"
                  className="text-section-title text-foreground"
                >
                  Progetti reali di riferimento
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-muted">
                  Esempi verificabili sul portfolio e su App Store — non casi
                  inventati.
                </p>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {proofApps.map((app) => (
                    <li key={app.id}>
                      <GlassCard as="article" className="h-full p-6">
                        <div className="flex items-center gap-3">
                          <Image
                            src={app.icon}
                            alt={`Icona ${app.name}`}
                            width={48}
                            height={48}
                            className="rounded-xl"
                          />
                          <div>
                            <h3 className="font-medium text-foreground">
                              {app.name}
                            </h3>
                            <p className="text-xs text-muted">{app.tagline}</p>
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-3">
                          <Link
                            href={`/apps/${app.id}`}
                            className="text-sm font-medium text-accent hover:underline"
                          >
                            Case study
                          </Link>
                          {app.appStoreUrl ? (
                            <a
                              href={app.appStoreUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-medium text-muted hover:text-foreground"
                            >
                              App Store
                            </a>
                          ) : null}
                        </div>
                      </GlassCard>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <div className="mt-16">
              <ServiziFaq items={article.faq} title="Domande frequenti" />
            </div>

            <section className="mt-16" aria-labelledby="services-heading">
              <h2
                id="services-heading"
                className="text-section-title text-foreground"
              >
                Servizi correlati
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {relatedServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/servizi/${service.slug}`}
                      className="block rounded-2xl border border-glass-border/80 bg-glass/50 p-5 transition hover:bg-glass/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <h3 className="text-sm font-medium text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted line-clamp-2">
                        {service.hubCardBlurb}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-16" aria-labelledby="related-heading">
              <h2
                id="related-heading"
                className="text-section-title text-foreground"
              >
                Articoli correlati
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {relatedArticles.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/blog/${item.slug}`}
                      className="block rounded-2xl border border-glass-border/80 bg-glass/50 p-5 transition hover:bg-glass/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <h3 className="text-sm font-medium text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted line-clamp-2">
                        {item.excerpt}
                      </p>
                      <p className="mt-3 text-xs text-muted">
                        {item.readingMinutes} min
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-16" aria-labelledby="cta-heading">
              <GlassCard className="p-8 sm:p-10">
                <h2
                  id="cta-heading"
                  className="text-section-title text-foreground"
                >
                  Prossimo passo
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                  Se questo articolo descrive il tuo problema, partiamo da ambito
                  e vincoli. Nessun listino generico: una conversazione concreta.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href={mailto}>Scrivimi</ButtonLink>
                  <ButtonLink href="/#contact" variant="secondary">
                    Contatti
                  </ButtonLink>
                  <ButtonLink href="/servizi" variant="ghost">
                    Servizi
                  </ButtonLink>
                </div>
              </GlassCard>
            </section>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-[calc(var(--header-offset)+1rem)] space-y-4">
              <GlassCard className="p-5">
                <p className="text-sm font-medium text-foreground">Indice</p>
                <nav aria-label="Indice dell'articolo" className="mt-3">
                  <ol className="space-y-2.5">
                    {article.sections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="text-sm leading-snug text-muted hover:text-foreground"
                        >
                          {section.heading}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </GlassCard>
              <GlassCard className="p-5">
                <p className="text-xs text-muted">Autore</p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {siteConfig.name}
                </p>
                <p className="mt-1 text-xs text-muted">{siteConfig.role}</p>
              </GlassCard>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
