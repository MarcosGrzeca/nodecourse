const fs = require("fs");

const getNotes = () => {
    return "Your notes...";
}

const addNote = (title, body) => {
    let notes = loadNotes();
    const duplicatesNodes = notes.filter((note) => note.title === title);
    if (duplicatesNodes.length === 0 ) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
    } else {
        console.log("DUplicated");
    }
    console.log(notes);
}

const removeNote = (title) => {
    let notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);
    saveNotes(notesToKeep);
}

const loadNotes = () => {
    try {
        let dataBuffer = fs.readFileSync("notes.json")
        return JSON.parse(dataBuffer.toString());   
    } catch (error) {
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync("notes.json", JSON.stringify(nodes));
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}