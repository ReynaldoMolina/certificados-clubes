import { Person } from "@/types/types";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
} from "../ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { SortButton } from "./sorting-button";
import { Checkbox } from "../ui/checkbox";
import { ClaseBadge } from "./clase-badge";
import { ClubBadge } from "./club-badge";
import { DeletePerson } from "./delete-register";
import { EditPerson } from "../form/edit";
import { Button } from "../ui/button";
import { MoreHorizontal } from "lucide-react";
import { RowOptions } from "./row-options";

export function getColumns(
  onDeletePerson: (p: Person) => void,
  onEditPerson: (p: Person) => void
): ColumnDef<Person>[] {
  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="mr-1.5"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="mr-1.5"
        />
      ),
      size: 30,
      maxSize: 30,
      enableSorting: false,
    },
    {
      accessorKey: "nombre",
      header: ({ column }) => <SortButton label="Nombre" column={column} />,
      size: 400,
    },
    {
      accessorKey: "club",
      header: ({ column }) => <SortButton label="Club" column={column} />,
      cell: ({ row }) => <ClubBadge club={row.original.club} />,
      size: 100,
    },
    {
      accessorKey: "clase",
      header: ({ column }) => <SortButton label="Clase" column={column} />,
      cell: ({ row }) => <ClaseBadge clase={row.original.clase} />,
      size: 100,
    },
    {
      id: "actions",
      header: "",
      cell: ({ row }) => {
        const person = row.original;

        return (
          <RowOptions>
            <EditPerson person={person} onEdit={onEditPerson} />
            <DeletePerson onDelete={() => onDeletePerson(person)} />
          </RowOptions>
        );
      },
      size: 40,
    },
  ];
}
