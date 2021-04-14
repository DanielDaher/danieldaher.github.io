const input = document.querySelector('#text-input');
const button = document.querySelector('#benjaminButton');
const text = document.querySelector('#meme-text');
const newImage = document.querySelector('#meme-insert');
const localImage = document.querySelector('#meme-image');
const container = document.querySelector('#meme-image-container');

function clickButton() {
  button.addEventListener('click', function () {
    text.innerText = input.value;
  });
}
clickButton();

function inputText() {
  input.addEventListener('keyup', function () {
    document.getElementById('benjaminButton').click();
  });
};
inputText();

function addImage() {
  newImage.addEventListener('change', function(event) {
    localImage.src = URL.createObjectURL(event.target.files[0]);
  })
}
addImage();
