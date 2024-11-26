import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import AddToDoForm from "./AddTodoForm";

function App() {
  const [newTodo, setNewTodo] = useState("");
  return (
    <div>
      <h1>Todo List</h1>
      <AddToDoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>
      <TodoList />
    </div>
  );
}

export default App;
