import { useState } from "react";
import { nanoid } from "nanoid";
import NodesList from "./components/NotesList";
const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is 1st note",
      date: "07/09/2022",
    },
    {
      id: nanoid(),
      text: "this is 2nd note",
      date: "07/09/2022",
    },
    {
      id: nanoid(),
      text: "this is 3rd note",
      date: "07/09/2022",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    setNotes([...notes, newNote]);
  };

  const deleteNode = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes);
  }
  return (
    <div className="App">
      <NodesList notes={notes} handleAddNote={addNote} handleDeleteNode={deleteNode} />
    </div>
  );
};

export default App;
