import { useState, useEffect, Fragment } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddToDoForm from "./components/AddTodoForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${
      import.meta.env.VITE_TABLE_NAME
    }?view=Grid%20view&sort[0][field]=title&sort[0][direction]=asc`;

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }
      const data = await response.json();

      console.log(data);

      data.records.sort((objectA, objectB) => {
        const titleA = objectA.fields.title;
        const titleB = objectB.fields.title;

        if (titleA < titleB) return 1;
        if (titleA > titleB) return -1;
        return 0;
      });

      const todos = data.records.map((todo) => {
        const newTodo = {
          title: todo.fields.title,
          id: todo.id,
        };
        return newTodo;
      });
      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  const addTodo = async (newTodo) => {
    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}`;

    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              title: newTodo.title,
            },
          },
        ],
      }),
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }
      const data = await response.json();
      const newTodoItem = {
        id: data.records[0].id,
        title: data.records[0].fields.title,
      };
      setTodoList((todoList) => [...todoList, newTodoItem]);
    } catch (error) {
      console.log("Failed to add todo:", error.message);
    }
  };

  const removeTodo = async (id) => {
    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}/${id}`;

    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error: ${response.status}`);

      const data = await response.json();
      if (data.deleted) {
        setTodoList((todoList) =>
          todoList.filter((todo) => todo.id !== String(id))
        );
      }
    } catch (error) {
      console.log("Failed to delete todo:", error.message);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <h1>Todo List</h1>
              <AddToDoForm onAddTodo={addTodo} />
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
              )}
            </Fragment>
          }
        />
        <Route path="/new" element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
