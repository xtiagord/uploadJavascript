let spaceShipName = prompt("Por Favor digite o nome da espaçonave")

let newCaracter = prompt("Qual caracter deseja substituir?")

let invertedName = ""

for(let i = spaceShipName.length -1; i >= 0; i--){
    if(spaceShipName [i] == newCaracter) {
    break
}     else {
    invertedName += spaceShipName[i]
}
}


alert("\nNome digitado: " + spaceShipName +"\nNome convetido: " + invertedName) 