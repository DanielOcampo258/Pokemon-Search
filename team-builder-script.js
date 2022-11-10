
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

var selectedSlotId = ""
var searchBar = document.getElementById("search-bar");
searchBar.addEventListener("keypress", 
function(event) {
    if (event.key === "Enter") {
    event.preventDefault();
    getPokemon(searchBar.value.toLowerCase());
    }
});

const handleInput = (slot) =>{
  document.getElementById(slot).classList.remove("pk-set")
  selectedSlotId = slot
    const styleForSelected = "border-solid border-4"
    const slotsArr = ["s-1","s-2","s-3","s-4","s-5","s-6"]
    for(currSlot of slotsArr){
        if(currSlot != slot){
          if(!document.getElementById(currSlot).classList.contains("pk-set")){
            document.getElementById(currSlot).innerHTML = "<i>(empty-slot)<i>"
            document.getElementById(currSlot).classList.remove("border-4") 
          }
        }else{
         document.getElementById(currSlot).innerText = "Selected!"
         document.getElementById(currSlot).classList.toggle("border-4")
         
        }
    }

    // const selectedSlot = document.getElementById(slot)
    // selectedSlot.innerText = ""
    
}

/**
 * Function that gets pokemon through the API
 * 
 * @param {
 * } rawInput input that the user passes, null if a pokemon is to be randomly generated, or value of the search bar
 */
const getPokemon = (rawInput) =>{
    
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${rawInput}`)
    .then((response) => response.json())
    .then((data) => {
      const pokemon = new Pokemon(data)
      
      document.getElementById(selectedSlotId).innerHTML = `<img class="w-2/3 border-4 border-solid h-2/3" src=${pokemon.getImage()} />
      <p class="text-3xl">${pokemon.getName()}</p>
      <p class="text-2xl">${pokemon.getTypes()[0] + (pokemon.getTypes()[1]  != null ? ' | ' + pokemon.getTypes()[1] : "")}</p>`
      document.getElementById(selectedSlotId).classList.add("pk-set")
     
    })
    .catch((err) => {
      console.log(err)
        
    });
}

const capitalizeFirstLetter = (string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}
