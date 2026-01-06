import { UseFormReturn } from "react-hook-form";
import { FormInput } from "@/components/form-elements/form-input";
import { z } from "zod";
import { formSchema } from "./create";
import { FormSelect } from "@/components/form-elements/form-select";
import { clases, clasesAventureros, conquistadores } from "@/lib/data";
import { FieldSet } from "@/components/ui/field";

interface FormProps {
  form: UseFormReturn<z.infer<typeof formSchema>>;
  isAventurero: boolean;
}

export function MemberForm({ form, isAventurero }: FormProps) {
  return (
    <div className="my-6 space-y-6">
      <FormInput control={form.control} label="Nombre" name="n" />
      <FieldSet className="flex flex-col sm:flex-row gap-6">
        {!isAventurero && (
          <FormSelect
            control={form.control}
            label="Club"
            name="c"
            options={conquistadores}
          />
        )}
        <FormSelect
          control={form.control}
          label="Clase"
          name="l"
          options={isAventurero ? clasesAventureros : clases}
        />
      </FieldSet>
    </div>
  );
}
