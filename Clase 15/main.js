//setTimeout(funcion, tiempo);
// setTimeout(() => {
//   console.log("Hola");
// }, 5000);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 2000);

// console.log("Final");

// let boton = document.getElementById("boton");
// let saludo = document.getElementById("saludo");

// boton.addEventListener("click", () => {
//   saludo.classList.add("color");

//   setTimeout(() => {
//     saludo.classList.remove("color");
//   }, 3000);
// });

// for (const letra of "Hola") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 3000);
// }

// for (const letra of "Hola") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 1000);
// }

// for (const letra of "Mundo") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 3000);
// }

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 0);

// console.log("Final");

// function multiply(x, y) {
//   return x * y;
// }

// function printSquare(x) {
//   let resultado = multiply(x, x);
//   console.log(resultado);
// }

// printSquare(5);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 0);

// console.log("Final");

//setInterval(funcion, tiempoRecurrente);

// setInterval(() => {
//   console.log("Hola");
// }, 1000);

// let counter = 0;
// const interval = setInterval(() => {
//   counter++;
//   console.log("Counter: ", counter);

//   if (counter >= 5) {
//     clearInterval(interval);
//     console.log("Se removió el intervalo");
//   }
// }, 1000);

/* 
estructura de una promesa

new Promise((resolve, reject) => {
  cuerpo de la promesa
})
*/

// const futuro = (valor) => {
//   return new Promise((resolve, reject) => {
//     // if (valor) {
//     //   resolve("Promesa resuelta");
//     // } else {
//     //   reject("Promesa rechazada");
//     // }

//     setTimeout(() => {
//       valor
//         ? resolve(["pepito", "carlitos", "juanita"])
//         : reject("Promesa rechazada");
//     }, 2000);
//   });
// };

//.then ----- respuesta exitosa
//.catch ----- respuesta incorrecta

// futuro(false)
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Proceso finalizado"));

////////////////////////////////////////////////////////////////// SERVIDOR
const BD = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "gorra", precio: 770 },
  { id: 3, nombre: "pantalon", precio: 350 },
  { id: 4, nombre: "medias", precio: 180 },
];

const traerDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(BD);
      // reject("Por favor intente luego");
    }, 3000);
  });
};
/////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////// Front
traerDatos()
  .then((response) => {
    response.forEach((item) => {
      let div = document.createElement("div");
      div.innerHTML = `
        <h2>ID: ${item.id}</h2>
        <p>Nombre: ${item.nombre}</p>
        <b>$${item.precio}</b>
      `;

      document.body.append(div);
    });
  })
  .catch((error) => {
    let div = document.createElement("div");
    div.innerHTML = `Error ${error}`;

    document.body.append(div);
  })
  .finally(() => {
    let div = document.createElement("div");
    div.innerHTML = `Proceso finalizado`;

    document.body.append(div);
  });
/////////////////////////////////////////////////////////////////
