import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface PdfProps {
  disabled: boolean;
}

export function ViewPdf({ disabled }: PdfProps) {
  const searchParams = useSearchParams();
  const url = searchParams.toString();

  return (
    <Button
      variant="secondary"
      className="hidden md:flex w-full py-10"
      disabled={disabled}
      asChild={!disabled}
    >
      {disabled ? (
        <>
          <Printer />
          Ver
        </>
      ) : (
        <Link href={`/pdf?${url}`} target="_blank">
          <Printer />
          <span className="hidden sm:block">Ver</span>
        </Link>
      )}
    </Button>
  );
}
