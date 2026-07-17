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
        "rounded-2xl border border-glass-border bg-glass/85 p-5 shadow-sm backdrop-blur-xl sm:rounded-3xl sm:p-6 md:p-8",
        className,
      )}
    >
      {children}
    </Component>
  );
}
