import { useState } from "react";
import { currentDate, generateID } from "../utils/utils";
// const note = {
//   id: 8,
//   created: "05/06/2021",
//   content: "awesom new note was just dispatched",
//   category: "Idea",
// };
// const tableTitles = ["Name", "Created", "Category", "Content", "Dates"];
// nextId: 8,
const categories = ["Task", "Random Thought", "Idea", "Quote"];

export default function NotesCreateForm(props) {
  const [noteCategory, setNoteCategory] = useState("Task");
  const noteCreationDate = currentDate();
  const noteID = generateID();
  return (
    <div
      style={{ display: props.visible ? "flex" : "none" }}
      className="create-note"
    >
      <h2 className="create-note__title">Create New Note</h2>
      <label htmlFor="create-note__category">Choose category of note:</label>
      <select
        value={noteCategory}
        onChange={(e) => setNoteCategory(e.target.value)}
        // id="create-note__category"
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
        id="create-note__text"
        cols="30"
        rows="10"
      ></textarea>
      <button className="create-note__save small-btn">Save</button>
      <button className="create-note__edit small-btn">Save edit</button>
      {console.log(noteCategory)}
      {console.log(noteCreationDate)}
      {console.log(noteID)}
    </div>
  );
}
