import { useSelector } from "react-redux";
import { notesList } from "../redux/notes/notesSlice";
import { useState } from "react";

import Note from "../components/Note";

function NotesList() {
  const [showArchive, setShowArchive] = useState(false);
  const notes = useSelector(notesList);
  return (
    <div className="content">
      <nav className="nav">
        <button
          className="nav__all medium-btn"
          onClick={() => setShowArchive(false)}
        >
          All Notes
        </button>
        <button
          className="nav__archive medium-btn"
          onClick={() => setShowArchive(true)}
        >
          Archive
        </button>
      </nav>
      {notes
        .filter((note) => note.archived === showArchive)
        .map((note) => (
          <Note note={note} key={note.id} editMode={note.editMode} />
        ))}
    </div>
  );
}

export default NotesList;
