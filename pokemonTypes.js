const water = {
    strongAgainst: ["Fire", "Ground", "Rock"],
    weakAgainst: ["Electric", "Grass"]
}

const grass = {
    strongAgainst: ["Ground", "Water", "Rock"],
    weakAgainst: ["Flying", "Poison", "Bug", "Fire", "Ice"]
}

const fire = {
    strongAgainst: ["Bug", "Steel", "Grass", "Ice"],
    weakAgainst: ["Ground", "Rock", "Water"]
}

const normal = {
    strongAgainst: [""],
    weakAgainst: ["Fighting"]
}

const fighting = {
    strongAgainst: ["Normal", "Rock" , "Steel", "Ice", "Dark"],
    weakAgainst: ["Flying", "Psychic", "Fairy"]
}

const dragon = {
    strongAgainst: ["Dragon"],
    weakAgainst: ["Ice, Dragon, Fairy"]
}

const steel = {
    strongAgainst: ["Rock", "Ice", "Fairy"],
    weakAgainst: ["Fighting", "Ground", "Fire"]
}

const rock = {
    strongAgainst: ["Flying", "Bug", "Fire", "Ice"],
    weakAgainst: ["Fighting", "Ground", "Steel", "Water", "Grass"]
}

const flying = {
    strongAgainst: ["Fighting", "Bug", "Grass"],
    weakAgainst: ["Rock", "Electric", "Ice"]
}

const ground = {
    strongAgainst: ["Poison", "Rock", "Steel", "Fire", "Electric"],
    weakAgainst: ["Water", "Grass", "Ice"]
}

const poison = {
    strongAgainst: ["Grass", "Fairy"],
    weakAgainst: ["Ground", "Psychic"]
}

const psychic = {
    strongAgainst: ["Fighting", "Poison"],
    weakAgainst: ["Bug, Ghost, Dark"]
}

const bug = {
    strongAgainst: ["Grass", "Psychic", "Dark"],
    weakAgainst: ["Flying", "Rock", "Fire"]
}

const dark = {
    strongAgainst: ["Ghost", "Psychic"],
    weakAgainst: ["Fighting", "Bug", "Fairy"]
}

const electric = {
    strongAgainst: ["Flying", "Water"],
    weakAgainst: ["Ground"]
}

const ice = {
    strongAgainst: ["Flying", "Ground", "Grass", "Dragon"],
    weakAgainst: ["Fighting", "Rock", "Steel", "Fire"]
}

const ghost = {
    strongAgainst: ["Ghost", "Psychic"],
    weakAgainst: ["Ghost", "Dark"]
}

const fairy = {
    strongAgainst: ["Fighting", "Dragon", "Dark"],
    weakAgainst: ["Poison", "Steel"]
}