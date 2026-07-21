"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { AppProject } from "@/config/site";
import { ButtonLink } from "@/components/layout/Header";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { cn, getStatusLabel, getWebsiteLinkLabel } from "@/lib/utils";
import { EASE_OUT_SOFT, MOTION } from "@/lib/motion";

interface AppCardProps {
  app: AppProject;
  index?: number;
}

const statusStyles = {
  published: "bg-emerald-500/[0.07] text-emerald-700/75 dark:text-emerald-400/70",
  beta: "bg-amber-500/[0.07] text-amber-700/75 dark:text-amber-400/70",
  "in-development": "bg-blue-500/[0.07] text-blue-700/75 dark:text-blue-400/70",
};

const VISIBLE_TECH = 5;

export function AppCard({ app }: AppCardProps) {
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const reduceMotion = useReducedMotion();
  const tabId = useId();
  const extraTech = app.technologies.length - VISIBLE_TECH;

  return (
    <motion.article
      className="product-stage"
      initial={reduceMotion ? false : { opacity: 0, y: MOTION.distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={MOTION.viewportTight}
      transition={{
        duration: MOTION.duration.slow,
        ease: EASE_OUT_SOFT,
      }}
    >
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.85fr)] lg:items-center lg:gap-20 xl:gap-24">
        <div className="order-2 space-y-8 lg:order-1">
          <div className="flex items-start gap-3.5 sm:gap-4">
            <div className="product-stage__icon relative h-14 w-14 shrink-0 overflow-hidden rounded-[1.05rem] sm:h-16 sm:w-16">
              <Image
                src={app.icon}
                alt={`Icona ${app.name}`}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0 flex-1 pt-0.5">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-foreground sm:text-2xl">
                  {app.name}
                </h3>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[0.625rem] font-medium tracking-[-0.01em]",
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
                    className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent/55"
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
                className="rounded-full border border-glass-border/45 px-2.5 py-0.5 text-[0.6875rem] tracking-[-0.01em] text-muted/80"
              >
                {tech}
              </li>
            ))}
            {extraTech > 0 ? (
              <li className="rounded-full px-2 py-0.5 text-[0.6875rem] text-muted/65">
                +{extraTech}
              </li>
            ) : null}
          </ul>

          <div className="flex flex-col gap-3 pt-5 sm:flex-row sm:flex-wrap">
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

        <div className="product-stage__device order-1 lg:order-2">
          <PhoneFrame
            src={app.screenshots[activeScreenshot] ?? app.screenshots[0]}
            alt={`Screenshot di ${app.name}`}
            size="compact"
            className="product-stage__phone"
            sizes="(max-width: 639px) 256px, (max-width: 1023px) 280px, 300px"
          />

          {app.screenshots.length > 1 ? (
            <div
              className="product-stage__dots flex justify-center gap-1"
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
                        "block rounded-full transition-all duration-500 ease-[cubic-bezier(0.33,0,0.2,1)]",
                        selected
                          ? "h-1 w-5 bg-accent/70"
                          : "h-1 w-1 bg-muted/25",
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
    </motion.article>
  );
}
