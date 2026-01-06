import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "@/lib/use-local-storage";
import { Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface DeleteMembersProps {
  deleteMember(indexes: number[]): {
    id: string;
    url: string;
  };
  selectedRowsIds: number[];
}

export function DeleteMembers({
  deleteMember,
  selectedRowsIds,
}: DeleteMembersProps) {
  const [open, setOpen] = useState(false);
  const { saveUrl } = useLocalStorage();
  const isPlural = selectedRowsIds.length > 1;

  function deleteMemberIds() {
    try {
      const result = deleteMember(selectedRowsIds);

      if (!result) return;

      saveUrl(result.id, window.location.origin + "/editor" + result.url);
      toast.success(
        isPlural
          ? "Se eliminaron los miembros de club."
          : "Se eliminó el miembro de club."
      );
    } catch (error) {
      toast.error("Error", { description: String(error) });
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Delete"
          disabled={selectedRowsIds.length < 1}
        >
          <Trash />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
          <AlertDialogDescription>
            Se {isPlural ? "van" : "va"} a eliminar {selectedRowsIds.length}{" "}
            {isPlural ? "filas" : "fila"}.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={deleteMemberIds}>
            Eliminar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
