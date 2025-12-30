import React from "react";

interface DesignGridProps {
  children: React.ReactNode;
}

export function DesignGrid({ children }: DesignGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
      {children}
    </div>
  );
}

export function DesignGridTitle({ children }: DesignGridProps) {
  return <h2 className="text-xl font-bold mt-12">{children}</h2>;
}

export function DesignGridSubtitle({ children }: DesignGridProps) {
  return <h3 className="text-md">{children}</h3>;
}
