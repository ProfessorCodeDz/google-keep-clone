import './App.css';
import React , {useState} from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Notes from './components/Notes';

function App() {
  //notes
  const [notes,setNotes] = useState([])
  const [datanotes,setDatanotes] = useState([])

  //delete item
  const DeleteItem = (i)=>{
    let newNotes = notes.filter(note => note !== notes[i])
    console.log(newNotes)
    setNotes(newNotes)
    setDatanotes(newNotes)
  }

  //handle search
  const Search = (text) => {
    let oldNotes = datanotes;
    let searchNotes = oldNotes.filter(note => note.title.includes(text) || note.text.includes(text))
    setNotes(searchNotes) 
  }



  return (
    <div className="App">
      <Header Search={Search}/>
      <AddTask setDatanotes={setDatanotes} datanotes={datanotes} setNotes={setNotes} notes={notes}/>
      <Notes DeleteItem={DeleteItem} notes={notes}/>
    </div>
  );
}

export default App;
