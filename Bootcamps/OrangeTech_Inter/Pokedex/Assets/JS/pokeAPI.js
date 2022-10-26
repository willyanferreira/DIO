const pokeAPI = {}

function ourModelPokemon(pokedetail){
    const pokemon = new Pokemon();
    pokemon.number = pokedetail.order;
    pokemon.name = pokedetail.name;
    const types = pokedetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;
    pokemon.types = types;
    pokemon.type = type;
    pokemon.photo = pokedetail.sprites.other.dream_world.front_default;
    return pokemon;
}

pokeAPI.getPokemonsDetails = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(ourModelPokemon)
}

pokeAPI.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json()) //Quando usar Arrow Function em apenas uma linha não precisa usar o return. 
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeAPI.getPokemonsDetails))
        .then((detailRequest) => Promise.all(detailRequest))
        .then((pokemonDetail) => pokemonDetail)
        .catch((error) => console.log(error))
}