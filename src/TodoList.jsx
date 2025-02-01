import TodoListItem from "./TodoListItem";

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map(function (item) {
        return (
          <TodoListItem
            id={item.id}
            todo={item}
            onRemoveTodo={onRemoveTodo}
            key={item.id}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
