import { useState } from "react";
import { useDispatch } from "react-redux";
import { currentDate, generateID } from "../utils/utils";
import { createNote } from "../redux/notes/notesSlice";
// const note = {
//   id: 8,
//   created: "05/06/2021",
//   content: "awesom new note was just dispatched",
//   category: "Idea",
//   archived: false,
//   markDelete: false,
// };
// const tableTitles = ["Name", "Created", "Category", "Content", "Dates"];
// nextId: 8,
const categories = ["Task", "Random Thought", "Idea", "Quote"];

export default function NotesCreateForm(props) {
  const dispatch = useDispatch();
  const [noteCategory, setNoteCategory] = useState("Task");
  const [noteContent, setNoteContent] = useState("");
  let noteCreationDate = currentDate();
  let noteID = generateID();

  const handleSave = () => {
    const newNote = {
      id: noteID,
      created: noteCreationDate,
      content: noteContent,
      category: noteCategory,
      archived: false,
      markDelete: false,
    };
    props.onSave(false);
    setNoteCategory("");
    setNoteContent("");
    noteID = generateID();
    noteCreationDate = currentDate();
    return newNote;
  };

  return (
    <div
      style={{ display: props.visible ? "flex" : "none" }}
      className="create-note"
    >
      <h2 className="create-note__title">Create New Note</h2>
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

      <button
        className="create-note__save small-btn"
        onClick={() => dispatch(createNote(handleSave()))}
      >
        Save
      </button>
      <button className="create-note__edit small-btn">Save edit</button>
    </div>
  );
}
