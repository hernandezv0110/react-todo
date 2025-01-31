function TodoListItem({ id, todo, onRemoveTodo }) {
  return (
    <li>
      {todo.title}
      <button type="button" onClick={() => onRemoveTodo(id)}>
        Remove
      </button>
    </li>
  );
}

export default TodoListItem;
