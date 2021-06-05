import NotesHeader from "./layout/NotesHeader";
import NotesList from "./layout/NotesList";
import NotesSummary from "./layout/NotesSummary";

export default function App() {
  return (
    <div className="container">
      <NotesHeader />
      <NotesList />
      <NotesSummary />
    </div>
  );
}
