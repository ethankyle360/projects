let myLibrary = [];
// Book items div
let bookItems = document.getElementById('bookItems');

// Book() is not a constructor
function Book(title, author, pages) {
    // the constructor...
    myLibrary.push({
        title: title,
        author: author,
        pages: pages
    })
    return myLibrary;
}

// Add book to library
function addBookToLibrary(title, author, pages) {
    Book(title, author, pages);
    console.log(myLibrary);
    // Element div to contain book details
    let element = document.createElement('div');
    element.setAttribute('style', 'border: 2px solid black; margin: 1rem; min-width: 150px; max-width: 200px;');

    // Add book details inside container

    // Book title
    let bookTitle = document.createElement('h2');
    bookTitle.innerText = title;

    // Book author
    let bookAuthor = document.createElement('h3');
    bookAuthor.innerText = author;

    // Book pages
    let bookPages = document.createElement('p');
    bookPages.innerText = pages + 'pg';

    // Read button
    let readButton = document.createElement('button');
    readButton.innerText = 'Read';

    // Remove button
    let removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';

    // Add container
    bookItems.appendChild(element);
    // Add book title
    element.appendChild(bookTitle);
    // Add book author
    element.appendChild(bookAuthor);
    // Add book pages
    element.appendChild(bookPages);
    // Add read button
    element.appendChild(readButton);
    // Add remove button
    element.appendChild(removeButton);
}

function openForm() {
    // Display form when click open
    document.getElementById('loginPopup').style.display = "block";
}

function addForm() {
    // Close form after submitting
    document.getElementById('loginPopup').style.display = "none";
    // DOM
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let pages = document.getElementById('pages');
    // Values of title, author, pages
    title = title.value;
    author = author.value;
    pages = pages.value;
    // Call function and pass values
    addBookToLibrary(title, author, pages);
}