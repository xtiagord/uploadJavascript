let nameVechicleOne = prompt("Nome do primeiro veiculo")
console.log(nameVechicleOne)
let numberVechicleOne = prompt("Velocidade do primeiro veiculo")
console.log(numberVechicleOne)

let nameVechicletwo = prompt("Nome do Segundo veiculo")
console.log(nameVechicletwo)
let numberVechicletwo = prompt("Velocidade do Segundo veiculo")
console.log(numberVechicletwo)


if(numberVechicleOne > numberVechicletwo){
        alert("veiculo " + nameVechicleOne + " mais rapido que " + nameVechicletwo)
    } else if(numberVechicletwo > numberVechicleOne){
        alert("veiculo " + nameVechicletwo + " mais rapido que " + nameVechicleOne)
    } else if(numberVechicleOne == numberVechicletwo){
        alert("veiculo " + nameVechicleOne + " possui a mesma velocidade que " + nameVechicletwo)
    }
