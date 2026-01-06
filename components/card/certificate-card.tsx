import Link from "next/link";
import Image from "next/image";
import { SavedLink } from "@/types/types";
import { formatDate } from "@/lib/formatters";
import { Button } from "../ui/button";
import { MoreVertical, Share2, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
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
import { toast } from "sonner";
import { ShareUrlDialog } from "../table/actions/share-url";

interface CertificateCardProps {
  link: SavedLink;
  deleteUrl: (id: string) => void;
}

export function CertificateCard({ link, deleteUrl }: CertificateCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <Link href={link.url} className="flex flex-col gap-2">
        <Image
          width={660}
          height={510}
          src={`/${link.designId}/preview/1.png`}
          alt="Thumbnail"
          className="rounded shadow w-full"
        />
      </Link>
      <div className="flex w-full">
        <div className="flex flex-col gap-2 flex-1">
          <Link href={link.url} className="text-sm hover:underline">
            {link.title}
          </Link>
          <span className="text-xs text-muted-foreground">
            Modificado: {formatDate(link.modified || "")}
          </span>
        </div>
        <Options link={link} deleteUrl={deleteUrl} />
      </div>
    </div>
  );
}

interface OptionsProps {
  link: SavedLink;
  deleteUrl: (name: string) => void;
}

function Options({ link, deleteUrl }: OptionsProps) {
  function deleteLink() {
    deleteUrl(link.id);
    toast.success("Eliminado");
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon-sm" className="ml-auto">
          <MoreVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          {/* <DropdownMenuItem>
            <Download />
            Descargar
          </DropdownMenuItem> */}
          <ShareUrlDialog url={link.url}>
            <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault();
              }}
            >
              <Share2 />
              Compartir
            </DropdownMenuItem>
          </ShareUrlDialog>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
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
                  Se va a eliminar este certificado de este dispositivo.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={deleteLink}>
                  Eliminar
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
