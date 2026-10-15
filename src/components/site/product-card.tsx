import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/content";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  categoryName?: string | null;
  className?: string;
}

export function ProductCard({ product, categoryName, className }: ProductCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 transition-shadow hover:shadow-md",
        className,
      )}
    >
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-muted"
      >
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {categoryName ? (
          <Badge className="absolute left-3 top-3 bg-background/90 text-foreground backdrop-blur">
            {categoryName}
          </Badge>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-heading text-base leading-snug font-semibold">
          <Link href={`/products/${product.slug}`} className="hover:text-primary">
            {product.name}
          </Link>
        </h3>
        <p className="line-clamp-3 text-sm/relaxed text-muted-foreground">
          {product.shortDescription}
        </p>
        <Link
          href={`/products/${product.slug}`}
          className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-medium text-primary hover:underline"
        >
          View details
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
