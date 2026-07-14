"use client";

import { useEffect, useRef, useState } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(!isCompact);

  useEffect(() => {
    if (shouldLoad) return;
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <figure className={cn("mx-auto w-full", className)}>
      <div
        ref={containerRef}
        className={cn("phone-frame", isCompact && "phone-frame--compact")}
      >
        <div className="phone-frame__screen">
          {shouldLoad ? (
            <video
              src={src}
              poster={poster}
              controls
              playsInline
              preload={isCompact ? "none" : "metadata"}
              aria-label={title}
              className="h-full w-full object-contain"
            >
              Il tuo browser non supporta la riproduzione video.
            </video>
          ) : (
            <div
              className="flex h-full w-full items-center justify-center bg-black text-xs text-muted"
              aria-hidden
            >
              {poster ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={poster}
                  alt=""
                  className="h-full w-full object-cover object-top opacity-80"
                />
              ) : null}
            </div>
          )}
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted sm:text-sm">
        {title}
      </figcaption>
    </figure>
  );
}
