import styles from "./TodoListItem.module.css";

function TodoListItem({ id, todo, onRemoveTodo }) {
  return (
    <li className={styles.ListItem}>
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

export default TodoListItem;
