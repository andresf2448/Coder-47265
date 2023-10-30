//OPERADOR SPREAD (...)

// const nombres = ["andres", "juan", "pedro"];
// console.log(...nombres);
// console.log(nombres.join(" "));

// const numeros = [3, 4, 5, 6, 7, 8];

// console.log(Math.max(...numeros));
// console.log(Math.min(...numeros));

//paso por valor
// let nombre1 = "andres";
// let nombre2 = nombre1;

// nombre2 = "camila";
// console.log(nombre1);

//paso por referencia
// let persona1 = { nombre: "andres", edad: 50 };
// let persona2 = {...persona1};

// persona2.nombre = "camila";
// console.log(persona1);
// console.log(persona2);

// console.log(typeof [1,2]);
// console.log(typeof {nombre: "andres"});

// const nombres1 = ["juan", "carlos"];
// const nombres2 = ["pedro", "mmilena"];

// const nombres = [...nombres1, ...nombres2];
// console.log(nombres);

// const usuario = {
//   nombre: "juan",
//   edad: 34,
//   curso: "javascript",
// };

// const usuario1 = {
//   ...usuario,
//   curso: "React",
//   direccion: "AV",
// };

// console.log(usuario);

// const sumar = (letras, ...numeros) => {
//   console.log(letras, numeros);
// };

// sumar("pepito", 4, 5, 6);
// sumar("pepita", 2);

//REPASO
/* 
funciones
function sumar(x, y){
  return x + y;
}

const sumar = (x, y) => {
  return x + y;
}

si quitamos las llaves y el return la funcion retorna implicitamente
si solo temos un parametro podemos quitar los parentesis
si no tenemos parametros debemos dejar los parentesis
*/

/* 
class NombreClase{
  constructor(parm1, parm2){
    this.clave1 = parm1;
    this.clave2 = parm2;
  }

  metodo1(){
    codigo a ejecutar por el metodo1
  }

  metodo2(){
    codigo a ejecutar por el metodo1
  }
}
*/

///////////////////////////////////////////////////////////////////////////////////
// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "media", precio: 1000 },
//   { id: 3, nombre: "gorra", precio: 1000 },
//   { id: 4, nombre: "zapato", precio: 1000 },
// ];

// const agregarCarrito = (id) => {
//   let producto = productos.find((item) => item.id === id);

//   alert(
//     `
//       La info del producto seleccionado es:

//       ID: ${id}
//       Nombre: ${producto.nombre}
//       Precio: $${producto.precio}
//     `
//   );
// };

// productos.forEach((item) => {
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <h2>Id: ${item.id}</h2>
//     <p>Nombre: ${item.nombre}</p>
//     <b>$${item.precio}</b>
//     <button id="boton${item.id}">Agregar</button>
//     <hr />
//   `;
//   document.body.append(div);

//   let boton = document.getElementById(`boton${item.id}`);
//   boton.addEventListener("click", () => agregarCarrito(item.id));
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////

//arreglo donde guardamos los productos creados
const productos = [];
let contenedor = document.getElementById("contenedor");

//funcion para mostrar los productos
const renderizado = (productos) => {
  //codigo para borrar el contenido del contenedor y que no se repitan los productos mostrados
  contenedor.innerHTML = null;

  productos.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
      <h2>Id: ${item.id}</h2>
      <p>Nombre: ${item.nombre}</p>
      <b>$${item.precio}</b>
    `;
    contenedor.append(div);
  });
};

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); //para que le formukario no se recargue

  //traigo los inputs del formulario
  let inputs = e.target.children;
  let nombre = inputs[0].value;
  let precio = inputs[1].value;

  //agrego el nuevo producto creado al arreglo
  productos.push({ id: productos.length + 1, nombre, precio });

  //Muestro los productos agregados
  renderizado(productos);
});
