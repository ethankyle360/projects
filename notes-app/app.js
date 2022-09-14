// Import file system
const fs = require('fs');

//fs.writeFileSync('notes.txt', 'My name is Mugabe!');

// Challenge: Append a message to notes.txt

// 1. Use appendFileSync to append to the file
fs.appendFileSync('notes.txt', ' Added this text.');

// 2. Run the script
// - node app

// 3. Open and view the text
