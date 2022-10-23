function pokemonsTypes(pokemonType){
    return pokemonType.map((typeSlot) => `<li>${typeSlot.type.name}</li>`)
}
function listaPokemons(pokemon) {
    return `
        <li>
            <span>${pokemon.order}</span>
            <span>${pokemon.name}</span>
            <div>
                <ol>${pokemonsTypes(pokemon.types)}</ol>
            </div>
        </li>
    `
}

const listaPokemon = document.getElementById("listaPokemon");

pokeAPI.getPokemons(0, 1).then((pokemons = []) => listaPokemon.innerHTML += pokemons.map(listaPokemons).join(""))