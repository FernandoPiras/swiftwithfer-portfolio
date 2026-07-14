"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/Section";
import { TechIcon } from "@/components/ui/TechIcon";
import { gridItem } from "@/lib/motion";

export function Technologies() {
  return (
    <Section
      id="technologies"
      eyebrow="Strumenti"
      title="Stack di produzione"
      subtitle="Le tecnologie con cui ho costruito e rilasciato prodotti reali."
    >
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {siteConfig.technologies.map((tech, index) => (
          <motion.li key={tech.name} {...gridItem(index)}>
            <div className="flex h-full flex-col items-center justify-center gap-2 rounded-xl border border-glass-border bg-glass/60 p-4 backdrop-blur-md transition-colors hover:border-accent/20 sm:gap-3">
              <TechIcon slug={tech.slug} className="h-8 w-8 sm:h-10 sm:w-10" />
              <span className="text-center text-xs font-medium text-foreground">
                {tech.name}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
