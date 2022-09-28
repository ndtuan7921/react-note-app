import React from "react";
import { useState } from "react";

const AddNewNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const handleChange = (event) => {
    setNoteText(event.target.value);
  };
  const handleSave = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    } else {
      alert("type some text ...!!");
    }
  };
  return (
    <div className="note new">
      <textarea
        id=""
        cols="10"
        rows="10"
        placeholder="Type to add a note ..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>200 Remaining</small>
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
export default AddNewNote;
