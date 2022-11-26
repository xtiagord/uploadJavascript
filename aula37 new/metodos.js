let pessoa  = {
    nome: "Tiago",
    idade: 25,
    dizerOla(){
        //console.log("Olá, mundo! Meu nome é " + this.nome)
    }
}

//this. referencia o objeto


//console.log(pessoa)
pessoa.dizerOla()


//funções recursivas//

function dividir(num){
    console.log(num)
    if(num % 2 === 0){
        dividir(num/2)
    }else {
        return num
    }
    
}
//dividir(88)


function dobrar(num){
    console.log(num)
    dobrar (num*2)
}
//dobrar(0)

function fatorial(num){
    console.log("Número: " + num)
    if(num === 0){
        return 1
}else if (num  === 1 ){
    return 1 
}else {
    console.log(num + "* !" + (num - 1))
    return num * fatorial(num - 1)
}
}

//console.log(fatorial(5))


//funções anônimas

function somar(a,b){
    return a + b

}

const operação = somar

console.log(operação(4,5))