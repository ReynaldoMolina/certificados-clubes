import { Suspense } from "react";
import PdfPreview from "@/components/design-pdf/preview";
import { PageProps } from "@/types/types";
import { Spinner } from "@/components/ui/spinner";

export async function generateMetadata({ searchParams }: PageProps) {
  const { title } = await searchParams;
  return {
    title: `${title} - PDF`,
  };
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-[80dvh] flex flex-col gap-2 items-center justify-center">
          <Spinner />
          <span>Generando PDF…</span>
        </div>
      }
    >
      <PdfPreview />
    </Suspense>
  );
}
