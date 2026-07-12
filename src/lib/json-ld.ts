import type { AppProject } from "@/config/site";
import { siteConfig } from "@/config/site";
import { getSiteUrl } from "@/lib/site-url";

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
        jobTitle: [
          role,
          "SwiftUI Developer",
          "App Developer",
          "Software Developer",
          "Web Developer",
          "Sviluppatore iOS",
        ],
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
        "@id": `${siteUrl}/#portfolio`,
        name: `Portfolio — ${name}`,
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
          caption: `${name} — ${brand} Portfolio`,
        },
        inLanguage: "it-IT",
        hasPart: apps.map((app: AppProject, index: number) => ({
          "@type": "SoftwareApplication",
          "@id": `${siteUrl}/apps/${app.id}/#app`,
          position: index + 1,
          name: app.name,
          description: app.description,
          applicationCategory: "MobileApplication",
          operatingSystem: "iOS",
          image: `${siteUrl}${app.icon}`,
          author: { "@id": `${siteUrl}/#person` },
        })),
      },
    ],
  };
}

export function buildCaseStudyJsonLd(app: AppProject, slug: string, description: string) {
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
          name: "App",
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
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${pageUrl}/#app`,
      name: app.name,
      description: app.description,
      applicationCategory: "MobileApplication",
      operatingSystem: "iOS",
      image: `${siteUrl}${app.icon}`,
      author: { "@id": `${siteUrl}/#person` },
      offers: app.appStoreUrl
        ? {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EUR",
            url: app.appStoreUrl,
          }
        : undefined,
    },
  ];

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
