let botao = document.getElementById('click');
let container = document.querySelector ('.container');
let inputTextoTarefa = document.querySelector('#textoTarefa');

let finalizar = document.getElementById('finalizar');
let modal = document.querySelector(".card"); 


finalizar.onclick = function(){

    if(modal.getAttribute('class') == "show") {    
    }
    modal.setAttribute('class', 'modal hide');
}


botao.onclick = function() {
    alert("Nova tarefa adicionada com sucesso!")

    let card = document.createElement ('div')
    card.setAttribute('class', 'card')

    let cardBody = document.createElement('div')
    cardBody.setAttribute('class', 'card')

    let btnFinalizarTarefa = document.createElement('button')
    btnFinalizarTarefa.setAttribute('class', "btn btn-info")
    btnFinalizarTarefa.textContent = "Finalizar tarefa";

    let texto = inputTextoTarefa.value

    card.appendChild(cardBody)
    cardBody.textContent = texto;

    cardBody.appendChild(btnFinalizarTarefa)

    container.appendChild(card)

    inputTextoTarefa.value = ""; 

    btnFinalizarTarefa.onclick = function(){

        if(card.getAttribute('class') == "show") {    
        }
        card.setAttribute('class', 'modal hide');
    }

}

