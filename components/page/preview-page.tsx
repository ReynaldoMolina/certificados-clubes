"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
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
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { designs } from "@/lib/designs";
import { clases, clasesAventureros } from "@/lib/data";
import { useEffect, useState } from "react";

interface PreviewPageProps {
  designId: string;
}

export function PreviewPage({ designId }: PreviewPageProps) {
  const router = useRouter();

  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const design = designs.find((d) => d.id === Number(designId));

  const clasesDelDiseno =
    design?.club === "Conquistador" ? clases : clasesAventureros;

  return (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-sm">Vista previa</DialogTitle>
          <DialogDescription>
            <div className="inline-flex gap-1 items-center sm:hidden">
              <ArrowLeft className="size-4" />
              <span>Desliza para ver todas las clases</span>
              <ArrowRight className="size-4" />
            </div>
            <span className="hidden sm:block">
              Click en las flechas para ver todas las clases.
            </span>
          </DialogDescription>
        </DialogHeader>
        <Carousel
          className="w-full max-w-sm mx-auto"
          opts={{ loop: true }}
          setApi={setApi}
        >
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

        {clasesDelDiseno?.[currentIndex] && (
          <p className="text-center text-sm font-medium text-muted-foreground">
            {clasesDelDiseno[currentIndex].label}
          </p>
        )}

        <DialogFooter>
          <Button className="w-full max-w-sm mx-auto" asChild>
            <Link href={`/editor?design_id=${designId}&title=Certificados`}>
              <ExternalLink />
              Usar diseño
            </Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
