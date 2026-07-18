import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/layout/Header";
import { AppCard } from "@/components/ui/AppCard";
import { GlassCard } from "@/components/ui/GlassCard";
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
        <GlassCard className="mb-10 flex flex-col items-start justify-between gap-4 sm:mb-12 sm:flex-row sm:items-center">
          <div>
            <p className="font-semibold text-foreground">
              Profilo sviluppatore verificato su App Store
            </p>
            <p className="mt-1 text-sm text-muted">
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
        </GlassCard>
      </Reveal>

      <div className="space-y-10 sm:space-y-14">
        {siteConfig.apps.map((app, index) => (
          <AppCard key={app.id} app={app} index={index} />
        ))}
      </div>

      <Reveal delay={0.06} className="mt-12 flex justify-center sm:mt-14">
        <ButtonLink href="#process" variant="secondary">
          Come sviluppo un prodotto
        </ButtonLink>
      </Reveal>
    </Section>
  );
}
