/** 
 * render prints, or 'renders', items to the screen
 * It can take an array or a single value */
function render (elementArray = ['']) {
  if(!Array.isArray(elementArray)) {
    elementArray = [elementArray];
  }
  document.querySelector("#App").innerHTML = `
    <h1>Pokedex App</h1>
    <div id="pokemon-info">
      ${
        elementArray.reduce(function (a,b) {
          return a + b;
        })
      }
    </div>
  `;
}