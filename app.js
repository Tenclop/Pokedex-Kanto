const dataPoke = document.querySelector(".section--center-content");
const filterBtns = document.querySelectorAll(".filter-btn");
const containerBtn = document.querySelector(".btn-container");

const fetchPokemonKanto = async () => {
  for (let i = 1; i <= 151; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const urlPokemon = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => {
      const pokemon = res.data;
      // console.log(res.data);
      pokemonCard(pokemon);
    });
};

fetchPokemonKanto();
const pokemonCard = (pokemon) => {
  const pokemonElement = document.createElement("div");
  pokemonElement.classList.add("pokemon");
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id;
  const img = pokemon.sprites.other.dream_world["front_default"];
  const type = pokemon.types.map((type) => type.type.name).join(" ");

  let pokeInnerHTML = `
  <div class="card">
  <img src=${img} alt="${name}" style="width:100%">
  <div class="container">
    <h4>${id}.${name}</h4>
    <p>${type}</p>
  </div>
 </div>
  `;

  pokemonElement.innerHTML = pokeInnerHTML;
  dataPoke.appendChild(pokemonElement);
};
