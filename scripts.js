class Pokemon{
  constructor(data){
    this.name = data.name
    this.img = data.sprites.front_default
    this.types = data.types
    }

    getName(){
      return capitalizeFirstLetter(this.name)
    }
    
    getImage(){
      return this.img
    }

    getTypes(){
      let typesArr = [];
      for(let i=0; i<this.types.length; i++){
        typesArr.push(`${capitalizeFirstLetter(this.types[i].type.name)}`)
        
      }
      return typesArr;
    }
     
    
  }


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
       const pokemon = new Pokemon(data)
       pkmnName.innerText = pokemon.getName()
       pkmnImage.setAttribute("src", pokemon.getImage())
       typeElem.innerText = "Type(s): " + formatTypes(pokemon.getTypes())
      setStrengthAndWeakness(pokemon.getTypes())
      //typeElem.innerText = typeElem.innerText.slice(0, -1);
    
    })
    .catch((err) => {

        console.log(err)
        pkmnImage.setAttribute("src", "")
        document.getElementById("pkm-strongAgainst").innerText = ""
        typeElem.innerText = ""
        pkmnName.innerText = "Oops! Pokemon was not found, try again!"
        document.getElementById("pkm-strongAgainst").innerText = ""
        document.getElementById("pkm-weakAgainst").innerText = ""
        
    });
}

const formatTypes = (rawTypesArray) => {
   formatedTypesString = ""
  for(type of rawTypesArray){
    formatedTypesString += " " + type + " |"
  }

  formatedTypesString = formatedTypesString.slice(0,-1)

  return formatedTypesString;
}

const setStrengthAndWeakness = (typesArray) =>{
   let strongAgainstEl = document.getElementById("pkm-strongAgainst")
   let weakAgainstEl = document.getElementById("pkm-weakAgainst")
   let weakAgainstArr = []
   let strongAgainstArr = []
   let resistantAgainstArr = []

   for (type of typesArray){
    type = type.toLowerCase()
    weakAgainstArr = weakAgainstArr.concat(`${type}`.weakAgainst)
    strongAgainstArr = strongAgainstArr.concat(`${type}`.strongAgainst)
    resistantAgainstArr = resistantAgainstArr.concat(`${type}`.resistantAgainst)
   }
   
   //Correct for double types
   if(typesArray.length == 2){
    strongAgainstArr = strongAgainstArr.filter((type,index) =>{
        return strongAgainstArr.indexOf(type) == index 
        && !typesArray.includes(type)
    })

    weakAgainstArr = weakAgainstArr.filter((type,index) =>{
    return weakAgainstArr.indexOf(type) == index //removes duplicates from weakness list
    && !strongAgainstArr.includes(type)  // removes overlapping values from pokemons strongAgainst list
    && !typesArray.includes(type)  // removes the Pokemons type from the weakness list
    && !resistantAgainstArr.includes(type) //removes type that Pokemon is resistant to from weakness list
    })
   }
   if(!typesArray.includes("Normal") || typesArray.length != 1){ //Normal types are not srong against any type so would not make sense to add 
     strongAgainstArr.map(sType => strongAgainstEl.innerText += ` ${sType}`)
     
   }else{
    strongAgainstEl.innerText = ""
   }
   console.log(weakAgainstArr, strongAgainstArr, typesArray)
   weakAgainstArr.map(wType => weakAgainstEl.innerText += ` ${wType} `)
 // console.log(weakAgainstArr)

    
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