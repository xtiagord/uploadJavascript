const measurementValue = prompt ("Digite o valor em metros que deseja converter?")
const result = prompt("para qual medida deseja converter? \n1 - milímetro (mm) \n2 - centímetro (cm)\n3 - decímetro (dm) \n4 - decâmetro (dam) \n5 - hectômetro (hm) \n6 - quilômetro (km)\n7 - Converter para todas\n")

const numberResults = parseFloat(result)

let mmResult = (measurementValue * 1000)
let mmNewResult = (mmResult)

let cmResult = (measurementValue * 100)
let cmNewResult = (cmResult)

let dmResult = (measurementValue * 10)
let dmNewResult = (dmResult)

let damResult = (measurementValue / 10)
let damNewResult = (damResult)

let hmResult = (measurementValue / 100)
let hmNewResult = (hmResult)

let kmResult = (measurementValue / 1000)
let kmNewResult = (kmResult)

switch(numberResults){
    case 1:
        alert("O resultado é: " + mmNewResult + " mm")
        alert("Valor a ser convertido: " + measurementValue + " m" + "\nvalor convertido: " + mmNewResult + " mm")
        break
    case 2:
        alert("O resultado é: " + cmNewResult + " cm")
        alert("Valor a ser convertido: " + measurementValue + " m" + "\nvalor convertido: " + cmNewResult + " cm")
        break
    case 3:
        alert("O resultado é: " + dmNewResult + " dm")
        alert("Valor a ser convertido: " + measurementValue + " m" + "\nvalor convertido: " + dmNewResult + " dm")
        break
    case 4:
        alert("O resultado é: " + damNewResult + " dam")
        alert("Valor a ser convertido: " + measurementValue + " m" + "\nvalor convertido: " + damNewResult + " dam")
        break
    case 5:
        alert("O resultado é: " + hmNewResult + " hm")
        alert("Valor a ser convertido: " + measurementValue + " m" + "\nvalor convertido: " + hmNewResult+ " hm")
        break
    case 6:
        alert("O resultado é: " + kmNewResult + " km")
        alert("Valor a ser convertido: " + measurementValue + " m" + "\nvalor convertido: " + kmNewResult+ " km")
        break
    case 7:
        alert("o resultado em Milimitro: " + mmNewResult + "\nResultado em centimetro: " + cmNewResult+ 
            "\nResultado em decimetro: " + dmNewResult + "\nResultado em hectometro: " + hmNewResult + 
            "\nResultado em decametro: " + damNewResult + "\nResultado em quilometros: " + kmNewResult)
        break
    default:
        alert("Finalizando...")
}
