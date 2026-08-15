import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogHubView } from "@/components/blog/BlogHubView";
import { buildBlogHubJsonLd } from "@/lib/json-ld";
import { createBlogHubMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = createBlogHubMetadata();

export default function BlogPage() {
  const jsonLd = buildBlogHubJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content">
        <BlogHubView />
      </main>
      <Footer />
    </>
  );
}
