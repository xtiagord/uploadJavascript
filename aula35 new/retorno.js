function calcularMedia (a, b){
    const media = (a+b) / 2
    return media

}
const resultado = calcularMedia(20,10)
//alert("a média é: "+ resultado)


function CriarProduto (nome, preço){
    const produto = {
        nome : nome,
        preço: preço,
        estoque: 1 
    }
    return produto
}

const notebook = CriarProduto("Notebook i7, 8gb ram", 2500)
const ps5 = CriarProduto("ps5", 4000)
//console.log(notebook)
//console.log(ps5)


function areaRetangular (base, altura){
    const area = base * altura
    return area
}

//console.log(areaRetangular(10, 2))

function areaQuadrada (lado){
    return areaRetangular(lado, lado)
}

//console.log(areaQuadrada(9))

function ola(){
    let text = "mundo"
    text = "ola, mundo"
    console.log(text)
    return text
}
//console.log(ola())

function maiorIdade(idade){
    if (idade >= 18){
        return "Maior de idade"
    }else{
        return "menor de idade"
    }
}
const idadeDE = maiorIdade(20)
const idadeDf = maiorIdade(15)

alert(idadeDE )
alert(idadeDf)