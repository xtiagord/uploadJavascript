const vagasDeEmprego = []

function listarVaga(){
    const vagasEmlista = vagasDeEmprego.reduce(function(textoFinal, vaga, indice){
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += "(" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
        
    },"")
    
    alert(vagasEmlista)
}

function criar() {
const nome = prompt("Qual o nome da vaga?")
const descrição = prompt("Qual a descrição da vaga")
const data = prompt("Qual a data limite? dd/dd/dddd")

const confirma = confirm(
    "Salvar essa vaga de emprego?\n"+ 
    "\nNome da vaga: " + nome + 
    "\nDescrição: " + descrição + 
    "\nData Limite: " + data)

    if(confirma){
        const criar = {nome, descrição, data, candidatos:[]}
       vagasDeEmprego.push(criar)
       alert("Vaga Criada")
    }
}

function VizualizarNovaVaga(){
    const indice = prompt("Qual indice deseja mostrar")
    const vaga = vagasDeEmprego[indice]

    const candidadosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato){
        return textoFinal + "\n - "+ candidato
    } , "")
    alert(
        "vaga nº: " + indice+
        "\nNome: " + vaga.nome + 
        "\nDescrição: " + vaga.descrição +
        "\nData limite: " + vaga.data +
        "\nQuantidade de candidatos: " + vaga.candidatos.length + 
        "\nCanditados inscritos " + candidadosEmTexto
    )
    }

function inscreverCandidato(){
    const candidato = prompt("Qual o nome do candidato?")
    const indice = prompt("Qual o indice da vaga?")
    const vaga = vagasDeEmprego [indice]

    const confirma = confirm(
        "Deseja inscrever o candiato " + candidato + " na vaga " + indice + "?\n" + 
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descrição + "\nData Limite: " + vaga.data
    )
    if(confirma){
        vaga.candidatos.push(candidato)
        alert("Candidato inscrito")
    }

}

function excluirVaga(){
    const indice = prompt("Qual o indice da vaga que desja excluir?")
    const vaga = vagasDeEmprego[indice]

    const confirma = confirm(
        "Deseja excluir essa vaga?  "+ vaga + "\n" +   "Nome: " + vaga.nome + "\nDescrição: " + vaga.descrição + "\nData Limite: " + vaga.data
    )
    if(confirma){
        vagasDeEmprego.splice(indice , 1)
        alert("vaga excluida")
    }
}

let option =""


do{
    option = prompt("Bem vindo ao sistema de vagas de emprego! \nEscolha uma das seguintes opções: \n1- Listar vagas disponives \n2- Criar uma nova vaga \n3- Vizualizar uma vaga \n4- Inscrever um candidato em uma vaga \n5- Excluir uma vaga \n6- Sair ")

    
    switch(option){
        case "1":
            listarVaga()
            break
        case "2":
            criar()
            break
        case "3":
            VizualizarNovaVaga()
            break
           case "4":
            inscreverCandidato()
            break
        case "5":
            excluirVaga()
            break
        case "6":
            alert("saindo...")
            break
        default:
            alert("Escolha Inválida \nPor favor escolha uma opção valida!")



    }


}while(option !== "6")