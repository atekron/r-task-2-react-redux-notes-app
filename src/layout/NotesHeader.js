import "./NotesHeader.css";
import { MdArchive } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const tableTitles = ["Name", "Created", "Category", "Content", "Dates"];

function NotesHeader() {
  return (
    <div className="NotesHeader">
      {tableTitles.map((title) => (
        <span key={title}>{title}</span>
      ))}
      <div>
        <MdArchive color="grey" fontSize="1.5rem" />
        <MdDelete color="grey" fontSize="1.5rem" />
      </div>
    </div>
  );
}

export default NotesHeader;
