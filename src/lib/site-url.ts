/** Canonical production domain — never expose *.vercel.app in metadata. */
export const CANONICAL_SITE_URL = "https://fernandopiras.com";

export function getSiteUrl(): string {
  if (process.env.VERCEL_ENV === "production") {
    return CANONICAL_SITE_URL;
  }

  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}
