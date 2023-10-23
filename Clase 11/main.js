//Storage => localStorage + sessionStorage
//localStorage
//persistencia de datos cuando recargamos, cerramos la página, apagamos o reinicamos el computador
// console.log(localStorage);

// localStorage.setItem("nombre", "andres"); //agregar elementos al storage
// localStorage.setItem("numero", 5);
// localStorage.setItem("valor", true);

//acceder al storage
//localStorage.getItem("nombreClave")
// let valorNombre = localStorage.getItem("nombre");
// console.log(valorNombre);

// let numero = localStorage.getItem("numero");
// console.log(numero);

// let valor = localStorage.getItem("valor");
// console.log(valor);

// localStorage.setItem("objeto", {nombre: "andres"});

// for (let i = 0; i < localStorage.length; i++) {
//   //recuperamos la clave
//   let clave = localStorage.key(i);
//   console.log(clave);
//   console.log("valor asociado", localStorage.getItem(clave));
// }

//Eliminar el storage
// localStorage.removeItem("nombre"); //elimina por clave
// localStorage.clear(); //elimina todo el localStorage

//sessionStorage
//persistencia de datos solo cuando se recarga la página
// console.log(sessionStorage);
// sessionStorage.setItem("nombre", "andres"); //agregar elementos al storage
// sessionStorage.setItem("numero", 5);
// sessionStorage.setItem("valor", true);

//acceder al storage
// sessionStorage.getItem("nombreClave")
// let valorNombre = sessionStorage.getItem("nombre");
// console.log(valorNombre);

// let numero = sessionStorage.getItem("numero");
// console.log(numero);

// let valor = sessionStorage.getItem("valor");
// console.log(valor);

// for (let i = 0; i < sessionStorage.length; i++) {
//   //recuperamos la clave
//   let clave = sessionStorage.key(i);
//   console.log(clave);
//   console.log("valor asociado", sessionStorage.getItem(clave));
// }

// sessionStorage.removeItem("nombre"); //elimina por clave
// sessionStorage.clear(); //elimina todo el localStorage

//JSON
//JSON.stringify(elemento) da el formato json al elemento
//JSON.parse(elemento) quita el formato json al elemento
// const objeto = { nombre: "andres", edad: 26 };
// const arreglo = ["camisa", "gorra"];

// console.log(objeto);
// console.log(JSON.stringify(objeto));

// localStorage.setItem("objeto", JSON.stringify(objeto));
// localStorage.setItem("arreglo", JSON.stringify(arreglo));

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 750 },
//   { id: 3, nombre: "media", precio: 320 },
//   { id: 4, nombre: "zapato", precio: 870 },
// ];

// const guardarStorage = (clave, valor) => {
//   localStorage.setItem(clave, valor);
// };

// productos.forEach((item) => {
//   guardarStorage(item.id, JSON.stringify(item));
// });

// localStorage.setItem("carrito", JSON.stringify(productos));

//EJEMPLOS
// let usuario;
// let usuarioStorage = sessionStorage.getItem("usuario");

// if (usuarioStorage) {
//   usuario = usuarioStorage;
//   alert(`Bienvenid@ nuevamente ${usuario}`);
// } else {
//   usuario = prompt("Ingrese su usuario");
//   alert(`Bienvenid@ ${usuario} por primera vez`);
//   sessionStorage.setItem("usuario", usuario);
// }

//pedir el usuario
//traer el arreglo de usuarios en el storage
//verificar si el usuario está en el arreglo
//si está mensaje, si no agregas al arreglo y subes el arreglo al storage

//para cargar el carrito en el storage
// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 750 },
//   { id: 3, nombre: "media", precio: 320 },
//   { id: 4, nombre: "zapato", precio: 870 },
// ];
// localStorage.setItem("carrito", JSON.stringify(productos));

//boton para eliminar el carrito
let eliminar = document.getElementById("eliminar");
let carrito;

//traemos el carrito del storage
let carritoStorage = localStorage.getItem("carrito");

//si hay carrito lo seteamos si no lo inicializamos como arreglo vacío y mostramos mensaje cporrespondiente
if (carritoStorage) {
  carrito = JSON.parse(carritoStorage);
} else {
  carrito = [];
  let div = document.createElement("div");
  div.innerHTML = "Carrito Vacío";

  document.body.append(div);
}

carrito.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
  `;

  document.body.append(div);
});

//agregamos el evento al boton para eliminar el carrito
eliminar.addEventListener("click", () => {
  localStorage.clear();
  alert("Carrito eliminado");
  location.reload();
});
