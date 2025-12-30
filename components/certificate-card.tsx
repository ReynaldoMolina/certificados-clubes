import Link from "next/link";
import Image from "next/image";
import { Certificate } from "@/app/(main)/page";

interface CertificateCardProps {
  href: string;
  certificado: Certificate;
}

export function CertificateCard({ href, certificado }: CertificateCardProps) {
  return (
    <Link href={href} className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 w-full justify-center aspect-auto bg-muted rounded-sm p-4 hover:bg-foreground/10 dark:hover:bg-foreground/20 transition">
        <Image
          width={300}
          height={200}
          src="/thumbnails/document-1.png"
          alt="Thumbnail"
          className="shadow-sm"
        />
      </div>
      <span className="text-sm whitespace-nowrap truncate">
        {certificado.club}
      </span>
      <span className="text-xs text-muted-foreground whitespace-nowrap truncate">
        {certificado.fecha} • {certificado.lugar}
      </span>
    </Link>
  );
}
