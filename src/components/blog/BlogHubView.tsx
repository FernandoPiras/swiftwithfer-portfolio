import Link from "next/link";
import { ButtonLink } from "@/components/layout/Header";
import { GlassCard } from "@/components/ui/GlassCard";
import { ServiziBreadcrumb } from "@/components/servizi/ServiziBreadcrumb";
import { BlogCatalog } from "@/components/blog/BlogCatalog";
import { blogCategories, blogHub } from "@/config/blog";
import { siteConfig } from "@/config/site";
import { buildDirectMailto } from "@/config/discovery";

export function BlogHubView() {
  const mailto = buildDirectMailto(siteConfig.email);

  return (
    <article className="pb-24 pt-[calc(var(--header-offset)+1.5rem)] sm:pb-32 sm:pt-[calc(var(--header-offset)+2.5rem)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ServiziBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Approfondimenti" },
          ]}
        />

        <header className="max-w-3xl">
          <p className="text-eyebrow mb-4 text-accent">Content Hub</p>
          <h1 className="text-display text-foreground text-balance">
            {blogHub.title}
          </h1>
          <p className="text-lead mt-6 text-pretty">{blogHub.lead}</p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted text-pretty">
            {blogHub.supporting}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/servizi" variant="secondary">
              Vai ai servizi
            </ButtonLink>
            <ButtonLink href={mailto}>Parliamone</ButtonLink>
          </div>
        </header>

        <section className="mt-16" aria-labelledby="categories-heading">
          <h2
            id="categories-heading"
            className="text-section-title text-foreground"
          >
            Categorie
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {blogCategories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/blog/categoria/${category.id}`}
                  className="block h-full rounded-2xl border border-glass-border/80 bg-glass/60 p-5 transition hover:bg-glass/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <h3 className="text-base font-medium text-foreground">
                    {category.label}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{category.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20" aria-labelledby="articles-heading">
          <h2
            id="articles-heading"
            className="text-section-title text-foreground"
          >
            Articoli
          </h2>
          <div className="mt-8">
            <BlogCatalog />
          </div>
        </section>

        <section className="mt-20">
          <GlassCard className="p-8 sm:p-10">
            <h2 className="text-section-title text-foreground">
              Dai contenuti ai servizi
            </h2>
            <p className="mt-4 max-w-2xl text-base text-muted">
              Gli approfondimenti supportano gli hub di servizio: app, software,
              CRM, web e App Store. Se hai un progetto concreto, partiamo dal
              problema.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/servizi">Esplora i servizi</ButtonLink>
              <ButtonLink href="/#contact" variant="secondary">
                Contatti
              </ButtonLink>
            </div>
          </GlassCard>
        </section>
      </div>
    </article>
  );
}
