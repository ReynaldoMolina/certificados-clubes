"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const CATEGORIAS = [
  { id: "todos", label: "Todos" },
  { id: "Aventurero", label: "Aventureros" },
  { id: "Conquistador", label: "Conquistadores / GM" },
];

export function FilterPills({
  active,
  onChange,
}: {
  active: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
      {CATEGORIAS.map((cat) => (
        <Badge
          key={cat.id}
          variant={active === cat.id ? "default" : "outline"}
          className={cn(
            "cursor-pointer px-4 py-1.5 transition-all whitespace-nowrap",
            active === cat.id
              ? "bg-primary"
              : "text-muted-foreground hover:bg-secondary"
          )}
          onClick={() => onChange(cat.id)}
        >
          {cat.label}
        </Badge>
      ))}
    </div>
  );
}
