import { MisCertificados } from "@/components/page/mis-certificados";
import { MyDesigns } from "@/components/page/designs";
import { Hero } from "@/components/page/hero";
import { Info } from "@/components/page/info";

export default function Page() {
  return (
    <>
      <Hero />
      <MisCertificados />
      <MyDesigns />
      <Info />
    </>
  );
}
