import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
export default function Navbar() {
  console.log("C: NavBar");

  return (
    <header className="flex flex-row w-full bg-background border-b h-16 px-4  items-center fixed top-0 text-foreground ">
      <div className="flex flex-grow basis-0">
        <Link className="text-lg font-bold truncate" to={"/"}>
          Punto de Venta
        </Link>
      </div>

      <nav>
        <ul className="hidden md:flex flex-row">
          <li>
            <Link
              className="inline-block px-4 py-2 hover:bg-primary/10 rounded-md "
              to={"/login"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="inline-block px-4 py-2 hover:bg-primary/10 rounded-md"
              to={"/about"}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="inline-block px-4 py-2 hover:bg-primary/10 rounded-md"
              to={"/services"}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="inline-block px-4 py-2 hover:bg-primary/10 rounded-md"
              to={"/contact"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="hidden md:flex flex-grow justify-end basis-0 ">
        <ul className="hidden md:flex">
          <li>
            <Link
              className="inline-block px-4 py-2 hover:bg-primary/10 rounded-md "
              to={"/"}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="inline-block px-4 py-2 hover:bg-primary/10 rounded-md "
              to={"/"}
            >
              Test
            </Link>
          </li>
          <li>
            <Link
              className="inline-block px-4 py-2 hover:bg-primary/10 rounded-md"
              to={"/"}
            >
              Hola
            </Link>
          </li>
        </ul>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <HamburgerMenuIcon className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-64 shadow-lg">
          <SheetHeader className="flex flex-col items-start">
            <SheetTitle className="text-lg font-bold truncate">Punto de Venta</SheetTitle>
            <SheetDescription>Seleccione una Opción</SheetDescription>
          </SheetHeader>

          <div className="flex flex-col space-y-4 p-4">
            <Link
              to={"/"}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to={"/"}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to={"/"}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              to={"/"}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
