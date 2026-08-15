import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogArchiveView } from "@/components/blog/BlogArchiveView";
import { getAllBlogTags, getArticlesByTag } from "@/config/blog";
import { getSiteUrl } from "@/lib/site-url";
import { siteConfig } from "@/config/site";
import { buildBlogArchiveJsonLd } from "@/lib/json-ld";

interface PageProps {
  params: Promise<{ tag: string }>;
}

export function generateStaticParams() {
  return getAllBlogTags().map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const articles = getArticlesByTag(decoded);
  if (!articles.length) return {};
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}/blog/tag/${encodeURIComponent(decoded)}`;
  const title = `Tag: ${decoded}`;
  const description = `Articoli con tag ${decoded} — approfondimenti su app, software e prodotto digitale.`;
  return {
    title,
    description,
    robots: { index: false, follow: true },
    alternates: { canonical: url, languages: { "it-IT": url } },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: `${title} | ${siteConfig.name}`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}

export default async function BlogTagPage({ params }: PageProps) {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const articles = getArticlesByTag(decoded);
  if (!articles.length) notFound();
  const jsonLd = buildBlogArchiveJsonLd({
    path: `/blog/tag/${encodeURIComponent(decoded)}`,
    name: `#${decoded}`,
    description: `Approfondimenti filtrati per il tag ${decoded}.`,
    articles,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content">
        <BlogArchiveView
          title={`#${decoded}`}
          description={`Approfondimenti filtrati per il tag ${decoded}.`}
          breadcrumbLabel={`#${decoded}`}
          articles={articles}
        />
      </main>
      <Footer />
    </>
  );
}
