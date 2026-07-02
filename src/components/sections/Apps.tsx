import { siteConfig } from "@/config/site";
import { AppCard } from "@/components/ui/AppCard";
import { Section } from "@/components/ui/Section";

export function Apps() {
  return (
    <Section
      id="apps"
      title="Le mie App"
      subtitle="Prodotti pubblicati e in evoluzione — design App Store, architetture solide, esperienza premium."
      className="bg-section-alt/50"
    >
      <div className="space-y-8">
        {siteConfig.apps.map((app, index) => (
          <AppCard key={app.id} app={app} index={index} />
        ))}
      </div>
    </Section>
  );
}
