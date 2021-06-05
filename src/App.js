import NotesHeader from "./layout/NotesHeader";
// import NotesList from "./layout/NotesList";
// import CreateNoteBtn from "./components/CreateNoteBtn";

function App() {
  return (
    <div className="container">
      <NotesHeader />

      <nav className="nav">
        <button className="nav__all medium-btn">All Notes</button>
        <button className="nav__archive medium-btn">Archive</button>
      </nav>

      <div className="content">
        <div className="note">
          <div className="note__body" id="note.id">
            <h3 className="note__created">note.created</h3>
            <p className="note__content">note.content</p>
            <p className="note__category">note.category</p>
            <p className="note__dates">dates</p>
          </div>
          <div className="note__settings">
            <button className="note__edit small-btn">Edit</button>
            <button className="note__archive small-btn">Archive</button>
            <button className="note__delete small-btn">Delete</button>
          </div>
        </div>
      </div>
      <div className="summary">
        <h3 className="summary__title">Notes by Category:</h3>
        <div className="summary__content">
          <p>
            entry: <span>notesByCategory</span>
          </p>
          <p>
            entry: <span>notesByCategory</span>
          </p>
          <p>
            entry: <span>notesByCategory</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
