import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { formatShortDate, readingTime } from "@/lib/format";
import type { Article } from "@/lib/content";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  article: Article;
  categoryName?: string | null;
  className?: string;
}

export function ArticleCard({ article, categoryName, className }: ArticleCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 transition-shadow hover:shadow-md",
        className,
      )}
    >
      <Link
        href={`/articles/${article.slug}`}
        className="relative block aspect-[16/10] overflow-hidden bg-muted"
      >
        <Image
          src={article.featuredImage}
          alt={article.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {categoryName ? (
          <Badge className="absolute left-3 top-3 bg-background/90 text-foreground backdrop-blur">
            {categoryName}
          </Badge>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="size-3.5" aria-hidden="true" />
            {formatShortDate(article.publishedAt)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" aria-hidden="true" />
            {readingTime(article.content)}
          </span>
        </div>

        <h3 className="font-heading text-lg leading-snug font-semibold text-balance">
          <Link href={`/articles/${article.slug}`} className="hover:text-primary">
            {article.title}
          </Link>
        </h3>

        <p className="line-clamp-3 text-sm/relaxed text-muted-foreground">
          {article.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <User className="size-3.5" aria-hidden="true" />
            {article.authorName}
          </span>
          <Link
            href={`/articles/${article.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            Read article
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
