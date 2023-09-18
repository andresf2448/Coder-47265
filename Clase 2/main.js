/* 
= asignación
== comparación solo de valor
=== comparación tando de valor como de tipo de dato
*/

// let edad = 50;
// let valor = edad < 100; // variable con tipo de dato booleano

/* 
estructura del condicioinal if

if(condicion){
  codigo a ejecutar siempre que la condición sea verdadera
}
*/

// if("andres"){
//   console.log("Entramos");
// }

// console.log("Finalizamos proceso");

// let edad = parseInt(prompt("Ingrese su edad"));

// if(edad >= 18){
//   alert("Eres mayor de edad");
// }

/* 
estructura del condicional if else

if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}else{
  codigo a ejecutar cuando la condicion es falsa
}
*/

// let edad = parseInt(prompt("Ingrese su edad"));

// if(edad >= 18){
//   alert("Eres mayor de edad puedes entrar a la fiesta")
// }else{
//   alert("No eres mayor de edad no puedes ingresar a la fiesta")
// }

// let nombre = prompt("Ingrese su nombre");

// if (nombre === ""){
//   alert("No ingresaste nada")
// }else{
//   alert("Hola " + nombre)
// }

// let nombre = "andres";

// console.log("Hola " + nombre);
// console.log(`Hola ${nombre}`);

/* 
estructura del condicional if else if else

if(condicion1){
  codigo a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
  codigo a ejecutar cuando la condición 2 es verdadera
}else{
  codigo e ejecutar cuando ninguna de las condiciones es vedadera
}
*/

// let edad = parseInt(prompt("Ingrese su edad"));

// if (edad < 14) {
//   alert("No puedes entrar a la fiesta");
// } else if (edad < 18) {
//   alert("puedes entrar a la fiesta con un adulto respondable");
// } else {
//   alert("Puedes entrar a la fiesta");
// }

// let respuesta = prompt("Terminaste la tarea??? (si/no)").toLowerCase();

// if (respuesta === "si") {
//   alert("Puedes salir a jugar");
// } else {
//   alert("No puedes salir a jugar");
// }

/* 
&& es verdadera cuando todas las condiciones son verdaderas
|| es verdadera cuando al menos una de las condiciones es verdadera
*/

// if (nombre !== "" && apellido !== "") {
//   alert(`Hola ${nombre} ${apellido}`);
// } else {
//   alert("Nombre y apellido son requeridos");
// }

// let nombre = prompt("Ingrese el nombre");

// if (nombre !== "") {
//   let apellido = prompt("Ingrese el apellido");

//   if (apellido !== "") {
//     alert(`Hola ${nombre} ${apellido}`);
//   } else {
//     alert("Apellido se debe ingresar");
//   }
// } else {
//   alert("Nombre se debe ingresar");
// }

let nombre = prompt("Ingrese el nombre");

if (nombre === "JUAN" || nombre === "juan") {
  alert("Hola juan");
} else {
  alert("No eres juan");
}
