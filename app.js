const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// add, remove, read, list

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function() {
    console.log('Adding a new note!');
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function() {
    console.log('Removing the note!');
  }
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function() {
    console.log('Reading the note!');
  }
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List a note',
  handler: function() {
    console.log('Listing all notes!');
  }
});

console.log(yargs.argv);
