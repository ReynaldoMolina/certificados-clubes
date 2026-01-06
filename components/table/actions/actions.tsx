import { Share2 } from "lucide-react";
import { Button } from "../../ui/button";
import { AddMemberForm } from "../../form/miembro/create";
import { Member } from "@/types/types";
import { ButtonGroup } from "../../ui/button-group";
import { DeleteMembers } from "./delete-members";
import { ShareUrlDialog } from "./share-url";
import { ViewPdf } from "./view-pdf";
import { DownloadPdf } from "./download";

interface TableActionsProps {
  members: Member[];
  addMember: (member: Member) => {
    id: string;
    url: string;
  };
  deleteMember(indexes: number[]): {
    id: string;
    url: string;
  };
  totalRows: number;
  selectedRowsIds: number[];
}

export function TableActions({
  members,
  addMember,
  deleteMember,
  selectedRowsIds,
}: TableActionsProps) {
  return (
    <ButtonGroup className="w-full">
      <ButtonGroup className="ml-auto md:ml-0">
        <DeleteMembers
          selectedRowsIds={selectedRowsIds}
          deleteMember={deleteMember}
        />
        <ShareUrlDialog>
          <Button variant="outline" disabled={members.length < 1}>
            <Share2 />
            <span className="hidden sm:block">Compartir</span>
          </Button>
        </ShareUrlDialog>

        <ViewPdf disabled={members.length < 1} />
        <DownloadPdf disabled={members.length < 1} />
      </ButtonGroup>

      <ButtonGroup>
        <AddMemberForm addMember={addMember} />
      </ButtonGroup>
    </ButtonGroup>
  );
}
