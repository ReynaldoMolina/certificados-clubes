"use client";

import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Person } from "@/types/types";
import { PersonForm } from "./form";
import { formSchema } from "./create";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { DropdownMenuItem } from "../ui/dropdown-menu";

interface EditPersonProps {
  person: Person;
  onEdit: (updated: Person) => void;
}

export function EditPerson({ person, onEdit }: EditPersonProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: person,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    onEdit(values as Person);
    toast.success("Cambios guardados.");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem
          onSelect={(e) => {
            e.preventDefault();
          }}
        >
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
          <PersonForm form={form} isNew={false} />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button type="submit">Guardar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
