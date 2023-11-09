// fetch("https://rickandmortyapi.com/api/character")
//   .then((response) => response.json())
//   .then((data) => console.log(data.results));

const getCharacters = async () => {
  let response = await fetch("https://rickandmortyapi.com/api/character");
  let data = await response.json();
  let characters = data.results;
  let filtro = prompt("Ingrese el status a filtrar");

  let filtrados = characters.filter((item) => item.status === filtro);

  filtrados.forEach((character) => {
    let div = document.createElement("div");
    div.innerHTML = `
      <h2>Name: ${character.name}</h2>
      <p>Gender: ${character.gender}</p>
      <p>Status: ${character.status}</p>
      <img src="${character.image}" />
    `;

    document.body.append(div);
  });
};

getCharacters();
