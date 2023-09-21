/* 
let nombre = "andres";
console.log(nombre);

if(condicion){
  codigo en caso de que la condicion sea verdadera
}

while(condicion){
codigo a repetir mientras que la condicion sea verdadera
}

for(desde; hasta; actualizacion){
codigo a repetir
}
*/
// let nombre = "andres";

// if(nombre === "andres"){
//   console.log("Hola andres");

//   for(){
//     if(){
//       console.log("hola");
//       console.log("chao");

//       console.log("Como estas");
//     }
//   }
// }

// let informacion = datos del servidor

// alert(informacion);
// console.log(informacion);
// proceso(informacion)

// alert(datos del servidor);
// console.log(datos del servidor);
// proceso(datos del servidor)

/* 
estructura del if

if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}

if(condicion){
  codigo a ejecutar cuando la condiciion es verdadera
}else{
  codigo a ejecutar cuando la condicion no es verdadera
}

if(condicion1){
  codigo a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
    codigo a ejecutar cuando la condicion2 es verdadera
}else{
  codigo a ejecutar cuando ninguna de las condiciones anteriores es verdadera
}
*/

// let usuario = prompt("Ingrese el usuario");

// if (usuario != "pepito") {
//   alert("usuario incorrecto");
//   usuario = prompt("Ingrese el usuario");
// }

// while (usuario != "pepito") {
//   alert("usuario incorrecto");
//   usuario = prompt("Ingrese el usuario");
// }

/* 
estructura del switch

switch(valor){
  case valor1:
    codigo a ejecutar cuando el valor === valor1
    break;

  case valor2:
    codigo a ejecutar cuando el valor === valor2
    break;

  .
  .
  .

  case valorn:
    codigo a ejecutar cuando el valor === valorn
    break;

  default:
    codigo a ejecutar cuando ninguno de los valores coinciden con valor
    break;
}
*/

// let respuesta = prompt("quieres realizar una operacion");

// if (respuesta === "si") {
//   let operacion = prompt("Ingrese la operacion deseada");
//   let numeroUno = Number(prompt("Ingrese el numero uno"));
//   let numeroDos = Number(prompt("Ingrese el numero dos"));

//   switch (operacion) {
//     case "+":
//       alert(numeroUno + numeroDos);
//       break;

//     case "-":
//       alert(numeroUno - numeroDos);
//       break;

//     case "*":
//       alert(numeroUno * numeroDos);
//       break;

//     case "/":
//       alert(numeroUno / numeroDos);
//       break;

//     default:
//       alert("operacion no identificada");
//       break;
//   }
// }

// let respuesta = prompt("quieres realizar una operacion");

// while (respuesta === "si") {
//   let operacion = prompt("Ingrese la operacion deseada");
//   let numeroUno = Number(prompt("Ingrese el numero uno"));
//   let numeroDos = Number(prompt("Ingrese el numero dos"));

//   switch (operacion) {
//     case "+":
//       alert(numeroUno + numeroDos);
//       break;

//     case "-":
//       alert(numeroUno - numeroDos);
//       break;

//     case "*":
//       alert(numeroUno * numeroDos);
//       break;

//     case "/":
//       alert(numeroUno / numeroDos);
//       break;

//     default:
//       alert("operacion no identificada");
//       break;
//   }

//   respuesta = prompt("quieres realizar una operacion");
// }

let nombre = "Ximena";
let direccion = "AV";

console.log("Hola " + nombre + " tu direccion es " + direccion);
console.log(`Hola ${nombre} tu direccion es ${direccion}`);