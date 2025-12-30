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
} from "../ui/dialog";
import { Button } from "../ui/button";
import { PersonForm } from "./form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState, useTransition } from "react";
import { Person } from "@/types/types";
import { Spinner } from "../ui/spinner";

export const formSchema = z.object({
  id: z.string().min(1, "Requerido"),
  nombre: z.string().min(1, "Requerido"),
  club: z.string().min(1, "Requerido"),
  clase: z.string().min(1, "Requerido"),
});

interface CreatePersonFormProps {
  onAddPerson: (p: Person) => void;
}

export function CreatePersonForm({ onAddPerson }: CreatePersonFormProps) {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: crypto.randomUUID(),
      nombre: "",
      club: "",
      clase: "",
    },
  });

  const [isPending, startTransition] = useTransition();

  async function addPerson(values: Person) {
    try {
      onAddPerson(values);
      setOpen(false);
      toast.success("Se agregó el registro.");
      form.reset();
    } catch (error) {
      toast.error("Error", { description: String(error) });
    }
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(() => {
      addPerson(values as Person);
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus />
          <span className="hidden sm:block">Agregar</span>
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
          <PersonForm form={form} isNew />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button type="submit" className="min-w-25">
              {isPending ? <Spinner /> : "Agregar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
