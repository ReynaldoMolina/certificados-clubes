"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface PreviewPageProps {
  designId: string;
}

export function PreviewPage({ designId }: PreviewPageProps) {
  const router = useRouter();

  return (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-sm">Vista previa</DialogTitle>
          <DialogDescription>
            <span className="inline-flex gap-1 items-center sm:hidden">
              Desliza para ver todas las clases{" "}
              <ArrowRight className="size-4" />
            </span>
            <span className="hidden sm:block">
              Click en las flechas para ver todas las clases
            </span>
          </DialogDescription>
        </DialogHeader>
        <Carousel className="w-full max-w-sm mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {Array.from({ length: 6 }).map((_, index) => {
              const src = `/${designId}/preview/${index + 1}.png`;

              return (
                <CarouselItem key={index}>
                  <Card className="p-0">
                    <CardContent className="p-0">
                      <Image
                        src={src}
                        alt={`Preview ${index + 1}`}
                        width={660}
                        height={510}
                        className="rounded object-contain"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
        <DialogFooter>
          <Button className="w-full max-w-sm mx-auto" asChild>
            <Link href={`/editor?design_id=${designId}&title=Certificados`}>
              Usar diseño
              <ExternalLink />
            </Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
