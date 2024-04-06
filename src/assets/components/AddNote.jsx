import { useState } from "react";

export default function AddNote({onAddNewNote}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  

  function handelAddNote(e){
    e.preventDefault();

  if(!title || !description) return null ;
  const newNote = {title, description , completed:false , id: Date.now() , creatAt:new Date().toISOString()};
  onAddNewNote(newNote);
    setTitle('');
    setDescription('');

  }

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handelAddNote}>
        <input
          className="text-field"
          value={title}
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="text-field"
          value={description}
          type="text"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn--primary " type="submit">Add New Note</button>
      </form>
    </div>
  );
}
