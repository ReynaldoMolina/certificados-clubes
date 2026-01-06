import { toast } from "sonner";
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
} from "../ui/alert-dialog";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { Trash } from "lucide-react";
import { useLocalStorage } from "@/lib/use-local-storage";

interface DeletePersonProps {
  index: number[];
  deleteMember(indexes: number[]): {
    id: string;
    url: string;
  };
}

export function DeletePerson({ index, deleteMember }: DeletePersonProps) {
  const { saveUrl } = useLocalStorage();

  function deleteMemberIds() {
    try {
      const result = deleteMember(index);

      if (!result) return;

      saveUrl(result.id, window.location.origin + "/editor" + result.url);
      toast.success("Se eliminó el miembro de club.");
    } catch (error) {
      toast.error("Error", { description: String(error) });
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <DropdownMenuItem
          variant="destructive"
          onSelect={(e) => {
            e.preventDefault();
          }}
        >
          <Trash />
          Eliminar
        </DropdownMenuItem>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              try {
                deleteMemberIds();
              } catch (error) {
                toast.error("Error", { description: String(error) });
              }
            }}
          >
            Eliminar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
