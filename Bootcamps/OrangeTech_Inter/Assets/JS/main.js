function listaPokemons(pokemon) {
    return `
        <li>
            <span>${pokemon.name}</span>
        </li>
    `
}

const listaPokemon = document.getElementById("listaPokemon");

pokeAPI.getPkemons().then((pokemons = []) => listaPokemon.innerHTML += pokemons.map(listaPokemons).join(""))