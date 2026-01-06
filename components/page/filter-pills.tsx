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
    <div className="flex gap-2 overflow-x-auto no-scrollbar">
      {CATEGORIAS.map((cat) => (
        <Badge
          key={cat.id}
          variant={active === cat.id ? "default" : "outline"}
          className="cursor-pointer py-1"
          onClick={() => onChange(cat.id)}
        >
          {cat.label}
        </Badge>
      ))}
    </div>
  );
}
