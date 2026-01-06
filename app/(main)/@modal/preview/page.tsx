import { PreviewPage } from "@/components/page/preview-page";
import { PageProps } from "@/types/types";

export async function generateMetadata({ searchParams }: PageProps) {
  const { design_id } = await searchParams;

  return {
    title: `Diseño ${design_id}`,
  };
}

export default async function Page({ searchParams }: PageProps) {
  const { design_id } = await searchParams;

  return <PreviewPage designId={String(design_id)} />;
}
