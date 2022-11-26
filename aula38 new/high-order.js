/*function exibirElemento(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ["maça", "laranja","banana", "Mamão"]
lista.forEach(exibirElemento)

lista.forEach(function(elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    })
})*/

// Metodo Map

const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

/*const nomes =[]

for (i = 0; i<personagens.length; i++){
    nomes.push(personagens[i].nome)
}
console.log(nomes)

const classes = []
for (a = 0; a<personagens.length; a++){
    classes.push(personagens[a].classe)
}

console.log(classes)*/

/*const nomes= personagens.map(function(personagens){
    return personagens.nome
    
})
console.log(nomes)*/


//Metodo Filter

/*const orcs = []

for (let index = 0; index < personagens.length; index++) {
   if(personagens[index].raca == "Orc"){
    orcs.push(personagens[index])
   }
    
}

console.log(orcs)*/

/*const orcs = personagens.filter(function(personagem){
    return personagem.raca === "Orc"

})

console.log(orcs)*/

//metodo  Reduce

/*const nivelTotal = personagens.reduce(function(valorAcumulado, personagem){
    return valorAcumulado + personagem.nivel
}, 0)

console.log(nivelTotal)*/


/*const racas = personagens.reduce(function(valorAcumlado, personagem){
    if(valorAcumlado[personagem.raca]){
        valorAcumlado[personagem.raca].push(personagem)
    }else{
        valorAcumlado[personagem.raca] = [personagem]
    }

    return valorAcumlado
},{})


console.log(racas)*/


// Metodo Sort

const niveis = personagens.slice().sort(function(valorAcumlado, personagem){
    return personagem.nivel - valorAcumlado.nivel  
})

console.log(niveis)
console.log(personagens)

