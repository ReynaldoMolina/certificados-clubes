import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { es } from "date-fns/locale";
import { formatDate, dateIsoToDate, dateToIso } from "@/lib/formatters";
import { Label } from "../ui/label";
import { useCertificate } from "@/lib/use-certificate";
import { toast } from "sonner";
import { useLocalStorage } from "@/lib/use-local-storage";
import { ensureId } from "@/lib/ensure-id";

interface DatePickerProps {
  defaultValue: string | null;
  paramKey: string;
  label: string;
}

export function ParamDatePicker({
  defaultValue,
  paramKey,
  label,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(defaultValue);

  const { updateInfoInUrl } = useCertificate();
  const { saveUrl } = useLocalStorage();

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
      <Label className="font-semibold" htmlFor={paramKey}>
        {label}
      </Label>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id={paramKey}
            className="w-full justify-between font-normal"
          >
            {date ? formatDate(date) : "Seleccionar fecha"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={dateIsoToDate(date ?? "")}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(dateToIso(date) || "");
              updateParams(dateToIso(date) || "");
              setOpen(false);
            }}
            locale={es}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
