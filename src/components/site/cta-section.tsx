import Link from "next/link";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

interface CtaSectionProps {
  title?: string;
  description?: string;
}

export function CtaSection({
  title = "Ready to grow with better information?",
  description = "Explore our agricultural library or talk to our agronomy team about the challenges on your farm.",
}: CtaSectionProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="relative overflow-hidden rounded-2xl bg-forest px-6 py-12 text-forest-foreground sm:px-10 lg:px-14 lg:py-16">
        <div
          className="pointer-events-none absolute -right-10 -top-16 size-64 rounded-full bg-primary/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-20 left-1/4 size-56 rounded-full bg-earth/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-balance sm:text-3xl lg:text-4xl">
              {title}
            </h2>
            <p className="text-sm/relaxed text-forest-foreground/80 sm:text-base/relaxed">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              className="h-11 bg-primary-foreground px-6 text-forest hover:bg-primary-foreground/90"
              render={<Link href="/contact">Contact our team</Link>}
            />
            <Button
              variant="outline"
              className="h-11 border-forest-foreground/30 bg-transparent px-6 text-forest-foreground hover:bg-forest-foreground/10"
              render={<Link href="/articles">Browse articles</Link>}
            />
            <span className="inline-flex items-center gap-2 text-sm text-forest-foreground/80">
              <Phone className="size-4" aria-hidden="true" />
              {siteConfig.contact.phone}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
