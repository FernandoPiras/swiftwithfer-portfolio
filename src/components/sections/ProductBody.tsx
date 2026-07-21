import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/layout/Header";
import { AppCard } from "@/components/ui/AppCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Stats } from "@/components/sections/Stats";

/** Atto IV — Corpo di lavoro. Credibilità + altri prodotti come conseguenze del metodo. */
export function ProductBody() {
  const bodyApps = siteConfig.apps.filter((app) => app.id !== "slotiva");

  return (
    <Section
      id="apps"
      eyebrow="Prodotti"
      title="Lo stesso modo, su più fronti"
      subtitle="Dopo il metodo: altre prove live. Non un catalogo — conseguenze ripetute."
      tone="surface"
    >
      <Reveal>
        <div className="mb-16 flex flex-col items-start justify-between gap-5 border-b border-glass-border/40 pb-10 sm:mb-20 sm:flex-row sm:items-center sm:pb-12">
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

      {/* Metriche assorbite nel corpo — non più interruzione dopo la Hero */}
      <div className="mb-20 sm:mb-24 md:mb-28">
        <Stats embedded />
      </div>

      <div className="space-y-24 sm:space-y-32 md:space-y-40">
        {bodyApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

      <Reveal delay={0.06} className="mt-24 flex justify-center sm:mt-28 md:mt-32">
        <ButtonLink href="/#services" variant="ghost">
          Come entrare →
        </ButtonLink>
      </Reveal>
    </Section>
  );
}
