import type { Metadata } from "next";

import { CategoryCard } from "@/components/site/category-card";
import { CtaSection } from "@/components/site/cta-section";
import { PageHeader } from "@/components/site/page-header";
import { getCategoriesWithCounts } from "@/lib/content";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Browse agricultural topics: crop farming, organic agriculture, soil health, irrigation, livestock and sustainable farming.",
  openGraph: {
    title: "Agricultural Categories",
    description:
      "Browse agricultural topics organised for farmers and agronomists.",
  },
};

export default async function CategoriesPage() {
  const categories = await getCategoriesWithCounts();

  return (
    <>
      <PageHeader
        eyebrow="Browse by topic"
        title="Agricultural categories"
        description="Every article and resource on GreenFields Agriculture is organised into six practical farming categories."
      />

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              articleCount={category.articleCount}
            />
          ))}
        </div>
      </section>

      <CtaSection
        title="Not sure where to start?"
        description="Browse the latest articles or contact our team — we will point you to the right resources for your farm."
      />
    </>
  );
}
