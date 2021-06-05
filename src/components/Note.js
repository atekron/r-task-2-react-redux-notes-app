import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  editNote,
  archiveNote,
  deleteNote,
  updateNote,
} from "../redux/notes/notesSlice";
import { findDates } from "../utils/utils";
import { categoriesList } from "../redux/notes/categoriesSlice";

export default function Note(props) {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesList);
  const [noteCategory, setNoteCategory] = useState(props.note.category);
  const [noteContent, setNoteContent] = useState(props.note.content);
  const handleUpdate = () => {
    const update = {
      id: props.note.id,
      content: noteContent,
      category: noteCategory,
    };
    return update;
  };

  if (!props.editMode) {
    return (
      <div className="note">
        <div className="note__body">
          <h3 className="note__created">{props.note.created}</h3>
          <p className="note__content">{props.note.content}</p>
          <p className="note__category">{props.note.category}</p>
          <p className="note__dates">{findDates(props.note.content)}</p>
        </div>
        <div className="note__settings">
          <button
            className="note__edit small-btn"
            hidden={props.note.archived}
            onClick={() => dispatch(editNote(props.note.id))}
          >
            Edit
          </button>

          <button
            className="note__archive small-btn"
            onClick={() => dispatch(archiveNote(props.note.id))}
          >
            {!props.note.archived ? "A" : "Una"}rchive
          </button>

          <button
            className="note__delete small-btn"
            onClick={() => dispatch(deleteNote(props.note.id))}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="note">
      <div className="note__body">
        <h3 className="note__created">{props.note.created}</h3>

        <label htmlFor="create-note__category">Choose category of note:</label>
        <select
          id="create-note__category"
          value={noteCategory}
          onChange={(e) => setNoteCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <label htmlFor="create-note__text">Write note: </label>
        <textarea
          name="text"
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          id="create-note__text"
          cols="30"
          rows="10"
        ></textarea>

        <p className="note__dates">{findDates(props.note.content)}</p>
      </div>
      <div className="note__settings">
        <button
          className="note__update small-btn"
          onClick={() => dispatch(updateNote(handleUpdate()))}
        >
          Update
        </button>
      </div>
    </div>
  );
}
