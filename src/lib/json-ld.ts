import type { AppProject } from "@/config/site";
import { siteConfig } from "@/config/site";
import { getSiteUrl } from "@/lib/site-url";

function buildAppSchema(app: AppProject, siteUrl: string, position?: number) {
  const base: Record<string, unknown> = {
    "@type":
      app.id === "slotiva"
        ? ["MobileApplication", "WebApplication"]
        : "MobileApplication",
    "@id": `${siteUrl}/apps/${app.id}/#app`,
    name: app.name,
    description: app.description,
    applicationCategory:
      app.id === "slotiva" ? "BusinessApplication" : "MobileApplication",
    operatingSystem: app.id === "slotiva" ? "iOS, Web" : "iOS",
    image: `${siteUrl}${app.icon}`,
    author: { "@id": `${siteUrl}/#person` },
    url: app.appStoreUrl ?? `${siteUrl}/apps/${app.id}`,
  };

  if (typeof position === "number") {
    base.position = position;
  }

  if (app.appStoreRating) {
    base.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: app.appStoreRating.average,
      ratingCount: app.appStoreRating.count,
      bestRating: 5,
      worstRating: 1,
    };
  }

  if (app.appStoreUrl) {
    base.offers = {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      url: app.appStoreUrl,
    };
  }

  return base;
}

export function buildHomeJsonLd() {
  const siteUrl = getSiteUrl();
  const { seo, name, brand, email, role, skills, social, photo, logo, apps } =
    siteConfig;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name,
        givenName: "Fernando",
        familyName: "Piras",
        alternateName: brand,
        jobTitle: [role, "Sviluppatore iOS", "Software Developer"],
        url: siteUrl,
        email: `mailto:${email}`,
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}${photo.bio}`,
          caption: photo.alt,
        },
        sameAs: social.map((item) => item.url),
        knowsAbout: skills,
        worksFor: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: brand,
        legalName: brand,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}${logo.full}`,
          caption: logo.alt,
        },
        email: `mailto:${email}`,
        founder: { "@id": `${siteUrl}/#person` },
        sameAs: social.map((item) => item.url),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: `${name} — ${brand}`,
        alternateName: brand,
        description: seo.description,
        publisher: { "@id": `${siteUrl}/#organization` },
        author: { "@id": `${siteUrl}/#person` },
        inLanguage: "it-IT",
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,
        name: `${name} — Portfolio`,
        alternateName: `${brand} Portfolio`,
        description: seo.description,
        url: siteUrl,
        mainEntity: { "@id": `${siteUrl}/#person` },
        about: { "@id": `${siteUrl}/#person` },
        isPartOf: { "@id": `${siteUrl}/#website` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          caption: `${name} — Sviluppatore iOS & Software`,
        },
        inLanguage: "it-IT",
        hasPart: apps.map((app: AppProject, index: number) =>
          buildAppSchema(app, siteUrl, index + 1),
        ),
      },
    ],
  };
}

export function buildCaseStudyJsonLd(
  app: AppProject,
  slug: string,
  description: string,
) {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/apps/${slug}`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Progetti",
          item: `${siteUrl}/#apps`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: app.name,
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: `${app.name} — Case Study`,
      description,
      isPartOf: { "@id": `${siteUrl}/#website` },
      breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
      inLanguage: "it-IT",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}${app.icon}`,
      },
    },
    {
      ...buildAppSchema(app, siteUrl),
      "@id": `${pageUrl}/#app`,
    },
  ];

  if (app.reviews?.length) {
    graph.push(
      ...app.reviews.map((review, index) => ({
        "@type": "Review",
        "@id": `${pageUrl}/#review-${index + 1}`,
        itemReviewed: { "@id": `${pageUrl}/#app` },
        author: {
          "@type": "Person",
          name: review.author,
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.rating,
          bestRating: 5,
          worstRating: 1,
        },
        name: review.title,
        reviewBody: review.body,
        datePublished: review.date,
      })),
    );
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
