import { AddMemberForm } from "../../form/miembro/create";
import { Member } from "@/types/types";
import { ButtonGroup } from "../../ui/button-group";
import { DeleteMembers } from "./delete-members";

interface TableActionsProps {
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
  addMember,
  deleteMember,
  selectedRowsIds,
}: TableActionsProps) {
  return (
    <ButtonGroup className="w-full">
      <ButtonGroup className="ml-auto">
        <DeleteMembers
          selectedRowsIds={selectedRowsIds}
          deleteMember={deleteMember}
        />
      </ButtonGroup>

      <ButtonGroup>
        <AddMemberForm addMember={addMember} />
      </ButtonGroup>
    </ButtonGroup>
  );
}
