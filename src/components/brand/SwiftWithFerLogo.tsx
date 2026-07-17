import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/** Intrinsic wordmark dimensions — 2172×724, aspect ≈ 3:1 */
export const WORDMARK_WIDTH = 2172;
export const WORDMARK_HEIGHT = 724;

interface SwiftWithFerLogoProps {
  variant?: "header" | "footer" | "hero" | "mark" | "icon" | "wordmark";
  className?: string;
  priority?: boolean;
}

const appIconRadius = "rounded-[22.37%]";

function WordmarkImage({
  className,
  priority,
  sizes,
}: {
  className?: string;
  priority?: boolean;
  sizes: string;
}) {
  const { logo } = siteConfig;

  return (
    <Image
      src={logo.wordmark}
      alt={logo.wordmarkAlt}
      width={WORDMARK_WIDTH}
      height={WORDMARK_HEIGHT}
      priority={priority}
      sizes={sizes}
      className={cn("wordmark-img h-full w-auto max-w-full select-none", className)}
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
      <span
        className={cn(
          "wordmark-frame inline-flex h-6 items-center sm:h-7",
          className,
        )}
      >
        <WordmarkImage priority={priority} sizes="(max-width: 640px) 120px, 140px" />
      </span>
    );
  }

  if (variant === "footer" || variant === "wordmark") {
    return (
      <span
        className={cn(
          "wordmark-frame inline-flex h-5 items-center sm:h-[1.375rem]",
          className,
        )}
      >
        <WordmarkImage priority={priority} sizes="110px" />
      </span>
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
    <span className={cn("wordmark-frame inline-flex h-6 items-center", className)}>
      <WordmarkImage priority={priority} sizes="140px" />
    </span>
  );
}
