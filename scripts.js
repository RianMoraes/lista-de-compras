"use strict"

const inputTarefa = document.querySelector('#addNewItem');
const lista = document.querySelector('.items');
const form = document.querySelector('.app')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const textoTarefa = inputTarefa.value.trim();
    // Validação: impede tarefas vazias
    if (!textoTarefa) return;

    criaTarefa(textoTarefa)
    limpaInput()
})
//cria tarefa inclui o checkbox, a tarefa e o botão de deletar formatado
function criaTarefa(texto) {
    const item = document.createElement('div');
    item.classList.add('item');

    const check = document.createElement('input');
    check.type = "checkbox";
    check.classList.add('check-tarefa'); // Classe em vez de ID

    const tarefaItem = document.createElement('span');
    tarefaItem.textContent = texto;

    const deleteButton = document.createElement('img');
    deleteButton.src = './assets/icons/lixeira.svg';
    deleteButton.alt = "lixeira icon";
    deleteButton.classList.add('btn-deletar'); // Classe para identificar no clique

    item.append(check, tarefaItem, deleteButton);
    lista.prepend(item); // Adiciona no topo da lista

}
function limpaInput() {
    inputTarefa.value = ""
    inputTarefa.focus()
}

lista.addEventListener('click', (e) => {
    const elementoClicado = e.target
    const itemTarefa = elementoClicado.closest('.item')

    if (!itemTarefa) return

    if (elementoClicado.classList.contains('btn-deletar')) {
        itemTarefa.remove()
    }
})

lista.addEventListener('change', (e) => {
    const elementoClicado = e.target;
    const itemTarefa = elementoClicado.closest('.item')

    if (elementoClicado.classList.contains('check-tarefa')) {
        itemTarefa.classList.toggle('marked')

        if (itemTarefa.classList.contains('marked')) {
            lista.append(itemTarefa)
        } else {
            lista.prepend(itemTarefa)
        }
    }
})

