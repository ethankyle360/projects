const inputText = document.querySelector('.inputText');
const addButton = document.querySelector('.addButton');
const todoList = document.querySelector('.todoList');

addButton.addEventListener('click', function() {
    const para = document.createElement('p');
    para.innerText = inputText.value;
    para.style.backgroundColor = 'red';
    para.style.width = '100px';
    todoList.appendChild(para);

    // Cross out item when I double click on it
    para.addEventListener('dblclick', function() {
        para.style.textDecoration = 'line-through';
        para.style.backgroundColor = 'green';
    })
});