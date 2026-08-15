import type { ServizioFaq } from "@/config/servizi";

export function ServiziFaq({
  items,
  title = "Domande frequenti",
}: {
  items: readonly ServizioFaq[];
  title?: string;
}) {
  return (
    <section aria-labelledby="servizi-faq-heading" className="space-y-6">
      <h2 id="servizi-faq-heading" className="text-section-title text-foreground">
        {title}
      </h2>
      <div className="space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-glass-border/80 bg-glass/60 px-5 py-4 open:bg-glass/80"
          >
            <summary className="cursor-pointer list-none text-base font-medium text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                {item.question}
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-muted transition group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted text-pretty">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
