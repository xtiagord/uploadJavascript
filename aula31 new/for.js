const tabuada = prompt("Escolha um número de 1 a 20")
let resultado = ""

for(let fator = 1;
    fator <= 10;
    fator++){ 

    resultado += "->" + tabuada + " x " + fator + " = " + (tabuada * fator) + "\n"
}
alert("Resultado da tabuada de " + tabuada + ";\n\n" + resultado)

