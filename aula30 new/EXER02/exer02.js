let newMoney = parseFloat(prompt("Qual a quantidade de dinheiro disponivel?"))
let money = ""




do{
    money = prompt("quantidade de dinheiro disponivel: R$" + newMoney +
        "\n1 - Deseja Adicionar" + 
        "\n2 - Remover Dinheiro"+
        "\n3 - Encerrar programa")



switch (money){
    case "1":
    newMoney += parseFloat(prompt("Qual quantidade de dinheiro deseja adicionar?"))
        break
    case "2":
        newMoney -= parseFloat(prompt("Qual quantidade de dinheiro deseja remover?"))
        break
    case "3":
        alert("saindo do programa")
        break
    default:
        alert("entrada invalida")
        break
}
}while(money !== "3");