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