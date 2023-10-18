//traer del html al javascript

// console.log(document.body);

//getElementById();
// let div = document.getElementById("aplicacion");
// console.log(div);
// console.log(div.innerHTML);
// console.log(div.innerText);

// let parrafo = document.getElementById("parrafo");
// console.log(parrafo.innerHTML);
// console.log(parrafo.innerText);

//getElementsByClassName();
//perritos es un HTMLCollection (similar a un arreglo ya que algunos métodos no funcionan para él)
// let perritos = document.getElementsByClassName("perritos");
// console.log(perritos[0].innerHTML);
// console.log(perritos[1].innerHTML);
// console.log(perritos[2].innerHTML);
// console.log(perritos.length);
// console.log(perritos);

// for(const perrito of perritos){
//   console.log(perrito);
// }

//getElementsByTagName();
// let divs = document.getElementsByTagName("div");
// console.log(divs);
// console.log(divs[0].innerHTML);
// console.log(divs[1].innerHTML);
// console.log(divs[2].innerHTML);

// let divs = document.getElementsByTagName("div");
// console.log(divs);

// const nombres = ["camila", "andres", "pedrito"];

// for(const item of nombres){
//   console.log(item);
// }

//modificar nodos con javascript
// let saludo = document.getElementById("saludo");
// saludo.innerHTML = "Hola Coder";

// let saludo = document.getElementById("saludo");
// let seccion = prompt("Ingrese el nombre de la seccion");

// if (seccion === "carrito") {
//   saludo.innerHTML = "Bienvenidos al carrito";
//   saludo.className = "rojo";
// } else if (seccion === "favoritos") {
//   saludo.innerHTML = "Bienvenidos a los favoritos";
//   saludo.className = "azul";
// } else {
//   saludo.innerHTML = " Bienvenidos a nuestra super página";
//   saludo.className = "verde";
// }

//creación de nodos con javascript
//creación de la etiqueta
// let parrafo = document.createElement("p");
//asignación del contenido
// parrafo.innerHTML = "<h1>Hola a todos</h1>";
//asignación del padre
//1 opcion
// document.body.append(parrafo);
//2 opción
// let contenedor = document.getElementById("contenedor");
// contenedor.append(parrafo);

//eliminación de un nodo desde javascript
// let contenedor = document.getElementById("contenedor");
// contenedor.remove();

const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "zapato", precio: 750 },
  { id: 3, nombre: "pantalon", precio: 315 },
  { id: 4, nombre: "media", precio: 220 },
  { id: 4, nombre: "media", precio: 220 },
];

productos.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <div class="verde">
    <h2>Id: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
    </div>
    <hr/>
  `;

  document.body.append(div);
});
