
var searchBar = document.getElementById("search-bar");
searchBar.addEventListener("keypress", 
function(event) {
    if (event.key === "Enter") {
    event.preventDefault();
    getPokemon(searchBar.value.toLowerCase());
    }
});

/**
 * Function that gets pokemon through the API
 * 
 * @param {
 * } rawInput input that the user passes, null if a pokemon is to be randomly generated, or value of the search bar
 */
const getPokemon = (rawInput) =>{
    clearIntro()
    const pkmnName = document.getElementById("pkm-name")
    const pkmnImage = document.getElementById("pkm-img")
    const typeElem = document.getElementById("pkm-type");
    if (rawInput == null)
        rawInput = Math.floor(Math.random() * 905);
   
    fetch(`https://pokeapi.co/api/v2/pokemon/${rawInput}`)
    .then((response) => response.json())
    .then((data) => {
       pkmnName.innerText = `${capitalizeFirstLetter(data.name)}` 
       pkmnImage.setAttribute("src", data.sprites.front_default)
       typeElem.innerText = "Type(s): "
       for(let i=0; i<data.types.length; i++){
        typeElem.innerText += ` ${capitalizeFirstLetter(data.types[i].type.name)} |`
        setStrengthAndWeakness(data.types[i].type.name)
        
      }
      typeElem.innerText = typeElem.innerText.slice(0, -1);
    
    })
    .catch((err) => {
        console.log("Pokemon not found", err);
        
    });
}

const setStrengthAndWeakness = (type) =>{
   
    console.log(eval(type).strongAgainst)
}
/**
 * Removes the introduction text to make way for the Pokemon Wrapper
 * 
 */
const clearIntro = () =>{
  if(document.getElementById("intro") != null) //makes sure it does not remove an element that does not exist
    document.getElementById("intro").remove()
    
}
/**
 * function that returns the same string with the first letter capitalized
 * @param {string} string that will have first letter capitalized
 * @returns new transformed string
 */
const capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}


