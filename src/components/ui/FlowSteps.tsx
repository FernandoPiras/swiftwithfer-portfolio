import { cn } from "@/lib/utils";

interface FlowStepsProps {
  steps: string[];
  /** Accessible name for the flow */
  label: string;
  className?: string;
  /** horizontal on large screens when true */
  responsive?: boolean;
}

/**
 * Compact architecture / journey flow.
 * Vertical by default; optional horizontal from md up.
 */
export function FlowSteps({
  steps,
  label,
  className,
  responsive = true,
}: FlowStepsProps) {
  return (
    <ol
      aria-label={label}
      className={cn(
        "flex flex-col items-stretch gap-0",
        responsive && "md:flex-row md:flex-wrap md:items-center md:justify-start md:gap-0",
        className,
      )}
    >
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <li
            key={`${step}-${index}`}
            className={cn(
              "flex flex-col items-center md:flex-row md:items-center",
              responsive ? "w-full md:w-auto" : "w-full",
            )}
          >
            <span className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-glass-border bg-background/50 px-4 py-2.5 text-center text-sm font-medium text-foreground md:w-auto md:min-w-[7.5rem]">
              {step}
            </span>
            {!isLast ? (
              <span
                className="flex h-6 w-full items-center justify-center text-accent md:h-auto md:w-8"
                aria-hidden
              >
                <span className="md:hidden">↓</span>
                <span className="hidden md:inline">→</span>
              </span>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
