class Spaceship{
    constructor(name, maxCrew, maxRecomendedVelocity){
        this.name= name
        this.maxCrew =maxCrew
        this.maxRecomendedVelocity = maxRecomendedVelocity
        this.currentVelocity = 0
    }
speedUp(acceleration){
    this.currentVelocity += acceleration
    if(this.currentVelocity > this.maxRecomendedVelocity){
        alert("VELOCIDADE MAXIMA ULTRAPASSADA!! \n Diminua ou podera provocar danos á nave.")
    }
}
}

class transportspaceship extends Spaceship{
    constructor(name, maxCrew, maxRecomendedVelocity, maxLoadWeight){   
    super(name, maxCrew, maxRecomendedVelocity)
    this.maxLoadWeight = maxLoadWeight
    }

speedUp(acceleration) {
    acceleration /= 2
    alert("Incrementando velocidade em " + acceleration + "km/s")
    super.speedUp(acceleration)
}
}

let transportSpaceship = new transportspaceship ("Transportadora", 4, 100, 400)

console.log(transportSpaceship)
transportSpaceship.speedUp(210)