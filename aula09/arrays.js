const hitchedSpaceships = [
    ["fenix", 8, true],
    ["golias", 10, true],
    ["helmet", 5, false],
    ["elemental",3, true],
    ["darwin", 15, false],
]

const with9chars = hitchedSpaceships.filter(spaceship => spaceship[1] >9).map(spaceship => spaceship[0]).join()

const withfinder = hitchedSpaceships.findIndex(spaceship => spaceship[2] == false) +1

const upcasedSpaceships = hitchedSpaceships.map(spaceship => spaceship [0].toUpperCase())



alert(with9chars + "\n" +  withfinder + "\n" + upcasedSpaceships)


/*console.log(with9chars)
console.log(withfinder)
console.log(upcasedSpaceships)*/ 