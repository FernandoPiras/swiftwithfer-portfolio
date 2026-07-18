import type { CSSProperties } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/** Legacy mask wordmark (footer) — 2172×724 transparent PNG */
export const WORDMARK_WIDTH = 2172;
export const WORDMARK_HEIGHT = 724;
export const WORDMARK_ASPECT = WORDMARK_WIDTH / WORDMARK_HEIGHT;

/**
 * Official header lockup — wordmark_logo.png
 * Intrinsic: 2038 × 771 → aspect ≈ 2.643
 * Sized by WIDTH (primary reading axis). Height follows aspect — never forced.
 */
export const HEADER_WORDMARK_WIDTH = 2038;
export const HEADER_WORDMARK_HEIGHT = 771;
export const HEADER_WORDMARK_ASPECT =
  HEADER_WORDMARK_WIDTH / HEADER_WORDMARK_HEIGHT;

/**
 * Display widths chosen for at-a-glance legibility of “swiftwithfer”
 * inside the SF | wordmark lockup (not arbitrary heights).
 * Height = width / HEADER_WORDMARK_ASPECT
 *   mobile  132px → ~50px H
 *   sm+     172px → ~65px H
 */
const HEADER_WM_DISPLAY_W = {
  base: 132,
  sm: 172,
} as const;

interface SwiftWithFerLogoProps {
  variant?: "header" | "footer" | "hero" | "mark" | "icon";
  className?: string;
  priority?: boolean;
}

const appIconRadius = "rounded-[22.37%]";

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
 * Header brand — width-driven, aspect-locked rendering of wordmark_logo.png.
 */
function HeaderWordmark({
  className,
  priority,
}: {
  className?: string;
  priority?: boolean;
}) {
  const style = {
    "--header-wm-w": `${HEADER_WM_DISPLAY_W.base}px`,
    "--header-wm-w-sm": `${HEADER_WM_DISPLAY_W.sm}px`,
  } as CSSProperties;

  return (
    <Image
      src={siteConfig.logo.headerWordmark}
      alt={siteConfig.logo.wordmarkAlt}
      width={HEADER_WORDMARK_WIDTH}
      height={HEADER_WORDMARK_HEIGHT}
      priority={priority}
      sizes={`(max-width: 639px) ${HEADER_WM_DISPLAY_W.base}px, ${HEADER_WM_DISPLAY_W.sm}px`}
      style={style}
      className={cn(
        "header-wordmark h-auto w-[var(--header-wm-w)] max-w-full object-contain object-left sm:w-[var(--header-wm-w-sm)]",
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
