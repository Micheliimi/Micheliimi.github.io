const header = document.getElementsByTagName('header')[0];
const section1 = document.getElementById('input-button');
const section2 = document.getElementById('ol-li');
const section3 = document.getElementById('botoes');
const input = document.getElementById('texto-tarefa');


const botaoAdicionar = document.createElement('button');
botaoAdicionar.innerText = 'Adicionar';
botaoAdicionar.id = "criar-tarefa";
section1.appendChild(botaoAdicionar);

const botaoApagaTudo = document.createElement('button');
botaoApagaTudo.id = "apaga-tudo";
botaoApagaTudo.innerText = 'X';
section3.appendChild(botaoApagaTudo);

const botaoRmvFinalizados = document.createElement('button');
botaoRmvFinalizados.innerText = "Limpar Completos";
botaoRmvFinalizados.id = "remover-finalizados";
section3.appendChild(botaoRmvFinalizados);

const botaoSalvaTarefa = document.createElement("button");
botaoSalvaTarefa.id = "salvar-tarefas";
botaoSalvaTarefa.innerText = "Salvar Tarefas";
section3.appendChild(botaoSalvaTarefa);

const botaoMoverCima = document.createElement('button');
botaoMoverCima.id = 'mover-cima';
botaoMoverCima.innerText = '↑';
section3.appendChild(botaoMoverCima);
botaoMoverCima.addEventListener('click', movePraCima);

const botaoMoverBaixo = document.createElement('button');
botaoMoverBaixo.id = 'mover-baixo';
botaoMoverBaixo.innerText = '↓';
section3.appendChild(botaoMoverBaixo);
botaoMoverBaixo.addEventListener('click', movePraBaixo);

const botaoRemoveSel = document.createElement('button');
botaoRemoveSel.id = "remover-selecionado";
botaoRemoveSel.innerText = "Remove Tarefa Selecioada";
section3.appendChild(botaoRemoveSel);
botaoRemoveSel.addEventListener('click', removeTarefaSel);


//Criação do botão "adicionar" e adicionando evento.
function adicionaEventoBotaoAdicionar(){
  botaoAdicionar.addEventListener('click', function (){
    const listaTarefas = document.getElementById('lista-tarefas');
    let itemLista = document.createElement('li');
    itemLista.innerText = input.value;
    listaTarefas.appendChild(itemLista);
    itemLista.addEventListener('click', adicionaCorCinza); 
    itemLista.addEventListener('dblclick', adicionaRisco);
    input.value = '';
  });
};
adicionaEventoBotaoAdicionar();

function adicionaCorCinza (event){
  let item = document.getElementsByTagName('li');
  for(i = 0; i < item.length; i += 1){
    item[i].style.backgroundColor = 'white';
    item[i].id = '';
  }
  event.target.style.backgroundColor = "gray";
  event.target.id = "selecionado";
};

function adicionaRisco (event){
  if(event.target.className == "completed") {
    event.target.className = 'incompleted';
    } else {
    event.target.className = "completed"
  }
};

function adicionaEventoApagaTudo(){
  botaoApagaTudo.addEventListener('click', function(){
    let tagListaOrdenada = document.getElementById('lista-tarefas');
    tagListaOrdenada.innerHTML = '';


  })
}
adicionaEventoApagaTudo();


function adicionaEventoRmvFinalizados(){
  botaoRmvFinalizados.addEventListener('click', function(){
    let itemFinalizado = document.querySelectorAll('.completed');
    let listaOrdenada = document.getElementById('lista-tarefas');
    console.log(itemFinalizado)
    for(i = 0; i < itemFinalizado.length; i += 1){
    let itemRemover = itemFinalizado[i];
    listaOrdenada.removeChild(itemRemover);
    }
  });
}
adicionaEventoRmvFinalizados();

function salvaTarefas(){
  botaoSalvaTarefa.addEventListener('click', salvaTarefasLocalStorage);
}
salvaTarefas();

function salvaTarefasLocalStorage(){
  console.log('ola')
  let itens = document.getElementsByTagName('ol')[0];
  
    localStorage.setItem('item-list', itens.innerHTML);
  
}

window.onload = function(){
  let itens = localStorage.getItem('item-list');
  let listaOrdenada = document.getElementsByTagName('ol')[0];
  listaOrdenada.innerHTML = itens;
}


function movePraCima(){
  const itemSel = document.querySelector('#selecionado');
  if(itemSel === null){
    return;
  }
  const itemDeCima = itemSel.previousElementSibling;
  if(itemDeCima){
     document.querySelector('ol').insertBefore(itemSel,itemDeCima);
  }
}

function movePraBaixo(){
 const itemSel = document.querySelector('#selecionado');
 if(itemSel === null){
   return;
 }
 const itemdebaixo = itemSel.nextElementSibling;
 if(itemdebaixo){
    document.querySelector('ol').insertBefore(itemdebaixo,itemSel)
 }
}

function removeTarefaSel(){
  const itemSel = document.querySelector('#selecionado');
  itemSel.remove();

}
