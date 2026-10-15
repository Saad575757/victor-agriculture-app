import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Mail, Phone, ShieldCheck } from "lucide-react";

import { getCategoryIcon } from "@/components/site/category-icon";
import { CtaSection } from "@/components/site/cta-section";
import { Prose } from "@/components/site/prose";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  getCategories,
  getProductBySlug,
  getProducts,
} from "@/lib/content";
import { formatDate } from "@/lib/format";
import { siteConfig } from "@/lib/site-config";

export const revalidate = 3600;

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return { title: "Product not found" };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [{ url: product.imageUrl, width: 1200, height: 900 }],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const [allProducts, categories] = await Promise.all([getProducts(), getCategories()]);
  const category = categories.find((item) => item.id === product.categoryId) ?? null;
  const relatedProducts = allProducts
    .filter((item) => item.id !== product.id)
    .slice(0, 3);

  const Icon = category ? getCategoryIcon(category.icon) : null;

  return (
    <>
      <article className="mx-auto w-full max-w-6xl px-4 pt-10 sm:px-6 lg:px-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          All products
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              {category ? (
                <Link href={`/categories/${category.slug}`}>
                  <Badge variant="secondary" className="gap-1.5">
                    {Icon ? <Icon className="size-3.5" aria-hidden="true" /> : null}
                    {category.name}
                  </Badge>
                </Link>
              ) : null}
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <ShieldCheck className="size-3.5 text-primary" aria-hidden="true" />
                Listed for information — contact us for availability
              </span>
            </div>

            <h1 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {product.name}
            </h1>

            <p className="text-base/relaxed text-muted-foreground sm:text-lg/relaxed">
              {product.shortDescription}
            </p>

            <Prose content={product.description} />

            <div className="flex flex-wrap items-center gap-3 rounded-xl border border-border bg-card p-4">
              <Button
                className="h-11 px-5"
                render={
                  <Link href="/contact">
                    <Mail className="size-4" aria-hidden="true" />
                    Enquire about this product
                  </Link>
                }
              />
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`}
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-border px-5 text-sm font-medium transition-colors hover:bg-muted"
              >
                <Phone className="size-4 text-primary" aria-hidden="true" />
                {siteConfig.contact.phone}
              </a>
            </div>

            <p className="text-xs text-muted-foreground">
              Last updated {formatDate(product.updatedAt)}
            </p>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted ring-1 ring-foreground/10">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-6 space-y-4 rounded-2xl bg-secondary/40 p-5">
              <h2 className="font-heading text-base font-semibold">
                More from our catalogue
              </h2>
              <ul className="space-y-3 text-sm">
                {relatedProducts.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/products/${item.slug}`}
                      className="group inline-flex items-start gap-2 text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ArrowRight
                        className="mt-0.5 size-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span className="group-hover:underline">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>

      <CtaSection
        title="Looking for something specific?"
        description="If you cannot find the product or service you need, contact our team and we will help you source it."
      />
    </>
  );
}
