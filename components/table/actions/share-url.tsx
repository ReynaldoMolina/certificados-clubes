"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy } from "lucide-react";
import { toast } from "sonner";

interface ShareUrlDialogProps {
  children: React.ReactNode;
  url?: string;
}

export function ShareUrlDialog({ children, url }: ShareUrlDialogProps) {
  const fullUrl = url ? url : window.location.href;

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(fullUrl);
      toast.success("Copiado");
    } catch (err) {
      console.error("Failed to copy:", err);
      toast.error("Error", { description: String(err) });
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Compartir</DialogTitle>
          <DialogDescription>
            Cualquiera que tenga el enlace puede ver este certificado.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <Label htmlFor="link" className="sr-only">
            Link
          </Label>
          <Input id="link" defaultValue={fullUrl} readOnly />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cerrar
            </Button>
          </DialogClose>
          <Button type="button" onClick={copyToClipboard}>
            Copiar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
