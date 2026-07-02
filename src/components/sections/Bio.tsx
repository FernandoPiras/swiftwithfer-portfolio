"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";

export function Bio() {
  const { bio, photo, name } = siteConfig;

  return (
    <Section
      id="bio"
      title="Chi sono"
      subtitle="Sviluppatore iOS con focus su prodotti curati, scalabili e pronti per l'App Store."
    >
      <GlassCard className="overflow-hidden">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto flex flex-col items-center lg:mx-0"
          >
            <div className="relative rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[3px] shadow-lg shadow-[#ee2a7b]/20">
              <div className="relative h-44 w-44 overflow-hidden rounded-full bg-background p-[3px] md:h-52 md:w-52">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src={photo.bio}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 176px, 208px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-sm font-medium text-muted">
              @{siteConfig.brand.toLowerCase()}
            </p>
          </motion.div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground">{name}</h3>
              <p className="mt-3 leading-relaxed text-muted">{bio.full}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
                Percorso
              </h4>
              <p className="mt-2 leading-relaxed text-muted">{bio.journey}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
                Filosofia
              </h4>
              <p className="mt-2 leading-relaxed text-muted">{bio.philosophy}</p>
            </div>

            <ul className="flex flex-wrap gap-2" aria-label="Aree di focus">
              {bio.focus.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-glass-border bg-background/50 px-4 py-1.5 text-sm text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </GlassCard>
    </Section>
  );
}
