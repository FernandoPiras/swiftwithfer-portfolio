import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-glass-border/60 py-8 pb-[max(2rem,env(safe-area-inset-bottom))] sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-center text-xs text-muted sm:px-6 sm:text-sm md:flex-row md:text-left">
        <p>
          © {year} {siteConfig.name}. Tutti i diritti riservati.
        </p>
        <p className="text-center md:text-right">
          Costruito con Next.js, TypeScript e Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
