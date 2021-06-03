import "./App.css";
import NotesHeader from "./layout/NotesHeader";
import NotesList from "./layout/NotesList";
import CreateNoteBtn from "./components/CreateNoteBtn";

function App() {
  return (
    <div className="App">
      <NotesHeader />
      <NotesList />
      <CreateNoteBtn />
    </div>
  );
}

export default App;
