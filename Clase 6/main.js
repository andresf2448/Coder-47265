/* 
estructura de los arreglos

[item1, item2, ..., itemn];
*/

// const vacio = [];
// const numeros = [4, 5, 6, 7];
// const nombres = ["camila", "juan", "andres"];
// const valores = [true, false, false, true];
// const varios = ["andres", 4, true, false];

// console.log(nombres[1]);

// let resultado = numeros[0] + numeros[3];
// console.log(resultado);

// const numeros = [4, 5, 6, 7];

// for(let index = 0; index < 4; index++){
//   console.log(numeros[index]);
// }

// const nombres = ["camila", "juan", "andres", "mariano", "pepito"];

// for (let index = 0; index < nombres.length; index++) {
//   console.log(nombres[index]);
// }

//Métodos y propiedades
// const nombres = ["camila", "juan", "andres"];

// console.log(nombres.length); // length me da la longitud o cantidad de elementos del arreglo

// nombres.push("pepito"); // push agrega un elemento al final del arreglo
// console.log(nombres);

// // let nombre = prompt("Ingrese el nombre");

// // nombres.push(nombre);
// // console.log(nombres);

// nombres.unshift("luis"); // unshift agrega un elemento al inicio del arreglo
// console.log(nombres);

// nombres.pop(); // quita un elemento al final del arreglo
// console.log(nombres);

// nombres.shift(); //quita el primer elemento del arreglo
// console.log(nombres);

// const nombres = ["camila", "juan", "andres", "pepito", "juanita"];
// // nombres.splice(4, 1); //splice elimina varios elementos del arreglo
// // console.log(nombres);

// nombres.splice(1, 2); // el primer parámetro indentifica donde nos paramos y el segundo cuántos eliminamos

// console.log(nombres);

// const nombres = ["camila", "juan", "andres", "pepito", "juanita"];
// console.log(nombres.join("*")); //une los elementos de un arreglo en un string y los separa por el parámetro pasado

// const nombres = ["camila", "juan", "andres", "pepito", "juanita"];
// const mascotas = ["firu", "max"];

// const varios = mascotas.concat(nombres);// une en un solo arreglo los dos srreglos
// console.log(varios);

// const nombres = ["camila", "juan", "andres", "pepito", "juanita"];
// const copia = nombres.slice(1, 4); //[ 'juan', 'andres', 'pepito' ]
// console.log(copia); //slice crea una copia de un fragmento del arreglo

// const nombres = ["camila", "juan", "andres", "pepito", "juanita"];
// console.log(nombres.indexOf("asdfjkasfhd"));
// console.log(nombres.indexOf("andres")); //devuelve la posicion del elemento y si no lo encuentra devuelve -1

// const nombres = ["camila", "juan", "andres", "pepito", "juanita"];
// let nuevoArreglo = [];

// for (let index = 0; index < nombres.length; index++) {
//   const item = nombres[index];
//   nuevoArreglo.push([index, item]);
// }

// console.log(nuevoArreglo);

// const nombres = ["camila", "juan", "andres", "pepito", "juanita"];
// console.log(nombres.includes("andres"));// da true si encuentra el elemento y false en caso contrario
// console.log(nombres.includes("andresasdfasdf"));

// const productos = ["camisa", "pantalon"];

// let nombre = prompt("Ingrese el producto a consultar");

// if (productos.includes(nombre)) {
//   alert("Se encuentra disponible");
// } else {
//   alert("No se encuentra disponible");
// }

// const nombres = ["camila", "juan", "andres", "pepito", "juanita"];
// nombres.reverse();

// console.log(nombres);

// const nombres = ["camila", "juan", "andres", "pepito", "juanita"];

// const eliminar = (nombre) => {
//   let index = nombres.indexOf(nombre);

//   if (index != -1) {
//     nombres.splice(index, 1);
//     console.log(nombres);
//   }
// };

// function eliminar(nombre) {
//   let index = nombres.indexOf(nombre);

//   if (index != -1) {
//     nombres.splice(index, 1);
//     console.log(nombres);
//   }
// }

// eliminar("andres");
// eliminar("pepito");

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 1000 },
//   { id: 3, nombre: "zapato", precio: 1000 },
//   { id: 4, nombre: "gorra", precio: 1000 },
// ];

// for(const item of productos){
//   console.log(item.id);
//   console.log(item.nombre);
//   console.log(item.precio);
// }

// const productos = [];

// class Producto {
//   constructor(nombre, precio) {
//     this.id = productos.length + 1;
//     this.nombre = nombre;
//     this.precio = precio;
//   }
// }

// productos.push(new Producto("camisa", 1000));
// productos.push(new Producto("pantalon", 1000));
// productos.push(new Producto("gorra", 1000));
// productos.push(new Producto("zapato", 1000));

// console.log(productos);

// const nombres = [];

// nombres.push("andres");
// console.log(nombres);
// nombres.push("juna");
// console.log(nombres);

const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 1000 },
  { id: 3, nombre: "zapato", precio: 1000 },
  { id: 4, nombre: "gorra", precio: 1000 },
];

// for(const item of productos){
//   console.log(item);
// }

let nombre = "gorra";
let producto;

for (const item of productos) {
  if (item.nombre === nombre) {
    producto = item;
  }
}

console.log(producto);
