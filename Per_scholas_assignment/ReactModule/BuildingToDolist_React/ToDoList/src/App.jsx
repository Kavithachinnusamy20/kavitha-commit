import { useState } from 'react'
import TodoList from './TodoList'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ToDoList/> 
    </>
  )
}

export default App
