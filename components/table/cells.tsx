import { clases, clasesAventureros, clubes } from "@/lib/data";
import { CellContext } from "@tanstack/react-table";

export function DefaultCell<TData, TValue>({
  getValue,
}: CellContext<TData, TValue>) {
  const value = getValue();

  return (
    <span className="whitespace-pre cursor-default">
      {value !== null && value !== undefined ? String(value) : ""}
    </span>
  );
}

export function ClubCell<TData, TValue>({
  getValue,
}: CellContext<TData, TValue>) {
  const value = getValue();
  const formattedValue = clubes.find(
    (club) => club.value === String(value)
  )?.label;

  return (
    <span className="whitespace-pre cursor-default">
      {value !== null && value !== undefined ? formattedValue : ""}
    </span>
  );
}

interface ClaseCellProps {
  value: string;
  club: string;
}

export function ClaseCell({ value, club }: ClaseCellProps) {
  const source = club === "1" ? clasesAventureros : clases;

  const formattedValue = source.find((item) => item.value === value)?.label;

  return (
    <span className="whitespace-pre cursor-default">
      {formattedValue ?? ""}
    </span>
  );
}
