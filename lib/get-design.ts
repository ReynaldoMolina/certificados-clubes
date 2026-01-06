import { designs } from "./designs";

export function getDesign(designId: number | string) {
  const design = designs.find((d) => d.id === Number(designId));

  return { design };
}
