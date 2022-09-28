import React from "react";
import AddNewNote from "../AddNewNote";
import Note from "../Note";

export default function NotesList({ notes, handleAddNote }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
      <AddNewNote handleAddNote={handleAddNote} />
    </div>
  );
}
