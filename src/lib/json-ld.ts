import type { BlogArticle } from "@/config/blog";
import { blogArticles, blogHub } from "@/config/blog";
import type { ServizioPage } from "@/config/servizi";
import { serviziHub, servizioPages } from "@/config/servizi";
import type { AppProject } from "@/config/site";
import { siteConfig } from "@/config/site";
import { getSiteUrl } from "@/lib/site-url";

function buildAppSchema(app: AppProject, siteUrl: string, position?: number) {
  const base: Record<string, unknown> = {
    "@type": "MobileApplication",
    "@id": `${siteUrl}/apps/${app.id}/#app`,
    name: app.name,
    description: app.description,
    applicationCategory: "MobileApplication",
    operatingSystem: "iOS",
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

  const sameAs = [app.appStoreUrl, app.websiteUrl, app.businessUrl].filter(
    (url): url is string => Boolean(url),
  );
  if (sameAs.length) {
    base.sameAs = sameAs;
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

export function buildServiziHubJsonLd() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/servizi`;

  return {
    "@context": "https://schema.org",
    "@graph": [
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
            name: "Servizi",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: serviziHub.metaTitle,
        description: serviziHub.metaDescription,
        isPartOf: { "@id": `${siteUrl}/#website` },
        breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
        inLanguage: "it-IT",
        about: { "@id": `${siteUrl}/#person` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: servizioPages.map((page, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: page.title,
            url: `${siteUrl}/servizi/${page.slug}`,
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: serviziHub.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

export function buildServizioJsonLd(page: ServizioPage) {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/servizi/${page.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
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
            name: "Servizi",
            item: `${siteUrl}/servizi`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: page.metaTitle,
        description: page.metaDescription,
        isPartOf: { "@id": `${siteUrl}/#website` },
        breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
        inLanguage: "it-IT",
        about: { "@id": `${pageUrl}/#service` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
        },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        name: page.serviceName,
        description: page.metaDescription,
        provider: { "@id": `${siteUrl}/#person` },
        areaServed: page.areaServed,
        url: pageUrl,
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: page.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

export function buildBlogHubJsonLd() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/blog`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Approfondimenti", item: pageUrl },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: blogHub.metaTitle,
        description: blogHub.metaDescription,
        isPartOf: { "@id": `${siteUrl}/#website` },
        breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
        inLanguage: "it-IT",
        mainEntity: {
          "@type": "ItemList",
          itemListElement: blogArticles.map((article, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: article.title,
            url: `${siteUrl}/blog/${article.slug}`,
          })),
        },
      },
    ],
  };
}

export function buildBlogArticleJsonLd(article: BlogArticle) {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/blog/${article.slug}`;
  const { name, brand, email, role, social, photo, logo } = siteConfig;
  const coverApp = siteConfig.apps.find((app) => app.id === article.proofApps[0]);
  const imageUrl = coverApp
    ? `${siteUrl}${coverApp.screenshots[0]}`
    : `${siteUrl}/og-image.png`;

  const person = {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name,
    jobTitle: role,
    url: siteUrl,
    email: `mailto:${email}`,
    image: `${siteUrl}${photo.bio}`,
    sameAs: social.map((item) => item.url),
  };

  const organization = {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: brand,
    url: siteUrl,
    logo: `${siteUrl}${logo.full}`,
    founder: { "@id": `${siteUrl}/#person` },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: `${name} — ${brand}`,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "it-IT",
  };

  const graph: Record<string, unknown>[] = [
    person,
    organization,
    website,
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: "Approfondimenti",
          item: `${siteUrl}/blog`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: article.title,
          item: pageUrl,
        },
      ],
    },
    {
      "@type": ["Article", "BlogPosting"],
      "@id": `${pageUrl}/#article`,
      headline: article.title,
      description: article.metaDescription,
      datePublished: `${article.publishedAt}T08:00:00+02:00`,
      dateModified: `${article.updatedAt}T08:00:00+02:00`,
      inLanguage: "it-IT",
      author: { "@id": `${siteUrl}/#person` },
      publisher: { "@id": `${siteUrl}/#organization` },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
      },
      isPartOf: { "@id": `${siteUrl}/#website` },
      keywords: article.keywords.join(", "),
      articleSection: article.category,
      timeRequired: `PT${article.readingMinutes}M`,
      image: [imageUrl],
      wordCount: article.sections.reduce(
        (sum, section) =>
          sum +
          section.paragraphs.join(" ").split(/\s+/).filter(Boolean).length +
          (section.bullets?.join(" ").split(/\s+/).filter(Boolean).length ?? 0),
        0,
      ),
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: article.metaTitle,
      description: article.metaDescription,
      isPartOf: { "@id": `${siteUrl}/#website` },
      breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: imageUrl,
      },
      inLanguage: "it-IT",
    },
  ];

  if (article.faq.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}/#faq`,
      mainEntity: article.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
