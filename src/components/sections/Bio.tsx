"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";

export function Bio() {
  const { bio, photo, name, role, brand, email } = siteConfig;
  const publishedApps = siteConfig.apps.filter((app) => app.status === "published");
  const instagram = siteConfig.social.find((link) => link.icon === "instagram");

  return (
    <Section
      id="bio"
      eyebrow="Profilo"
      title="Chi sono"
      subtitle="Sviluppatore iOS e software con focus su prodotti enterprise, scalabili e pronti per il mercato."
    >
      <GlassCard className="overflow-hidden">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[220px_1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto flex flex-col items-center lg:mx-0"
          >
            <div className="relative rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[3px] shadow-lg shadow-[#ee2a7b]/20">
              <div className="relative h-36 w-36 overflow-hidden rounded-full bg-background p-[3px] sm:h-44 sm:w-44 md:h-52 md:w-52">
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
            {instagram ? (
              <Link
                href={instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-center text-sm font-medium text-accent transition-opacity hover:opacity-80"
              >
                @{brand.toLowerCase()}
              </Link>
            ) : (
              <p className="mt-4 text-center text-sm font-medium text-muted">
                @{brand.toLowerCase()}
              </p>
            )}
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{name}</h3>
              <p className="mt-1 text-sm font-medium text-accent sm:text-base">{role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">{bio.short}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{bio.full}</p>
            </div>

            <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {bio.highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-glass-border bg-background/40 px-4 py-3"
                >
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-foreground">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
                App pubblicate
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {publishedApps.map((app) => (
                  <li
                    key={app.id}
                    className="rounded-full border border-glass-border bg-background/50 px-4 py-1.5 text-sm text-foreground"
                  >
                    {app.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
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
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
                Focus
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Aree di focus">
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

            <p className="text-sm text-muted">
              Contatto:{" "}
              <a
                href={`mailto:${email}`}
                className="font-medium text-accent transition-opacity hover:opacity-80"
              >
                {email}
              </a>
            </p>
          </div>
        </div>
      </GlassCard>
    </Section>
  );
}
