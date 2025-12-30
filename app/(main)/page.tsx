import { CertificateCard } from "@/components/certificate-card";
import {
  DesignGridSubtitle,
  DesignGrid,
  DesignGridTitle,
} from "@/components/design-grid";
import { TemplateCard } from "@/components/template-card";
import { TypographyH1, TypographyP } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { templates } from "@/lib/templates";
import { Plus } from "lucide-react";
import Link from "next/link";

export interface Certificate {
  club: string;
  fecha: string;
  lugar: string;
}

const certificate: Certificate = {
  club: "Conquistadores",
  fecha: "2025",
  lugar: "León, Nicaragua",
};

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-6 items-center max-w-2xl mx-auto my-15">
        <TypographyH1 className="text-5xl">
          Certificados de investidura
        </TypographyH1>
        <TypographyP className="not-first:mt-0 text-center">
          Crea cerfiticados para tu investidura de clubes de manera fácil y
          rápida.
        </TypographyP>
        <div className="inline-flex gap-3">
          <Button asChild>
            <Link href="/#plantillas">
              <Plus />
              Empezar
            </Link>
          </Button>
          <Button variant="ghost">Información</Button>
        </div>
      </div>

      <section
        id="mis-certificados"
        className="flex flex-col gap-6 scroll-m-10"
      >
        <DesignGridTitle>Mis certificados</DesignGridTitle>
        <DesignGrid>
          <CertificateCard href="/plantilla" certificado={certificate} />
        </DesignGrid>
      </section>

      <section
        id="plantillas"
        className="flex flex-col w-full gap-6 scroll-m-10"
      >
        <DesignGridTitle>Plantillas</DesignGridTitle>
        <DesignGridSubtitle>Aventureros</DesignGridSubtitle>
        <DesignGrid>
          {templates.map((t) => (
            <TemplateCard
              key={t.id}
              href={`/plantilla/${t.id}`}
              thumbnail={t.thumbnail}
            />
          ))}
        </DesignGrid>

        <DesignGridSubtitle>Conquistadores / Guías Mayores</DesignGridSubtitle>
        <DesignGrid>
          <TemplateCard href="#" thumbnail="/thumbnails/document-1.png" />
        </DesignGrid>
      </section>
    </>
  );
}
