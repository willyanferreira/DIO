const pokeAPI = {}
pokeAPI.getPkemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json()) //Quando usar Arrow Function em apenas uma linha não precisa usar o return. 
        .then((jsonBody) => jsonBody.results)
        .catch((error) => console.log(error))
}