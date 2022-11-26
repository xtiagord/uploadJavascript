const vagasDeEmprego =[]
let = option = ""

function criarVaga (){
    vagasDeEmprego.vaga = prompt("Qual o nome da vaga?")
    vagasDeEmprego.descrição = prompt("Qual a descrição da vaga")
    vagasDeEmprego.data = parseFloat(prompt("Qual a data limite? dd/dd/dddd"))
}

do{
    option = prompt("Bem vindo ao sistema de vagas de emprego! \nEscolha uma das seguintes opções: \n1- Listar vagas disponives \n2- Criar uma nova vaga \n3- Vizualizar uma vaga \n4- Inscrever um candidato em uma vaga \n5- Excluir uma vaga \n6- Sair ")


switch(option){
case "1":
    function exibirElemento(vaga, descrição, data){
        alert({
            vaga,
            descrição,
            data
        })
    }

 default:
    alert("Opção invalida")
    break
}
}while(option !=="6");

