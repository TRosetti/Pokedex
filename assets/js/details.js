


function detailPokemon(){
    return `<header>
                <h1>${pokemon.name}</h1>
                <p></p>
            </header>
            <div class="types">
                <span class="type grass">grass</span>
                <span class="type electric">electric</span>
            </div>
            <section>
                
            </section>`
}




function convertPokemonToLi(pokemon){
    return ` <li class="pokemon ${pokemon.type}" onclick="details()">
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