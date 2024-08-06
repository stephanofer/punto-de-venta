import { AddProduct } from "./components/Sales/AddProduct";
import { SaleSummary } from "./components/Sales/SaleSummary";
import { ProductsSale } from "./components/Sales/ProductsSale";

export function DashboardContainer() {
  return (
    <div
      className="flex flex-col bg-background"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <div className="flex items-center h-16 px-4 border-b ">
        <AddProduct />
      </div>
      <main className="p-5">
        <ProductsSale />
      </main>

      <footer className="flex items-center h-20 border-t px-6 w-full absolute bottom-0 bg-background text-foreground">
        <SaleSummary />
      </footer>
    </div>
  );
}
