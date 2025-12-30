import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";
import { Column } from "@tanstack/react-table";
import { Person } from "@/types/types";

interface SortButtonProps {
  label: string;
  column: Column<Person, unknown>;
}

export function SortButton({ label, column }: SortButtonProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="has-[>svg]:px-1 justify-start text-xs font-semibold"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      <span>{String(label)}</span>
      <ArrowUpDown className="ml-1 size-3" />
    </Button>
  );
}
