import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";

import { ArticleCard } from "@/components/site/article-card";
import { CtaSection } from "@/components/site/cta-section";
import { EmptyState } from "@/components/site/empty-state";
import { Prose } from "@/components/site/prose";
import { Badge } from "@/components/ui/badge";
import {
  getAdjacentArticles,
  getArticleBySlug,
  getArticles,
  getCategories,
  getRelatedArticles,
} from "@/lib/content";
import { formatDate, readingTime } from "@/lib/format";
import { siteConfig } from "@/lib/site-config";

export const revalidate = 3600;

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return { title: "Article not found" };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.publishedAt ?? undefined,
      authors: [article.authorName],
      images: [{ url: article.featuredImage, width: 1600, height: 900 }],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const [categories, related, adjacent] = await Promise.all([
    getCategories(),
    getRelatedArticles(article, 3),
    getAdjacentArticles(article),
  ]);

  const category = categories.find((item) => item.id === article.categoryId);
  const relatedCategoryNames = new Map(
    categories.map((item) => [item.id, item.name]),
  );

  return (
    <>
      <article className="mx-auto w-full max-w-3xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link
            href="/articles"
            className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All articles
          </Link>
          {category ? (
            <>
              <span aria-hidden="true">·</span>
              <Link
                href={`/categories/${category.slug}`}
                className="font-medium text-primary hover:underline"
              >
                {category.name}
              </Link>
            </>
          ) : null}
        </div>

        <h1 className="mt-6 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {article.title}
        </h1>

        <p className="mt-4 text-base/relaxed text-muted-foreground sm:text-lg/relaxed">
          {article.excerpt}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-border py-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <User className="size-4 text-primary" aria-hidden="true" />
            {article.authorName}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="size-4 text-primary" aria-hidden="true" />
            <time dateTime={article.publishedAt ?? undefined}>
              {formatDate(article.publishedAt)}
            </time>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-4 text-primary" aria-hidden="true" />
            {readingTime(article.content)}
          </span>
          {category ? <Badge variant="secondary">{category.name}</Badge> : null}
        </div>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-muted ring-1 ring-foreground/10">
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>

        <Prose content={article.content} className="mt-10" />

        <footer className="mt-10 rounded-xl bg-secondary/40 p-5 text-sm text-muted-foreground">
          Written by{" "}
          <span className="font-medium text-foreground">{article.authorName}</span> for{" "}
          {siteConfig.name}. Last updated {formatDate(article.updatedAt)}.
        </footer>
      </article>

      {(adjacent.older || adjacent.newer) && (
        <nav
          className="mx-auto mt-12 grid w-full max-w-3xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:px-8"
          aria-label="More articles"
        >
          {adjacent.older ? (
            <Link
              href={`/articles/${adjacent.older.slug}`}
              className="group rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
            >
              <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                <ArrowLeft className="size-3.5" aria-hidden="true" />
                Previous article
              </span>
              <p className="mt-2 text-sm font-medium leading-snug">
                {adjacent.older.title}
              </p>
            </Link>
          ) : (
            <span />
          )}
          {adjacent.newer ? (
            <Link
              href={`/articles/${adjacent.newer.slug}`}
              className="group rounded-xl border border-border bg-card p-4 text-right transition-colors hover:border-primary/40"
            >
              <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                Next article
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </span>
              <p className="mt-2 text-sm font-medium leading-snug">
                {adjacent.newer.title}
              </p>
            </Link>
          ) : null}
        </nav>
      )}

      <section className="mx-auto mt-16 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-heading text-2xl font-semibold">Continue reading</h2>
          <Link
            href="/articles"
            className="text-sm font-medium text-primary hover:underline"
          >
            View all articles
          </Link>
        </div>
        {related.length === 0 ? (
          <EmptyState
            className="mt-6"
            title="No related articles"
            description="This is currently our only published article in this topic."
          />
        ) : (
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <ArticleCard
                key={item.id}
                article={item}
                categoryName={
                  item.categoryId ? relatedCategoryNames.get(item.categoryId) ?? null : null
                }
              />
            ))}
          </div>
        )}
      </section>

      <CtaSection
        title="Have a question about this topic?"
        description="Our agronomy team can help you apply this guidance to your specific crops and conditions."
      />
    </>
  );
}
