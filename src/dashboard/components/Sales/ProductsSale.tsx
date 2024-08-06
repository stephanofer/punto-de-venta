import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {ChevronDown} from 'lucide-react'

export function ProductsSale() {
  return (
    <Card>
      <ScrollArea className="md:h-[420px] xl:h-[650px]">
        <CardHeader className="px-7">
          <CardTitle>Ticket #3232</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Codigo</TableHead>
                <TableHead>Producto</TableHead>
                <TableHead>Precio Venta</TableHead>
                <TableHead>Cantidad</TableHead>
                <TableHead>Importe</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>COD123</TableCell>
                <TableCell className="font-medium">
                  Laser Lemonade Machine
                </TableCell>
                <TableCell>S/ 499.99</TableCell>
                <TableCell>30</TableCell>
                <TableCell>S/ 499.99</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <ChevronDown className="w-4 h-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </ScrollArea>
    </Card>
  );
}
