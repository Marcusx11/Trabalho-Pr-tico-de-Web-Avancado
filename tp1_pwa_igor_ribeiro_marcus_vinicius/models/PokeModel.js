export default class PokeModel {
  fromJson(pokemon, color) {
    this.name =
      pokemon?.forms[0]?.name.charAt(0).toUpperCase() +
      pokemon?.forms[0]?.name.slice(1);
    this.color = color;
    this.urlImg = pokemon?.sprites.other["official-artwork"]["front_default"];

    if (pokemon?.types[0]?.type) {
      this.tipo1 =
        pokemon.types[0].type?.name.charAt(0).toUpperCase() +
        pokemon.types[0].type?.name.slice(1);
    }
    if (pokemon?.types[1]?.type) {
      this.tipo2 =
        pokemon.types[1].type?.name.charAt(0).toUpperCase() +
        pokemon.types[1].type?.name.slice(1);
    }
  }

  name = "";
  color = "";
  urlImg = "";
  tipo1 = "";
  tipo2 = "";
}
