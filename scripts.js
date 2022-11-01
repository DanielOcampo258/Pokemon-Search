
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
    const typeElem = document.getElementById("pkm-type")
    document.getElementById("pkm-strongAgainst").innerText = "Strong Against Type(s):  "
    document.getElementById("pkm-weakAgainst").innerText = "Weak Against Type(s): "
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
        pkmnImage.setAttribute("src", "")
        document.getElementById("pkm-strongAgainst").innerText = ""
        typeElem.innerText = ""
        pkmnName.innerText = "Oops! Pokemon was not found, try again!"
        
    });
}

const setStrengthAndWeakness = (type) =>{
   let strongAgainstEl = document.getElementById("pkm-strongAgainst")
   let weakAgainstEl = document.getElementById("pkm-weakAgainst")
    
  

    let weakAgainst = eval(type).weakAgainst
    console.log("Weak against " + weakAgainst)
    console.log("Strong against " + eval(type).strongAgainst)
    eval(type).strongAgainst.map(sType =>{
        for( weakType of weakAgainst){ 
            if(sType == weakType && (sType != "Dragon"  && sType != "Ghost")){
                const index = weakAgainst.indexOf(weakType)
                if(index > -1){
                    weakAgainst.splice(index, 1)
                }
            }

      }
      strongAgainstEl.innerText += ` ${sType} `
   
    })

    weakAgainst.map(wType => weakAgainstEl.innerText += ` ${wType} `)
    
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


