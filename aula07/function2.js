let spaceShipName = prompt("digite o nome da nave")
let spaceShipVelocity = 0
let choseOption 

function showMenu() {
    let option
    while (option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt ("O que deseja fazer? \n" + 
        "1- Acelerar a nave em 5km/h \n" + 
        "2- Desacelerar a neva em 5 km/h \n" + 
        "3- Imprimir dados de bordo \n" +
        "4- Sair do programa")    
    }
    return option
}
function speedUp(velocity){
    let newvelocity = velocity + 5
    return newvelocity
}
function slowDown (velocity){ 
    let newvelocity = velocity - 5
    if(newvelocity < 0){
        newvelocity = 0
    }
    return newvelocity
}
function printSpaceshipBoardData (name, velocity){
    alert("Espaçonave: " + name + "\n Velocidade: " + velocity + "km/s")
}

do {
    choseOption = showMenu()
    switch(choseOption){
        case "1":
            spaceShipVelocity = speedUp(spaceShipVelocity)
            break
        case "2":
            spaceShipVelocity = slowDown(spaceShipVelocity)
            break
        case "3":
            printSpaceshipBoardData(spaceShipName, spaceShipVelocity)
            break
        default:
            alert ("encerrando programa de bordo") 
    }
} while (choseOption !=4)