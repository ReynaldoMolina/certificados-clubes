import React from "react";

interface TemplateGridProps {
  children: React.ReactNode;
}

export function Grid({ children }: TemplateGridProps) {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-4">
      {children}
    </div>
  );
}
