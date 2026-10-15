import type { Metadata } from "next";
import Link from "next/link";
import { Newspaper } from "lucide-react";

import { ArticleCard } from "@/components/site/article-card";
import { EmptyState } from "@/components/site/empty-state";
import { PageHeader } from "@/components/site/page-header";
import { Button } from "@/components/ui/button";
import { getArticles, getCategories } from "@/lib/content";
import { cn } from "@/lib/utils";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Field-tested agricultural articles on sustainable farming, soil health, irrigation, organic production and livestock management.",
  openGraph: {
    title: "Agricultural Articles",
    description:
      "Practical, research-backed guidance for crop production, soil health and sustainable farming.",
  },
};

interface ArticlesPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const params = await searchParams;
  const categories = await getCategories();
  const activeCategory = categories.find(
    (category) => category.slug === params.category,
  );

  const articles = await getArticles({ categoryId: activeCategory?.id ?? null });

  const categoryNames = new Map(categories.map((category) => [category.id, category.name]));

  return (
    <>
      <PageHeader
        eyebrow="Knowledge library"
        title="Agricultural articles"
        description="Practical, research-backed guidance for farmers, agronomists and food producers — written to be used in the field."
      />

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant={activeCategory ? "outline" : "default"}
            className="rounded-full"
            render={<Link href="/articles">All topics</Link>}
          />
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory?.id === category.id ? "default" : "outline"}
              className="rounded-full"
              render={
                <Link href={`/articles?category=${category.slug}`}>
                  {category.name}
                </Link>
              }
            />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {articles.length} {articles.length === 1 ? "article" : "articles"}
            {activeCategory ? (
              <>
                {" "}
                in{" "}
                <span className="font-medium text-foreground">{activeCategory.name}</span>
              </>
            ) : null}
          </p>
          {activeCategory ? (
            <Link
              href="/articles"
              className="text-sm font-medium text-primary hover:underline"
            >
              Clear filter
            </Link>
          ) : null}
        </div>

        {articles.length === 0 ? (
          <EmptyState
            className="mt-8"
            icon={<Newspaper className="size-6" aria-hidden="true" />}
            title="No articles published yet"
            description="There are no published articles in this topic. Try another category or check back soon."
            action={
              <Button
                variant="outline"
                render={<Link href="/articles">View all articles</Link>}
              />
            }
          />
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                categoryName={
                  article.categoryId ? categoryNames.get(article.categoryId) ?? null : null
                }
                className={cn("h-full")}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
