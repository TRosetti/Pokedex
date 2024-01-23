
const pokemonList = document.getElementById('pokemonList')
const loadMoreItems = document.getElementById('loadMoreItems')
const maxRecords = 151
const limit = 10
let offset = 0

const pokemons = []; 

function convertPokemonToLi(pokemon){
    return ` <li class="pokemon ${pokemon.type}" onclick="details(${pokemon.number})">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
            
                <div class="detail">
                    <ol class="types">
                       ${pokemon.types.map((type) => `<li class=" type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            
            </li>`
}

function details(pokemonNumber) {
    const pokemon = pokemons.find(p => p.number === pokemonNumber);
    if (pokemon) {
        console.log("Detalhes do Pokemon:", pokemon);
    }
}


function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((newPokemons = []) => {
        pokemons.push(...newPokemons);
        pokemonList.innerHTML += newPokemons.map(convertPokemonToLi).join('');
    });
   
}

loadPokemonItems(offset, limit)


loadMoreItems.addEventListener('click', () => {
    offset += limit
    const qtdRecordNextPage = offset + limit
    if(qtdRecordNextPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItems(offset, newLimit)

        loadMoreItems.parentElement.removeChild(loadMoreItems)
    }else{
        loadPokemonItems(offset, limit)
    }
    
})

