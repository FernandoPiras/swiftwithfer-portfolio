"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import type { AppProject } from "@/config/site";
import { ButtonLink } from "@/components/layout/Header";
import { GlassCard } from "@/components/ui/GlassCard";
import { AppStoreReviews } from "@/components/ui/AppStoreReviews";
import { AppDemoVideo } from "@/components/ui/AppDemoVideo";
import { cn, getStatusLabel, getWebsiteLinkLabel } from "@/lib/utils";

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <GlassCard
        as="article"
        className="group overflow-hidden md:transition-transform md:duration-500 md:hover:-translate-y-1 premium-card"
      >
        <div className="grid gap-6 md:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center">
          <div className="order-2 space-y-4 sm:space-y-5 lg:order-1">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[1.2rem] shadow-lg shadow-black/10 ring-1 ring-black/5 sm:h-20 sm:w-20 sm:rounded-[1.35rem]">
                <Image
                  src={app.icon}
                  alt={`Icona ${app.name}`}
                  fill
                  sizes="(max-width: 640px) 64px, 80px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
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

            <p className="text-sm leading-relaxed text-muted sm:text-base">{app.description}</p>

            <ul className="flex flex-wrap gap-2" aria-label={`Tecnologie usate in ${app.name}`}>
              {app.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-glass-border bg-background/40 px-2.5 py-1 text-[0.7rem] text-foreground sm:px-3 sm:text-xs"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-2.5 pt-1 sm:flex-row sm:flex-wrap sm:gap-3">
              <ButtonLink href={`/apps/${app.id}`} variant="primary" className="w-full sm:w-auto">
                Case Study
              </ButtonLink>
              {app.appStoreUrl ? (
                <ButtonLink href={app.appStoreUrl} external variant="secondary" className="w-full sm:w-auto">
                  App Store
                </ButtonLink>
              ) : null}
              {app.websiteUrl ? (
                <ButtonLink href={app.websiteUrl} external variant="secondary" className="w-full sm:w-auto">
                  {getWebsiteLinkLabel(app.websiteUrl)}
                </ButtonLink>
              ) : null}
            </div>
          </div>

          <div className="order-1 space-y-3 sm:space-y-4 lg:order-2">
            <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[220px] overflow-hidden rounded-[1.75rem] border border-glass-border bg-background/60 p-1.5 shadow-2xl shadow-black/10 sm:max-w-[260px] sm:rounded-[2rem] sm:p-2">
              <div className="relative h-full w-full overflow-hidden rounded-[1.45rem] bg-black sm:rounded-[1.6rem]">
                <Image
                  src={app.screenshots[activeScreenshot] ?? app.screenshots[0]}
                  alt={`Screenshot di ${app.name}`}
                  fill
                  sizes="(max-width: 640px) 220px, 260px"
                  className="object-cover object-top transition-opacity duration-500"
                />
              </div>
            </div>

            {app.screenshots.length > 1 ? (
              <div
                className="flex justify-center gap-2 py-1"
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
                    className="flex min-h-11 min-w-11 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <span
                      className={cn(
                        "block rounded-full transition-all duration-300",
                        activeScreenshot === screenshotIndex
                          ? "h-2 w-8 bg-accent"
                          : "h-2 w-2 bg-muted/40",
                      )}
                    />
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        {app.demoVideo ? (
          <div className="mt-8 border-t border-glass-border pt-6 sm:mt-10 sm:pt-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-accent">
              Demo reale
            </p>
            <AppDemoVideo
              src={app.demoVideo.src}
              poster={app.demoVideo.poster}
              title={app.demoVideo.title}
              size="compact"
            />
          </div>
        ) : null}

        <AppStoreReviews app={app} />
      </GlassCard>
    </motion.article>
  );
}
