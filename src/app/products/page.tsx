import type { Metadata } from "next";

import { CategoryCard } from "@/components/site/category-card";
import { CtaSection } from "@/components/site/cta-section";
import { PageHeader } from "@/components/site/page-header";
import { ProductCard } from "@/components/site/product-card";
import { getCategoriesWithCounts, getProducts } from "@/lib/content";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Products & Services",
  description:
    "Informational listings of farm equipment, inputs and advisory services from GreenFields Agriculture.",
  openGraph: {
    title: "Products & Services",
    description:
      "Irrigation kits, organic inputs, soil testing and advisory services for working farms.",
  },
};

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategoriesWithCounts(),
  ]);

  const categoryNames = new Map(categories.map((category) => [category.id, category.name]));

  return (
    <>
      <PageHeader
        eyebrow="Farm supplies"
        title="Products & services"
        description="An informational catalogue of the equipment, inputs and advisory services our agronomy team works with. Browse details below and contact us for availability."
      />

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              categoryName={
                product.categoryId ? categoryNames.get(product.categoryId) ?? null : null
              }
            />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold tracking-tight">
            Explore related topics
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.slice(0, 3).map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                articleCount={category.articleCount}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Need advice on choosing the right input?"
        description="Talk to our agronomy team before investing — we will help you match products and services to your soil, crop and budget."
      />
    </>
  );
}
