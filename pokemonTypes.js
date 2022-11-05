const water = {
    strongAgainst: ["Fire", "Ground", "Rock"],
    weakAgainst: ["Electric", "Grass"],
    resistantAgainst: ["Ice", "Steel"]
}

const grass = {
    strongAgainst: ["Ground", "Water", "Rock"],
    weakAgainst: ["Flying", "Poison", "Bug", "Fire", "Ice"],
    resistantAgainst: ["Electric", "Steel"]
}

const fire = {
    strongAgainst: ["Bug", "Steel", "Grass", "Ice"],
    weakAgainst: ["Ground", "Rock", "Water"],
    resistantAgainst: ["Fairy"]
}

const normal = {
    strongAgainst: [""],
    weakAgainst: ["Fighting"],
    resistantAgainst: [""]
}

const fighting = {
    strongAgainst: ["Normal", "Rock" , "Steel", "Ice", "Dark"],
    weakAgainst: ["Flying", "Psychic", "Fairy"],
    resistantAgainst: ["Bug"]
}

const dragon = {
    strongAgainst: ["Dragon"],
    weakAgainst: ["Ice, Dragon, Fairy"],
    resistantAgainst: ["Fire", "Water", "Electric" , "Grass"]
}

const steel = {
    strongAgainst: ["Rock", "Ice", "Fairy"],
    weakAgainst: ["Fighting", "Ground", "Fire"],
    resistantAgainst: ["Normal", "Grass", "Flying", "Psychic", "Bug", "Dragon"]
}

const rock = {
    strongAgainst: ["Flying", "Bug", "Fire", "Ice"],
    weakAgainst: ["Fighting", "Ground", "Steel", "Water", "Grass"],
    resistantAgainst: ["Normal", "Poison"]
}

const flying = {
    strongAgainst: ["Fighting", "Bug", "Grass"],
    weakAgainst: ["Rock", "Electric", "Ice"],
    resistantAgainst: ["Ground"]
}

const ground = {
    strongAgainst: ["Poison", "Rock", "Steel", "Fire", "Electric"],
    weakAgainst: ["Water", "Grass", "Ice"],
    resistantAgainst: [""]
}

const poison = {
    strongAgainst: ["Grass", "Fairy"],
    weakAgainst: ["Ground", "Psychic"],
    resistantAgainst: ["Fighting", "Bug"]
}

const psychic = {
    strongAgainst: ["Fighting", "Poison"],
    weakAgainst: ["Bug, Ghost, Dark"],
    resistantAgainst: [""]
}

const bug = {
    strongAgainst: ["Grass", "Psychic", "Dark"],
    weakAgainst: ["Flying", "Rock", "Fire"],
    resistantAgainst: ["Fighting", "Ground"]

}

const dark = {
    strongAgainst: ["Ghost", "Psychic"],
    weakAgainst: ["Fighting", "Bug", "Fairy"],
    resistantAgainst: [""]
    
}

const electric = {
    strongAgainst: ["Flying", "Water"],
    weakAgainst: ["Ground"],
    resistantAgainst: ["Steel"]
}



const ice = {
    strongAgainst: ["Flying", "Ground", "Grass", "Dragon"],
    weakAgainst: ["Fighting", "Rock", "Steel", "Fire"],
    resistantAgainst: ["Ice"]
}

const ghost = {
    strongAgainst: ["Ghost", "Psychic"],
    weakAgainst: ["Ghost", "Dark"],
    resistantAgainst: ["Bug"]
}

const fairy = {
    strongAgainst: ["Fighting", "Dragon", "Dark"],
    weakAgainst: ["Poison", "Steel"],
    resistantAgainst: ["Bug"]
}