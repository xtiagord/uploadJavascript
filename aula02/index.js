let departureDateEntry = prompt("Digite a data de partida (formato: DD/MM/YYYY)")

let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

let today = moment()

let dateDiff = today - departureDate

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1 - Segundos\n2 - Minutos\n3 - Horas\n4 - Dias")

if(chosenOption == 1){
    let secondsOfDeparture = Math.round(dateDiff / 1000)
    alert("Tempo de vôo " + secondsOfDeparture + " segundos")
} else if(chosenOption == "2"){
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert("Tempo de vôo " + minutesOfDeparture + " Minutos")
}else if(chosenOption == "3"){
    let HoursOfDeparture = Math.round(dateDiff / 1000 / 3600)
    alert("tempo de vôo " + HoursOfDeparture + " Horas")
}else if(chosenOption == "4"){
    let DaysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert("tempo de vôo " + DaysOfDeparture + " Dias")
} else{
    alert("Opção Invalida")
}
