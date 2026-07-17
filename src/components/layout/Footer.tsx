import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SwiftWithFerLogo } from "@/components/brand/SwiftWithFerLogo";
import { SocialBrandIcon } from "@/components/ui/SocialBrandIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-glass-border/60 py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-7 text-center sm:gap-8">
          <Link
            href="/#hero"
            className="brand-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="SwiftWithFer — torna all'inizio"
          >
            <SwiftWithFerLogo variant="footer" />
          </Link>

          <p className="max-w-md text-sm leading-relaxed text-muted sm:max-w-lg sm:text-base">
            {siteConfig.tagline}
          </p>

          <nav aria-label="Social footer">
            <ul className="flex flex-wrap items-center justify-center gap-3">
              {siteConfig.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-glass-border bg-glass/50 px-4 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    aria-label={link.name}
                  >
                    <SocialBrandIcon icon={link.icon} className="h-5 w-5" />
                    <span className="hidden sm:inline">{link.name}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-glass-border bg-glass/50 px-4 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Email
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex w-full flex-col items-center justify-between gap-2 border-t border-glass-border/60 pt-6 text-xs text-muted sm:flex-row sm:text-sm">
            <p>
              © {year} {siteConfig.name}. Tutti i diritti riservati.
            </p>
            <p>
              <Link href="/#contact" className="transition-colors hover:text-foreground">
                Contattami
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
