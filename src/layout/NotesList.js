import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createNote,
  editNote,
  archiveNote,
  deleteNote,
  notesList,
} from "../redux/notes/notesSlice";

import "./NotesList.css";
import Note from "../components/Note";

function NotesList() {
  const dispatch = useDispatch();
  const notes = useSelector(notesList);
  return (
    <div className="NotesList">
      {notes.map((note) => (
        <div key={note.id.toString()}>
          {console.log(note)}
          <h3>{note.created}</h3>
          <p>{note.content}</p>
          <p>{note.category}</p>
        </div>
      ))}
    </div>
  );
}

export default NotesList;
