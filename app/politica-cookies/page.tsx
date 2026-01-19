import {
  TypographyH1,
  TypographyP,
  TypographyH2,
} from "@/components/typography";
import Link from "next/link";

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl scroll-m-30">
      <TypographyH1 className="my-10">Política de cookies</TypographyH1>

      <TypographyP>
        En <strong>Certificados de investidura para clubes</strong> utilizamos
        cookies y tecnologías similares para mejorar la experiencia del usuario
        y mostrar anuncios.
      </TypographyP>

      <TypographyH2>¿Qué son las cookies?</TypographyH2>

      <TypographyP>
        Las cookies son pequeños archivos que se guardan en tu navegador cuando
        visitas un sitio web. Sirven para que el sitio funcione correctamente y
        para recordar ciertas preferencias.
      </TypographyP>

      <TypographyH2>¿Qué tipos de cookies usamos?</TypographyH2>

      <TypographyP>
        Esta aplicación utiliza los siguientes tipos de cookies:
      </TypographyP>

      <TypographyP>
        <strong>Cookies necesarias:</strong> permiten que la aplicación funcione
        correctamente. Sin ellas, algunas partes del sitio no funcionarían.
      </TypographyP>

      <TypographyP>
        <strong>Cookies de publicidad:</strong> pueden ser utilizadas por Google
        y otros proveedores para mostrar anuncios relevantes según los intereses
        del usuario.
      </TypographyP>

      <TypographyH2>Cookies de terceros</TypographyH2>

      <TypographyP>
        La aplicación puede mostrar anuncios proporcionados por Google. Estos
        servicios pueden usar cookies para personalizar la publicidad, de
        acuerdo con sus propias políticas de privacidad.
      </TypographyP>

      <TypographyP>
        Certificados de investidura para clubes no controla el uso de cookies
        que realizan estos servicios externos.
      </TypographyP>

      <TypographyH2>Cómo administrar las cookies</TypographyH2>

      <TypographyP>
        Puedes configurar tu navegador para bloquear o eliminar las cookies en
        cualquier momento. Ten en cuenta que desactivar las cookies puede
        afectar el funcionamiento de algunas partes del sitio.
      </TypographyP>

      <TypographyH2>Cambios en este aviso</TypographyH2>

      <TypographyP>
        Este aviso de cookies puede actualizarse para reflejar cambios en la
        aplicación o en los servicios de publicidad. Cualquier cambio será
        publicado en esta misma página.
      </TypographyP>

      <TypographyH2>Contacto</TypographyH2>

      <TypographyP>
        Si tienes preguntas sobre el uso de cookies en esta aplicación, puedes
        escribirnos al siguiente correo electrónico:{" "}
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
