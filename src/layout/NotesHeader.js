import "./NotesHeader.css";
import { MdArchive } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function NotesHeader() {
  return (
    <div className="NotesHeader">
      <span>Name</span>
      <span>Created</span>
      <span>Category</span>
      <span>Content</span>
      <span>dates</span>
      <div>
        <MdArchive />
        <MdDelete />
      </div>
    </div>
  );
}

export default NotesHeader;
