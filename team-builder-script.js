


var searchBar = document.getElementById("search-bar");
searchBar.addEventListener("keypress", 
function(event) {
    if (event.key === "Enter") {
    event.preventDefault();
    getPokemon(searchBar.value.toLowerCase());
    }
});

const handleInput = (slot) =>{
    const selectedSlot = document.getElementById(slot)
    selectedSlot.innerText = ""
    
}

/**
 * Function that gets pokemon through the API
 * 
 * @param {
 * } rawInput input that the user passes, null if a pokemon is to be randomly generated, or value of the search bar
 */
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

const getPokemon = (rawInput) =>{
    
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${rawInput}`)
    .then((response) => response.json())
    .then((data) => {
      const pokemon = new Pokemon(data)
    })
    .catch((err) => {
      console.log(err)
        
    });
}


