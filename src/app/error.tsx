"use client";

import Link from "next/link";
import { AlertTriangle, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="mx-auto flex w-full max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <span className="flex size-16 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
        <AlertTriangle className="size-8" aria-hidden="true" />
      </span>
      <h1 className="mt-6 font-heading text-3xl font-semibold tracking-tight">
        Something went wrong
      </h1>
      <p className="mt-4 text-sm/relaxed text-muted-foreground sm:text-base/relaxed">
        We could not load this page. Please try again — if the problem continues, contact
        our team.
      </p>
      {error.digest ? (
        <p className="mt-2 font-mono text-xs text-muted-foreground">
          Reference: {error.digest}
        </p>
      ) : null}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button className="h-11 px-5" onClick={reset}>
          <RotateCcw className="size-4" aria-hidden="true" />
          Try again
        </Button>
        <Button
          variant="outline"
          className="h-11 px-5"
          render={<Link href="/">Back to homepage</Link>}
        />
      </div>
    </section>
  );
}
