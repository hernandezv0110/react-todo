function TodoListItem({ id, todo }) {
  return <li key={id}>{todo.title}</li>;
}

export default TodoListItem;
