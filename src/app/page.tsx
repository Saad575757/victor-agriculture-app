import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CloudRain,
  Droplets,
  FlaskConical,
  Leaf,
  Newspaper,
  Sprout,
  TrendingUp,
  Users,
} from "lucide-react";

import { ArticleCard } from "@/components/site/article-card";
import { CategoryCard } from "@/components/site/category-card";
import { CtaSection } from "@/components/site/cta-section";
import { ProductCard } from "@/components/site/product-card";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import {
  getCategoriesWithCounts,
  getCategoryName,
  getFeaturedArticles,
  getFeaturedProducts,
  getStats,
} from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const revalidate = 3600;

const heroStats = [
  { icon: Users, value: "1,200+", label: "Farmers trained" },
  { icon: TrendingUp, value: "5,000 ha", label: "Land supported" },
  { icon: Newspaper, value: "40+", label: "Field guides" },
  { icon: Award, value: "20 yrs", label: "Agronomy experience" },
];

const resources = [
  {
    icon: FlaskConical,
    title: "Soil testing & interpretation",
    description:
      "Understand nutrient status, organic matter and structure before investing in inputs.",
  },
  {
    icon: Droplets,
    title: "Water management planning",
    description:
      "Design irrigation schedules around crop demand, soil type and real moisture data.",
  },
  {
    icon: Leaf,
    title: "Organic certification support",
    description:
      "Step-by-step guidance through conversion periods, input records and inspection.",
  },
  {
    icon: CloudRain,
    title: "Seasonal risk planning",
    description:
      "Build drought and excess-rainfall contingencies into every crop calendar.",
  },
];

export default async function HomePage() {
  const [categories, articles, products, stats] = await Promise.all([
    getCategoriesWithCounts(),
    getFeaturedArticles(3),
    getFeaturedProducts(3),
    getStats(),
  ]);

  const articleCategoryNames = await Promise.all(
    articles.map((article) => getCategoryName(article.categoryId)),
  );
  const productCategoryNames = await Promise.all(
    products.map((product) => getCategoryName(product.categoryId)),
  );

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=2000&q=80"
          alt="Rows of crops growing on a sustainable farm"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-forest/95 via-forest/85 to-forest/60"
          aria-hidden="true"
        />

        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-2xl space-y-6 text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur">
              <Leaf className="size-3.5" aria-hidden="true" />
              Sustainable agriculture
            </span>
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Practical agriculture knowledge for healthier soil and stronger harvests
            </h1>
            <p className="max-w-xl text-base/relaxed text-primary-foreground/85 sm:text-lg/relaxed">
              {siteConfig.name} brings together field-tested guidance on crop production,
              soil health, irrigation and livestock so every season starts from a better
              plan.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                className="h-12 bg-primary-foreground px-6 text-base text-forest hover:bg-primary-foreground/90"
                render={
                  <Link href="/categories">
                    <Sprout className="size-5" aria-hidden="true" />
                    Explore Agriculture
                  </Link>
                }
              />
              <Button
                variant="outline"
                className="h-12 border-primary-foreground/40 bg-transparent px-6 text-base text-primary-foreground hover:bg-primary-foreground/10"
                render={<Link href="/articles">Read Articles</Link>}
              />
            </div>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-primary-foreground/20 pt-8 text-primary-foreground lg:grid-cols-4">
            {heroStats.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/10">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="font-heading text-xl font-semibold">{item.value}</dt>
                  <dd className="text-xs text-primary-foreground/75">{item.label}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Explore by topic"
          title="Agricultural categories"
          description="Browse our library by the areas that matter most on your farm, from soil biology to water management."
          action={
            <Button
              variant="outline"
              className="h-10"
              render={
                <Link href="/categories">
                  All categories
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              }
            />
          }
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              articleCount={category.articleCount}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Latest from the field"
            title="Featured articles"
            description="In-depth articles written by agronomists and experienced growers, updated through the season."
            action={
              <Button
                variant="outline"
                className="h-10"
                render={
                  <Link href="/articles">
                    All articles
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                }
              />
            }
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <ArticleCard
                key={article.id}
                article={article}
                categoryName={articleCategoryNames[index]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Agricultural information"
              title="Resources that turn data into decisions"
              description="Our agricultural information service combines laboratory analysis with practical field advice, so recommendations arrive ready to implement."
            />
            <ul className="grid gap-5 sm:grid-cols-2">
              {resources.map((resource) => (
                <li key={resource.title} className="flex flex-col gap-2">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                    <resource.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading text-base font-semibold">
                    {resource.title}
                  </h3>
                  <p className="text-sm/relaxed text-muted-foreground">
                    {resource.description}
                  </p>
                </li>
              ))}
            </ul>
            <Button
              variant="outline"
              className="h-10"
              render={
                <Link href="/about">
                  How we work
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              }
            />
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted ring-1 ring-foreground/10 sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1200&q=80"
                alt="Farmer inspecting soil health in the field"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-xl bg-card p-5 shadow-lg ring-1 ring-foreground/10 sm:left-10 sm:right-auto sm:w-72">
              <p className="font-heading text-3xl font-semibold text-primary">
                {stats.articleCount} field guides
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Published across {stats.categoryCount} agricultural categories, with new
                guidance added each season.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Products & services"
            title="Farm supplies and advisory services"
            description="Informational listings of the equipment, inputs and advisory services our agronomy team works with."
            action={
              <Button
                variant="outline"
                className="h-10"
                render={
                  <Link href="/products">
                    All products
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                }
              />
            }
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                categoryName={productCategoryNames[index]}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
