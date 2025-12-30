import type { Club } from "@/types/types";

interface ClubBadgeProps {
  club: Club;
}

export function ClubBadge({ club }: ClubBadgeProps) {
  return <span>{club}</span>;
}
