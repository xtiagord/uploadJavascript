
let distanceInlY = prompt("Qual a distanica em anos luz que deseja converter?")

let chosenOption =  prompt("Para qual unidade deseja converter? \n1. Parsec (pc)   \n2. Unidade astronônima (AU) \n3.Quilometros (km/h) \n\n (Digite o número da opção desejada)") 

let choseUnity
let convertedDistance

switch(chosenOption){
    case "1":
        choseUnity = "Parsec"
        convertedDistance = distanceInlY * 0.306601 
        break
    case "2":
        choseUnity = "Unidade astronônima"
        convertedDistance = distanceInlY * 63241.1
        break
    case "3":
        choseUnity = "Quilometros"
        convertedDistance = distanceInlY * 9.5 * Math.pow(10,12)
        break
    default:
        alert("Distancia não foi definida")
    }
    alert("Distancia em anos luz: " + distanceInlY  +"\n Unidade escolhida: " +  choseUnity + "\n Valor da conversão:  " +convertedDistance )