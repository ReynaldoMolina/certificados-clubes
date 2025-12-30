"use client";

import { FieldValues, Control, Path, Controller } from "react-hook-form";
import { Field, FieldDescription, FieldError, FieldLabel } from "../ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import type { SelectOptions } from "@/types/types";

type FormSelectType<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
  description?: string;
  options: SelectOptions[];
  disabled?: boolean;
  onChangeExtra?: (value: string | number) => void;
};

export function FormSelect<T extends FieldValues>({
  control,
  name,
  label,
  description,
  options,
  disabled,
  onChangeExtra,
}: FormSelectType<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={name}>{label}</FieldLabel>
          <Select
            onValueChange={(value) => {
              field.onChange(value);
              onChangeExtra?.(value);
            }}
            value={String(field.value) ?? ""}
          >
            <SelectTrigger disabled={disabled}>
              <SelectValue placeholder="Selecciona una opción" />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          {disabled && description && (
            <FieldDescription>{description}</FieldDescription>
          )}
        </Field>
      )}
    />
  );
}
