import { useState, useEffect, Fragment } from "react";
import "./App.css";
import TodoList from "./TodoList";
import AddToDoForm from "./AddTodoForm";

function App() {
  // const [todoList, setTodoList] = useState(
  //   () => JSON.parse(localStorage.getItem("savedTodoList")) || []
  // );
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem("savedTodoList")) || [],
          },
        });
      }, 2000);
    }).then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]);

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
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </Fragment>
  );
}

export default App;
