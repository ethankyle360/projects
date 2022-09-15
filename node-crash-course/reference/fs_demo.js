const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder created...')
// });

// Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if (err) throw err;
//     console.log('File written to...');

    // Add content to file
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love Node.js', {}, err => {
//     if (err) throw err;
//     console.log('Append to file...');
//     });
// });

// Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log('Read file...');
// }); 

// Rename file
fs.rename(
    path.join(__dirname, '/test', 'helloworld.txt'),
    path.join(__dirname, '/test', 'heyjessie.txt'),
    err => {
        if (err) throw err;
        console.log('File renamed...');
    }
);

// Stopped at 38:00 - OS Module