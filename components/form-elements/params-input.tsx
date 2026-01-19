import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "sonner";
import { useCertificate } from "@/lib/use-certificate";
import { useLocalStorage } from "@/lib/use-local-storage";
import { ensureId } from "@/lib/ensure-id";

interface ParamsInputProps {
  defaultValue: string | null;
  paramKey: string;
  label: string;
  placeholder?: string;
}

export function ParamsInput({
  defaultValue,
  paramKey,
  label,
  placeholder,
}: ParamsInputProps) {
  const { updateInfoInUrl } = useCertificate();
  const { saveUrl } = useLocalStorage();
  const [value, setValue] = useState(defaultValue ?? "");

  function updateParams(newValue: string) {
    try {
      const url = new URL(window.location.href);
      const id = ensureId(url.searchParams);

      url.searchParams.set(paramKey, newValue);

      updateInfoInUrl(newValue, paramKey);

      saveUrl(id, url.toString());
      toast.success("Cambios guardados.");
    } catch (error) {
      console.error(error);
      toast.error("Error", { description: String(error) });
    }
  }

  return (
    <div className="w-full flex flex-col gap-3">
      <Label htmlFor={paramKey} className="font-semibold">
        {label}
      </Label>
      <Input
        id={paramKey}
        value={value}
        onBlur={(event) => updateParams(event.target.value)}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder ? placeholder : label}
      />
    </div>
  );
}
