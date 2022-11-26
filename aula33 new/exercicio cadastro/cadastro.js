const imoveis = []
const option = ""

do{
 Option = prompt("Imoveis:\n" + imoveis.length + 
                "\nEsolha uma opção:\n1 - Novo imovél \n2 - Mostar imoveis Salvos \n3- Sair"
)

switch (option){
    case "1":
        const imovel = {}
         imovel.newHouseOwner = prompt("Nome do proprietario?")
         imovel.newHouseBedrooms = parseFloat(prompt ("Quantidade de quartos?"))
         imovel.newHouseBathrooms = parseFloat(prompt("Quantidade de Banheiros"))
         imovel.newHouseGarage = prompt("Possui Garagem?")
        alert("Imovel cadastrado com sucessso!")

        const Confirm = confirm(
            "Salvar esse imovel\n" + 
            "Proprietario" + newHouseOwner + 
            "Quartos" + newHouseBedrooms +
            "Banheiros" + newHouseBathrooms + 
            "Garagem? " + newHouseGarage
        )

        if(confirm){
            imoveis.push(imovel)
        }


        break
    case "2":
        for (let a=0; imoveis.length; a++){
            alert("Imoveis disponiveis " + (a+1)+
            "Proprietario" + imoveis[i]. newHouseOwner + 
            "Quartos" + imoveis[i].newHouseBedrooms +
            "Banheiros" + imoveis[i].newHouseBathrooms + 
            "Garagem? " + imoveis[i].newHouseGarage)
        }
        
        break
    case "3":
        alert("Saindo...")
        break
    default:
    alert("opção invalida")
    break

}
}while (option !== "3"); 