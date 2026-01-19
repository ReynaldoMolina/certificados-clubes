import { Share2 } from "lucide-react";
import { Button } from "../../ui/button";
import { Member } from "@/types/types";
import { ShareUrlDialog } from "./share-url";
import { ViewPdf } from "./view-pdf";
import { DownloadPdf } from "./download";
import { TypographyH2 } from "@/components/typography";

interface Props {
  members: Member[];
}

export function ActionsExport({ members }: Props) {
  return (
    <>
      <TypographyH2 className="mt-10">Exportar</TypographyH2>

      <div className="flex w-full md:w-[33%] flex-col md:flex-row gap-3">
        <DownloadPdf disabled={members.length < 1} />
        <ShareUrlDialog>
          <Button
            variant="secondary"
            disabled={members.length < 1}
            className="w-full py-10 hover:cursor-pointer"
          >
            <Share2 />
            Compartir
          </Button>
        </ShareUrlDialog>

        <ViewPdf disabled={members.length < 1} />
      </div>
    </>
  );
}
