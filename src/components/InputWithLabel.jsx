import { Fragment, useEffect, useRef } from "react";
import styles from "./InputWithLabel.module.css";
import PropTypes from "prop-types";

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

InputWithLabel.propTypes = {
  todoTitle: PropTypes.string,
  handleTitleChange: PropTypes.func,
  children: PropTypes.node,
};

export default InputWithLabel;
