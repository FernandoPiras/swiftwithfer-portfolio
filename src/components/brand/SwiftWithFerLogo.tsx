import type { CSSProperties } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/** Legacy mask wordmark (footer) — 2172×724 transparent PNG */
export const WORDMARK_WIDTH = 2172;
export const WORDMARK_HEIGHT = 724;
export const WORDMARK_ASPECT = WORDMARK_WIDTH / WORDMARK_HEIGHT;

/** Official header lockup — wordmark_logo.png (2038×771), used as-is */
export const HEADER_WORDMARK_WIDTH = 2038;
export const HEADER_WORDMARK_HEIGHT = 771;
export const HEADER_WORDMARK_ASPECT =
  HEADER_WORDMARK_WIDTH / HEADER_WORDMARK_HEIGHT;

interface SwiftWithFerLogoProps {
  variant?: "header" | "footer" | "hero" | "mark" | "icon";
  className?: string;
  priority?: boolean;
}

const appIconRadius = "rounded-[22.37%]";

/**
 * Footer / legacy wordmark — CSS mask + foreground (theme-aware).
 */
function Wordmark({
  className,
  heightPx,
}: {
  className?: string;
  heightPx: { base: number; sm?: number };
}) {
  const widthBase = Math.round(heightPx.base * WORDMARK_ASPECT);
  const widthSm = Math.round((heightPx.sm ?? heightPx.base) * WORDMARK_ASPECT);

  const style = {
    "--wordmark-h": `${heightPx.base}px`,
    "--wordmark-w": `${widthBase}px`,
    "--wordmark-h-sm": `${heightPx.sm ?? heightPx.base}px`,
    "--wordmark-w-sm": `${widthSm}px`,
  } as CSSProperties;

  return (
    <span
      role="img"
      aria-label={siteConfig.logo.wordmarkAlt}
      className={cn("wordmark", className)}
      style={style}
    />
  );
}

/**
 * Header brand lockup — exact wordmark_logo.png, no redesign / filters beyond
 * dark-mode invert so the black-on-white asset remains legible on dark UI.
 */
function HeaderWordmark({
  className,
  priority,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={siteConfig.logo.headerWordmark}
      alt={siteConfig.logo.wordmarkAlt}
      width={HEADER_WORDMARK_WIDTH}
      height={HEADER_WORDMARK_HEIGHT}
      priority={priority}
      sizes="(max-width: 640px) 95px, 111px"
      className={cn(
        "h-9 w-auto max-w-[min(100%,11.5rem)] object-contain object-left sm:h-[2.625rem] sm:max-w-[13.5rem]",
        "dark:invert",
        className,
      )}
    />
  );
}

export function SwiftWithFerLogo({
  variant = "header",
  className,
  priority = false,
}: SwiftWithFerLogoProps) {
  const { logo } = siteConfig;

  if (variant === "header") {
    return <HeaderWordmark className={className} priority={priority} />;
  }

  if (variant === "footer") {
    return <Wordmark heightPx={{ base: 22, sm: 24 }} className={className} />;
  }

  if (variant === "hero") {
    return (
      <Image
        src={logo.full}
        alt={logo.alt}
        width={1024}
        height={1024}
        priority={priority}
        sizes="(max-width: 768px) 80vw, 320px"
        className={cn(
          "h-auto w-full max-w-[220px] shadow-2xl shadow-black/20 sm:max-w-[280px] md:max-w-[320px]",
          appIconRadius,
          className,
        )}
      />
    );
  }

  if (variant === "icon" || variant === "mark") {
    return (
      <div
        className={cn(
          "relative shrink-0 overflow-hidden",
          variant === "mark" ? "h-5 w-5 rounded-md" : "h-9 w-9 md:h-10 md:w-10",
          variant === "icon" && appIconRadius,
          className,
        )}
      >
        <Image
          src={logo.full}
          alt={variant === "icon" ? logo.alt : ""}
          fill
          aria-hidden={variant === "mark"}
          sizes={variant === "mark" ? "20px" : "40px"}
          className="object-cover"
        />
      </div>
    );
  }

  return <Wordmark heightPx={{ base: 20 }} className={className} />;
}
