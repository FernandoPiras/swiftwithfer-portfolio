import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/layout/Header";
import { AppCard } from "@/components/ui/AppCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Apps() {
  return (
    <Section
      id="apps"
      eyebrow="Portfolio"
      title="Prodotti con una storia"
      subtitle="Ogni release nasce da un problema reale. Case study, demo e link diretti — non slide."
      tone="surface"
    >
      <Reveal>
        <div className="mb-20 flex flex-col items-start justify-between gap-5 border-b border-glass-border/40 pb-10 sm:mb-24 sm:flex-row sm:items-center sm:pb-12 md:mb-28">
          <div>
            <p className="text-[0.9375rem] font-semibold tracking-[-0.015em] text-foreground">
              Profilo sviluppatore verificato su App Store
            </p>
            <p className="mt-2 text-sm text-muted">
              Slotiva · AndroMetrics · PreventivoRapido PRO
            </p>
          </div>
          <ButtonLink
            href={siteConfig.metrics.appStoreDeveloperUrl}
            external
            variant="secondary"
            className="w-full shrink-0 sm:w-auto"
          >
            Vedi su App Store
          </ButtonLink>
        </div>
      </Reveal>

      <div className="space-y-24 sm:space-y-32 md:space-y-40">
        {siteConfig.apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

      <Reveal delay={0.06} className="mt-24 flex justify-center sm:mt-28 md:mt-32">
        <ButtonLink href="/#process" variant="ghost">
          Come sviluppo un prodotto →
        </ButtonLink>
      </Reveal>
    </Section>
  );
}
