let propertyName = prompt("Por favor digite seu nome:")
let CarName = prompt("Você possui Veiculo: \n1 - Sim \n2 - Não")
let carProperty = ""
let carScore = 0

while(CarName){
    let newCarFabrication = prompt("Qual a Fabricante?")
    let newCarModel = prompt ("Qual o modelo?")
carProperty += " - " + newCarFabrication + "\n"
carProperty += " - " + newCarModel + "\n"
carScore++
CarName = prompt("Você possui mais algum veiculo? \n1 - Sim \n2 - Não")
}

alert("Nome do proprietraio: " + propertyName + 
    "\nFabricante do veiculo: " + newCarFabrication + 
    "\nModelo do veiculo: " + newCarModel + 
    "\nQuantos veiculos possui: " + carScore)
























/*let turistName = prompt ("Qual seu nome?")
let cityon = prompt ("já vistiou alguma cidade? \n1 - sim \n2 - não")
let CityVisited = ""
let score = 0 


while(cityon == 1){
    let newCityVisited = prompt ("Qual o nome da cidade que vc visitou?")
    CityVisited += " - " + newCityVisited + "\n"
    score ++
    cityon = prompt("Você vistiou mais alguma outra cidade? \n1 - sim \n2 - não")
}

alert("Nome do tursita: " + turistName +
    "\nCidades Visitadas: " + "\n" + CityVisited +
    "\nNúmero de cidades Visitadas: " + score)*/