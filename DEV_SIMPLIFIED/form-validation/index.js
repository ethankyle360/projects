const myName = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

// Event Listener when I press submit
form.addEventListener('submit', (e) => {
    let messages = [];
    // if name is empty or null
    if (myName.value === '' || myName.value == null) 
    {
        messages.push('Name is required');
    }
    // If password is less than 6 characters
    if (password.value.length <= 6)
    {
        messages.push('Password must be longer than 6 characters');
    }
    // If password is more than 20 characters
    if (password.value.length >= 20)
    {
        messages.push('Password must be less than 20 characters');
    }
    // If password is also password
    if (password.value === 'password')
    {
        messages.push('Password cannot be password');
    }
    
    // If failure
    if (messages.length > 0) 
    {
        // prevent from refreshing
        e.preventDefault();
        errorElement.innerHTML = messages.join('');
        errorElement.style.backgroundColor = "red";
    }

    // If password is between 7 and 19 characters
    if (password.value.length > 6 && password.value.length < 20)
    {
        // prevent from refreshing
        e.preventDefault();
        messages.push(`Hello ${myName.value}, filled password successfully!`);
        errorElement.innerHTML = messages.join('');
        errorElement.style.backgroundColor = "green";
    }
})
