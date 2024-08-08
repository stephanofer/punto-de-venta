import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Acme Lemonade Maker",
    description: "High-quality lemonade maker",
    price: 49.99,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Gizmo 3000 Blender",
    description: "Powerful blender for smoothies and shakes",
    price: 79.99,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Deluxe Coffee Grinder",
    description: "Freshly grind your coffee beans",
    price: 39.99,
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Mega Mixer Pro",
    description: "Heavy-duty stand mixer for baking",
    price: 99.99,
    image: "/placeholder.svg",
  },
];

export function AddProduct() {
  const [firstOpen, setFirstOpen] = useState(false);
  const [twoOpen, setTwoOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  console.log(selectedProduct);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleFirstOpen = () => {
    console.log("Entrando Open");
    setSelectedProduct(null);
    setFirstOpen((firstOpen) => !firstOpen);
  };

  const handleTwoOpen = () => {
    console.log("Entrnado Segundo");
    setSelectedProduct(null);
    setTwoOpen((twoOpen) => !twoOpen);
  };

  return (
    <div>
      <Dialog open={firstOpen} onOpenChange={handleFirstOpen}>
        {" "}
        <DialogTrigger asChild>
          <Button className="h-11 rounded-md px-5">
            Agregar Producto
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 ml-1">
              <span className="text-xs">F10</span>
            </kbd>
          </Button>
        </DialogTrigger>
        <DialogContent className="md:max-w-[1200px] xl:max-w-[1500px]">
          <DialogHeader>
            <DialogTitle>Agregar un Producto</DialogTitle>
            <DialogDescription>
              Busque un producto para agregar a la venta
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Buscar Producto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-12"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <Search className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>
            <Card>
              <ScrollArea className="md:h-[420px] xl:h-[650px]">
                <div className="grid gap-2">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Codigo</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Precio Caja</TableHead>
                        <TableHead>Precio Unidad</TableHead>
                        <TableHead>Precio Cuarto</TableHead>
                        <TableHead>Precio Media Docena</TableHead>
                        <TableHead>Precio Docena</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="cursor-pointer">
                      <TableRow
                        onClick={() => {
                          setSelectedProduct({
                            id: 1,
                            description: "asd",
                            image: "asd",
                            name: "asd",
                            price: 10,
                          });
                          setFirstOpen((firstOpen) => !firstOpen);
                          setTwoOpen((twoOpen) => !twoOpen);
                        }}
                      >
                        <TableCell>test</TableCell>
                        <TableCell>
                          testdsadadasddsadasjdiasjfdpajdkpoaskdpoasd
                        </TableCell>
                        <TableCell>S/100.00</TableCell>
                        <TableCell>S/100.00</TableCell>
                        <TableCell>S/100.00</TableCell>
                        <TableCell>S/100.00</TableCell>
                        <TableCell>S/100.00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </ScrollArea>
            </Card>
          </div>
        </DialogContent>
      </Dialog>
      {/* as  */}
      <Dialog open={twoOpen} onOpenChange={handleTwoOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                defaultValue={selectedProduct?.name}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
