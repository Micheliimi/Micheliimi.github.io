const inputEmailLogin = document.getElementById('input-email-login');
const inputPassword = document.getElementById('input-password');
const buttomSigIn = document.getElementById('buttom-sigin');
const textArea = document.getElementById('textarea');
const buttomSubmit = document.getElementById('submit-btn');
const formContainer = document.getElementById('evaluation-form');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const selectCasa = document.getElementById('house');
const materias = document.querySelectorAll('.subject');
const avaliation = document.querySelectorAll('.rate');
const apagaTudo = document.querySelector('.apagaTudo');
const agreement = document.getElementById('agreement');
const tittle = document.querySelector('#tittle');

function sigin() {
  if (inputEmailLogin.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function mudaContador() {
  const caractere = textArea.value.length;
  const contador = document.querySelector('p');
  contador.innerText = '500';
  const caractereRestante = parseInt(contador.innerText, 10) - caractere;
  contador.innerHTML = caractereRestante.toString();
}

function getCasa() {
  return selectCasa.options[selectCasa.selectedIndex].value;
}

const family = document.getElementsByClassName('family');

function getFamily() {
  for (let i = 0; i < family.length; i += 1) {
    if (family[i].checked) {
      return family[i].value;
    }
  }
}

function getSubject() {
  let resultado = 'Matérias: ';
  let adiciona = 0;
  for (let i = 0; i < materias.length; i += 1) {
    if (materias[i].checked && adiciona === 0) {
      adiciona = 1;
      resultado += `${materias[i].value}`;
    } else if (materias[i].checked) {
      resultado += `, ${materias[i].value}`;
    }
  }
  resultado += '.';
  return resultado;
}

function getAvaliation() {
  for (let i = 0; i < avaliation.length; i += 1) {
    if (avaliation[i].checked) {
      return avaliation[i].value;
    }
  }
}

function criaElementoNome() {
  const nomeSobrenome = document.createElement('p');
  formContainer.appendChild(nomeSobrenome);
  nomeSobrenome.innerText = `Nome: ${inputName.value} ${inputLastName.value}`;
  nomeSobrenome.className = 'resume resume-sobrenome';
}

function criaElementoEmail() {
  const email = document.createElement('p');
  formContainer.appendChild(email);
  email.innerText = `Email: ${inputEmail.value}`;
  email.className = 'resume resume-email';
}

function criaElementoCasa() {
  const casa = document.createElement('p');
  formContainer.appendChild(casa);
  casa.innerText = `Casa: ${getCasa()}`;
  casa.className = 'resume resume-casa';
}

function criaElementoFamilia() {
  const familia = document.createElement('p');
  formContainer.appendChild(familia);
  familia.innerText = `Família: ${getFamily()}`;
  familia.className = 'resume resume-familia';
}

function criaElementoMaterias() {
  const materiasEscolhidas = document.createElement('p');
  formContainer.appendChild(materiasEscolhidas);
  materiasEscolhidas.innerText = getSubject();
  materiasEscolhidas.className = 'resume resume-materiais';
}

function criaElementoAvaliacao() {
  const avaliacao = document.createElement('p');
  formContainer.appendChild(avaliacao);
  avaliacao.innerText = `Avaliação: ${getAvaliation()}`;
  avaliacao.className = 'resume resume-avaliacao';
}

function criaElementoObs() {
  const divObs = document.createElement('div');
  divObs.className = 'resume resume-obs';
  formContainer.appendChild(divObs);
  const obs = document.createElement('p');
  divObs.appendChild(obs);
  obs.innerText = `Observações: ${textArea.value}`;
  obs.className = 'obs';
}

function criaPapel() {
  const paper = document.createElement('img');
  formContainer.appendChild(paper);
  paper.src = 'images/parchment-1.png';
  paper.id = 'parchment';
}
function tittleAbsolute() {
  tittle.style.position = 'absolute';
  tittle.className = 'tittleAbsolute';
  formContainer.style.position = 'relative';
}

function resumoInscricao() {
  criaElementoNome();
  criaElementoEmail();
  criaElementoCasa();
  criaElementoFamilia();
  criaElementoMaterias();
  criaElementoAvaliacao();
  criaElementoObs();
  tittleAbsolute();
  criaPapel();
}

function apagaForms(event) {
  event.preventDefault();
  apagaTudo.innerHTML = ' ';
}

window.onload = function window() {
  buttomSigIn.addEventListener('click', sigin);
  textArea.addEventListener('input', mudaContador);
  function habilitaBotao() {
    if (agreement.checked) {
      buttomSubmit.disabled = false;
      buttomSubmit.addEventListener('click', resumoInscricao);
      buttomSubmit.addEventListener('click', apagaForms);
    } else {
      buttomSubmit.disabled = true;
    }
  }
  agreement.addEventListener('click', habilitaBotao);
};
