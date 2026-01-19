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

export function Header() {
  return (
    <header className="flex w-full sticky top-0 bg-background z-50 px-4 py-3">
      <div className="hidden md:flex items-center gap-1 w-full">
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
            <HeaderLinks className="justify-start" />
          </nav>
        </SheetContent>
      </Sheet>
      <ToggleTheme className="ml-auto" />
    </header>
  );
}

interface HeaderLinksProps {
  className?: string;
}

export function HeaderLinks({ className }: HeaderLinksProps) {
  return (
    <>
      <Button variant="link" asChild className={className}>
        <Link href="/">Inicio</Link>
      </Button>
      <Button variant="link" asChild className={className}>
        <Link href="/#mis-certificados">Mis certificados</Link>
      </Button>
      <Button variant="link" asChild className={className}>
        <Link href="/#diseños">Diseños</Link>
      </Button>
      <Button variant="link" asChild className={className}>
        <Link href="/#info">Información</Link>
      </Button>
    </>
  );
}
