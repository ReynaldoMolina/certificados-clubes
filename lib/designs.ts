import { Club } from "@/types/types";

export interface Design {
  id: number;
  club: Club;
}

export const designs: Design[] = [
  {
    id: 1,
    club: "Conquistador",
  },
  {
    id: 2,
    club: "Aventurero",
  },
];
