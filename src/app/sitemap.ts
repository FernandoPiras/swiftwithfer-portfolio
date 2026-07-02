import type { MetadataRoute } from "next";
import { getAllCaseStudySlugs } from "@/config/case-studies";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...getAllCaseStudySlugs().map((slug) => ({
      url: `${siteUrl}/apps/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
