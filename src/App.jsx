import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import AddToDoForm from './AddTodoForm'

function App() {
  return (
    <>
      <div>
        <h1>
          Todo List
        </h1>
        <AddToDoForm></AddToDoForm>
        <TodoList></TodoList>
      </div>
    </>
  )
}

export default App
