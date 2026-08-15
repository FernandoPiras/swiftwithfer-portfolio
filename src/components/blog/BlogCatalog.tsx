"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  blogArticles,
  blogCategories,
  formatBlogDate,
  type BlogArticle,
  type BlogCategoryId,
} from "@/config/blog";

const PAGE_SIZE = 6;

function ArticleCard({ article }: { article: BlogArticle }) {
  const category = blogCategories.find((item) => item.id === article.category);
  return (
    <GlassCard as="article" className="flex h-full flex-col p-6 sm:p-7">
      <p className="text-eyebrow text-accent">{category?.label}</p>
      <h3 className="mt-3 text-lg font-medium text-foreground text-balance">
        <Link
          href={`/blog/${article.slug}`}
          className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {article.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted text-pretty">
        {article.excerpt}
      </p>
      <p className="mt-4 text-xs text-muted">
        {formatBlogDate(article.updatedAt)} · {article.readingMinutes} min
      </p>
      <Link
        href={`/blog/${article.slug}`}
        className="mt-4 inline-flex text-sm font-medium text-accent hover:underline"
      >
        Leggi
      </Link>
    </GlassCard>
  );
}

export function BlogCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<BlogCategoryId | "all">("all");
  const [tag, setTag] = useState<string>("all");
  const [page, setPage] = useState(1);

  const allTags = useMemo(
    () =>
      [...new Set(blogArticles.flatMap((article) => [...article.tags]))].sort(
        (a, b) => a.localeCompare(b, "it"),
      ),
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogArticles.filter((article) => {
      if (category !== "all" && article.category !== category) return false;
      if (tag !== "all" && !article.tags.includes(tag)) return false;
      if (!q) return true;
      const haystack = [
        article.title,
        article.excerpt,
        article.keywords.join(" "),
        article.tags.join(" "),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [category, query, tag]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  return (
    <div className="space-y-8">
      <div className="grid gap-3 md:grid-cols-[1fr_auto_auto]">
        <label className="block">
          <span className="sr-only">Cerca articoli</span>
          <input
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setPage(1);
            }}
            placeholder="Cerca negli approfondimenti…"
            className="min-h-11 w-full rounded-full border border-glass-border/80 bg-glass/60 px-4 text-sm text-foreground outline-none ring-offset-background placeholder:text-muted focus-visible:ring-2 focus-visible:ring-accent"
          />
        </label>
        <label className="block">
          <span className="sr-only">Categoria</span>
          <select
            value={category}
            onChange={(event) => {
              setCategory(event.target.value as BlogCategoryId | "all");
              setPage(1);
            }}
            className="min-h-11 w-full rounded-full border border-glass-border/80 bg-glass/60 px-4 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-accent md:min-w-44"
          >
            <option value="all">Tutte le categorie</option>
            {blogCategories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="sr-only">Tag</span>
          <select
            value={tag}
            onChange={(event) => {
              setTag(event.target.value);
              setPage(1);
            }}
            className="min-h-11 w-full rounded-full border border-glass-border/80 bg-glass/60 px-4 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-accent md:min-w-40"
          >
            <option value="all">Tutti i tag</option>
            {allTags.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="text-sm text-muted" aria-live="polite">
        {filtered.length}{" "}
        {filtered.length === 1 ? "articolo" : "articoli"}
      </p>

      {pageItems.length ? (
        <ul className="grid gap-4 md:grid-cols-2">
          {pageItems.map((article) => (
            <li key={article.slug}>
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      ) : (
        <GlassCard className="p-8">
          <p className="text-sm text-muted">
            Nessun articolo corrisponde ai filtri. Prova a resettare ricerca o
            categoria.
          </p>
        </GlassCard>
      )}

      {totalPages > 1 ? (
        <nav
          aria-label="Paginazione articoli"
          className="flex flex-wrap items-center justify-center gap-2"
        >
          <button
            type="button"
            disabled={currentPage <= 1}
            onClick={() => setPage((value) => Math.max(1, value - 1))}
            className="min-h-11 rounded-full border border-glass-border/80 px-4 text-sm text-foreground disabled:opacity-40"
          >
            Precedente
          </button>
          <span className="px-2 text-sm text-muted">
            {currentPage} / {totalPages}
          </span>
          <button
            type="button"
            disabled={currentPage >= totalPages}
            onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
            className="min-h-11 rounded-full border border-glass-border/80 px-4 text-sm text-foreground disabled:opacity-40"
          >
            Successiva
          </button>
        </nav>
      ) : null}
    </div>
  );
}
