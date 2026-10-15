import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";

import { getCategoryIcon } from "@/components/site/category-icon";
import type { Category } from "@/lib/content";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  category: Category;
  articleCount?: number;
  className?: string;
}

export function CategoryCard({
  category,
  articleCount,
  className,
}: CategoryCardProps) {
  const Icon = getCategoryIcon(category.icon);

  return (
    <Link
      href={`/categories/${category.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 transition-all hover:ring-primary/40 hover:shadow-md",
        className,
      )}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 flex size-10 items-center justify-center rounded-xl bg-background/90 text-primary shadow-sm backdrop-blur">
          <Icon className="size-5" aria-hidden="true" />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-heading text-lg font-semibold">{category.name}</h3>
        <p className="line-clamp-3 text-sm/relaxed text-muted-foreground">
          {category.description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-3 text-sm">
          {typeof articleCount === "number" ? (
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Newspaper className="size-3.5" aria-hidden="true" />
              {articleCount} {articleCount === 1 ? "article" : "articles"}
            </span>
          ) : (
            <span />
          )}
          <span className="inline-flex items-center gap-1 font-medium text-primary">
            Explore
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
