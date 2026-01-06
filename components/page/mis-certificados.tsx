"use client";

import { CertificateCard } from "../card/certificate-card";
import { Grid } from "../grid";
import { useLocalStorage } from "@/lib/use-local-storage";
import { TypographyH2 } from "../typography";
import { useSyncExternalStore } from "react";

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
      <TypographyH2 className="first:mt-15">Mis certificados</TypographyH2>
      {savedLinks.length === 0 ? (
        <p>No hay certificados guardados.</p>
      ) : (
        <Grid>
          {savedLinks.map((link) => (
            <CertificateCard
              key={link.title}
              link={link}
              deleteUrl={deleteUrl}
            />
          ))}
        </Grid>
      )}
    </section>
  );
}
