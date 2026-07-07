import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/layout/Header";
import { AppCard } from "@/components/ui/AppCard";
import { Section } from "@/components/ui/Section";

export function Apps() {
  return (
    <Section
      id="apps"
      eyebrow="Portfolio"
      title="Le mie App"
      subtitle="Prodotti pubblicati e in evoluzione — design App Store, architetture solide, esperienza premium."
      className="bg-section-alt/50"
    >
      <div className="mb-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-glass-border bg-glass/50 p-4 backdrop-blur-md sm:flex-row sm:items-center sm:p-5">
        <div>
          <p className="text-sm font-semibold text-foreground">
            {siteConfig.metrics.publishedApps} app live su App Store
          </p>
          <p className="mt-1 text-sm text-muted">
            AndroMetrics, Slotiva e PreventivoRapido PRO — sviluppate in SwiftUI.
          </p>
        </div>
        <ButtonLink href={siteConfig.metrics.appStoreDeveloperUrl} external variant="secondary" className="w-full sm:w-auto">
          Profilo sviluppatore
        </ButtonLink>
      </div>
      <div className="space-y-8">
        {siteConfig.apps.map((app, index) => (
          <AppCard key={app.id} app={app} index={index} />
        ))}
      </div>
    </Section>
  );
}
