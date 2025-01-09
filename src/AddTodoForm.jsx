import { useState } from "react";

function AddToDoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    //prevent default behavior
    event.preventDefault();
    const newTodo = {
      title: todoTitle,
      id: Date.now(),
    };
    onAddTodo(newTodo);
    setTodoTitle("");
  };
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input
        name="title"
        id="todoTitle"
        value={todoTitle}
        onChange={handleTitleChange}
      />
      <button>Add</button>
    </form>
  );
}

export default AddToDoForm;
