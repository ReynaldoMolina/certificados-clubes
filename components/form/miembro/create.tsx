"use client";

import z from "zod";
import { Plus } from "lucide-react";
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
import { Button } from "@/components/ui/button";
import { MemberForm } from "./form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState, useTransition } from "react";
import { Member } from "@/types/types";
import { Spinner } from "@/components/ui/spinner";
import { useSearchParams } from "next/navigation";
import { getDesign } from "@/lib/get-design";
import { useLocalStorage } from "@/lib/use-local-storage";

export const formSchema = z.object({
  n: z.string().trim().min(1, "Requerido"),
  c: z.string().min(1, "Requerido"),
  l: z.string().min(1, "Requerido"),
});

interface AddMemberFormProps {
  addMember: (member: Member) => {
    id: string;
    url: string;
  };
}

export function AddMemberForm({ addMember }: AddMemberFormProps) {
  const [open, setOpen] = useState(false);

  const { saveUrl } = useLocalStorage();
  const searchParams = useSearchParams();
  const designId = searchParams.get("design_id") ?? "";
  const { design } = getDesign(designId);
  const isAventurero = design?.club === "Aventurero";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      n: "",
      c: isAventurero ? "1" : "",
      l: "",
    },
  });

  const [isPending, startTransition] = useTransition();

  async function onAddMember(values: Member) {
    try {
      const result = addMember(values);
      toast.success("Agregado correctamente.");
      form.reset();
      saveUrl(result.id, window.location.origin + "/editor" + result.url);
      setOpen(false);
    } catch (error) {
      toast.error("Error", { description: String(error) });
    }
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(() => {
      onAddMember(values as Member);
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus />
          <span className="hidden xs:block">Agregar</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[95dvh] overflow-auto">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Agregar nombre</DialogTitle>
            <DialogDescription>
              Agrega la información, da click en agregar cuando estés listo.
            </DialogDescription>
          </DialogHeader>

          <MemberForm form={form} isAventurero={isAventurero} />

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">Cancelar</Button>
            </DialogClose>
            <Button type="submit" className="min-w-20">
              {isPending ? <Spinner /> : "Agregar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
