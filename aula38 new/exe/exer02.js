const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 42, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 26, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 28, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

const niveis = personagens.reduce(function(valor, personagem){
    if(valor[personagem.nivel]){
        valor[personagem.nivel].push(personagem)
    }else{
        valor[personagem.nivel] = [personagem]
    }

    return valor

},{})

console.log(niveis)

const classes = personagens.reduce(function(valor, personagem){
    if(valor[personagem.classe]){
        valor[personagem.classe].push(personagem)
    }else{
        valor[personagem.classe]= [personagem]
    }

    return valor
},{})

console.log(classes)

