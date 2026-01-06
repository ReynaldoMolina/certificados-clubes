import { ClaseAventurero, ClaseConquistador, Club } from "@/types/types";

export const aventureros: { value: string; label: Club }[] = [
  {
    value: "1",
    label: "Aventurero",
  },
];

export const conquistadores: { value: string; label: Club }[] = [
  {
    value: "2",
    label: "Conquistador",
  },
  {
    value: "3",
    label: "Guía Mayor",
  },
];

export const clubes: { value: string; label: Club }[] = [
  ...aventureros,
  ...conquistadores,
];

export const clasesAventureros: { value: string; label: ClaseAventurero }[] = [
  {
    value: "1",
    label: "Corderitos",
  },
  {
    value: "2",
    label: "Aves Madrugadoras",
  },
  {
    value: "3",
    label: "Abejas Industriosas",
  },
  {
    value: "4",
    label: "Rayitos de Sol",
  },
  {
    value: "5",
    label: "Constructores",
  },
  {
    value: "6",
    label: "Manos Ayudadoras",
  },
];

export const clases: { value: string; label: ClaseConquistador }[] = [
  {
    value: "1",
    label: "Amigo",
  },
  {
    value: "2",
    label: "Compañero",
  },
  {
    value: "3",
    label: "Explorador",
  },
  {
    value: "4",
    label: "Orientador",
  },
  {
    value: "5",
    label: "Viajero",
  },
  {
    value: "6",
    label: "Guía",
  },
];
