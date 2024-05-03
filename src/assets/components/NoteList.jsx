import { useNotes, useNotesDispatch } from "../../context/NotesContext";

export default function NoteList({ sortBy}) {
  const notes = useNotes();
  

let sortedNotes = notes;

  if(sortBy === "latest"){
    sortedNotes = [...notes].sort((a,b)=> new Date(b.creatAt) - new Date(a.creatAt));
  }
  if(sortBy === "earliest"){
    sortedNotes = [...notes].sort((a,b)=> new Date(a.creatAt) - new Date(b.creatAt));
  }
  if(sortBy === "completed"){
    sortedNotes = [...notes].sort((a,b)=> new Date(b.completed) - new Date(a.completed));
  }



  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          
        
        />
      ))}
    </div>
  );
}

function NoteItem() {
  const dispatch = useNotesDispatch();
  
  const option = { day: "numeric", month: "long", year: "numeric" };
  return (
    <div className="note-item">
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={() => dispatch({type:"delete",payload:note.id})}>&times;</button>
          <input onClick={(e) => {
            const noteId = Number(e.target.value);
            dispatch({type:"complete",payload:noteId})
          }} type="checkbox" />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.creatAt).toLocaleDateString("en-Us", option)}
      </div>
    </div>
  );
}
