import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogArticleView } from "@/components/blog/BlogArticleView";
import {
  getAllBlogSlugs,
  getBlogArticleBySlug,
} from "@/config/blog";
import { buildBlogArticleJsonLd } from "@/lib/json-ld";
import { createBlogArticleMetadata } from "@/lib/seo-metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);
  if (!article) return {};
  return createBlogArticleMetadata(article);
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);
  if (!article) notFound();

  const jsonLd = buildBlogArticleJsonLd(article);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content">
        <BlogArticleView article={article} />
      </main>
      <Footer />
    </>
  );
}
