const cargaProductos = () => {
    let listaProductos = "";
    let lista = JSON.parse(localStorage.getItem("productos"));

    lista.forEach(
        (p) =>
        (listaProductos += `
        <div id="${p.productosId}" class="card d-inline-flex p-2" style="width: 18rem">
        <img width="270px" height="250px" src="${p.productosImagen}" class="card-img-top" alt="${p.productosNombre}">
        <div class="card-body">
          <h5 class="card-title">${p.productosNombre}</h5>
          <p class="card-text">${p.productosDescripcion}</p>
          <p class="card-text">Stock: ${p.productosStock}</p>
          <p class="card-text">$${p.productosPrecio}</p>
        </div>
        <div class="card-body"">
        <button onclick="Comprar(${p.productosId})" type="button" class="btn btn-danger">Añadir al carrito</button>
        </div>
      </div>`)
    );
    $('#detalles').html(listaProductos);
};

const cargaAlCarrito = () => {
    var carritoVisible = "";
    tienda.productos.forEach(
        (p) => (carritoVisible += `
        <div id="card-carrito" class="card" style="width: 20rem;">
        <img width="200px" heigth="200px" src="${p.imagen}"alt="${p.nombre}">
          <div class="card-body">
            <h5 class="card-title">Nombre Producto: ${p.nombre}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Descripción: ${p.descripcion}</li>
            <li class="list-group-item">Cantidad:${p.cantidad}</li>
            <li class="list-group-item">Precio:${p.precio}</li>
          </ul>
        </div>`)
    )
    $('#esquema').html(carritoVisible)
};
const vaciarCarrito = () => {
    let carritoVacio = JSON.parse(localStorage.getItem("carrito"));
    let lista = JSON.parse(localStorage.getItem("productos"));

    for (let index = 0; index < carritoVacio.length; index++) {
        for (let undex = 0; undex < lista.length; undex++) {
            const element = lista[undex];
            if (carritoVacio[index].id == element.productosId) {
                if (carritoVacio[index].cantidad >= 1) {
                    element.productosStock += carritoVacio[index].cantidad;
                }
            }
            localStorage.setItem(LocalStorageProductos, JSON.stringify(lista));
        }
    }
    cargaProductos();
    localStorage.removeItem("carrito")
    tienda.productos = [];
    totalCompra();
    $('#esquema').html(tienda.productos)
}

const totalCompra = () => {
    let total = 0;
    tienda.productos.forEach(p => {
        if (p.cantidad > 0)
            total += p.precio * p.cantidad;
    });
    $('#total').html(total);
    return total;
}

function verCompra() {
    alert("¡Felicitaciones! Su compra se registro con exito\n El precio total de su compra es: $" + totalCompra());
}