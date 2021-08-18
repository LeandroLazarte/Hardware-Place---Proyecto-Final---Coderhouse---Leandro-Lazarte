//Objeto Literal
class Tienda {
    constructor(nombre) {
        this.productos = [];
        this.nombre = nombre;
    }

    setProductos(pId) {
        //Busca el producto en la variable global
        let lista = JSON.parse(localStorage.getItem(LocalStorageProductos));
        let productoActual = lista.find((p) => p.productosId === pId);

        //Decrementa la cantidad de stock de productos
        productoActual.productosStock -= 1;
        localStorage.setItem(LocalStorageProductos, JSON.stringify(lista))

        let nuevoProducto = new Item(productoActual.productosId, 1,
            productoActual.productosNombre,
            productoActual.productosDescripcion,
            productoActual.productosImagen,
            productoActual.productosPrecio);

        if (this.productos.find(p => p.id === nuevoProducto.id) === undefined) {
            this.productos.push(nuevoProducto);
            localStorage.setItem("carrito", JSON.stringify(this.productos));

        } else(this.productos.find(p => p.id === nuevoProducto.id).cantidad += 1)
        localStorage.setItem("carrito", JSON.stringify(this.productos));

    }


}