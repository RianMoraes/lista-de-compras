
//obtendo elementos do input
const form = document.getElementsByClassName("app")
const inputs = document.getElementById("addNewItem");
const button = document.querySelector("form")


inputs.addEventListener("input", () => {
    const value = inputs.value
    // console.log(value)
})
button.addEventListener("submit", (event) => {
    event.preventDefault()
    const value = inputs.value
    // console.log(value)
})
/* div.items é todos, div.item é um com input span e img */

const items = document.querySelector(".items")
const item = document.querySelector(".item")
const newItem = item.cloneNode(true) // clona o item com input span e img
const input = newItem.querySelector("input") // seleciona o input do novo item
const span = newItem.querySelector("span") // seleciona o span do novo item
const img = newItem.querySelector("img") // seleciona a img do novo item
button.addEventListener("submit", (event) => {
    event.preventDefault()
    const value = inputs.value  
    span.textContent = value // atribui o valor do input ao span
    input.value = "" // limpa o input
    items.prepend(newItem) // adiciona o novo item à lista de itens
})



/*
const guests = document.querySelector("ul") //
const newGuest = document.createElement("li") //
newGuest.classList.add("guest") //
const guestName = document.createElement("span") //
guestName.textContent = "rian"
newGuest.append(guestName)
guests.prepend(newGuest)
*/
