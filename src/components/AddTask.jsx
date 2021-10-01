import './addtask.css';
import React , {useState} from 'react';

export default function AddTask(props) {
    
  const [placeholder,setPlaceholder] = useState('Take a note...')
  // form values      
  const [input,setInput] = useState('')
  const [textarea,setTextarea] = useState('')
  const [color,setColor] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    // reset text inputs
    setInput('')
    setTextarea('')
    setColor(e.target.children[3].value)
    // create note variable to save data
    let note = {
      title: e.target.children[0].value,
      text: e.target.children[1].value,
      color: e.target.children[3].value
    }
    // send data to App.js
    props.setNotes([...props.notes,note])
    props.setDatanotes([...props.datanotes,note])
    
  }


  return (
    <div className="addtask">
        <form onSubmit={handleSubmit} onFocus={()=>setPlaceholder("Title")}>
          <input onChange={(e)=>setInput(e.target.value)} value={input} name='title' type="text" placeholder={placeholder}/>
          {placeholder !== "Title" ? null : <textarea onChange={(e)=>setTextarea(e.target.value)} value={textarea}  name="text" placeholder="Take a note..."/>}
          {placeholder !== "Title" ? null : <button className="addbtn">Add</button>}
          {placeholder !== "Title" ? null : (
            <select onChange={(e)=>setColor(e.target.value)} className="color" style={{"background":color}}>
              <option value="#c19a6b" style={{"background":"#c19a6b"}}></option>
              <option value="#d2d2d2" style={{"background":"#d2d2d2"}}></option>
              <option value="#665446" style={{"background":"#665446"}}></option>
              <option value="#ff8b69" style={{"background":"#ff8b69"}}></option>
              <option value="#ef8080" style={{"background":"#ef8080"}}></option>
              <option value="#fcbbb4" style={{"background":"#fcbbb4"}}></option>
              <option value="#fbd567" style={{"background":"#fbd567"}}></option>
              <option value="#94dfe8" style={{"background":"#94dfe8"}}></option>
              <option value="#8358a2" style={{"background":"#8358a2"}}></option>
              <option value="#4d8b56" style={{"background":"#4d8b56"}}></option>
              <option value="#8d9fd0" style={{"background":"#8d9fd0"}}></option>
            </select>
          )}
        </form>
    </div>
  );
}


