import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  children?: ReactNode;
  src?: string;
  alt?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  size?: "default" | "compact" | "hero";
  /** iPhone (default) or iPad portrait proportions */
  device?: "iphone" | "ipad";
}

/** Unified device frame — identical proportions across portfolio */
export function PhoneFrame({
  children,
  src,
  alt = "",
  sizes = "(max-width: 640px) 220px, 260px",
  priority,
  className,
  size = "default",
  device = "iphone",
}: PhoneFrameProps) {
  const isCompact = size === "compact";
  const isHero = size === "hero";
  const isIpad = device === "ipad";

  return (
    <div
      className={cn(
        "phone-frame",
        isCompact && "phone-frame--compact",
        isHero && "phone-frame--hero",
        isIpad && "phone-frame--ipad",
        className,
      )}
    >
      <div className="phone-frame__screen">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={
              isIpad
                ? "(max-width: 640px) 280px, (max-width: 1024px) 360px, 420px"
                : sizes
            }
            priority={priority}
            fetchPriority={priority ? "high" : "auto"}
            quality={75}
            className="object-cover object-top"
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
}
