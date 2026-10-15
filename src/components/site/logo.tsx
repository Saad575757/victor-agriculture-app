import { Sprout } from "lucide-react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

interface LogoProps {
  className?: string;
  iconClassName?: string;
  nameClassName?: string;
  showTagline?: boolean;
  inverted?: boolean;
}

export function Logo({
  className,
  iconClassName,
  nameClassName,
  showTagline = false,
  inverted = false,
}: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm",
          inverted && "bg-primary-foreground text-primary",
          iconClassName,
        )}
      >
        <Sprout className="size-5" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-lg font-semibold tracking-tight",
            inverted && "text-primary-foreground",
            nameClassName,
          )}
        >
          {siteConfig.name}
        </span>
        {showTagline ? (
          <span
            className={cn(
              "mt-1 hidden text-xs text-muted-foreground sm:block",
              inverted && "text-primary-foreground/70",
            )}
          >
            {siteConfig.tagline}
          </span>
        ) : null}
      </span>
    </span>
  );
}
