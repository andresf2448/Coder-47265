let boton = document.getElementById("boton");

// boton.addEventListener("click", () => {
//   Swal.fire("Good job!", "You clicked the button!", "success");
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Error!",
//     text: "Do you want to continue?",
//     icon: "error",
//     confirmButtonText: "Cool",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Error!",
//     text: "Error inesperado",
//     icon: "error",
//     confirmButtonText: " =( ",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     position: "bottom-end",
//     icon: "success",
//     title: "El producto fue guardado con éxito!",
//     showConfirmButton: false,
//     timer: 2000,
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Sweet!",
//     text: "Modal with a custom image.",
//     imageUrl: "https://unsplash.it/400/200",
//     imageWidth: 400,
//     imageHeight: 200,
//     imageAlt: "Custom image",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Está seguro de eliminar el producto?",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonText: "Sí, seguro",
//     cancelButtonText: "No, no quiero",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       //código para eliminar del storage

//       Swal.fire({
//         title: "Borrado!",
//         icon: "success",
//         text: "El archivo ha sido borrado",
//       });
//     }
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Ingrese el producto a buscar",
//     input: "text",
//     showCancelButton: true,
//     confirmButtonText: "Look up",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       //codigo para buscar el producto
//       Swal.fire({
//         title: `${result.value}`,
//       });
//     }
//   });
// });

//toastify
// boton.addEventListener("click", () => {
//   Toastify({
//     text: "Probando toast!",
//     duration: 3000,
//   }).showToast();
// });

// boton.addEventListener("click", () => {
//   Toastify({
//     text: "Probando toast!",
//     duration: 3000,
//     style: {
//       background: "linear-gradient(to left, #00b09b, #96c92d)",
//     },
//   }).showToast();
// });

// boton.addEventListener("click", () => {
//   Toastify({
//     text: "Probando toast!",
//     duration: 3000,
//     onClick: () => {
//       Toastify({
//         text: "Clickeaste un Toast!",
//         duration: 1500,
//       }).showToast();
//     },
//   }).showToast();
// });

// boton.addEventListener("click", () => {
//   Toastify({
//     text: "Click aquí para ir a Coder!",
//     duration: 3000,
//     destination: "https://www.coderhouse.com",
//   }).showToast();
// });

//luxon
const DateTime = luxon.DateTime;
// const dt = DateTime.local(2023, 12, 24, 12, 10);

// console.log(dt.toString());
// console.log(dt.year);
// console.log(dt.month);
// console.log(dt.day)
// console.log(dt.second);
// console.log(dt.weekday);

// const dt = DateTime.now();

// console.log(dt.zoneName);
// console.log(dt.daysInMonth);
// console.log(dt.toLocaleString());
// console.log(dt.toLocaleString(DateTime.DATE_FULL));
// console.log(dt.toLocaleString(DateTime.TIME_SIMPLE));
// console.log(dt.setLocale("es").toLocaleString(DateTime.DATE_FULL));

// const dt = DateTime.now();

// console.log( dt.toLocaleString(DateTime.DATETIME_SHORT) )
// // 25/1/2022 14:21

// const suma = dt.plus({ hours: 5, minutes: 15 })
// console.log(suma.toLocaleString(DateTime.DATETIME_SHORT))
// // 25/1/2022 19:36

// const resta = dt.minus({ month: 2, days: 10 })
// console.log(resta.toLocaleString(DateTime.DATETIME_SHORT))

const Interval = luxon.Interval

const now = DateTime.now()
const later = DateTime.local(2023, 12, 24)
const i = Interval.fromDateTimes(now, later)

console.log( i.length('days') ) 
console.log( i.length('hours') ) 
console.log( i.length('minutes') )