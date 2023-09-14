import { useState } from 'react'

import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import Main from './Components/Main/Main'
import uuid from 'react-uuid'

function App() {
  const [notes, setnotes] = useState([])
  const [showmodel, setshowmodel] = useState(false);
  const[activenote,setactivenote]=useState(false)



  const ondelete = (idtodelete) => {
    setnotes(notes.filter((note) => note.id !== idtodelete))
  }

  const onaddnotes = () => {
    // const newnotes = {
    //   id: uuid(),
    //   title: 'untitled',
    //   body: '',
    //   lastModified: Date.now

    // };
    // console.log(notes)
    // setnotes([newnotes, ...notes])
    setshowmodel(!showmodel)
  };

  const CreateNotes = () => {
    setshowmodel(!showmodel)
    const newnotes = {
      id: uuid(),
      title: 'untitled',
      body: '',
      lastModified: Date.now

    };
    console.log(notes)
    setnotes([newnotes, ...notes])
  }

  return (
    < div className='Notes'>
      <Sidebar
        notes={notes}
        ondelete={ondelete}
        onaddnotes={onaddnotes}
        showmodel={showmodel}
        CreateNotes={CreateNotes}
        activenote={activenote}
        setactivenote={setactivenote}

      />
      <Main />
    </div>

  )
}

export default App
