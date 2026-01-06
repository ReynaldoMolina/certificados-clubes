import { PageProps } from "@/types/types";
import { DataTable } from "@/components/table/data-table";
import { redirect } from "next/navigation";
import { getDesign } from "@/lib/get-design";
import Image from "next/image";
import { TypographyH1, TypographyH2 } from "@/components/typography";
import { EditCertificado } from "@/components/form/certificado-info";

export async function generateMetadata({ searchParams }: PageProps) {
  const { title } = await searchParams;

  return {
    title: `${title} - Editar`,
  };
}

export default async function Page({ searchParams }: PageProps) {
  const { design_id, title } = await searchParams;

  if (!design_id) return redirect("/");

  const { design } = getDesign(design_id);

  return (
    <>
      <TypographyH1 className="text-left">{title}</TypographyH1>
      <TypographyH2 className="mt-3">Datos de investidura</TypographyH2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <EditCertificado />
        <Image
          src={`/${design?.id}/preview/1.png` || ""}
          width={660}
          height={510}
          alt="Miniatura"
          className="w-full max-w-xs mx-auto rounded shadow bg-muted"
        />
      </div>
      <TypographyH2 className="mt-10">Lista de miembros</TypographyH2>
      <DataTable />
    </>
  );
}
