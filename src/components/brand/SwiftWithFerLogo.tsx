import type { CSSProperties } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/** Intrinsic wordmark dimensions — 2172×724 */
export const WORDMARK_WIDTH = 2172;
export const WORDMARK_HEIGHT = 724;
export const WORDMARK_ASPECT = WORDMARK_WIDTH / WORDMARK_HEIGHT;

interface SwiftWithFerLogoProps {
  variant?: "header" | "footer" | "hero" | "mark" | "icon";
  className?: string;
  priority?: boolean;
}

const appIconRadius = "rounded-[22.37%]";

/**
 * Wordmark as CSS mask filled with --foreground.
 * Transparent derivative of Wordmark.png (source file never altered).
 * No mix-blend-mode / invert — stable in Chrome, Safari, Firefox, Edge.
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

export function SwiftWithFerLogo({
  variant = "header",
  className,
  priority = false,
}: SwiftWithFerLogoProps) {
  const { logo } = siteConfig;

  if (variant === "header") {
    // Navbar protagonist — designed presence, not a quiet mark
    return <Wordmark heightPx={{ base: 30, sm: 36 }} className={className} />;
  }

  if (variant === "footer") {
    // Quieter close (~0.55× header) so header remains brand authority
    return <Wordmark heightPx={{ base: 18, sm: 20 }} className={className} />;
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
