

const slotsArray = ["s-1","s-2","s-3","s-4","s-5","s-6"]
var pokemonArray = []
class Pokemon{
    constructor(data){
      this.name = data.name
      this.img = data.sprites.front_default
      //data.types
      this.types  = () =>{
          let typesArray = [];
          for(let i=0; i<data.types.length; i++){
            typesArray.push(`${capitalizeFirstLetter(data.types[i].type.name)}`)
          }
          return typesArray;
        }
      this.strenghts = this.setStrenghts()
      this.weaknesses = this.setWeaknesses()
      }
  
      getName(){
        return capitalizeFirstLetter(this.name)
      }
      
      getImage(){
        return this.img
      }
  
      getTypes(){
        return this.types();
      }
      
      setStrenghts(){
        let strongAgainstArr = []
        for (let type of this.types()){
          type = type.toLowerCase()
          if(type != "normal")
            strongAgainstArr = strongAgainstArr.concat(window[type].strongAgainst)
         }
     
         if(this.types().length == 2){
          strongAgainstArr = strongAgainstArr.filter((type,index) =>{
              return strongAgainstArr.indexOf(type) == index 
              && !this.types().includes(type)
          })
          
        
    
         }
         //console.log(strongAgainstArr)
         return strongAgainstArr;
      }

      setWeaknesses(){
        let weakAgainstArr = []
        let resistantAgainstArr = []
        for (let type of this.types()){
          type = type.toLowerCase() 
          console.log(window[`${type}`])
          weakAgainstArr = weakAgainstArr.concat(window[type].weakAgainst)
          resistantAgainstArr = resistantAgainstArr.concat(window[type].resistantAgainst)
         }

         weakAgainstArr = weakAgainstArr.filter((type,index) =>{
          return weakAgainstArr.indexOf(type) == index //removes duplicates from weakness list
          && !this.strenghts.includes(type)  // removes overlapping values from pokemons strongAgainst list
          && !this.types().includes(type)  // removes the Pokemons type from the weakness list
          && !resistantAgainstArr.includes(type) //removes type that Pokemon is resistant to from weakness list
          })
        //  console.log(weakAgainstArr)
          return weakAgainstArr;

         }

         getStrengths(){
          return this.strenghts
         }

         getWeaknesses(){
          return this.weaknesses
         }
      }
      
    

  
const handleUserInput = (input) =>{
  input != null ? getPokemon(document.getElementById(input).value.toLowerCase()) : getPokemon(Math.floor(Math.random() * 905))
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

const selectSlot = (slot) =>{
  document.getElementById(slot).classList.remove("pk-set")
  selectedSlotId = slot
    const styleForSelected = "border-solid border-4"
  
    for(let currSlot of slotsArray){
        if(currSlot != slot){
          if(!document.getElementById(currSlot).classList.contains("pokemon-is-set")){
            document.getElementById(currSlot).innerHTML = "<i>(empty-slot)<i>"
            document.getElementById(currSlot).classList.remove("border-4") 
          }
        }else{
         document.getElementById(currSlot).innerText = "Selected!"
         document.getElementById(currSlot).classList.toggle("border-4")
         document.getElementById(selectedSlotId).classList.replace("bg-white", "bg-gray-400")
         
        }
    }


    // const selectedSlot = document.getElementById(slot)
    // selectedSlot.innerText = ""
    
}

const updatePokemonArray = () =>{
  pokemonArray = pokemonArray.filter(pokemon =>{
    for(slot of slotsArray){
      if(document.getElementById(slot).innerHTML != null && document.getElementById(slot).innerHTML.includes(pokemon.getName()) )
       return true
    }
    return false
  })

  console.log(pokemonArray)

}

const setTypeAnalytics = () =>{
  updatePokemonArray()
  //console.log(pokemonArray)
  const teamWeaknessesObject = {}

  const teamStrenghtsObject = {}

  
  for(let pokemon of pokemonArray){
    
    setTeamWeaknesses(pokemon, teamWeaknessesObject)
    setTeamStrenghts(pokemon, teamStrenghtsObject)
   
  }



  
  displayTeamStrenghts(teamStrenghtsObject)
  displayTeamWeaknesses(teamWeaknessesObject)
}

const displayTeamStrenghts = (teamStrenghts) =>{
  for(let strength in teamStrenghts){
    let numOfPkStrong = teamStrenghts[strength]   
    styleTypeStatistic(document.getElementById(`str-${strength.toLowerCase()}`), numOfPkStrong)
  }
}

const displayTeamWeaknesses = (teamWeaknesses) =>{
  for(let weakness in teamWeaknesses){
    let numOfPkWeak = teamWeaknesses[weakness] 
    styleTypeStatistic(document.getElementById(`weak-${weakness.toLowerCase()}`), numOfPkWeak)
 }
}

const styleTypeStatistic = (statisticElement, numOfPokemonInStat) =>{
  let percentOfTeamInStat = (numOfPokemonInStat / 6) * 100
  statisticElement.children[1].style.width = percentOfTeamInStat + "%"
  statisticElement.children[1].setAttribute("data-content", numOfPokemonInStat)
  statisticElement.children[1].classList.add("wrapper")
  statisticElement.children[2].style.width = (1 - percentOfTeamInStat) + "%"
}


const setTeamWeaknesses = (pokemon, teamWeaknessesObject) =>{
  for(weakness of pokemon.getWeaknesses()){
    if(teamWeaknessesObject.hasOwnProperty(`${weakness}`)){
      teamWeaknessesObject[`${weakness}`] += 1
    }else{
      teamWeaknessesObject[`${weakness}`] = 1;
    }
  }
}
const setTeamStrenghts = (pokemon, teamStrenghtsObject) =>{
  for(strength of pokemon.getStrengths()){
    if (teamStrenghtsObject.hasOwnProperty(`${strength}`)){
      teamStrenghtsObject[`${strength}`] += 1
    }else{
      teamStrenghtsObject[`${strength}`] = 1;
    }
  }
}
/**
 * Function that gets pokemon through the API
 * 
 * @param {
 * } userInput input that the user passes, null if a pokemon is to be randomly generated, or value of the search bar
 */
const getPokemon = (userInput) =>{
    
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
    .then((response) => response.json())
    .then((data) => {
      const pokemon = new Pokemon(data)
      document.getElementById(selectedSlotId).classList.replace("bg-gray-400", "bg-white")
      document.getElementById(selectedSlotId).innerHTML = `<img class="md:w-2/3 h-2/3" src=${pokemon.getImage()} />
      <p class="md:text-3xl">${pokemon.getName()}</p>
      <p class="md:text-2xl">${pokemon.getTypes()[0] + (pokemon.getTypes()[1]  != null ? ' | ' + pokemon.getTypes()[1] : "")}</p>`
      document.getElementById(selectedSlotId).classList.add("pokemon-is-set")
      pokemonArray.push(pokemon)
      setTypeAnalytics()
    })
    .catch((err) => {
      console.log(err)
        
    });
}


const capitalizeFirstLetter = (string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}
