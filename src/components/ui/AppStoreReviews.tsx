import type { AppProject } from "@/config/site";
import { cn } from "@/lib/utils";

interface AppStoreReviewsProps {
  app: AppProject;
  className?: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="inline-flex gap-0.5"
      role="img"
      aria-label={`${rating} stelle su 5`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className={cn(
            "h-4 w-4",
            index < rating ? "text-amber-400" : "text-muted/25",
          )}
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      ))}
    </div>
  );
}

function formatReviewDate(date: string) {
  return new Intl.DateTimeFormat("it-IT", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

export function AppStoreReviews({ app, className }: AppStoreReviewsProps) {
  if (!app.reviews?.length) return null;

  const { appStoreRating } = app;

  return (
    <section
      className={cn("mt-8 border-t border-glass-border pt-6 sm:mt-10 sm:pt-8", className)}
      aria-label={`Recensioni App Store di ${app.name}`}
    >
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            Recensioni App Store
          </p>
          {appStoreRating ? (
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
              <StarRating rating={Math.round(appStoreRating.average)} />
              <p className="text-sm text-muted">
                <span className="font-semibold text-foreground">
                  {appStoreRating.average.toFixed(1)}
                </span>{" "}
                · {appStoreRating.count} valutazioni
              </p>
            </div>
          ) : null}
        </div>
        {app.appStoreUrl ? (
          <a
            href={app.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
          >
            Vedi su App Store →
          </a>
        ) : null}
      </div>

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {app.reviews.map((review) => (
          <li
            key={`${review.author}-${review.date}`}
            className="rounded-2xl border border-glass-border bg-background/40 p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <StarRating rating={review.rating} />
              <time
                dateTime={review.date}
                className="shrink-0 text-xs text-muted"
              >
                {formatReviewDate(review.date)}
              </time>
            </div>
            <h4 className="mt-3 text-sm font-semibold text-foreground">{review.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">{review.body}</p>
            <p className="mt-3 text-xs font-medium text-foreground/80">— {review.author}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
