let title = document.getElementById('title');
let body = document.getElementsByTagName('body')[0];
let arrayColor = document.getElementsByTagName('li');

let sectionOne = document.getElementById('section-one');
let sectionTwo = document.getElementById('section-two');
let sectionTabela = document.getElementById('section-tabela');

let quadrados = document.getElementsByClassName('pixel');

let container = document.createElement('div');
container.id ="pixel-board";
sectionTabela.appendChild(container);

let input = document.getElementById('board-size');
let enter = document.createElement('button');
  enter.id = "generate-board";
  enter.innerText = "VQV";
  sectionTwo.appendChild(enter);

  let r;
  let g;
  let b

  window.onload = function(){
    let colorArray = document.getElementsByClassName('color');
    for(i = 1; i < colorArray.length; i += 1 ){
    r = Math.floor(Math.random() * 255) + 1;
    g = Math.floor(Math.random() * 255) + 1;
    b = Math.floor(Math.random() * 255) + 1;

    let corAleatoria = 'rgb(' + r +', '+ g + ', '+ b + ')';
    console.log(corAleatoria)
    // corAleatoria.join('');
    let colorArray = document.getElementsByClassName('color');
    colorArray[i].style.backgroundColor = corAleatoria;
    colorArray[i].style.color = corAleatoria;
    colorArray[i].innerText = corAleatoria;
    }
  
  }




  
  

function tabela (){
  for(let linha = 1; linha <= 5; linha += 1) {
    let divLinha = document.createElement('div');
    divLinha.className = "linha";
    container.appendChild(divLinha);
    for(let coluna = 1; coluna <= 5; coluna += 1){
      let quadrado = document.createElement('div');
      quadrado.className = 'pixel';
      quadrado.addEventListener('click', mudaCorQuadrado);
      divLinha.appendChild(quadrado);
    }
  } 
}
tabela();


function adicionaQuadroPixelDinamico(){
  enter.addEventListener('click', function(){
    let verifica = input.value.length;
    if(verifica === 0) {
    alert ('Board inválido!');
    } else {
      n = input.value;
      console.log(n);
      if(n > 50) {
        n = 50;
      }
      let acrescenta = (n - 5);
      console.log(acrescenta);
      let pixelBoard = document.getElementById('pixel-board');
      pixelBoard.innerHTML = '';
      tabela();
      if(acrescenta > 0) {
        
        for(let linha = 1; linha <= acrescenta; linha += 1) {
          let divLinha = document.createElement('div');
          divLinha.className = "linha";
          container.appendChild(divLinha);
          for(let coluna = 1; coluna <= 5; coluna += 1){
            let quadrado = document.createElement('div');
            quadrado.className = 'pixel';
            quadrado.addEventListener('click', mudaCorQuadrado);
            divLinha.appendChild(quadrado);
          }
        }
        let linhasExistentes = document.getElementsByClassName('linha');
        for(let i = 0; i < linhasExistentes.length; i += 1) {
          for(let coluna = 1; coluna <= acrescenta; coluna += 1){
            let quadrado = document.createElement('div');
            quadrado.className = 'pixel';
            quadrado.addEventListener('click', mudaCorQuadrado);
            linhasExistentes[i].appendChild(quadrado);
          }
        }
      }
    }
  }) 
} 

adicionaQuadroPixelDinamico();

function eventos(){
  for(i = 0; i < arrayColor.length; i += 1) {
    let colorSelected = arrayColor[i];
    colorSelected.addEventListener('click', selecionaCor);
  }
};
eventos();

function selecionaCor(event){
  let arraySelected = document.getElementsByClassName('selected');
  for(i = 0; i < arraySelected.length; i += 1) {
    if(arraySelected[i].className === 'color selected'){
      arraySelected[i].className = 'color'
    };
  }
  event.target.className = "color selected";
}
 
function mudaCorQuadrado(event) {
  let classeSelected = document.getElementsByClassName('selected')[0];
  let corSelecionada = classeSelected.innerText;
  console.log(classeSelected.innerText);
  event.target.style.backgroundColor = corSelecionada;
  console.log(event.target);
};


function eventoLimpaCor (){
  let button = document.createElement('button');
  button.innerText = 'Limpar';
  button.id = "clear-board";
 sectionTwo.appendChild(button);

  button.addEventListener('click', limpaCor);
}
eventoLimpaCor ();
function limpaCor(){
  for(i = 0; i < quadrados.length; i += 1) {
    let cadaQuadrado = quadrados[i];
    cadaQuadrado.style.backgroundColor = 'white';
  }
}





  
