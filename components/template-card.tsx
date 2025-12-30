import Image from "next/image";
import Link from "next/link";

interface TemplateCardProps {
  href: string;
  thumbnail: string;
}

export function TemplateCard({ href, thumbnail }: TemplateCardProps) {
  return (
    <Link
      href={href}
      className="flex flex-col gap-2 w-full justify-center items-center aspect-auto bg-muted rounded-sm p-4 hover:bg-foreground/10 dark:hover:bg-foreground/20 transition"
    >
      <Image
        width={300}
        height={200}
        src={thumbnail}
        alt="Thumbnail"
        className="shadow-sm"
      />
    </Link>
  );
}
