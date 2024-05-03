import { useNotes } from "../../context/NotesContext";


export default function NoteStatus() {
  const notes = useNotes();
    const allNotes = notes.length;
    const completedNotes = notes.filter((n)=>n.completed).length;
    const openNotes= allNotes-completedNotes;
    if(!allNotes) return <h2>No notes has already been added !</h2>
  return (
    <ul className="note-status">
        <li> All <span> {allNotes} </span> </li>
        <li> Completed <span> {completedNotes} </span> </li>
        <li> Open <span> {openNotes} </span> </li>
    </ul>
  )
}
