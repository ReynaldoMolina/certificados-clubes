"use client";

import { CertificateCard } from "../card/certificate-card";
import { Grid } from "../grid";
import { useLocalStorage } from "@/lib/use-local-storage";
import { TypographyH2 } from "../typography";
import { useSyncExternalStore } from "react";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export function MisCertificados() {
  const { savedLinks, deleteUrl } = useLocalStorage();

  function useMounted() {
    return useSyncExternalStore(
      () => () => {},
      () => true,
      () => false
    );
  }

  const mounted = useMounted();
  if (!mounted) return null;

  return (
    <section id="mis-certificados" className="flex flex-col gap-6 scroll-m-10">
      <TypographyH2>Mis certificados</TypographyH2>
      <Grid>
        {savedLinks.length === 0 ? (
          <Link href="/#diseños" className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex justify-center items-center rounded shadow bg-muted aspect-660/510">
                <ArrowDown className="text-muted-foreground" />
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex flex-col gap-2 flex-1">
                <span className="text-sm hover:underline">
                  No hay certificados
                </span>
                <span className="text-xs text-muted-foreground">
                  Utiliza uno de los diseños de abajo.
                </span>
              </div>
            </div>
          </Link>
        ) : (
          <>
            {savedLinks.map((link) => (
              <CertificateCard
                key={link.title}
                link={link}
                deleteUrl={deleteUrl}
              />
            ))}
          </>
        )}
      </Grid>
    </section>
  );
}
