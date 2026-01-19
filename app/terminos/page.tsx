import {
  TypographyH1,
  TypographyP,
  TypographyH2,
  TypographyList,
} from "@/components/typography";
import Link from "next/link";

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl scroll-m-30">
      <TypographyH1 className="my-10">
        Términos y Condiciones – Certificados de investidura para clubes
      </TypographyH1>

      <TypographyP>
        Bienvenido a <strong>Certificados de investidura para clubes</strong>.
        Al usar esta aplicación web, aceptas los siguientes términos y
        condiciones. Si no estás de acuerdo con alguno de ellos, te recomendamos
        no utilizar la aplicación.
      </TypographyP>

      <TypographyH2>Descripción del servicio</TypographyH2>

      <TypographyP>
        Certificados de investidura para clubes es una herramienta web diseñada
        para ayudar a los directores de clubes de Aventureros, Conquistadores y
        Guías Mayores adventistas a crear certificados de investidura de forma
        rápida y sencilla.
      </TypographyP>

      <TypographyP>
        La aplicación permite generar certificados personalizados y descargarlos
        para su uso en actividades del club.
      </TypographyP>

      <TypographyH2>Uso permitido</TypographyH2>

      <TypographyP>
        El uso de esta aplicación está permitido únicamente para fines
        educativos, organizativos y ceremoniales relacionados con los clubes
        adventistas.
      </TypographyP>

      <TypographyList>
        <li>Usar la aplicación de manera responsable</li>
        <li>Ingresar información correcta y adecuada</li>
        <li>Respetar el propósito del servicio</li>
      </TypographyList>

      <TypographyP>
        No está permitido usar la aplicación para fines ilegales, ofensivos o
        que puedan causar daño a terceros.
      </TypographyP>

      <TypographyH2>Responsabilidad sobre la información</TypographyH2>

      <TypographyP>
        El usuario es el único responsable de la información que ingresa en la
        aplicación, incluyendo nombres, fechas y demás datos utilizados para los
        certificados.
      </TypographyP>

      <TypographyP>
        Certificados de investidura para clubes no verifica ni modifica la
        información ingresada por el usuario.
      </TypographyP>

      <TypographyH2>Almacenamiento de datos</TypographyH2>

      <TypographyP>
        La aplicación no almacena datos en servidores ni bases de datos
        externas. Toda la información se guarda únicamente en el navegador del
        usuario.
      </TypographyP>

      <TypographyP>
        El usuario es responsable de cuidar, compartir o eliminar la información
        almacenada en su dispositivo.
      </TypographyP>

      <TypographyH2>Disponibilidad del servicio</TypographyH2>

      <TypographyP>
        Hacemos lo posible para que la aplicación esté disponible en todo
        momento, pero no garantizamos que el servicio funcione sin
        interrupciones o errores.
      </TypographyP>

      <TypographyP>
        El servicio puede ser modificado, suspendido o descontinuado en
        cualquier momento sin previo aviso.
      </TypographyP>

      <TypographyH2>Publicidad</TypographyH2>

      <TypographyP>
        La aplicación puede mostrar anuncios proporcionados por Google u otros
        proveedores. Estos anuncios ayudan a mantener el servicio disponible.
      </TypographyP>

      <TypographyP>
        Certificados de investidura para clubes no se hace responsable del
        contenido mostrado en los anuncios.
      </TypographyP>

      <TypographyH2>Propiedad del contenido</TypographyH2>

      <TypographyP>
        El diseño, funcionamiento y contenido de la aplicación pertenecen a sus
        desarrolladores. Los certificados generados pertenecen al usuario que
        los crea. Los diseños presentados son propiedad de sus respectivos
        autores y diseñadores.
      </TypographyP>

      <TypographyH2>Cambios en los términos</TypographyH2>

      <TypographyP>
        Estos términos y condiciones pueden actualizarse en cualquier momento.
        Las modificaciones serán publicadas en esta misma página.
      </TypographyP>

      <TypographyH2>Contacto</TypographyH2>

      <TypographyP>
        Si tienes dudas sobre estos términos y condiciones, puedes escribirnos
        al siguiente correo electrónico:{" "}
        <Link
          href="mailto:molinareynaldo952@gmail.com"
          className="text-blue-900 dark:text-blue-200 underline"
        >
          correo
        </Link>
        .
      </TypographyP>
    </div>
  );
}
