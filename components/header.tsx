import Link from "next/link";
import { Button } from "./ui/button";
import { ToggleTheme } from "./toggle-theme";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="flex sticky top-0 bg-background z-50 px-4 py-3">
      <div className="hidden md:flex items-center gap-1 w-full max-w-5xl mx-auto">
        <HeaderLinks />
      </div>

      <Sheet>
        <SheetTrigger asChild className="block md:hidden">
          <Button variant="ghost">
            <Menu className="size-4" />
            Menú
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Menú</SheetTitle>
          </SheetHeader>

          <nav className="grid flex-1 auto-rows-min gap-1 px-4">
            <HeaderLinks mobile />
          </nav>
        </SheetContent>
      </Sheet>
      <ToggleTheme className="ml-auto" />
    </header>
  );
}

interface HeaderLinksProps {
  mobile?: boolean;
}

function HeaderLinks({ mobile }: HeaderLinksProps) {
  return (
    <>
      <Button
        variant="ghost"
        asChild
        className={cn(mobile ? "justify-start" : "")}
      >
        <Link href="/">Inicio</Link>
      </Button>
      <Button
        variant="ghost"
        asChild
        className={cn(mobile ? "justify-start" : "")}
      >
        <Link href="/#mis-certificados">Mis certificados</Link>
      </Button>
      <Button
        variant="ghost"
        asChild
        className={cn(mobile ? "justify-start" : "")}
      >
        <Link href="/#diseños">Diseños</Link>
      </Button>
      <Button
        variant="ghost"
        asChild
        className={cn(mobile ? "justify-start" : "")}
      >
        <Link href="/#info">Información</Link>
      </Button>
    </>
  );
}
