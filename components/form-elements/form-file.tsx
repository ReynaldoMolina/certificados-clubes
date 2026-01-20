import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ensureId } from "@/lib/ensure-id";
import { supabase } from "@/lib/supabase-client";
import { useCertificate } from "@/lib/use-certificate";
import { useLocalStorage } from "@/lib/use-local-storage";
import { UploadIcon } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { toast } from "sonner";

interface Props {
  defaultLogo: string | null;
}

export function InputFile({ defaultLogo }: Props) {
  const [logoUrl, setLogoUrl] = useState<string | null>(defaultLogo);
  const [loading, setLoading] = useState(false);

  const { updateInfoInUrl } = useCertificate();
  const { saveUrl } = useLocalStorage();

  function updateParams(newValue: string) {
    try {
      const url = new URL(window.location.href);
      const id = ensureId(url.searchParams);

      url.searchParams.set("logo", newValue);

      updateInfoInUrl(newValue, "logo");

      saveUrl(id, url.toString());
      toast.success("Cambios guardados.");
    } catch (error) {
      console.error(error);
      toast.error("Error", { description: String(error) });
    }
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validaciones
    if (!file.type.startsWith("image/")) {
      alert("Solo imágenes");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      alert("Máximo 2MB");
      return;
    }

    setLoading(true);

    try {
      // Crear un nombre único para el archivo
      const fileName = `${Date.now()}-${file.name}`;
      const { error } = await supabase.storage
        .from("logos")
        .upload(fileName, file, {
          cacheControl: "3600",
          upsert: true,
        });

      if (error) throw error;

      // Obtener URL pública
      const { data } = supabase.storage.from("logos").getPublicUrl(fileName);

      if (!data?.publicUrl)
        throw new Error("No se pudo obtener la URL pública");

      setLogoUrl(data.publicUrl);
      updateParams(data.publicUrl);
    } catch (err) {
      console.error(err);
      alert("Error subiendo el logo");
    } finally {
      setLoading(false);
    }
  }

  const inputRef = useRef<HTMLInputElement>(null);
  const triggerInput = () => inputRef.current?.click();

  return (
    <div className="flex flex-col md:flex-row gap-2">
      <Field>
        <div
          onClick={triggerInput}
          className="rounded-lg transition-all cursor-pointer border border-border p-4 h-full"
        >
          <input
            id="logo"
            ref={inputRef}
            name="ogo"
            type="file"
            accept="image/png"
            onChange={handleUpload}
            className="hidden"
          />
          <div className="flex flex-col items-center gap-2 pointer-events-none">
            <UploadIcon className="w-6 h-6 text-muted-foreground transition" />
            <p className="font-semibold text-sm">Click para subir logo</p>

            <div className="flex flex-col items-center gap-2">
              <p className="text-xs text-muted-foreground">
                Tamaño máximo: 2MB
              </p>
              <p className="text-xs text-muted-foreground">
                PNG fondo transparente
              </p>
            </div>
          </div>
        </div>
      </Field>
      {/* <Input id="url" value={logoUrl ?? "Sube tu logo"} readOnly /> */}
      {logoUrl && (
        <Image
          src={logoUrl}
          alt="Logo"
          width={120}
          height={120}
          className="size-35 object-contain rounded-lg border p-2 w-full md:w-fit"
        />
      )}
    </div>
  );
}
