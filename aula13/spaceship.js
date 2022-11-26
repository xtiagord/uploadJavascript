class Spaceship{
    static get DECELERATION_RATE(){
        return 0.17 
    }
    constructor(name, crewQuantity){
        this.name = name
        this.crewQuantity = crewQuantity
        this.currentyVelocity = 0
    }
    speedUp(acceleration){
        this.currentyVelocity += acceleration * (1 - Spaceship.DECELERATION_RATE)
    }
}
