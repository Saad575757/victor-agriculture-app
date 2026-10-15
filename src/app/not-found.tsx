import Link from "next/link";
import { Compass, Home, Newspaper, Sprout } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <span className="flex size-16 items-center justify-center rounded-2xl bg-secondary text-primary">
        <Compass className="size-8" aria-hidden="true" />
      </span>
      <p className="mt-6 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        Error 404
      </p>
      <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        This field has not been planted yet
      </h1>
      <p className="mt-4 max-w-xl text-sm/relaxed text-muted-foreground sm:text-base/relaxed">
        The page you are looking for does not exist or may have been unpublished. Explore
        our agricultural library instead.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button
          className="h-11 px-5"
          render={
            <Link href="/">
              <Home className="size-4" aria-hidden="true" />
              Back to homepage
            </Link>
          }
        />
        <Button
          variant="outline"
          className="h-11 px-5"
          render={
            <Link href="/articles">
              <Newspaper className="size-4" aria-hidden="true" />
              Browse articles
            </Link>
          }
        />
        <Button
          variant="ghost"
          className="h-11 px-5"
          render={
            <Link href="/categories">
              <Sprout className="size-4" aria-hidden="true" />
              Categories
            </Link>
          }
        />
      </div>
    </section>
  );
}
