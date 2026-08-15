import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/layout/Header";
import { GlassCard } from "@/components/ui/GlassCard";
import { ServiziBreadcrumb } from "@/components/servizi/ServiziBreadcrumb";
import { ServiziFaq } from "@/components/servizi/ServiziFaq";
import { getArticlesForService } from "@/config/blog";
import {
  getRelatedServizi,
  type ServizioPage,
} from "@/config/servizi";
import { siteConfig } from "@/config/site";
import { buildDirectMailto } from "@/config/discovery";

export function ServizioPageView({ page }: { page: ServizioPage }) {
  const related = getRelatedServizi(page.relatedSlugs);
  const relatedArticles = getArticlesForService(page.slug).slice(0, 4);
  const proofApps = siteConfig.apps.filter((app) =>
    page.proofApps.includes(app.id as "andrometrics" | "preventivorapido"),
  );
  const mailto = buildDirectMailto(siteConfig.email);

  return (
    <article className="pb-24 pt-[calc(var(--header-offset)+1.5rem)] sm:pb-32 sm:pt-[calc(var(--header-offset)+2.5rem)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ServiziBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Servizi", href: "/servizi" },
            { label: page.title },
          ]}
        />

        <header className="max-w-3xl">
          <p className="text-eyebrow mb-4 text-accent">{page.eyebrow}</p>
          <h1 className="text-display text-foreground text-balance">{page.title}</h1>
          <p className="text-lead mt-6 text-pretty">{page.lead}</p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted text-pretty">
            {page.supporting}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={mailto}>Parliamone</ButtonLink>
            <ButtonLink href="/servizi" variant="secondary">
              Tutti i servizi
            </ButtonLink>
          </div>
        </header>

        <section className="mt-20" aria-labelledby="problems-heading">
          <h2 id="problems-heading" className="text-section-title text-foreground">
            {page.problemsTitle}
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {page.problems.map((problem) => (
              <li key={problem}>
                <GlassCard className="h-full p-6 sm:p-7">
                  <p className="text-sm leading-relaxed text-foreground/90">
                    {problem}
                  </p>
                </GlassCard>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20" aria-labelledby="solution-heading">
          <h2 id="solution-heading" className="text-section-title text-foreground">
            {page.solutionTitle}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted text-pretty">
            {page.solutionBody}
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {page.solutionBullets.map((bullet) => (
              <li
                key={bullet}
                className="rounded-xl border border-glass-border/70 bg-glass/40 px-4 py-3 text-sm text-foreground"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20" aria-labelledby="process-heading">
          <h2 id="process-heading" className="text-section-title text-foreground">
            {page.processTitle}
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {page.processSteps.map((step, index) => (
              <li key={step.title}>
                <GlassCard as="article" className="h-full p-6 sm:p-7">
                  <p className="text-eyebrow text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-lg font-medium text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </GlassCard>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-20" aria-labelledby="tech-heading">
          <h2 id="tech-heading" className="text-section-title text-foreground">
            Tecnologie in uso
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            Stack realmente impiegato nei prodotti e nei progetti — non un elenco
            di buzzword.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {page.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-glass-border/80 bg-glass/50 px-3.5 py-1.5 text-sm text-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20" aria-labelledby="proof-heading">
          <h2 id="proof-heading" className="text-section-title text-foreground">
            {page.proofTitle}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted text-pretty">
            {page.proofNote}
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {proofApps.map((app) => (
              <li key={app.id}>
                <GlassCard as="article" className="h-full p-6 sm:p-7">
                  <div className="flex items-center gap-4">
                    <Image
                      src={app.icon}
                      alt={`Icona ${app.name}`}
                      width={56}
                      height={56}
                      className="rounded-2xl"
                    />
                    <div>
                      <h3 className="text-lg font-medium text-foreground">
                        {app.name}
                      </h3>
                      <p className="text-sm text-muted">{app.tagline}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted line-clamp-3">
                    {app.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
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

        {related.length > 0 ? (
          <section className="mt-20" aria-labelledby="related-heading">
            <h2
              id="related-heading"
              className="text-section-title text-foreground"
            >
              Servizi correlati
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/servizi/${item.slug}`}
                    className="block rounded-2xl border border-glass-border/80 bg-glass/50 p-5 transition hover:border-glass-border hover:bg-glass/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <h3 className="text-base font-medium text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted line-clamp-2">
                      {item.hubCardBlurb}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {relatedArticles.length > 0 ? (
          <section className="mt-20" aria-labelledby="guides-heading">
            <h2
              id="guides-heading"
              className="text-section-title text-foreground"
            >
              Guide correlate
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-muted">
              Approfondimenti dal Content Hub collegati a questo servizio.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {relatedArticles.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="block rounded-2xl border border-glass-border/80 bg-glass/50 p-5 transition hover:border-glass-border hover:bg-glass/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <h3 className="text-base font-medium text-foreground">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted line-clamp-2">
                      {article.excerpt}
                    </p>
                    <p className="mt-3 text-xs text-muted">
                      {article.readingMinutes} min di lettura
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/blog"
              className="mt-6 inline-flex text-sm font-medium text-accent hover:underline"
            >
              Tutti gli approfondimenti
            </Link>
          </section>
        ) : null}

        <div className="mt-20">
          <ServiziFaq items={page.faq} />
        </div>

        <section className="mt-20" aria-labelledby="cta-heading">
          <GlassCard className="p-8 sm:p-10">
            <h2 id="cta-heading" className="text-section-title text-foreground">
              {page.ctaTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              {page.ctaBody}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={mailto}>Contattami</ButtonLink>
              <ButtonLink href="/#contact" variant="secondary">
                Torna ai contatti
              </ButtonLink>
            </div>
          </GlassCard>
        </section>
      </div>
    </article>
  );
}
