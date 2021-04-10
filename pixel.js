function createSquares() {
const elemento = document.querySelectorAll('.color');
	elemento[0].style.backgroundColor = 'black';
	elemento[1].style.backgroundColor = 'yellow';
	elemento[2].style.backgroundColor = 'blue';
	elemento[3].style.backgroundColor = 'orange';
}
createSquares();

function createTable() {
	const tableLine = document.querySelectorAll('tr');
	for (let linha = 0; linha < 5; linha += 1) {
		for (let coluna = 0; coluna < 5; coluna += 1) {
			const elementsQ = document.createElement('td');
			elementsQ.classList.add('pixel');
		tableLine[linha].appendChild(elementsQ);
 }
}
}
createTable();

function blackColorSelection() {
  const elemento = document.querySelectorAll('.color');
  elemento[0].classList.add('selected');
}
blackColorSelection();


const palette = document.querySelector('#color-palette');

function removeSelected() {
	let select = document.querySelector('.selected');
	while (select) {
		select.classList.remove('selected');
		select = document.querySelector('.selected');
	}
}

function clickColor() {
		palette.addEventListener('click', function(event) {
			removeSelected();
			event.target.classList.add('selected');
			})
}
clickColor();

const tabela = document.querySelector('tbody');
function addColor() {
	tabela.addEventListener('click', function(event) {
		let select = document.querySelector('.selected');
		event.target.style.backgroundColor = select.style.backgroundColor;
	})
}
addColor();

const button = document.querySelector('#clear-board');

function benjaminButton() {
	button.addEventListener('click', function() {
		const tableElements = document.querySelectorAll('.pixel');
		for (let index = 0; index < tableElements.length; index += 1) {
			console.log('teste');
				tableElements[index].style.backgroundColor = 'white';
			}
	})
}
benjaminButton();
