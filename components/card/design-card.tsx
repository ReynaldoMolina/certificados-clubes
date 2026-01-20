import { Design } from "@/lib/designs";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface DesignCardProps {
  design: Design;
}

export function DesignCard({ design }: DesignCardProps) {
  return (
    <Link
      href={`/preview?design_id=${design.id}`}
      scroll={false}
      aria-label={`Diseño ${design.id}`}
      className="flex flex-col gap-2"
    >
      <Image
        width={660}
        height={510}
        src={`/${design.id}/preview/1.png`}
        alt="Thumbnail"
        className="rounded shadow w-full"
      />
      <Button variant="secondary" type="button" className="cursor-pointer">
        <Eye />
        Ver diseño
      </Button>
    </Link>
  );
}
