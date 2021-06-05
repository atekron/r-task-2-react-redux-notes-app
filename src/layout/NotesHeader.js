// import { MdArchive } from "react-icons/md";
// import { MdDelete } from "react-icons/md";

import NotesCreateForm from "./NotesCreateForm";
import { useState } from "react";

export default function NotesHeader() {
  const [isFormVisible, setFormVisible] = useState(false);
  const handleFormDisplay = (isVisible) => {
    setFormVisible(isVisible);
  };
  return (
    <>
      <header className="header">
        <h1 className="header__title">Notes App</h1>
        <button
          className="header__create-btn"
          onClick={() => {
            return setFormVisible(!isFormVisible);
          }}
        >
          Create Note
        </button>
      </header>
      <NotesCreateForm visible={isFormVisible} onSave={handleFormDisplay} />
    </>
  );
}
