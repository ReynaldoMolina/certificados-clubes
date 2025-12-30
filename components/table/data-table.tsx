"use client";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { ArrowLeft, Download, MoreVertical, SearchIcon, X } from "lucide-react";
import { toast } from "sonner";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";
import { CreatePersonForm } from "../form/create";
import { Button } from "../ui/button";
import { useLocalPeople } from "@/lib/use-local-people";
import { getColumns } from "./columns";
import { useRouter } from "next/navigation";

export function DataTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});

  const { people, addPerson, editPerson, deletePerson } = useLocalPeople();

  const columns = getColumns(deletePerson, editPerson);

  const table = useReactTable({
    data: people,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  });

  const column = table.getColumn("nombre");
  const router = useRouter();

  return (
    <>
      <div className="inline-flex gap-1 w-full">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeft />
        </Button>
        <InputGroup className="max-w-50">
          <InputGroupInput
            placeholder="Buscar"
            className="text-sm"
            value={(column?.getFilterValue() as string) ?? ""}
            onChange={(event) => column?.setFilterValue(event.target.value)}
          />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              size="icon-xs"
              disabled={column?.getFilterValue() === undefined}
              onClick={() => column?.setFilterValue("")}
            >
              <X />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>

        <div className="inline-flex gap-1 ml-auto">
          <Button variant="outline" size="icon">
            <MoreVertical />
          </Button>

          <Button variant="outline">
            <Download />
            <span className="hidden sm:block">Descargar</span>
          </Button>

          <CreatePersonForm onAddPerson={addPerson} />
        </div>
      </div>

      <Table>
        <TableHeader className="bg-muted/50">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const size = header.getSize();
                const maxSize = header.column.columnDef.maxSize;

                return (
                  <TableHead
                    key={header.id}
                    style={{
                      width: size !== 150 ? header.getSize() : undefined,
                      maxWidth: maxSize ? maxSize : undefined,
                    }}
                    className="text-xs font-semibold"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => {
                  const size = cell.column.getSize();
                  const maxSize = cell.column.columnDef.maxSize;

                  return (
                    <TableCell
                      key={cell.id}
                      style={{
                        width: size !== 150 ? cell.column.getSize() : undefined,
                        maxWidth: maxSize ? maxSize : undefined,
                      }}
                      className="border-r last-of-type:border-r-0"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center text-muted-foreground"
              >
                No hay resultados.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {people.length > 0 && (
        <div className="inline-flex text-muted-foreground text-sm">
          {table.getFilteredSelectedRowModel().rows.length} de{" "}
          {table.getFilteredRowModel().rows.length} seleccionado(s).
        </div>
      )}
    </>
  );
}
