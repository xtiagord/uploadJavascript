const arr = ["fusca", "bmw", "mercedes", "audi", "jeep", "chevrolet"]


//Adicionar Elementos no final
//push

arr.push ("bugatti")


//Adiciona elemntos no começo
//unshift

arr.unshift ("maserati")

//Remover Elementos do final
//pop

const ultimoElemento = arr.pop ()
console.log(arr)
console.log(ultimoElemento)

//Remover no começo
//shift

const primeiroElemento = arr.shift()
console.log(arr)
console.log(primeiroElemento)

//pesquisar por um elemento
//includes

const inclui = arr.includes("bmw")
console.log(inclui)

//pesquisar pelo indice
//indeOf

const indice = arr.indexOf("bmw")
console.log(indice)

//cortar 
//slice e 

const cortar  = arr.slice(0,3)
console.log(cortar)

//concatenar
//concat

const concatenar = arr.concat("lamborghini", "voyage", "sandero", "f1")


//Substituição Dos Elementos
//splice

const substituit = concatenar.splice(indice,2,"maverick", "r1")
console.log(substituit)
console.log(concatenar)


//Iterar sobre os Elementos
for (let indice = 0; indice < concatenar.length; indice++){
    const elemento = concatenar[indice]
    console.log(elemento + " Se encontra na posição "+ indice)
}
