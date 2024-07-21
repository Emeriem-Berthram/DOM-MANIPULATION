//DOM MANIPULATION
document.addEventListener('DOMContentLoaded', function() {

let button = document.getElementById('submit');
let colors = ['#a0a0a0', '#ff0000', '#fff700', 'ffc0cb', 'ffa500', '#ffffff']
let currentColorIndex = 0;

button.addEventListener('click', function() {
currentColorIndex = (currentColorIndex + 1) % colors.length;
button.style.backgroundColor = colors[currentColorIndex];
});
});
