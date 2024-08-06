import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";

export function SaleSummary() {
  return (
    <div className="flex items-center gap-4 ml-auto ">
      <div className="flex items-center gap-2">
        <ShoppingCartIcon className="w-5 h-5 text-muted-foreground" />
        <span>2 Productos</span>
        <span className="font-bold text-xl">S/999.98</span>
      </div>
      <Button size={"lg"}>Realizar Venta</Button>
    </div>
  );
}
