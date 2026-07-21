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
        <GlassCard className="mb-14 flex flex-col items-start justify-between gap-6 border-glass-border/60 bg-transparent shadow-none backdrop-blur-none sm:mb-16 sm:flex-row sm:items-center">
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
        </GlassCard>
      </Reveal>

      <div className="space-y-14 sm:space-y-20">
        {siteConfig.apps.map((app, index) => (
          <AppCard key={app.id} app={app} index={index} />
        ))}
      </div>

      <Reveal delay={0.06} className="mt-16 flex justify-center sm:mt-20">
        <ButtonLink href="/#process" variant="ghost">
          Come sviluppo un prodotto →
        </ButtonLink>
      </Reveal>
    </Section>
  );
}
