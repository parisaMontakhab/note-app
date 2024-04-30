import "./App.css";
import AddNote from "./assets/components/AddNote";
import NoteList from "./assets/components/NoteList";
import { useReducer, useState } from "react";
import NoteStatus from "./assets/components/NoteStatus";
import NoteHeader from "./assets/components/NoteHeader";


function notesReducer(state,action){

}



export default function App() {
  //const [notes, setNotes] = useState([]);
  const [state,dispatch] = useReducer(notesReducer,[]);
  const [sortBy,setSortBy] = useState("latest");

  function addNewNote(newNote) {
   // setNotes((prevNote) => [...prevNote, newNote]);
   dispatch({type:"add",payload:newNote})
  }

  function handelRemoveNote(item) {
    const newfiltered = notes.filter((a) => a.id !== item);
    setNotes(newfiltered);
  }

  function handelChangedStatus(item) {
   const newStatus = notes.map((note)=>(item===note.id ? {...note,completed:!note.completed} : note));
   setNotes(newStatus);
  }

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
    <div className="container">
      <NoteHeader notes={notes} sortBy={sortBy} onSort={(e)=>setSortBy(e.target.value)}/>
      <div className="note-app">
        <AddNote onAddNewNote={addNewNote} />
        <div className="note-container">
          <NoteStatus notes={notes}/>
          <NoteList
            notes={sortedNotes}
            onDelet={handelRemoveNote}
            onCompleted={handelChangedStatus}
          />
        </div>
      </div>
    </div>
  );
}
