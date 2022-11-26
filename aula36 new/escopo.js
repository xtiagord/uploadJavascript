
function triangulo (){  
    const base = parseFloat(prompt("Digite o valor da base"))
    const altura = parseFloat(prompt("Digite o valor da altura"))
    
    return base * altura / 2 
}



function retangulo(){
    const base2 = parseFloat(prompt("Digite o valor da base"))
    const altura2 = parseFloat(prompt("Digite o valor da altura"))

    return base2 * altura2
}

function quadrado(){
    const lado = parseFloat(prompt("Digite o valor do lado"))
    return lado * lado
}


function trapezio(){
    const baseMaior = parseFloat(prompt("Digite o valor da base maior"))
    const baseMenor = parseFloat(prompt("Digite o valor da base menor"))
    const altura3 = parseFloat(prompt("Digite o valor da altura"))

    return (baseMaior + baseMenor) * altura3 / 2
}

function circulo(){
    const raio = parseFloat(prompt("Digite o valor do raio"))

    return (3,14 * raio * raio)
}
let option = ""



do{
    option = prompt("Bem vindo a calculadora Geométrica \nQual área deseja calcular? \n1- Área do triângulo \n2- Área do retângulo \n3- Área do quadrado \n4- Área do trapézio \n5- Área do círculo \n6- Sair do programa. ")
    let resultado = ""

switch (option){
    case "1":
    resultado = triangulo()
    alert("Resultado : " + resultado)
    break

    case "2":
    resultado = retangulo()
    alert("Resultado : " + resultado)
    break

    case "3":
    resultado = quadrado()
    alert("Resultado : " + resultado)
    break

    case "4":
    resultado = trapezio()
    alert("Resultado : " + resultado)
    break

    case "5":
    resultado = circulo()
    alert("Resultado : " + resultado)
    break

    case "6":
        alert("saindo..." )
        break
    default:
        alert("Opção invalida")

}
}while(option !== "6");

