
let Spaceship = prompt("Qual o nome da pessoa?")

let caracter = prompt("Qual caracteres deseja subistuir ?")

let newCaracter = prompt("Por qual caracter deseja substituir?")

let newSpaceship = ""

for(let i = 0; i < Spaceship.length; i ++){
    if(Spaceship [i] == caracter) {
        newSpaceship += newCaracter
    } else{
        newSpaceship += Spaceship[i]
    }
}
alert("O Novo nome da pessoa é " + newSpaceship + " vulgo mandado")

