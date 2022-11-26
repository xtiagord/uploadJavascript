let warpCount = 0

let chosenOption = ""

let nome = prompt("Qual o nome da nave?")

chosenOption = prompt("Deseja entrar em dobra espacial? \n 1 - SIM \n 2 - NÃO")

while (chosenOption == "1"){
    warpCount += 1
    chosenOption = prompt("deseja realizar a proxima dobra? \n 1 - sim \n 2 - não")
}

alert("Nome da nave: " + nome  + "\nNúmero de dobras: " + warpCount) 