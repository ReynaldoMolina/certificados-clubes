"use client";

import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Member } from "@/types/types";
import { MemberForm } from "../form/miembro/form";
import { formSchema } from "../form/miembro/create";
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
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Pencil } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { getDesign } from "@/lib/get-design";
import { useLocalStorage } from "@/lib/use-local-storage";

interface EditMemberProps {
  index: number;
  member: Member;
  editMember: (
    index: number,
    updated: Member
  ) => {
    id: string;
    url: string;
  };
}

export function EditMember({ index, member, editMember }: EditMemberProps) {
  const [open, setOpen] = useState(false);
  const { saveUrl } = useLocalStorage();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: member,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const result = editMember(index, values as Member);
      setOpen(false);
      saveUrl(result.id, window.location.origin + "/editor" + result.url);
      toast.success("Cambios guardados.");
    } catch (error) {
      toast.error("Error", { description: String(error) });
    }
  }

  const searchParams = useSearchParams();
  const designId = searchParams.get("design_id") ?? "";
  const { design } = getDesign(designId);
  const isAventurero = design?.club === "Aventurero";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <DropdownMenuItem
          onSelect={(e) => {
            e.preventDefault();
          }}
        >
          <Pencil />
          Editar
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="max-h-[95dvh] overflow-auto">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Editar</DialogTitle>
            <DialogDescription>
              Actualiza la información y haz click en guardar.
            </DialogDescription>
          </DialogHeader>

          <MemberForm form={form} isAventurero={isAventurero} />

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">Cancelar</Button>
            </DialogClose>
            <Button type="submit">Guardar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
