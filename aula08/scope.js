function slowDown (velocity, slow){ 
    let newVelocity = 20

    while(velocity > 0){  
    slow(velocity)    
    velocity -= newVelocity
}

alert("Nave parada. As comportas podem ser abertas.")
}

let otherVelocity = 150
    
slowDown(otherVelocity, function(velocity){
    console.log("velocidade atual: " + velocity)
})
