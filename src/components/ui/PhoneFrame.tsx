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
  size?: "default" | "compact";
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
}: PhoneFrameProps) {
  const isCompact = size === "compact";

  return (
    <div
      className={cn(
        "phone-frame",
        isCompact && "phone-frame--compact",
        className,
      )}
    >
      <div className="phone-frame__screen">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-top"
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
}
