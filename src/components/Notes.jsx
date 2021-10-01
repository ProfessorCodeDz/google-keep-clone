import './notes.css';
import Note from './Note';

export default function Notes(props) {
  const notes = props.notes  
  const Notes = notes.map((note,i)=>
    <Note DeleteItem={props.DeleteItem} i={i} key={i} note={note}/>
  )  

  return (
    <div className="notes">
        {Notes}
    </div>
  );
}


