const button = document.getElementById('colorButton');

function changeColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    button.style.backgroundColor = randomColor;
}

button.addEventListener('click', changeColor);