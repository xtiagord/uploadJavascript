let warpCount = 0

let velocity = ""

let nome = prompt("Digite o nome da nave")

velocity = prompt("Escolha uma das opções \n \n1 - Acelerar a nave \n2 - Desacelerar a nave \n3 - Sair do computador de bordo ")

while (velocity == "1"){
warpCount += 5
alert("Velocidade definida para: " + warpCount)
velocity = prompt("Qual opção deseja escolher? \n 1 -Acelerar \n 2 - Desacelerar \n 3 - Sair")
} 
while (velocity == "2"){
    warpCount -= 5
    alert("Velocidade definida para: " + warpCount)
    velocity = prompt("deseja aumentar a velociade? \n 1 - Acelerar \n 2 - Desacelerar \n 3 - Sair")
} 


alert("Nome da nave: " + nome + "\nVelocidade Definida: " + warpCount)