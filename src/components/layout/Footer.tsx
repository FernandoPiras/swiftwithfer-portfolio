import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-glass-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted md:flex-row">
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
