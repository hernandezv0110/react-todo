import styles from "./TodoListItem.module.css";
import PropTypes from "prop-types";

function TodoListItem({ id, todo, onRemoveTodo }) {
  return (
    <li className={styles.ListItem}>
      <input type="checkbox" className={styles.Checkbox} />
      {todo.title}
      <button
        className={styles.ListButton}
        type="button"
        onClick={() => onRemoveTodo(id)}
      >
        Remove
      </button>
    </li>
  );
}

TodoListItem.propTypes = {
  id: PropTypes.string,
  todo: PropTypes.object,
  onRemoveTodo: PropTypes.func,
};

export default TodoListItem;
