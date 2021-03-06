//Array con detalles de productos
var productos = [{
        "productosId": 1,
        "productosCategoria": "Monitor",
        "productosNombre": "Monitor Gigabyte",
        "productosDescripcion": "Gigabyte 240Hz 0.5ms ",
        "productosImagen": "./imagenes/monitorGigabyte.webp",
        "productosImagenMobile": "./imagenes/monitorGigabyte-m.png",
        "productosStock": 20,
        "productosPrecio": 117850
    },
    {
        "productosId": 10,
        "productosCategoria": "Mouse",
        "productosNombre": "Mouse Razer",
        "productosDescripcion": "Razer Basilisk x Hyperspeed ",
        "productosImagen": "./imagenes/mouseRazer.png",
        "productosStock": 100,
        "productosPrecio": 8999
    },
    {
        "productosId": 5,
        "productosCategoria": "Graficas",
        "productosNombre": "Gráfica MSI",
        "productosDescripcion": "MSI RTX 3080 10Gb",
        "productosImagen": "./imagenes/graficaMSI.webp",
        "productosImagenMobile": "./imagenes/graficaMSI-m.png",
        "productosStock": 50,
        "productosPrecio": 250000
    },
    {
        "productosId": 2,
        "productosCategoria": "Monitor",
        "productosNombre": "Monitor LG",
        "productosDescripcion": "LG 144Hz 1ms ",
        "productosImagen": "./imagenes/monitorLG.webp",
        "productosImagenMobile": "./imagenes/monitorLG-m.png",
        "productosStock": 40,
        "productosPrecio": 85290
    },
    {
        "productosId": 6,
        "productosCategoria": "Graficas",
        "productosNombre": "Gráfica EVGA",
        "productosDescripcion": "EVGA RTX 3090 24Gb 5ms ",
        "productosImagen": "./imagenes/graficaEVGA.webp",
        "productosImagenMobile": "./imagenes/graficaEVGA-m.png",
        "productosStock": 30,
        "productosPrecio": 320900
    },
    {
        "productosId": 7,
        "productosCategoria": "Fuentes",
        "productosNombre": "Fuente Gigabyte",
        "productosDescripcion": "Gigabyte 750w 80 plus Gold  ",
        "productosImagen": "./imagenes/fuenteGigabyte.jpg",
        "productosImagenMobile": "./imagenes/fuenteGigabyte-m.png",
        "productosStock": 100,
        "productosPrecio": 19999
    },

    {
        "productosId": 13,
        "productosCategoria": "Motherboards",
        "productosNombre": "Motherboard Asus ROG",
        "productosDescripcion": "Asus ROG Strix Z590  ",
        "productosImagen": "./imagenes/motherRog.png",
        "productosStock": 50,
        "productosPrecio": 56540
    },
    {
        "productosId": 4,
        "productosCategoria": "Graficas",
        "productosNombre": "Gráfica Gigabyte",
        "productosDescripcion": "Gigabyte RTX 3070 8Gb ",
        "productosImagen": "./imagenes/graficaGigabyte.webp",
        "productosImagenMobile": "./imagenes/graficaGigabyte-m.png",
        "productosStock": 30,
        "productosPrecio": 190890
    },
    {
        "productosId": 9,
        "productosCategoria": "Fuentes",
        "productosNombre": "Fuente Corsair",
        "productosDescripcion": "850w 80 plus Gold White  ",
        "productosImagen": "./imagenes/fuenteCorsair.jpg",
        "productosImagenMobile": "./imagenes/fuenteCorsair.m.png",
        "productosStock": 40,
        "productosPrecio": 12799
    },

    {
        "productosId": 8,
        "productosCategoria": "Fuentes",
        "productosNombre": "Fuente ROG",
        "productosDescripcion": "Asus ROG 750w 80 plus  ",
        "productosImagen": "./imagenes/fuenteROG.jpg",
        "productosImagenMobile": "./imagenes/fuenteROG-m.png",
        "productosStock": 120,
        "productosPrecio": 31590
    },
    {
        "productosId": 17,
        "productosCategoria": "Procesadores",
        "productosNombre": "Intel i9 ",
        "productosDescripcion": "Intel i9 10ma Gen 10900k",
        "productosImagen": "./imagenes/intel7.png",
        "productosStock": 20,
        "productosPrecio": 36800
    },
    {
        "productosId": 20,
        "productosCategoria": "RAM",
        "productosNombre": "Memoria RAM Corsair",
        "productosDescripcion": "Corsair Vengeance DDR4",
        "productosImagen": "./imagenes/ramCorsair.png",
        "productosStock": 65,
        "productosPrecio": 33399
    },
    {
        "productosId": 12,
        "productosCategoria": "Mouse",
        "productosNombre": "Mouse VSG",
        "productosDescripcion": "VSG Aurora Azul Polar ",
        "productosImagen": "./imagenes/mouseNN.png",
        "productosStock": 150,
        "productosPrecio": 2810
    },

    {
        "productosId": 14,
        "productosCategoria": "Motherboards",
        "productosNombre": "Motherboard Aorus",
        "productosDescripcion": "Aorus Ga B550",
        "productosImagen": "./imagenes/motherAorus.png",
        "productosStock": 40,
        "productosPrecio": 12799
    },
    {
        "productosId": 19,
        "productosCategoria": "RAM",
        "productosNombre": "Memoria RAM Gskill",
        "productosDescripcion": "Gskill Tridents DDR4",
        "productosImagen": "./imagenes/ramGskill.png",
        "productosStock": 150,
        "productosPrecio": 37000
    },
    {
        "productosId": 15,
        "productosCategoria": "Motherboards",
        "productosNombre": "Motherboard Asus TUF",
        "productosDescripcion": "Asus TUF B450m Plus",
        "productosImagen": "./imagenes/motherAsus.png",
        "productosStock": 33,
        "productosPrecio": 22900
    },
    {
        "productosId": 11,
        "productosCategoria": "Mouse",
        "productosNombre": "Mouse Corsair",
        "productosDescripcion": "Corsair Gaming M65 RGB",
        "productosImagen": "./imagenes/mouseCorsair.png",
        "productosStock": 200,
        "productosPrecio": 8500
    },
    {
        "productosId": 16,
        "productosCategoria": "Procesadores",
        "productosNombre": "Intel i5",
        "productosDescripcion": "Intel i5 10ma Gen 10100  ",
        "productosImagen": "./imagenes/intel5.png",
        "productosStock": 25,
        "productosPrecio": 16800
    },
    {
        "productosId": 3,
        "productosCategoria": "Monitor",
        "productosNombre": "Monitor Samsung",
        "productosDescripcion": "Samsung 60Hz 5ms ",
        "productosImagen": "./imagenes/monitorSamsung.webp",
        "productosImagenMobile": "./imagenes/monitorSamsung-m.png",
        "productosStock": 20,
        "productosPrecio": 28900
    },
    {
        "productosId": 18,
        "productosCategoria": "Procesadores",
        "productosNombre": "AMD Ryzen7",
        "productosDescripcion": "AMD Ryzen 7 5800x",
        "productosImagen": "./imagenes/ryzen7.png",
        "productosStock": 10,
        "productosPrecio": 64900
    }
]

const LocalStorageProductos = "productos";
//LocalStorage
if (localStorage.getItem("productos") == null);
localStorage.setItem("productos", JSON.stringify(productos));

//Ususario
var tienda = new Tienda("Leandro");

//Llamada a controlador.js
cargaProductos();