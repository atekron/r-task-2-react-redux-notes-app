import { useSelector } from "react-redux";
import { notesList } from "../redux/notes/notesSlice";
import { categoriesList } from "../redux/notes/categoriesSlice";

export default function NotesSummary() {
  const categories = useSelector(categoriesList);
  const notes = useSelector(notesList);
  return (
    <div className="summary">
      <h3 className="summary__title">Notes by Category:</h3>
      <div className="summary__content">
        <span className="summary__row">Active: </span>
        {categories.map((category) => {
          return (
            <p key={category}>
              {category}:{" "}
              <span>
                {notes.filter((note) => note.category === category).length}
              </span>
            </p>
          );
        })}
      </div>
      <div className="summary__content">
        <span className="summary__row">Archived: </span>
        {categories.map((category) => {
          return (
            <p key={category}>
              {category}:{" "}
              <span>
                {
                  notes.filter(
                    (note) => note.category === category && note.archived
                  ).length
                }
              </span>
            </p>
          );
        })}
      </div>
    </div>
  );
}
