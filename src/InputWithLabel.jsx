import { Fragment } from "react";

function InputWithLabel(props) {
  return (
    <Fragment>
      <label htmlFor="todoTitle">Title</label>
      <input
        name="title"
        id="todoTitle"
        value={props.todoTitle}
        onChange={props.handleTitleChange}
      />
    </Fragment>
  );
}

export default InputWithLabel;
