//Creación de la etiquetas
// 1 paso
//creación de la etiqueta
// let saludo = document.createElement("div");

// 2 paso
//agregado de contenido
// saludo.innerHTML = "Hola a todos";

// 3 paso
//asignación de un padres
//1 opción en el body
// document.body.append(saludo);

//2 opción en un contenedor
// let contenedor = document.getElementById("contendor");
// contenedor.append(saludo);

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 1000 },
// ];

// localStorage.setItem("productos", JSON.stringify(productos));

// const agregarProducto = (nombre, precio) => {
//   //traer datos del storage
//   let productosJson = localStorage.getItem("productos");
//   let productos = JSON.parse(productosJson);

//   //administración del arreglo
//   let nuevoProducto = {
//     id: productos.length + 1,
//     nombre,
//     precio,
//   };

//   productos.push(nuevoProducto);

//   //actualización del storage
//   localStorage.setItem("productos", JSON.stringify(productos));
// };

// let nombre = prompt("Ingrese el nombre deseado");
// let precio = Number(prompt("Ingrese el precio"));

// agregarProducto(nombre, precio);

// const eliminarProducto = (id) => {
//   let productosJson = localStorage.getItem("productos");
//   let productos = JSON.parse(productosJson);

//   let filtrados = productos.filter((item) => item.id != id);

//   localStorage.setItem("productos", JSON.stringify(filtrados));
// };

// let id = Number(prompt("Ingrese el id del producto a eliminar"));
// eliminarProducto(id);

//una función que dado el id modifique el precio de un producto
const modificarPrecio = (id, precio) => {
  let productosJson = localStorage.getItem("productos");
  let productos = JSON.parse(productosJson);

  let producto = productos.find((item) => item.id === id);
  producto.precio = precio;

  localStorage.setItem("productos", JSON.stringify(productos));
};

let id = Number(prompt("Ingrese el id del producto"));
let precio = Number(prompt("Ingrese el nuevo precio del producto"));

modificarPrecio(id, precio);
