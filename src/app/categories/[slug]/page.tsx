import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Newspaper } from "lucide-react";

import { ArticleCard } from "@/components/site/article-card";
import { getCategoryIcon } from "@/components/site/category-icon";
import { CtaSection } from "@/components/site/cta-section";
import { EmptyState } from "@/components/site/empty-state";
import { PageHeader } from "@/components/site/page-header";
import { getArticles, getCategories, getCategoryBySlug } from "@/lib/content";

export const revalidate = 3600;

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    return { title: "Category not found" };
  }

  return {
    title: category.name,
    description: category.description,
    openGraph: {
      title: category.name,
      description: category.description,
      images: [{ url: category.image, width: 1200, height: 630 }],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const articles = await getArticles({ categoryId: category.id });
  const Icon = getCategoryIcon(category.icon);

  return (
    <>
      <PageHeader eyebrow="Category" title={category.name} description={category.description}>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-3 py-1 font-medium text-primary">
            <Icon className="size-4" aria-hidden="true" />
            {category.name}
          </span>
          <span>
            {articles.length} {articles.length === 1 ? "article" : "articles"}
          </span>
          <Link
            href="/categories"
            className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All categories
          </Link>
        </div>
      </PageHeader>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {articles.length === 0 ? (
          <EmptyState
            icon={<Newspaper className="size-6" aria-hidden="true" />}
            title="No articles in this category yet"
            description="We are preparing new guidance for this topic. Explore other categories in the meantime."
            action={
              <Link
                href="/categories"
                className="text-sm font-medium text-primary hover:underline"
              >
                Browse all categories
              </Link>
            }
          />
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} categoryName={category.name} />
            ))}
          </div>
        )}
      </section>

      <CtaSection />
    </>
  );
}
