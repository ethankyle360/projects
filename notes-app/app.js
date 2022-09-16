// Import notes.js & call, print getNotes()
const notes = require('./notes.js');
const yargs = require('yargs');
const chalk = require('chalk');
//const { string, argv } = require('yargs');

//
yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
} });

// Remove
// yargs.command({
//     command: "remove",
//     describe: "Removing a notes",
//     handler: function() {
//         console.log("Removing a note");
//     }
// });

// Read
// yargs.command({
//     command: "read",
//     describe: "Reading a notes",
//     handler: function() {
//         console.log("Reading a note")
//     }
// });

// List
// yargs.command({
//     command: "list",
//     describe: "Listing a note",
//     handler: function() {
//         console.log("Listing a note")
//     }
// });

yargs.parse();