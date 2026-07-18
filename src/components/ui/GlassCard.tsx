import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
}

export function GlassCard({
  children,
  className,
  as: Component = "div",
}: GlassCardProps) {
  return (
    <Component
      className={cn(
        "rounded-2xl border border-glass-border/80 bg-glass/75 p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)] backdrop-blur-xl sm:rounded-[1.35rem] sm:p-7 md:p-8",
        className,
      )}
    >
      {children}
    </Component>
  );
}
