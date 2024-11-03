import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const toDoList = [
  {
    id: 1,
    title: 'Complete Lesson 1.1',
  },
  {
    id: 2,
    title: 'Go to the gym',
  },
  {
    id: 3,
    title: 'Meal prep for the week',
  },
];

function App() {
  return (
    <>
      <div>
        <h1>
          Todo List
        </h1>
        <ul>
          {toDoList.map(function (item){
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </div>
    </>
  )
}

export default App
