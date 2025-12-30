import { DataTable } from "@/components/table/data-table";
import { PageProps } from "@/types/types";

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;

  return {
    title: `Plantilla ${id}`,
  };
}

export default function Page() {
  return <DataTable />;
}
