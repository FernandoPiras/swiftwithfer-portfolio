import Link from "next/link";
import { SwiftWithFerLogo } from "@/components/brand/SwiftWithFerLogo";
import { MobileNav } from "@/components/layout/MobileNav";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/#apps", label: "Progetti" },
  { href: "/#process", label: "Metodo" },
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
      "border border-glass-border/80 bg-transparent text-foreground hover:border-glass-border hover:bg-glass/40",
    ghost: "text-muted hover:text-foreground",
  };

  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium tracking-[-0.01em] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.985]",
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-glass-border/35 bg-background/75 pt-[env(safe-area-inset-top,0px)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/65">
      <div className="mx-auto flex h-[var(--header-offset)] max-w-6xl items-center gap-3 px-4 sm:gap-8 sm:px-6 lg:gap-12 lg:px-8">
        {/* Brand — primary mass on the left */}
        <Link
          href="/#hero"
          className="brand-link relative z-10 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="SwiftWithFer — torna all'inizio"
        >
          <SwiftWithFerLogo variant="header" priority />
        </Link>

        {/* Menu — secondary, pushed away from the mark */}
        <nav
          aria-label="Navigazione principale"
          className="ml-auto hidden min-w-0 md:block"
        >
          <ul className="flex items-center gap-0.5 lg:gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex h-9 items-center px-2.5 text-[0.8125rem] font-medium tracking-[-0.012em] text-muted transition-colors duration-300 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:px-3"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-1 max-md:ml-auto sm:gap-2 md:ml-1">
          {/* Wrapper avoids ButtonLink base `inline-flex` winning over `hidden` (no twMerge). */}
          <div className="hidden sm:contents">
            <ButtonLink
              href="/#contact"
              variant="ghost"
              className="h-10 min-h-10 px-2.5 py-0 text-[0.8125rem]"
            >
              Contattami
            </ButtonLink>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
