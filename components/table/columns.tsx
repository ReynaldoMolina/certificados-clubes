import { Member } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import { SortButton } from "./sorting-button";
import { Checkbox } from "@/components/ui/checkbox";
import { DeletePerson } from "./delete-row";
import { EditMember } from "@/components/table/edit-row";
import { RowOptions } from "./row-options";
import { ClaseCell, ClubCell } from "./cells";

export function getColumns(
  editMember: (
    index: number,
    updated: Member
  ) => {
    id: string;
    url: string;
  },
  deleteMember: (indexes: number[]) => {
    id: string;
    url: string;
  }
): ColumnDef<Member>[] {
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
          className="mr-2"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="mr-2"
        />
      ),
      enableSorting: false,
    },
    {
      accessorKey: "n",
      header: ({ column }) => <SortButton label="Nombre" column={column} />,
    },
    {
      accessorKey: "c",
      header: ({ column }) => <SortButton label="Club" column={column} />,
      cell: ClubCell,
    },
    {
      accessorKey: "l",
      header: ({ column }) => <SortButton label="Clase" column={column} />,
      cell: ({ row }) => (
        <ClaseCell value={row.original.l} club={row.original.c} />
      ),
    },
    {
      id: "options",
      header: "Opciones",
      cell: ({ row }) => {
        const member = row.original;

        return (
          <RowOptions>
            <EditMember
              index={row.index}
              member={member}
              editMember={editMember}
            />
            <DeletePerson index={[row.index]} deleteMember={deleteMember} />
          </RowOptions>
        );
      },
    },
  ];
}
