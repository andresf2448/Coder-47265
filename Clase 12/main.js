//OPERADOR ++
// let numero = 10;
// numero = numero + 1;
// numero += 1;
// numero++;

/* 
estructura del operador ternario

condicion ? codigo cuando condicion verdadera : codigo cuando condicion falsa;
*/

// let edad = 15;

// if (edad >= 18) {
//   console.log("Eres mayor de edad");
// } else {
//   console.log("Eres menor de edad");
// }

// edad >= 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad");

// let temperatura = 20;

// if (temperatura > 30) {
//   console.log("Día caluroso");
// } else {
//   console.log("Día agradable");
// }

// temperatura > 30 ? console.log("Día caluroso") : console.log("Día agradable");

// const usuario = {
//   nombre: "pepito",
//   edad: 10,
// };
// let permiso;

// if (usuario.edad >= 18) {
//   permiso = true;
// } else {
//   permiso = false;
// }

// if (permiso) {
//   console.log("Puedes entrar a la fiesta");
// } else {
//   console.log("No puedes entrar a la fiesta");
// }

// const usuario = {
//   nombre: "pepito",
//   edad: 20,
// };

// let permiso = usuario.edad >= 18 ? true : false; //return implícito
// permiso ? console.log("Puedes entrar a la fiesta") : console.log("No puedes entrar a la fiesta");

//Operadores lógicos && ||
/*
valor1 && valor2 retorna valor2 si valor1 es true, en caso contrario retorna valor1
valor1 || valor2 retorna valor1 si este es verdadero si no retorna valor2
*/

// const carrito = [];

// if(carrito.length === 0){
//   console.log("El carrito está vacío");
// }

// carrito.length === 0 && console.log("El carrito está vacío");

// const usuario = {
//   nombre: "pepito",
//   edad: 15,
// };

// const registro = usuario.edad >= 18 && new Date();
// console.log(registro);

// console.log(0 || "Falsy");//falsy
// console.log(40 || "Falsy");//40
// console.log(null || "Falsy");//falsy
// console.log(undefined || "Falsy");//falsy
// console.log("Hola Mundo" || "Falsy");//hola mundo
// console.log("" || "Falsy");//falsy
// console.log(NaN || "Falsy");//falsy
// console.log(true || "Falsy");//true
// console.log(false || "Falsy");//falsy

// const usuario = {
//   nombre: "pedrito",
//   edad: 14,
// };

// const usuario1 = null;

// console.log(usuario || "El usuario no existe");
// console.log(usuario1 || "El usuario no existe");

// let carrito;
// let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

// if (carritoStorage) {
//   carrito = carritoStorage;
// } else {
//   carrito = [];
// }

// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// const usuario = null;

// console.log(usuario?.nombre || "El usuario no existe");

// const usuario = {
//   nombre: "andres",
//   edad: 22,
//   cursos: {
//     javascript: "aprobado",
//   },
// };

// console.log(usuario?.cursos?.javascript || "la propiedad no existe");

//desestructuración
// const usuario = {
//   nombre: "pepito",
//   edad: 34,
// };

// let nombre = usuario.nombre;
// let edad = usuario.edad;

// const {nombre, edad} = usuario;

// console.log(nombre, edad);

// const usuario = {
//   nombre: "pepito",
//   edad: 34,
//   telefonos: {
//     casa: 123,
//     trabajo: 43564,
//   },
// };

// const {
//   edad: edadPersona,
//   telefonos: { trabajo }
// } = usuario;

// console.log(trabajo, edadPersona);

// const desestructurar = ({ id, nombre }) => {
//   console.log(id, nombre);
// };

// let objeto = { id: 4, nombre: "juan" };

// desestructurar(objeto);

// const numeros = [4, 5, 6, 8];
// const [a, , c] = numeros;

// console.log(a, c);

// const arreglo = [];

// localStorage.setItem("productos", JSON.stringify(arreglo));
