"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import type { AppProject } from "@/config/site";
import { ButtonLink } from "@/components/layout/Header";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn, getStatusLabel } from "@/lib/utils";

interface AppCardProps {
  app: AppProject;
  index?: number;
}

const statusStyles = {
  published: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  beta: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  "in-development": "bg-blue-500/15 text-blue-600 dark:text-blue-400",
};

export function AppCard({ app, index = 0 }: AppCardProps) {
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <GlassCard
        as="article"
        className="group overflow-hidden transition-transform duration-500 hover:-translate-y-1"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[1.35rem] shadow-lg shadow-black/10 ring-1 ring-black/5">
                <Image
                  src={app.icon}
                  alt={`Icona ${app.name}`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                    {app.name}
                  </h3>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-0.5 text-xs font-medium",
                      statusStyles[app.status],
                    )}
                  >
                    {getStatusLabel(app.status)}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-accent">{app.tagline}</p>
              </div>
            </div>

            <p className="leading-relaxed text-muted">{app.description}</p>

            <ul className="flex flex-wrap gap-2" aria-label={`Tecnologie usate in ${app.name}`}>
              {app.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-glass-border bg-background/40 px-3 py-1 text-xs text-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-1">
              {app.appStoreUrl ? (
                <ButtonLink href={app.appStoreUrl} external variant="primary">
                  App Store
                </ButtonLink>
              ) : null}
              {app.githubUrl ? (
                <ButtonLink href={app.githubUrl} external variant="secondary">
                  GitHub
                </ButtonLink>
              ) : null}
              {app.websiteUrl ? (
                <ButtonLink href={app.websiteUrl} external variant="secondary">
                  Sito web
                </ButtonLink>
              ) : null}
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[260px] overflow-hidden rounded-[2rem] border border-glass-border bg-background/60 p-2 shadow-2xl shadow-black/10">
              <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-black">
                <Image
                  src={app.screenshots[activeScreenshot] ?? app.screenshots[0]}
                  alt={`Screenshot di ${app.name}`}
                  fill
                  sizes="260px"
                  className="object-cover object-top transition-opacity duration-500"
                />
              </div>
            </div>

            {app.screenshots.length > 1 ? (
              <div
                className="flex justify-center gap-2"
                role="tablist"
                aria-label={`Screenshot ${app.name}`}
              >
                {app.screenshots.map((screenshot, screenshotIndex) => (
                  <button
                    key={screenshot}
                    type="button"
                    role="tab"
                    aria-selected={activeScreenshot === screenshotIndex}
                    aria-label={`Screenshot ${screenshotIndex + 1}`}
                    onClick={() => setActiveScreenshot(screenshotIndex)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                      activeScreenshot === screenshotIndex
                        ? "w-8 bg-accent"
                        : "w-2 bg-muted/40 hover:bg-muted",
                    )}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </GlassCard>
    </motion.article>
  );
}
