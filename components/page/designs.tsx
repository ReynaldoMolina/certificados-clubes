"use client";

import { Fragment, useState } from "react";
import { Grid, GridSubtitle } from "../grid";
import { DesignCard } from "../card/design-card";
import { designs } from "@/lib/designs";
import { FilterPills } from "./filter-pills"; // Importa tus pills
import { TypographyH2 } from "../typography";

export function MyDesigns() {
  const [filter, setFilter] = useState("todos");

  // 1. Filtrar los diseños según la categoría seleccionada
  const filteredDesigns =
    filter === "todos" ? designs : designs.filter((d) => d.club === filter);

  // 2. Agrupar los diseños YA FILTRADOS
  const groupedTemplates = filteredDesigns.reduce<
    Record<string, typeof designs>
  >((acc, t) => {
    if (!acc[t.club]) acc[t.club] = [];
    acc[t.club].push(t);
    return acc;
  }, {});

  return (
    <section id="diseños" className="flex flex-col w-full gap-6 scroll-m-10">
      <TypographyH2 className="mt-15">Diseños</TypographyH2>
      <FilterPills active={filter} onChange={setFilter} />

      {Object.entries(groupedTemplates).length > 0 ? (
        Object.entries(groupedTemplates).map(([club, designsList]) => (
          <Fragment key={club}>
            <GridSubtitle>
              {club === "Aventurero"
                ? "Aventureros"
                : "Conquistadores / Guías Mayores"}
            </GridSubtitle>
            <Grid>
              {designsList.map((design) => (
                <DesignCard key={design.id} design={design} />
              ))}
            </Grid>
          </Fragment>
        ))
      ) : (
        <div className="py-20 text-center text-muted-foreground border-2 border-dashed rounded-xl">
          No se encontraron diseños en esta categoría.
        </div>
      )}
    </section>
  );
}
