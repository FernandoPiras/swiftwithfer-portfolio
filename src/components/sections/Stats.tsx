"use client";

import { useEffect, useRef, useState } from "react";
import { statsConfig, type StatItem } from "@/config/stats";

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    if (!active) return;

    if (reducedMotionRef.current) {
      setValue(target);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(easeOutCubic(progress) * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, duration, target]);

  return value;
}

function CounterStatCard({
  stat,
  active,
}: {
  stat: Extract<StatItem, { type: "counter" }>;
  active: boolean;
}) {
  const count = useCountUp(stat.value, active);

  return (
    <article
      className="stat-card"
      aria-label={`${stat.prefix ?? ""}${stat.value}${stat.suffix ?? ""} ${stat.label}`}
    >
      <p
        className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        aria-hidden
      >
        {stat.prefix}
        <span>{count}</span>
        {stat.suffix}
      </p>
      <p className="mt-2.5 text-sm font-semibold text-foreground">{stat.label}</p>
      {stat.description ? (
        <p className="mt-1.5 text-xs text-muted">{stat.description}</p>
      ) : null}
    </article>
  );
}

function LabelStatCard({
  stat,
}: {
  stat: Extract<StatItem, { type: "label" }>;
}) {
  return (
    <article
      className="stat-card"
      aria-label={`${stat.headline} ${stat.label}`}
    >
      <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {stat.headline}
      </p>
      <p className="mt-1 text-sm font-semibold text-accent">{stat.label}</p>
      {stat.description ? (
        <p className="mt-1 text-xs text-muted">{stat.description}</p>
      ) : null}
    </article>
  );
}

export function Stats({ embedded = false }: { embedded?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={embedded ? undefined : "stats"}
      aria-label="Metriche principali"
      className={
        embedded
          ? "relative"
          : "scroll-mt-[calc(var(--header-offset)+env(safe-area-inset-top,0px))] relative border-y border-glass-border/40 py-20 sm:py-28 md:py-32"
      }
    >
      <div className={embedded ? "relative" : "relative mx-auto max-w-6xl px-4 sm:px-6"}>
        <ul className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {statsConfig.map((stat, index) => (
            <li
              key={stat.id}
              style={{
                transitionDelay: active ? `${index * 70}ms` : "0ms",
              }}
              className={
                active
                  ? "translate-y-0 opacity-100 transition-all duration-700 ease-[cubic-bezier(0.33,0,0.2,1)]"
                  : "translate-y-1.5 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.33,0,0.2,1)]"
              }
            >
              {stat.type === "counter" ? (
                <CounterStatCard stat={stat} active={active} />
              ) : (
                <LabelStatCard stat={stat} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
