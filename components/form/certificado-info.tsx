"use client";

import { useSearchParams } from "next/navigation";
import { ParamDatePicker } from "../form-elements/date-picker";
import { ParamsInput } from "../form-elements/params-input";

export function EditCertificado() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const date = searchParams.get("date");
  const place = searchParams.get("place");
  const logo = searchParams.get("logo");

  return (
    <div className="flex flex-col gap-6 w-full mx-auto">
      <ParamsInput
        defaultValue={title}
        paramKey="title"
        label="Nombre del archivo"
        placeholder="Nombre"
      />
      <ParamDatePicker paramKey="date" defaultValue={date} label="Fecha" />
      <ParamsInput
        defaultValue={place}
        paramKey="place"
        label="Lugar (Ciudad, País)"
        placeholder="Lugar"
      />
      <ParamsInput
        defaultValue={logo}
        paramKey="logo"
        label="Logo del club (URL)"
        placeholder="URL (Drive)"
      />
    </div>
  );
}
