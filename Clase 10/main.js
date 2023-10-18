//llamo el elemento al cual quiero asignar el evento
// let boton = document.getElementById("boton");

//funcion que se ejecutará cuando el usuario realice la acción.
// const saludo = () => {
//   console.log("Hola chicos");
// };

//primera forma para asignar un evento

//agregamos un escuchador de eventos al boton, pasando el evento y la DECLARACIÓN de la función
// boton.addEventListener("click", saludo);

//segunda forma para asignar un evento
// boton.onclick = saludo;

// boton.addEventListener("click", () => {
//   console.log("Hola");
// })

// let evento = prompt("Ingrese el evento deseado");
// boton.addEventListener(evento, () => {
//   console.log("Hola");
// })

// const saludo = (nombre) => {
//   console.log(`Hola ${nombre}`);
// };

// boton.addEventListener("click", () => saludo("andres"));

//EVENTOS MAS COMUNES
let boton = document.getElementById("boton");

//se ejecuta solo con presionar
// boton.addEventListener("mousedown", () => console.log("mousedown"));

//se ejecuta cuando suelto el click
// boton.addEventListener("mouseup", () => console.log("mouseup"));

//se ejecuta cuando paso por encima del elemento
// boton.addEventListener("mouseover", () => console.log("mouseover"));

//se ejecuta cuando salgo del elemento
// boton.addEventListener("mouseout", () => console.log("mouseout"));

//se ejecuta cuando me muevo sobre el elemento
// boton.addEventListener("mousemove", () => console.log("mousemove"));

//se ejecuta cuando suelto el click
// boton.addEventListener("click", () => console.log("click"));

//se ejecuta cuando presiono doble click
// boton.addEventListener("dblclick", () => console.log("dblclick"));

// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("click", () => console.log("click"));

// let saludo = document.getElementById("saludo");

// boton.addEventListener("mousedown", () => {
//   saludo.className = "rojo";
// });

// boton.addEventListener("mouseup", () => {
//   saludo.className = "azul";
// });

// boton.addEventListener("mouseover", () => {
//   saludo.className = "verde";
// });

// boton.addEventListener("mouseout", () => {
//   saludo.className = "amarillo";
// });

let saludo = document.getElementById("saludo");
let nombre = document.getElementById("nombre");

//cuando suelto la tecla
// nombre.addEventListener("keyup", () => console.log("keyup"));

//cuando presiono
// nombre.addEventListener("keydown", () => console.log("keydown"));

// nombre.addEventListener("keyup", (e) => {
//   if (e.key === "a") {
//     saludo.className = "rojo";
//   } else if (e.key === "s") {
//     saludo.className = "azul";
//   } else if (e.key === "d") {
//     saludo.className = "verde";
//   } else {
//     saludo.className = "amarillo";
//   }
// });

// nombre.addEventListener("input", () => {
//   if (!nombre.value.includes("@")) {
//     saludo.className = "rojo";
//   } else {
//     saludo.className = "blanco";
//   }
// });

//traigo el formulario
let formulario = document.getElementById("formulario");

//agrego el submit como evento
formulario.addEventListener("submit", (e) => {
  //evito que se recargue el formulario
  e.preventDefault();

  //traigo los inputs que están en la info del evento en el target (objetivo) y su propiedad children
  let inputs = e.target.children; //HTMLcollection
  
  //validar si el primer input tiene el @, si no es así borro el campo
  if(!inputs[0].value.includes("@")){
    inputs[0].value = "";
  }
})
