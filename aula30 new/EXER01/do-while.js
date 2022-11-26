let option = ""
do { 
option = prompt("Escolaha uma das opções: \n1 - Abrir" + 
                    "\n2 - Comprar" +
                    "\n3 - Vender" + 
                    "\n4 - Alugar" + 
                    "\n5 - Encerrar" )

switch(option){
    case "1": 
        alert("opção abrir foi escolhida")
        break
    case "2":
        alert("opção comprar foi escolhida")
        break
    case "3":
        alert("opção vender foi escolhida")
        break
    case "4":
        alert("opção alugar foi escolhida")
        break
    case "5":
        alert("Encerrando o programa")
        break
    default:
        alert("Escolha uma das 5 opções")
        break
}
}while(option !== "5");          

