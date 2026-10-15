import { Sprout } from "lucide-react";

import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  title,
  description,
  icon,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4 rounded-xl border border-dashed border-border bg-card/60 px-6 py-14 text-center",
        className,
      )}
    >
      <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary">
        {icon ?? <Sprout className="size-6" aria-hidden="true" />}
      </span>
      <div className="space-y-1">
        <h3 className="font-heading text-lg font-semibold">{title}</h3>
        <p className="mx-auto max-w-md text-sm/relaxed text-muted-foreground">
          {description}
        </p>
      </div>
      {action}
    </div>
  );
}
