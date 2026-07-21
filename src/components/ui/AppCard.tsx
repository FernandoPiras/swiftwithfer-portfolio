"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { AppProject } from "@/config/site";
import { ButtonLink } from "@/components/layout/Header";
import { GlassCard } from "@/components/ui/GlassCard";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { cn, getStatusLabel, getWebsiteLinkLabel } from "@/lib/utils";
import { EASE_OUT_SOFT, MOTION } from "@/lib/motion";

interface AppCardProps {
  app: AppProject;
  index?: number;
}

const statusStyles = {
  published: "bg-emerald-500/12 text-emerald-700 dark:text-emerald-400",
  beta: "bg-amber-500/12 text-amber-700 dark:text-amber-400",
  "in-development": "bg-blue-500/12 text-blue-700 dark:text-blue-400",
};

const VISIBLE_TECH = 5;

export function AppCard({ app, index = 0 }: AppCardProps) {
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const reduceMotion = useReducedMotion();
  const tabId = useId();
  const extraTech = app.technologies.length - VISIBLE_TECH;
  const isFlagship = app.id === "slotiva";

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: MOTION.distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={MOTION.viewport}
      transition={{
        duration: MOTION.duration.base,
        delay: index * 0.07,
        ease: EASE_OUT_SOFT,
      }}
    >
      <GlassCard className="premium-card overflow-hidden">
        {isFlagship ? (
          <p className="text-eyebrow mb-8 text-accent">Progetto principale</p>
        ) : null}

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.85fr)] lg:items-center lg:gap-14">
          <div className="order-2 space-y-7 lg:order-1">
            <div className="flex items-start gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[1.15rem] shadow-[0_4px_16px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04] sm:h-[4.5rem] sm:w-[4.5rem]">
                <Image
                  src={app.icon}
                  alt={`Icona ${app.name}`}
                  fill
                  sizes="72px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-foreground sm:text-2xl">
                    {app.name}
                  </h3>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-0.5 text-[0.6875rem] font-medium tracking-[-0.01em]",
                      statusStyles[app.status],
                    )}
                  >
                    {getStatusLabel(app.status)}
                  </span>
                </div>
                <p className="mt-1.5 text-sm font-medium leading-snug text-accent">
                  {app.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-muted text-pretty sm:text-[0.9375rem] sm:leading-relaxed">
              {app.description}
            </p>

            {app.outcomes?.length ? (
              <ul className="space-y-2.5" aria-label={`Risultati ${app.name}`}>
                {app.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-2.5 text-sm leading-snug text-foreground"
                  >
                    <span
                      className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    {outcome}
                  </li>
                ))}
              </ul>
            ) : null}

            <ul
              className="flex flex-wrap gap-1.5"
              aria-label={`Tecnologie usate in ${app.name}`}
            >
              {app.technologies.slice(0, VISIBLE_TECH).map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-glass-border/80 bg-background/40 px-2.5 py-0.5 text-[0.6875rem] tracking-[-0.01em] text-muted"
                >
                  {tech}
                </li>
              ))}
              {extraTech > 0 ? (
                <li className="rounded-full px-2 py-0.5 text-[0.6875rem] text-muted">
                  +{extraTech}
                </li>
              ) : null}
            </ul>

            <div className="flex flex-col gap-2.5 pt-1 sm:flex-row sm:flex-wrap">
              <ButtonLink href={`/apps/${app.id}`} className="w-full sm:w-auto">
                Case Study
              </ButtonLink>
              {app.appStoreUrl ? (
                <ButtonLink
                  href={app.appStoreUrl}
                  external
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  App Store
                </ButtonLink>
              ) : null}
              {app.websiteUrl ? (
                <ButtonLink
                  href={app.websiteUrl}
                  external
                  variant="ghost"
                  className="w-full sm:w-auto"
                >
                  {getWebsiteLinkLabel(app.websiteUrl)}
                </ButtonLink>
              ) : null}
            </div>
          </div>

          <div className="order-1 space-y-3 lg:order-2">
            <PhoneFrame
              src={app.screenshots[activeScreenshot] ?? app.screenshots[0]}
              alt={`Screenshot di ${app.name}`}
              size="compact"
            />

            {app.screenshots.length > 1 ? (
              <div
                className="flex justify-center gap-1 py-1"
                role="tablist"
                aria-label={`Screenshot ${app.name}`}
              >
                {app.screenshots.map((screenshot, screenshotIndex) => {
                  const selected = activeScreenshot === screenshotIndex;
                  return (
                    <button
                      key={screenshot}
                      type="button"
                      role="tab"
                      id={`${tabId}-tab-${screenshotIndex}`}
                      aria-selected={selected}
                      aria-controls={`${tabId}-panel`}
                      tabIndex={selected ? 0 : -1}
                      aria-label={`Screenshot ${screenshotIndex + 1}`}
                      onClick={() => setActiveScreenshot(screenshotIndex)}
                      onKeyDown={(event) => {
                        if (event.key === "ArrowRight") {
                          event.preventDefault();
                          setActiveScreenshot(
                            (activeScreenshot + 1) % app.screenshots.length,
                          );
                        }
                        if (event.key === "ArrowLeft") {
                          event.preventDefault();
                          setActiveScreenshot(
                            (activeScreenshot - 1 + app.screenshots.length) %
                              app.screenshots.length,
                          );
                        }
                      }}
                      className="flex min-h-11 min-w-11 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <span
                        className={cn(
                          "block rounded-full transition-all duration-300",
                          selected ? "h-1.5 w-7 bg-accent" : "h-1.5 w-1.5 bg-muted/30",
                        )}
                      />
                    </button>
                  );
                })}
              </div>
            ) : null}
            <div id={`${tabId}-panel`} role="tabpanel" className="sr-only">
              Screenshot {activeScreenshot + 1} di {app.name}
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
