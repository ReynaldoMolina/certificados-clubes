export interface SearchParamsProps {
  id?: string;
  design_id?: string;
  title?: string;
  place?: string;
  date?: string;
  logo?: string;
  members?: string;
}

export interface PageProps {
  params: Promise<{
    id: string;
    id_detalle: string;
  }>;
  searchParams: Promise<SearchParamsProps>;
}

export type ClaseAventurero =
  | "Corderitos"
  | "Aves Madrugadoras"
  | "Abejas Industriosas"
  | "Rayitos de Sol"
  | "Constructores"
  | "Manos Ayudadoras";

export type ClaseConquistador =
  | "Amigo"
  | "Compañero"
  | "Explorador"
  | "Orientador"
  | "Viajero"
  | "Guía";

export type Clase = ClaseAventurero | ClaseConquistador;

export type Club = "Aventurero" | "Conquistador" | "Guía Mayor";

export interface Member {
  n: string; // nombre
  c: "1" | "2" | "3"; // club
  l: Clase; // clase
}

interface CertificatesProps {
  members: Member[];
  info: Certificado;
  onReady?: () => void;
}

export interface Certificado {
  title: string;
  date: string;
  place: string;
  logo: string;
}

export interface SelectOptions {
  value: string;
  label: string;
}

export type SavedLink = {
  id: string;
  title: string;
  designId: string;
  url: string;
  modified: string | undefined;
};
