let personName = prompt("Qual o nome do seu personagem?")
console.log(personName)
let powerAttack = prompt("Qual o poder de ataque do seu personagem?")
console.log(powerAttack)

let personName2 = prompt("Qual o nome do segundo personagem?") 
console.log(personName2)
let lifePoints = prompt("Qual a quantidade de pontos de vida?")
console.log(lifePoints)
let powerDefense = prompt("Qual o poder de defesa do segundo personagem?")
console.log(powerDefense)
let shield = confirm ("Possui escudo?")
console.log(shield)

if (powerAttack > powerDefense && shield == false ){ 
damage = powerAttack - powerDefense
newDamage = alert("Dano causado igual: " + damage)
}else if (powerAttack > powerDefense && shield == false ){ 
    damage = powerAttack - powerDefense
    newDamage = alert("Dano causado igual: " + damage)
}else if (powerAttack < powerDefense && shield == true ){ 
    damage = (powerAttack - powerDefense) / 2 
    newDamage = alert("Dano causado igual: " + damage)
}else if (powerAttack = powerDefense){
    alert("Dano causado igual a 0")
}


let points = (lifePoints - damage)
let newPoints =(points)
alert("Quantidade de pontos do defensor: " + points)

alert("Nome do 1º personagem:" + personName +
      "\nNivel de poder: " + powerAttack +
      "\nNome do 2º personagem: " + personName2 + 
      "\nQuantidade de pontos de vida: " + lifePoints + 
      "\nNivel de defesa: " + powerDefense + 
      "\nPossui escudo: " + shield +
      "\nDano causado: " + damage +
      "\nPontos do defensor: " + points)


