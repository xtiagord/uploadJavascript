let turboForce = {
    velocity: 0,
    speedUp: function(acceleration){
        this.velocity += acceleration
    }
}

function NameTurboForce(){
    turboForce.type = prompt("Marca do veiculo")
    turboForce.name = prompt("Nome do veiculo")
    turboForce.maxVelocity = Number(prompt("Informe a velocidade maxima do veiculo (km/h)"))
}

function acceleration(){
    acceleration = Number (prompt("Quanto você deseja acelerar? (km/h)"))
    turboForce.speedUp(acceleration)
    if(turboForce.velocity > turboForce.maxVelocity){ 
    alert("Velocidade Maxima ultrapassada!" + 
    "\n velocidade do veiculo: " + turboForce.velocity + "km/h" + 
    "\n Máxima do veiculo: " + turboForce.maxVelocity + "km/h") 
}
}
function stop(){
    alert("Nome do veiculo: " + turboForce.name +
    "\n Marca do veiculo: " + turboForce.type +
    "\n Velocidade máxima do veiculo: " + turboForce.maxVelocity + "km/h" + 
    "\n Velocidade do veiculo: " + turboForce.velocity + "km/h")
    turboForce.velocity = 0
}

function showMenu(){
    let choseOption
    do{
        choseOption = prompt("Você deseja \n1 - Acelerar \n2- Parar")
        switch (choseOption){
            case "1":
                acceleration()
                break
            case "2":
                stop()
                break
            default:
                alert("Opção Invalida")
        }
    }while(choseOption != "2")
}
NameTurboForce()
showMenu()