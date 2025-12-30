export interface SearchParamsProps {
  page: string;
}

export interface PageProps {
  params: Promise<{
    id: string;
    id_detalle: string;
  }>;
  searchParams: Promise<SearchParamsProps>;
}

export type Clase =
  | "Amigo"
  | "Compañero"
  | "Explorador"
  | "Orientador"
  | "Viajero"
  | "Guía"
  | "Aves madrugadoras";

export type Club = "Aventurero" | "Conquistador" | "Guía Mayor";

export interface Person {
  id: string;
  nombre: string;
  clase: Clase;
  club: Club;
}

export interface SelectOptions {
  value: string;
  label: string;
}

export interface CertificatesProps {
  people: Person[];
  dateDays: string;
  dateMonth: string;
  dateYear: string;
  lugar: string;
}
