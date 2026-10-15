import { Beef, Droplets, FlaskConical, Leaf, Recycle, Wheat } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { CategoryIconKey } from "@/lib/content";

const iconMap: Record<CategoryIconKey, LucideIcon> = {
  wheat: Wheat,
  leaf: Leaf,
  flask: FlaskConical,
  droplets: Droplets,
  beef: Beef,
  recycle: Recycle,
};

export function getCategoryIcon(key: CategoryIconKey): LucideIcon {
  return iconMap[key] ?? Leaf;
}
