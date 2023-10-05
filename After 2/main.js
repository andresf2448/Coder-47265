const productos = [
  { id: 1, nombre: "camisa", categoria: "ropa", precio: 1000 },
  { id: 2, nombre: "televisor", categoria: "tecnologia", precio: 700 },
  { id: 3, nombre: "computador", categoria: "tecnologia", precio: 645 },
  { id: 4, nombre: "zapato", categoria: "ropa", precio: 555 },
  { id: 5, nombre: "gorra", categoria: "ropa", precio: 100 },
  { id: 6, nombre: "monitor", categoria: "tecnologia", precio: 125 },
];

// forEach, find, filter, map
//pedir categoría por prompt y por precio
let categoria = prompt("Ingrese la categoría");
let precio = Number(prompt("Ingrese el valor mínimo"));
let palabra = prompt("Ingrese una palabra que contenga el nombre del producto");

//filtramos por categoría, precio y palabra
let productosFiltrados = productos.filter(
  (item) =>
    item.categoria === categoria &&
    item.precio > precio &&
    item.nombre.includes(palabra)
);

//mostramos por un alert cada uno de los productos filtrados
let mensaje = "";
productosFiltrados.forEach((item) => {
  mensaje += `
    Id: ${item.id}
    Nombre: ${item.nombre}
    Categoria: ${item.categoria}
    Precio: $${item.precio}
  `;
});

alert(mensaje);

//find, map