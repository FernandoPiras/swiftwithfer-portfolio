import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/layout/Header";
import { AppCard } from "@/components/ui/AppCard";
import { Section } from "@/components/ui/Section";

export function Apps() {
  return (
    <Section
      id="apps"
      eyebrow="Portfolio"
      title="Progetti"
      subtitle="Prodotti reali su App Store e piattaforme web — architetture solide, UX premium ed esperienza da software house."
      className="bg-section-alt/50"
    >
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        {[
          {
            label: "App Store",
            value: `${siteConfig.metrics.publishedApps} prodotti live`,
          },
          {
            label: "Stack",
            value: "SwiftUI · Firebase · React",
          },
          {
            label: "Delivery",
            value: "Design → Rilascio",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-glass-border bg-glass/50 p-4 backdrop-blur-md sm:p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">{item.label}</p>
            <p className="mt-1.5 text-sm font-semibold text-foreground sm:text-base">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mb-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-glass-border bg-glass/50 p-4 backdrop-blur-md sm:flex-row sm:items-center sm:p-5">
        <div>
          <p className="text-sm font-semibold text-foreground">
            Profilo sviluppatore Apple verificato
          </p>
          <p className="mt-1 text-sm text-muted">
            AndroMetrics, Slotiva e PreventivoRapido PRO — case study, demo reali e recensioni.
          </p>
        </div>
        <ButtonLink href={siteConfig.metrics.appStoreDeveloperUrl} external variant="secondary" className="w-full sm:w-auto">
          App Store Developer
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
