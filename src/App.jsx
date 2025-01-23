import { useState, useEffect, Fragment } from "react";
import "./App.css";
import TodoList from "./TodoList";
import AddToDoForm from "./AddTodoForm";

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(
    () => JSON.parse(localStorage.getItem("savedTodoList")) || []
  );

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    const newList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newList);
    console.log(newList);
  };

  return (
    <Fragment>
      <h1>Todo List</h1>
      <AddToDoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </Fragment>
  );
}

export default App;
