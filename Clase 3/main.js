/* 
estructura del bucle for

for(desde; hasta; actualizacion){
  codigo a repetir
}
*/

//i = i + 1 === i++          i-- === i = i - 1

// for (let i = 5; i < 100; i++) {
//   console.log("Hola", i);
// }

// let numero = Number(
//   prompt("Ingrese un número para saber su tabla de multiplicar")
// );

// for (let i = 1; i <= 10; i++) {
//   let resultado = numero * i;

//   alert(`${numero} * ${i} = ${resultado}`);
// }

// console.log(5 * 1);
// console.log(5 * 2);
// console.log(5 * 3);
// console.log(5 * 4);
// console.log(5 * 5);
// console.log(5 * 6);
// console.log(5 * 7);
// console.log(5 * 8);
// console.log(5 * 9);
// console.log(5 * 10);

// for (let turno = 1; turno <= 7; turno++) {
//   let nombre = prompt("Ingrese su nombre");

//   alert(`Turno: #${turno} Nombre: ${nombre}`);
// }

// alert("volve mañana que ya no hay turno xD");

// let nombre = "Aleja";

// console.log("Hola " + nombre);
// console.log(`Hola ${nombre}`);

//break
// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }

//   console.log(i);
// }

//continue
// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     continue;
//   }

//   console.log(i);
// }

//numero1 % numero2 modulo y me devuelve el resto de dividir numero1 entre numero2

//impares
// for (let numero = 1; numero <= 10; numero++) {
//   if (numero % 2 === 0) {
//     continue;
//   }
//   console.log(numero);
// }

// //pares
// for (let numero = 1; numero <= 10; numero++) {
//   if (numero % 2 !== 0) {
//     continue;
//   }
//   console.log(numero);
// }

// for (let numero = 2; numero <= 10; numero = numero + 2) {
//   console.log(numero);
// }

// for (let numero = 1; numero <= 10; numero = numero + 2) {
//   console.log(numero);
// }

/* 
estructura del while

while(condicion){
  codigo a repetir siempre que la condición sea verdadera
}
*/

// let repetir = true;

// while(repetir){
//   console.log("Hola");
// }

// let usuario = prompt("Ingrese el usuario");

// while (usuario !== "pepito") {
//   alert("usuario incorrecto");
//   usuario = prompt("Ingrese el usuario");
// }

// alert("bienvenido");

/* 
estructura del do while

do{
  codigo a repetir por primera vez y las demás siempre que la condición sea verdadera
}while(condicion);
*/

// let repetir = false;

// while (repetir) {
//   console.log("entramos");
// }

// do {
//   console.log("Entramos");
// } while (repetir);

// do{
//   let numero = prompt("Ingrese el numero")
//   console.log(numero);
// }while(parseInt(numero))

// let numero = prompt("Ingrese el numero");

// while(parseInt(numero)){
//   console.log(numero);
//   numero = prompt("Ingrese el numero")
// }

//SWITCH
/* 
estructura del switch

switch(valor){
  case valor1:
    codigo a ejecutar cuando valor === valor1
    break;

  case valor2:
    codigo a ejecutar cuando valor === valor2
    break;

  .
  .
  .

  default:
    codigo a ejecutar cuando el valor no coincide con ninguno de los valores anteriores
    break;
}
*/

// let moneda = "usd";

// switch (moneda) {
//   case "ars":
//     console.log("Moneda de argentina");
//     break;

//   case "cop":
//     console.log("Moneda de colombia");
//     break;

//   case "clp":
//     console.log("Moneda de chile");
//     break;

//   default:
//     console.log("Moneda no reconocida");
//     break;
// }

// let entrada = prompt("Ingrese un nombre");

// while (entrada != "ESC") {
//   switch (entrada) {
//     case "ANA":
//       alert("Hola ANA");
//       break;

//     case "JUAN":
//       alert("Hola JUAN");
//       break;

//     default:
//       alert("QUien eres?");
//       break;
//   }
//   entrada = prompt("Ingrese un nombre");
// }

// let numero = "4";

// switch (numero) {
//   case 4:
//     console.log("Entramos al 4");
//     break;

//   default:
//     console.log("no reconocido");
//     break;
// }
