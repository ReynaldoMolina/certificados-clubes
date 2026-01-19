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
        Política de Privacidad – Certificados de investidura para clubes
      </TypographyH1>

      <TypographyP>
        En <strong>Certificados de investidura para clubes</strong>, respetamos
        la privacidad de los directores y clubes que usan nuestra aplicación.
        Esta herramienta fue creada para ayudar a los clubes de Aventureros,
        Conquistadores y Guías Mayores adventistas a generar certificados de
        investidura de forma rápida y sencilla.
      </TypographyP>

      <TypographyH2>¿Qué información se usa?</TypographyH2>

      <TypographyP>
        Para crear los certificados de investidura, la aplicación permite
        ingresar algunos datos básicos:
      </TypographyP>

      <TypographyList>
        <li>Nombre del niño, joven o miembro del club</li>
        <li>Tipo de club: Aventureros, Conquistadores o Guías Mayores</li>
        <li>Clase de investidura</li>
        <li>Fecha y lugar de la investidura</li>
        <li>Dirección web (URL) del logo del club (opcional)</li>
      </TypographyList>

      <TypographyP>
        Estos datos se usan <strong>solo</strong> para generar el certificado
        solicitado por el usuario.
      </TypographyP>

      <TypographyH2>¿Dónde se guardan los datos?</TypographyH2>

      <TypographyP>
        La información ingresada <strong>no se envía a ningún servidor</strong>{" "}
        ni se guarda en bases de datos externas. Todos los datos se almacenan
        únicamente en el navegador del usuario.
      </TypographyP>

      <TypographyP>
        Los certificados permanecen guardados en el dispositivo del usuario
        hasta que él mismo decida borrarlos.
      </TypographyP>

      <TypographyP>
        Cuando se comparte un enlace, los datos de personas viajan dentro del
        enlace de forma segura y comprimida. La aplicación no guarda ni conserva
        esa información.
      </TypographyP>

      <TypographyH2>Información de menores</TypographyH2>

      <TypographyP>
        La aplicación puede incluir nombres de menores de edad únicamente con
        fines organizativos y ceremoniales. No se realiza seguimiento, análisis
        ni uso comercial de esta información. El control de los datos siempre
        pertenece al usuario.
      </TypographyP>

      <TypographyH2>Cuentas de usuario</TypographyH2>

      <TypographyP>
        Actualmente, <strong>no es necesario crear una cuenta</strong> para usar
        Certificados de investidura para clubes. Tampoco se utiliza inicio de
        sesión con Google u otros servicios.
      </TypographyP>

      <TypographyH2>Publicidad</TypographyH2>

      <TypographyP>
        La aplicación puede mostrar anuncios proporcionados por Google. Estos
        anuncios pueden usar cookies u otras tecnologías para mostrar publicidad
        relacionada con los intereses del usuario, según las políticas de
        privacidad de Google.
      </TypographyP>

      <TypographyP>
        Certificados de investidura para clubes no controla cómo Google recopila
        o utiliza esa información.
      </TypographyP>

      <TypographyH2>Uso internacional</TypographyH2>

      <TypographyP>
        Esta aplicación está disponible para uso internacional y está dirigida
        especialmente a clubes adventistas.
      </TypographyP>

      <TypographyH2>Cambios en esta política</TypographyH2>

      <TypographyP>
        Esta política de privacidad puede cambiar si la aplicación se actualiza
        o mejora. Cualquier cambio será publicado en esta misma página.
      </TypographyP>

      <TypographyH2>Contacto</TypographyH2>

      <TypographyP>
        Si tienes dudas sobre esta política de privacidad, puedes escribirnos al
        siguiente correo electrónico:{" "}
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
