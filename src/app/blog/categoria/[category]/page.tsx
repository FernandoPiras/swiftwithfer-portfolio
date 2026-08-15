import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogArchiveView } from "@/components/blog/BlogArchiveView";
import {
  blogCategories,
  getArticlesByCategory,
  getBlogCategory,
  type BlogCategoryId,
} from "@/config/blog";
import { getSiteUrl } from "@/lib/site-url";
import { siteConfig } from "@/config/site";
import { buildBlogArchiveJsonLd } from "@/lib/json-ld";

interface PageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return blogCategories.map((category) => ({ category: category.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categoryId } = await params;
  const category = getBlogCategory(categoryId as BlogCategoryId);
  if (!category) return {};
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}/blog/categoria/${category.id}`;
  const title = `${category.label} — Approfondimenti`;
  const description = category.description;
  return {
    title,
    description,
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

export default async function BlogCategoryPage({ params }: PageProps) {
  const { category: categoryId } = await params;
  const category = getBlogCategory(categoryId as BlogCategoryId);
  if (!category) notFound();
  const articles = getArticlesByCategory(category.id);
  const jsonLd = buildBlogArchiveJsonLd({
    path: `/blog/categoria/${category.id}`,
    name: category.label,
    description: category.description,
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
          title={category.label}
          description={category.description}
          breadcrumbLabel={category.label}
          articles={articles}
          category={category}
        />
      </main>
      <Footer />
    </>
  );
}
