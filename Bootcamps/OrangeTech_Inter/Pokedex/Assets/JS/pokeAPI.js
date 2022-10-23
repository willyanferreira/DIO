const pokeAPI = {}
pokeAPI.getPokemonsDetails = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
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