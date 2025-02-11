import { Fragment, useEffect, useRef } from "react";
import styles from "./InputWithLabel.module.css";

function InputWithLabel({ todoTitle, handleTitleChange, children }) {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <Fragment>
      <label htmlFor="todoTitle">{children}</label>
      <input
        name="title"
        id="todoTitle"
        value={todoTitle}
        ref={inputRef}
        onChange={handleTitleChange}
        className={styles.InputBar}
      />
    </Fragment>
  );
}

export default InputWithLabel;
