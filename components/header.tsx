import Link from "next/link";
import { Button } from "./ui/button";
import { ToggleTheme } from "./toggle-theme";
import Logo from "@/public/logo.svg";

export function Header() {
  return (
    <header className="flex items-center sticky top-0 gap-1 w-full max-w-5xl mx-auto px-4 py-3 bg-background">
      <Button variant="ghost" size="icon" asChild>
        <Link href="/">
          <Logo className="size-7" />
        </Link>
      </Button>
      <Button variant="ghost" asChild>
        <Link href="/#mis-certificados">Mis certificados</Link>
      </Button>
      <Button variant="ghost" asChild>
        <Link href="/#plantillas">Plantillas</Link>
      </Button>
      <ToggleTheme className="ml-auto" />
    </header>
  );
}
