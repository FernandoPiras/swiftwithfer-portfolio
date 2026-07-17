import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/layout/Header";
import { AppCard } from "@/components/ui/AppCard";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";

export function Apps() {
  return (
    <Section
      id="apps"
      eyebrow="Portfolio"
      title="Prodotti rilasciati"
      subtitle="Software reale, utenti reali. Ogni progetto include case study, demo e link diretti."
      className="section-surface"
    >
      <GlassCard className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
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

      <div className="space-y-10 sm:space-y-12">
        {siteConfig.apps.map((app, index) => (
          <AppCard key={app.id} app={app} index={index} />
        ))}
      </div>
    </Section>
  );
}
