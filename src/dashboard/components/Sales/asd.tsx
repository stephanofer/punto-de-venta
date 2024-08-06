{selectedProduct && (
    <div className="grid gap-4 w-[100%] justify-items-center">
      <div className="w-[60%]">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Cantidad</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar Cantidad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Caja</SelectItem>
                <SelectItem value="2">1 Unidad</SelectItem>
                <SelectItem value="3">3 Unidades</SelectItem>
                <SelectItem value="4">6 Unidades</SelectItem>
                <SelectItem value="5">12 Unidades</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="price">Cantidad de Cajas</Label>
            <Input
              disabled={true}
              id="price"
              type="number"
              defaultValue={0}
            />
          </div>
        </div>
        <div className="mt-2 w-[100%] ">
          <div className="mt-2 w-[50%] mx-auto">
            <Label htmlFor="price">Precio</Label>
            <Input
              id="price"
              type="number"
              defaultValue={selectedProduct.price}
            />
          </div>
        </div>
      </div>
      <Button className="flex place-self-end h-11 w-[200px] rounded-md px-8">
        Agregar Producto
      </Button>
    </div>
  )}