import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/ModeToggle";
import { LinkUri } from "@/types";
import { HamburgerMenuIcon, ArchiveIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

export function Navbar() {
  console.log("C: NavBar Dashboard");

  const links: LinkUri[] = [
    {
      label: "Productos",
      uri: "/",
    },
    {
      label: "Ordenes",
      uri: "/",
    },
    {
      label: "Ventas",
      uri: "/",
    },
    {
      label: "Inventario",
      uri: "/",
    },
    {
      label: "Reportes",
      uri: "/",
    },
  ];

  return (
    <header className="flex flex-row w-full bg-background sticky top-0 border-b h-20  px-4 items-center text-foreground">
      <nav className="flex flex-grow basis-0 items-center">
        <Link className="text-lg font-bold truncate" to={"/dashboard"}>
          <ArchiveIcon className="w-6 h-6 mr-3" />
        </Link>
        <ul className="hidden md:flex flex-row text-md">
          {links.map((link) => (
            <li>
              <Link
                className="inline-block px-4 py-2 hover:bg-primary/10 rounded-md "
                to={link.uri}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="hidden md:flex md:flex-grow md:justify-end md:basis-0">
        <div className="ml-2 md:flex flex-row items-center">
          <ModeToggle />
        </div>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <HamburgerMenuIcon className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <div className="ml-2  md:hidden">
          <ModeToggle />
        </div>
        <SheetContent side="right" className="w-64 shadow-lg">
          <SheetHeader className="flex flex-col items-start">
            <SheetTitle className="text-lg font-bold truncate">
              Punto de Venta
            </SheetTitle>
            <SheetDescription>Seleccione una Opción</SheetDescription>
          </SheetHeader>

          <div className="flex flex-col space-y-4 p-4">
            {links.map((link) => (
              <Link
                to={link.uri}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
