import Link from "next/link";
import { Button } from "./ui/button";
import { ToggleTheme } from "./toggle-theme";
import Logo from "@/public/logo.svg";

export function Header() {
  return (
    <header className="flex sticky top-0 bg-background z-50 border-b">
      <div className="flex items-center gap-1 w-full max-w-5xl mx-auto px-4 py-3">
        <Button variant="ghost" size="icon" asChild className="rounded-full">
          <Link href="/">
            <Logo className="size-7" />
          </Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/#mis-certificados">Mis certificados</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/#diseños">Diseños</Link>
        </Button>
        <ToggleTheme className="ml-auto" />
      </div>
    </header>
  );
}
