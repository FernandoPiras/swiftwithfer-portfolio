import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface SwiftWithFerLogoProps {
  variant?: "header" | "hero" | "mark";
  className?: string;
  priority?: boolean;
}

export function SwiftWithFerLogo({
  variant = "header",
  className,
  priority = false,
}: SwiftWithFerLogoProps) {
  const { logo } = siteConfig;

  if (variant === "hero") {
    return (
      <div
        className={cn(
          "relative aspect-square w-full overflow-hidden rounded-[1.35rem] bg-[#f3efe8]",
          className,
        )}
      >
        <Image
          src={logo.full}
          alt={logo.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-contain p-4"
        />
      </div>
    );
  }

  if (variant === "mark") {
    return (
      <Image
        src={logo.full}
        alt=""
        width={64}
        height={64}
        aria-hidden
        className={cn("h-full w-full rounded-md object-cover", className)}
      />
    );
  }

  return (
    <Image
      src={logo.full}
      alt={logo.alt}
      width={1024}
      height={1024}
      priority={priority}
      className={cn("h-10 w-auto md:h-11", className)}
    />
  );
}
