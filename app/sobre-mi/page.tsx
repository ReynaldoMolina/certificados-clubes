import { TypographyH1, TypographyP } from "@/components/typography";
import Image from "next/image";

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl scroll-m-30">
      <TypographyH1 className="my-10">Sobre mí</TypographyH1>

      <div className="flex w-full flex-col md:flex-row gap-10">
        <Image
          src="/me.png"
          width={421}
          height={420}
          alt="Me"
          className="mx-auto rounded-full shrink-0 size-50 bg-muted"
        />

        <div>
          <TypographyP>
            Me llamo Reynaldo Molina, miembro del Club León de Judá, los saludo
            desde Nicaragua. Soy desarrollador web con experiencia en clubes
            adventistas, he asistido desde el año 2010 y ayudado a los
            dirigentes desde el año 2019.
          </TypographyP>
          <TypographyP>
            A veces los dirigentes pueden estar bastante ocupados con otras
            actividades de su club y resulta algo complicado estar pendiente de
            todas las áreas, especialmente si tu equipo es reducido. Esta
            herramienta está pensada para esas personas, para poder ayudarlas
            aunque sea un poco en su importante labor.
          </TypographyP>
          <TypographyP>
            En la parte de abajo de la página dejo mi contacto, ¡saludos!
          </TypographyP>
        </div>
      </div>
    </div>
  );
}
