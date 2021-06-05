import "./App.css";
import NotesHeader from "./layout/NotesHeader";
import NotesList from "./layout/NotesList";
import CreateNoteBtn from "./components/CreateNoteBtn";

function App() {
  const note = {
    id: 8,
    created: "05/06/2021",
    content: "awesom new note was just dispatched",
    category: "Idea",
  };
  return (
    <div className="App">
      <NotesHeader />
      <NotesList />
      <CreateNoteBtn note={note} />
    </div>
  );
}

export default App;
