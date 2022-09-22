let drinks = [];
const input = document.getElementById('inputId');
const submit = document.querySelector('.submit');
const water = document.querySelector('.water');
const numOfWater = document.querySelector('.numOfWater');
const numNon = document.querySelector('.numNon');

submit.addEventListener('click', ()=>{
    console.log(`You just added drink of ${input.value}`);
    drinks.push(input.value); // add drink to drinks array
    input.value = '';
})

water.addEventListener('click', ()=>{
    const numWater = drinks.filter(drink => drink == 'water');
    console.log(`There are ${numWater.length} glasses of water`);
    numOfWater.innerHTML = `You drank ${numWater.length} glasses of water today`;
})