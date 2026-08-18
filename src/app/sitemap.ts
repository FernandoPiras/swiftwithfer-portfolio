import type { MetadataRoute } from "next";
import { blogArticles, blogCategories } from "@/config/blog";
import { getAllCaseStudySlugs } from "@/config/case-studies";
import { getAllServizioSlugs } from "@/config/servizi";
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
    {
      url: `${siteUrl}/servizi`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...getAllServizioSlugs().map((slug) => ({
      url: `${siteUrl}/servizi/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...blogArticles.map((article) => ({
      url: `${siteUrl}/blog/${article.slug}`,
      lastModified: new Date(article.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...blogCategories.map((category) => ({
      url: `${siteUrl}/blog/categoria/${category.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    // Tag archives are noindex (thin listing pages); keep crawl budget on articles.
    ...getAllCaseStudySlugs().map((slug) => ({
      url: `${siteUrl}/apps/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${siteUrl}/cielostorie/privacy`,
      lastModified: new Date("2026-08-18"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${siteUrl}/cielostorie/privacy/en`,
      lastModified: new Date("2026-08-18"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
