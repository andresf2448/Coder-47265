/* 
estructura del fetch

fetch(url, config);
*/

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data[0].title);
//     console.log(data[0].body);
//   });

// const listado = document.getElementById("listado");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((publicacion) => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//         <h2>${publicacion.title}</h2>
//         <p>${publicacion.body}</p>
//       `;

//       listado.append(li);
//     });
//   });

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "Coderhouse",
//     body: "Post de prueba",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// const listado = document.getElementById("listado");

// fetch("./data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((producto) => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//         <h2>${producto.id}</h2>
//         <h2>${producto.nombre}</h2>
//         <p>${producto.precio}</p>
//       `;

//       listado.append(li);
//     });
//   });

const listado = document.getElementById("listado");

const pedirDatos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.forEach((post) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <h4>${post.title}</h4>
        <p>${post.body}</p>
    `;
    listado.append(li);
  });
};

pedirDatos();