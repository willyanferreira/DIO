function listaPokemons(pokemon) {
    return `
        <li class="${pokemon.type}">
            <span>${pokemon.number}</span>
            <span>${pokemon.name}</span>
            <div>
            <ol>${pokemon.types.map((type) => `<li>${type}</li>`).join('')}</ol>
                <img src="${pokemon.photo}">
            </div>
        </li>
    `
}

const listaPokemon = document.getElementById("listaPokemon");

pokeAPI.getPokemons().then((pokemons = []) => listaPokemon.innerHTML += pokemons.map(listaPokemons).join(""))