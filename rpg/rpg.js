const main = document.querySelector('main');
const dice = document.querySelector('.resultDice');
const button = document.querySelector('.rollDice');
const diceNumber = document.querySelector('#diceNumber');
const gerar = document.querySelector('#gerar');
const gems = document.querySelector('.gems');
const select = document.querySelector('select');
const gemas = [
  ['d4', 'Transmutação', 'Levitação', 'Repelente de projétil', 'Imune', 'Esquecimento', 'Círculo de som', 'Bússola', 'Visão Noturna', 'Gemidão'],
  ['d6', 'Perfurante', 'Afiado', 'Grudento', 'Atordoamento', 'Vibra', 'Ilumina'],
  ['d8', 'Esquenta', 'Esfria', 'Desequilíbrio', 'Manipulação de planta', 'Personalidade'],
  ['d10', 'Envenenado', 'Choque', 'Impulso', 'Absorve Impacto'],
  ['d12', 'Força', 'Estica', 'Velocidade', 'Teleporte', 'Absorve Elementos'],
  ['d20', 'Arma Elemental', 'Bola de fogo', 'Raio', 'Tornado', 'Terra', 'Intangível', 'Invisível'],
  ['d100', 'Desastres naturais', 'Controlar Mentes', 'Necromântica']
];

const validateDice = () => {
  if (diceNumber.valueAsNumber < 2) {
    diceNumber.valueAsNumber = 2;
  }
}

const roll = () => {
  validateDice();
  const max = diceNumber.value;
  const min = 1
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  dice.innerText = number;
};

button.addEventListener('click', roll);

const generate = () => {
  const firstNumber = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
  const randomGem = gemas[firstNumber];
  const max = gemas[firstNumber].length - 1;
  const secondNumber = Math.floor(Math.random() * (max - 1 + 1)) + 1;
  gems.innerText = `${gemas[firstNumber][secondNumber]}
  role o ${gemas[firstNumber][0]}`;
}

gerar.addEventListener('click', generate);

const array = [];

const createOptions = () => {
  for (let index = 0; index < array.length; index += 1) {
    const option = document.createElement('option');
    option.innerText = `${array[index]}`;
    select.appendChild(option);
  }
}

const orderElements = () => {
  for (let index = 0; index < gemas.length; index += 1) {
    const dado = gemas[index][0];
    const maximum = gemas[index].length;
    const newGemas = gemas[index].slice();
    for (let power = 1; power < maximum; power += 1) {
      array.push(`${newGemas[power]} - Role o ${dado}`);
    }
  }
  array.sort();
  console.log(array);
  
  createOptions();
  
} 
orderElements();


/* const createOptions = () => {
  for (let index = 0; index < gemas.length; index += 1) {
    const maximum = gemas[index].length;
    for (let power = 1; power < maximum; power += 1) {
      const option = document.createElement('option');
      option.innerText = `${gemas[index][power]} (role o ${gemas[index][0]})`;
      select.appendChild(option);
    }
  }
}
createOptions(); */



/*  const createOptions = () => {
  for (let index = 0; index < gemas.length; index += 1) {
    const array = gemas[index].shift()
    gemas[index].sort();
    const maximum = array.length - 1;
    for (let power = 0; power < maximum; power += 1) {
      const option = document.createElement('option');
      option.innerText = `${gemas[index][power]} (role o ${gemas[index][0]})`;
      select.appendChild(option);
    }
  }
}
createOptions() */