import { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./TodoList";
import AddToDoForm from "./AddTodoForm";

function App() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  );

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div>
      <h1>Todo List</h1>
      <AddToDoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
