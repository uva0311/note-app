const chalk = require('chalk');
const fs = require('fs');

const getNotes = () => {
  return 'Your notes...';
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });

    saveNotes(notes);
    console.log(chalk.green.inverse('New note added.'));
  } else {
    console.log(chalk.red.inverse('Note title is taken.'));
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const filteredNote = notes.filter(note => note.title !== title);

  if (filteredNote.length < notes.length) {
    console.log(chalk.green.inverse('Note removed'));
    saveNotes(filteredNote);
  } else {
    console.log(chalk.red.inverse('No note found.'));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  notes.forEach(note => {
    console.log(chalk.yellow(note.title));
  });
};

const readNote = title => {
  const notes = loadNotes();
  const noteToRead = notes.find(note => note.title === title);

  if (noteToRead) {
    console.log(chalk.blue.inverse(noteToRead.title));
    console.log(chalk.blue(noteToRead.body));
  } else {
    console.log(chalk.red.inverse('No note found.'));
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
