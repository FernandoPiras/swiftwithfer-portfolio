import { siApple, siGithub, siInstagram } from "simple-icons";
import type { SocialLink } from "@/config/site";
import { cn } from "@/lib/utils";

interface SocialBrandIconProps {
  icon: SocialLink["icon"];
  className?: string;
}

export function SocialBrandIcon({ icon, className }: SocialBrandIconProps) {
  if (icon === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-label={siInstagram.title}
        className={cn("h-7 w-7", className)}
      >
        <path d={siInstagram.path} fill={`#${siInstagram.hex}`} />
      </svg>
    );
  }

  if (icon === "appstore") {
    return (
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-label={siApple.title}
        className={cn("h-7 w-7 dark:brightness-0 dark:invert", className)}
      >
        <path d={siApple.path} fill={`#${siApple.hex}`} />
      </svg>
    );
  }

  if (icon === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-label={siGithub.title}
        className={cn("h-7 w-7 dark:invert", className)}
      >
        <path d={siGithub.path} fill={`#${siGithub.hex}`} />
      </svg>
    );
  }

  return null;
}
