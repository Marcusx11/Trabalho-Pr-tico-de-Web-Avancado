import PokeModel from "../models/PokeModel";
import api from "./api";

const BASE_URL = "https://pokeapi.co/api/v2/";

const getPokemonByUrl = (url) => {
  return api.request({
    method: "get",
    url: url,
  });
};

const getPokemonColor = (pokemon) => {
  return api.request({
    method: "get",
    baseURL: BASE_URL,
    url: "pokemon-species/" + pokemon,
  });
};

const getPokemons = () => {
  return api.request({
    method: "get",
    baseURL: BASE_URL,
    url: "pokemon?limit=27",
  });
};

export async function getAllPokemonData() {
  let pokes = [];
  const models = []

  await getPokemons().then((response) => {
    pokes = response.data.results;
  });

  for (const poke of pokes) {
    let pokemonEsp = null;
    let pokemonColor = null;

    await getPokemonByUrl(poke.url).then((pokemon) => {
      pokemonEsp = pokemon.data;
    });
    await getPokemonColor(poke.name).then((color) => {
      pokemonColor = color.data.color.name;
    });

    const pokeModel = new PokeModel();
    pokeModel.fromJson(pokemonEsp, pokemonColor);
    models.push(pokeModel);
  }

  return models
}
