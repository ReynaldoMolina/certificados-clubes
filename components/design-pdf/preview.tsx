"use client";

import { useState, useMemo } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { useSearchParams } from "next/navigation";
import { useCertificate } from "@/lib/use-certificate";
import { Spinner } from "../ui/spinner";
import { designs } from "./designs-index";

export default function PdfPreview() {
  const { members, info } = useCertificate();
  const searchParams = useSearchParams();
  const designId = searchParams.get("design_id") ?? "1";
  const [ready, setReady] = useState(false);

  const Design = useMemo(
    () => designs[designId as keyof typeof designs],
    [designId]
  );

  if (!Design) {
    return <div>Diseño no encontrado.</div>;
  }

  return (
    <div className="relative h-[80dvh] w-full">
      {!ready && (
        <div className="flex flex-col gap-2 absolute inset-0 z-10 items-center justify-center bg-background">
          <Spinner />
          Generando PDF...
        </div>
      )}

      <PDFViewer className="w-full h-full">
        <Design members={members} info={info} onReady={() => setReady(true)} />
      </PDFViewer>
    </div>
  );
}
