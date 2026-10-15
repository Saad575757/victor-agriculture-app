import { Sprout } from "lucide-react";

import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
  children,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border bg-secondary/40",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-24 size-72 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-1/3 size-64 rounded-full bg-earth/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl space-y-4">
          {eyebrow ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              <Sprout className="size-3.5" aria-hidden="true" />
              {eyebrow}
            </span>
          ) : null}
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="text-base/relaxed text-muted-foreground">{description}</p>
          ) : null}
          {children ? <div className="pt-2">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
