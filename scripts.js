const input = document.querySelector("input");
const form = document.querySelector("form")
const lista = document.getElementById("lista")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    lista.prepend(createItemLista())
    input.value = ""
})

function createItemLista() {
    const divItemLista = document.createElement("div")
    divItemLista.classList.add("item")

    const chkItemlista = document.createElement("input")
    chkItemlista.type = "checkbox"

    const spanItemContent = document.createElement("span")
    spanItemContent.textContent = input.value

    const imgItemLista = document.createElement("img")
    imgItemLista.src = "./assets/icons/lixeira.svg"
    imgItemLista.alt = "lixeira icon"

    divItemLista.append(chkItemlista, spanItemContent, imgItemLista)
    return divItemLista
}
lista.addEventListener("click", (event) => {
    const clickedElement = event.target

    if (clickedElement.tagName === "IMG") {
        const item = clickedElement.closest(".item")
        item.remove()
    }
})