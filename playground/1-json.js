const fs = require('fs');

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const book2 = {
//     title: 'Crime and Punishment',
//     author: 'Fyodor Dostoevsky'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);
// const bookJSON2 = JSON.stringify(book2);
// fs.appendFileSync('1-json.json', bookJSON2);

// const dataBuffer = fs.readFileSync('1-json.json');
// // This will print a buffer
// console.log(dataBuffer);
// // Print the actual string
// const string = dataBuffer.toString();
// console.log(string);
// // Convert data from string to object
// const obj = JSON.parse(string);
// console.log(obj);

// Challenge:

// 1. Load and parse the JSON Data
const buffer = fs.readFileSync('1-json.json');
console.log(buffer);
const string = buffer.toString();
console.log(string);
const parsed = JSON.parse(string);
console.log(parsed);

// 2. Change name & age property using my info
parsed.name = "Ethan";
parsed.age = 20;
console.log(parsed);

// 3. Stringify the changed object & overwrite original data
const newObj = JSON.stringify(parsed);
console.log(newObj);
fs.writeFileSync('1-json.json', newObj);

// 4. Test by viewing data in JSON file