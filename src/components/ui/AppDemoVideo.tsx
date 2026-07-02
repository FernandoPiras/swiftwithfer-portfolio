import { cn } from "@/lib/utils";

interface AppDemoVideoProps {
  src: string;
  poster?: string;
  title: string;
  className?: string;
  size?: "compact" | "full";
}

export function AppDemoVideo({
  src,
  poster,
  title,
  className,
  size = "full",
}: AppDemoVideoProps) {
  const isCompact = size === "compact";

  return (
    <figure className={cn("mx-auto w-full", className)}>
      <div
        className={cn(
          "relative mx-auto overflow-hidden border border-glass-border bg-black shadow-2xl shadow-black/10",
          isCompact
            ? "max-w-[220px] rounded-[1.75rem] p-1.5 sm:max-w-[260px] sm:rounded-[2rem] sm:p-2"
            : "max-w-[280px] rounded-[2rem] p-2 sm:max-w-[320px] sm:p-2.5",
        )}
      >
        <video
          src={src}
          poster={poster}
          controls
          playsInline
          preload="metadata"
          aria-label={title}
          className={cn(
            "w-full bg-black",
            isCompact
              ? "aspect-[9/19.5] rounded-[1.45rem] object-contain sm:rounded-[1.6rem]"
              : "aspect-[9/19.5] rounded-[1.6rem] object-contain sm:rounded-[1.75rem]",
          )}
        >
          Il tuo browser non supporta la riproduzione video.
        </video>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted sm:text-sm">
        {title}
      </figcaption>
    </figure>
  );
}
