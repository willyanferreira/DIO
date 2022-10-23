function listaPokemons(pokemon) {
    return `
        <li>
            <span>${pokemon.name}</span>
        </li>
    `
}

const listaPokemon = document.getElementById("listaPokemon");

pokeAPI.getPkemons()
    .then((pokemons) => {
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i]
            listaPokemon.innerHTML += listaPokemons(pokemon)
        }
    })
