import type { UseFormReturn } from "react-hook-form";
import { FormInput } from "../form-elements/form-input";
import type { z } from "astro/zod";
import type { formSchema } from "./create";
import { FormSelect } from "../form-elements/form-select";

interface FormProps {
  form: UseFormReturn<z.infer<typeof formSchema>>;
  isNew?: boolean;
}

export function PersonForm({ form }: FormProps) {
  const { club } = form.watch();

  const clasesAventureros = [
    {
      label: "Aves madrugadoras",
      value: "Aves madrugadoras",
    },
    {
      label: "Manos ayudadoras",
      value: "Manos ayudadoras",
    },
  ];

  const clases = [
    {
      label: "Amigo",
      value: "Amigo",
    },
    {
      label: "Compañero",
      value: "Compañero",
    },
    {
      label: "Explorador",
      value: "Explorador",
    },
    {
      label: "Orientador",
      value: "Orientador",
    },
    {
      label: "Viajero",
      value: "Viajero",
    },
    {
      label: "Guía",
      value: "Guía",
    },
  ];

  return (
    <div className="my-6 space-y-6">
      <FormInput control={form.control} label="Id" name="id" hidden />
      <FormInput control={form.control} label="Nombre" name="nombre" />
      <FormSelect
        control={form.control}
        label="Club"
        name="club"
        options={[
          {
            label: "Aventurero",
            value: "Aventurero",
          },
          {
            label: "Conquistador",
            value: "Conquistador",
          },
          {
            label: "Guía Mayor",
            value: "Guía Mayor",
          },
        ]}
        onChangeExtra={() => {
          if (club === "Aventurero") form.setValue("clase", "");
        }}
      />
      <FormSelect
        control={form.control}
        label="Clase"
        name="clase"
        disabled={!club}
        options={club === "Aventurero" ? clasesAventureros : clases}
      />
    </div>
  );
}
