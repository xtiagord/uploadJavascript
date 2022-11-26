const cartas = []
let option = ""

do{
   option = prompt(
    "Cartas no baralho: " + cartas.length + 
    "\n1 - Adicionar uma carta "+ 
    "\n2 - Puxar uma carta " + 
    "\n3 - Sair"
   )

switch(option){
    case "1":
        const newCard = prompt("Qual Carta deseja adicionar?")
        cartas.push(newCard)
        break
    case "2":
        const cartaPuxada = cartas.pop ()
        if(!cartaPuxada){
            alert("Não há nenhuma carta no baralho")
        }else{
            alert("Você puxou a carta "+ cartaPuxada)
        }
        break
    case "3":
        alert("Saindo..")
        break
        default:
            alert("Opção Invalida")
    }
    }while (option !== 3);