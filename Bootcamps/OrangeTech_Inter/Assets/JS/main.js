const offset = 0
const limit = 10 //total de pokémons = 905
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function listaPokemons(pokemon){
    return `
        <li>
            <span>${pokemon.name}</span>
        </li>
    `
}

const listaPokemon = document.getElementById("listaPokemon");

fetch(url)
    .then((response) => response.json()) //Quando usar Arrow Function em apenas uma linha não precisa usar o return. 
    .then((jsonBody) => {
        for(let i = 0; i < jsonBody.results.length; i++){
            listaPokemon.innerHTML += listaPokemons(jsonBody.results[i])
        }
    })
    .catch((error) => console.log(error))
    .finally(() => console.log("Requisição concluída"))