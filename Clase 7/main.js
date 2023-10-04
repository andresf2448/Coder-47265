// function mayorQue(n) {
//   return (m) => m > n;
// }

// let mayorQueCinco = mayorQue(5); //(m) => m > 5;
// console.log(mayorQueCinco(6));
// console.log(mayorQueCinco(3));

// let mayorQueDiez = mayorQue(10); //(m) => m > 10;
// console.log(mayorQueDiez(11));
// console.log(mayorQueDiez(9));

// function operaciones(op) {
//   if (op === "sumar") {
//     return (a, b) => a + b;
//   } else if (op === "restar") {
//     return (a, b) => a - b;
//   } else if (op === "multiplicar") {
//     return (a, b) => a * b;
//   } else if (op === "dividir") {
//     return (a, b) => a / b;
//   } else {
//     return "Operación no reconocida";
//   }
// }

// let suma = operaciones("sumar"); //(a, b) => a + b;

// let resta = operaciones("restar"); //(a, b) => a - b;

// let nombre = prompt("Ingrese la operacion a realizar");
// let numeroUno = Number(prompt("Ingrese el número uno"));
// let numeroDos = Number(prompt("Ingrese el número dos"));

// let operacion = operaciones(nombre);

// alert(operacion(numeroUno, numeroDos));

// function mostrar(x) {
//   console.log("El valor ingresado es", x);
// }

// function iterador(arreglo, funcion) {
//   for (const item of arreglo) {
//     funcion(item);
//   }
// }

// iterador([4, 5, 6, 7, 1], mostrar);

//parametros o variables usted coloca el nombre a su gusto

//MÉTODOS DE BÚSQUEDA Y TRANSFORMACIÓN
// let productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 750 },
//   { id: 3, nombre: "zapato", precio: 400 },
//   { id: 4, nombre: "media", precio: 2645 },
// ];

//forEach sirve para recorrer el arreglo
// productos.forEach((pepito) => {
//   console.log(pepito.nombre);
//   console.log(pepito.precio);
// });

//find busca el primer elemento que cumpla la condición dada
// let nombre = prompt("Ingrese el nombre del producto a buscar, si desea salir coloque (salir)");

// while (nombre != "salir") {
//   let encontrado = productos.find((item) => item.nombre === nombre);

//   if (encontrado) {
//     alert(`
//       Id: ${encontrado.id}
//       Nombre: ${encontrado.nombre}
//       Precio: ${encontrado.precio}
//     `);
//   } else {
//     alert("El producto no está disponible");
//   }

//   nombre = prompt("Ingrese el nombre del producto a buscar, si desea salir coloque (salir)");
// }

// let productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 750 },
//   { id: 3, nombre: "zapato", precio: 400 },
//   { id: 4, nombre: "media", precio: 2645 },
// ];

//filter filtra los elementos que cumplan la condición
// let precio = Number(prompt("Ingrese el precio mínimo"));
// let filtrados = productos.filter((item) => item.precio > precio);

// filtrados.forEach((item) => {
//   alert(`
//     Id: ${item.id}
//     Nombre: ${item.nombre}
//     Precio: ${item.precio}
//   `);
// });

//some verifica si al menos un elemento del arreglo cumple la condición
// console.log(productos.some((item) => item.nombre === "camisa"));
// console.log(productos.some((item) => item.nombre === "asdfasdfasfd"));

// let productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 750 },
//   { id: 3, nombre: "zapato", precio: 400 },
//   { id: 4, nombre: "media", precio: 2645 },
// ];
//map transforma los elementos del arreglo

// const nombres = productos.map((item) => item.nombre);
// console.log(nombres);

// const precios = productos.map((item) => item.precio);
// console.log(precios);

// const preciosNavidad = productos.map((item) => {
//   return {
//     id: item.id,
//     nombre: item.nombre,
//     precio: item.precio - item.precio * 0.21,
//   };
// });

// console.log(preciosNavidad);

//reduce reduce un arreglo a un solo valor
// const numeros = [4, 5, 6, 7];
// let total = numeros.reduce((acum, item) => acum + item, 0);
// console.log(total);

// let carrito = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 750 },
//   { id: 3, nombre: "zapato", precio: 400 },
//   { id: 4, nombre: "media", precio: 2645 },
// ];

// let total = carrito.reduce((acum, item) => acum + item.precio, 0);
// console.log(total);

// let productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 750 },
//   { id: 3, nombre: "zapato", precio: 400 },
//   { id: 4, nombre: "media", precio: 2645 },
// ];

// const numeros = [4, 6, 3, 5, 8, 0];
// console.log(numeros.sort((a, b) => a - b));
// console.log(numeros.sort((a, b) => b - a));

const items = [
  { name: "Pikachu", price: 21 },
  { name: "Charmander", price: 37 },
  { name: "Pidgey", price: 45 },
  { name: "Squirtle", price: 60 },
];

console.log(
  items.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a es igual a b
    return 0;
  })
);
