import { useState } from "react";

function AddToDoForm(props) {
  const handleAddTodo = (event) => {
    //prevent default behavior
    event.preventDefault();
    //get the title from the event
    const newTodoTitle = event.target.title.value;
    //pass the Title as an argument to prop call back handler
    props.onAddTodo(newTodoTitle);
    console.log(newTodoTitle);
    //reset the input field
    event.target.title.value = "";
  };
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input name="title" id="todoTitle" />
      <button>Add</button>
    </form>
  );
}

export default AddToDoForm;
