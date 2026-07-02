"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/Section";

export function Timeline() {
  return (
    <Section
      id="timeline"
      title="Percorso"
      subtitle="Dalla prima riga di Swift alle app pubblicate su App Store."
      className="bg-section-alt/50"
    >
      <ol className="relative space-y-0 border-l border-glass-border pl-8 md:pl-10">
        {siteConfig.timeline.map((entry, index) => (
          <motion.li
            key={`${entry.year}-${entry.title}`}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative pb-10 last:pb-0"
          >
            <span
              className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background md:-left-[2.85rem]"
              aria-hidden
            />
            <time className="text-sm font-semibold uppercase tracking-wider text-accent">
              {entry.year}
            </time>
            <h3 className="mt-1 text-lg font-semibold text-foreground">{entry.title}</h3>
            <p className="mt-2 max-w-2xl leading-relaxed text-muted">
              {entry.description}
            </p>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
