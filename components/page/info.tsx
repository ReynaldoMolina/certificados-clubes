import Link from "next/link";
import { TypographyH2 } from "../typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export function Info() {
  return (
    <section id="info" className="flex flex-col w-full gap-6 scroll-m-10">
      <TypographyH2 className="mt-15">Información</TypographyH2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>¿Cómo funciona la página?</AccordionTrigger>
          <AccordionContent>
            Elige un diseño, añade los nombres y las clases de los miembros
            investidos, luego descarga los certificados en PDF.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>¿Encontraste un problema?</AccordionTrigger>
          <AccordionContent>
            Puedes enviarme un correo explicando la situación:{" "}
            <Link
              href="mailto:molinareynaldo952@gmail.com"
              className="text-blue-900 dark:text-blue-200 hover:underline"
            >
              molinareynaldo952@gmail.com
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>¿Quieres agregar un diseño?</AccordionTrigger>
          <AccordionContent>
            Puedes enviarme un correo con imágenes de referencia:{" "}
            <Link
              href="mailto:molinareynaldo952@gmail.com"
              className="text-blue-900 dark:text-blue-200 hover:underline"
            >
              molinareynaldo952@gmail.com
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>¿Por qué hay anuncios?</AccordionTrigger>
          <AccordionContent>
            Los anuncios ayudan a mantener el proyecto activo, pero si quieres
            apoyar directamente el desarrollo puedes hacerlo por{" "}
            <Link
              href="mailto:molinareynaldo952@gmail.com"
              className="text-blue-900 dark:text-blue-200 hover:underline"
            >
              PayPal
            </Link>
            .
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
