let car = []
let option = ""

do{
    option = prompt("Bem vindo ao cadastro de carros.\nTotal de veiculos:" + car.length +"\n1- Cadastrar novo veiculo \n2 - Mostar veiculos cadastrados \n3- Sair do programa")

switch(option){
    case "1":
        const cars =  {}
        car.propriet = prompt ("Nome do proprietario")
        car.marca = prompt ("Marca do veiculo")
        car.modelo = parseFloat(prompt ("Modelo do veiculo"))
        car.year = parseFloat(prompt ("Ano do veiculo")) 

        const confirma = confirm(
            "Salvar esse veiculo?\n" + 
            "Propreitario: " + propriet + 
            "Marca: " + marca +
            "Modelo: " + modelo +
            "Ano do veiculo: " + year)

            if(confirma){
                car.push(cars)
            }
            break
    
    
    case "2":
        for (let i=0; cars.length; i++){
            alert("Carros disponiveis " + (i+1)+
            "Proprietario" + car[i].propriet + 
            "Modelo" + car[i].modelo +
            "Marca" + car[i].marca +
            "Ano" + car[i].year )
            }
        break 
    case "3":
        alert("Saindo....")
        break
    default:
        alert("Opção invalida")
        break
}
}while (option !== "3");