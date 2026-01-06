import { designs } from "@/components/design-pdf/designs-index";
import { Button } from "@/components/ui/button";
import { useCertificate } from "@/lib/use-certificate";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Download } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

interface PdfProps {
  disabled: boolean;
}

export function DownloadPdf({ disabled }: PdfProps) {
  const { members, info } = useCertificate();
  const searchParams = useSearchParams();
  const designId = searchParams.get("design_id");
  const title = searchParams.get("title") ?? "";

  const Design = useMemo(
    () => designs[designId as keyof typeof designs],
    [designId]
  );

  return (
    <Button variant="outline" disabled={disabled} asChild={!disabled}>
      {disabled ? (
        <>
          <Download />
          <span className="hidden sm:block">Descargar</span>
        </>
      ) : (
        <PDFDownloadLink
          document={<Design members={members} info={info} />}
          fileName={title}
        >
          <Download />
          <span className="hidden sm:block">Descargar</span>
        </PDFDownloadLink>
      )}
    </Button>
  );
}
