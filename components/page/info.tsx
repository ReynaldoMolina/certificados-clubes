import Link from "next/link";
import {
  TypographyH2,
  TypographyH3,
  TypographyList,
  TypographyP,
} from "../typography";

export function Info() {
  return (
    <section id="info" className="flex flex-col w-full scroll-m-10">
      <TypographyH2 className="mt-15">Información</TypographyH2>

      <TypographyP>
        Las investiduras en los clubes de Aventureros y Conquistadores
        representan un momento especial de reconocimiento al esfuerzo,
        crecimiento y compromiso espiritual de niños y jóvenes. Cada una es un
        paso importante en su formación, fortalece sus valores, disciplina y
        sentido de pertenencia al club.
      </TypographyP>

      <TypographyH3>¿Cómo te ayuda esta página?</TypographyH3>
      <TypographyP>
        Para los directores, crear los certificados puede ser una tarea que
        consume tiempo y requiere mucha atención al detalle. Quisimos
        simplificar este proceso, permitiendo crear certificados de investidura
        de forma rápida y profesional, para que los líderes puedan enfocarse en
        lo más importante: guiar, motivar y acompañar a sus clubes.
      </TypographyP>

      <TypographyH3>Cómo generar tus certificados paso a paso</TypographyH3>
      <TypographyList>
        <li>
          Selecciona un diseño de acuerdo al club (Aventureros o
          Conquistadores/Guías Mayores).
        </li>
        <li>Rellena los datos de la investidura.</li>
        <li>Añade los nombres y las clases de los miembros investidos.</li>
        <li>Descarga el PDF listo para imprimir.</li>
      </TypographyList>

      <TypographyH3>¿Quieres agregar un diseño?</TypographyH3>
      <TypographyP>
        Con gusto, puedes enviarnos imágenes de referencia a nuestro{" "}
        <Link
          href="mailto:molinareynaldo952@gmail.com?subject=Certificados%20investidura%20-%20Diseño%20nuevo"
          className="text-blue-900 dark:text-blue-200 underline"
        >
          correo
        </Link>
        .
      </TypographyP>

      <TypographyH3>¿Encontraste un problema?</TypographyH3>
      <TypographyP>
        Explícanos la situación a nuestro{" "}
        <Link
          href="mailto:molinareynaldo952@gmail.com?subject=Certificados%20investidura%20-%20Bug"
          className="text-blue-900 dark:text-blue-200 underline"
        >
          correo
        </Link>
        .
      </TypographyP>

      <TypographyH3>¿Por qué hay anuncios?</TypographyH3>
      <TypographyP>
        Los anuncios ayudan a mantener el proyecto activo, pero si quieres
        apoyar directamente el desarrollo puedes hacerlo por{" "}
        <Link
          href="mailto:molinareynaldo952@gmail.com"
          className="text-blue-900 dark:text-blue-200 underline"
        >
          PayPal
        </Link>
        .
      </TypographyP>
    </section>
  );
}
