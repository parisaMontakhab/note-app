export default function NoteList({ notes, onDelet, onCompleted }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelet={onDelet}
          onCompleted={onCompleted}
        />
      ))}
    </div>
  );
}

function NoteItem({ note, onDelet, onCompleted }) {
  const option = { day: "numeric", month: "long", year: "numeric" };
  return (
    <div className="note-item">
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={() => onDelet(note.id)}>&times;</button>
          <input onClick={() => onCompleted(note.id)} type="checkbox" />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.creatAt).toLocaleDateString("en-Us", option)}
      </div>
    </div>
  );
}
