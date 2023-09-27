// let nombre = "pepito";
// let edad = 45;
// let direccion = "AV";

/* 
estructura de un objeto

{clave1: valor1, clave2: valor2, ..., claven: valorn};
*/

// const persona = {
//   nombre: "pepito",
//   edad: 45,
//   direccion: "AV",
// };

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.direccion);

// console.log(persona["nombre"]);
// console.log(persona["edad"]);
// console.log(persona["direccion"]);

// let clave = prompt("Ingrese el nombre de la propiedad que quieres conocer de la persona");

// alert(persona[clave]);

// const persona = {
//   nombre: "pepito",
//   edad: 45,
//   direccion: "AV",
// };

// persona.nombre = "pepita";
// persona["edad"] = 12;

// console.log(persona);

// let nombre = prompt("Ingrese el nombre del producto");
// let precio = prompt("Ingrese el precio del producto");

// const producto = {
//   nombre,
//   precio,
// };

// alert(`Nombre: ${producto.nombre} Precio: ${producto.precio}`);

// let nombre = "andres";

// nombre += "pepito" //    nombre = nombre + "pepito"

// console.log(nombre);

// numero = 4

// numero += 1 //  numero = numero + 1    numero = 4 + 1

// function Persona(nombrePersona, edadPersona, direccionPersona) {
//   this.nombre = nombrePersona;
//   this.edad = edadPersona;
//   this.direccion = direccionPersona;
// }

// const persona1 = new Persona("pepito", 34, "AV");
// console.log(persona1.edad);
// const persona2 = new Persona("pepita", 50, "AV1");
// console.log(persona2.nombre);

// {
//   nombre: "pepito",
//   edad: 34,
//   direccion: "AV"
// }

// function Persona(info) {
//   this.nombre = info.nombrePersona;
//   this.edad = info.edadPersona;
//   this.direccion = info.direccionPersona;
//   this.alturaPersona = info.alturaPersona;
//   this.pesoPersona = info.pesoPersona;
// }

// const persona1 = new Persona({
//   alturaPersona: 180,
//   direccionPersona: "AV",
//   pesoPersona: 85,
//   edadPersona: 34,
// });

// console.log(persona1);

// function Persona(nombrePersona, edadPersona, direccionPersona) {
//   this.nombre = nombrePersona;
//   this.edad = edadPersona;
//   this.direccion = direccionPersona;
//   this.hablar = function(){console.log(`Hola soy ${this.nombre}`);}
// }

// const persona1 = new Persona("pepito", 34, "AV");
// console.log(persona1);
// persona1.hablar();

// function Persona(nombrePersona, edadPersona, direccionPersona) {
//   this.nombre = nombrePersona;
//   this.edad = edadPersona;
//   this.direccion = direccionPersona;
// }

// const persona1 = new Persona("pepito", 34, "AV");

// for(const propiedad in persona1){
//   console.log("clave", propiedad);
//   console.log("el valor asociado", persona1[propiedad]);
// }

// console.log("nombre" in persona1);

// function Persona(nombrePersona, edadPersona, direccionPersona) {
//   this.nombre = nombrePersona;
//   this.edad = edadPersona;
//   this.direccion = direccionPersona;
// }

//CLASES
// class Persona {
//   constructor(nombrePersona, edadPersona, direccionPersona) {
//     this.nombre = nombrePersona;
//     this.edad = edadPersona;
//     this.direccion = direccionPersona;
//   }

//   hablar() {
//     console.log(`Hola soy ${this.nombre}`);
//   }
// }

// const persona1 = new Persona("pepito", 45, "AV");

// persona1.hablar();

// class Producto {
//   constructor(nombre, precio, imagen) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.imagen = imagen;
//     this.vendido = false;
//   }

//   vender() {
//     this.vendido = true;
//   }
// }

// const producto1 = new Producto(
//   "Monitor Ultrawide LG 34 Ips Hrd10 Freesync",
//   1351893,
//   "http://as,fhagsdf"
// );

// const producto2 = new Producto(
//   "RECOMENDADO 27 Monitor Curvo Fhd 1800r Con Diseño Sin",
//   760444,
//   "http://as,fhagsasdfasdfdf"
// );

// console.log(producto1);
// producto1.vender();
// console.log(producto1);
// console.log(producto2);

class Producto {
  constructor(nombre, precio, imagen, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.cantidad = cantidad;
  }

  vender() {
    this.cantidad -= 1; // this.vendido = this.vendido - 1
  }
}

const producto1 = new Producto(
  "Monitor Ultrawide LG 34 Ips Hrd10 Freesync",
  1351893,
  "http://as,fhagsdf",
  5
);

console.log(producto1);
producto1.vender();
console.log(producto1);
