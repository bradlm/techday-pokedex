function pokemonInfoCard (pokemonObject) {
  // Here is hard-coded Pokemon data!
  // TODO 4: fill out variables with some info!
  let name = `name`;
  let number = `number`;
  let image_name = `image_name`; // try pikachu!
  let description = `description`;
  // Here is your return statement
  // It outputs the HTML for the info card!
  // TODO 5c: fill this out with info from pokemonObject!
  return `
    <div class="flex-center-col pokemon-info-card">
      <h2>${number}: ${name}</h2>
      <img src="misc/images/${image_name}.png" />
      ${description}
    </div>
  `;
}

// TODO 5a: move variables from pokemonInfoCard into properties of myPokemon
let myPokemon = {

};
/** 
 * This is where the above functions are invoked.
 * That just means that we are sending inputs to the function
 * and expecting it to do something like return an output or
 * cause some side effect.
 *
 * The pokemonCardInfo receives pokemonData from getPokemonData,
 * then the render function sends it all to the screen. */
//TODO 2: set card to some value.
//TODO 3: set card to the output of pokemonInfoCard()
//TODO 5b: pass myPokemon to pokemonInfoCard
//TODO 6a: pass pokemonData[0] instead of myPokemon.
//TODO 6b: try using other entries in pokemonData.
//TODO 7: pass pokemonInfoCard to pokemonData.map.
let card;
render(card);