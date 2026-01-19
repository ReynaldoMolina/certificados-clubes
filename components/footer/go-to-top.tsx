"use client";

import { ChevronUp } from "lucide-react";
import { Button } from "../ui/button";

export function GoToTop() {
  return (
    <Button
      variant="outline"
      className="w-fit"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <ChevronUp />
      Volver arriba
    </Button>
  );
}
