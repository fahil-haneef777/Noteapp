import { useState } from 'react'

import './App.css'
import Sidebar from './assets/Components/Sidebar/Sidebar'
import Main from './assets/Components/Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    < div className='Notes'>
    <Sidebar/> 
    <Main/>
   </div>
    
  )
}

export default App
