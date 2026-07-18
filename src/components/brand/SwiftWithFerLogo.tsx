import type { CSSProperties } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Sole brand wordmark — /images/brand/wordmark.png
 * Transparent PNG (RGBA). Intrinsic after content crop: 1337 × 280 → aspect ≈ 4.775
 * Sized by WIDTH for the header; height follows aspect.
 */
export const WORDMARK_WIDTH = 1337;
export const WORDMARK_HEIGHT = 280;
export const WORDMARK_ASPECT = WORDMARK_WIDTH / WORDMARK_HEIGHT;

/**
 * Display widths — unchanged from prior header balance.
 *   <390px   140px
 *   390–639  152px
 *   ≥640px   172px
 */
const HEADER_WM_DISPLAY_W = {
  xs: 140,
  base: 152,
  sm: 172,
} as const;

interface SwiftWithFerLogoProps {
  variant?: "header" | "footer" | "hero" | "mark" | "icon";
  className?: string;
  priority?: boolean;
}

const appIconRadius = "rounded-[22.37%]";

function BrandWordmark({
  className,
  priority,
  displayWidth,
}: {
  className?: string;
  priority?: boolean;
  displayWidth: { xs?: number; base: number; sm?: number };
}) {
  const xs = displayWidth.xs ?? displayWidth.base;
  const sm = displayWidth.sm ?? displayWidth.base;

  const style = {
    "--header-wm-w-xs": `${xs}px`,
    "--header-wm-w": `${displayWidth.base}px`,
    "--header-wm-w-sm": `${sm}px`,
  } as CSSProperties;

  return (
    <Image
      src={siteConfig.logo.wordmark}
      alt={siteConfig.logo.wordmarkAlt}
      width={WORDMARK_WIDTH}
      height={WORDMARK_HEIGHT}
      priority={priority}
      unoptimized
      sizes={`(max-width: 389px) ${xs}px, (max-width: 639px) ${displayWidth.base}px, ${sm}px`}
      style={style}
      className={cn(
        "header-wordmark h-auto max-w-full object-contain object-left",
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
    return (
      <BrandWordmark
        className={className}
        priority={priority}
        displayWidth={HEADER_WM_DISPLAY_W}
      />
    );
  }

  if (variant === "footer") {
    // Same asset; compact height for footer chrome (≈ previous visual mass)
    const footerH = 22;
    const footerW = Math.round(footerH * WORDMARK_ASPECT);
    return (
      <Image
        src={logo.wordmark}
        alt={logo.wordmarkAlt}
        width={WORDMARK_WIDTH}
        height={WORDMARK_HEIGHT}
        unoptimized
        sizes={`${footerW}px`}
        className={cn(
          "h-[22px] w-auto max-w-full object-contain object-left sm:h-6",
          className,
        )}
      />
    );
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

  return (
    <BrandWordmark
      className={className}
      priority={priority}
      displayWidth={{ base: 120 }}
    />
  );
}
