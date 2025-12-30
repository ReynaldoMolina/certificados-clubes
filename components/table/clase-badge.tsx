import type { Clase } from "@/types/types";

interface ClaseBadgeProps {
  clase: Clase;
}

export function ClaseBadge({ clase }: ClaseBadgeProps) {
  return <span>{clase}</span>;
}
