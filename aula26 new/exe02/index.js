const valor1 = prompt("Digite o primeiro valor")
const valor2 = prompt("digite o segundo valor")

const x = parseFloat(valor1)
const y = parseFloat(valor2)

const resultado1 = (valor1 * valor2)
const resultado2 = (valor1 / valor2)
const resultado3 = (valor1 - valor2)
const resultado4 = parseFloat (valor1 + valor2)

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)

alert("Resultado: " + "\nMultiplicação: " + resultado1 + "\nDivisão: " + resultado2 +"\nSubtração: " + resultado3 +"\nAdição: " + resultado4)