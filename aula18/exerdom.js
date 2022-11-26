function saveHouse(){
    let houseNumber = document.querySelector("input[name = 'houseNumber']").value
    let district = document.querySelector("input[name= 'district']").value
    let city = document.querySelector("input[name = 'city']").value
    let areaOfTheHouse = document.querySelector("input[name = 'areaOfTheHouse']").value

    let newListValue = document.createElement("li")
    newListValue.innerText = areaOfTheHouse + "m², número " + houseNumber + "(" + district + " - " + city +")"


    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removeHouse(this)")
    newListValue.appendChild(removeButton)
    document.getElementById("house-list").appendChild(newListValue)
}

function removeHouse(button){ 
let liToRemove = button.parentNode
document.getElementById("house-list").removeChild(liToRemove)
}