import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/layout/Header";
import { AppCard } from "@/components/ui/AppCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

/** Atto II — Prova vivente (climax). Un solo prodotto dimostra la tesi della Hero. */
export function ProductProof() {
  const proof = siteConfig.apps.find((app) => app.id === "slotiva");
  if (!proof) return null;

  return (
    <Section
      id="proof"
      eyebrow="Prova"
      title="Un prodotto live, non una slide"
      subtitle="La tesi della Hero si dimostra qui: dal problema reale al sistema in produzione."
      tone="surface"
    >
      <div className="space-y-0">
        <AppCard app={proof} />
      </div>

      <Reveal delay={0.06} className="mt-24 flex justify-center sm:mt-28 md:mt-32">
        <ButtonLink href="/#process" variant="ghost">
          Come nasce un prodotto →
        </ButtonLink>
      </Reveal>
    </Section>
  );
}
