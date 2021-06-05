import { useDispatch } from "react-redux";
import { editNote, archiveNote, deleteNote } from "../redux/notes/notesSlice";
import { findDates } from "../utils/utils";

export default function Note(props) {
  const dispatch = useDispatch();

  return (
    <div className="note">
      <div className="note__body">
        <h3 className="note__created">{props.note.created}</h3>
        <p className="note__content">{props.note.content}</p>
        <p className="note__category">{props.note.category}</p>
        <p className="note__dates">{findDates(props.note.content)}</p>
      </div>
      <div className="note__settings">
        <button className="note__edit small-btn" hidden={props.note.archived}>
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
