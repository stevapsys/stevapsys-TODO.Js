let botao = document.getElementById('click');
let container = document.querySelector ('main.container');
let inputTextoTarefa = document.querySelector('#textoTarefa');
let body = document.querySelector('body')

let finalizar = document.getElementById('finalizar');


function adicionarTarefa() {
    let texto = inputTextoTarefa.value; 
    if(texto.length > 0) {  
        let card = document.createElement ('div')
        card.setAttribute('class', 'card m-3')
            
        let cardBody = document.createElement('div')
        cardBody.setAttribute('class', 'card-body')
            
        let btnFinalizarTarefa = document.createElement('button')
        btnFinalizarTarefa.setAttribute('class', "btn btn-info")
        btnFinalizarTarefa.textContent = "Finalizar tarefa";
        btnFinalizarTarefa.onclick = function(event){
                card.remove()
            }
            
        card.appendChild(cardBody)
        cardBody.textContent = texto;
        cardBody.appendChild(btnFinalizarTarefa)
    
        container.appendChild(card)
            
        inputTextoTarefa.value = ""; 
    } else {
        alert("Você deve digitar uma tarefa primeiro")
    }
}


botao.onclick = adicionarTarefa

//para adicionar tarefa com enter 
inputTextoTarefa.onkeyup = function(event){
    if(event.key == 'Enter') { 
        adicionarTarefa()
}
}

