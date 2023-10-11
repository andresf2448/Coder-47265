//Objeto Math

// console.log(Math.E);
// console.log(Math.PI);

// console.log(Math.max(5, 4, 7, 8, 7, 8, 8, 88, 7, 8, 4, 8));
// console.log(Math.min(5, 4, 7, 8, 7, 8, 8, 88, 7, 8, 4, 8));

// console.log(Math.max(5, 4, 7, 8, 7, 8, 8, 88, Infinity, 7, 8, 4, 8));
// console.log(Math.min(5, 4, 7, 8, 7, 8, 8, 88, 7, -Infinity, 8, 4, 8));

// console.log(Math.ceil(3.24)); //aproxima hacia el entero de arriba
// console.log(Math.floor(3.78)); //aproxima hacia el entero de abajo
// console.log(Math.round(3.2));
// console.log(Math.round(3.6)); //aproxima al entero más cercano

// console.log(Math.sqrt(9));
// console.log(Math.sqrt(2));
// console.log(Math.sqrt(1));
// console.log(Math.sqrt(-1));

// console.log(Math.random() * 10);
// console.log(Math.random() * 10);
// console.log(Math.random() * 10);
// console.log(Math.random() * 10);
// console.log(Math.random() * 10);

// console.log(Math.ceil(Math.random() * 10));
// console.log(Math.ceil(Math.random() * 10));
// console.log(Math.ceil(Math.random() * 10));
// console.log(Math.ceil(Math.random() * 10));
// console.log(Math.ceil(Math.random() * 10));

//Math.random() * rango + desplazamiento
// console.log(Math.ceil(Math.random() * 6 + 14));
// console.log(Math.ceil(Math.random() * 6 + 14));
// console.log(Math.ceil(Math.random() * 6 + 14));
// console.log(Math.ceil(Math.random() * 6 + 14));
// console.log(Math.ceil(Math.random() * 6 + 14));

//números del 37 al 52
// console.log(Math.round(Math.random() * 15 + 37));

// //números del 31 al 56
// console.log(Math.ceil(Math.random() * 25 + 31));

// //números del 2 al 7
// console.log(Math.round(Math.random() * 5 + 2));

// //números del 45 al 78
// console.log(Math.round(Math.random() * 33 + 45));

// //números del 0 al 100
// console.log(Math.round(math.random() * 100));

// //números del 1 al 3
// console.log(Math.round(math.random() * 2 + 1));

// console.log(Math.round(math.random() * 55 - 5));

// const generadorNumero = (rango, desplazamiento) => {
//   return Math.round(Math.random() * rango + desplazamiento);
// };

// console.log(generadorNumero(30, 5));
// console.log(generadorNumero(30, 5));
// console.log(generadorNumero(30, 5));
// console.log(generadorNumero(30, 5));
// console.log(generadorNumero(30, 5));

//dado un arreglo de nombres, crear una función que te devuelva nombres aleatorios
// const nombres = [
//   "pepito",
//   "camila",
//   "andres",
//   "pedrito",
//   "juanita",
//   "carlitos",
// ];

// const obtenerNombreAleatorio = () => {
//   return nombres[Math.floor(Math.random() * nombres.length)];
// };

// console.log(obtenerNombreAleatorio());
// console.log(obtenerNombreAleatorio());
// console.log(obtenerNombreAleatorio());
// console.log(obtenerNombreAleatorio());
// console.log(obtenerNombreAleatorio());
// console.log(obtenerNombreAleatorio());

//La clase Date
// console.log(Date());
// console.log(new Date(2023, 9, 9));

// const navidad = new Date(2023, 11, 24, 23, 59, 59);
// console.log(navidad);

// const navidad = new Date("December 24, 2023 23:59:59");
// console.log(navidad);

// console.log(navidad.toDateString());
// console.log(navidad.toLocaleString());
// console.log(navidad.toLocaleDateString());
// console.log(navidad.toTimeString());

// console.log(navidad.getFullYear());
// console.log(navidad.getMonth());
// console.log(navidad.getDay());

// const navidad = new Date("December 24, 2023 23:59:59");
// const hoy = new Date("october 9, 2023");

// console.log(navidad - hoy);
// const milisegundosPorDia = 86400000;
// console.log((navidad - hoy) / milisegundosPorDia);