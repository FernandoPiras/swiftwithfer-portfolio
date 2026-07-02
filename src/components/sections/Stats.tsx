"use client";

import { useEffect, useRef, useState } from "react";
import { statsConfig, type StatItem } from "@/config/stats";
import { cn } from "@/lib/utils";

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function useCountUp(target: number, active: boolean, duration = 1400) {
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
      className="rounded-2xl border border-glass-border bg-glass/60 p-4 text-center shadow-glass backdrop-blur-xl sm:rounded-3xl sm:p-6"
      aria-label={`${stat.prefix ?? ""}${stat.value}${stat.suffix ?? ""} ${stat.label}`}
    >
      <p className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl" aria-hidden>
        {stat.prefix}
        <span>{count}</span>
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm font-semibold text-foreground sm:text-base">{stat.label}</p>
      {stat.description ? (
        <p className="mt-1 text-xs text-muted sm:text-sm">{stat.description}</p>
      ) : null}
    </article>
  );
}

function LabelStatCard({
  stat,
  active,
}: {
  stat: Extract<StatItem, { type: "label" }>;
  active: boolean;
}) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-glass-border bg-glass/60 p-4 text-center shadow-glass backdrop-blur-xl transition-all duration-700 sm:rounded-3xl sm:p-6",
        active ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
      )}
      aria-label={`${stat.headline} ${stat.label}`}
    >
      <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
        {stat.headline}
      </p>
      <p className="mt-1 text-sm font-semibold text-accent sm:text-base">{stat.label}</p>
      {stat.description ? (
        <p className="mt-2 text-xs text-muted sm:text-sm">{stat.description}</p>
      ) : null}
    </article>
  );
}

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

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
      id="stats"
      aria-label="Metriche SwiftWithFer"
      className="scroll-mt-[calc(var(--header-offset)+env(safe-area-inset-top,0px))] py-10 sm:py-14 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {statsConfig.map((stat) => (
            <li key={stat.id}>
              {stat.type === "counter" ? (
                <CounterStatCard stat={stat} active={active} />
              ) : (
                <LabelStatCard stat={stat} active={active} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
