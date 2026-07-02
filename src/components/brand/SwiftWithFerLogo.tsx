import { cn } from "@/lib/utils";

interface SwiftWithFerLogoProps {
  variant?: "header" | "hero" | "mark";
  className?: string;
}

export function SwiftWithFerLogo({
  variant = "header",
  className,
}: SwiftWithFerLogoProps) {
  if (variant === "mark") {
    return <LogoMark className={className} />;
  }

  if (variant === "hero") {
    return <LogoHero className={className} />;
  }

  return <LogoHeader className={className} />;
}

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-full w-full", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id="swf-mark-bg" x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6B4A" />
          <stop offset="0.45" stopColor="#F05138" />
          <stop offset="1" stopColor="#007AFF" />
        </linearGradient>
        <linearGradient id="swf-mark-wing" x1="18" y1="20" x2="46" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" stopOpacity="0.98" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.82" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#swf-mark-bg)" />
      <path
        d="M44 18.5C38.5 16 31.5 17.5 27 22.5C23.5 26.2 22.5 31 24 35.5C20 33.5 17.5 29.5 18 24.5C18.8 19.2 23 15.5 28.5 15C34.5 14.5 40 16 44 18.5Z"
        fill="url(#swf-mark-wing)"
      />
      <path
        d="M20 40.5C25 44.5 32.5 45.5 38.5 42C42.5 39.5 45 35.5 45 31C40.5 33.5 35.5 33 31.5 30C27 26.5 26 21.5 28.5 17.5C23.5 20.5 19.5 26 19 32.5C18.5 36 19 38.5 20 40.5Z"
        fill="white"
        fillOpacity="0.95"
      />
      <path
        d="M30 46.5H34.5"
        stroke="white"
        strokeOpacity="0.7"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LogoHeader({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-auto md:h-9", className)}
      role="img"
      aria-label="SwiftWithFer"
    >
      <defs>
        <linearGradient id="swf-header-bg" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6B4A" />
          <stop offset="0.5" stopColor="#F05138" />
          <stop offset="1" stopColor="#007AFF" />
        </linearGradient>
        <linearGradient id="swf-header-accent" x1="92" y1="10" x2="148" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#007AFF" />
          <stop offset="1" stopColor="#5E5CE6" />
        </linearGradient>
      </defs>
      <rect x="2" y="4" width="32" height="32" rx="9" fill="url(#swf-header-bg)" />
      <path
        d="M26 13.5C22.5 12 18 13 15.5 16.5C13.5 19 13 22 14.2 24.8C11.5 23.5 9.8 21 10 18C10.5 14.5 13.2 12.2 16.8 12C20.5 11.8 23.8 12.8 26 13.5Z"
        fill="white"
        fillOpacity="0.92"
      />
      <path
        d="M12.5 26.5C15.8 28.8 19.8 29.5 23.2 27.8C25.5 26.5 27 24.2 27 22C24.2 23.5 21.2 23.2 18.8 21.5C16 19.5 15.2 16.5 16.5 14C13.2 15.8 11 18.5 10.8 21.8C10.6 24 11 25.5 12.5 26.5Z"
        fill="white"
      />
      <text
        x="44"
        y="27"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="17"
        fontWeight="600"
        letterSpacing="-0.03em"
      >
        Swift
      </text>
      <text
        x="92"
        y="27"
        fill="url(#swf-header-accent)"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="17"
        fontWeight="600"
        letterSpacing="-0.03em"
      >
        With
      </text>
      <text
        x="138"
        y="27"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="17"
        fontWeight="600"
        letterSpacing="-0.03em"
      >
        Fer
      </text>
    </svg>
  );
}

function LogoHero({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[1.5rem]",
        className,
      )}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(240,81,56,0.22),transparent_55%),radial-gradient(circle_at_75%_75%,rgba(0,122,255,0.2),transparent_50%),linear-gradient(145deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]"
        aria-hidden
      />
      <div className="absolute inset-10 rounded-full bg-accent/10 blur-3xl" aria-hidden />
      <svg
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 h-[72%] w-[72%]"
        role="img"
        aria-label="SwiftWithFer logo"
      >
        <defs>
          <linearGradient id="swf-hero-ring" x1="40" y1="20" x2="280" y2="300" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF7A59" />
            <stop offset="0.35" stopColor="#F05138" />
            <stop offset="0.7" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#5E5CE6" />
          </linearGradient>
          <linearGradient id="swf-hero-bg" x1="60" y1="50" x2="260" y2="270" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF6B4A" />
            <stop offset="0.45" stopColor="#F05138" />
            <stop offset="1" stopColor="#007AFF" />
          </linearGradient>
          <filter id="swf-hero-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx="160" cy="160" r="128" stroke="url(#swf-hero-ring)" strokeWidth="2" strokeOpacity="0.35" />
        <circle cx="160" cy="160" r="108" stroke="url(#swf-hero-ring)" strokeWidth="1" strokeOpacity="0.18" />
        <rect x="72" y="72" width="176" height="176" rx="48" fill="url(#swf-hero-bg)" filter="url(#swf-hero-glow)" />
        <path
          d="M208 108C190 98 168 102 154 122C142 138 139 156 145 174C128 164 118 146 120 126C122 106 138 92 158 89C180 86 198 94 208 108Z"
          fill="white"
          fillOpacity="0.9"
        />
        <path
          d="M112 198C132 214 160 218 182 206C198 196 208 176 208 156C186 168 164 166 146 150C126 132 122 108 132 88C110 104 96 130 95 158C94 174 100 188 112 198Z"
          fill="white"
        />
        <path
          d="M148 228H172"
          stroke="white"
          strokeOpacity="0.75"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <text
          x="160"
          y="262"
          textAnchor="middle"
          fill="currentColor"
          className="fill-foreground"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          fontSize="22"
          fontWeight="600"
          letterSpacing="0.22em"
        >
          SWIFTWITHFER
        </text>
      </svg>
    </div>
  );
}
