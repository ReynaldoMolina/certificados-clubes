import Link from "next/link";
import { TypographyH1, TypographyP } from "../typography";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <div className="flex flex-col gap-6 items-center max-w-2xl mx-auto my-15">
      <TypographyH1 className="text-5xl">
        Certificados de investidura para clubes
      </TypographyH1>
      <TypographyP className="not-first:mt-0 text-center">
        Genera cerfiticados para tu investidura de clubes de Aventureros,
        Conquistadores y Guías Mayores en PDF de manera fácil, rápida y gratis.
      </TypographyP>
      <div className="inline-flex gap-3">
        <Button asChild>
          <Link href="/#diseños">Ver diseños</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/#info">Información</Link>
        </Button>
      </div>
    </div>
  );
}
