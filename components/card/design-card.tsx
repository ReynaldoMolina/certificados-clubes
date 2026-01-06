import { Design } from "@/lib/designs";
import Image from "next/image";
import Link from "next/link";

interface DesignCardProps {
  design: Design;
}

export function DesignCard({ design }: DesignCardProps) {
  console.log(design.id);

  return (
    <Link href={`/preview?design_id=${design.id}`} scroll={false}>
      <Image
        width={660}
        height={510}
        src={`/${design.id}/preview/1.png`}
        alt="Thumbnail"
        className="rounded shadow w-full"
      />
    </Link>
  );
}
