import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#bio", label: "Bio" },
  { href: "#apps", label: "App" },
  { href: "#skills", label: "Skills" },
  { href: "#timeline", label: "Percorso" },
  { href: "#contact", label: "Contatti" },
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
    primary:
      "bg-foreground text-background hover:opacity-90 shadow-lg shadow-foreground/10",
    secondary:
      "border border-glass-border bg-glass/60 text-foreground backdrop-blur-md hover:bg-glass",
    ghost: "text-muted hover:text-foreground",
  };

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    styles[variant],
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-glass-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#hero"
          className="text-sm font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
          aria-label="Torna all'inizio"
        >
          Swift<span className="text-accent">With</span>Fer
        </Link>
        <nav aria-label="Navigazione principale" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ButtonLink href="#contact" variant="secondary" className="text-xs md:text-sm">
          Contattami
        </ButtonLink>
      </div>
    </header>
  );
}
