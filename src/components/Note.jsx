import './note.css';

export default function Note(props) {

    const handleDelete = ()=>{
        props.DeleteItem(props.i)
    }

  return (
    <div className="note" style={{"background":props.note.color}}>
        <h2>{props.note.title}</h2>
        <p>{props.note.text}</p>
        <button onClick={handleDelete} className="delete">X</button>
    </div>
  );
}

