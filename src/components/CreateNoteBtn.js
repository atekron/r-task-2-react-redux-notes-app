import { useDispatch } from "react-redux";
import { createNote } from "../redux/notes/notesSlice";

export default function CreateNoteBtn(props) {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(createNote(props.note))}>
      Create Note
    </button>
  );
}
