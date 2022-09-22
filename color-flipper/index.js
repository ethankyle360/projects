let colors = ["red", "blue", "green", "yellow", "orange"];

let display = document.querySelector('.display');
let clickMe = document.querySelector('.click-me');

clickMe.addEventListener('click', () => {
    let num = Math.floor((Math.random() * 5));
    let backColor = colors[num];
    display.textContent = `Background Color : ${backColor}`;
    document.body.style.backgroundColor = backColor;
})