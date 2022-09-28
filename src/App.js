import { useState } from "react";
import { nanoid } from "nanoid";
import NodesList from "./components/NotesList";
import Search from "./components/Search";
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
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const [searchText, setSearchText] = useState("");

  return (
    <div className="App">
      <Search handleSearch={setSearchText} />
      <NodesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNode={deleteNode}
      />
    </div>
  );
};

export default App;
