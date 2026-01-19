"use client";

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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { navigationLinks, sideMenuLinks } from "@/lib/links";

export function Header() {
  return (
    <header className="flex w-full sticky top-0 bg-background z-50 px-4 py-3">
      <NavigationMenu viewport={false} className="relative hidden md:flex">
        <NavigationMenuList className="flex-wrap">
          {navigationLinks.map((e) => {
            if (e.items.length > 0)
              return (
                <NavigationMenuItem key={e.label}>
                  <NavigationMenuTrigger>{e.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-50">
                      {e.items.map((i) => (
                        <li key={i.label}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={i.url}
                              className="block rounded-md p-2 hover:bg-muted"
                            >
                              {i.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );

            return (
              <NavigationMenuItem key={e.label}>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href={e.url}>{e.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>

      <Sheet>
        <SheetTrigger asChild className="block md:hidden">
          <Button variant="ghost" className="flex">
            <Menu className="size-4" />
            Menú
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Menú</SheetTitle>
          </SheetHeader>

          <nav className="grid flex-1 auto-rows-min gap-1 px-4">
            {sideMenuLinks.map((e) => (
              <Button
                key={e.label}
                variant="link"
                asChild
                className="justify-start"
              >
                <Link href={e.url}>{e.label}</Link>
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <ToggleTheme className="ml-auto" />
    </header>
  );
}
