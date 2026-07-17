import Link from "next/link";
import { SwiftWithFerLogo } from "@/components/brand/SwiftWithFerLogo";
import { MobileNav } from "@/components/layout/MobileNav";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/#apps", label: "Progetti" },
  { href: "/#services", label: "Servizi" },
  { href: "/#bio", label: "Bio" },
  { href: "/#technologies", label: "Stack" },
  { href: "/#contact", label: "Contatti" },
];

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonLinkProps) {
  const styles = {
    primary: "btn-primary",
    secondary:
      "border border-glass-border bg-glass/70 text-foreground backdrop-blur-md hover:border-accent/25 hover:bg-glass",
    ghost: "text-muted hover:text-foreground",
  };

  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]",
    styles[variant],
    className,
  );

  const isMailto = href.startsWith("mailto:");

  if (external || isMailto) {
    return (
      <a
        href={href}
        className={classes}
        {...(external && !isMailto
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-glass-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6 sm:py-4">
        <Link
          href="/#hero"
          className="brand-link shrink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="SwiftWithFer — torna all'inizio"
        >
          <SwiftWithFerLogo variant="header" priority />
        </Link>

        <nav aria-label="Navigazione principale" className="hidden md:block">
          <ul className="flex items-center gap-0.5 lg:gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-10 items-center rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ButtonLink
            href="/#contact"
            variant="secondary"
            className="hidden min-h-10 px-4 text-xs sm:inline-flex sm:text-sm"
          >
            Contattami
          </ButtonLink>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
