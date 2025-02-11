import { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import styles from "./AddTodoForm.module.css";

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
    <form onSubmit={handleAddTodo} className={styles.InputForm}>
      <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      >
        Title
      </InputWithLabel>
      <button className={styles.FormButton}>Add</button>
    </form>
  );
}

export default AddToDoForm;
