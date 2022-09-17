// Select each element and store in a variable
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("button");

// API url
const url = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(url)
        .then((data) => data.json())
        .then((item) => {
            quote.innerText = item.content;
            author.innerText = item.author;
        });
}

// When I click on the button, run getQuote() function
button.addEventListener('click', getQuote);
