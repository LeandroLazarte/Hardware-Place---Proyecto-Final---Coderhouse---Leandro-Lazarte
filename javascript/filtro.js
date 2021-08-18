const filtrarProducto = (pFiltro) => {
    let listaProductos = "";
    let lista = JSON.parse(localStorage.getItem(LocalStorageProductos));
    let filtroProducto = lista.filter((p) => p.productosCategoria == pFiltro);

    filtroProducto.forEach(
        (p) =>
        (listaProductos += `
        <div id="${p.productosId}"  class="card d-inline-flex p-2" style="width: 18rem">
        <img width="270px" height="260px" src="${p.productosImagen}" class="card-img-top" alt="${p.productosNombre}">
        <div class="card-body">
          <h5 class="card-title">${p.productosNombre}</h5>
          <p class="card-text">${p.productosDescripcion}</p>
          <p class="card-text">Stock: ${p.productosStock}</p>
          <p class="card-text">${p.productosPrecio}</p>
        </div>
        <div class="card-body"">
        <button onclick="Comprar(${p.productosId})" type="button" class="btn btn-danger">Añadir al carrito</button>
        </div>
      </div>`)
    );
    $('#detalles').html(listaProductos);
};
const menorMayor = () => {
    let listaProductos = "";
    let lista = JSON.parse(localStorage.getItem(LocalStorageProductos));

    lista.sort((a, b) => {
        if (a.productosPrecio < b.productosPrecio) {
            return -1;
        } else if (a.productosPrecio > b.productosPrecio) {
            return 1;
        } else {
            return 0;
        }
    });
    lista.forEach(
        (p) =>
        (listaProductos += `
        <div id="${p.productosId}"  class="card d-inline-flex p-2" style="width: 18rem">
        <img width="270px" height="260px" src="${p.productosImagen}" class="card-img-top" alt="${p.productosNombre}">
        <div class="card-body">
          <h5 class="card-title">${p.productosNombre}</h5>
          <p class="card-text">${p.productosDescripcion}</p>
          <p class="card-text">Stock: ${p.productosStock}</p>
          <p class="card-text">Precio: ${p.productosPrecio}</p>
        </div>
        <div class="card-body"">
        <button onclick="Comprar(${p.productosId})" type="button" class="btn btn-danger">Añadir al carrito</button>
        </div>
      </div>`)
    );

    $('#detalles').html(listaProductos);
}
const mayorMenor = () => {
    let listaProductos = "";
    let lista = JSON.parse(localStorage.getItem(LocalStorageProductos));

    lista.sort((a, b) => {
        if (a.productosPrecio < b.productosPrecio) {
            return 1;
        } else if (a.productosPrecio > b.productosPrecio) {
            return -1;
        } else {
            return 0;
        }
    });

    lista.forEach(
        (p) =>
        (listaProductos += `
        <div id="${p.productosId}"  class="card d-inline-flex p-2" style="width: 18rem">
        <img width="270px" height="260px" src="${p.productosImagen}" class="card-img-top" alt="${p.productosNombre}">
        <div class="card-body">
          <h5 class="card-title">${p.productosNombre}</h5>
          <p class="card-text">${p.productosDescripcion}</p>
          <p class="card-text">Stock: ${p.productosStock}</p>
          <p class="card-text">Precio: ${p.productosPrecio}</p>
        </div>
        <div class="card-body"">
        <button onclick="Comprar(${p.productosId})" type="button" class="btn btn-danger">Añadir al carrito</button>
        </div>
      </div>`)
    );

    $('#detalles').html(listaProductos);
}