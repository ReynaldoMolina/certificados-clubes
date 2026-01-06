import { Design } from "@/lib/designs";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface DesignCardProps {
  design: Design;
}

export function DesignCard({ design }: DesignCardProps) {
  console.log(design.id);

  return (
    <Link
      href={`/preview?design_id=${design.id}`}
      scroll={false}
      className="flex relative"
    >
      <Image
        width={660}
        height={510}
        src={`/${design.id}/preview/1.png`}
        alt="Thumbnail"
        className="rounded shadow w-full"
      />
      <Eye className="flex absolute right-2 top-2 size-6 bg-muted/80 p-1 rounded-md text-muted-foreground dark:text-white" />
    </Link>
  );
}
