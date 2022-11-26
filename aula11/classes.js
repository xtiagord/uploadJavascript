class Spaceship{
    constructor (name, numberOfCrew){
        this.name = name
        this.numberOfCrew = numberOfCrew
        this.isHitched = false
        this.doorOpen = false
    
}

hitch(){
    this.isHitched = true
    this.doorOpen = true
}
}

function showMenu(){ 
    let choseOption
    while (choseOption != "1" && choseOption != "2" && choseOption != "3"){
        choseOption = prompt("O que deseja fazer?\n" +
                            "1- engatar nave\n"+
                            "2- imprimir naves\n" +
                            "3 - Sair do programa")
    }
    return choseOption
}

function createSpaceship(){
    let spaceshipName = prompt("Informe o nome da nave")
    let numberOfCrew  = prompt("informe o numero de tripulantes?")
    let spaceship = new Spaceship(spaceshipName, numberOfCrew)
    return spaceship
}

function print(spaceship){
    let spaceshiplist = ""
    spaceship.forEach((spaceship, index ) => {
        spaceshiplist += (index + 1) + "- " + spaceship.name + "(" + spaceship.numberOfCrew + " tripulantes)\n"
    })
    alert(spaceshiplist)
}

let hichedSpaceship = []
let choseOption

while(choseOption !="3"){
    choseOption = showMenu()
    switch(choseOption){
        case "1":
            let spaceshipToAdd = createSpaceship()
            spaceshipToAdd.hitch()
            hichedSpaceship.push(spaceshipToAdd)
            break
        case "2":
            print(hichedSpaceship)
            break
    }
}



/*class Registration{
    constructor(name, birthdate){ 
    this.name = name
    this.birthdate = birthdate
    this.doexams = false
    this.istraining = false
}
medical(){
    this.doexams = true
    this.istraining = true
}
}

function showMenu(){
    let choseOption
    while (choseOption != "1" && choseOpen != "2" && choseOpen != "3"){
        choseOption = prompt("O que deseja saber? \n1- Esta fazendo exames \n2- Esta fazendo exercicios? \n3- sair do programa")
    }
    return choseOption
}

function personRegistration(){
    let registrationname = prompt("Informe o nome da pessoa")
    let birthdate = prompt("Informe a data de nascimento")
    let registration = new Registration (registrationname, birthdate )
    return registration
}

function print(registration){
    let registrationlist = ""
    registration.forEach((registration, index) => {
        registrationlist += (index + 1) + "- " + registration.name + "(" + registration.birthdate + "Data de aniversario) \n"
    })
    alert (registrationlist)
}

let extraRegistration = []
let choseOption

while (choseOption !="3"){
    switch (choseOption){
        case "1":
            let registrationToADD = extraRegistration()
            registrationToADD.medical()
            extraRegistration.push(registrationToADD)
            break
        case "1":
            print(extraRegistration)
            break
    
        }
}*/