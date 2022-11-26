let consVelocity = 150
let ChoseOption

function showMenu() {
    let option
    while (option != "1" && option != "2"){
        option = prompt ("O que deseja fazer \n" +
        "1 - Desacelerar a nave \n" +
        "2- Manter velocidade")
    }
    return option
}
function slowDown (velocity){
    let newvelocity = velocity - 20
    return newvelocity
}

function print (velocity){
    alert(velocity)
}
do {
    ChoseOption = showMenu()
    switch(ChoseOption){
        case "1":
            consVelocity = slowDown (consVelocity)
            break
    } }     