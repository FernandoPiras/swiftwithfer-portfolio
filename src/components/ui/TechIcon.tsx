import {
  siApple,
  siAppstore,
  siCursor,
  siFigma,
  siFirebase,
  siGit,
  siGithub,
  siGoogleadmob,
  siOpenapiinitiative,
  siSwift,
  siXcode,
} from "simple-icons";
import { cn } from "@/lib/utils";

const icons = {
  swift: siSwift,
  apple: siApple,
  xcode: siXcode,
  firebase: siFirebase,
  appstore: siAppstore,
  git: siGit,
  github: siGithub,
  googleadmob: siGoogleadmob,
  openapiinitiative: siOpenapiinitiative,
  cursor: siCursor,
  figma: siFigma,
} as const;

const darkInvertSlugs = new Set(["github", "cursor", "apple", "xcode"]);

interface TechIconProps {
  slug: keyof typeof icons | string;
  className?: string;
}

export function TechIcon({ slug, className }: TechIconProps) {
  const icon = icons[slug as keyof typeof icons];

  if (!icon) {
    return (
      <span
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-lg bg-muted/20 text-xs font-semibold text-muted",
          className,
        )}
        aria-hidden
      >
        ?
      </span>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label={icon.title}
      className={cn(
        "h-10 w-10",
        darkInvertSlugs.has(slug) && "dark:brightness-0 dark:invert",
        className,
      )}
    >
      <path d={icon.path} fill={`#${icon.hex}`} />
    </svg>
  );
}
